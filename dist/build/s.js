!function(){"use strict";let F=document,t=devicePixelRatio,o=F=>F.getContext("2d"),i=()=>o(F.createElement("canvas")),e=F=>F.canvas,r=F=>e(F).width,n=F=>e(F).height,a=(F,t)=>e(F).width=t,d=(F,t)=>e(F).height=t,f=()=>performance.now(),l={t:f(),o:0},c=[],b=16,p=29,y=[],s=F=>y.find((t=>t.i.id===F)),m=Math,u=m.floor,X=m.min,A=m.hypot,x=m.abs,E={r:!1,n:0},D=[4,5,6,7],G=(F,t)=>{let o=(F=>A(F.x,F.y))(F);o>0&&(o=t/o,F.x*=o,F.y*=o)},v=(F,t,o,i)=>({l:F,p:t,s:F+o,m:t+i}),M=[],L=()=>{M.splice(0,M.length);for(let F of y)F.i.u&&M.push(F)},w=(F,t,o,i)=>{let e=((F,t,o,i)=>F.l+t.x<o.s+i.x&&F.p+t.y<o.m+i.y&&o.l+i.x<F.s+t.x&&o.p+i.y<F.m+t.y)(F.i.u.v,F,t.i.u.v,t);if(e){let e=(r=F,{x:(n=t).x-r.x,y:n.y-r.y});G(e,1),x(e.x)>x(e.y)?(F.x-=e.x*o,t.x+=e.x*i,F.y=u(F.y),t.y=u(t.y)):(F.y-=e.y*o,t.y+=e.y*i,F.x=u(F.x),t.x=u(t.x))}var r,n;return e},z=()=>{let F=s(2),t=s(1);var o,i,e,r;F&&F.i.u&&t&&(r=t,A((e=F).x-r.x,e.y-r.y)<2&&(o=t,(i=F).x=o.x,i.y=o.y,F.i.u=void 0,L(),((F,t,o,i,e)=>{let r=F[t];c.push({w:F,h:t,S:r,k:o,V:0,g:i,j:e})})(F,"z",8,.5,(()=>{t.i.Y.id=12,(F=>{y.splice(y.indexOf(F),1)})(F),E.r=!0}))))},O={a:1,b:0,c:0,d:1,e:0,f:0},P={a:1,b:0,c:0,d:1,e:0,f:8},h={a:0,b:1,c:-1,d:0,e:b,f:0},N={a:-1,b:0,c:0,d:-1,e:b,f:b},S={a:0,b:-1,c:1,d:0,e:0,f:b},k=[],V=(F,t)=>F.y+F.z-t.y-t.z,g=(()=>{let F=i();return a(F,240),d(F,240),F})(),H=o(F.getElementById("c")),I=(F,t,o,i)=>{if(i){let e=k[i.id],r=i.q||O;F.setTransform(r.a,r.b,r.c,r.d,r.e+t,r.f+o),F.drawImage(e,0,0)}},R={},j=F=>R[F],C={T:!0,v:v(0,0,b,b)},J={v:v(0,0,b,b)},K={v:v(3,10,9,7)};let Y=[13,14,15,16],q=[17,18,19,20],T=[21,22,23,24],U=[25,26,27,28],W={n:0};function B(){(()=>{let F=l.t;l.t=f(),l.o=(l.t-F)/1e3})(),(()=>{let F=l.o,t=s(0);if(t){let e,r=((F=0,t=0)=>({x:F,y:t}))();if(j(37)?(e=U,r.x=-1):j(39)&&(e=q,r.x=1),j(38)?(e=T,r.y=-1):j(40)&&(e=Y,r.y=1),e){W.n+=10*F;let n=u(W.n%e.length);t.i.U.id=e[n],G(r,30*F),i=r,(o=t).x+=i.x,o.y+=i.y}}var o,i})(),(()=>{let F=M.length,t=20;for(;t--;){let t=0;for(let o=0;o<F;o++){let i=M[o];for(let e=o+1;e<F;e++){let F=M[e],o=!1;i.i.u.T?F.i.u.T||(o=w(i,F,0,1)):o=F.i.u.T?w(i,F,1,0):w(i,F,.5,.5),o&&t++}}if(!t)break}})(),z(),(()=>{if(E.r&&E.n<D.length){E.n+=5*l.o;let F=u(E.n),t=s(3);t&&(F<D.length?t.i.U.id=D[F]:t.i.U=void 0)}})(),(()=>{let F=l.o;c=c.filter((t=>{t.V+=F;const{w:o,h:i,S:e,k:r,g:n,j:a}=t;if(t.V>n)return o[i]=r,a&&a(),!1;{let F=t.V/n;return o[i]=e+(r-e)*F,!0}}))})(),(()=>{let F=r(g),o=n(g),i=e(g);g.clearRect(0,0,F,o),y.sort(V);for(let F of y){let t=u(F.x+0),o=u(F.y+32-F.z),i=F.i;I(g,t,o,i.U),I(g,t,o-b,i.Y)}let c=innerWidth*t,p=innerHeight*t;r(H)!=c&&a(H,c),n(H)!=p&&d(H,p);let s=r(H),m=n(H),A=X(s/F,m/o);H.clearRect(0,0,s,m),H.setTransform(A,0,0,A,0,0),H.shadowBlur=0,H.imageSmoothingEnabled=!1,H.drawImage(i,0,0);{let F=(f()-l.t).toFixed(),t=(1/l.o).toFixed();H.shadowBlur=10,H.shadowColor="black",H.fillStyle="white",H.font="arial 20px",H.fillText("FPS "+t+" TIME "+F+" ms",0,20)}})(),requestAnimationFrame(B)}function Q(){!function(F){F.splice(0,F.length);let t={A:{U:{id:32},Y:{id:p},u:C},C:{Y:{id:30}},K:{Y:{id:30,q:h}},D:{Y:{id:p,q:S},u:C},E:{Y:{id:p,q:h},u:C},F:{Y:{id:8}},G:{Y:{id:9}},P:{Y:{id:10}},R:{Y:{id:11},id:1},H:{U:{id:33},Y:{id:p,q:S},u:C},I:{U:{id:33},Y:{id:p,q:h},u:C},J:{U:{id:4},Y:{id:p},id:3},L:{U:{id:32},Y:{id:31},u:C},M:{U:{id:33},Y:{id:31,q:h},u:C},N:{U:{id:34},Y:{id:31,q:N},u:C},O:{U:{id:35},Y:{id:31,q:S},u:C},X:{u:C}},o=[["       F       "," FFFFFFFFFFFFF "," FFPFFFFFFFRFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF "," FFFGFFFFFFPFF "],["CAAAAAAJAAAAAAK","D             E","D             E","D             E","D    LMNOL    E","D        L    E","D        O    E","D      LMN    E","DLMNOLMN      E","D             E","D             E","D             E","D             E","H             I"," XXXXXXXXXXXXX "]],i=0;for(let e of o){let o=0,r=0;for(let n of e){for(let e of n){if(" "!==e){let n=t[e];F.push({x:o,y:r,z:i,i:n})}o+=b}o=0,r+=b}i+=b}F.push({x:112,y:208,z:b,i:{u:K,U:{id:21},id:0}}),F.push({x:96,y:176,z:b,i:{u:J,U:{id:0},Y:{id:1,q:P}}}),F.push({x:112,y:176,z:b,i:{u:J,U:{id:0},Y:{id:1,q:P}}}),F.push({x:192,y:80,z:b,i:{u:J,U:{id:2},Y:{id:3,q:P},id:2}})}(y),L()}!async function(){await async function(){let F=await fetch("r"),t=await F.arrayBuffer(),o=new Uint8Array(t),r=0,n=4*o[r++],f=o.slice(r,r+n);r+=n;let l=o[r++];for(;l-- >0;){let F=o[r++],t=o[r++],n=F*t,l=o.slice(r,r+n);r+=n;let c=i();a(c,F),d(c,t);let b=c.getImageData(0,0,F,t);for(let F=0;F<l.length;F++){let t=l[F]<<2;b.data.set(f.slice(t,t+4),F<<2)}c.putImageData(b,0,0),k.push(e(c))}}(),F.onkeydown=F=>{R[F.keyCode]=!0},F.onkeyup=F=>{R[F.keyCode]=void 0},Q(),B()}()}();
