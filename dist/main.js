!function(){"use strict";!function(){function t(t){this.values=t,this.lengthI=t.length,this.lengthJ=t[0].length}function e(e){return new t([[1,0,0],[0,Math.cos(e),-Math.sin(e)],[0,Math.sin(e),Math.cos(e)]])}function i(e){return new t([[Math.cos(e),0,Math.sin(e)],[0,1,0],[-Math.sin(e),0,Math.cos(e)]])}function s(e){return new t([[Math.cos(e),-Math.sin(e),0],[Math.sin(e),Math.cos(e),0],[0,0,1]])}function n(t,e,i){this.x=parseFloat(t),this.y=parseFloat(e),this.z=parseFloat(i)}function o(){this.center=new n(-350,400,-1e3),this.velocity=new n(0,0,0),this.size=0,this.name="floor",this.rotations=new t([[1,0,0],[0,1,0],[0,0,1]]),this.vertices=[new n(this.center.x+50,this.center.y-50,this.center.z),new n(this.center.x+50,this.center.y+50,this.center.z),new n(this.center.x-50,this.center.y+50,this.center.z),new n(this.center.x-50,this.center.y-50,this.center.z)],this.faces=[[this.vertices[0],this.vertices[1],this.vertices[2],this.vertices[3],"black"]]}function r(){}function c(){}t.prototype.multiply=function(e){const i=[];for(let t=0;t<this.lengthI;t++){const s=[];for(let i=0;i<e.lengthJ;i++){let n=0;for(let s=0;s<this.lengthJ;s++)n+=this.values[t][s]*e.values[s][i];s.push(n)}i.push(s)}return new t(i)},t.prototype.simplifyZeros=function(){for(let t=0;t<this.lengthI;t++)for(let e=0;e<this.lengthJ;e++)Math.abs(this.values[t][e])<.001&&(this.values[t][e]=0)},t.prototype.dupe=function(){const e=[];for(let t=0;t<this.lengthI;t++)e.push(this.values[t].slice());return new t(e)},n.prototype.move=function(t,e,i){this.x+=t,this.y+=e,this.z+=i},n.prototype.rotateX=function(i){const s=e(i),n=new t([[this.x],[this.y],[this.z]]),o=s.multiply(n);this.x=o.values[0][0],this.y=o.values[1][0],this.z=o.values[2][0]},n.prototype.rotateY=function(e){const s=i(e),n=new t([[this.x],[this.y],[this.z]]),o=s.multiply(n);this.x=o.values[0][0],this.y=o.values[1][0],this.z=o.values[2][0]},n.prototype.rotateZ=function(e){const i=s(e),n=new t([[this.x],[this.y],[this.z]]),o=i.multiply(n);this.x=o.values[0][0],this.y=o.values[1][0],this.z=o.values[2][0]},n.prototype.multiplyBy=function(e){const i=e.multiply(new t([[this.x],[this.y],[this.z]]));return new n(i.values[0][0],i.values[1][0],i.values[2][0])},n.prototype.dupe=function(){return new n(this.x,this.y,this.z)},r.prototype=c.prototype,o.prototype=new r,o.prototype.dupe=function(){const t=new o;t.center=this.center.dupe(),t.rotations=this.rotations.dupe();for(let e=0;e<t.vertices.length;e++)t.vertices[e]=this.vertices[e].dupe();return this.fixFaces(),t},o.prototype.fixFaces=function(){this.faces=[[this.vertices[0],this.vertices[1],this.vertices[2],this.vertices[3],"black"]]},o.prototype.fall=function(){},o.prototype.jump=function(){},c.prototype.move=function(t,e,i){this.center.move(t,e,i);for(let s=0;s<this.vertices.length;s++)this.vertices[s].move(t,e,i)},c.prototype.absRotateX=function(t){this.rotateX(t),this.center.rotateX(t);for(let e=0;e<this.vertices.length;e++)this.vertices[e].rotateX(t)},c.prototype.absRotateY=function(t){this.rotateY(t),this.center.rotateY(t);for(let e=0;e<this.vertices.length;e++)this.vertices[e].rotateY(t)},c.prototype.absRotateZ=function(t){this.rotateZ(t),this.center.rotateZ(t);for(let e=0;e<this.vertices.length;e++)this.vertices[e].rotateZ(t)},c.prototype.checkCollision=function(t){if(t instanceof o&&this.center.z-this.size/2<t.center.z)return!0;if(Math.abs(this.center.z-t.center.z)<this.size/2+t.size/2){if(t instanceof o)return!0;if(this.center.x===t.center.x&&this.center.y===t.center.y)return!0}return!1},c.prototype.resolveCollisionZ=function(t){if(this instanceof o&&t instanceof o)return!1;if(t instanceof o){const e=t.center.z-(this.center.z-this.size/2);this.move(0,0,e),this.velocity.z=0}else if(this.center.z-this.size/2>t.center.z-t.size/2){const e=t.center.z+t.size/2-(this.center.z-this.size/2);this.move(0,0,e),this.velocity.z=0}else{const e=this.center.z+this.size/2-(t.center.z-t.size/2);t.move(0,0,e),t.velocity.z=0}},c.prototype.rotateX=function(t){const i=e(t);this.rotations=i.multiply(this.rotations)},c.prototype.rotateY=function(t){const e=i(t);this.rotations=e.multiply(this.rotations)},c.prototype.rotateZ=function(t){const e=s(t);this.rotations=e.multiply(this.rotations)},c.prototype.rotate=function(){const t=this.dupe();t.center=t.center.multiplyBy(t.rotations);for(let e=0;e<t.vertices.length;e++)t.vertices[e]=t.vertices[e].multiplyBy(t.rotations);return t.fixFaces(),t},c.prototype.jump=function(t){let e,i;e=this.staticCenter.x>0?3:2,i=this.staticCenter.y>750?1.2:.8,this.velocity.z+=15+3*(this.center.z-t)/100*e*i};const h=.7;function a(e,i){this.velocity=new n(0,0,0),this.acceleration=new n(0,0,-h),this.size=i,this.name="cube";const s=i/2;this.center=e,this.staticCenter=new n(this.center.x,this.center.y,this.center.z),this.rotations=new t([[1,0,0],[0,1,0],[0,0,1]]),this.vertices=[new n(e.x-s,e.y-s,e.z-s),new n(e.x+s,e.y-s,e.z-s),new n(e.x+s,e.y-s,e.z+s),new n(e.x-s,e.y-s,e.z+s),new n(e.x+s,e.y+s,e.z-s),new n(e.x-s,e.y+s,e.z-s),new n(e.x-s,e.y+s,e.z+s),new n(e.x+s,e.y+s,e.z+s)],this.faces=[[this.vertices[0],this.vertices[1],this.vertices[2],this.vertices[3],"red"],[this.vertices[4],this.vertices[5],this.vertices[6],this.vertices[7],"blue"],[this.vertices[1],this.vertices[4],this.vertices[7],this.vertices[2],"green"],[this.vertices[5],this.vertices[0],this.vertices[3],this.vertices[6],"orange"],[this.vertices[5],this.vertices[4],this.vertices[1],this.vertices[0],"gray"],[this.vertices[3],this.vertices[2],this.vertices[7],this.vertices[6],"purple"]]}function l(){}function v(t,e){this.x=parseFloat(t),this.z=parseFloat(e)}function u(t,e){return new v(e*t.x/(t.y+e),e*t.z/(t.y+e))}function p(t){if(t.length<=1)return t;const e=[],i=[],s=t[0],n=[s];for(let n=1;n<t.length;n++){const o=t[n];o.center.y<s.center.y?i.push(o):e.push(o)}const o=p(e),r=p(i);return o.concat(n).concat(r)}function y(t,e,i,s,n){const o=[];for(let e=0;e<t.length;e++)o.push(t[e].rotate());const r=p(o);for(let t=0;t<r.length;t++)if(r[t].center.y>100){const o=r[t].faces;for(let t=0;t<o.length;t++){const r=o[t],c=[0,0],h=u(r[0],n);c[0]+=h.x,c[1]+=h.z,e.beginPath(),e.moveTo(h.x+i,s-h.z);for(let t=1;t<r.length-1;t++){const o=u(r[t],n);c[0]+=o.x,c[1]+=o.z,e.lineTo(o.x+i,s-o.z)}e.fillStyle=r[r.length-1],e.closePath(),c[0]=c[0]/(r.length-1),c[1]=c[1]/(r.length-1);const a=u(r[0],n),l=u(r[1],n),v=[a.x-c[0],a.z-c[1]],p=[l.x-c[0],l.z-c[1]];v[0]*p[1]>v[1]*p[0]&&(e.stroke(),e.fill())}}}function f(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this.position=t,this.zTheta=e,this.zPhi=i,this.zOmega=s}function d(t,e,i){this.camera=t,this.background=i,this.x=new n(1,0,0),this.y=new n(0,1,0),this.z=new n(0,0,1),this.objects=[],this.floors=[];for(let t=0;t<e.length;t++)e[t]instanceof o?this.floors.push(e[t]):this.objects.push(e[t])}function m(){this.center=new n(0,0,0),this.vertices=[new n(-5e3,-5e3,-5e3),new n(5e3,-5e3,-5e3),new n(5e3,-5e3,5e3),new n(-5e3,-5e3,5e3),new n(5e3,5e3,-5e3),new n(-5e3,5e3,-5e3),new n(-5e3,5e3,5e3),new n(5e3,5e3,5e3)],this.rotations=new t([[1,0,0],[0,1,0],[0,0,1]]),this.faces=[[this.vertices[0],this.vertices[1],this.vertices[2],this.vertices[3],"gray"],[this.vertices[4],this.vertices[5],this.vertices[6],this.vertices[7],"gray"],[this.vertices[1],this.vertices[4],this.vertices[7],this.vertices[2],"lightblue"],[this.vertices[5],this.vertices[0],this.vertices[3],this.vertices[6],"lightblue"],[this.vertices[5],this.vertices[4],this.vertices[1],this.vertices[0],"black"],[this.vertices[3],this.vertices[2],this.vertices[7],this.vertices[6],"black"]]}function g(){}function w(e,i){this.velocity=new n(0,0,0),this.acceleration=new n(0,0,-h),this.size=i,this.name="pyramid";const s=i/2;this.center=e,this.staticCenter=new n(this.center.x,this.center.y,this.center.z),this.rotations=new t([[1,0,0],[0,1,0],[0,0,1]]),this.vertices=[new n(e.x-s,e.y-s,e.z-s),new n(e.x+s,e.y-s,e.z-s),new n(e.x+s,e.y+s,e.z-s),new n(e.x-s,e.y+s,e.z-s),new n(e.x,e.y,e.z+s)],this.faces=[[this.vertices[0],this.vertices[3],this.vertices[2],this.vertices[1],"red"],[this.vertices[0],this.vertices[1],this.vertices[4],"blue"],[this.vertices[1],this.vertices[2],this.vertices[4],"green"],[this.vertices[2],this.vertices[3],this.vertices[4],"orange"],[this.vertices[0],this.vertices[4],this.vertices[3],"gray"]]}function z(){}function x(t,e){let i=!0;return function(){i&&(t(...arguments),i=!1,setTimeout((()=>{i=!0}),e))}}function b(t){const e=new a(new n(0,0,0),t.size);return e.move(t.center.x,t.center.y,t.center.z),e.staticCenter.move(t.center.x,t.center.y,t.center.z),e.rotations.values=t.rotations.values,e.velocity.move(t.velocity.x,t.velocity.y,t.velocity.z),e.fixFaces(),e}function j(t){const e=new w(new n(0,0,0),t.size);return e.move(t.center.x,t.center.y,t.center.z),e.staticCenter.move(t.center.x,t.center.y,t.center.z),e.rotations.values=t.rotations.values,e.velocity.move(t.velocity.x,t.velocity.y,t.velocity.z),e.fixFaces(),e}function k(t){const e=new o;return e.move(t.center.x+350,t.center.y-400,t.center.z+1e3),e.rotations.values=t.rotations.values,e.velocity.move(t.velocity.x,t.velocity.y,t.velocity.z),e.fixFaces(),e}l.prototype=c.prototype,a.prototype=new l,a.prototype.fall=function(){this.velocity.move(this.acceleration.x,this.acceleration.y,this.acceleration.z),this.move(this.velocity.x,this.velocity.y,this.velocity.z)},a.prototype.dupe=function(){const t=new a(this.center,this.size);t.rotations=this.rotations.dupe();for(let e=0;e<0;e++)t.vertices[e]=this.vertices[e].dupe();return t},a.prototype.fixFaces=function(){this.faces=[[this.vertices[0],this.vertices[1],this.vertices[2],this.vertices[3],"red"],[this.vertices[4],this.vertices[5],this.vertices[6],this.vertices[7],"blue"],[this.vertices[1],this.vertices[4],this.vertices[7],this.vertices[2],"green"],[this.vertices[5],this.vertices[0],this.vertices[3],this.vertices[6],"orange"],[this.vertices[5],this.vertices[4],this.vertices[1],this.vertices[0],"gray"],[this.vertices[3],this.vertices[2],this.vertices[7],this.vertices[6],"purple"]]},f.prototype.move=function(t,e,i){this.position.x+=t,this.position.y+=e,this.position.z+=i},f.prototype.turn=function(t){this.zTheta+=t},f.prototype.dip=function(t){this.zPhi-=t},f.prototype.screw=function(t){this.zOmega+=t},d.prototype.turn=function(t){this.camera.turn(t);for(let e=0;e<this.objects.length;e++)this.objects[e].rotateZ(-t);for(let e=0;e<this.floors.length;e++)this.floors[e].rotateZ(-t);this.x.rotateZ(-t),this.y.rotateZ(-t),this.z.rotateZ(-t)},d.prototype.dip=function(t){this.camera.dip(t);for(let e=0;e<this.objects.length;e++)this.objects[e].rotateX(t);for(let e=0;e<this.floors.length;e++)this.floors[e].rotateX(t);this.x.rotateX(t),this.y.rotateX(t),this.z.rotateX(t)},d.prototype.screw=function(t){this.camera.dip(t);for(let e=0;e<this.objects.length;e++)this.objects[e].rotateY(-t);for(let e=0;e<this.floors.length;e++)this.floors[e].rotateY(-t);this.x.rotateY(-t),this.y.rotateY(-t),this.z.rotateY(-t)},d.prototype.move=function(t,e,i){this.camera.move(t,e,i);for(let s=0;s<this.objects.length;s++)this.objects[s].move(-t,-e,-i);for(let s=0;s<this.floors.length;s++)this.floors[s].move(-t,-e,-i)},d.prototype.fall=function(){const t=this.objects.concat(this.floors);for(let t=0;t<this.objects.length;t++)this.objects[t].fall();for(let e=0;e<t.length-1;e++)for(let i=e+1;i<t.length;i++)t[e].checkCollision(t[i])&&t[e].resolveCollisionZ(t[i])},d.prototype.jump=function(t){for(let e=0;e<this.objects.length;e++)this.objects[e].jump(t)},d.prototype.addObject=function(t){t instanceof o?this.floors.push(t):this.objects.push(t)},d.prototype.render=function(t,e,i,s){y(this.floors,t,e,i,s),y(this.objects,t,e,i,s)},g.prototype=c.prototype,m.prototype=new g,z.prototype=c.prototype,w.prototype=new z,w.prototype.fall=function(){this.velocity.move(this.acceleration.x,this.acceleration.y,this.acceleration.z),this.move(this.velocity.x,this.velocity.y,this.velocity.z)},w.prototype.dupe=function(){const t=new w(this.center,this.size);t.rotations=this.rotations.dupe();for(let e=0;e<0;e++)t.vertices[e]=this.vertices[e].dupe();return t},w.prototype.fixFaces=function(){this.faces=[[this.vertices[0],this.vertices[3],this.vertices[2],this.vertices[1],"red"],[this.vertices[0],this.vertices[1],this.vertices[4],"blue"],[this.vertices[1],this.vertices[2],this.vertices[4],"green"],[this.vertices[2],this.vertices[3],this.vertices[4],"orange"],[this.vertices[0],this.vertices[4],this.vertices[3],"gray"]]},document.addEventListener("DOMContentLoaded",(t=>{const e=document.getElementById("3d-canvas").getContext("2d"),i=new m;let s=new f(new n(0,0,0),0),r=new d(s,[],i);function c(t){S&&requestAnimationFrame((()=>c(t))),e.clearRect(0,0,600,600),e.fillStyle="lightblue",e.fillRect(0,0,600,600),t.fall(),t.render(e,300,300,200)}document.addEventListener("keydown",(t=>{"a"===t.key&&r.turn(.2),"d"===t.key&&r.turn(-.2),"w"===t.key&&r.dip(-.2),"s"===t.key&&r.dip(.2),"q"===t.key&&r.screw(-.2),"e"===t.key&&r.screw(.2),"ArrowUp"===t.key&&r.move(0,0,10),"ArrowDown"===t.key&&r.move(0,0,-10),"ArrowLeft"===t.key&&r.move(-10,0,0),"ArrowRight"===t.key&&r.move(10,0,0),"r"===t.key&&r.move(0,10,0),"f"===t.key&&r.move(0,-10,0)})),document.getElementById("shake").addEventListener("click",(t=>{r.jump(r.floors[0].center.z)}));const h=document.querySelector("div.answers"),l=document.getElementById("proj"),v=x((function(t){const e=h.children;for(let t=0;t<e.length;t++)e[t].remove();h.appendChild(t)}),1e3);l.addEventListener("click",(t=>{const e=document.createElement("p");e.innerText="Projections are mappings of 3d objects to a 2d plane. Think of the shadow of a cube. As you rotate that cube, the shadow will change as well. That is the principle that drives 3d engines.",v(e)})),document.getElementById("rot").addEventListener("click",(t=>{const e=document.createElement("p");e.innerText="Rotations work by leveraging trigonometry to change the positions of vertices on each object, and then rendering from the new positions.",v(e)})),document.getElementById("what").addEventListener("click",(t=>{const e=document.createElement("p");e.innerText="This engine is made with 2d canvas and a simple physics engine made from scratch that considers every object a non-rotational hard body. To read more about the underlying math concepts ";const i=document.createElement("a");i.innerText="click me.",i.href="https://en.wikipedia.org/wiki/Rotation_matrix",i.target="_blank",i.rel="noopener noreferrer",e.append(i),v(e)}));const u=document.querySelector("div.add-items");u.dataset.Shape="none";for(let t=0;t<64;t++){const e=document.createElement("button");e.dataset.Id=t,e.dataset.Finish="false",u.appendChild(e);const i=new o,s=Math.floor(t/8),n=t%8;i.move(100*n,100*s,0),r.addObject(i)}r.move(0,0,-500),r.move(0,-100,0),r.dip(.2);const p=function(t,e){let i=0;return function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];i+=1,setTimeout((()=>{i-=1,0===i&&function(t){r.addObject(t)}(...e)}),300)}}();u.addEventListener("click",(t=>{const e=t.target.dataset.Id,i=Math.floor(e/8),s=e%8;let o;"true"===t.target.dataset.Finish?alert("Cannot place objects on top of pyramid, will cause unstable structure."):"cube"===t.currentTarget.dataset.Shape?(o=new a(new n(100*s-350,1100-100*i,1e3),100),o.move(-r.camera.position.x,-r.camera.position.y,-r.camera.position.z),o.rotations=r.floors[0].rotations,p(o)):"pyramid"===t.currentTarget.dataset.Shape?(o=new w(new n(100*s-350,1100-100*i,1e3),100),o.move(-r.camera.position.x,-r.camera.position.y,-r.camera.position.z),o.rotations=r.floors[0].rotations,p(o),t.target.dataset.Finish="true"):alert("Please select a shape.")}));const y=document.getElementById("cube"),g=document.getElementById("pyramid");y.addEventListener("click",(t=>{u.dataset.Shape="cube",y.classList.add("selected"),g.classList.remove("selected")})),g.addEventListener("click",(t=>{u.dataset.Shape="pyramid",g.classList.add("selected"),y.classList.remove("selected")}));const z=document.getElementById("new"),E=document.getElementById("save"),F=document.getElementById("load");z.addEventListener("click",(t=>{S=!1,s=new f(new n(0,0,0),0),r=new d(s,[],i);for(let t=0;t<64;t++){const e=new o,i=Math.floor(t/8),s=t%8;e.move(100*s,100*i,0),r.addObject(e)}r.move(0,0,-500),r.move(0,-100,0),r.dip(.2);const e=u.children;for(let t=0;t<e.length;t++)e[t].dataset.Finish="false";S=!0,c(r)})),E.addEventListener("click",(t=>{const e=[],i=u.children;for(let t=0;t<i.length;t++)e.push(i[t].dataset.Finish);localStorage.setItem("scene",JSON.stringify(r)),localStorage.setItem("finishArray",JSON.stringify(e))})),F.addEventListener("click",(t=>{S=!1;const e=JSON.parse(localStorage.getItem("scene")),i=JSON.parse(localStorage.getItem("finishArray"));r=function(t){const e=function(t){const e=new f(new n(0,0,0));return e.position.x=t.position.x,e.position.y=t.position.y,e.position.z=t.position.z,e.zTheta=t.zTheta,e.zPhi=t.zPhi,e.zOmega=t.zOmega,e}(t.camera),i=new d(e,[],new m);for(let e=0;e<t.floors.length;e++){const s=k(t.floors[e]);i.addObject(s)}for(let e=0;e<t.objects.length;e++){if("cube"===t.objects[e].name){const s=b(t.objects[e]);i.addObject(s)}if("pyramid"===t.objects[e].name){const s=j(t.objects[e]);i.addObject(s)}}return i.x=new n(t.x.x,t.x.y,t.x.z),i.y=new n(t.y.x,t.y.y,t.y.z),i.z=new n(t.z.x,t.z.y,t.z.z),i}(e);const s=u.children;for(let t=0;t<s.length;t++)s[t].dataset.Finish=i[t];S=!0,c(r)}));const T=document.querySelector("div.quote"),I=document.createElement("button");async function L(){try{I.toggleAttribute("hidden");const t=await fetch("https://api.api-ninjas.com/v1/facts",{headers:{"X-Api-Key":"SlsDFWMrQ84X1Z35oeeXnQ==GA3AUhPqul7zmRE4"}});if(!t.ok)throw t;{const e=await t.json();console.log(e[0].fact),T.children[0].innerText=e[0].fact,await setTimeout((()=>T.children[1].toggleAttribute("hidden")),3e3)}}catch(t){console.log(t),T.children[0].innerText="Cannot load fact."}}I.innerText="New Fact!",T.appendChild(I),L();const M=x(L,3e3);I.addEventListener("click",M);let S=!0;c(r)}))}()}();
//# sourceMappingURL=main.js.map