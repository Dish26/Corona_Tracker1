(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{20:function(e,t,a){e.exports={container:"Cards_container__1qwxa",card:"Cards_card__1Rr9I",infected:"Cards_infected__2zVK2",recovered:"Cards_recovered__2J4z1",deaths:"Cards_deaths__Z1FwG"}},208:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(69),o=a.n(c),u=a(5),s=a.n(u),i=a(10),l=a(70),d=a(71),p=a(83),f=a(82),m=a(226),v=a(230),h=a(227),b=a(228),y=a(72),g=a.n(y),C=a(73),_=a.n(C),E=a(74),x=a.n(E),w=function(e){var t=e.className,a=e.cardTitle,r=e.value,c=e.lastUpdate,o=e.cardSubtitle;return n.a.createElement(m.a,{item:!0,xs:12,md:3,component:v.a,className:_()(x.a.card,t)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},a),n.a.createElement(b.a,{variant:"h5",component:"h2"},n.a.createElement(g.a,{start:0,end:r,duration:2.75,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(c).toDateString()),n.a.createElement(b.a,{variant:"body2",component:"p"},o)))},O=a(20),j=a.n(O),k=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:j.a.container},n.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(w,{className:j.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:o,cardSubtitle:" Number of total Covid-19 confirmed cases."}),n.a.createElement(w,{className:j.a.recovered,cardTitle:"Recovered",value:r.value,lastUpdate:o,cardSubtitle:"Number of recoveries from COVID-19."}),n.a.createElement(w,{className:j.a.deaths,cardTitle:"Deaths",value:c.value,lastUpdate:o,cardSubtitle:"Number of deaths caused by COVID-19."}))):"Loading..."},N=a(29),S=a(41),D=a(30),I=a.n(D),U="https://covid19.mathdro.id/api",V=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,n,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=U,t&&(a="".concat(U,"/countries/").concat(t)),e.prev=2,e.next=5,I.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,u=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(U,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,r=e.reportDate;return{confirmed:t.total,deaths:a.total,date:r}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(U,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),T=a(79),A=a.n(T),B=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(r.useState)([]),d=Object(N.a)(l,2),p=d[0],f=d[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=a?n.a.createElement(S.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=p.length?n.a.createElement(S.Line,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return n.a.createElement("div",{className:A.a.container},u?m:v)},G=a(231),J=a(229),L=a(80),z=a.n(L),K=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(N.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,R();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),n.a.createElement(G.a,{className:z.a.formControl},n.a.createElement(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e}," ",e," ")}))))},Z=a(81),q=a.n(Z),F=a(42),M=a.n(F),W=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:t=e.sent,console.log(t),this.setState({data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:M.a.container},n.a.createElement("img",{className:M.a.image,src:q.a,alt:"COVID-19"}),n.a.createElement(k,{data:this.state.data}),n.a.createElement(K,{data:this.state.data,handleCountryChange:this.handleCountryChange}),n.a.createElement(B,{data:this.state.data,country:this.state.country}))}}]),a}(r.Component);o.a.render(n.a.createElement(W,null),document.getElementById("root"))},42:function(e,t,a){e.exports={container:"App_container__LrRNV",image:"App_image__1SD7Z"}},74:function(e,t,a){e.exports={card:"Card_card__2PsUo"}},79:function(e,t,a){e.exports={container:"Chart_container__32PXG"}},80:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__36cWK"}},81:function(e,t,a){e.exports=a.p+"static/media/image (1).d7265326.png"},85:function(e,t,a){e.exports=a(208)}},[[85,1,2]]]);
//# sourceMappingURL=main.1530f506.chunk.js.map