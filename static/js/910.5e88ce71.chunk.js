"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{5910:function(t,e,n){n.r(e),n.d(e,{default:function(){return Y}});var a=n(9439),A=n(5705),o=n(8007),s="AddContactForm_contactForm__1XbBB",r="AddContactForm_label__XseY1",c="AddContactForm_input__wYAJT",i="AddContactForm_addContactBtn__jIc-x",l="AddContactForm_astericks__4cq2i",d="AddContactForm_additional__2+ZZx",m=n(9085),u=n(913),h=n(3579),C=n(184),g={name:"",number:""},x=o.Ry().shape({name:o.Z_().min(1).max(24).required(),number:o.Rx().required()}),B=function(t){var e=t.data,n=t.setShowAddContact,o=(0,u.Tn)(),B=(0,a.Z)(o,2),f=B[0],N=B[1].isLoading;return(0,C.jsx)(A.J9,{validationSchema:x,initialValues:g,onSubmit:function(t,a){var A=a.resetForm;(null===e||void 0===e?void 0:e.map((function(t){return t.name}))).includes(t.name)?m.Am.error("Contact with the same name has already exist!"):(f({name:t.name,number:t.number.replace(/(\d{3})(\d{3})(\d{3})/,"$1-$2-$3")}),n(!1),m.Am.success("Contact ".concat(t.name," was ADDED")),A())},children:(0,C.jsxs)(A.l0,{className:s,autoComplete:"true",children:[(0,C.jsxs)("label",{className:r,htmlFor:"name",children:[(0,C.jsx)("span",{className:l,children:"*"}),"Name:",(0,C.jsx)(A.gN,{type:"text",name:"name",className:c,required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$"}),(0,C.jsx)("span",{className:d,children:"(1 - 24) symbols"}),(0,C.jsx)(A.Bc,{name:"name",component:"span"})]}),(0,C.jsxs)("label",{className:r,htmlFor:"number",children:[(0,C.jsx)("span",{className:l,children:"*"}),"Phone number:",(0,C.jsx)(A.gN,{type:"tel",name:"number",className:c,required:!0,pattern:"[0-9]{9,12}"}),(0,C.jsx)("span",{className:d,children:"(9 - 12) numbers"})," ",(0,C.jsx)(A.Bc,{name:"number",component:"span"})," "]}),(0,C.jsx)("button",{className:i,type:"submit",title:"Button for submit add contact form",children:N?(0,C.jsx)(h.Z,{}):"Add contact"})]})})},f="Filter_filter__vxThR",N=n(4420),b=n(4808),w=function(){var t=(0,N.I0)();return(0,C.jsx)("label",{children:(0,C.jsx)("input",{className:f,name:"filter",placeholder:"Search...",type:"search",onChange:function(e){var n=e.target.value;t((0,b._L)(n.toLowerCase()))}})})},j="ListOfContacts_tableContainer__zt+q1",p="ListOfContacts_table__DvX+U",I="ListOfContacts_th__Hoj-6",v="ListOfContacts_tbody__kiDK4",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsgAAALIBa5Ro4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHISURBVEiJrda9ThtBEMDx35kAoqKI5CJNOoQ7pJC8A0JKlzaRUlLwACDLLnmXVLjkEXAS+QWQqChClAoBOgltipuDtX3OB76VVufbnfnP7N58uEgpWTSKoujiLXbxJp7wFd/iOU4p/VgISSnNTaxiiBIp5h2+x7zP1kv08aKR1QDfwSSUL/AJ21jJZFbQw2dchuw5en80gIPw6AZHWG/yakZnAwPcxik/NhoIz0v8wtbfwDNG1nCWXWVvykDc+QQP2HsG/DTgZ2HgvP4mtdAwBI6XgJ/G+0m89+sI7cbVjFEsA4/1TVwHswv7ucVl4Nn+YeztiwhIeNcGPGRex/4ARviJThvwLGgegu1Kle6twDP5q5jVjzbhoTOuDYziOKstwjtx7aOOqip28MrMKIpiDV/wPhz5kFIqZ+Uaxi5eBvsxTA+X9TzT7cvCtE60a2y2AC/i/qtEi8VhwE6WgQfrOHQHKc0XuztPVfE58L0ImEkdNPlmXa7rqvi/8C1VqS+x87g+I1Q3nFtVmm/8A3hd1ZxuQvdgar9BIW+Zl6q22DPfMrdV7fQiZCe55wsNZN9kaLrp33tq+nfZehmnbUzUIoCNo42/Lb8BFULDYjm4CiAAAAAASUVORK5CYII=",U={deleteBtn:"Contact_deleteBtn__L35yB",tr:"Contact_tr__3GkWa",deleteBtnCont:"Contact_deleteBtnCont__9NYe8",phone:"Contact_phone__PxJLc",name:"Contact_name__xbxVU"},L=n(2791),V="EditContactForm_td__Fxr2y",F="EditContactForm_input__+zEeD",E="EditContactForm_confirm__MCoF4",Q=function(t){var e=t.setNewName,n=t.setNewNumber,a=t.onClick;return(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:V,children:(0,C.jsx)("input",{type:"text",name:"name",required:!0,className:F,onChange:function(t){return e(t.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",placeholder:"New name","aria-label":"Input for change the name of contact. If no change ,it will stay same before."})}),(0,C.jsx)("td",{className:V,children:(0,C.jsx)("input",{type:"tel",name:"number",required:!0,className:F,onChange:function(t){return n(t.target.value.replace(/(\d{3})(\d{3})(\d{3})/,"$1-$2-$3"))},pattern:"[0-9]{9,12}",placeholder:"New number","aria-label":"Input for change number of contact. if no change, it will stay same before."})}),(0,C.jsx)("td",{className:V,children:(0,C.jsx)("button",{type:"button",className:E,onClick:a,title:"Confirm changes in contact button","aria-label":"Button for confirm changes in edit form. After confirm - choosen contact will be changed.",children:"OK"})})]})},Z=function(t){var e=t.contact,n=e.id,A=e.name,o=e.number,s=(0,L.useState)(!1),r=(0,a.Z)(s,2),c=r[0],i=r[1],l=(0,L.useState)(A),d=(0,a.Z)(l,2),g=d[0],x=d[1],B=(0,L.useState)(o),f=(0,a.Z)(B,2),N=f[0],b=f[1],w=(0,u.Nt)(),j=(0,a.Z)(w,2),p=j[0],I=j[1].isLoading,v=(0,u.wY)().data,V=(0,u.Cq)(),F=(0,a.Z)(V,2),E=F[0],Z=F[1].isLoading,R=v.some((function(t){return t.name===g&t.id!==n||t.number===N&t.id!==n}));return(0,C.jsxs)(C.Fragment,{children:[c&&(0,C.jsx)(Q,{setNewName:x,setNewNumber:b,onClick:function(){i(!1),R||""===g.trim()||""===N.trim()?m.Am.error("Error, incorrect input or same contact exists"):E({id:n,name:g,number:N})}}),(0,C.jsxs)("tr",{className:U.tr,children:[(0,C.jsxs)("td",{className:U.name,children:[" ",(0,C.jsx)("button",{type:"button",className:U.deleteBtn,id:n,onClick:function(){return i(!c)},title:"Edit contact","aria-label":"Button for show or hide edit contact form",children:c?(0,C.jsx)("img",{src:S,alt:"Cancel icon for close edit form",width:16}):(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABRQAAAUUBn0tXuAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMpSURBVFiFvddbiFdVFAbw3x6GGSjEMvPBCuyCVJASVBBdhoSsoKB5SO0lgjKI6EmiHoIIH6xeIoaoHrICH4okCIIiMojwJSoKDCMhRBpzclDLLo631cPZR1d/Z5j/hWnDhrPWt/f6vrP2PnuvIyIsdMcKbMcU9uENLIsI/wf5rfgd0dF/xuJSB53TSikjGJoVnL2diIhTHTFW4QtcUF1TGE32RKfa+/AB9s6ieL5+BOtSrMuxP+HbMYKL8Vf1/dgOPg9v9UHa2bfVeMuwJ/l3YLRiFyYBu4drKl7Ewyl7v2A3Ts+d8XPaQWwppSzCx7iq+r/F/RExU5f1vfrCNMvj9koUOFQH97vhRvF5evOftLu92U/vJuw3LIVXk/OBAciHNOvcxprEioRPJOwobmw/gK+Sc2gAAa8ngsO4LmHPJmwGdybMoQp8PwD55kTwN25J2MaEncL6jrmOVPC7PsmfTAQncG/CxnEy4U/MMr9/AXgwbeDTeChhYziWyJ+fI0Z/ArAWxxPBpoStTnEDr1X/SiwdWABuwp+J4IWEXYFfE/Z+/ULWVPsPLO5bAK7GdCJ4M2GdJ+BnGKnYc8k/1s7p5bJRSrkUn+Ki6voQj1VsET5x9gT8BuMRcbydnkO1D10LKKUsqeSXVddJPBMRp0opo1XM9RXbg3si4uh8cXvJwGZck+xh7KhX7jbcUf37sTYiDnYTdHj+IZRShrG+moc1Vc1qLNekuo1zBHdFxN5u4tJ9Btb477qPYWe1W/J/NIfQrm7JexGwLj1v1+yDfcl3UlOM7NRjm3cJavrHk+tp3JbswKMR8VGv5HSXgVVYkuxMPo2NEfFOP+R0twknZ/HtwiuaEuxYv+RdCYiIqVLKI9ik+b4nImLHIKSdAtq6r8w1KCK2YuuAXDn+mVpzSFO3wZWllJ6O5h7byvTcchrC1/X5fGxYCOZSyiW4u5qTEXEg4zdrSqX252JDv6XZHLfntZrSvL0Jt2S8RIRSykt4Koma1vt/wWxtueZ2bNd/F26IiJkzI6rKEbzsbHm1EP1LqUw/k6GOdI3hbfzg7LIM0ic1d8fj5ij5/wUGrylQ8gtGFgAAAABJRU5ErkJggg==",alt:"trash icon for delete button",width:16})}),Z?(0,C.jsx)(h.Z,{}):"".concat(A)]}),(0,C.jsxs)("td",{className:U.phone,children:[" ",Z?(0,C.jsx)(h.Z,{}):"".concat(o)]}),(0,C.jsxs)("td",{className:U.delete,children:[" ",(0,C.jsx)("div",{className:U.deleteBtnCont,children:(0,C.jsx)("button",{type:"button",className:U.deleteBtn,id:n,onClick:function(){return p(n)},title:"Delete contact","aria-label":"Button for delete contact from list of contact",children:I?(0,C.jsx)(h.Z,{}):(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFlSURBVFiF7ZdNSgNBEIW/BBExutG9bvUKQVcqnkavYVzqcTQ749JLCPECiYYQHF1YzWhNdU/3pCcI+qAZUtW8ev3yOj+QhnXgGngBPtQaAwPZ0xoGxmC9rtoUMJYhfaN3ROlEa3CnbNqvoKte7wNDYI5trx6U0p8D98BeSNAwQJ5r3YUEuJPvhDY1xC6lE14kv4eJqPDrDKwca556my78gHZgtIKZD3UbLvly4Cbj0FvhvNANKwNTeW5lFOC4prqRIuCRqn2xNa8AK4Q+Adbnf2wtiwPLIEnARJ7bGQU4rolu/EoH/pYAC12gAN6Bzre69UUVU+sIV4FxYMuBAniT3maM4hr0hOtVuGsFQGlVjpvgOEz7fQLcdcmRA8dRuYIhATmDGAzgvwDfLyIrhCOqVy6mFgyhT4AVwmNjX0ytUQif5XmGX2QMNoBzxRmFQ2BGvj8jM+AgVf0p8AQslhi8EI4T35BPpJCzrWHnFTIAAAAASUVORK5CYII=",alt:"trash icon",width:16})})})]})]})]})},R=function(t){return t.filter.query},_=function(t){var e=t.data,n=t.isSuccess,a=(0,N.v9)(R),A=null===e||void 0===e?void 0:e.filter((function(t){return t.name.toLowerCase().includes(a)}));return(0,C.jsx)("div",{className:j,children:(0,C.jsxs)("table",{className:p,children:[(0,C.jsx)("thead",{children:(0,C.jsxs)("tr",{children:[(0,C.jsx)("th",{className:I,children:"Name"}),(0,C.jsx)("th",{className:I,children:"Phone"}),(0,C.jsx)("th",{className:I,children:"DLT"})]})}),(0,C.jsx)("tbody",{className:v,children:n&&(null===A||void 0===A?void 0:A.map((function(t){return(0,C.jsx)(Z,{contact:t},t.id)})))})]})})},k="Contacts_addContact__xp-ga",O="Contacts_searchShowBtn__s1agf",D="Contacts_buttons__KiE6Y",Y=function(){var t=(0,u.wY)(),e=t.data,n=t.isSuccess,A=t.isLoading,o=t.isError,s=t.refetch,r=(0,L.useState)(!1),c=(0,a.Z)(r,2),i=c[0],l=c[1],d=(0,L.useState)(!1),g=(0,a.Z)(d,2),x=g[0],f=g[1],N=localStorage.getItem("persist:auth"),b=JSON.parse(N),j=JSON.parse(b.token);return(0,L.useEffect)((function(){s()}),[s,j]),(0,C.jsxs)("div",{className:"container",children:[(0,C.jsxs)("div",{className:D,children:[(0,C.jsxs)("button",{type:"button",onClick:function(){return l(!i)},className:k,title:"Button for show add contact form","aria-label":"Button for show or hide add contact form",children:[" ",i?(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACugAAAroB2wWlwgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABESURBVEiJ7dSxDYBADAPACyUDMBejssivQxuWIAXIltL6pBSu7jaZbbQ9QIAAoHDgxP5y940LFnro1vdfVFnTAAF+ADwN6iHVfqkWagAAAABJRU5ErkJggg==",alt:"Icon for hidden add contact form",width:20}):(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACUSURBVFiF7dWxCYRAEIXhXxHOKow18CI7sIcLbMo2tAg7uA4O5OzCQNDgFjwDg13FDXwDDyaZ4WMnWHCvJzCY5K5LwgOACkhMKh+Ax18f+wCcUgIIIIAAAgT8frUXEFnOlkBh+jfQWc5PQAvwBWZP6W9/gsZyZlM161PWrku8n0AAAQQQQIAjgHGnv6wy4GOSui5ZADpvMl83pztLAAAAAElFTkSuQmCC",alt:"Icon for add button",width:20})]}),0===(null===e||void 0===e?void 0:e.length)?(0,C.jsx)("h2",{children:" No contacts in phonebook"}):(0,C.jsx)("h2",{children:"Contacts:"}),(0,C.jsx)("button",{type:"button",onClick:function(){return f(!x)},className:O,title:"Button for open edit contact form","aria-label":"Button for show or hide input for search contact",children:x?(0,C.jsx)("img",{src:S,alt:"Cancel search icon",width:20}):(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAF1QAABdUBACpHLgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH2SURBVEiJrdU9aBRBFMDx35wHIRYRkSgSIgh+QEAFNZVNFMVSwUqwsLVMYWEpVmIvWAQFQUQQi2ApWEQbTRBJLEylIoKiCIoiuctY7ByZ7G1uc5oHj51l3rz/vI+ZCTFGVRJCmMAxHEk6iDnMJp2OMS5VLs4lxrhKMYyHiDU6hwPl9V3+Ss7P4nPmZBlvcQ9TeIWlbP4PriDUAjCOVrb4LoYrIhzEtRLoUk8ABrCQjH/hTG3oRV3epzU/sLsX4Hq2m8k65xnkREpjxNOqVHUMvyWjGTTWC0hrb2ab21eeb4QQ9mBraqqpGONybeutllvZ+HB5spGK25GXfTqHeUXdKOrSBTiUxi286dd7jLGN1+n3YBXgYxo3saNfQJLR9P1SBXiR/XeFWCchhBGMpN+FKkDndMKpfgE4nY3nu2ZTqz1RtFkL43206HZFWiI+YPNa52C/ohNiCnNoHc6beGTlDJyvu4smM+N3ONnD+Ziidh37Z2vZhs57EEJo4AHOZRl8jOeK8/Fb0QTjyWYgs/uKiRhjdQ1Ku7uI79nuemkexSfs7fkeZJBR3MGilcuso21M42iyvVpK7a5aQAm2BccVj9EYBipsbmSQRexcN+Afb9V5bNtoQMDtDDKLoQ0DJMgm3M8gl5tdbfUfEmNshxAu4KfiCpn5C2weDFtm9ILBAAAAAElFTkSuQmCC",alt:"Search icon button",width:20})})]}),i&&(0,C.jsx)(B,{data:e,setShowAddContact:l}),x&&(0,C.jsx)(w,{}),A&&(0,C.jsx)(h.Z,{}),!A&&!o&&0!==e.length&&(0,C.jsx)(_,{data:e,isSuccess:n}),(0,C.jsx)(m.Ix,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!1,theme:"dark",style:{width:200,marginLeft:"auto"}})]})}}}]);
//# sourceMappingURL=910.5e88ce71.chunk.js.map