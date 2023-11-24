const { app } = require("@azure/functions");
const fetch = require("node-fetch-commonjs");

app.http("message", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const requestData = await request.json();
    let apikey = requestData.apikey;
    let guid = requestData.guid;
    let url = "https://api.newrelic.com/graphql";
    let size = "&width=1700";

    let pages = await getDashboardPages(context, url, apikey, guid);

    await asyncForEach(pages, async (page) => {
      let pdf_url = await generateSnapshot(context, apikey, page.guid, url);
      page.urlPdf = pdf_url + size;
    });

    context.log(pages);

    return {
      body: JSON.stringify(pages),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  },
});


async function getDashboardPages(context, url, apikey, guid){
  try {
    let dataDashboard = JSON.stringify({
      query: `{
            actor {
              entitySearch(query: "parentId ='${guid}' or id ='${guid}'") {
                results {
                  entities {
                    guid
                    name
                    ... on DashboardEntityOutline {
                      guid
                      name
                      dashboardParentGuid
                    }
                  }
                }
              }
            }
          }`,
    });

    return await fetch(url, {
      method: "POST",
      body: dataDashboard,
      headers: {
        "Content-Type": "application/json",
        "API-Key": apikey,
      },
    })
    .then((res) => res.json())
    .catch((error) => {
      context.log("Error: " + error);
      if (error.response) {
        context.log(
          "Server responded with status code:",
          error.response.status
        );
        context.log("Response data:", error.response.data);
      } else if (error.request) {
        context.log("No response received:", error.request);
      } else {
        context.log("Error creating request:", error.message);
      }
      return error;
    })
    .then((response) => {
      try {
        let bodyObj = JSON.parse(JSON.stringify(response));
        let entities = bodyObj.data.actor.entitySearch.results.entities;
        if (entities.length > 0) {
          if (entities.length > 1) {
            guidReturn = entities.filter((e) => {
              return e.dashboardParentGuid !== null;
            });
          } else {
            guidReturn = [entities[0]]; //one pager
          }
        } else {
          return "Error. No entities returned from search";
        }
      } catch (error) {
        return error;
      }


      return guidReturn;
    });

  } catch (error) {
    context.log(error);
  }
}

async function generateSnapshot(context, apikey, guid, url){
  let guidReturn;
  const data = JSON.stringify({
    "query": `mutation { dashboardCreateSnapshotUrl(guid: \"${guid}\")}`
  })

  return await fetch(url, {
    method: "POST",
    body: data,
    headers: {
      'Content-Type': 'application/json',
      'API-Key': apikey,
    },
  })
  .then((res) =>  res.json())
  .then(function (resp) {
    try {
      let bodyObj = JSON.parse(JSON.stringify(resp));
      if(bodyObj.data && bodyObj.data && bodyObj.data.dashboardCreateSnapshotUrl) {
        guidReturn = (bodyObj.data.dashboardCreateSnapshotUrl);
      } else {
        context.log('else');
        guidReturn = ("Snapshot URL not found in body: "+ resp)
      }
    } catch (error) {
      context.log('catch');
      context.log(error);
      return error;
    }

    return guidReturn;
  })
  .catch(function (error) {
    if (error.response) {
      context.log(
        'Server responded with status code:',
        error.response.status,
      );
      context.log('Response data:', error.response.data);
    } else if (error.request) {
      context.log('No response received:', error.request);
    } else {
      context.log('Error creating request:', error.message);
    }
  })
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

