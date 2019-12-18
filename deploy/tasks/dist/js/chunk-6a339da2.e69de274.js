(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a339da2"],{"12b2":function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,a=e.props,n=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),a.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,n)}})},"169a":function(t,e,i){"use strict";i("6ec0");var a=i("c69d"),n=i("2b0e"),s=n["a"].extend().extend({name:"bootable",props:{lazy:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||!this.lazy||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},methods:{showLazyContent:function(t){return this.hasContent?t:void 0}}}),o=i("d9bd"),r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t){var e="undefined"===typeof t?"undefined":r(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var d={name:"detachable",mixins:[s],props:{attach:{type:null,default:!1,validator:l},contentClass:{default:""}},data:function(){return{hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount:function(){var t=this;this.$nextTick(function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach(function(e){e.elm&&t.$el.parentNode.insertBefore(e.elm,t.$el)})}})},mounted:function(){!this.lazy&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(function(t){t.elm&&t.elm.parentNode.removeChild(t.elm)})}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=this.$vnode&&this.$vnode.context.$options._scopeId;return t&&c({},t,"")},initDetach:function(){if(!this._isDestroyed&&this.$refs.content&&!this.hasDetached&&""!==this.attach&&!0!==this.attach&&"attach"!==this.attach){var t=void 0;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):Object(o["c"])("Unable to locate target "+(this.attach||"[data-app]"),this)}}}},u=i("14ec"),h=n["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:returnValue",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout(function(){e.isActive=!1})}}}),v=i("80d2");function f(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var m=n["a"].extend().extend({name:"stackable",data:function(){return{stackClass:"unpecified",stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(v["j"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(v["j"])(e)],a=[].concat(f(document.getElementsByClassName(this.stackClass))),n=0;n<a.length;n++)t.includes(a[n])||i.push(Object(v["j"])(a[n]));return Math.max.apply(Math,i)}}}),p=i("98a1"),g=i("c584"),b=i("6a18"),y=i("58df"),x=Object(y["a"])(b["a"]).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:b["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find(function(t){return!t.isComment&&" "!==t.text})}}),A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};function k(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]={name:"v-dialog",directives:{ClickOutside:g["a"]},mixins:[a["a"],d,u["a"],h,m,p["a"]],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return t={},k(t,("v-dialog "+this.contentClass).trim(),!0),k(t,"v-dialog--active",this.isActive),k(t,"v-dialog--persistent",this.persistent),k(t,"v-dialog--fullscreen",this.fullscreen),k(t,"v-dialog--scrollable",this.scrollable),k(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var t=this;this.$nextTick(function(){t.isBooted=t.isActive,t.isActive&&t.show()})},mounted:function(){"v-slot"===Object(v["i"])(this,"activator",!0)&&Object(o["a"])("v-dialog's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(!this.isActive||this.$refs.content.contains(t.target))&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.bind()},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onKeydown:function(t){if(t.keyCode===v["l"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick(function(){return e&&e.focus()})}this.$emit("keydown",t)},onFocusin:function(t){var e=event,i=e.target;if(![document,this.$refs.content].includes(i)&&!this.$refs.content.contains(i)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(function(t){return t.contains(i)})){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');a.length&&a[0].focus()}},getActivator:function(t){if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t&&(this.activatedBy=t.currentTarget||t.target),this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,i=e&&e.elm;if(i)return i}return null},genActivator:function(){var t=this;if(!this.hasActivator)return null;var e=this.disabled?{}:{click:function(e){e.stopPropagation(),t.getActivator(e),t.disabled||(t.isActive=!t.isActive)}};if("scoped"===Object(v["i"])(this,"activator")){var i=this.$scopedSlots.activator({on:e});return this.activatorNode=i,i}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},ref:"activator",on:e},this.$slots.activator)}},render:function(t){var e=this,i=[],a={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(a.style={maxWidth:"none"===this.maxWidth?void 0:Object(v["b"])(this.maxWidth),width:"auto"===this.width?void 0:Object(v["b"])(this.width)}),i.push(this.genActivator());var n=t("div",a,this.showLazyContent(this.$slots.default));return this.transition&&(n=t("transition",{props:{name:this.transition,origin:this.origin}},[n])),i.push(t("div",{class:this.contentClasses,attrs:A({tabIndex:"-1"},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(x,{props:{root:!0,light:this.light,dark:this.dark}},[n])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},i)}}},"4c94":function(t,e,i){},"58db":function(t,e,i){},"6ec0":function(t,e,i){},"7cd5":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-xl":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-card",[i("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"}}),i("v-card-title",[i("h2",[t._v("Lorem, ipsum dolor.")])]),i("v-card-text",[i("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo assumenda quasi sit beatae, saepe soluta et debitis vel repudiandae eligendi facere vero perferendis earum voluptatibus nulla? Repellendus, aperiam alias.")])]),i("v-card-actions",[i("v-btn",{attrs:{flat:"",color:"info"},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Action")])],1)],1)],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-card",[i("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"}}),i("v-card-title",[i("h2",[t._v("Lorem, ipsum dolor.")])]),i("v-card-text",[i("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo assumenda quasi sit beatae, saepe soluta et debitis vel repudiandae eligendi facere vero perferendis earum voluptatibus nulla? Repellendus, aperiam alias.")])]),i("v-card-actions",[i("v-btn",{attrs:{flat:"",color:"info"},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Action")])],1)],1)],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-card",[i("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/desert.jpg"}},[i("v-container",{attrs:{"fill-height":"",fluid:""}},[i("v-layout",{attrs:{"fill-height":"","align-center":""}},[i("v-flex",[i("p",{staticClass:"headline white--text text-xs-center"},[t._v("Lorem ipsum dolor sit.")])])],1)],1)],1),i("v-card-title",[i("h2",[t._v("Lorem, ipsum dolor.")])]),i("v-card-text",[i("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo assumenda quasi sit beatae, saepe soluta et debitis vel repudiandae eligendi facere vero perferendis earum voluptatibus nulla? Repellendus, aperiam alias.")])]),i("v-card-actions",[i("v-btn",{attrs:{flat:"",color:"info"},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Action")])],1)],1)],1)],1),i("v-dialog",{attrs:{width:"50%",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("h2",[t._v("Este es el titulo")])]),i("v-card-text",[i("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quis voluptatem. Aperiam quis blanditiis dignissimos. Consequuntur ipsum ducimus nostrum accusantium est dolore aliquam iusto obcaecati? Itaque quia possimus reprehenderit eveniet.")])]),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{color:"red",flat:""},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("Close")])],1)],1)],1)],1)},n=[],s={name:"Card",data:function(){return{dialog:!1}}},o=s,r=i("2877"),c=i("6544"),l=i.n(c),d=i("8336"),u=i("b0af"),h=i("99d9"),v=i("12b2"),f=i("a523"),m=i("169a"),p=(i("58db"),i("6a18")),g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},b=p["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){return t("hr",{class:g({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:this.$attrs,on:this.$listeners})}}),y=i("0e8f"),x=i("adda"),A=i("a722"),k=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=k.exports;l()(k,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:v["a"],VContainer:f["a"],VDialog:m["a"],VDivider:b,VFlex:y["a"],VImg:x["a"],VLayout:A["a"]})},"99d9":function(t,e,i){"use strict";var a=i("80d2"),n=i("b0af"),s=i("adda"),o=i("d9bd"),r=s["a"].extend({name:"v-card-media",mounted:function(){Object(o["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),c=i("12b2");i.d(e,"a",function(){return l}),i.d(e,"b",function(){return d});var l=Object(a["d"])("v-card__actions"),d=Object(a["d"])("v-card__text");n["a"],c["a"]},b0af:function(t,e,i){"use strict";i("4c94"),i("d0e7");var a=i("b64a"),n=i("2b0e");function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o=n["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?s({},"elevation-"+this.computedElevation,!0):{}}}}),r=i("23bf"),c=i("6a18"),l=i("58df"),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},u=Object(l["a"])(a["a"],o,r["a"],c["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return d({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),h=u,v=i("0d01"),f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e["a"]=Object(l["a"])(v["a"],h).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return f({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},h.options.computed.classes.call(this))},styles:function(){var t=f({},h.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,a=e.data;return a.style=this.styles,t(i,this.setBackgroundColor(this.color,a),this.$slots.default)}})},d0e7:function(t,e,i){}}]);
//# sourceMappingURL=chunk-6a339da2.e69de274.js.map