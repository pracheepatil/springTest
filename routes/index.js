const express = require('express');
const router = express.Router();
const routerMapData = require('./routeMap');

const controllerPath = '../controller';
const path = require('path');

for(let [controllerFile, routeMap] of Object.entries(routerMapData)){
    const controllers = require(path.join(controllerPath, controllerFile));
    for(let [method, routes] of Object.entries(routeMap))
      for(let route of routes){
          for(let [url, controllerFunction] of Object.entries(route)){
              router[method][url, controllers[controllerFunction]]
          }
      }
}

module.exports = router;