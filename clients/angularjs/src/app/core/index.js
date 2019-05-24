const angular = require('angular');
import routerSetup from './services/routes/router.service'
import BoardsModel from './models/boards.model';
import {
    ENDPOINT_URI
} from './config/const';


export default angular.module('app.core', [])
    .constant(routerSetup)
    .constant('ENDPOINT_URI', ENDPOINT_URI)
    .service('BoardsModel', BoardsModel)