(this["webpackJsonpwhite-whale"]=this["webpackJsonpwhite-whale"]||[]).push([[0],{154:function(n,e,t){},306:function(n,e,t){},319:function(n,e){},344:function(n,e){},346:function(n,e){},428:function(n,e){},430:function(n,e){},462:function(n,e){},464:function(n,e){},465:function(n,e){},470:function(n,e){},472:function(n,e){},478:function(n,e){},480:function(n,e){},499:function(n,e){},511:function(n,e){},514:function(n,e){},519:function(n,e){},534:function(n,e){},536:function(n,e){},570:function(n,e){},571:function(n,e){},592:function(n,e){},609:function(n,e){},675:function(n,e,t){"use strict";t.r(e);var c,a=t(12),i=t.n(a),r=t(291),s=t.n(r),o=(t(306),t(154),t(27)),u=t.n(o),l=t(98),f=t(5),d=t(6),p=t(15),h=t(14),b=t(99),j=t.n(b),x="0x082138b691c47773a8d2ffee453f665184959a53",m=[{gas:106958,inputs:[],name:"buyMe",outputs:[],stateMutability:"payable",type:"function"},{gas:1181,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],stateMutability:"view",type:"function"},{gas:1211,inputs:[],name:"pricePaid",outputs:[{name:"",type:"uint256"}],stateMutability:"view",type:"function"}],g=t(16),w=function(n){Object(p.a)(t,n);var e=Object(h.a)(t);function t(n){var c;return Object(f.a)(this,t),(c=e.call(this,n)).state={owner:"",pricePaid:""},c}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getInfo()}},{key:"getInfo",value:function(){var n=Object(l.a)(u.a.mark((function n(){var e,t,c,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new j.a("https://api.harmony.one"),t=new e.eth.Contract(m,x),n.next=4,t.methods.owner().call();case 4:return c=n.sent,n.next=7,t.methods.pricePaid().call();case 7:a=n.sent,this.setState({owner:c,pricePaid:a}),console.log(c);case 10:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h3",{children:["owner: ",Object(g.jsx)("br",{}),this.state.owner]}),Object(g.jsxs)("h3",{children:["pricePaid: ",Object(g.jsx)("br",{}),this.state.pricePaid/Math.pow(10,18)," ONE"]})]})}}]),t}(a.Component),y=w,O=t(294),v=t(295).a.button(c||(c=Object(O.a)(["\n  background: black;\n  display: inline-block;\n  padding: 0.35em 1.2em;\n  margin-top: 15px;\n  margin-left: 125px;\n  border: 0.1em solid #FFFFFF;\n  border-radius: 0.12em;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-family: 'Roboto',sans-serif;\n  font-size: 1em;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-align: center;\n  transition: all 0.2s;\n  :hover{\n    color: red;\n  }\n"]))),k=t(299),F=t.n(k),M=function(){var n=Object(l.a)(u.a.mark((function n(){var e,t,c,a,i,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F()();case 2:if(!(e=n.sent)){n.next=19;break}return t=new j.a(e),n.next=7,e.request({method:"eth_requestAccounts"});case 7:return c=n.sent,a=new t.eth.Contract(m,x),n.next=11,a.methods.pricePaid().call();case 11:return i=n.sent,console.log("Ethereum successfully detected!"),n.next=15,a.methods.buyMe().send({from:c[0],value:2*i});case 15:r=n.sent,console.log(r),n.next=20;break;case 19:console.error("Please install MetaMask!");case 20:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),P=M;var C=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{className:"App-pad",children:"whiteWhale"}),Object(g.jsx)("pre",{children:"    # @version ^0.2.0\n    # @title    whiteWhale\n    # @author   ZERO_ARTIST\n\n    owner       :   public(address)\n    pricePaid   :   public(uint256)\n\n    @external\n    @payable\n\n    def buyMe():\n\n        assert self.pricePaid * 2   <=   msg.value\n        self.pricePaid               =   msg.value\n\n        send( self.owner , self.balance )\n\n        self.owner   =   msg.sender\n"}),Object(g.jsx)(v,{onClick:P,children:"buyMe"}),Object(g.jsx)(y,{}),Object(g.jsx)("a",{href:"https://explorer.harmony.one/address/0x082138b691c47773a8d2ffee453f665184959a53",children:Object(g.jsx)("h3",{children:"contract@: one1pqsn3d53c3mh82xjllhy20mx2xzftxjnckyjts"})}),Object(g.jsx)("a",{href:"https://github.com/ZERO-ARTIST",children:Object(g.jsx)("img",{className:"App-logoCtr",src:"./GitHub-Mark-Light-32px.png",alt:"GitHub"})}),Object(g.jsx)("div",{className:"App-pad"})]})},A=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,679)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;t(n),c(n),a(n),i(n),r(n)}))};s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),A()}},[[675,1,2]]]);
//# sourceMappingURL=main.25ec4c0c.chunk.js.map