(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(58),i=a(27),o=a(6),c=a(7),l=a(9),u=a(8),h=a(10);function m(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function p(e){return e[Math.floor(Math.random()*e.length)]}function d(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(p(e),"-").concat(p(e),"-").concat(p(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).myInput=r.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.myInput.value.value;a.props.history.push("/store/".concat(t))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null," Please enter a store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:d()}),r.a.createElement("button",{type:"submit"}," Visit store \u2192 "))}}]),t}(n.Component),v=function(){return r.a.createElement("div",null,r.a.createElement("h2",null," Not Found! "))},g=a(15),b=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"}," Of "),r.a.createElement("span",{className:"the"}," The ")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null," ",e.tagline," ")))},y=a(26),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).renderOrder=function(e){var t=a.props.fishes[e],n=a.props.order[e],s=t&&"available"===t.status,i={classNames:"order",key:e,timeout:{enter:500,exit:500}};return t?s?r.a.createElement(y.CSSTransition,i,r.a.createElement("li",{key:e},r.a.createElement("span",null,r.a.createElement(y.TransitionGroup,{component:"span",className:"count"},r.a.createElement(y.CSSTransition,{classNames:"count",key:n,timeout:{enter:500,exit:500}},r.a.createElement("span",null,n))),"lbs  ",t.name,m(n*t.price),r.a.createElement("button",{onClick:function(){return a.props.removeFromOrder(e)}},"\xd7")))):r.a.createElement(y.CSSTransition,i,r.a.createElement("li",{key:e}," Sorry ",t?t.name:"fish"," is no longer available ")):null},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var n=e.props.fishes[a],r=e.props.order[a];return n&&"available"===n.status?t+r*n.price:t},0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null," Order "),r.a.createElement(y.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},"Total:",r.a.createElement("strong",null,m(a))))}}]),t}(r.a.Component),O=a(34),j=a.n(O),w=a(61),k=a(33),S=a(25),F=a.n(S),C=a(85),N=a.n(C);a(160);var x=F.a.initializeApp({apiKey:"AIzaSyDhZcVj3N4ye7LPJWAb95-0LNldB8P-iWI",authDomain:"catch-of-the-day-agus-garcia.firebaseapp.com",databaseURL:"https://catch-of-the-day-agus-garcia.firebaseio.com"}),T=N.a.createClass(x.database()),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createFish=function(e){e.preventDefault();var t={name:a.nameRef.value.value,price:parseFloat(a.priceRef.value.value),status:a.statusRef.value.value,desc:a.descRef.value.value,image:a.imageRef.value.value};a.props.addFish(t),e.currentTarget.reset()},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"}," Fresh! "),r.a.createElement("option",{value:"unavailable"}," Sold Out! ")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),r.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),t}(r.a.Component),R=a(42),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){console.log(e.currentTarget.value);var t=Object(g.a)({},a.props.fish,Object(R.a)({},e.currentTarget.name,e.currentTarget.value));a.props.updateFish(a.props.index,t)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),r.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fish.price}),r.a.createElement("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.fish.status},r.a.createElement("option",{value:"available"}," Fresh! "),r.a.createElement("option",{value:"unavailable"}," Sold Out! ")),r.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}," "),r.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),r.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.index)}},"Remove Fish"))}}]),t}(r.a.Component),L=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Sign in to manage your store's inventory."),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log In With GitHub"),r.a.createElement("button",{className:"twitter",onClick:function(){return e.authenticate("Twitter")}},"Log In With Twitter"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")}},"Log In With Facebook"))},D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={uid:null,owner:null},a.authHandler=function(){var e=Object(w.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.fetch(a.props.storeId,{context:Object(k.a)(Object(k.a)(a))});case 2:if(n=e.sent,console.log(n),n.owner){e.next=7;break}return e.next=7,T.post("".concat(a.props.storeId,"/owner"),{data:t.user.uid});case 7:a.setState({uid:t.user.uid,owner:n.owner||t.user.uid}),console.log(t);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.authenticate=function(e){var t=new(F.a.auth["".concat(e,"AuthProvider")]);x.auth().signInWithPopup(t).then(a.authHandler)},a.logout=Object(w.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Logging out"),e.next=3,F.a.auth().signOut();case 3:a.setState({uid:null});case 4:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.a.auth().onAuthStateChanged(function(t){t&&e.authHandler({user:t})})}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{onClick:this.logout},"Log Out!");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry, you are not the owner!"),t):r.a.createElement("div",{className:"Inventory"},r.a.createElement("h2",null," Inventory"),t,Object.keys(this.props.fishes).map(function(t){return r.a.createElement(A,{key:t,index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})}),r.a.createElement(I,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Sample Fishes")):r.a.createElement(L,{authenticate:this.authenticate})}}]),t}(r.a.Component),P={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyones favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},W=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,n=t.name,s=t.price,i=t.desc,o="available"===t.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:a,alt:a}),r.a.createElement("h3",{className:"fish-name"},n,r.a.createElement("span",{className:"price"},m(s))),r.a.createElement("p",null,i),r.a.createElement("button",{disabled:!o,onClick:function(){return e.props.addToOrder(e.props.index)}},o?"Add To Order":"Sold Out!"))}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={fishes:{},order:{}},a.addFish=function(e){var t=Object(g.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a.updateFish=function(e,t){var n=Object(g.a)({},a.state.fishes);n[e]=t,a.setState({fishes:n})},a.deleteFish=function(e){var t=Object(g.a)({},a.state.fishes);t[e]=null,a.setState({fishes:t})},a.loadSampleFishes=function(){a.setState({fishes:P})},a.addToOrder=function(e){var t=Object(g.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a.removeFromOrder=function(e){var t=Object(g.a)({},a.state.order);delete t[e],a.setState({order:t})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem(this.props.match.params.storeId);e&&this.setState({order:JSON.parse(e)}),this.ref=T.syncState("".concat(this.props.match.params.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){console.log(this.state.order),localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order)),console.log("it updated")}},{key:"componentWillUnmount",value:function(){T.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(b,{tagline:"Fresh Seafood Market"}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map(function(t){return r.a.createElement(W,{key:t,index:t,details:e.state.fishes[t],addToOrder:e.addToOrder})}))),r.a.createElement(E,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(D,{addFish:this.addFish,updateFish:this.updateFish,deleteFish:this.deleteFish,loadSampleFishes:this.loadSampleFishes,addToOrder:this.addToOrder,fishes:this.state.fishes,storeId:this.props.match.params.storeId}))}}]),t}(r.a.Component),J=function(){return r.a.createElement(i.a,null,r.a.createElement(i.c,null,r.a.createElement(i.b,{exact:!0,path:"/",component:f}),r.a.createElement(i.b,{path:"/store/:storeId",component:M}),r.a.createElement(i.b,{component:v})))};a(161);Object(s.render)(r.a.createElement(J,null),document.querySelector("#main"))},86:function(e,t,a){e.exports=a(162)}},[[86,1,2]]]);
//# sourceMappingURL=main.1ecae681.chunk.js.map