(this.webpackJsonpmba_lot=this.webpackJsonpmba_lot||[]).push([[0],{173:function(e,t,n){e.exports=n(452)},187:function(e,t){},208:function(e,t){},210:function(e,t){},327:function(e,t){},452:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),s=n(167),c=n.n(s),u=n(8),o=n.n(u),i=n(63),l=n(168),p=n(169),m=n(171),h=n(172),y=n(170),b=n.n(y),f=window.ethereum;f.enable();var d=new b.a(f),v=new d.eth.Contract([{constant:!0,inputs:[],name:"manager",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pickWinner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"random",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getPlayers",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"enter",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"players",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}],"0x8e80f7Bc61eEBbeB4155d53Af2797ccE1a91d211"),g=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onSubmit=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({message:"Waiting on transaction success..."}),e.next=4,d.eth.getAccounts();case 4:return n=e.sent,e.next=7,v.methods.enter().send({from:n[0],value:d.utils.toWei(a.state.value,"ether")});case 7:a.setState({message:"You have been entered!"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onClick=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({message:"Waiting on transaction success..."}),e.next=4,d.eth.getAccounts();case 4:return n=e.sent,e.next=7,v.methods.pickWinner().send({from:n[0]});case 7:a.setState({message:"A winner has been picked!"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={manager:"",players:[],balance:"",value:"",message:""},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.methods.manager().call();case 2:return t=e.sent,e.next=5,v.methods.getPlayers().call();case 5:return n=e.sent,e.next=8,d.eth.getBalance(v.options.address);case 8:a=e.sent,this.setState({manager:t,players:n,balance:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return(r.a.createElement("div",null,r.a.createElement("h2",null,"Lottory contract"),r.a.createElement("p",null,"this contract is managed by",this.state.manager,"there are currently ",this.state.players.length," are playing and there is ",d.utils.fromWei(this.state.balance,"ether")," $ in the game"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h4",null,"Want to try your luck?"),r.a.createElement("div",null,r.a.createElement("label",null,"Amount of ether to enter"),r.a.createElement("input",{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}})),r.a.createElement("button",null,"Enter")),r.a.createElement("hr",null),r.a.createElement("h4",null,"Ready to pick a winner?"),r.a.createElement("button",{onClick:this.onClick},"Pick a winner!"),r.a.createElement("hr",null),r.a.createElement("h1",null,this.state.message)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[173,1,2]]]);
//# sourceMappingURL=main.26f1279f.chunk.js.map