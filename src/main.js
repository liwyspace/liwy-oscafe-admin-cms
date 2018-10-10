// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import portalSDK from 'PortalSDK';
import {routes} from './router/routes.js';

Vue.config.productionTip = false;

console.log('PortalSDK:');
console.log(portalSDK);

portalSDK.addRoutes('liwyCMS', routes);
