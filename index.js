/**
 * Created by ridel1e on 03/11/2016.
 */

import express from 'express';

const server = express();


const packages = [{
  name: 'Such Package',
  version: 'v1.0.2',
  author: 'Ridel1e',
  stars: 100,
  description: 'such package is a great package',
  tags: ['frontend', 'angular']
}, {
  name: 'Valid Invalid',
  version: 'v1.0.0,',
  author: 'Ridel1e',
  stars: 2,
  description: 'always invalid... or valid, don\'t know',
  tags: ['frontend', 'angular', 'validation']
}, {
  name: 'Useless Library',
  version: 'v1.0.3',
  author: 'Bitches',
  stars: 50,
  description: 'another useless lib',
  tags: ['frontend', 'angular', 'useless']
}, {
  name: 'Such Package',
  version: 'v1.0.2',
  author: 'Ridel1e',
  stars: 100,
  description: 'such package is a great package',
  tags: ['frontend', 'angular']
}, {
  name: 'Valid Invalid',
  version: 'v1.0.0,',
  author: 'Ridel1e',
  stars: 2,
  description: 'always invalid... or valid, don\'t know',
  tags: ['frontend', 'angular', 'validation']
}, {
  name: 'Useless Library',
  version: 'v1.0.3',
  author: 'Bitches',
  stars: 50,
  description: 'another useless lib',
  tags: ['frontend', 'angular', 'useless']
}];

const port =  process.env.PORT || 5000;
server.set('port', port);

server.use(express.static(`${__dirname}/public`));

server.all('*', function (req, res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

// server.get('/packages', function (req, res) {
//   res.json(packages);
// });

server.listen(server.get('port'), () =>
  console.log(`server listening on port ${server.get('port')}`));