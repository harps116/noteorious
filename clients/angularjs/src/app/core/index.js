const angular = require('angular');
import uiRouter from 'angular-ui-router'
import routerSetup from './services/routes/router.service'
import {
    boardsModel
} from './models/boards.model';
import {
    ENDPOINT_URI
} from './config/const';


export default angular.module('app.core', [uiRouter])
    .config(routerSetup)
    .constant('ENDPOINT_URI', ENDPOINT_URI)
    .factory('BoardsModel', boardsModel)