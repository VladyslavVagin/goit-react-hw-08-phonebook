(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{5910:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Y}});var a=n(9439),r=n(5705),o=n(8007),i="AddContactForm_contactForm__1XbBB",A="AddContactForm_label__XseY1",c="AddContactForm_input__wYAJT",s="AddContactForm_addContactBtn__jIc-x",l="AddContactForm_astericks__4cq2i",d="AddContactForm_additional__2+ZZx",u=n(9085),m=n(913),h=n(3579),f=n(184),g={name:"",number:""},C=o.Ry().shape({name:o.Z_().min(1).max(24).required(),number:o.Rx().required()}),x=function(t){var e=t.data,n=t.setShowAddContact,o=(0,m.Tn)(),x=(0,a.Z)(o,2),b=x[0],B=x[1].isLoading;return(0,f.jsx)(r.J9,{validationSchema:C,initialValues:g,onSubmit:function(t,a){var r=a.resetForm;(null===e||void 0===e?void 0:e.map((function(t){return t.name}))).includes(t.name)?u.Am.error("Contact with the same name has already exist!"):(b({name:t.name,number:t.number.replace(/(\d{3})(\d{3})(\d{3})/,"$1-$2-$3")}),n(!1),u.Am.success("Contact ".concat(t.name," was ADDED")),r())},children:(0,f.jsxs)(r.l0,{className:i,autoComplete:"true",children:[(0,f.jsxs)("label",{className:A,htmlFor:"name",children:[(0,f.jsx)("span",{className:l,children:"*"}),"Name:",(0,f.jsx)(r.gN,{type:"text",name:"name",className:c,required:!0}),(0,f.jsx)("span",{className:d,children:"(1 - 24) symbols"}),(0,f.jsx)(r.Bc,{name:"name",component:"span"})]}),(0,f.jsxs)("label",{className:A,htmlFor:"number",children:[(0,f.jsx)("span",{className:l,children:"*"}),"Phone number:",(0,f.jsx)(r.gN,{type:"tel",name:"number",className:c,required:!0,pattern:"[0-9]{9,12}"}),(0,f.jsx)("span",{className:d,children:"(9 - 12) numbers"})," ",(0,f.jsx)(r.Bc,{name:"number",component:"span"})," "]}),(0,f.jsx)("button",{className:s,type:"submit",title:"Button for submit add contact form",children:B?(0,f.jsx)(h.Z,{}):"Add contact"})]})})},b="Filter_filter__vxThR",B=n(4420),p=n(4808),N=function(){var t=(0,B.I0)();return(0,f.jsx)("label",{children:(0,f.jsx)("input",{className:b,name:"filter",placeholder:"Search...",type:"search",onChange:function(e){var n=e.target.value;t((0,p._L)(n.toLowerCase()))}})})},j="ListOfContacts_tableContainer__zt+q1",w="ListOfContacts_table__DvX+U",v="ListOfContacts_th__Hoj-6",I="ListOfContacts_tbody__kiDK4",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsgAAALIBa5Ro4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHISURBVEiJrda9ThtBEMDx35kAoqKI5CJNOoQ7pJC8A0JKlzaRUlLwACDLLnmXVLjkEXAS+QWQqChClAoBOgltipuDtX3OB76VVufbnfnP7N58uEgpWTSKoujiLXbxJp7wFd/iOU4p/VgISSnNTaxiiBIp5h2+x7zP1kv08aKR1QDfwSSUL/AJ21jJZFbQw2dchuw5en80gIPw6AZHWG/yakZnAwPcxik/NhoIz0v8wtbfwDNG1nCWXWVvykDc+QQP2HsG/DTgZ2HgvP4mtdAwBI6XgJ/G+0m89+sI7cbVjFEsA4/1TVwHswv7ucVl4Nn+YeztiwhIeNcGPGRex/4ARviJThvwLGgegu1Kle6twDP5q5jVjzbhoTOuDYziOKstwjtx7aOOqip28MrMKIpiDV/wPhz5kFIqZ+Uaxi5eBvsxTA+X9TzT7cvCtE60a2y2AC/i/qtEi8VhwE6WgQfrOHQHKc0XuztPVfE58L0ImEkdNPlmXa7rqvi/8C1VqS+x87g+I1Q3nFtVmm/8A3hd1ZxuQvdgar9BIW+Zl6q22DPfMrdV7fQiZCe55wsNZN9kaLrp33tq+nfZehmnbUzUIoCNo42/Lb8BFULDYjm4CiAAAAAASUVORK5CYII=",U={deleteBtn:"Contact_deleteBtn__L35yB",tr:"Contact_tr__3GkWa",deleteBtnCont:"Contact_deleteBtnCont__9NYe8",phone:"Contact_phone__PxJLc",name:"Contact_name__xbxVU"},L=n(2791),V="EditContactForm_td__Fxr2y",F="EditContactForm_input__+zEeD",y="EditContactForm_confirm__MCoF4",E=n(3881),O=function(t){var e=t.setNewName,n=t.setNewNumber,a=t.onClick,r=E((function(t){return e(t.target.value)}),500,{leading:!1}),o=E((function(t){return n(t.target.value.replace(/(\d{3})(\d{3})(\d{3})/,"$1-$2-$3"))}),500,{leading:!1});return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:V,children:(0,f.jsx)("input",{type:"text",name:"name",required:!0,className:F,onChange:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",placeholder:"New name","aria-label":"Input for change the name of contact. If no change ,it will stay same before."})}),(0,f.jsx)("td",{className:V,children:(0,f.jsx)("input",{type:"tel",name:"number",required:!0,className:F,onChange:o,pattern:"[0-9]{9,12}",placeholder:"New number","aria-label":"Input for change number of contact. if no change, it will stay same before."})}),(0,f.jsx)("td",{className:V,children:(0,f.jsx)("button",{type:"button",className:y,onClick:a,title:"Confirm changes in contact button","aria-label":"Button for confirm changes in edit form. After confirm - choosen contact will be changed.",children:"OK"})})]})},Q=function(t){var e=t.contact,n=e.id,r=e.name,o=e.number,i=(0,L.useState)(!1),A=(0,a.Z)(i,2),c=A[0],s=A[1],l=(0,L.useState)(r),d=(0,a.Z)(l,2),g=d[0],C=d[1],x=(0,L.useState)(o),b=(0,a.Z)(x,2),B=b[0],p=b[1],N=(0,m.Nt)(),j=(0,a.Z)(N,2),w=j[0],v=j[1].isLoading,I=(0,m.wY)().data,V=(0,m.Cq)(),F=(0,a.Z)(V,2),y=F[0],E=F[1].isLoading,Q=I.some((function(t){return t.name===g&t.id!==n||t.number===B&t.id!==n}));return(0,f.jsxs)(f.Fragment,{children:[c&&(0,f.jsx)(O,{setNewName:C,setNewNumber:p,onClick:function(){s(!1),Q||""===g.trim()||""===B.trim()?u.Am.error("Error, incorrect input or same contact exists"):y({id:n,name:g,number:B})}}),(0,f.jsxs)("tr",{className:U.tr,children:[(0,f.jsxs)("td",{className:U.name,children:[" ",(0,f.jsx)("button",{type:"button",className:U.deleteBtn,id:n,onClick:function(){return s(!c)},title:"Edit contact","aria-label":"Button for show or hide edit contact form",children:c?(0,f.jsx)("img",{src:S,alt:"Cancel icon for close edit form",width:16}):(0,f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABRQAAAUUBn0tXuAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMpSURBVFiFvddbiFdVFAbw3x6GGSjEMvPBCuyCVJASVBBdhoSsoKB5SO0lgjKI6EmiHoIIH6xeIoaoHrICH4okCIIiMojwJSoKDCMhRBpzclDLLo631cPZR1d/Z5j/hWnDhrPWt/f6vrP2PnuvIyIsdMcKbMcU9uENLIsI/wf5rfgd0dF/xuJSB53TSikjGJoVnL2diIhTHTFW4QtcUF1TGE32RKfa+/AB9s6ieL5+BOtSrMuxP+HbMYKL8Vf1/dgOPg9v9UHa2bfVeMuwJ/l3YLRiFyYBu4drKl7Ewyl7v2A3Ts+d8XPaQWwppSzCx7iq+r/F/RExU5f1vfrCNMvj9koUOFQH97vhRvF5evOftLu92U/vJuw3LIVXk/OBAciHNOvcxprEioRPJOwobmw/gK+Sc2gAAa8ngsO4LmHPJmwGdybMoQp8PwD55kTwN25J2MaEncL6jrmOVPC7PsmfTAQncG/CxnEy4U/MMr9/AXgwbeDTeChhYziWyJ+fI0Z/ArAWxxPBpoStTnEDr1X/SiwdWABuwp+J4IWEXYFfE/Z+/ULWVPsPLO5bAK7GdCJ4M2GdJ+BnGKnYc8k/1s7p5bJRSrkUn+Ki6voQj1VsET5x9gT8BuMRcbydnkO1D10LKKUsqeSXVddJPBMRp0opo1XM9RXbg3si4uh8cXvJwGZck+xh7KhX7jbcUf37sTYiDnYTdHj+IZRShrG+moc1Vc1qLNekuo1zBHdFxN5u4tJ9Btb477qPYWe1W/J/NIfQrm7JexGwLj1v1+yDfcl3UlOM7NRjm3cJavrHk+tp3JbswKMR8VGv5HSXgVVYkuxMPo2NEfFOP+R0twknZ/HtwiuaEuxYv+RdCYiIqVLKI9ik+b4nImLHIKSdAtq6r8w1KCK2YuuAXDn+mVpzSFO3wZWllJ6O5h7byvTcchrC1/X5fGxYCOZSyiW4u5qTEXEg4zdrSqX252JDv6XZHLfntZrSvL0Jt2S8RIRSykt4Koma1vt/wWxtueZ2bNd/F26IiJkzI6rKEbzsbHm1EP1LqUw/k6GOdI3hbfzg7LIM0ic1d8fj5ij5/wUGrylQ8gtGFgAAAABJRU5ErkJggg==",alt:"trash icon for delete button",width:16})}),E?(0,f.jsx)(h.Z,{}):"".concat(r)]}),(0,f.jsxs)("td",{className:U.phone,children:[" ",E?(0,f.jsx)(h.Z,{}):"".concat(o)]}),(0,f.jsxs)("td",{className:U.delete,children:[" ",(0,f.jsx)("div",{className:U.deleteBtnCont,children:(0,f.jsx)("button",{type:"button",className:U.deleteBtn,id:n,onClick:function(){return w(n)},title:"Delete contact","aria-label":"Button for delete contact from list of contact",children:v?(0,f.jsx)(h.Z,{}):(0,f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFlSURBVFiF7ZdNSgNBEIW/BBExutG9bvUKQVcqnkavYVzqcTQ749JLCPECiYYQHF1YzWhNdU/3pCcI+qAZUtW8ev3yOj+QhnXgGngBPtQaAwPZ0xoGxmC9rtoUMJYhfaN3ROlEa3CnbNqvoKte7wNDYI5trx6U0p8D98BeSNAwQJ5r3YUEuJPvhDY1xC6lE14kv4eJqPDrDKwca556my78gHZgtIKZD3UbLvly4Cbj0FvhvNANKwNTeW5lFOC4prqRIuCRqn2xNa8AK4Q+Adbnf2wtiwPLIEnARJ7bGQU4rolu/EoH/pYAC12gAN6Bzre69UUVU+sIV4FxYMuBAniT3maM4hr0hOtVuGsFQGlVjpvgOEz7fQLcdcmRA8dRuYIhATmDGAzgvwDfLyIrhCOqVy6mFgyhT4AVwmNjX0ytUQif5XmGX2QMNoBzxRmFQ2BGvj8jM+AgVf0p8AQslhi8EI4T35BPpJCzrWHnFTIAAAAASUVORK5CYII=",alt:"trash icon",width:16})})})]})]})]})},R=function(t){return t.filter.query},_=function(t){var e=t.data,n=t.isSuccess,a=(0,B.v9)(R),r=null===e||void 0===e?void 0:e.filter((function(t){return t.name.toLowerCase().includes(a)}));return(0,f.jsx)("div",{className:j,children:(0,f.jsxs)("table",{className:w,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{className:v,children:"Name"}),(0,f.jsx)("th",{className:v,children:"Phone"}),(0,f.jsx)("th",{className:v,children:"DLT"})]})}),(0,f.jsx)("tbody",{className:I,children:n&&(null===r||void 0===r?void 0:r.map((function(t){return(0,f.jsx)(Q,{contact:t},t.id)})))})]})})},k="Contacts_addContact__xp-ga",Z="Contacts_searchShowBtn__s1agf",D="Contacts_buttons__KiE6Y",Y=function(){var t=(0,m.wY)(),e=t.data,n=t.isSuccess,r=t.isLoading,o=t.isError,i=t.refetch,A=(0,L.useState)(!1),c=(0,a.Z)(A,2),s=c[0],l=c[1],d=(0,L.useState)(!1),g=(0,a.Z)(d,2),C=g[0],b=g[1],B=localStorage.getItem("persist:auth"),p=JSON.parse(B),j=JSON.parse(p.token);return(0,L.useEffect)((function(){i()}),[i,j]),(0,f.jsxs)("div",{className:"container",children:[(0,f.jsxs)("div",{className:D,children:[(0,f.jsxs)("button",{type:"button",onClick:function(){return l(!s)},className:k,title:"Button for show add contact form","aria-label":"Button for show or hide add contact form",children:[" ",s?(0,f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACugAAAroB2wWlwgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABESURBVEiJ7dSxDYBADAPACyUDMBejssivQxuWIAXIltL6pBSu7jaZbbQ9QIAAoHDgxP5y940LFnro1vdfVFnTAAF+ADwN6iHVfqkWagAAAABJRU5ErkJggg==",alt:"Icon for hidden add contact form",width:20}):(0,f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACUSURBVFiF7dWxCYRAEIXhXxHOKow18CI7sIcLbMo2tAg7uA4O5OzCQNDgFjwDg13FDXwDDyaZ4WMnWHCvJzCY5K5LwgOACkhMKh+Ax18f+wCcUgIIIIAAAgT8frUXEFnOlkBh+jfQWc5PQAvwBWZP6W9/gsZyZlM161PWrku8n0AAAQQQQIAjgHGnv6wy4GOSui5ZADpvMl83pztLAAAAAElFTkSuQmCC",alt:"Icon for add button",width:20})]}),0===(null===e||void 0===e?void 0:e.length)?(0,f.jsx)("h2",{children:" No contacts in phonebook"}):(0,f.jsx)("h2",{children:"Contacts:"}),(0,f.jsx)("button",{type:"button",onClick:function(){return b(!C)},className:Z,title:"Button for open edit contact form","aria-label":"Button for show or hide input for search contact",children:C?(0,f.jsx)("img",{src:S,alt:"Cancel search icon",width:20}):(0,f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAF1QAABdUBACpHLgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH2SURBVEiJrdU9aBRBFMDx35wHIRYRkSgSIgh+QEAFNZVNFMVSwUqwsLVMYWEpVmIvWAQFQUQQi2ApWEQbTRBJLEylIoKiCIoiuctY7ByZ7G1uc5oHj51l3rz/vI+ZCTFGVRJCmMAxHEk6iDnMJp2OMS5VLs4lxrhKMYyHiDU6hwPl9V3+Ss7P4nPmZBlvcQ9TeIWlbP4PriDUAjCOVrb4LoYrIhzEtRLoUk8ABrCQjH/hTG3oRV3epzU/sLsX4Hq2m8k65xnkREpjxNOqVHUMvyWjGTTWC0hrb2ab21eeb4QQ9mBraqqpGONybeutllvZ+HB5spGK25GXfTqHeUXdKOrSBTiUxi286dd7jLGN1+n3YBXgYxo3saNfQJLR9P1SBXiR/XeFWCchhBGMpN+FKkDndMKpfgE4nY3nu2ZTqz1RtFkL43206HZFWiI+YPNa52C/ohNiCnNoHc6beGTlDJyvu4smM+N3ONnD+Ziidh37Z2vZhs57EEJo4AHOZRl8jOeK8/Fb0QTjyWYgs/uKiRhjdQ1Ku7uI79nuemkexSfs7fkeZJBR3MGilcuso21M42iyvVpK7a5aQAm2BccVj9EYBipsbmSQRexcN+Afb9V5bNtoQMDtDDKLoQ0DJMgm3M8gl5tdbfUfEmNshxAu4KfiCpn5C2weDFtm9ILBAAAAAElFTkSuQmCC",alt:"Search icon button",width:20})})]}),s&&(0,f.jsx)(x,{data:e,setShowAddContact:l}),C&&(0,f.jsx)(N,{}),r&&(0,f.jsx)(h.Z,{}),!r&&!o&&0!==e.length&&(0,f.jsx)(_,{data:e,isSuccess:n}),(0,f.jsx)(u.Ix,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!1,theme:"dark",style:{width:200,marginLeft:"auto"}})]})}},3881:function(t,e,n){var a="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,A=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,d=s||l||Function("return this")(),u=Object.prototype.toString,m=Math.max,h=Math.min,f=function(){return d.Date.now()};function g(t,e,n){var r,o,i,A,c,s,l=0,d=!1,u=!1,g=!0;if("function"!=typeof t)throw new TypeError(a);function b(e){var n=r,a=o;return r=o=void 0,l=e,A=t.apply(a,n)}function B(t){return l=t,c=setTimeout(N,e),d?b(t):A}function p(t){var n=t-s;return void 0===s||n>=e||n<0||u&&t-l>=i}function N(){var t=f();if(p(t))return j(t);c=setTimeout(N,function(t){var n=e-(t-s);return u?h(n,i-(t-l)):n}(t))}function j(t){return c=void 0,g&&r?b(t):(r=o=void 0,A)}function w(){var t=f(),n=p(t);if(r=arguments,o=this,s=t,n){if(void 0===c)return B(s);if(u)return c=setTimeout(N,e),b(s)}return void 0===c&&(c=setTimeout(N,e)),A}return e=x(e)||0,C(n)&&(d=!!n.leading,i=(u="maxWait"in n)?m(x(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=s=o=c=void 0},w.flush=function(){return void 0===c?A:j(f())},w}function C(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==u.call(t)}(t))return NaN;if(C(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=C(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||A.test(t)?c(t.slice(2),n?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(a);return C(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(t,e,{leading:r,maxWait:e,trailing:o})}}}]);
//# sourceMappingURL=910.175e18d2.chunk.js.map