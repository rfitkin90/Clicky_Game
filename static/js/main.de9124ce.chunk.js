(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(7),r=n.n(i),c=n(1),o=n(2),u=n(4),g=n(3),l=n(5),m=(n(15),n(16),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light sticky-top",id:"main-navbar"},a.a.createElement("ul",{className:"navbar-nav d-flex justify-content-between container"},a.a.createElement("li",{className:"nav-item"},a.a.createElement("span",null,this.props.guessMessage)),a.a.createElement("li",{className:"nav-item"},a.a.createElement("span",null,a.a.createElement("strong",null,"Score: "),this.props.score," \xa0",a.a.createElement("strong",null,"/"),"\xa0 "),a.a.createElement("span",null,a.a.createElement("strong",null,"High Score: "),this.props.highScore))))}}]),t}(s.Component)),h=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"jumbotron jumbotron-fluid"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"Kitten Memory Game"),a.a.createElement("p",null,"Click on a kitten to gain a point, but don't click on any more than once!")))}}]),t}(s.Component),d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("img",{src:this.props.image,alt:"kitten",className:"kitten-card",id:this.props.id,checked:this.props.guessed,width:"200",height:"200",onClick:this.props.handleGuess}))}}]),t}(s.Component),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).shuffle=function(e){for(var t=e.length;t>0;){var n=Math.floor(Math.random()*t),s=e[--t];e[t]=e[n],e[n]=s}return e},n.appendCards=function(){return n.shuffle(n.props.kittens).map(function(e){return a.a.createElement(d,{key:e.id,id:e.id,image:e.image,guessed:e.guessed,handleGuess:n.props.handleGuess})})},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"container kitten-flexbox d-flex flex-wrap"},this.appendCards())}}]),t}(s.Component),f=n(8),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={score:0,highScore:0,kittens:f,guessMessage:"Click a kitten to play!"},n.handleGuess=function(e){e.preventDefault(),console.log("id:",e.target.id),console.log("guessed:",e.target.checked);var t=Number(e.target.id),s=Object.assign(n.state.kittens);e.target.checked?n.resetGame(s,"Incorrect guess! Play again!"):(n.state.highScore===n.state.score?n.incrementScore(s,t,n.state.highScore+1,"Correct guess!"):n.incrementScore(s,t,n.state.highScore,"Correct guess!"),n.state.score===s.length-1&&n.resetGame(s,"You win! Play again!"))},n.incrementScore=function(e,t,s,a){var i=e.findIndex(function(e){return e.id===t});e[i].guessed=!0,n.setState({score:n.state.score+1,highScore:s,kittens:e,guessMessage:a})},n.resetGame=function(e,t){e.forEach(function(e){e.guessed=!1}),n.setState({score:0,kittens:e,guessMessage:t})},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{id:"main-container"},console.log(window.location.origin),console.log("\n|============================== State Change ==============================|\n\n"),console.log("score:",this.state.score),console.log("highScore:",this.state.highScore),console.log("kittens:\n",this.state.kittens),a.a.createElement(m,{score:this.state.score,highScore:this.state.highScore,guessMessage:this.state.guessMessage}),a.a.createElement(h,null),a.a.createElement(p,{score:this.state.score,highScore:this.state.highScore,kittens:this.state.kittens,handleGuess:this.handleGuess}))}}]),t}(s.Component);r.a.render(a.a.createElement(j,null),document.getElementById("root"))},8:function(e){e.exports=[{id:0,image:"https://i.imgur.com/2uF6erS.jpg",guessed:!1},{id:1,image:"https://i.imgur.com/3gyVk9D.jpg",guessed:!1},{id:2,image:"https://i.imgur.com/8oo1LE7.jpg",guessed:!1},{id:3,image:"https://i.imgur.com/mMzIYGb.jpg",guessed:!1},{id:4,image:"https://i.imgur.com/qp4kTkc.jpg",guessed:!1},{id:5,image:"https://i.imgur.com/syBofYc.jpg",guessed:!1},{id:6,image:"https://i.imgur.com/Iq49VJ9.jpg",guessed:!1},{id:7,image:"https://i.imgur.com/0WoRiP2.jpg",guessed:!1},{id:8,image:"https://i.imgur.com/dYf969A.jpg",guessed:!1},{id:9,image:"https://i.imgur.com/Gm976en.jpg",guessed:!1},{id:10,image:"https://i.imgur.com/ItQb9jP.jpg",guessed:!1},{id:11,image:"https://i.imgur.com/qO5e2ch.jpg",guessed:!1}]},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.de9124ce.chunk.js.map