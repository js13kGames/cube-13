!function(){"use strict";let F=document,X="ontouchstart"in window,t=devicePixelRatio,e=F=>F.getContext("2d"),i=()=>e(F.createElement("canvas")),o=F=>F.canvas,l=F=>o(F).width,G=F=>o(F).height,W=(F,X)=>o(F).width=X,r=(F,X)=>o(F).height=X,f=F=>F.resetTransform(),a=(F,X,t,e)=>F.drawImage(X,t,e),Y=F=>{f(F),F.clearRect(0,0,l(F),G(F))},n=()=>performance.now(),d=F=>JSON.parse(JSON.stringify(F));let P={o:n(),r:0},s=[],c=F=>F*F,u=F=>F<1/2.75?7.5625*F*F:F<2/2.75?7.5625*(F-=1.5/2.75)*F+.75:F<2.5/2.75?7.5625*(F-=2.25/2.75)*F+.9375:7.5625*(F-=2.625/2.75)*F+.984375,b=(F,X,t,e,i,o,l)=>{let G=F[X];s.push({n:F,p:X,m:G,h:t,T:0,v:e,k:i,g:o,V:l})},E=16,M=F=>F.x>0&&F.x<224&&F.y>0&&F.y<224,L=F=>F.z==E&&M(F),O=F=>0==F.z&&M(F),S=(F,X,t,e)=>({R:F,$:X,j:F+t,B:X+e}),y=(F,X,t,e)=>F.R+X.x<t.j+e.x&&F.$+X.y<t.B+e.y&&t.R+e.x<F.j+X.x&&t.$+e.y<F.B+X.y,N=Math,U=N.floor,p=N.round,A=N.min,m=N.max,h=N.hypot,w=N.abs,T=N.random,v=N.atan2,k=N.PI,D=2*k,g=(F,X,t)=>A(X,m(F,t)),x=(F,X)=>((F,X,t)=>F+t*(X-F))(F,X,T());let V,I=(F=0,X=0)=>({x:F,y:X}),H=(F,X)=>({x:X.x-F.x,y:X.y-F.y}),R=(F,X)=>h(F.x-X.x,F.y-X.y),$=F=>h(F.x,F.y),C=(F,X)=>{let t=$(F);t>0&&(t=X/t,F.x*=t,F.y*=t)},Z=[],Q=F=>Z.find((X=>X.J.id===F)),z=F=>Z.filter((X=>X.J.id===F)),K=F=>Z.splice(Z.indexOf(F),1),j=94,B=109,J={a:1,b:0,c:0,d:1,e:0,f:0},q={a:0,b:1,c:-1,d:0,e:E,f:0},_={a:-1,b:0,c:0,d:-1,e:E,f:E},FF={a:0,b:-1,c:1,d:0,e:0,f:E},XF=S(0,0,E,E),tF={q:!0,_:XF},eF={_:XF},iF={A:{FF:{id:105},XF:{id:j}},Y:{FF:{id:97},tF:tF},C:{XF:{id:95}},K:{XF:{id:95,eF:q}},D:{XF:{id:j,eF:FF}},E:{XF:{id:j,eF:q}},F:{XF:{id:12},FF:{id:B}},G:{XF:{id:13},FF:{id:B}},P:{XF:{id:14},FF:{id:B},id:9},S:{XF:{id:17},FF:{id:B}},W:{FF:{id:B}},Z:{XF:{id:22},FF:{id:B},id:13},Q:{XF:{id:23},FF:{id:B},id:14},U:{FF:{id:108},tF:tF},H:{FF:{id:108},XF:{id:j,eF:FF}},I:{FF:{id:108},XF:{id:j,eF:q}},L:{FF:{id:97},XF:{id:96},tF:tF},M:{FF:{id:98},XF:{id:96,eF:q},tF:tF},N:{FF:{id:99},XF:{id:96,eF:_},tF:tF},O:{FF:{id:100},XF:{id:96,eF:FF},tF:tF},X:{tF:tF},a:{tF:eF,FF:{id:0},XF:{id:1},iF:8},b:{tF:eF,FF:{id:2},XF:{id:3},iF:8,id:2},c:{tF:eF,FF:{id:4},XF:{id:5},iF:8,id:4},f:{tF:eF,FF:{id:6},XF:{id:7},iF:8,id:6},u:{tF:{_:S(3,10,9,7)},FF:{id:79},id:0},s:{XF:{id:15},FF:{id:B},id:1},w:{XF:{id:18},FF:{id:B},id:3},y:{XF:{id:20},FF:{id:B},id:5},l:{FF:{id:65},id:10},i:{FF:{id:66},id:11},t:{FF:{id:106},XF:{id:j},id:8},d:{FF:{id:8},XF:{id:j},tF:tF,id:7}},oF=1*(Math.exp(.5)-1);function lF(F,X){let t=function(F){let X=0,t=F[5],e=Math.abs(F[6]),i=F[6]>0,o=F[7],l=F[8],G=F[13],W=F[14],r=F[11],f=F[12],a=t,Y=o,n=G,d=W,P=f,s=F[0],c=F[18],u=.1!==c,b=F[19],E=F[20],M=F[21],L=F[22],O=F[10],S=F[9],y=[F[1],F[2],F[4]],N=F[3],U=F[16],p=F[17],A=F[15],m=0,h=0,w=0,T=new Float32Array(32);for(let F=0;F<32;++F)T[F]=2*Math.random()-1;let v=0,k=0,D=0,g=0,x=0,V=new Float32Array(1024);for(let F=0;F<1024;++F)V[F]=0;let I=[];for(let F=0;0!==A&&++X>=A&&(a=t,Y=o,n=G,d=W,P=f),0!==P&&F>=P&&(P=0,a*=r),Y+=l,a*=Y,!(a>e&&(a=e,i));++F){let F=a;S>0&&(D+=O,F=a*(1+Math.sin(D)*S));let X=Math.floor(F);if(X<8&&(X=8),n+=d,n<0&&(n=0),n>.5&&(n=.5),++k>y[v]&&(k=0,++v>2))break;let t,e=k/y[v];t=0===v?e:1===v?1+2*(1-e)*N:1-e,U+=p;let i=Math.abs(Math.floor(U));i>1023&&(i=1023),0!==L&&(M*=L,M<1e-5&&(M=1e-5),M>.1&&(M=.1));let o=0;for(let F=0;F<8;++F){let F=0;if(++g,g>=X&&(g%=X,3===s))for(let F=0;F<32;++F)T[F]=2*Math.random()-1;let e=g/X;0===s?F=e<n?.5:-.5:1===s?F=e<n?2*e/n-1:1-2*(e-n)/(1-n):2===s?F=Math.sin(2*e*Math.PI):3===s&&(F=T[32*g/X|0]);let l=m;c*=b,c<0&&(c=0),c>.1&&(c=.1),u?(h+=(F-m)*c,h-=h*E):(m=F,h=0),m+=h,w+=m-l,w-=w*M,F=w,V[1023&x]=F,F+=V[x-i+1024&1023],x=x+1&1023,o+=F*t}I.push(o*oF/8)}return new Float32Array(I)}(X),e=F.createBuffer(1,t.length,44100);return e.copyToChannel(t,0,0),e}let GF=[],WF=[];function rF(){V||(V=new AudioContext)}function fF(F,X=1){if(V){WF[F]||(WF[F]=lF(V,new Float32Array(GF[F])));let t=V.createBufferSource();t.buffer=WF[F];let e=V.createGain();e.gain.value=.5*X,t.connect(e),e.connect(V.destination),t.start()}}X||rF();let aF=[],YF=[],nF=[],dF=!1,PF=()=>{dF=!0},sF=()=>{(()=>{if(dF){dF=!1,aF.splice(0,aF.length),YF.splice(0,YF.length),nF.splice(0,nF.length);for(let F of Z)F.J.tF&&aF.push(F),L(F)&&nF.push(F),O(F)&&YF.push(F)}})(),function(){let F=aF.length,X=20;for(;X--;){let X=0;for(let t=0;t<F;t++){let e=aF[t];for(let i=t+1;i<F;i++){let F=aF[i],t=!1;e.J.tF.q?F.J.tF.q||(t=cF(e,F,0,1)):t=F.J.tF.q?cF(e,F,1,0):cF(e,F,.5,.5),t&&X++}}if(!X)break}}(),function(){for(let F of nF)if(F.z==E){let X=F.J.tF?F.J.tF._:XF,t=!1;for(let e of YF)if(y(X,F,XF,e)){t=!0;break}t||EF(F)}}()},cF=(F,X,t,e)=>{let i=y(F.J.tF._,F,X.J.tF._,X);if(i){let i=H(F,X);C(i,1),w(i.x)>w(i.y)?(F.x-=i.x*t,X.x+=i.x*e,F.y=U(F.y),X.y=U(X.y)):(F.y-=i.y*t,X.y+=i.y*e,F.x=U(F.x),X.x=U(X.x))}return i};let uF,bF=async(F,X)=>{await async function(F){return new Promise((X=>{setTimeout(X,F)}))}(1e3*X),EF(F)},EF=F=>{F.z-=1,delete F.J.tF,PF(),b(F,"z",F.z-96,0,.5,c,(()=>K(F))),0===F.J.id&&fF(7,.7)},MF={oF:!1,lF:0},LF=[8,9,10,11],OF=(F,X,t,e)=>{let i=Q(X);if(i&&(F.push(i),i.J.tF)){let F=Q(t);F&&R(i,F)<3&&(o=F,(l=i).x=o.x,l.y=o.y,delete i.J.tF,PF(),b(i,"z",8,0,.4,u,(()=>{F.J.XF.id=e,K(i),fF(2)})))}var o,l},SF=["CAAAAAAtAAAAAAK","D             E","D             E","D             E","D             E","D             E","D             E","D             E","D             E","D             E","D             E","D             E","D             E","H             I"],yF=[[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFFFGGFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," GGFFFFFFFFFFF "," FFFFFFFFFFFGF "," FFFFFFFFFFFFF "," FFFFFFFFFsFFF "," FFFFFFFFFFFFF "," GFFFFFFFFFFFF "," FFFFFFFFFFFGG ","WFFFFFFFFFFFFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X       b     X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW "," FFFFGFFFFFFFF "," FFFFFFFFFFGGF "," FFsFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFGFFFFFFFF "," FFGFFFFFFFFFF "," FFFFFFFFFwFFF "," FFFFFFFFFFFFF "," GGGFFFFFFFFFF "," FFFFFFFFFGGFF "," FFFFFFFFFFFFF "," FFGGGFFFFGFFF ","WFFFFFFFFFFFFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X   b         X","X             X","X             X","X             X","X             X","X             X","X             X","X             X","X          c  X","U      u      U"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW "," FFFGGFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFGGFF "," FFGGGFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFGG "," FFFsFFFFFFFFF "," FFFFFFFFFFFFF "," FGGFFFFFFFFFF "," FFGFFFFFFFFFF "," FFFFFFFFFwFFF "," FFFFFFFFFFFFF ","WFFGFFFGGFFFFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X    b         X","X             X","XLMNOLM       X","X             X","X             X","X             X","X         c   X","X       LMNOLMX","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFyF "," FFFGFFFFGFFFF "," FFFGFGFFFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFFFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","X             X","X             X","X       L     X","X       MOLMNOX","X         a   X","X    f    a   X","X         a   X","X    a    a   X","X         aaaaX","U      u      U"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFPFFPPFFFFFF "," FFFFFFGGGFFFF "," FFGGFFsPFFFFF "," FFFGFFPFFPFFF "," FFFPFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFPFFFFGF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X          a  X","X             X","X             X","X             X","X             X","X      b      X","X             X","X  a          X","X             X","X          a  X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW "," FFFPPFFFFFFFF "," FFyPPFFFFFFFF "," FFFFFFGGGFwFF "," FFFFFFFFFFGFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFsFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFGGF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGPPPPFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X     f       X","X          a  X","X             X","XLNOMLNOM  aaaX","X          acaX","X          aaaX","X             X","X   b         X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW "," GFFFFGFPFGFFF "," FPPPFFGPFFFFF "," FFFPFPPPGGFFF "," FPFPGPGPPPPPP "," PPGPPPFsFFFGP "," FPFPPPPPPPPFP "," GPFFGPFFPFFFP "," GPPPGPPPPFPPP "," FFPGFFFFFGPPP "," FFPGPPPPPPPPP "," FFPFFFGPFFFFF "," FFFFPPFPFPFFF ","WFFGFGPFPFFFFFW"],[" YYYYYYdYYYYYY ","X             X","X   a         X","X      a  LMNOX","X             X","X         b   X","X   a         X","X  a          X","X             X","X             X","X             X","X             X","X  a       aaaX","U  a   u      U"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW ","    FGGFGF     ","    F    FFPG  ","  GFFPy   G    ","  F   G   G    ","  F   GFGFF    ","          G    ","  FFFFFFGFFs   ","  F    G   G   ","  G    P       ","  GGFGGF   G   ","       G   FFF ","       F       ","W      F      W"],[" YYYYYYdYYYYYY ","X             X","X             X","X    a        X","X     f       X","X             X","X             X","X        b    X","X             X","X             X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW "," GFFFFFFFFFFFF "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFsFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFGF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X      LMNOLMNX","X      M  b   X","Xi     N      X","X      L     lX","X      O      X","X             X","X         a   X","X   a         X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFG "," FFPFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFsF "," FFFGFFFFFFFFF "," FFFGFFFPFFFFF "," FFFGFFFFFFFFF ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X             X","X             X","Xi           lX","Xi            X","X            lX","X    aa aa    X","X             X","X     a       X","X            lX","X             X","X         b   X","U      u      U"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFFF "," FFPZPFFFFFFFF "," FFGGGFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFFFFGGGFFF "," FFFFFFFGZGFGF "," FFsGFFFGGGFFF "," FFFGFFPGFFFFF "," FFFGFFFFFFFFG ","WFFFGFFFFFFPFFW"],[" YYYYYYdYYYYYY ","X             X","X          a  X","X             X","X  aa         X","X             X","X    NOLMNOLMNX","X    M        X","XLNMOL      a X","X             X","X             X","X       b     X","X             X","U      u    aaU"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW "," FFFFFFFFFFFQF "," FFPFFFFFFFPFF "," FFFFFFGGGyFPF "," FFFFFFFFFFFFF "," PFFGFFFFFZFFF "," PFFFFFFFFFFFF "," PQFFFFFFFFFFF "," FFFFFFGGGFFFF "," FFFFFFFFFFFFF "," FFFGFFFZFFFFF "," FFFGFFFPFFFsF "," GwFGFFFFFFFFF ","WFFFGFFFF   FFW"],[" YYYYYYdYYYYYY ","X             X","X             X","XLMNOLM    f  X","X a   N       X","X a   MLO     X","X a     N     X","X       M     X","X       L     X","X    MLMNOLMNOX","X   lO        X","X    N        X","X  c M   b    X","U    L u    a U"," XXXXXXXXXXXXX "],SF],[[" WWWWWWSWWWWWW "," FFPPPPFPFZPsF "," FGPPPFPFFFPFF "," FFFFFFGyGFFFF "," FFFFFFFFFFFFF "," FFFFFFFFFFFFF "," FFFFF   FFFFZ "," FQFFF  QFFFFF "," FFFF   GGFFFF "," FF     FFFFFF ","        FFPFF  ","      FPFFF    ","      FFF      ","W      G      W"],[" YYYYYYdYYYYYY ","X        N    X","Xa       La   X","Xi       M    X","X        O   lX","X    NLMNO    X","X  f L        X","X    O      b X","X             X","X             X","X             X","X             X","X             X","U      u      U"," XXXXXXXXXXXXX "],SF]],NF=[],UF={},pF=(F,X)=>{if(void 0===X||1===X)return NF[F];{let t=UF[F];t||(UF[F]={},t=UF[F]);let e=U(16*X),i=t[e];return i||(t[e]=mF(F,(F=>{F[0]=F[0]*X,F[1]=F[1]*X,F[2]=F[2]*X})),i=t[e]),i}},AF=(F,X)=>{if(0==X)return NF[F];{let t=UF[F];t||(UF[F]={},t=UF[F]);let e=t[X];if(!e){let i=X>>16&255,o=X>>8&255,l=255&X;t[X]=mF(F,(F=>{F[0]=i,F[1]=o,F[2]=l})),e=t[X]}return e}},mF=(F,X)=>{let t=e(NF[F]),f=l(t),a=G(t),Y=i();W(Y,f),r(Y,a);let n=t.getImageData(0,0,f,a),d=Y.getImageData(0,0,f,a),P=n.data,s=d.data,c=0;for(;c<P.length;){let F=P.slice(c,c+4);X(F),s.set(F,c),c+=4}return Y.putImageData(d,0,0),o(Y)},hF=[],wF=()=>{for(let F of Z)if(L(F)){let X=F.J;if(X.FF)for(let F=0;F<16;F++){let t={id:X.FF.id,brightness:F/16,run(){pF(this.id,this.brightness)}};hF.push(t)}}},TF=0,vF=I(),kF=e(F.getElementById("c")),DF=0,gF=0,xF=1,VF={},IF=!1,HF=!1,RF={},$F=F=>VF[F],CF=()=>{F.onkeydown=F=>{HF=!0,VF[F.keyCode]=!0},F.onkeyup=F=>{var X;HF=!1,X=F.keyCode,delete VF[X]};let e=o(kF);if(X){let F=(F,X)=>{let e=F.changedTouches;for(let F=0;F<e.length;F++){const{clientX:i,clientY:o,identifier:l}=e[F];X(l,I(i*t,o*t))}},X=X=>F(X,((F,X)=>{RF[F]=X})),i=X=>F(X,((F,X)=>{delete RF[F]}));e.ontouchstart=X,e.ontouchmove=X,e.ontouchend=i,e.ontouchcancel=i}e.onclick=()=>{IF=!0,rF()}},ZF=[],QF={FF:{id:67},id:12},zF=[67,68,69,70],KF={R:0,$:7,j:E,B:9},jF=0;let BF=(F,X)=>{let t=z(F);for(let F of t)if(F){void 0===F.J.GF&&(F.J.GF=ZF.length,ZF.push([]));let t=ZF[F.J.GF];for(;t.length<13;){let X={x:F.x,y:F.y-1,z:F.z-1,J:d(QF)};t.push(X)}let e=t[0];e.x=F.x,JF(e,X);let i=e.x;for(let e of t){e.x=i;let t=X<0?i<F.x+E:i>F.x-E;i-=E*X,t?Z.includes(e)||Z.push(e):Z.includes(e)&&K(e)}}},JF=(F,X)=>{let t=208;for(;t--&&(F.x+=X,!qF(F)););},qF=F=>{for(let X of aF)if(X.J.tF&&y(KF,F,X.J.tF._,X))return!0;return!1},_F=[71,72,73,74],FX=[75,76,77,78],XX=[79,80,81,82],tX=[83,84,85,86],eX=[87,88],iX=[89,90],oX=[91,92],lX={lF:0,WF:0},GX=()=>{let F=P.r,X=Q(0);if(X)if(lX.WF>0)WX(X,eX);else if(X.z<E){WX(X,XX.includes(X.J.FF.id)||oX.includes(X.J.FF.id)?oX:iX)}else{let o=I();if($F(37)||$F(65)?o.x=-1:($F(39)||$F(68))&&(o.x=1),$F(38)||$F(87)?o.y=-1:($F(40)||$F(83))&&(o.y=1),uF){let F=H(uF.rF,uF.fF),X=v((i=F).y,i.x);X<0&&(X+=D);let t=U((X+k/8)/(k/4));o=0==t?I(1,0):1==t?I(1,1):2==t?I(0,1):3==t?I(-1,1):4==t?I(-1,0):5==t?I(-1,-1):6==t?I(0,-1):I(1,7==t?-1:0)}if($(o)>0){let i=_F;o.x<0?i=tX:o.x>0&&(i=FX),o.y<0?i=XX:o.y>0&&(i=_F),WX(X,i),C(o,30*F),e=o,(t=X).x+=e.x,t.y+=e.y}}var t,e,i};function WX(F,X){lX.lF+=10*P.r;let t=U(lX.lF%X.length);F.J.FF.id=X[t]}let rX={aF:0,YF:0,T:0,nF:0,dF:0,scoreTime:0},fX=()=>{rX.T=130,(F=>{let X=yF[F];Z.splice(0,Z.length);let t=0;for(let F of X){let X=0,e=0;for(let i of F){for(let F of i){if(" "!==F){let i=d(iF[F]);Z.push({x:X,y:e,z:t,J:i})}X+=E}X=0,e+=E}t+=E}})(rX.aF),PF(),MF.oF=!1,MF.lF=0,lX.lF=0,lX.WF=0,wF()},aX=()=>{lX.WF>=1&&(rX.nF--,async function(){rX.YF=rX.nF>0?4:5,fF(5)}())},YX=()=>{if(rX.T<=0)return;rX.dF+=P.r;let F=U(rX.T);rX.T-=P.r;let X=U(rX.T);if(F!=X&&X<=13){let F=5;fF(9,.1+.5*g(0,1,(X-F)/(0-F)))}rX.T<=0&&((async()=>{for(let F of Z)O(F)&&bF(F,x(0,1))})(),fF(4),TF=.5,function(){for(let F=0;F<Z.length;F++){let X=Z[F];12!==X.J.id&&11!==X.J.id&&10!==X.J.id||(Z.splice(F,1),F--)}ZF.splice(0,ZF.length)}())};let nX=(()=>{let F=[];return F[33]=60,F[35]=63,F[46]=61,F[47]=-1,F.push(24,25,26,27,28,29,30,31,32,33),F[64]=62,F.push(34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59),F})(),dX=F=>nX[F],PX=F=>`rgba(${F>>16&255},${F>>8&255},${255&F},${(F>>24&255)/255})`,sX=i(),cX=(F,X)=>F.y+F.z-X.y-X.z,uX=()=>{W(kF,DF),r(kF,gF);let F=U(DF/xF),X=U(gF/xF);W(sX,F),r(sX,X),Y(sX);let t=U((F-240)/2);switch(function(F,X){let t=vF.x+F,e=vF.y+X;Z.sort(cX),NX();for(let F of Z){let X=U(t+F.x),i=U(e+F.y-F.z),o=F.J,l=o.iF||E;yX(sX,X,i,o.FF),yX(sX,X,i-l,o.XF)}}(t,64),MX(t),uF&&(SX(sX,uF.rF.x/xF,uF.rF.y/xF,30,1442840575),SX(sX,uF.fF.x/xF,uF.fF.y/xF,10,2583691263)),rX.YF){case 0:UX(4278190080,["CUBE 13",71,"",bX(),"",EX("START")]);break;case 1:UX(4281545523,["13 LEVELS %","13 LIVES @","130 SECONDS #","","",EX("START")]);break;case 4:UX(3714449408,["YOU ARE DEAD!",88,"",`LIVES @ ${rX.nF}`,"","",EX("TRY AGAIN")]);break;case 3:UX(3707790848,["LEVEL PASSED!",93,"",`NEXT LEVEL % ${rX.aF+2}`,`TOTAL LEVELS % ${yF.length}`,"","",EX("CONTINUE")]);break;case 5:UX(3711107072,["GAME OVER!",88,"","",EX("GO HOME")]);break;case 6:UX(3707803904,["YOU WIN!!!",93,"","CONGRATULATIONS!","YOU ARE THE BEST!",bX(),"","",EX("GO HOME")])}Y(kF),kF.setTransform(xF,0,0,xF,0,0),kF.imageSmoothingEnabled=!1,a(kF,o(sX),0,0)},bX=()=>rX.scoreTime>0?`YOUR TIME # ${rX.scoreTime.toFixed(1)} SECONDS`:"",EX=F=>X?`TAP TO ${F}`:`PRESS ANY KEY TO ${F}`;let MX=(F,X)=>{f(sX);for(let X=0;X<rX.nF;X++)a(sX,NF[62],F+1+8*X,10);OX(sX,F,1,"LIVES "+rX.nF,16721408);let t=p(rX.T),e=A(p(rX.T),13);for(let X=0;X<e;X++)a(sX,NF[63],F+224+8-8*X,10);let i=m(0,t)+" TIME";OX(sX,F+240-1-8*i.length,1,i,38655);let o="LEVEL "+(rX.aF+1);OX(sX,U(F+(240-8*o.length)/2),1,o,16777215)},LX={35:63,64:62,37:64},OX=(F,X,t,e,i)=>{f(F);for(let o=0;o<e.length;o++){let l=e.charCodeAt(o);if(void 0!==LX[l]){let e=NF[LX[l]];a(F,e,X+8*o,t)}else{let e=dX(l);if(void 0!==e){let l=AF(e,i);a(F,l,X+8*o,t)}}}},SX=(F,X,t,e,i)=>{f(F),F.beginPath(),F.arc(U(X),U(t),U(e),0,D,!1),F.lineWidth=2,F.strokeStyle=PX(i),F.stroke()},yX=(F,X,t,e)=>{if(e){let i=pF(e.id,e.PF),o=e.eF||J;F.setTransform(o.a,o.b,o.c,o.d,o.e+X,o.f+t),void 0!==e.sF&&(F.globalAlpha=e.sF),a(F,i,0,0),F.globalAlpha=1}},NX=()=>{for(let F of Z){let X=g(0,1,(F.z- -32)/32),t=F.J;t.FF&&(t.FF.PF=X),t.XF&&(t.XF.PF=X)}};function UX(F,X){let t=l(sX),e=G(sX);f(sX),sX.fillStyle=PX(F),sX.fillRect(0,0,t,e);let i=16*X.length,o=0;for(let F=0;F<X.length;F++){let t=X[F];switch(typeof t){case"string":i+=8,o=m(o,8*t.length);break;case"number":let F=NF[t];i+=F.height,o=m(o,F.width)}}let W=0+(t-o)/2,r=0+(e-i)/2;for(let F=0;F<X.length;F++){let t=X[F];switch(typeof t){case"string":let F=t;OX(sX,U(W+(o-8*F.length)/2),U(r),F,16777215),r+=24;break;case"number":let X=NF[t];a(sX,X,U(W+(o-X.width)/2),U(r)),r+=X.height+16}}}let pX=!1,AX=!1,mX=()=>{if(IF||HF&&!pX)switch(IF=!1,rX.YF){case 0:AX?hX():(AX=!0,rX.YF=1);break;case 1:hX();break;case 4:fX(),rX.YF=2;break;case 3:rX.aF++,fX(),rX.YF=2;break;case 5:case 6:rX.YF=0}pX=HF};function hX(){rX.aF=0,rX.nF=yF.length,rX.dF=0,fX(),rX.YF=2}let wX,TX=x(5,10),vX=(F,X)=>{let t=z(X);2==t.length&&(kX(F,t[0],t[1]),kX(F,t[1],t[0]))},kX=(F,X,t)=>{wX||R(F,X)<8&&(wX=t,F.x=F.x-X.x+t.x,F.y=F.y-X.y+t.y,F.J.FF.sF=0,fF(8))};function DX(){(()=>{let F=P.o;P.o=n(),P.r=(P.o-F)/1e3})(),DF=innerWidth*t,gF=innerHeight*t,xF=A(DF/240,gF/304),(()=>{if(X)if(uF)if(RF[uF.id]){uF.fF=RF[uF.id];let F=H(uF.rF,uF.fF),X=$(F),t=30*xF;X>t&&(C(F,t),uF.fF.x=uF.rF.x+F.x,uF.fF.y=uF.rF.y+F.y)}else uF=void 0;else for(let F in RF){uF={id:F,rF:RF[F],fF:RF[F]};break}})(),2==rX.YF&&(GX(),(()=>{if(BF(10,-1),BF(11,1),jF-=P.r,jF<0){jF=.1;for(let X of ZF)for(let t of X)t.J.FF.id=(F=zF)[p(x(0,F.length-1))]}var F})(),(()=>{if(MF.oF)return;let F=[];OF(F,2,1,16),OF(F,4,3,19),OF(F,6,5,21);let X=0;for(let t of F)0==t.z&&X++;if(X==F.length){for(let X of F)delete X.J.id;MF.oF=!0}})(),(()=>{let F=Q(0),X=z(9);if(F&&F.z==E&&F.J.tF&&X.length){let t=F.J.tF._;for(let e of X)0==e.z&&y(t,F,XF,e)&&(EF(e),fF(1))}})(),(()=>{if(MF.oF&&MF.lF<LF.length){MF.lF+=5*P.r;let F=U(MF.lF),X=Q(7);if(X)if(F<LF.length)X.J.FF.id=LF[F];else{X.J.FF=void 0,X.J.tF=void 0,PF();let F=Q(8);F&&(F.J.FF.id=107,fF(3))}}})(),(()=>{let F=Q(0);F&&(F.J.FF&&void 0!==F.J.FF.sF&&(F.J.FF.sF+=P.r,F.J.FF.sF>1&&(F.J.FF.sF=void 0)),wX?R(wX,F)>E&&(wX=void 0):(vX(F,13),vX(F,14)))})(),(()=>{let F=Q(0),X=Q(7);F&&X&&w(F.x-X.x)<8&&F.y<X.y&&(fF(10),rX.aF==yF.length-1?(rX.YF=6,rX.scoreTime=rX.dF):rX.YF=3)})(),YX(),(()=>{let F=Q(0);if(0==lX.WF)if(F){if(F.J.tF){let X=z(12);for(let t of X)y(KF,t,F.J.tF._,F)&&(0==lX.WF&&fF(6),lX.WF+=.001)}}else lX.WF=1;else lX.WF+=P.r})(),aX()),sF(),TF>0&&(TF-=P.r,vF.x=x(-4,4),vF.y=x(-4,4),TF<=0&&(vF.x=0,vF.y=0)),mX(),(()=>{let F=n();for(;hF.length&&(hF.shift().run(),!(n()-F>1)););})(),(()=>{let F=P.r;s=s.filter((X=>{if(X.v>0)return X.v-=F,!0;{X.T+=F;const{n:t,p:e,m:i,h:o,k:l,g:G,V:W}=X;if(X.T>l)return t[e]=o,W&&W(),!1;{let F=G(X.T/l);return t[e]=i+(o-i)*F,!0}}}))})(),TX-=P.r,TX<0&&(TX=x(5,10),fF(0,.2)),uX(),requestAnimationFrame(DX)}!async function(){await async function(){let F=await fetch("r"),X=await F.arrayBuffer(),t=new Uint8Array(X),e=0,l=4*t[e++],G=t.slice(e,e+l);e+=l;let f=t[e++];for(;f--;){let F=t[e++],X=t[e++],l=F*X,f=t.slice(e,e+l);e+=l;let a=i();W(a,F),r(a,X);let Y=a.getImageData(0,0,F,X);for(let F=0;F<f.length;F++){let X=f[F]<<2;Y.data.set(G.slice(X,X+4),F<<2)}a.putImageData(Y,0,0),NF.push(o(a))}let a=t[e++];for(;a--;){let F=t[e++];GF.push(X.slice(e,e+F)),e+=F}}(),CF(),DX()}()}();
