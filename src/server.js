const Hapi = require('@hapi/hapi');
const routes = require('./api/notes/routes');
 
const init = async () => {
  const server = Hapi.server({
    port: 5001,
    host: 'localhost',
    routes: {
        cors: {
          origin: ['*'],
        },
      },
  });
 
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();