(this.webpackJsonpsummary=this.webpackJsonpsummary||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),s=a(7),u=a.n(s),o=a(18),l=a(2),m=a(3),f=a(5),p=a(4),h=a(6),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.text)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"segment ui"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("label",null,r.a.createElement("h4",null,"Search Image")),r.a.createElement("input",{type:"text",onChange:function(t){e.setState({text:t.target.value})},value:this.state.text})))}}]),t}(r.a.Component),g=a(19),v=a.n(g),d=(a(43),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(f.a)(this,Object(p.a)(t).call(this,e))).setSpan=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({span:t})},a.state={span:0},a.imageRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log(this.imageRef),this.imageRef.current.addEventListener("load",this.setSpan)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("img",{style:{gridRowEnd:"span ".concat(this.state.span)},ref:this.imageRef,alt:t,src:a.regular})}}]),t}(r.a.Component)),y=function(e){var t=e.image.map((function(e){return r.a.createElement(d,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={image:[]},a.onFormSubmit=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.unsplash.com/search/photos",{params:{query:t},headers:{Authorization:"Client-ID aa60bb60507f32cb271208df66deb6f956fb6db255d1889c1129cf83659f6153"}});case 2:n=e.sent,a.setState({image:n.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:20}},r.a.createElement(b,{onSubmit:this.onFormSubmit}),r.a.createElement(y,{image:this.state.image}))}}]),t}(r.a.Component);c.a.render(r.a.createElement((function(){return r.a.createElement(j,null)}),null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e792b445.chunk.js.map