(this.webpackJsonpFILMBUFF=this.webpackJsonpFILMBUFF||[]).push([[0],{49:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a.n(c),s=a(41),i=a.n(s),o=(a(49),a(7)),l=a(8),h=a(10),u=a(9),d=a(23),j=a(5),p=a(20),b=a.n(p),m=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).theApiCall=function(t){var a="discover";t&&(a="search"),b()({url:"https://api.themoviedb.org/3/".concat(a,"/movie"),params:{api_key:"47f7f0a78ce3e2f1427da95247b6bc0e",language:"en-US",page:1,query:t}}).then((function(t){e.setState({movies:t.data.results})}))},e.state={movies:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.match.params.searchQueryHere?this.theApiCall(this.props.match.params.searchQueryHere):this.theApiCall()}},{key:"componentDidUpdate",value:function(e){e.match.params.searchQueryHere!==this.props.match.params.searchQueryHere&&this.theApiCall(this.props.match.params.searchQueryHere)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"catalogue flex",children:this.state.movies.map((function(e){if(null!==e.poster_path)return Object(n.jsx)("div",{className:"movie",children:Object(n.jsx)(d.b,{to:"/movie/".concat(e.id),children:Object(n.jsx)("img",{src:"http://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:"Poster for ".concat(e.original_title)})})},e.id)}))})}}]),a}(c.Component),v=a(30);a(70);v.a.initializeApp({apiKey:"AIzaSyCxncbNWc05xc1-OE0GeqFj93BIlPHCU88",authDomain:"project6-60da1.firebaseapp.com",projectId:"project6-60da1",storageBucket:"project6-60da1.appspot.com",messagingSenderId:"864738316885",appId:"1:864738316885:web:87f7139af069f0c8fd3adc"});var O=v.a,f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{class:"movieResults",children:[Object(n.jsx)("h3",{children:"Results"}),Object(n.jsx)("div",{className:"flex dropDownResult",children:this.props.foreignMoviesProp.map((function(e){if(null!==e.poster_path)return Object(n.jsx)("div",{className:"movieDropDown",children:Object(n.jsx)("img",{src:"http://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title})},e.id)}))})]})}}]),a}(c.Component),g=a(16),x=a(21),y=a(24);g.b.add(x.b);var C=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).axiosCall=function(t){t?(console.log("dis val",t),console.log("dis genre",e.props.genre),b()({url:"https://api.themoviedb.org/3/discover/movie/",params:{api_key:"47f7f0a78ce3e2f1427da95247b6bc0e",language:t,with_genres:e.props.genre,page:1}}).then((function(t){console.log("dis res",t);var a=t.data.results.slice(0,6);e.setState({foreignMovie:a})})).catch((function(e){alert("error")}))):alert("Please select a language")},e.saveSelection=function(){var t=O.database().ref();0===e.state.foreignMovie.length?alert("Nothing has been selected yet"):t.once("value",(function(a){var n=a.val(),c=[];for(var r in n){var s=n[r];c.push(s)}console.log(n),t.push([e.props.movie,e.state.foreignMovie])}))},e.handleInputChange=function(t){e.setState({userSelection:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.axiosCall(e.state.userSelection)},e.state={userSelection:"",foreignMovie:[]},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsxs)("form",{className:"flex column dropDownForm",children:[Object(n.jsx)("label",{htmlFor:"languagesDropDown",children:"Interested in something similar but in a different language?"}),Object(n.jsxs)("div",{className:"flex dropDownBox",children:[Object(n.jsxs)("select",{name:"languagesDropdown",id:"languagesDropdown",onChange:this.handleInputChange,value:this.state.userSelection,children:[Object(n.jsx)("option",{value:"",disabled:!0,children:"Language?"}),Object(n.jsx)("option",{value:"de",children:"German"}),Object(n.jsx)("option",{value:"es",children:"Spanish"}),Object(n.jsx)("option",{value:"it",children:"Italian"}),Object(n.jsx)("option",{value:"cn",children:"Chinese"}),Object(n.jsx)("option",{value:"ru",children:"Russian"}),Object(n.jsx)("option",{value:"jp",children:"Japanese"})]}),Object(n.jsx)("button",{className:"dropDownButton",onClick:this.handleSubmit,children:"Show me"})]})]}),Object(n.jsx)("button",{className:"favourite",onClick:this.saveSelection,children:Object(n.jsx)(y.a,{icon:["fa","heart"]})}),Object(n.jsx)(f,{foreignMoviesProp:this.state.foreignMovie})]})}}]),a}(c.Component),k=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={movie:{},genre:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;b()({url:"https://api.themoviedb.org/3/movie/".concat(this.props.match.params.movieDetails),params:{api_key:"47f7f0a78ce3e2f1427da95247b6bc0e",language:"en-US",sort_by:"popularity.desc",include_adult:"false",include_video:"false",page:"1"}}).then((function(t){e.setState({movie:t.data,genre:t.data.genres[0].id})})).catch((function(){alert("error")}))}},{key:"render",value:function(){var e=this.state.movie,t=e.original_title,a=e.tagline,c=e.overview,r=e.poster_path;return Object(n.jsxs)("div",{className:"posterAll flex wrapper",children:[Object(n.jsx)("div",{className:"image flex column",children:Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:"http://image.tmdb.org/t/p/w500/".concat(r),alt:"poster for ".concat(r)})})}),Object(n.jsxs)("div",{className:"textContent flex column",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsx)("h3",{children:a}),Object(n.jsx)("p",{children:c}),Object(n.jsx)(C,{genre:this.state.genre,movie:this.state.movie})]})]})}}]),a}(c.Component),S=a(31),w=a(43),N=Object(j.e)((function(e){var t=e.history,a=(e.location,e.match,e.staticContext,e.to),c=e.onClick,r=e.buttonError,s=Object(w.a)(e,["history","location","match","staticContext","to","onClick","buttonError"]);return Object(n.jsx)("button",Object(S.a)(Object(S.a)({},s),{},{onClick:function(e){c&&c(e),t.push(a)},disabled:!0===r}))})),D=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchQuery:t.target.value,inputError:!1})},e.handleAdd=function(){""===e.state.searchQuery&&e.setState({inputError:!0})},e.state={searchQuery:"",inputError:!0},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("form",{className:"search flex searchButtonBox",children:[Object(n.jsx)("input",{onChange:this.handleChange,value:this.state.searchQuery,type:"text",placeholder:"search"}),Object(n.jsx)(N,{buttonError:this.state.inputError,onClick:this.handleAdd,to:"/search/".concat(this.state.searchQuery),children:"Search"})]})}}]),a}(c.Component);g.b.add(x.c,x.a);var F=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).removeFromFirebase=function(){O.database().ref("/").remove()},e.toggleWatchList=function(){e.setState({sidebarOpen:!e.state.sidebarOpen})},e.state={savedRecommendations:[],sidebarOpen:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var c in a){var r=a[c];n.push(r)}var s=Object.values(n);e.setState({savedRecommendations:s})}))}},{key:"render",value:function(){var e=this.state.sidebarOpen?"watchListOpen":"watchList",t=this.state.sidebarOpen?"togglerOpen":"toggler",a=this.state.sidebarOpen?"removeButtonOpen":"removeButton";return 0!==this.state.savedRecommendations.length?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("ul",{className:e,children:[Object(n.jsx)("div",{className:t,tabIndex:"1",onClick:this.toggleWatchList,children:Object(n.jsx)(y.a,{icon:x.a})}),Object(n.jsx)("h2",{children:"Because you liked:"}),this.state.savedRecommendations.map((function(e,t){var a=e[0];return Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:a.original_title})},t)})),Object(n.jsx)("h2",{children:"You should watch:"}),this.state.savedRecommendations.map((function(e){var t=e[1];if(t)return t.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("li",{children:Object(n.jsx)("h3",{children:e.title})})},e.id)}))})),Object(n.jsx)("button",{className:"".concat(a," ").concat(0===this.state.savedRecommendations.length?"":"show"),onClick:this.removeFromFirebase,children:Object(n.jsx)(y.a,{icon:["fas","times"]})})]})}):Object(n.jsx)("ul",{className:"watchList",children:Object(n.jsx)("p",{children:"Nothing to see here"})})}}]),a}(c.Component),B=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("footer",{className:"wrapper",children:Object(n.jsx)("p",{children:"Aleksandra Petryga, Brandon Michael Wong and Lucas Regazzi \ud83d\udc51 @ Juno College \xa9"})})}}]),a}(c.Component),I=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(d.a,{basename:"/projectSix",children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("header",{className:"wrapper flex",children:[Object(n.jsx)(d.b,{to:"/",children:Object(n.jsx)("h1",{tabIndex:"1",children:"Fidddlm hfhfBuf4444444 !"})}),Object(n.jsx)(D,{search:this.handleSearchCall}),Object(n.jsx)(F,{})]}),Object(n.jsx)(j.a,{exact:!0,path:"/",component:m}),Object(n.jsx)(j.a,{path:"/search/:searchQueryHere",component:m}),Object(n.jsx)(j.a,{path:"/movie/:movieDetails",component:k}),Object(n.jsx)(B,{})]})})}}]),a}(c.Component),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),_()}},[[75,1,2]]]);
//# sourceMappingURL=main.543e5505.chunk.js.map