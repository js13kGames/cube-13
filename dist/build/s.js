!function(){"use strict";let F=document,X="ontouchstart"in window,t=devicePixelRatio,e=F=>F.getContext("2d"),W=()=>e(F.createElement("canvas")),G=F=>F.canvas,Y=F=>G(F).width,o=F=>G(F).height,i=(F,X)=>G(F).width=X,l=(F,X)=>G(F).height=X,r=F=>F.resetTransform(),n=(F,X,t,e)=>F.drawImage(X,t,e),f=F=>{r(F),F.clearRect(0,0,Y(F),o(F))},a=()=>performance.now();let d,u={o:a(),i:0},s=[],b=F=>F*F,c=F=>F<1/2.75?7.5625*F*F:F<2/2.75?7.5625*(F-=1.5/2.75)*F+.75:F<2.5/2.75?7.5625*(F-=2.25/2.75)*F+.9375:7.5625*(F-=2.625/2.75)*F+.984375,P=(F,X,t,e,W,G,Y)=>{let o=F[X];s.push({l:F,r:X,n:o,p:t,m:0,h:e,v:W,w:G,g:Y})},U=16,E=(F,X,t,e)=>({T:F,V:X,$:F+t,k:X+e}),S=Math,p=S.floor,y=S.round,A=S.min,m=S.max,M=S.hypot,h=S.abs,v=S.random,w=S.atan2,L=S.PI,N=2*L,D=(F,X,t)=>A(X,m(F,t)),O=(F=0,X=0)=>({x:F,y:X}),g=(F,X)=>({x:X.x-F.x,y:X.y-F.y}),x=F=>M(F.x,F.y),T=(F,X)=>{let t=x(F);t>0&&(t=X/t,F.x*=t,F.y*=t)},I=[],V=F=>I.find((X=>X.R.id===F)),$=[],k=()=>{$.splice(0,$.length);for(let F of I)F.R.j&&$.push(F)},C=(F,X,t,e)=>{let W=((F,X,t,e)=>F.T+X.x<t.$+e.x&&F.V+X.y<t.k+e.y&&t.T+e.x<F.$+X.x&&t.V+e.y<F.k+X.y)(F.R.j.J,F,X.R.j.J,X);if(W){let W=g(F,X);T(W,1),h(W.x)>h(W.y)?(F.x-=W.x*t,X.x+=W.x*e,F.y=p(F.y),X.y=p(X.y)):(F.y-=W.y*t,X.y+=W.y*e,F.x=p(F.x),X.x=p(X.x))}return W},H=68,z=1*(Math.exp(.5)-1);function R(F,X){let t=function(F){let X=0,t=F[5],e=Math.abs(F[6]),W=F[6]>0,G=F[7],Y=F[8],o=F[13],i=F[14],l=F[11],r=F[12],n=t,f=G,a=o,d=i,u=r,s=F[0],b=F[18],c=.1!==b,P=F[19],U=F[20],E=F[21],S=F[22],p=F[10],y=F[9],A=[F[1],F[2],F[4]],m=F[3],M=F[16],h=F[17],v=F[15],w=0,L=0,N=0,D=new Float32Array(32);for(let F=0;F<32;++F)D[F]=2*Math.random()-1;let O=0,g=0,x=0,T=0,I=0,V=new Float32Array(1024);for(let F=0;F<1024;++F)V[F]=0;let $=[];for(let F=0;0!==v&&++X>=v&&(n=t,f=G,a=o,d=i,u=r),0!==u&&F>=u&&(u=0,n*=l),f+=Y,n*=f,!(n>e&&(n=e,W));++F){let F=n;y>0&&(x+=p,F=n*(1+Math.sin(x)*y));let X=Math.floor(F);if(X<8&&(X=8),a+=d,a<0&&(a=0),a>.5&&(a=.5),++g>A[O]&&(g=0,++O>2))break;let t,e=g/A[O];t=0===O?e:1===O?1+2*(1-e)*m:1-e,M+=h;let W=Math.abs(Math.floor(M));W>1023&&(W=1023),0!==S&&(E*=S,E<1e-5&&(E=1e-5),E>.1&&(E=.1));let G=0;for(let F=0;F<8;++F){let F=0;if(++T,T>=X&&(T%=X,3===s))for(let F=0;F<32;++F)D[F]=2*Math.random()-1;let e=T/X;0===s?F=e<a?.5:-.5:1===s?F=e<a?2*e/a-1:1-2*(e-a)/(1-a):2===s?F=Math.sin(2*e*Math.PI):3===s&&(F=D[32*T/X|0]);let Y=w;b*=P,b<0&&(b=0),b>.1&&(b=.1),c?(L+=(F-w)*b,L-=L*U):(w=F,L=0),w+=L,N+=w-Y,N-=N*E,F=N,V[1023&I]=F,F+=V[I-W+1024&1023],I=I+1&1023,G+=F*t}$.push(G*z/8)}return new Float32Array($)}(X),e=F.createBuffer(1,t.length,44100);return e.copyToChannel(t,0,0),e}let j=[],J=[];function K(F,X=1){if(d){J[F]||(J[F]=R(d,new Float32Array(j[F])));let t=d.createBufferSource();t.buffer=J[F];let e=d.createGain();e.gain.value=.5*X,t.connect(e),e.connect(d.destination),t.start()}}let q={q:!1,B:0},B=[4,5,6,7],Q=()=>{let F=V(2),X=V(1);var t,e,W,G;F&&F.R.j&&X&&(G=X,M((W=F).x-G.x,W.y-G.y)<2&&(t=X,(e=F).x=t.x,e.y=t.y,F.R.j=void 0,k(),P(F,"z",8,0,.4,c,(()=>{X.R.Q.id=12,(F=>{I.splice(I.indexOf(F),1)})(F),q.q=!0,K(0)}))))},Z=F=>F.x>0&&F.x<224&&F.y>0&&F.y<224,_={a:1,b:0,c:0,d:1,e:0,f:0},FF={a:0,b:1,c:-1,d:0,e:U,f:0},XF={a:-1,b:0,c:0,d:-1,e:U,f:U},tF={a:0,b:-1,c:1,d:0,e:0,f:U},eF={Z:!0,J:E(0,0,U,U)},WF={J:E(0,0,U,U)},GF={A:{_:{id:79},Q:{id:H}},Y:{_:{id:71},j:eF},C:{Q:{id:69}},K:{Q:{id:69,FF:FF}},D:{Q:{id:H,FF:tF}},E:{Q:{id:H,FF:FF}},F:{Q:{id:8},_:{id:83}},G:{Q:{id:9},_:{id:83}},P:{Q:{id:10},_:{id:83}},S:{Q:{id:13},_:{id:83}},W:{_:{id:83}},U:{_:{id:82},j:eF},H:{_:{id:82},Q:{id:H,FF:tF}},I:{_:{id:82},Q:{id:H,FF:FF}},L:{_:{id:71},Q:{id:70},j:eF},M:{_:{id:72},Q:{id:70,FF:FF},j:eF},N:{_:{id:73},Q:{id:70,FF:XF},j:eF},O:{_:{id:74},Q:{id:70,FF:tF},j:eF},X:{j:eF},a:{j:WF,_:{id:0},Q:{id:1},XF:8},b:{j:WF,_:{id:2},Q:{id:3},XF:8,id:2},u:{j:{J:E(3,10,9,7)},_:{id:60},id:0},s:{Q:{id:11},id:1},t:{_:{id:80},Q:{id:H},id:4},d:{_:{id:4},Q:{id:H},j:eF,id:3}},YF=["CAAAAAAtAAAAAAK","D             E","D             E","D             E","D             E","D             E","D             E","D             E","D             E","D             E","D             E","D             E","D             E","H             I"],oF=[[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFFFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X     aaaa    X","X     a       X","X     a   b   X","X     a       X","X    aa       X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X        NaLMNX","X        M    X","X        L    X","X        O    X","X      LMN    X","XLMNaLMN      X","X         b   X","X             X","X    aa       X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFGFFFF "," FFFGFGFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X         b   X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFGGFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X         b   X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," FFFFGGFFFFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X          b  X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FGFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFGFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X         b   X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," FFFFFFGGGFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X         b   X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," GFFFFFFFFFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X         b   X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFG "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X         b   X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFG ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X         b   X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," GFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X         b   X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," GFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X         b   X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFPFFFFFFFFFF "," GFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X         b   X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],YF]],iF=[],lF={},rF=(F,X)=>{if(void 0===X||1===X)return iF[F];{let t=lF[F];t||(lF[F]={},t=lF[F]);let e=p(32*X),W=t[e];return W||(t[e]=fF(F,(F=>{F[0]=F[0]*X,F[1]=F[1]*X,F[2]=F[2]*X})),W=t[e]),W}},nF=(F,X)=>{if(0==X)return iF[F];{let t=lF[F];t||(lF[F]={},t=lF[F]);let e=t[X];if(!e){let W=X>>16&255,G=X>>8&255,Y=255&X;t[X]=fF(F,(F=>{F[0]=W,F[1]=G,F[2]=Y})),e=t[X]}return e}},fF=(F,X)=>{let t=e(iF[F]),r=Y(t),n=o(t),f=W();i(f,r),l(f,n);let a=t.getImageData(0,0,r,n),d=f.getImageData(0,0,r,n),u=a.data,s=d.data,b=0;for(;b<u.length;){let F=u.slice(b,b+4);X(F),s.set(F,b),b+=4}return f.putImageData(d,0,0),G(f)},aF=[],dF=()=>{for(let F of I)if(Z(F)){let X=F.R;if(X._){let F={id:X._.id,run(){for(let F=0;F<32;F++)rF(this.id,F/32)}};aF.push(F)}}},uF={tF:0,eF:1,m:0,WF:0},sF=()=>{uF.m=0,(F=>{let X=oF[F];I.splice(0,I.length);let t=0;for(let F of X){let X=0,W=0;for(let G of F){for(let F of G){if(" "!==F){let G=(e=GF[F],JSON.parse(JSON.stringify(e)));I.push({x:X,y:W,z:t,R:G})}X+=U}X=0,W+=U}t+=U}var e})(uF.tF),k(),q.q=!1,q.B=0,dF()},bF=()=>{let F=u.i,X=p(uF.m);uF.m+=F;let t=p(uF.m);if(X!=t&&t<=13){let F=5;K(5,.1+.5*D(0,1,(t-F)/(13-F)))}uF.m>=13&&(uF.eF=2,uF.WF--,(async()=>{let F=[];for(let W=1;W<14;W++)for(let G=1;G<14;G++)F[13*G+W]=(X=0,t=1,e=v(),X+e*(t-X));var X,t,e;for(let X of I)if(Z(X)){let t=p(X.x/U),e=F[13*p(X.y/U)+t]||0;P(X,"z",-80,e,.5,b)}K(2)})(),async function(){await async function(F){return new Promise((X=>{setTimeout(X,F)}))}(2500),uF.eF=uF.WF>0?4:5}())};let cF=(()=>{let F=[];return F[47]=-1,F.push(14,15,16,17,18,19,20,21,22,23),F[64]=-1,F.push(24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49),F})(),PF=F=>cF[F],UF=e(F.getElementById("c")),EF=0,SF=0,pF=1,yF={},AF={};let mF,MF=F=>yF[F],hF=()=>{F.onkeydown=F=>{yF[F.keyCode]=!0},F.onkeyup=F=>{delete yF[F.keyCode]};let e=G(UF);if(X){let F=(F,X)=>{let e=F.changedTouches;for(let F=0;F<e.length;F++){const{clientX:W,clientY:G,identifier:Y}=e[F];X(Y,O(W*t,G*t))}},X=X=>F(X,((F,X)=>{AF[F]=X})),W=X=>F(X,((F,X)=>{delete AF[F]}));e.ontouchstart=X,e.ontouchmove=X,e.ontouchend=W,e.ontouchcancel=W}e.onclick=()=>{d||(d=new AudioContext)}},vF=W(),wF=(F,X)=>F.y+F.z-X.y-X.z,LF=()=>{i(UF,EF),l(UF,SF);let F=p(EF/pF),X=p(SF/pF);i(vF,F),l(vF,X),f(vF);let t=p((F-240)/2);!function(F,X){I.sort(wF),xF();for(let t of I){let e=p(t.x+F),W=p(t.y+X-t.z),G=t.R,Y=G.XF||U;gF(vF,e,W,G._),gF(vF,e,W-Y,G.Q)}}(t,64),NF(t,X),mF&&(OF(vF,mF.GF.x/pF,mF.GF.y/pF,30,"rgba(255,255,255,0.3)"),OF(vF,mF.YF.x/pF,mF.YF.y/pF,10,"rgba(255,255,255,0.5)")),4==uF.eF?TF(6684672,"LEVEL FAIL TRY AGAIN"):3==uF.eF&&TF(26112,`NEXT LEVEL ${uF.tF} OF ${oF.length}`),f(UF),UF.setTransform(pF,0,0,pF,0,0),UF.imageSmoothingEnabled=!1,n(UF,G(vF),0,0)};let NF=(F,X)=>{r(vF);for(let X=0;X<uF.WF;X++)n(vF,iF[50],F+1+8*X,10);DF(vF,F,1,"LIVES "+uF.WF,16721408);let t=y(13-uF.m);for(let X=0;X<t;X++)n(vF,iF[51],F+224+8-8*X,10);let e=m(0,t)+" TIME";DF(vF,F+240-1-8*e.length,1,e,38655);let W="LEVEL "+(uF.tF+1);DF(vF,p(F+(240-8*W.length)/2),1,W,16777215);{let F=(a()-u.o).toFixed(),t=(1/u.i).toFixed();DF(vF,1,X-9,`FPS ${t}  TIME ${F}  ${""}`,16777215)}},DF=(F,X,t,e,W)=>{r(F);for(let G=0;G<e.length;G++){let Y=e.charCodeAt(G),o=PF(Y);if(void 0!==o){let e=nF(o,W);n(F,e,X+8*G,t)}}},OF=(F,X,t,e,W)=>{r(F),F.beginPath(),F.arc(p(X),p(t),p(e),0,N,!1),F.lineWidth=2,F.strokeStyle=W,F.stroke()},gF=(F,X,t,e)=>{if(e){let W=rF(e.id,e.brigthness),G=e.FF||_;F.setTransform(G.a,G.b,G.c,G.d,G.e+X,G.f+t),n(F,W,0,0)}},xF=()=>{for(let F of I){let X=D(0,1,(F.z- -48)/48),t=F.R;t._&&(t._.brigthness=X),t.Q&&(t.Q.brigthness=X)}};function TF(F,t){let e=224,W=p((Y(vF)-e)/2),G=p((o(vF)-160)/2);r(vF);let i=F>>16&255,l=F>>8&255,n=255&F;vF.fillStyle=`rgba(${i},${l},${n},0.8)`,vF.fillRect(W,G,e,160),DF(vF,p(W+(e-8*t.length)/2),G+48,t,16777215);let f=X?"TAP TO CONTINUE":"PRESS SPACE TO CONTINUE";DF(vF,p(W+(e-8*f.length)/2),G+96,f,16777215)}let IF=[52,53,54,55],VF=[56,57,58,59],$F=[60,61,62,63],kF=[64,65,66,67],CF={B:0},HF=()=>{let F=u.i,X=V(0);if(X){let G=O();if(MF(37)||MF(65)?G.x=-1:(MF(39)||MF(68))&&(G.x=1),MF(38)||MF(87)?G.y=-1:(MF(40)||MF(83))&&(G.y=1),mF){let F=g(mF.GF,mF.YF),X=w((W=F).y,W.x);X<0&&(X+=N);let t=p((X+L/8)/(L/4));G=0==t?O(1,0):1==t?O(1,1):2==t?O(0,1):3==t?O(-1,1):4==t?O(-1,0):5==t?O(-1,-1):6==t?O(0,-1):O(1,7==t?-1:0)}if(x(G)>0){let W=IF;G.x<0?W=kF:G.x>0&&(W=VF),G.y<0?W=$F:G.y>0&&(W=IF),CF.B+=10*F;let Y=p(CF.B%W.length);X.R._.id=W[Y],T(G,30*F),e=G,(t=X).x+=e.x,t.y+=e.y}}var t,e,W};let zF=()=>{let F=V(0),X=V(3);F&&X&&h(F.x-X.x)<8&&F.y<X.y&&(uF.tF++,uF.tF=uF.tF%oF.length,K(4),uF.eF=3)},RF=()=>{(X&&function(){for(let F in AF)return AF[F]}()||MF(32))&&(4!=uF.eF&&3!=uF.eF||(sF(),uF.eF=1))};function jF(){(()=>{let F=u.o;u.o=a(),u.i=(u.o-F)/1e3})(),EF=innerWidth*t,SF=innerHeight*t,pF=A(EF/240,SF/304),(()=>{if(X)if(mF)if(AF[mF.id]){mF.YF=AF[mF.id];let F=g(mF.YF,mF.GF),X=x(F),t=30*pF;X>t&&(T(F,t),mF.GF.x=mF.YF.x+F.x,mF.GF.y=mF.YF.y+F.y)}else mF=void 0;else for(let F in AF){mF={id:F,GF:AF[F],YF:AF[F]};break}})(),1==uF.eF&&(HF(),(()=>{let F=$.length,X=20;for(;X--;){let X=0;for(let t=0;t<F;t++){let e=$[t];for(let W=t+1;W<F;W++){let F=$[W],t=!1;e.R.j.Z?F.R.j.Z||(t=C(e,F,0,1)):t=F.R.j.Z?C(e,F,1,0):C(e,F,.5,.5),t&&X++}}if(!X)break}})(),Q(),(()=>{if(q.q&&q.B<B.length){q.B+=5*u.i;let F=p(q.B),X=V(3);if(X)if(F<B.length)X.R._.id=B[F];else{X.R._=void 0,X.R.j=void 0,k();let F=V(4);F&&(F.R._.id=81,K(1))}}})(),zF(),bF()),RF(),(()=>{let F=aF.shift();F&&F.run()})(),(()=>{let F=u.i;s=s.filter((X=>{if(X.h>0)return X.h-=F,!0;{X.m+=F;const{l:t,r:e,n:W,p:G,v:Y,w:o,g:i}=X;if(X.m>Y)return t[e]=G,i&&i(),!1;{let F=o(X.m/Y);return t[e]=W+(G-W)*F,!0}}}))})(),LF(),requestAnimationFrame(jF)}!async function(){await async function(){let F=await fetch("r"),X=await F.arrayBuffer(),t=new Uint8Array(X),e=0,Y=4*t[e++],o=t.slice(e,e+Y);e+=Y;let r=t[e++];for(;r--;){let F=t[e++],X=t[e++],Y=F*X,r=t.slice(e,e+Y);e+=Y;let n=W();i(n,F),l(n,X);let f=n.getImageData(0,0,F,X);for(let F=0;F<r.length;F++){let X=r[F]<<2;f.data.set(o.slice(X,X+4),F<<2)}n.putImageData(f,0,0),iF.push(G(n))}let n=t[e++];for(;n--;){let F=t[e++];j.push(X.slice(e,e+F)),e+=F}}(),hF(),uF.tF=0,uF.WF=13,sF(),jF()}()}();
