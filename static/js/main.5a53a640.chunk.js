(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var c=e(7),o=e.n(c),r=e(2),a=e(3),u=e(5),s=e(4),i=e(1),b=e.n(i),l=(e(12),e(13),e(0)),d=function(t){Object(u.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(r.a)(this,e);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))).state={count:t.props.counter},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.addOne(),t.state.count%5===0&&t.add100()},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this.state.count;return Object(l.jsxs)("div",{className:"counter",children:[Object(l.jsxs)("h1",{className:"counter__title",children:["Count:"," ",t]}),Object(l.jsxs)("div",{className:"counter__button-block",children:[Object(l.jsx)("button",{className:"counter__button-block-btn",type:"button",onClick:this.addOne,children:"Count: +1"}),Object(l.jsx)("button",{className:"counter__button-block-btn",type:"button",onClick:this.add100,children:"Count: +100"}),Object(l.jsx)("button",{className:"counter__button-block-btn",type:"button",onClick:this.increase,children:"Multiplicity 5"})]})]})}}]),e}(b.a.Component),j=d,h=function(t){Object(u.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(r.a)(this,e);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))).state={count:0},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this.state.count;return Object(l.jsx)("div",{children:Object(l.jsx)(j,{counter:t})})}}]),e}(b.a.Component),O=h;o.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5a53a640.chunk.js.map