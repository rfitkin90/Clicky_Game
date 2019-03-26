(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(7),r=n.n(i),c=n(1),o=n(2),g=n(4),l=n(3),u=n(5),m=(n(15),n(16),function(e){function t(){return Object(c.a)(this,t),Object(g.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light sticky-top",id:"main-navbar"},s.a.createElement("ul",{className:"navbar-nav d-flex justify-content-between container"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("span",null,this.props.guessMessage)),s.a.createElement("li",{className:"nav-item"},s.a.createElement("span",null,s.a.createElement("strong",null,"Score: "),this.props.score," \xa0",s.a.createElement("strong",null,"/"),"\xa0 "),s.a.createElement("span",null,s.a.createElement("strong",null,"High Score: "),this.props.highScore))))}}]),t}(a.Component)),h=function(e){function t(){return Object(c.a)(this,t),Object(g.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"jumbotron jumbotron-fluid"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Kitten Memory Game"),s.a.createElement("p",null,"Click on a kitten to gain a point, but don't click on any more than once!")))}}]),t}(a.Component),d=function(e){function t(){return Object(c.a)(this,t),Object(g.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("img",{src:this.props.image,alt:"kitten",className:"kitten-card",id:this.props.id,checked:this.props.guessed,width:"200",height:"200",onClick:this.props.handleGuess}))}}]),t}(a.Component),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).shuffle=function(e){for(var t=e.length;t>0;){var n=Math.floor(Math.random()*t),a=e[--t];e[t]=e[n],e[n]=a}return e},n.appendCards=function(){return n.shuffle(n.props.kittens).map(function(e){return s.a.createElement(d,{key:e.id,id:e.id,image:e.image,guessed:e.guessed,handleGuess:n.props.handleGuess})})},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container kitten-flexbox d-flex flex-wrap"},this.appendCards())}}]),t}(a.Component),f=n(8),k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(g.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={score:0,highScore:0,kittens:f,guessMessage:"Click a kitten to play!"},n.handleGuess=function(e){e.preventDefault(),console.log("id:",e.target.id),console.log("guessed:",e.target.checked);var t=Number(e.target.id),a=Object.assign(n.state.kittens);e.target.checked?n.resetGame(a,"Incorrect guess! Play again!"):(n.state.highScore===n.state.score?n.incrementScore(a,t,n.state.highScore+1,"Correct guess!"):n.incrementScore(a,t,n.state.highScore,"Correct guess!"),n.state.score===a.length-1&&n.resetGame(a,"You win! Play again!"))},n.incrementScore=function(e,t,a,s){var i=e.findIndex(function(e){return e.id===t});e[i].guessed=!0,n.setState({score:n.state.score+1,highScore:a,kittens:e,guessMessage:s})},n.resetGame=function(e,t){e.forEach(function(e){e.guessed=!1}),n.setState({score:0,kittens:e,guessMessage:t})},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"main-container"},console.log(window.location.origin),console.log("\n|============================== State Change ==============================|\n\n"),console.log("score:",this.state.score),console.log("highScore:",this.state.highScore),console.log("kittens:\n",this.state.kittens),s.a.createElement(m,{score:this.state.score,highScore:this.state.highScore,guessMessage:this.state.guessMessage}),s.a.createElement(h,null),s.a.createElement(p,{score:this.state.score,highScore:this.state.highScore,kittens:this.state.kittens,handleGuess:this.handleGuess}))}}]),t}(a.Component);r.a.render(s.a.createElement(k,null),document.getElementById("root"))},8:function(e){e.exports=[{id:0,image:"/images/kitten0.jpg",guessed:!1},{id:1,image:"/images/kitten1.jpg",guessed:!1},{id:2,image:"/images/kitten2.jpg",guessed:!1},{id:3,image:"/images/kitten3.jpg",guessed:!1},{id:4,image:"/images/kitten4.jpg",guessed:!1},{id:5,image:"/images/kitten5.jpg",guessed:!1},{id:6,image:"/images/kitten6.jpg",guessed:!1},{id:7,image:"/images/kitten7.jpg",guessed:!1},{id:8,image:"/images/kitten8.jpg",guessed:!1},{id:9,image:"/images/kitten9.jpg",guessed:!1},{id:10,image:"/images/kitten10.jpg",guessed:!1},{id:11,image:"/images/kitten11.jpg",guessed:!1}]},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.be242297.chunk.js.map