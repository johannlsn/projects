(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(1),c=a(7),i=a.n(c),s=(a(15),a(9)),h=a(2),j=a(3),o=a(5),b=a(4),u=function(){return Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Job"})]})})},l=function(t){var e=t.characterData.map((function(e,a){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.job}),Object(n.jsx)("td",{children:Object(n.jsx)("button",{onClick:function(){return t.removeCharacter(a)},children:"Delete"})})]},a)}));return Object(n.jsx)("tbody",{children:e})},m=function(t){Object(o.a)(a,t);var e=Object(b.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var t=this.props,e=t.characterData,a=t.removeCharacter;return Object(n.jsxs)("table",{children:[Object(n.jsx)(u,{}),Object(n.jsx)(l,{characterData:e,removeCharacter:a})]})}}]),a}(r.Component),O=a(8),d=function(t){Object(o.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).initialState={name:"",job:""},t.state=t.initialState,t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(O.a)({},n,r))},t.submitForm=function(){t.props.handleSubmit(t.state),t.setState(t.initialState)},t}return Object(j.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.job;return Object(n.jsxs)("form",{children:[Object(n.jsx)("label",{htmlFor:"name",children:"Name"}),Object(n.jsx)("input",{type:"text",name:"name",id:"name",value:e,onChange:this.handleChange}),Object(n.jsx)("label",{htmlFor:"job",children:"Job"}),Object(n.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(n.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),a}(r.Component),p=function(t){Object(o.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={characters:[]},t.removeCharacter=function(e){var a=t.state.characters;t.setState({characters:a.filter((function(t,a){return a!==e}))})},t.handleSubmit=function(e){t.setState({characters:[].concat(Object(s.a)(t.state.characters),[e])})},t}return Object(j.a)(a,[{key:"render",value:function(){var t=this.state.characters;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(m,{characterData:t,removeCharacter:this.removeCharacter}),Object(n.jsx)(d,{handleSubmit:this.handleSubmit})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fde9dcdc.chunk.js.map