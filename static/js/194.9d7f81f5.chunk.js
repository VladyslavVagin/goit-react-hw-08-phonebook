(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[194],{854:function(e,t,n){"use strict";var r=n(4137),i=n(184);t.Z=function(){return(0,i.jsx)(r.Z1,{visible:!0,height:"24",width:"24",color:"#d18f00",ariaLabel:"three-circles-loading",wrapperStyle:{},wrapperClass:""})}},3098:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Pe}});var r,i,a=n(168),o=n(1087),c=n(7689),s=n(4925),u=n(7326),l=n(136),A=n(3668),f=n(3144),p=n(5671),d=n(3433),h=n(4942),g=n(1413),m=n(9439),y=n(2791),v=n(5121),x=n.n(v),b=n(2176),T=n.n(b),Z=n(9613),j=n.n(Z),w=["children"],M=["children"],k=function(e){return e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e}(k||{}),E={rel:["amphtml","canonical","alternate"]},O={type:["application/ld+json"]},C={charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},B=Object.values(k),N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D=Object.entries(N).reduce((function(e,t){var n=(0,m.Z)(t,2),r=n[0];return e[n[1]]=r,e}),{}),S="data-rh",U="defaultTitle",I="defer",R="encodeSpecialCharacters",Q="onChangeClientState",L="titleTemplate",H="prioritizeSeoTags",P=function(e,t){for(var n=e.length-1;n>=0;n-=1){var r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},V=function(e){var t=P(e,"title"),n=P(e,L);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,(function(){return t}));var r=P(e,U);return t||r||void 0},F=function(e){return P(e,Q)||function(){}},J=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return(0,g.Z)((0,g.Z)({},e),t)}),{})},z=function(e,t){return t.filter((function(e){return"undefined"!==typeof e.base})).map((function(e){return e.base})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i+=1){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&(n="Helmet: ".concat(e,' should be of type "Array". Instead found type "').concat(typeof t[e],'"'),console&&"function"===typeof console.warn&&console.warn(n)),!1);var n})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n,a=Object.keys(e),o=0;o<a.length;o+=1){var c=a[o],s=c.toLowerCase();-1===t.indexOf(s)||"rel"===n&&"canonical"===e[n].toLowerCase()||"rel"===s&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||"innerHTML"!==c&&"cssText"!==c&&"itemprop"!==c||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o+=1){var c=a[o],s=(0,g.Z)((0,g.Z)({},r[c]),i[c]);r[c]=s}return e}),[]).reverse()},X=function(e,t){if(Array.isArray(e)&&e.length)for(var n=0;n<e.length;n+=1){if(e[n][t])return!0}return!1},G=function(e){return Array.isArray(e)?e.join(""):e},Y=function(e,t){return Array.isArray(e)?e.reduce((function(e,n){return!function(e,t){for(var n=Object.keys(e),r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1}(n,t)?e.default.push(n):e.priority.push(n),e}),{priority:[],default:[]}):{default:e,priority:[]}},W=function(e,t){return(0,g.Z)((0,g.Z)({},e),{},(0,h.Z)({},t,void 0))},q=["noscript","script","style"],_=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?"".concat(n,'="').concat(e[n],'"'):"".concat(n);return t?"".concat(t," ").concat(r):r}),"")},ee=function(e,t,n,r){var i=$(n),a=G(t);return i?"<".concat(e," ").concat(S,'="true" ').concat(i,">").concat(_(a,r),"</").concat(e,">"):"<".concat(e," ").concat(S,'="true">').concat(_(a,r),"</").concat(e,">")},te=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.reduce((function(t,r){var i=r,a=Object.keys(i).filter((function(e){return!("innerHTML"===e||"cssText"===e)})).reduce((function(e,t){var r="undefined"===typeof i[t]?t:"".concat(t,'="').concat(_(i[t],n),'"');return e?"".concat(e," ").concat(r):r}),""),o=i.innerHTML||i.cssText||"",c=-1===q.indexOf(e);return"".concat(t,"<").concat(e," ").concat(S,'="true" ').concat(a).concat(c?"/>":">".concat(o,"</").concat(e,">"))}),"")},ne=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},re=function(e,t,n){var r=(0,h.Z)({key:t},S,!0),i=ne(n,r);return[y.createElement("title",i,t)]},ie=function(e,t){return t.map((function(t,n){var r=(0,h.Z)({key:n},S,!0);return Object.keys(t).forEach((function(e){var n=N[e]||e;if("innerHTML"===n||"cssText"===n){var i=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:i}}else r[n]=t[e]})),y.createElement(e,r)}))},ae=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(e){case"title":return{toComponent:function(){return re(0,t.title,t.titleAttributes)},toString:function(){return ee(e,t.title,t.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return ne(t)},toString:function(){return $(t)}};default:return{toComponent:function(){return ie(e,t)},toString:function(){return te(e,t,n)}}}},oe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=void 0===r||r,a=e.htmlAttributes,o=e.noscriptTags,c=e.styleTags,s=e.title,u=void 0===s?"":s,l=e.titleAttributes,A=e.prioritizeSeoTags,f=e.linkTags,p=e.metaTags,h=e.scriptTags,g={toComponent:function(){},toString:function(){return""}};if(A){var m=function(e){var t=e.metaTags,n=e.linkTags,r=e.scriptTags,i=e.encode,a=Y(t,C),o=Y(n,E),c=Y(r,O);return{priorityMethods:{toComponent:function(){return[].concat((0,d.Z)(ie("meta",a.priority)),(0,d.Z)(ie("link",o.priority)),(0,d.Z)(ie("script",c.priority)))},toString:function(){return"".concat(ae("meta",a.priority,i)," ").concat(ae("link",o.priority,i)," ").concat(ae("script",c.priority,i))}},metaTags:a.default,linkTags:o.default,scriptTags:c.default}}(e);g=m.priorityMethods,f=m.linkTags,p=m.metaTags,h=m.scriptTags}return{priority:g,base:ae("base",t,i),bodyAttributes:ae("bodyAttributes",n,i),htmlAttributes:ae("htmlAttributes",a,i),link:ae("link",f,i),meta:ae("meta",p,i),noscript:ae("noscript",o,i),script:ae("script",h,i),style:ae("style",c,i),title:ae("title",{title:u,titleAttributes:l},i)}},ce=[],se=!("undefined"===typeof window||!window.document||!window.document.createElement),ue=(0,f.Z)((function e(t,n){var r=this;(0,p.Z)(this,e),(0,h.Z)(this,"instances",[]),(0,h.Z)(this,"canUseDOM",se),(0,h.Z)(this,"context",void 0),(0,h.Z)(this,"value",{setHelmet:function(e){r.context.helmet=e},helmetInstances:{get:function(){return r.canUseDOM?ce:r.instances},add:function(e){(r.canUseDOM?ce:r.instances).push(e)},remove:function(e){var t=(r.canUseDOM?ce:r.instances).indexOf(e);(r.canUseDOM?ce:r.instances).splice(t,1)}}}),this.context=t,this.canUseDOM=n||!1,n||(t.helmet=oe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))})),le=y.createContext({}),Ae=(r=function(e){(0,l.Z)(n,e);var t=(0,A.Z)(n);function n(e){var r;return(0,p.Z)(this,n),r=t.call(this,e),(0,h.Z)((0,u.Z)(r),"helmetData",void 0),r.helmetData=new ue(r.props.context||{},n.canUseDOM),r}return(0,f.Z)(n,[{key:"render",value:function(){return y.createElement(le.Provider,{value:this.helmetData.value},this.props.children)}}]),n}(y.Component),(0,h.Z)(r,"canUseDOM",se),r),fe=function(e,t){var n,r=document.head||document.querySelector("head"),i=r.querySelectorAll("".concat(e,"[").concat(S,"]")),a=[].slice.call(i),o=[];return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))if("innerHTML"===i)r.innerHTML=t.innerHTML;else if("cssText"===i)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=i,s="undefined"===typeof t[c]?"":t[c];r.setAttribute(i,s)}r.setAttribute(S,"true"),a.some((function(e,t){return n=t,r.isEqualNode(e)}))?a.splice(n,1):o.push(r)})),a.forEach((function(e){var t;return null===(t=e.parentNode)||void 0===t?void 0:t.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},pe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(S),i=r?r.split(","):[],a=(0,d.Z)(i),o=Object.keys(t),c=0,s=o;c<s.length;c++){var u=s[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===i.indexOf(u)&&i.push(u);var A=a.indexOf(u);-1!==A&&a.splice(A,1)}for(var f=a.length-1;f>=0;f-=1)n.removeAttribute(a[f]);i.length===a.length?n.removeAttribute(S):n.getAttribute(S)!==o.join(",")&&n.setAttribute(S,o.join(","))}},de=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,A=e.title,f=e.titleAttributes;pe("body",r),pe("html",i),function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=G(e)),pe("title",t)}(A,f);var p={baseTag:fe("base",n),linkTags:fe("link",a),metaTags:fe("meta",o),noscriptTags:fe("noscript",c),scriptTags:fe("script",u),styleTags:fe("style",l)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,d,h)},he=null,ge=function(e){he&&cancelAnimationFrame(he),e.defer?he=requestAnimationFrame((function(){de(e,(function(){he=null}))})):(de(e),he=null)},me=function(e){(0,l.Z)(n,e);var t=(0,A.Z)(n);function n(){var e;(0,p.Z)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,h.Z)((0,u.Z)(e),"rendered",!1),e}return(0,f.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!j()(e,this.props)}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this.props.context.helmetInstances.remove(this),this.emitChange()}},{key:"emitChange",value:function(){var e,t=this.props.context,n=t.helmetInstances,r=t.setHelmet,i=null,a=(e=n.get().map((function(e){var t=(0,g.Z)({},e.props);return delete t.context,t})),{baseTag:z(["href"],e),bodyAttributes:J("bodyAttributes",e),defer:P(e,I),encode:P(e,R),htmlAttributes:J("htmlAttributes",e),linkTags:K("link",["rel","href"],e),metaTags:K("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:K("noscript",["innerHTML"],e),onChangeClientState:F(e),scriptTags:K("script",["src","innerHTML"],e),styleTags:K("style",["cssText"],e),title:V(e),titleAttributes:J("titleAttributes",e),prioritizeSeoTags:X(e,H)});Ae.canUseDOM?ge(a):oe&&(i=oe(a)),r(i)}},{key:"init",value:function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())}},{key:"render",value:function(){return this.init(),null}}]),n}(y.Component),ye=(i=function(e){(0,l.Z)(n,e);var t=(0,A.Z)(n);function n(){return(0,p.Z)(this,n),t.apply(this,arguments)}return(0,f.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!x()(W(this.props,"helmetData"),W(e,"helmetData"))}},{key:"mapNestedChildrenToProps",value:function(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error("<".concat(e.type," /> elements are self-closing and can not contain children. Refer to our API for more information."))}}},{key:"flattenArrayTypeChildren",value:function(e,t,n,r){return(0,g.Z)((0,g.Z)({},t),{},(0,h.Z)({},e.type,[].concat((0,d.Z)(t[e.type]||[]),[(0,g.Z)((0,g.Z)({},n),this.mapNestedChildrenToProps(e,r))])))}},{key:"mapObjectTypeChildren",value:function(e,t,n,r){var i;switch(e.type){case"title":return(0,g.Z)((0,g.Z)({},t),{},(i={},(0,h.Z)(i,e.type,r),(0,h.Z)(i,"titleAttributes",(0,g.Z)({},n)),i));case"body":return(0,g.Z)((0,g.Z)({},t),{},{bodyAttributes:(0,g.Z)({},n)});case"html":return(0,g.Z)((0,g.Z)({},t),{},{htmlAttributes:(0,g.Z)({},n)});default:return(0,g.Z)((0,g.Z)({},t),{},(0,h.Z)({},e.type,(0,g.Z)({},n)))}}},{key:"mapArrayTypeChildrenToProps",value:function(e,t){var n=(0,g.Z)({},t);return Object.keys(e).forEach((function(t){n=(0,g.Z)((0,g.Z)({},n),{},(0,h.Z)({},t,e[t]))})),n}},{key:"warnOnInvalidChildren",value:function(e,t){return T()(B.some((function(t){return e.type===t})),"function"===typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types ".concat(B.join(", ")," are allowed. Helmet does not support rendering <").concat(e.type,"> elements. Refer to our API for more information.")),T()(!t||"string"===typeof t||Array.isArray(t)&&!t.some((function(e){return"string"!==typeof e})),"Helmet expects a string as a child of <".concat(e.type,">. Did you forget to wrap your children in braces? ( <").concat(e.type,">{``}</").concat(e.type,"> ) Refer to our API for more information.")),!0}},{key:"mapChildrenToProps",value:function(e,t){var n=this,r={};return y.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=(0,s.Z)(i,w),c=Object.keys(o).reduce((function(e,t){return e[D[t]||t]=o[t],e}),{}),u=e.type;switch("symbol"===typeof u?u=u.toString():n.warnOnInvalidChildren(e,a),u){case"Symbol(react.fragment)":t=n.mapChildrenToProps(a,t);break;case"link":case"meta":case"noscript":case"script":case"style":r=n.flattenArrayTypeChildren(e,r,c,a);break;default:t=n.mapObjectTypeChildren(e,t,c,a)}}})),this.mapArrayTypeChildrenToProps(r,t)}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,s.Z)(e,M),r=(0,g.Z)({},n),i=n.helmetData;(t&&(r=this.mapChildrenToProps(t,r)),!i||i instanceof ue)||(i=new ue(i.context,!0),delete r.helmetData);return i?y.createElement(me,(0,g.Z)((0,g.Z)({},r),{},{context:i.value})):y.createElement(le.Consumer,null,(function(e){return y.createElement(me,(0,g.Z)((0,g.Z)({},r),{},{context:e}))}))}}]),n}(y.Component),(0,h.Z)(i,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),i);var ve,xe,be,Te=n.p+"static/media/safari-pinned-tab.c69cc48e8a85e47f1f0bfb78ad3cba1c.svg",Ze=n.p+"static/media/site.92da0b25e36381c7ae3c.webmanifest",je=n(184),we=function(){return(0,je.jsxs)(ye,{children:[(0,je.jsx)("title",{children:"Phonebook App"}),(0,je.jsx)("meta",{charset:"utf-8"}),(0,je.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,je.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,je.jsx)("meta",{name:"description",content:"Web site created using create-react-app"}),(0,je.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,je.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,je.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAAAAAAYplnuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnDBkOOTeT03ExAAADsElEQVR42u3dT0gUURwH8NnFass/W0hpQoIoaWISZCZiYkmHToaVgVIHIzxofw52MSIIKsjoUEt5MowoYSMoykMRpmWZFh5sqSASQcGDJf6NUtcuUru5O2/evPdmfiPf723m/d6bD8s4s87PQdeC5ry47QYATTlAAw00gQANNNAEAjTQQFPIAk9uW+ca0GE48pMGGmigCcSR6Bidsbmh0K2UlXZbDaGH0kK3+rbZbf0bR54eQAMNNIEADTTQBAI00EATCNBAA00gQAO93NB6T5jWng/dSja1flrmprjZ6W+BUalqhT0Xd2nz8OLE4MfL2XwuvZ6LOrSrMhA+uS2fPDqjY8ns+aY4OWhVP4jlH4qX7HPX9GZJWVwRusafEGl31muuU8RadNXNKOsmPsulis5rjrqs96GXJnp1q06nI90nfgC9m8tofejWhVSja55N1xutam4XVutcWQbCCvuMXvISJ/Wvm28NuSy+5NUyrsYFRaJHkI92HWVVMAusR+eksyrKXOTQJcyKDZzfnSxAb2WX5JBDM88OTcsgh05gl4jeFOWjV7BLRP80QD56ml0ySQ49IqXEYvRndskXcuhuZsVcDzl0529WRc8EOfT4U1bFPdFDKPiWd4sxPkER/fyd/rhvjCBaqwvqjY5cET6ACvT7azqDC8fGSaK1hlfRxy61ia+vBD1b1h9tqOWchPXVPKwZK3kTeeBGtYwXkRU9FvuxxxdBN1N9Msi/lmVo7deJ0sD/+x7lSHqnQF37oj23ojPk0/7Zmr9/wPxqYYkRXyJagn5/6t7C7JR47ftgoOOF+JXuX5R1AgRjx0N1pQEaaKAJxJFoZa+MeGM9S/ZNTc0oR5t9ZcRdvK9oy7qIQ8P9Lx9/EldL77nE1Q/q31a7Dxo5Jy29Ix752shog+309wj2bSWjvQ/uJLGrtnc1CHUw5KI3dhwwVBdz8a7I416pX02TOg0/46/0VMybPo7MT3rVE46+RPlV8weSiW7M46k+VUYBvaOWq9zVZLr1IhF9nXOt5DP2o3cX8M6oM9AIU4w+zj3De8hutMfEz9Vhu9GFa/jn7PLwz5GK5rrcLcZjoI+uFJ1pZtJmm9HrLZskER1rZlK8zWhTC5k8uiN/sQUaaKAJxJFoaa+M3Ge08SOmy6QaPReLAjTQQBOII9EqXhmxFT3VErp1mg7akacH0EADTSBAAw00gQANNNAEAjTQQBMI0EAvN7QL/9QRaKDtD9BAA00gQAMNNIEADfRyQ/8BrzggZms7LcEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMjVUMTQ6NTc6NTUrMDA6MDBet6bMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTI1VDE0OjU3OjU1KzAwOjAwL+oecAAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="}),(0,je.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQfnDBkOOTrtYg2MAAAAu0lEQVRIx+2VsRKCMAyGv3KuckbxmZw9Ueuju6L1NXARjraBozDgQDr1knxt/+RSQ9dq0sxAlpgS2aZzspkCmH2DFdAADKanBo47gmBxY3B1sN4cWl+Bi/xBYgy4eXibDth5ANEAKSKqKg0DTgM7RTxNxKKNOU4RscZhEYQHH8UbvWuJeZB5T/DtRUn+61JDzplniogV+yhOqMaLeFGPuo4HbFVArlehmYldHfomZBAzuwrL98H6L/wD4AtCmqVKuzvtJQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMi0yNVQxNDo1Nzo1OCswMDowMD9gxwwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTItMjVUMTQ6NTc6NTgrMDA6MDBOPX+wAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="}),(0,je.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAB2EAAAdhAZXDuLYAAAAHdElNRQfnDBkOOTrtYg2MAAAAZklEQVQoz72RwRGAIAwEN45lEGrVNuhDKUj7wAcQdQYH/bh8SMhjLwiZRBsZgcTMIwMdugOVVM6KQ4lWl8fJGgqAPwc+OwQ8nnDJ2dvDUBwyCw5BUOI9QZV01tO25G637bXDD39xABMuJ3vRt7zdAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEyLTI1VDE0OjU3OjU4KzAwOjAwP2DHDAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMi0yNVQxNDo1Nzo1OCswMDowME49f7AAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"}),(0,je.jsx)("link",{rel:"manifest",href:Ze}),(0,je.jsx)("link",{rel:"mask-icon",href:Te,color:"#5bbad5"})]})},Me=n(7924),ke=Me.ZP.ul(ve||(ve=(0,a.Z)(["\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  gap: 40px 20px;\n  justify-content: flex-start;\n  width: 100%;\n  flex-wrap: wrap;\n  padding-left: 0;\n"]))),Ee=Me.ZP.header(xe||(xe=(0,a.Z)(["\n  border-radius: 40px;\n  background-color: #fbab7e;\n  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);\n  box-shadow: 5px 5px 10px #b5b5b5, -5px -5px 10px #ffffff;\n  padding: 20px 20px 20px 20px;\n  margin: 20px auto;\n"]))),Oe=Me.ZP.div(be||(be=(0,a.Z)(["\n  max-width: 780px;\n  margin: 0 auto;\n"]))),Ce=n(4420),Be=n(5734),Ne=n(8627),De={logout:"UserMenu_logout__NkY3N",wrapper:"UserMenu_wrapper__YvbMI",userName:"UserMenu_userName__Hv3R1",NavLink:"UserMenu_NavLink__zt8Lx",linkWrapper:"UserMenu_linkWrapper__Zn5Jk",pulse:"UserMenu_pulse__+Or1I"},Se=n(854);var Ue=n.p+"static/media/notepad-117597.ee4916514d698eab2865aaf14511a0d7.svg",Ie=function(){var e=(0,Ce.I0)(),t=(0,c.TH)(),n=(0,Ne.a)(),r=n.user,i=n.isLoading;return(0,je.jsxs)(je.Fragment,{children:[(0,je.jsx)("div",{className:De.userMenu,children:(0,je.jsxs)("div",{className:De.wrapper,children:[(0,je.jsxs)("h1",{children:["Phonebook",(0,je.jsx)("img",{src:Ue,alt:"Icon with notebook",width:60})]}),(0,je.jsxs)("p",{className:De.userName,children:["User: ",r.name]}),(0,je.jsx)("button",{type:"button",onClick:function(){return e((0,Be.ni)())},className:De.logout,"aria-label":"Button for logout from application",title:"Logout from app",children:i?(0,je.jsx)(Se.Z,{}):(0,je.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHgSURBVFiFxddNaxRBEAbgp0KiRnIO8SMa4xcRvJiDN2NAEBERvAr+FdGb+Cs8CHoTUUEQNXgS9KCggaiYkPh1FyMolIfphTWEsDvJ7BY0M13U1Pt29VR1V2SmiBjFNcxgt84l8QKXMvNvF9/9J2P4UZzVHccyU50xiBsYLWS+4W2XEXiame/rrj6wgj1YxJHM/FPXWR0ZKODwstfgLQJ9lcYIRMR0RAz1hUBEXMcrvImIXT0ngOHynMLziNiwtrRy+U7dXF47MIK5Nt8fsHc920YikJk/cQ7PiupQicT4WtvGfsLM/IXzeFJUBzEXEft7QqCQWMUFPC6qA6pITPSEQCHxGxfxqKgmVJGYhMFunEXEYUzX5HIXJ1SH3z5VJGY7JhARU3inOj+2QsZxu++luOMIZOZ8RBxVfwu2qY7+sTJfxmUaKETrFKbteNiGtYTJ1oWkUYmIHbiHs0W1iNnMXKTLLKgBPoz7OFNUnwv4UsumMQIRsRMPMFtUnwr4crtdIwQiYkS156eK6mMBX1lr21QaXm0DX8DMeuBNElgtz3mczsyvGxk3koaqejHUSV/QiGTm607s+l6KB/ClvJ/s5Ba71RK4hStlXrc1u7kZEv1tTjPze0Qct7n2fKHu6v8BqxrYtTNZyegAAAAASUVORK5CYII=",alt:"Icon for logout button",width:24})})]})}),"/contacts"!==t.pathname&&(0,je.jsx)("div",{className:De.linkWrapper,children:(0,je.jsx)(o.OL,{to:"/contacts",className:De.NavLink,"aria-label":"Link for open list of contacts",children:"List of contacts"})})]})};var Re,Qe=n.p+"static/media/superhero.c6b179619daef5e9fce3ad9de0bcd969.svg",Le=n(5711),He=(0,Me.ZP)(o.OL)(Re||(Re=(0,a.Z)(["\n  text-decoration: none;\n  border-radius: 24px;\n  background: linear-gradient(145deg, #cacaca, #f0f0f0);\n  box-shadow: 9px 9px 13px #8b8b8b;\n  padding: 8px 24px;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #494949;\n  transition: all 400ms ease;\n  &:hover {\n    color: #ff9100;\n  }\n  &.active {\n    color: #ff9100;\n  }\n"]))),Pe=function(){var e=(0,Ne.a)().isLoggedIn,t=(0,c.TH)();return(0,je.jsxs)(Ae,{children:[(0,je.jsx)(we,{}),(0,je.jsxs)(Oe,{children:[(0,je.jsx)(Ee,{children:(0,je.jsx)("nav",{children:e?(0,je.jsx)(Ie,{}):(0,je.jsx)(je.Fragment,{children:(0,je.jsxs)(ke,{children:[(0,je.jsx)("li",{children:(0,je.jsxs)("h1",{children:["Phonebook",(0,je.jsx)("img",{src:Ue,alt:"Icon with notebook",className:"logo"})]})}),(0,je.jsx)("li",{children:(0,je.jsx)(He,{to:"/signup","aria-label":"Link for open registry form",children:"Register"})}),(0,je.jsx)("li",{children:(0,je.jsx)(He,{to:"/login","aria-label":"Link for open login form",children:"Login"})})]})})})}),(0,je.jsxs)("main",{children:["/contacts"!==t.pathname&&"/login"!==t.pathname&&"/signup"!==t.pathname&&(0,je.jsxs)("div",{children:[(0,je.jsx)("h2",{className:"defaultTitle",children:"Let's write your contacts!"}),(0,je.jsx)("img",{src:Qe,alt:"icon of superhero",className:"defaultImage"})]}),(0,je.jsx)(y.Suspense,{fallback:(0,je.jsx)(Le.Z,{}),children:(0,je.jsx)(c.j3,{})})]})]})]})}},2176:function(e){"use strict";e.exports=function(e,t,n,r,i,a,o,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,a,o,c],l=0;(s=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},5121:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(s=c;0!==s--;)if(!a(e[s],o[s]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!o.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!a(s.value[1],o.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(s=c;0!==s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof o.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof o.toString)return e.toString()===o.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=c;0!==s--;)if(!Object.prototype.hasOwnProperty.call(o,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!==s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!a(e[u[s]],o[u[s]]))return!1;return!0}return e!==e&&o!==o}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}}}]);
//# sourceMappingURL=194.9d7f81f5.chunk.js.map