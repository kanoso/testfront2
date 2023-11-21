const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        let name2;

        let request = new XMLHttpRequest();
        request.open("GET", "http://jsonplaceholder.typicode.com/users");
        request.send();
        request.onload() = () => {
          console.log(request);
          if(request.status === 200) {
            name2 = request.response;
            console.log(JSON.parse(request.response));
          } else {
            name2 = request.status;
            console.log(`error ${request.status} ${request.statusText}`)
          }
        }

        return { body: `Hello, ${name}!` };
    }
});
