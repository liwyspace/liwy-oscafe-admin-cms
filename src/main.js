import Vue from 'Vue';

import portalSDK from 'PortalSDK';
import {routes} from './router/routes.js';

console.log('------ liwyCMS 开始加载 ------');

Vue.config.productionTip = false;

portalSDK.addRoutes('liwyCMS', routes);
console.log('------ LiwyCMS 加载完成 ------');
