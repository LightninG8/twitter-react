(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),r=n.n(s),c=n(9),i=n.n(c),o=(n(16),n(6)),l=n(7),u=n(2),b=n(3),j=n(5),f=n(4),p=(n(17),n(18),function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props,e=t.likedPostsCount,n=t.allPostsCount;return Object(a.jsxs)("div",{className:"app-header d-flex",children:[Object(a.jsx)("h1",{children:"Aleksey Kessler"}),Object(a.jsxs)("h2",{children:[n," \u0437\u0430\u043f\u0438\u0441\u0435\u0439, \u0438\u0437 \u043d\u0438\u0445 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c ",e]})]})}}]),n}(s.Component)),d=(n(19),function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).onUpdateSearch=function(t){var e=a.props.onUpdateSearch,n=t.target.value;a.setState((function(){return{term:n}})),e(n)},a.state={term:""},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c",onChange:this.onUpdateSearch})}}]),n}(s.Component)),h=(n(20),function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"like",label:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"}],a}return Object(b.a)(n,[{key:"render",value:function(){var t=this,e=this.buttons.map((function(e){var n=e.name,s=e.label,r=t.props.filter===n,c="btn ".concat(r?"btn-info":"btn-outline-secondary");return Object(a.jsx)("button",{type:"button",className:c,onClick:function(){return t.props.onFilterSelect(n)},children:s},n)}));return Object(a.jsx)("div",{className:"btn-group",children:e})}}]),n}(s.Component)),O=n(10),m=(n(21),function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDelete,s=t.onToggleImportant,r=t.onToggleLike,c="app-list-item d-flex justify-content-between";return t.isImportant&&(c+=" important"),t.isLiked&&(c+=" like"),Object(a.jsxs)("div",{className:c,children:[Object(a.jsx)("span",{className:"app-list-item-label",onClick:r,children:e}),Object(a.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(a.jsx)("button",{className:"btn-star btn-sm",type:"button",onClick:s,children:Object(a.jsx)("i",{className:"fa fa-star"})}),Object(a.jsx)("button",{className:"btn-trash btn-sm",type:"button",onClick:n,children:Object(a.jsx)("i",{className:"fa fa-trash-o"})}),Object(a.jsx)("i",{className:"fa fa-heart"})]})]})}}]),n}(r.a.Component)),x=(n(22),function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props,e=t.posts,n=t.onDelete,s=t.onToggleLike,r=t.onToggleImportant,c=e.map((function(t){var e=t.id,c=Object(O.a)(t,["id"]);return Object(a.jsx)("li",{className:"list-group-item",children:Object(a.jsx)(m,Object(o.a)(Object(o.a)({},c),{},{onDelete:function(){return n(e)},onToggleImportant:function(){return r(e)},onToggleLike:function(){return s(e)}}))},e)}));return Object(a.jsx)("ul",{className:"app-list list-group",children:c})}}]),n}(r.a.Component)),v=(n(23),function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).onValueChange=function(t){a.setState({text:t.target.value})},a.onSubmit=function(t){t.preventDefault(),(0,a.props.onAddPost)(a.state.text),a.setState((function(){return{text:""}}))},a.state={text:""},a}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state.text;return Object(a.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit,children:[Object(a.jsx)("input",{className:"form-control new-post-label",type:"text",placeholder:"\u041e \u0447\u0451\u043c \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441?",onChange:this.onValueChange,value:t}),Object(a.jsx)("button",{className:"btn btn-outline-secondary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}}]),n}(s.Component)),g=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).deletePost=function(t){a.setState((function(e){var n=e.postsList,a=n.findIndex((function(e){return e.id===t}));return{postsList:[].concat(Object(l.a)(n.slice(0,a)),Object(l.a)(n.slice(a+1)))}}))},a.addPost=function(t){a.setState((function(e){var n=e.postsList,s={label:t,id:++a.maxId};return{postsList:[].concat(Object(l.a)(n),[s])}}))},a.onToggleImportant=function(t){var e=a.state.postsList,n=e.findIndex((function(e){return e.id===t})),s=e[n],r=Object(o.a)(Object(o.a)({},s),{},{isImportant:!s.isImportant}),c=[].concat(Object(l.a)(e.slice(0,n)),[r],Object(l.a)(e.slice(n+1)));a.setState((function(){return{postsList:c}}))},a.onToggleLike=function(t){var e=a.state.postsList,n=e.findIndex((function(e){return e.id===t})),s=e[n],r=Object(o.a)(Object(o.a)({},s),{},{isLiked:!s.isLiked}),c=[].concat(Object(l.a)(e.slice(0,n)),[r],Object(l.a)(e.slice(n+1)));a.setState((function(){return{postsList:c}}))},a.searchPosts=function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))},a.onUpdateSearch=function(t){a.setState((function(){return{term:t}}))},a.filterPosts=function(t,e){return console.log(e),"like"===e?t.filter((function(t){return t.isLiked})):t},a.onFilterSelect=function(t){a.setState((function(){return{filter:t}}))},a.state={postsList:[{label:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u044f \u043f\u043e\u0435\u043b",id:1,isImportant:!0,isLiked:!1},{label:"\u0412\u0447\u0435\u0440\u0430 \u044f \u043f\u043e\u043f\u0438\u043b",id:2,isImportant:!1,isLiked:!1},{label:"\u0420\u0443\u0441\u0441\u043a\u0438\u0435 \u0432\u043f\u0435\u0440\u0451\u0434",id:3,isImportant:!1,isLiked:!1}],term:"",filter:"all"},a.maxId=4,a}return Object(b.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.postsList,s=e.term,r=e.filter,c=n.filter((function(t){return t.isLiked})).length,i=n.length,o=this.filterPosts(this.searchPosts(n,s),r);return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(p,{likedPostsCount:c,allPostsCount:i}),Object(a.jsxs)("div",{className:"search-panel d-flex",children:[Object(a.jsx)(d,{onUpdateSearch:this.onUpdateSearch}),Object(a.jsx)(h,{filter:r,onFilterSelect:this.onFilterSelect})]}),Object(a.jsx)(x,{posts:o,onDelete:function(e){return t.deletePost(e)},onToggleImportant:function(e){return t.onToggleImportant(e)},onToggleLike:function(e){return t.onToggleLike(e)}}),Object(a.jsx)(v,{onAddPost:this.addPost})]})}}]),n}(s.Component);i.a.render(Object(a.jsx)(g,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.02f60d5f.chunk.js.map