(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{261:function(t,e,a){"use strict";a.d(e,"a",(function(){return _}));a(519);var r=a(21),n=a(262),i=a(263),o=a(280),s=a(7),p=a(283),c=a(267),u=a(123),l=a(62),d=a(282),h=a(284),f=a(164),m=a(272),y=a(273),b=a(274),g=a(127),v=function(){return(v=Object.assign||function(t){for(var e,a=1,r=arguments.length;a<r;a++)for(var n in e=arguments[a])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},w=function(t,e,a,r){return new(a||(a=Promise))((function(n,i){function o(t){try{p(r.next(t))}catch(t){i(t)}}function s(t){try{p(r.throw(t))}catch(t){i(t)}}function p(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(o,s)}p((r=r.apply(t,e||[])).next())}))},Y=function(t,e){var a,r,n,i,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,r&&(n=2&i[0]?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){o.label=i[1];break}if(6===i[0]&&o.label<n[1]){o.label=n[1],n=i;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(i);break}n[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(t){i=[6,t],r=0}finally{a=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},_=function(){function t(t){var e=this;this.options={target:"#app",style:{transition:{duration:0,delay:0},glyphs:location.origin+location.pathname+"font/{fontstack}/{range}.pbf"}},this.urlParams=f.a,this.emitter=new r.EventEmitter,this.statusLayers={base:g.a,cities:y.a,lines:b.a,status1:g.a,status2:g.a},this.options=v(v({},this.options),t),this._markers=new m.a(this);var a=this.urlParams.get("year");a&&(this.options.currentYear=parseInt(a,10));var n=this.options,i=n.fromYear,o=n.currentYear;i&&o&&o<i&&(this.options.currentYear=i),this.updateDataByYear=Object(s.debounce)((function(t){return e._updateDataByYear(t)}),300),this.createWebMap().then((function(){e._buildApp()}))}return t.prototype.createWebMap=function(){return w(this,void 0,Promise,(function(){var t,e,a=this;return Y(this,(function(r){switch(r.label){case 0:return t=v({},this.options),[4,(e=new n.WebMap({mapAdapter:new o.a,starterKits:[new i.QmsKit]})).create(t)];case 1:return r.sent(),this.timeMap=new h.a(e,{fromYear:this.options.fromYear,getStatusLayer:function(t){return a._getStatusLayer(t)},onStepReady:function(t){return a.updateDataByYear(t)},onLayerUpdate:function(t){return a.updateDataByYear(t)},onReset:function(){return a.onReset()}}),this.timeMap.emitter.once("loading:finish",(function(){a._setSelectedLayerFromUrl()})),this.options.currentYear&&(this.timeMap.currentYear=this.options.currentYear),e.addBaseLayer("QMS",{id:"baselayer",qmsId:448,visibility:!0}),this.webMap=e,[2,e]}}))}))},t.prototype.onReset=function(){this._markers&&this.updateDataByYear(this.timeMap.currentYear)},t.prototype.getTimeStop=function(t){var e=this.options.timeStops.find((function(e){return t<e.toYear}));return e?e.name:""},t.prototype.updateLayersColor=function(){},t.prototype._updateDataByYear=function(t){var e=this._markers._getPointIdByYear(t);this._markers.updatePoint(e);var a=this._findAreaStatByYear(t);this._updatePeriodBlockByYear(t,a),this._updateYearStatBlockByYear(t,a),this.urlParams.set("year",String(t))},t.prototype._setSelectedLayerFromUrl=function(){var t=f.a.get("id");if(t){var e=this.timeMap.getTimeGroup("base");e&&e.select(t)}},t.prototype._buildApp=function(){var t=this;Object(c.a)((function(e){t.timeMap.buildTimeMap(e),t.slider=t._createSlider(),t._createHeader(),t._createAffiliatedLogos(),t.controls=new d.a(t),t.controls.updateControls(),t.webMap.onMapLoad((function(){t.timeMap.updateByYear(t.timeMap.currentYear)})),t.emitter.emit("build"),t._addEventsListeners()})),Object(u.b)().then((function(e){t._markers.setPoints(e)}))},t.prototype._getStatusLayer=function(t){var e={name:t.name,baseUrl:this.options.baseUrl,opacity:t.opacity,manualOpacity:!0,filterIdField:"fid"},a=this.statusLayers[t.name];if(a)return new a(this,e)},t.prototype._createSlider=function(){var t=this,e=new p.a({type:"range",min:this.timeMap._minYear,max:this.timeMap._maxYear,step:1,animationStep:this.options.animationStep||1,value:this.timeMap.currentYear,animationDelay:this.options.animationDelay||200,stepReady:function(e,a,r){t.timeMap._stepReady(e,a)}});e.emitter.on("change",(function(e){e!==t.timeMap.currentYear&&e!==t.timeMap.nextYear&&(t.timeMap.currentYear=e,t.timeMap.updateByYear(e))}));var a=this.webMap.mapAdapter.getContainer();return a&&a.appendChild(e.onAdd(this.webMap)),e},t.prototype._createHeader=function(){var t=document.createElement("div");t.className="font-effect-shadow-multiple app-header";var e=document.createElement("span");e.innerHTML="\n      Границы России "+this.timeMap._minYear+"-"+this.timeMap._maxYear+" гг.",t.appendChild(e),t.appendChild(Object(l.a)(this));var a=this.webMap.mapAdapter.getContainer();return a&&a.appendChild(t),t},t.prototype._createAffiliatedLogos=function(){var t=document.createElement("div");t.className="app-affiliated-logos",t.appendChild(Object(l.b)(this));var e=this.webMap.mapAdapter.getContainer();return e&&e.appendChild(t),t},t.prototype._updatePeriodBlockByYear=function(t,e){var a=this._findPeriodByYear(t);a&&this.controls.periodsPanelControl&&this.controls.periodsPanelControl.updatePeriod(a,e)},t.prototype._findPeriodByYear=function(t){return(this.options.periods||[]).find((function(e){var a=t>=e.years_from;return a&&e.years_to&&(a=t<=e.years_to),a}))},t.prototype._updateYearStatBlockByYear=function(t,e){if(this.controls.yearsStatPanelControl){var a=this._findYearStatsByYear(t);this.controls.yearsStatPanelControl.updateYearStats(a,e)}},t.prototype._findAreaStatByYear=function(t){if(this.options.areaStat)return this.options.areaStat.find((function(e){return e.year===t}))},t.prototype._findYearStatsByYear=function(t){return t=Number(t),(this.options.yearsStat||[]).filter((function(e){return t===e.year}))},t.prototype._addEventsListeners=function(){var t=this;this.controls.yearsStatPanelControl&&this.controls.yearsStatPanelControl.emitter.on("update",(function(e){var a=e.yearStat;t._markers.updateActiveMarker(a)})),this.webMap.emitter.on("preclick",(function(){t.timeMap.unselect()}))},t}()},519:function(t,e,a){},90:function(t){t.exports=JSON.parse('{"name":"russia-history","version":"4.0.3","description":"","main":"src/app.js","scripts":{"start":"webpack-dev-server --progress --hot --open","build":"webpack --progress","watch":"rimraf ./dist && npm run build -- --watch","dev":"rimraf ./dist && npm run build","data":"node ./scripts/generator.js","prod":"rimraf ./dist && npm run build -- --mode=production","docker":"docker build -t registry.nextgis.com/runivers:latest . && docker push registry.nextgis.com/runivers:latest"},"author":"","license":"ISC","dependencies":{"@nextgis/dialog":"1.0.0-alpha.2","@nextgis/mapboxgl-map-adapter":"1.0.0-alpha.2","@nextgis/ngw-connector":"1.0.0-alpha.2","@nextgis/qms-kit":"1.0.0-alpha.2","@nextgis/url-runtime-params":"1.0.0-alpha.2","@nextgis/webmap":"1.0.0-alpha.2","@types/color":"^3.0.1","@types/node":"^14.0.19","@types/proj4":"^2.5.0","color":"^3.1.2","core-js":"^3.6.5","dialog-polyfill":"^0.5.1","mapbox-gl":"^1.11.1","nouislider":"14.6.0","proj4":"^2.6.2","regenerator":"^0.14.5","reset-css":"^5.0.1","wnumb":"^1.2.0"},"devDependencies":{"@nextgis/eslint-config":"1.0.0-alpha.2","@types/geojson":"^7946.0.7","@types/mapbox-gl":"^1.11.1","@types/nouislider":"^9.0.7","autoprefixer":"^9.8.4","babel-loader":"^8.1.0","copy-webpack-plugin":"^6.0.3","css-loader":"^3.6.0","csv-loader":"^3.0.3","eslint":"^7.4.0","eslint-loader":"^4.0.2","favicons-webpack-plugin":"3.0.1","file-loader":"^6.0.0","html-webpack-plugin":"^4.3.0","image-webpack-loader":"^6.0.0","mini-css-extract-plugin":"^0.9.0","minimist":"^1.2.5","node-sass":"^6.0.1","papaparse":"^5.2.0","postcss-loader":"^3.0.0","precss":"^4.0.0","sass-loader":"^10.0.5","style-loader":"^1.2.1","ts-loader":"^7.0.5","typescript":"^3.9.6","url-loader":"^4.1.0","webpack":"^4.43.0","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0"}}')}}]);