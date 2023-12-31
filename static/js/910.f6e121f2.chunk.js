"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{5910:function(t,e,A){A.r(e),A.d(e,{default:function(){return Y}});var n=A(9439),a=A(5705),s=A(8007),r="AddContactForm_contactForm__1XbBB",i="AddContactForm_label__XseY1",c="AddContactForm_input__wYAJT",o="AddContactForm_addContactBtn__jIc-x",l="AddContactForm_astericks__4cq2i",d="AddContactForm_additional__2+ZZx",m=A(9085),u=A(913),h=A(3579),C=A(184),g={name:"",number:""},x=s.Ry().shape({name:s.Z_().min(1).max(24).required(),number:s.Rx().required()}),B=function(t){var e=t.data,A=t.setShowAddContact,s=(0,u.Tn)(),B=(0,n.Z)(s,2),N=B[0],w=B[1].isLoading;return(0,C.jsx)(a.J9,{validationSchema:x,initialValues:g,onSubmit:function(t,n){var a=n.resetForm;(null===e||void 0===e?void 0:e.map((function(t){return t.name}))).includes(t.name)?m.Am.error("Contact with the same name has already exist!"):(N({name:t.name,number:t.number.replace(/(\d{3})(\d{3})(\d{3})/,"$1-$2-$3")}),A(!1),m.Am.success("Contact ".concat(t.name," was ADDED")),a())},children:(0,C.jsxs)(a.l0,{className:r,autoComplete:"true",children:[(0,C.jsxs)("label",{className:i,htmlFor:"name",children:[(0,C.jsx)("span",{className:l,children:"*"}),"Name:",(0,C.jsx)(a.gN,{type:"text",name:"name",className:c,required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$"}),(0,C.jsx)("span",{className:d,children:"(1 - 24) symbols"}),(0,C.jsx)(a.Bc,{name:"name",component:"span"})]}),(0,C.jsxs)("label",{className:i,htmlFor:"number",children:[(0,C.jsx)("span",{className:l,children:"*"}),"Phone number:",(0,C.jsx)(a.gN,{type:"tel",name:"number",className:c,required:!0,pattern:"[0-9]{9,12}"}),(0,C.jsx)("span",{className:d,children:"(9 - 12) numbers"})," ",(0,C.jsx)(a.Bc,{name:"number",component:"span"})," "]}),(0,C.jsx)("button",{className:o,type:"submit",title:"Button for submit add contact form",children:w?(0,C.jsx)(h.Z,{}):"Add contact"})]})})},N="Filter_filter__vxThR",w=A(4420),j=A(4808),p=function(){var t=(0,w.I0)();return(0,C.jsx)("label",{children:(0,C.jsx)("input",{className:N,name:"filter",placeholder:"Search...",type:"search",onChange:function(e){var A=e.target.value;t((0,j._L)(A.toLowerCase()))}})})},b="ListOfContacts_tableContainer__zt+q1",f="ListOfContacts_table__DvX+U",v="ListOfContacts_th__Hoj-6",I="ListOfContacts_tbody__kiDK4",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsgAAALIBa5Ro4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHISURBVEiJrda9ThtBEMDx35kAoqKI5CJNOoQ7pJC8A0JKlzaRUlLwACDLLnmXVLjkEXAS+QWQqChClAoBOgltipuDtX3OB76VVufbnfnP7N58uEgpWTSKoujiLXbxJp7wFd/iOU4p/VgISSnNTaxiiBIp5h2+x7zP1kv08aKR1QDfwSSUL/AJ21jJZFbQw2dchuw5en80gIPw6AZHWG/yakZnAwPcxik/NhoIz0v8wtbfwDNG1nCWXWVvykDc+QQP2HsG/DTgZ2HgvP4mtdAwBI6XgJ/G+0m89+sI7cbVjFEsA4/1TVwHswv7ucVl4Nn+YeztiwhIeNcGPGRex/4ARviJThvwLGgegu1Kle6twDP5q5jVjzbhoTOuDYziOKstwjtx7aOOqip28MrMKIpiDV/wPhz5kFIqZ+Uaxi5eBvsxTA+X9TzT7cvCtE60a2y2AC/i/qtEi8VhwE6WgQfrOHQHKc0XuztPVfE58L0ImEkdNPlmXa7rqvi/8C1VqS+x87g+I1Q3nFtVmm/8A3hd1ZxuQvdgar9BIW+Zl6q22DPfMrdV7fQiZCe55wsNZN9kaLrp33tq+nfZehmnbUzUIoCNo42/Lb8BFULDYjm4CiAAAAAASUVORK5CYII=",U={deleteBtn:"Contact_deleteBtn__L35yB",tr:"Contact_tr__3GkWa",deleteBtnCont:"Contact_deleteBtnCont__9NYe8",phone:"Contact_phone__PxJLc",name:"Contact_name__xbxVU"},V=A(2791),L="EditContactForm_td__Fxr2y",F="EditContactForm_input__+zEeD",E="EditContactForm_confirm__MCoF4",Q=function(t){var e=t.setNewName,A=t.setNewNumber,n=t.onClick;return(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{className:L,children:(0,C.jsx)("input",{type:"text",name:"name",required:!0,className:F,onChange:function(t){return e(t.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*$",placeholder:"New name"})}),(0,C.jsx)("td",{className:L,children:(0,C.jsx)("input",{type:"tel",name:"number",required:!0,className:F,onChange:function(t){return A(t.target.value.replace(/(\d{3})(\d{3})(\d{3})/,"$1-$2-$3"))},pattern:"[0-9]{9,12}",placeholder:"New number"})}),(0,C.jsx)("td",{className:L,children:(0,C.jsx)("button",{type:"button",className:E,onClick:n,title:"Confirm changes in contact button",children:"OK"})})]})},R=function(t){var e=t.contact,A=e.id,a=e.name,s=e.number,r=(0,V.useState)(!1),i=(0,n.Z)(r,2),c=i[0],o=i[1],l=(0,V.useState)(a),d=(0,n.Z)(l,2),g=d[0],x=d[1],B=(0,V.useState)(s),N=(0,n.Z)(B,2),w=N[0],j=N[1],p=(0,u.Nt)(),b=(0,n.Z)(p,2),f=b[0],v=b[1].isLoading,I=(0,u.wY)().data,L=(0,u.Cq)(),F=(0,n.Z)(L,1)[0],E=I.some((function(t){return t.name===g&t.id!==A||t.number===w&t.id!==A}));return(0,C.jsxs)(C.Fragment,{children:[c&&(0,C.jsx)(Q,{setNewName:x,setNewNumber:j,onClick:function(){o(!1),E||""===g.trim()||""===w.trim()?m.Am.error("Error, incorrect input or same contact exists"):F({id:A,name:g,number:w})}}),(0,C.jsxs)("tr",{className:U.tr,children:[(0,C.jsxs)("td",{className:U.name,children:[" ",(0,C.jsx)("button",{type:"button",className:U.deleteBtn,id:A,onClick:function(){return o(!c)},title:"Edit contact",children:c?(0,C.jsx)("img",{src:S,alt:"Cancel icon for close edit form",width:16}):(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABRQAAAUUBn0tXuAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMpSURBVFiFvddbiFdVFAbw3x6GGSjEMvPBCuyCVJASVBBdhoSsoKB5SO0lgjKI6EmiHoIIH6xeIoaoHrICH4okCIIiMojwJSoKDCMhRBpzclDLLo631cPZR1d/Z5j/hWnDhrPWt/f6vrP2PnuvIyIsdMcKbMcU9uENLIsI/wf5rfgd0dF/xuJSB53TSikjGJoVnL2diIhTHTFW4QtcUF1TGE32RKfa+/AB9s6ieL5+BOtSrMuxP+HbMYKL8Vf1/dgOPg9v9UHa2bfVeMuwJ/l3YLRiFyYBu4drKl7Ewyl7v2A3Ts+d8XPaQWwppSzCx7iq+r/F/RExU5f1vfrCNMvj9koUOFQH97vhRvF5evOftLu92U/vJuw3LIVXk/OBAciHNOvcxprEioRPJOwobmw/gK+Sc2gAAa8ngsO4LmHPJmwGdybMoQp8PwD55kTwN25J2MaEncL6jrmOVPC7PsmfTAQncG/CxnEy4U/MMr9/AXgwbeDTeChhYziWyJ+fI0Z/ArAWxxPBpoStTnEDr1X/SiwdWABuwp+J4IWEXYFfE/Z+/ULWVPsPLO5bAK7GdCJ4M2GdJ+BnGKnYc8k/1s7p5bJRSrkUn+Ki6voQj1VsET5x9gT8BuMRcbydnkO1D10LKKUsqeSXVddJPBMRp0opo1XM9RXbg3si4uh8cXvJwGZck+xh7KhX7jbcUf37sTYiDnYTdHj+IZRShrG+moc1Vc1qLNekuo1zBHdFxN5u4tJ9Btb477qPYWe1W/J/NIfQrm7JexGwLj1v1+yDfcl3UlOM7NRjm3cJavrHk+tp3JbswKMR8VGv5HSXgVVYkuxMPo2NEfFOP+R0twknZ/HtwiuaEuxYv+RdCYiIqVLKI9ik+b4nImLHIKSdAtq6r8w1KCK2YuuAXDn+mVpzSFO3wZWllJ6O5h7byvTcchrC1/X5fGxYCOZSyiW4u5qTEXEg4zdrSqX252JDv6XZHLfntZrSvL0Jt2S8RIRSykt4Koma1vt/wWxtueZ2bNd/F26IiJkzI6rKEbzsbHm1EP1LqUw/k6GOdI3hbfzg7LIM0ic1d8fj5ij5/wUGrylQ8gtGFgAAAABJRU5ErkJggg==",alt:"trash icon",width:16})}),a]}),(0,C.jsx)("td",{className:U.phone,children:s}),(0,C.jsxs)("td",{className:U.delete,children:[" ",(0,C.jsx)("div",{className:U.deleteBtnCont,children:(0,C.jsx)("button",{type:"button",className:U.deleteBtn,id:A,onClick:function(){return f(A)},title:"Delete contact",children:v?(0,C.jsx)(h.Z,{}):(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFlSURBVFiF7ZdNSgNBEIW/BBExutG9bvUKQVcqnkavYVzqcTQ749JLCPECiYYQHF1YzWhNdU/3pCcI+qAZUtW8ev3yOj+QhnXgGngBPtQaAwPZ0xoGxmC9rtoUMJYhfaN3ROlEa3CnbNqvoKte7wNDYI5trx6U0p8D98BeSNAwQJ5r3YUEuJPvhDY1xC6lE14kv4eJqPDrDKwca556my78gHZgtIKZD3UbLvly4Cbj0FvhvNANKwNTeW5lFOC4prqRIuCRqn2xNa8AK4Q+Adbnf2wtiwPLIEnARJ7bGQU4rolu/EoH/pYAC12gAN6Bzre69UUVU+sIV4FxYMuBAniT3maM4hr0hOtVuGsFQGlVjpvgOEz7fQLcdcmRA8dRuYIhATmDGAzgvwDfLyIrhCOqVy6mFgyhT4AVwmNjX0ytUQif5XmGX2QMNoBzxRmFQ2BGvj8jM+AgVf0p8AQslhi8EI4T35BPpJCzrWHnFTIAAAAASUVORK5CYII=",alt:"trash icon",width:16})})})]})]})]})},_=function(t){return t.filter.query},k=function(t){var e=t.data,A=t.isSuccess,n=(0,w.v9)(_),a=null===e||void 0===e?void 0:e.filter((function(t){return t.name.toLowerCase().includes(n)}));return(0,C.jsx)("div",{className:b,children:(0,C.jsxs)("table",{className:f,children:[(0,C.jsx)("thead",{children:(0,C.jsxs)("tr",{children:[(0,C.jsx)("th",{className:v,children:"Name"}),(0,C.jsx)("th",{className:v,children:"Phone"}),(0,C.jsx)("th",{className:v,children:"DLT"})]})}),(0,C.jsx)("tbody",{className:I,children:A&&(null===a||void 0===a?void 0:a.map((function(t){return(0,C.jsx)(R,{contact:t},t.id)})))})]})})},Z="Contacts_addContact__xp-ga",O="Contacts_searchShowBtn__s1agf",D="Contacts_buttons__KiE6Y",Y=function(){var t=(0,u.wY)(),e=t.data,A=t.isSuccess,a=t.isLoading,s=t.isError,r=t.refetch,i=(0,V.useState)(!1),c=(0,n.Z)(i,2),o=c[0],l=c[1],d=(0,V.useState)(!1),g=(0,n.Z)(d,2),x=g[0],N=g[1],w=localStorage.getItem("persist:auth"),j=JSON.parse(w),b=JSON.parse(j.token);return(0,V.useEffect)((function(){r()}),[r,b]),(0,C.jsxs)("div",{className:"container",children:[(0,C.jsxs)("div",{className:D,children:[(0,C.jsxs)("button",{type:"button",onClick:function(){return l(!o)},className:Z,title:"Button for show add contact form",children:[" ",o?(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACugAAAroB2wWlwgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABESURBVEiJ7dSxDYBADAPACyUDMBejssivQxuWIAXIltL6pBSu7jaZbbQ9QIAAoHDgxP5y940LFnro1vdfVFnTAAF+ADwN6iHVfqkWagAAAABJRU5ErkJggg==",alt:"Icon for hidden add contact form",width:20}):(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACUSURBVFiF7dWxCYRAEIXhXxHOKow18CI7sIcLbMo2tAg7uA4O5OzCQNDgFjwDg13FDXwDDyaZ4WMnWHCvJzCY5K5LwgOACkhMKh+Ax18f+wCcUgIIIIAAAgT8frUXEFnOlkBh+jfQWc5PQAvwBWZP6W9/gsZyZlM161PWrku8n0AAAQQQQIAjgHGnv6wy4GOSui5ZADpvMl83pztLAAAAAElFTkSuQmCC",alt:"Icon for add button",width:20})]}),0===(null===e||void 0===e?void 0:e.length)?(0,C.jsx)("h2",{children:" No contacts in phonebook"}):(0,C.jsx)("h2",{children:"Contacts:"}),(0,C.jsx)("button",{type:"button",onClick:function(){return N(!x)},className:O,title:"Button for open edit contact form",children:x?(0,C.jsx)("img",{src:S,alt:"Cancel search icon",width:20}):(0,C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAF1QAABdUBACpHLgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH2SURBVEiJrdU9aBRBFMDx35wHIRYRkSgSIgh+QEAFNZVNFMVSwUqwsLVMYWEpVmIvWAQFQUQQi2ApWEQbTRBJLEylIoKiCIoiuctY7ByZ7G1uc5oHj51l3rz/vI+ZCTFGVRJCmMAxHEk6iDnMJp2OMS5VLs4lxrhKMYyHiDU6hwPl9V3+Ss7P4nPmZBlvcQ9TeIWlbP4PriDUAjCOVrb4LoYrIhzEtRLoUk8ABrCQjH/hTG3oRV3epzU/sLsX4Hq2m8k65xnkREpjxNOqVHUMvyWjGTTWC0hrb2ab21eeb4QQ9mBraqqpGONybeutllvZ+HB5spGK25GXfTqHeUXdKOrSBTiUxi286dd7jLGN1+n3YBXgYxo3saNfQJLR9P1SBXiR/XeFWCchhBGMpN+FKkDndMKpfgE4nY3nu2ZTqz1RtFkL43206HZFWiI+YPNa52C/ohNiCnNoHc6beGTlDJyvu4smM+N3ONnD+Ziidh37Z2vZhs57EEJo4AHOZRl8jOeK8/Fb0QTjyWYgs/uKiRhjdQ1Ku7uI79nuemkexSfs7fkeZJBR3MGilcuso21M42iyvVpK7a5aQAm2BccVj9EYBipsbmSQRexcN+Afb9V5bNtoQMDtDDKLoQ0DJMgm3M8gl5tdbfUfEmNshxAu4KfiCpn5C2weDFtm9ILBAAAAAElFTkSuQmCC",alt:"Search icon button",width:20})})]}),o&&(0,C.jsx)(B,{data:e,setShowAddContact:l}),x&&(0,C.jsx)(p,{}),a&&(0,C.jsx)(h.Z,{}),!a&&!s&&0!==e.length&&(0,C.jsx)(k,{data:e,isSuccess:A}),(0,C.jsx)(m.Ix,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!1,theme:"dark",style:{width:200,marginLeft:"auto"}})]})}}}]);
//# sourceMappingURL=910.f6e121f2.chunk.js.map