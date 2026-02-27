(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const wo="181",ua={ROTATE:0,DOLLY:1,PAN:2},ca={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zu=0,Ll=1,Vu=2,Bc=1,Gu=2,Jn=3,On=0,sn=1,In=2,zt=0,ha=1,Ul=2,Il=3,Nl=4,zc=5,En=100,ku=101,Hu=102,Wu=103,Xu=104,La=200,qu=201,Yu=202,ju=203,Cr=204,wr=205,Pr=206,Zu=207,Rr=208,$u=209,Ku=210,Ju=211,Qu=212,eh=213,th=214,Dr=0,Lr=1,Ur=2,fa=3,Ir=4,Nr=5,Fr=6,Or=7,Vc=0,nh=1,ih=2,gi=0,ah=1,sh=2,rh=3,Gc=4,oh=5,lh=6,ch=7,kc=300,pa=301,ma=302,Br=303,zr=304,Vs=306,Cn=1e3,cn=1001,Vr=1002,kt=1003,uh=1004,es=1005,jt=1006,Ys=1007,Li=1008,Bn=1009,Hc=1010,Wc=1011,za=1012,Po=1013,Ni=1014,ei=1015,zn=1016,Ro=1017,Do=1018,_i=1020,Xc=35902,qc=35899,Yc=1021,jc=1022,un=1023,Va=1026,Fi=1027,Zc=1028,Lo=1029,Uo=1030,Io=1031,No=1033,Rs=33776,Ds=33777,Ls=33778,Us=33779,Gr=35840,kr=35841,Hr=35842,Wr=35843,Xr=36196,qr=37492,Yr=37496,jr=37808,Zr=37809,$r=37810,Kr=37811,Jr=37812,Qr=37813,eo=37814,to=37815,no=37816,io=37817,ao=37818,so=37819,ro=37820,oo=37821,lo=36492,co=36494,uo=36495,ho=36283,fo=36284,po=36285,mo=36286,hh=3200,dh=3201,$c=0,fh=1,Tn="",Gt="srgb",xa="srgb-linear",Bs="linear",mt="srgb",qi=7680,Fl=519,ph=512,mh=513,xh=514,Kc=515,gh=516,_h=517,vh=518,Mh=519,Ol=35044,Bl="300 es",Nn=2e3,zs=2001;function Jc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ga(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sh(){const i=Ga("canvas");return i.style.display="block",i}const zl={};function Vl(...i){const e="THREE."+i.shift();console.log(e,...i)}function je(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Tt(...i){const e="THREE."+i.shift();console.error(e,...i)}function ka(...i){const e=i.join(" ");e in zl||(zl[e]=!0,je(...i))}function bh(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gl=1234567;const Fa=Math.PI/180,Ha=180/Math.PI;function _a(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Fo(i,e){return(i%e+e)%e}function yh(i,e,t,n,a){return n+(i-e)*(a-n)/(t-e)}function Eh(i,e,t){return i!==e?(t-i)/(e-i):0}function Oa(i,e,t){return(1-t)*i+t*e}function Th(i,e,t,n){return Oa(i,e,1-Math.exp(-t*n))}function Ah(i,e=1){return e-Math.abs(Fo(i,e*2)-e)}function Ch(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ph(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rh(i,e){return i+Math.random()*(e-i)}function Dh(i){return i*(.5-Math.random())}function Lh(i){i!==void 0&&(Gl=i);let e=Gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uh(i){return i*Fa}function Ih(i){return i*Ha}function Nh(i){return(i&i-1)===0&&i!==0}function Fh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Oh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bh(i,e,t,n,a){const s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),u=r((e+n)/2),h=s((e-n)/2),f=r((e-n)/2),p=s((n-e)/2),_=r((n-e)/2);switch(a){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*p,o*u,o*l);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function la(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ge={DEG2RAD:Fa,RAD2DEG:Ha,generateUUID:_a,clamp:Qe,euclideanModulo:Fo,mapLinear:yh,inverseLerp:Eh,lerp:Oa,damp:Th,pingpong:Ah,smoothstep:Ch,smootherstep:wh,randInt:Ph,randFloat:Rh,randFloatSpread:Dh,seededRandom:Lh,degToRad:Uh,radToDeg:Ih,isPowerOfTwo:Nh,ceilPowerOfTwo:Fh,floorPowerOfTwo:Oh,setQuaternionFromProperEuler:Bh,normalize:en,denormalize:la};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*a+e.x,this.y=s*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oi{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,r,o){let c=n[a+0],l=n[a+1],u=n[a+2],h=n[a+3],f=s[r+0],p=s[r+1],_=s[r+2],S=s[r+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=S;return}if(h!==S||c!==f||l!==p||u!==_){let m=c*f+l*p+u*_+h*S;m<0&&(f=-f,p=-p,_=-_,S=-S,m=-m);let d=1-o;if(m<.9995){const A=Math.acos(m),T=Math.sin(A);d=Math.sin(d*A)/T,o=Math.sin(o*A)/T,c=c*d+f*o,l=l*d+p*o,u=u*d+_*o,h=h*d+S*o}else{c=c*d+f*o,l=l*d+p*o,u=u*d+_*o,h=h*d+S*o;const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,a,s,r){const o=n[a],c=n[a+1],l=n[a+2],u=n[a+3],h=s[r],f=s[r+1],p=s[r+2],_=s[r+3];return e[t]=o*_+u*h+c*p-l*f,e[t+1]=c*_+u*f+l*h-o*p,e[t+2]=l*_+u*p+o*f-c*h,e[t+3]=u*_-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(a/2),h=o(s/2),f=c(n/2),p=c(a/2),_=c(s/2);switch(r){case"XYZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"YZX":this._x=f*u*h+l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h-f*p*_;break;case"XZY":this._x=f*u*h-l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h+f*p*_;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(r-a)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(r-a)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+r*o+a*l-s*c,this._y=a*u+r*c+s*o-n*l,this._z=s*u+r*l+n*c-a*o,this._w=r*u-n*o-a*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*a-o*n),u=2*(o*t-s*a),h=2*(s*n-r*t);return this.x=t+c*l+r*h-o*u,this.y=n+c*u+o*l-s*h,this.z=a+c*h+s*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=a*c-s*o,this.y=s*r-n*c,this.z=n*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new O,kl=new Oi;class $e{constructor(e,t,n,a,s,r,o,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l)}set(e,t,n,a,s,r,o,c,l){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],S=a[0],m=a[3],d=a[6],A=a[1],T=a[4],C=a[7],L=a[2],y=a[5],w=a[8];return s[0]=r*S+o*A+c*L,s[3]=r*m+o*T+c*y,s[6]=r*d+o*C+c*w,s[1]=l*S+u*A+h*L,s[4]=l*m+u*T+h*y,s[7]=l*d+u*C+h*w,s[2]=f*S+p*A+_*L,s[5]=f*m+p*T+_*y,s[8]=f*d+p*C+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*o*l-n*s*u+n*o*c+a*s*l-a*r*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*r-o*l,f=o*c-u*s,p=l*s-r*c,_=t*h+n*f+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(a*l-u*n)*S,e[2]=(o*n-a*r)*S,e[3]=f*S,e[4]=(u*t-a*c)*S,e[5]=(a*s-o*t)*S,e[6]=p*S,e[7]=(n*c-l*t)*S,e[8]=(r*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-a*l,a*c,-a*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new $e,Hl=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zh(){const i={enabled:!0,workingColorSpace:xa,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===mt&&(a.r=ti(a.r),a.g=ti(a.g),a.b=ti(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===mt&&(a.r=da(a.r),a.g=da(a.g),a.b=da(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Tn?Bs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xa]:{primaries:e,whitePoint:n,transfer:Bs,toXYZ:Hl,fromXYZ:Wl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Hl,fromXYZ:Wl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const lt=zh();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function da(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class Vh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=Ga("canvas")),Yi.width=e.width,Yi.height=e.height;const a=Yi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ti(s[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gh=0;class Oo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=_a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push($s(a[r].image)):s.push($s(a[r]))}else s=$s(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function $s(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let kh=0;const Ks=new O;class Zt extends Bi{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=cn,a=cn,s=jt,r=Li,o=un,c=Bn,l=Zt.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=_a(),this.name="",this.source=new Oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ks).x}get height(){return this.source.getSize(Ks).y}get depth(){return this.source.getSize(Ks).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=kc;Zt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,a=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],_=c[9],S=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,C=(p+1)/2,L=(d+1)/2,y=(u+f)/4,w=(h+S)/4,B=(_+m)/4;return T>C&&T>L?T<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(T),a=y/n,s=w/n):C>L?C<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(C),n=y/a,s=B/a):L<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(L),n=w/s,a=B/s),this.set(n,a,s,t),this}let A=Math.sqrt((m-_)*(m-_)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(h-S)/A,this.z=(f-u)/A,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hh extends Bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const a={width:e,height:t,depth:n.depth},s=new Zt(a);this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Oo(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Hh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qc extends Zt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=kt,this.minFilter=kt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wh extends Zt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=kt,this.minFilter=kt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Mn):Mn.fromBufferAttribute(s,r),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),ns.subVectors(this.max,Aa),ji.subVectors(e.a,Aa),Zi.subVectors(e.b,Aa),$i.subVectors(e.c,Aa),ci.subVectors(Zi,ji),ui.subVectors($i,Zi),Ei.subVectors(ji,$i);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ei.z,Ei.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ei.z,0,-Ei.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ei.y,Ei.x,0];return!Js(t,ji,Zi,$i,ns)||(t=[1,0,0,0,1,0,0,0,1],!Js(t,ji,Zi,$i,ns))?!1:(is.crossVectors(ci,ui),t=[is.x,is.y,is.z],Js(t,ji,Zi,$i,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new O,new O,new O,new O,new O,new O,new O,new O],Mn=new O,ts=new Wa,ji=new O,Zi=new O,$i=new O,ci=new O,ui=new O,Ei=new O,Aa=new O,ns=new O,is=new O,Ti=new O;function Js(i,e,t,n,a){for(let s=0,r=i.length-3;s<=r;s+=3){Ti.fromArray(i,s);const o=a.x*Math.abs(Ti.x)+a.y*Math.abs(Ti.y)+a.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Xh=new Wa,Ca=new O,Qs=new O;class Bo{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xh.setFromPoints(e).getCenter(n);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);const t=Ca.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Ca,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(Qs)),this.expandByPoint(Ca.copy(e.center).sub(Qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new O,er=new O,as=new O,hi=new O,tr=new O,ss=new O,nr=new O;class zo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){er.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(er);const s=e.distanceTo(t)*.5,r=-this.direction.dot(as),o=hi.dot(this.direction),c=-hi.dot(as),l=hi.lengthSq(),u=Math.abs(1-r*r);let h,f,p,_;if(u>0)if(h=r*c-o,f=r*o-c,_=s*u,h>=0)if(f>=-_)if(f<=_){const S=1/u;h*=S,f*=S,p=h*(h+r*f+2*o)+f*(r*h+f+2*c)+l}else f=s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-r*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(r*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=r>0?-s:s,h=Math.max(0,-(r*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(er).addScaledVector(as,f),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),a=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,r,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,a=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,a=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,r=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,r=(e.min.y-f.y)*u),n>r||s>a||((s>n||isNaN(n))&&(n=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,a,s){tr.subVectors(t,e),ss.subVectors(n,e),nr.crossVectors(tr,ss);let r=this.direction.dot(nr),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;hi.subVectors(this.origin,e);const c=o*this.direction.dot(ss.crossVectors(hi,ss));if(c<0)return null;const l=o*this.direction.dot(tr.cross(hi));if(l<0||c+l>r)return null;const u=-o*hi.dot(nr);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,a,s,r,o,c,l,u,h,f,p,_,S,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l,u,h,f,p,_,S,m)}set(e,t,n,a,s,r,o,c,l,u,h,f,p,_,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=a,d[1]=s,d[5]=r,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),r=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=r*u,p=r*h,_=o*u,S=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=f-S*l,t[9]=-o*c,t[2]=S-f*l,t[6]=_+p*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,_=l*u,S=l*h;t[0]=f+S*o,t[4]=_*o-p,t[8]=r*l,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=p*o-_,t[6]=S+f*o,t[10]=r*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,_=l*u,S=l*h;t[0]=f-S*o,t[4]=-r*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=r*u,t[9]=S-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const f=r*u,p=r*h,_=o*u,S=o*h;t[0]=c*u,t[4]=_*l-p,t[8]=f*l+S,t[1]=c*h,t[5]=S*l+f,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,p=r*l,_=o*c,S=o*l;t[0]=c*u,t[4]=S-f*h,t[8]=_*h+p,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+_,t[10]=f-S*h}else if(e.order==="XZY"){const f=r*c,p=r*l,_=o*c,S=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+S,t[5]=r*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qh,e,Yh)}lookAt(e,t,n){const a=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),di.crossVectors(n,on),di.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),di.crossVectors(n,on)),di.normalize(),rs.crossVectors(on,di),a[0]=di.x,a[4]=rs.x,a[8]=on.x,a[1]=di.y,a[5]=rs.y,a[9]=on.y,a[2]=di.z,a[6]=rs.z,a[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],S=n[6],m=n[10],d=n[14],A=n[3],T=n[7],C=n[11],L=n[15],y=a[0],w=a[4],B=a[8],M=a[12],v=a[1],D=a[5],F=a[9],G=a[13],K=a[2],j=a[6],X=a[10],ie=a[14],z=a[3],se=a[7],le=a[11],Ce=a[15];return s[0]=r*y+o*v+c*K+l*z,s[4]=r*w+o*D+c*j+l*se,s[8]=r*B+o*F+c*X+l*le,s[12]=r*M+o*G+c*ie+l*Ce,s[1]=u*y+h*v+f*K+p*z,s[5]=u*w+h*D+f*j+p*se,s[9]=u*B+h*F+f*X+p*le,s[13]=u*M+h*G+f*ie+p*Ce,s[2]=_*y+S*v+m*K+d*z,s[6]=_*w+S*D+m*j+d*se,s[10]=_*B+S*F+m*X+d*le,s[14]=_*M+S*G+m*ie+d*Ce,s[3]=A*y+T*v+C*K+L*z,s[7]=A*w+T*D+C*j+L*se,s[11]=A*B+T*F+C*X+L*le,s[15]=A*M+T*G+C*ie+L*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],S=e[7],m=e[11],d=e[15];return _*(+s*c*h-a*l*h-s*o*f+n*l*f+a*o*p-n*c*p)+S*(+t*c*p-t*l*f+s*r*f-a*r*p+a*l*u-s*c*u)+m*(+t*l*h-t*o*p-s*r*h+n*r*p+s*o*u-n*l*u)+d*(-a*o*u-t*c*h+t*o*f+a*r*h-n*r*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],S=e[13],m=e[14],d=e[15],A=h*m*l-S*f*l+S*c*p-o*m*p-h*c*d+o*f*d,T=_*f*l-u*m*l-_*c*p+r*m*p+u*c*d-r*f*d,C=u*S*l-_*h*l+_*o*p-r*S*p-u*o*d+r*h*d,L=_*h*c-u*S*c-_*o*f+r*S*f+u*o*m-r*h*m,y=t*A+n*T+a*C+s*L;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=A*w,e[1]=(S*f*s-h*m*s-S*a*p+n*m*p+h*a*d-n*f*d)*w,e[2]=(o*m*s-S*c*s+S*a*l-n*m*l-o*a*d+n*c*d)*w,e[3]=(h*c*s-o*f*s-h*a*l+n*f*l+o*a*p-n*c*p)*w,e[4]=T*w,e[5]=(u*m*s-_*f*s+_*a*p-t*m*p-u*a*d+t*f*d)*w,e[6]=(_*c*s-r*m*s-_*a*l+t*m*l+r*a*d-t*c*d)*w,e[7]=(r*f*s-u*c*s+u*a*l-t*f*l-r*a*p+t*c*p)*w,e[8]=C*w,e[9]=(_*h*s-u*S*s-_*n*p+t*S*p+u*n*d-t*h*d)*w,e[10]=(r*S*s-_*o*s+_*n*l-t*S*l-r*n*d+t*o*d)*w,e[11]=(u*o*s-r*h*s-u*n*l+t*h*l+r*n*p-t*o*p)*w,e[12]=L*w,e[13]=(u*S*a-_*h*a+_*n*f-t*S*f-u*n*m+t*h*m)*w,e[14]=(_*o*a-r*S*a-_*n*c+t*S*c+r*n*m-t*o*m)*w,e[15]=(r*h*a-u*o*a+u*n*c-t*h*c-r*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,u=s*o;return this.set(l*r+n,l*o-a*c,l*c+a*o,0,l*o+a*c,u*o+n,u*c-a*r,0,l*c-a*o,u*c+a*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,r){return this.set(1,n,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,u=r+r,h=o+o,f=s*l,p=s*u,_=s*h,S=r*u,m=r*h,d=o*h,A=c*l,T=c*u,C=c*h,L=n.x,y=n.y,w=n.z;return a[0]=(1-(S+d))*L,a[1]=(p+C)*L,a[2]=(_-T)*L,a[3]=0,a[4]=(p-C)*y,a[5]=(1-(f+d))*y,a[6]=(m+A)*y,a[7]=0,a[8]=(_+T)*w,a[9]=(m-A)*w,a[10]=(1-(f+S))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let s=Ki.set(a[0],a[1],a[2]).length();const r=Ki.set(a[4],a[5],a[6]).length(),o=Ki.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Sn.copy(this);const l=1/s,u=1/r,h=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,a,s,r,o=Nn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-a),f=(t+e)/(t-e),p=(n+a)/(n-a);let _,S;if(c)_=s/(r-s),S=r*s/(r-s);else if(o===Nn)_=-(r+s)/(r-s),S=-2*r*s/(r-s);else if(o===zs)_=-r/(r-s),S=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,s,r,o=Nn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-a),f=-(t+e)/(t-e),p=-(n+a)/(n-a);let _,S;if(c)_=1/(r-s),S=r/(r-s);else if(o===Nn)_=-2/(r-s),S=-(r+s)/(r-s);else if(o===zs)_=-1/(r-s),S=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new O,Sn=new yt,qh=new O(0,0,0),Yh=new O(1,1,1),di=new O,rs=new O,on=new O,Xl=new yt,ql=new Oi;class ii{constructor(e=0,t=0,n=0,a=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],c=a[1],l=a[5],u=a[9],h=a[2],f=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jh=0;const Yl=new O,Ji=new Oi,jn=new yt,os=new O,wa=new O,Zh=new O,$h=new Oi,jl=new O(1,0,0),Zl=new O(0,1,0),$l=new O(0,0,1),Kl={type:"added"},Kh={type:"removed"},Qi={type:"childadded",child:null},ir={type:"childremoved",child:null};class dn extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new O,t=new ii,n=new Oi,a=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new yt},normalMatrix:{value:new $e}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(jl,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Yl.copy(e).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jl,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(wa,os,this.up):jn.lookAt(os,wa,this.up),this.quaternion.setFromRotationMatrix(jn),a&&(jn.extractRotation(a.matrixWorld),Ji.setFromRotationMatrix(jn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kl),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kh),ir.child=e,this.dispatchEvent(ir),ir.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kl),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,Zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,$h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(s(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),h=r(e.shapes),f=r(e.skeletons),p=r(e.animations),_=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=a,n;function r(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}dn.DEFAULT_UP=new O(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new O,Zn=new O,ar=new O,$n=new O,ea=new O,ta=new O,Jl=new O,sr=new O,rr=new O,or=new O,lr=new Ct,cr=new Ct,ur=new Ct;class An{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),bn.subVectors(e,t),a.cross(bn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){bn.subVectors(a,t),Zn.subVectors(n,t),ar.subVectors(e,t);const r=bn.dot(bn),o=bn.dot(Zn),c=bn.dot(ar),l=Zn.dot(Zn),u=Zn.dot(ar),h=r*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-o*u)*f,_=(r*u-o*c)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,a,s,r,o,c){return this.getBarycoord(e,t,n,a,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$n.x),c.addScaledVector(r,$n.y),c.addScaledVector(o,$n.z),c)}static getInterpolatedAttribute(e,t,n,a,s,r){return lr.setScalar(0),cr.setScalar(0),ur.setScalar(0),lr.fromBufferAttribute(e,t),cr.fromBufferAttribute(e,n),ur.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(lr,s.x),r.addScaledVector(cr,s.y),r.addScaledVector(ur,s.z),r}static isFrontFacing(e,t,n,a){return bn.subVectors(n,t),Zn.subVectors(e,t),bn.cross(Zn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return An.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let r,o;ea.subVectors(a,n),ta.subVectors(s,n),sr.subVectors(e,n);const c=ea.dot(sr),l=ta.dot(sr);if(c<=0&&l<=0)return t.copy(n);rr.subVectors(e,a);const u=ea.dot(rr),h=ta.dot(rr);if(u>=0&&h<=u)return t.copy(a);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(n).addScaledVector(ea,r);or.subVectors(e,s);const p=ea.dot(or),_=ta.dot(or);if(_>=0&&p<=_)return t.copy(s);const S=p*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(ta,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Jl.subVectors(s,a),o=(h-u)/(h-u+(p-_)),t.copy(a).addScaledVector(Jl,o);const d=1/(m+S+f);return r=S*d,o=f*d,t.copy(n).addScaledVector(ea,r).addScaledVector(ta,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ls={h:0,s:0,l:0};function hr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=lt.workingColorSpace){if(e=Fo(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=hr(r,s,e+1/3),this.g=hr(r,s,e),this.b=hr(r,s,e-1/3)}return lt.colorSpaceToWorking(this,a),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return lt.workingToColorSpace(qt.copy(this),e),Math.round(Qe(qt.r*255,0,255))*65536+Math.round(Qe(qt.g*255,0,255))*256+Math.round(Qe(qt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(qt.copy(this),t);const n=qt.r,a=qt.g,s=qt.b,r=Math.max(n,a,s),o=Math.min(n,a,s);let c,l;const u=(o+r)/2;if(o===r)c=0,l=0;else{const h=r-o;switch(l=u<=.5?h/(r+o):h/(2-r-o),r){case n:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-n)/h+2;break;case s:c=(n-a)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Gt){lt.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,a=qt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(ls);const n=Oa(fi.h,ls.h,t),a=Oa(fi.s,ls.s,t),s=Oa(fi.l,ls.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new rt;rt.NAMES=eu;let Jh=0;class Xa extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=ha,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=wr,this.blendEquation=En,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ha&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cr&&(n.blendSrc=this.blendSrc),this.blendDst!==wr&&(n.blendDst=this.blendDst),this.blendEquation!==En&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tu extends Xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new O,cs=new De;let Qh=0;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=la(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=la(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=la(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=la(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=la(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),a=en(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),a=en(a,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}}class nu extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class iu extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ni extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ed=0;const gn=new yt,dr=new dn,na=new O,ln=new Wa,Pa=new Wa,Bt=new O;class ai extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jc(e)?iu:nu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return dr.lookAt(e),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ni(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(ln.min,Pa.min),ln.expandByPoint(Bt),Bt.addVectors(ln.max,Pa.max),ln.expandByPoint(Bt)):(ln.expandByPoint(Pa.min),ln.expandByPoint(Pa.max))}ln.getCenter(n);let a=0;for(let s=0,r=e.count;s<r;s++)Bt.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(Bt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Bt.fromBufferAttribute(o,l),c&&(na.fromBufferAttribute(e,l),Bt.add(na)),a=Math.max(a,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let B=0;B<n.count;B++)o[B]=new O,c[B]=new O;const l=new O,u=new O,h=new O,f=new De,p=new De,_=new De,S=new O,m=new O;function d(B,M,v){l.fromBufferAttribute(n,B),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,B),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,v),u.sub(l),h.sub(l),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),o[B].add(S),o[M].add(S),o[v].add(S),c[B].add(m),c[M].add(m),c[v].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,M=A.length;B<M;++B){const v=A[B],D=v.start,F=v.count;for(let G=D,K=D+F;G<K;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const T=new O,C=new O,L=new O,y=new O;function w(B){L.fromBufferAttribute(a,B),y.copy(L);const M=o[B];T.copy(M),T.sub(L.multiplyScalar(L.dot(M))).normalize(),C.crossVectors(y,M);const D=C.dot(c[B])<0?-1:1;r.setXYZW(B,T.x,T.y,T.z,D)}for(let B=0,M=A.length;B<M;++B){const v=A[B],D=v.start,F=v.count;for(let G=D,K=D+F;G<K;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const a=new O,s=new O,r=new O,o=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),r.fromBufferAttribute(t,m),u.subVectors(r,s),h.subVectors(a,s),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),u.subVectors(r,s),h.subVectors(a,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let p=0,_=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?p=c[S]*o.data.stride+o.offset:p=c[S]*u;for(let d=0;d<u;d++)f[_++]=l[p++]}return new Fn(f,u,h)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ai,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(a[c]=u,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const l in a){const u=a[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new yt,Ai=new zo,us=new Bo,ec=new O,hs=new O,ds=new O,fs=new O,fr=new O,ps=new O,tc=new O,ms=new O;class hn extends dn{constructor(e=new ai,t=new tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){ps.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(fr.fromBufferAttribute(h,e),r?ps.addScaledVector(fr,u):ps.addScaledVector(fr.sub(t),u))}t.add(ps)}return t}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(us.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(us,ec)===null||Ai.origin.distanceToSquared(ec)>(e.far-e.near)**2))&&(Ql.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let a;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,S=f.length;_<S;_++){const m=f[_],d=r[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let C=A,L=T;C<L;C+=3){const y=o.getX(C),w=o.getX(C+1),B=o.getX(C+2);a=xs(this,d,e,n,l,u,h,y,w,B),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const A=o.getX(m),T=o.getX(m+1),C=o.getX(m+2);a=xs(this,r,e,n,l,u,h,A,T,C),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,S=f.length;_<S;_++){const m=f[_],d=r[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let C=A,L=T;C<L;C+=3){const y=C,w=C+1,B=C+2;a=xs(this,d,e,n,l,u,h,y,w,B),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const A=m,T=m+1,C=m+2;a=xs(this,r,e,n,l,u,h,A,T,C),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function td(i,e,t,n,a,s,r,o){let c;if(e.side===sn?c=n.intersectTriangle(r,s,a,!0,o):c=n.intersectTriangle(a,s,r,e.side===On,o),c===null)return null;ms.copy(o),ms.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ms);return l<t.near||l>t.far?null:{distance:l,point:ms.clone(),object:i}}function xs(i,e,t,n,a,s,r,o,c,l){i.getVertexPosition(o,hs),i.getVertexPosition(c,ds),i.getVertexPosition(l,fs);const u=td(i,e,t,n,hs,ds,fs,tc);if(u){const h=new O;An.getBarycoord(tc,hs,ds,fs,h),a&&(u.uv=An.getInterpolatedAttribute(a,o,c,l,h,new De)),s&&(u.uv1=An.getInterpolatedAttribute(s,o,c,l,h,new De)),r&&(u.normal=An.getInterpolatedAttribute(r,o,c,l,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new O,materialIndex:0};An.getNormal(hs,ds,fs,f.normal),u.face=f,u.barycoord=h}return u}class qa extends ai{constructor(e=1,t=1,n=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,r,s,0),_("z","y","x",1,-1,n,t,-e,r,s,1),_("x","z","y",1,1,e,n,t,a,r,2),_("x","z","y",1,-1,e,n,-t,a,r,3),_("x","y","z",1,-1,e,t,n,a,s,4),_("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(c),this.setAttribute("position",new ni(l,3)),this.setAttribute("normal",new ni(u,3)),this.setAttribute("uv",new ni(h,2));function _(S,m,d,A,T,C,L,y,w,B,M){const v=C/w,D=L/B,F=C/2,G=L/2,K=y/2,j=w+1,X=B+1;let ie=0,z=0;const se=new O;for(let le=0;le<X;le++){const Ce=le*D-G;for(let He=0;He<j;He++){const Je=He*v-F;se[S]=Je*A,se[m]=Ce*T,se[d]=K,l.push(se.x,se.y,se.z),se[S]=0,se[m]=0,se[d]=y>0?1:-1,u.push(se.x,se.y,se.z),h.push(He/w),h.push(1-le/B),ie+=1}}for(let le=0;le<B;le++)for(let Ce=0;Ce<w;Ce++){const He=f+Ce+j*le,Je=f+Ce+j*(le+1),et=f+(Ce+1)+j*(le+1),nt=f+(Ce+1)+j*le;c.push(He,Je,nt),c.push(Je,et,nt),z+=6}o.addGroup(p,z,M),p+=z,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ga(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=ga(i[t]);for(const a in n)e[a]=n[a]}return e}function nd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function au(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Ri={clone:ga,merge:tn};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends Xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=nd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class su extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new O,nc=new De,ic=new De;class _n extends su{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,nc,ic),t.subVectors(ic,nc)}setViewOffset(e,t,n,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fa*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*a/c,t-=r.offsetY*n/l,a*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ia=-90,aa=1;class sd extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new _n(ia,aa,e,t);a.layers=this.layers,this.add(a);const s=new _n(ia,aa,e,t);s.layers=this.layers,this.add(s);const r=new _n(ia,aa,e,t);r.layers=this.layers,this.add(r);const o=new _n(ia,aa,e,t);o.layers=this.layers,this.add(o);const c=new _n(ia,aa,e,t);c.layers=this.layers,this.add(c);const l=new _n(ia,aa,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,r,o,c]=t;for(const l of t)this.remove(l);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,s),e.setRenderTarget(n,1,a),e.render(t,r),e.setRenderTarget(n,2,a),e.render(t,o),e.setRenderTarget(n,3,a),e.render(t,c),e.setRenderTarget(n,4,a),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,a),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ru extends Zt{constructor(e=[],t=pa,n,a,s,r,o,c,l,u){super(e,t,n,a,s,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rd extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new ru(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new qa(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:ga(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:zt});s.uniforms.tEquirect.value=t;const r=new hn(a,s),o=t.minFilter;return t.minFilter===Li&&(t.minFilter=jt),new sd(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(s)}}class gs extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const od={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),d=this._getHandJoint(l,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(od)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Go{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=n}clone(){return new Go(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ld extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gs extends Zt{constructor(e=null,t=1,n=1,a,s,r,o,c,l=kt,u=kt,h,f){super(null,r,o,c,l,u,a,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mr=new O,cd=new O,ud=new $e;class Qn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=mr.subVectors(n,t).cross(cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mr),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ud.getNormalMatrix(e),a=this.coplanarPoint(mr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Bo,hd=new De(.5,.5),_s=new O;class ou{constructor(e=new Qn,t=new Qn,n=new Qn,a=new Qn,s=new Qn,r=new Qn){this.planes=[e,t,n,a,s,r]}set(e,t,n,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],p=s[7],_=s[8],S=s[9],m=s[10],d=s[11],A=s[12],T=s[13],C=s[14],L=s[15];if(a[0].setComponents(l-r,p-u,d-_,L-A).normalize(),a[1].setComponents(l+r,p+u,d+_,L+A).normalize(),a[2].setComponents(l+o,p+h,d+S,L+T).normalize(),a[3].setComponents(l-o,p-h,d-S,L-T).normalize(),n)a[4].setComponents(c,f,m,C).normalize(),a[5].setComponents(l-c,p-f,d-m,L-C).normalize();else if(a[4].setComponents(l-c,p-f,d-m,L-C).normalize(),t===Nn)a[5].setComponents(l+c,p+f,d+m,L+C).normalize();else if(t===zs)a[5].setComponents(c,f,m,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);const t=hd.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(_s.x=a.normal.x>0?e.max.x:e.min.x,_s.y=a.normal.y>0?e.max.y:e.min.y,_s.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ks extends Zt{constructor(e,t,n=Ni,a,s,r,o=kt,c=kt,l,u=Va,h=1){if(u!==Va&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,a,s,r,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lu extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ii extends ai{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,u=c+1,h=e/o,f=t/c,p=[],_=[],S=[],m=[];for(let d=0;d<u;d++){const A=d*f-r;for(let T=0;T<l;T++){const C=T*h-s;_.push(C,-A,0),S.push(0,0,1),m.push(T/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<o;A++){const T=A+l*d,C=A+l*(d+1),L=A+1+l*(d+1),y=A+1+l*d;p.push(T,C,y),p.push(C,L,y)}this.setIndex(p),this.setAttribute("position",new ni(_,3)),this.setAttribute("normal",new ni(S,3)),this.setAttribute("uv",new ni(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class dd extends Xa{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class fd extends Xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pd extends Xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class md{constructor(e,t,n){const a=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&a.onStart!==void 0&&a.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,a.onProgress!==void 0&&a.onProgress(u,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const xd=new md;class ko{constructor(e){this.manager=e!==void 0?e:xd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,s){n.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ko.DEFAULT_MATERIAL_NAME="__DEFAULT";const sa=new WeakMap;class gd extends ko{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=xr.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let h=sa.get(r);h===void 0&&(h=[],sa.set(r,h)),h.push({onLoad:t,onError:a})}return r}const o=Ga("img");function c(){u(),t&&t(this);const h=sa.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onLoad&&p.onLoad(this)}sa.delete(this),s.manager.itemEnd(e)}function l(h){u(),a&&a(h),xr.remove(`image:${e}`);const f=sa.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(h)}sa.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xr.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class _d extends ko{constructor(e){super(e)}load(e,t,n,a){const s=new Zt,r=new gd(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,a),s}}class cu extends su{constructor(e=-1,t=1,n=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vd extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ac=new yt;class Md{constructor(e,t,n=0,a=1/0){this.ray=new zo(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ac.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ac),this}intersectObject(e,t=!0,n=[]){return xo(e,this,n,t),n.sort(sc),n}intersectObjects(e,t=!0,n=[]){for(let a=0,s=e.length;a<s;a++)xo(e[a],this,n,t);return n.sort(sc),n}}function sc(i,e){return i.distance-e.distance}function xo(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)xo(s[r],e,t,!0)}}class rc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Sd extends Bi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){je("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function oc(i,e,t,n){const a=bd(n);switch(t){case Yc:return i*e;case Zc:return i*e/a.components*a.byteLength;case Lo:return i*e/a.components*a.byteLength;case Uo:return i*e*2/a.components*a.byteLength;case Io:return i*e*2/a.components*a.byteLength;case jc:return i*e*3/a.components*a.byteLength;case un:return i*e*4/a.components*a.byteLength;case No:return i*e*4/a.components*a.byteLength;case Rs:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ls:case Us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kr:case Wr:return Math.max(i,16)*Math.max(e,8)/4;case Gr:case Hr:return Math.max(i,8)*Math.max(e,8)/2;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $r:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lo:case co:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ho:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case po:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bd(i){switch(i){case Bn:case Hc:return{byteLength:1,components:1};case za:case Wc:case zn:return{byteLength:2,components:1};case Ro:case Do:return{byteLength:2,components:4};case Ni:case Po:case ei:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);function hu(){let i=null,e=!1,t=null,n=null;function a(s,r){t(s,r),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yd(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],S=h[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,h[f]=S)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const S=h[p];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:s,update:r}}var Ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Od=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ef=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,If=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Up=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,em=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Ed,alphahash_pars_fragment:Td,alphamap_fragment:Ad,alphamap_pars_fragment:Cd,alphatest_fragment:wd,alphatest_pars_fragment:Pd,aomap_fragment:Rd,aomap_pars_fragment:Dd,batching_pars_vertex:Ld,batching_vertex:Ud,begin_vertex:Id,beginnormal_vertex:Nd,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:kd,color_fragment:Hd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,cube_uv_reflection_fragment:jd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:$d,displacementmap_vertex:Kd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Qd,colorspace_fragment:ef,colorspace_pars_fragment:tf,envmap_fragment:nf,envmap_common_pars_fragment:af,envmap_pars_fragment:sf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:gf,envmap_vertex:of,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:uf,fog_pars_fragment:hf,gradientmap_pars_fragment:df,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:xf,lights_toon_fragment:_f,lights_toon_pars_fragment:vf,lights_phong_fragment:Mf,lights_phong_pars_fragment:Sf,lights_physical_fragment:bf,lights_physical_pars_fragment:yf,lights_fragment_begin:Ef,lights_fragment_maps:Tf,lights_fragment_end:Af,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Rf,map_fragment:Df,map_pars_fragment:Lf,map_particle_fragment:Uf,map_particle_pars_fragment:If,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:Ff,morphinstance_vertex:Of,morphcolor_vertex:Bf,morphnormal_vertex:zf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Gf,normal_fragment_begin:kf,normal_fragment_maps:Hf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:Kf,opaque_fragment:Jf,packing:Qf,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:ap,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:rp,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:up,skinning_pars_vertex:hp,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:xp,tonemapping_pars_fragment:gp,transmission_fragment:_p,transmission_pars_fragment:vp,uv_pars_fragment:Mp,uv_pars_vertex:Sp,uv_vertex:bp,worldpos_vertex:yp,background_vert:Ep,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:Cp,cube_vert:wp,cube_frag:Pp,depth_vert:Rp,depth_frag:Dp,distanceRGBA_vert:Lp,distanceRGBA_frag:Up,equirect_vert:Ip,equirect_frag:Np,linedashed_vert:Fp,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:Vp,meshlambert_frag:Gp,meshmatcap_vert:kp,meshmatcap_frag:Hp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:Yp,meshphysical_vert:jp,meshphysical_frag:Zp,meshtoon_vert:$p,meshtoon_frag:Kp,points_vert:Jp,points_frag:Qp,shadow_vert:em,shadow_frag:tm,sprite_vert:nm,sprite_frag:im},pe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Un={basic:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:tn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:tn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:tn([pe.points,pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:tn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:tn([pe.common,pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:tn([pe.sprite,pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:tn([pe.common,pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:tn([pe.lights,pe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Un.physical={uniforms:tn([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const vs={r:0,b:0,g:0},wi=new ii,am=new yt;function sm(i,e,t,n,a,s,r){const o=new rt(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function _(T){let C=T.isScene===!0?T.background:null;return C&&C.isTexture&&(C=(T.backgroundBlurriness>0?t:e).get(C)),C}function S(T){let C=!1;const L=_(T);L===null?d(o,c):L&&L.isColor&&(d(L,1),C=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,C){const L=_(C);L&&(L.isCubeTexture||L.mapping===Vs)?(u===void 0&&(u=new hn(new qa(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:ga(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,w,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),wi.copy(C.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(am.makeRotationFromEuler(wi)),u.material.toneMapped=lt.getTransfer(L.colorSpace)!==mt,(h!==L||f!==L.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=L,f=L.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new hn(new Ii(2,2),new Ut({name:"BackgroundMaterial",uniforms:ga(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=lt.getTransfer(L.colorSpace)!==mt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||f!==L.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=L,f=L.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function d(T,C){T.getRGB(vs,au(i)),n.buffers.color.setClear(vs.r,vs.g,vs.b,C,r)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,C=1){o.set(T),c=C,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,d(o,c)},render:S,addToRenderList:m,dispose:A}}function rm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=f(null);let s=a,r=!1;function o(v,D,F,G,K){let j=!1;const X=h(G,F,D);s!==X&&(s=X,l(s.object)),j=p(v,G,F,K),j&&_(v,G,F,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,C(v,D,F,G),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,D,F){const G=F.wireframe===!0;let K=n[v.id];K===void 0&&(K={},n[v.id]=K);let j=K[D.id];j===void 0&&(j={},K[D.id]=j);let X=j[G];return X===void 0&&(X=f(c()),j[G]=X),X}function f(v){const D=[],F=[],G=[];for(let K=0;K<t;K++)D[K]=0,F[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:G,object:v,attributes:{},index:null}}function p(v,D,F,G){const K=s.attributes,j=D.attributes;let X=0;const ie=F.getAttributes();for(const z in ie)if(ie[z].location>=0){const le=K[z];let Ce=j[z];if(Ce===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(Ce=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(Ce=v.instanceColor)),le===void 0||le.attribute!==Ce||Ce&&le.data!==Ce.data)return!0;X++}return s.attributesNum!==X||s.index!==G}function _(v,D,F,G){const K={},j=D.attributes;let X=0;const ie=F.getAttributes();for(const z in ie)if(ie[z].location>=0){let le=j[z];le===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));const Ce={};Ce.attribute=le,le&&le.data&&(Ce.data=le.data),K[z]=Ce,X++}s.attributes=K,s.attributesNum=X,s.index=G}function S(){const v=s.newAttributes;for(let D=0,F=v.length;D<F;D++)v[D]=0}function m(v){d(v,0)}function d(v,D){const F=s.newAttributes,G=s.enabledAttributes,K=s.attributeDivisors;F[v]=1,G[v]===0&&(i.enableVertexAttribArray(v),G[v]=1),K[v]!==D&&(i.vertexAttribDivisor(v,D),K[v]=D)}function A(){const v=s.newAttributes,D=s.enabledAttributes;for(let F=0,G=D.length;F<G;F++)D[F]!==v[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function T(v,D,F,G,K,j,X){X===!0?i.vertexAttribIPointer(v,D,F,K,j):i.vertexAttribPointer(v,D,F,G,K,j)}function C(v,D,F,G){S();const K=G.attributes,j=F.getAttributes(),X=D.defaultAttributeValues;for(const ie in j){const z=j[ie];if(z.location>=0){let se=K[ie];if(se===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){const le=se.normalized,Ce=se.itemSize,He=e.get(se);if(He===void 0)continue;const Je=He.buffer,et=He.type,nt=He.bytesPerElement,Y=et===i.INT||et===i.UNSIGNED_INT||se.gpuType===Po;if(se.isInterleavedBufferAttribute){const $=se.data,de=$.stride,Le=se.offset;if($.isInstancedInterleavedBuffer){for(let Me=0;Me<z.locationSize;Me++)d(z.location+Me,$.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Me=0;Me<z.locationSize;Me++)m(z.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Me=0;Me<z.locationSize;Me++)T(z.location+Me,Ce/z.locationSize,et,le,de*nt,(Le+Ce/z.locationSize*Me)*nt,Y)}else{if(se.isInstancedBufferAttribute){for(let $=0;$<z.locationSize;$++)d(z.location+$,se.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let $=0;$<z.locationSize;$++)m(z.location+$);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let $=0;$<z.locationSize;$++)T(z.location+$,Ce/z.locationSize,et,le,Ce*nt,Ce/z.locationSize*$*nt,Y)}}else if(X!==void 0){const le=X[ie];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(z.location,le);break;case 3:i.vertexAttrib3fv(z.location,le);break;case 4:i.vertexAttrib4fv(z.location,le);break;default:i.vertexAttrib1fv(z.location,le)}}}}A()}function L(){B();for(const v in n){const D=n[v];for(const F in D){const G=D[F];for(const K in G)u(G[K].object),delete G[K];delete D[F]}delete n[v]}}function y(v){if(n[v.id]===void 0)return;const D=n[v.id];for(const F in D){const G=D[F];for(const K in G)u(G[K].object),delete G[K];delete D[F]}delete n[v.id]}function w(v){for(const D in n){const F=n[D];if(F[v.id]===void 0)continue;const G=F[v.id];for(const K in G)u(G[K].object),delete G[K];delete F[v.id]}}function B(){M(),r=!0,s!==a&&(s=a,l(s.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:B,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:y,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function om(i,e,t){let n;function a(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function r(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)r(l[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let _=0;for(let S=0;S<h;S++)_+=u[S]*f[S];t.update(_,n,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function lm(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(w){return!(w!==un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const B=w===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ei&&!B)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:C,vertexTextures:L,maxSamples:y}}function cm(i){const e=this;let t=null,n=0,a=!1,s=!1;const r=new Qn,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||a;return a=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!a||_===null||_.length===0||s&&!m)s?u(null):l();else{const A=s?0:n,T=A*4;let C=d.clippingState||null;c.value=C,C=u(_,f,T,p);for(let L=0;L!==T;++L)C[L]=t[L];d.clippingState=C,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,_){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=c.value,_!==!0||m===null){const d=p+S*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,C=p;T!==S;++T,C+=4)r.copy(h[T]).applyMatrix4(A,o),r.normal.toArray(m,C),m[C+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function um(i){let e=new WeakMap;function t(r,o){return o===Br?r.mapping=pa:o===zr&&(r.mapping=ma),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Br||o===zr)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new rd(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",a),t(l.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const mi=4,lc=[.125,.215,.35,.446,.526,.582],Di=20,hm=256,Ra=new cu,cc=new rt;let gr=null,_r=0,vr=0,Mr=!1;const dm=new O;class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,s={}){const{size:r=256,position:o=dm}=s;gr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gr,_r,vr),this._renderer.xr.enabled=Mr,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pa||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gr=this._renderer.getRenderTarget(),_r=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:zn,format:un,colorSpace:xa,depthBuffer:!1},a=hc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fm(s)),this._blurMaterial=mm(s,e,t),this._ggxMaterial=pm(s,e,t)}return a}_compileMaterial(e){const t=new hn(new ai,e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,n,a,s){const c=new _n(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(cc),h.toneMapping=gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new qa,new tu({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let d=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,d=!0):(m.color.copy(cc),d=!0);for(let T=0;T<6;T++){const C=T%3;C===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):C===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const L=this._cubeSize;ra(a,C*L,T>2?L:0,L,L),h.setRenderTarget(a),d&&h.render(S,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===pa||e.mapping===ma;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ra(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=.05+l*.95,p=h*f,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-mi?n-_+mi:0),d=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,ra(s,m,d,3*S,2*S),a.setRenderTarget(s),a.render(o,Ra),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-n,ra(e,m,d,3*S,2*S),a.setRenderTarget(e),a.render(o,Ra)}_blur(e,t,n,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,a,"latitudinal",s),this._halfBlur(r,e,n,n,a,"longitudinal",s)}_halfBlur(e,t,n,a,s,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[a];h.material=l;const f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Di-1),S=s/_,m=isFinite(s)?1+Math.floor(u*S):Di;m>Di&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const d=[];let A=0;for(let w=0;w<Di;++w){const B=w/S,M=Math.exp(-B*B/2);d.push(M),w===0?A+=M:w<m&&(A+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-n;const C=this._sizeLods[a],L=3*C*(a>T-mi?a-T+mi:0),y=4*(this._cubeSize-C);ra(t,L,y,3*C,2*C),c.setRenderTarget(t),c.render(h,Ra)}}function fm(i){const e=[],t=[],n=[];let a=i;const s=i-mi+1+lc.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);e.push(o);let c=1/o;r>i-mi?c=lc[r-i+mi-1]:r===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,S=3,m=2,d=1,A=new Float32Array(S*_*p),T=new Float32Array(m*_*p),C=new Float32Array(d*_*p);for(let y=0;y<p;y++){const w=y%3*2/3-1,B=y>2?0:-1,M=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];A.set(M,S*_*y),T.set(f,m*_*y);const v=[y,y,y,y,y,y];C.set(v,d*_*y)}const L=new ai;L.setAttribute("position",new Fn(A,S)),L.setAttribute("uv",new Fn(T,m)),L.setAttribute("faceIndex",new Fn(C,d)),n.push(new hn(L,null)),a>mi&&a--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function hc(i,e,t){const n=new wn(i,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function pm(i,e,t){return new Ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function mm(i,e,t){const n=new Float32Array(Di),a=new O(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function dc(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function fc(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Hs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Br||c===zr,u=c===pa||c===ma;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new uc(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&a(p)?(t===null&&(t=new uc(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function a(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function gm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&ka("WebGLRenderer: "+n+" extension not supported."),a}}}function _m(i,e,t,n){const a={},s=new WeakMap;function r(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",r),delete a[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,_=h.attributes.position;let S=0;if(p!==null){const A=p.array;S=p.version;for(let T=0,C=A.length;T<C;T+=3){const L=A[T+0],y=A[T+1],w=A[T+2];f.push(L,y,y,w,w,L)}}else if(_!==void 0){const A=_.array;S=_.version;for(let T=0,C=A.length/3-1;T<C;T+=3){const L=T+0,y=T+1,w=T+2;f.push(L,y,y,w,w,L)}}else return;const m=new(Jc(f)?iu:nu)(f,1);m.version=S;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function vm(i,e,t){let n;function a(f){n=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function c(f,p){i.drawElements(n,p,s,f*r),t.update(p,n,1)}function l(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,f*r,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,n,1)}function h(f,p,_,S){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/r,p[d],S[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,S,0,_);let d=0;for(let A=0;A<_;A++)d+=p[A]*S[A];t.update(d,n,1)}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Mm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Tt("WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Sm(i,e,t){const n=new WeakMap,a=new Ct;function s(r,o,c){const l=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){B.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let C=0;_===!0&&(C=1),S===!0&&(C=2),m===!0&&(C=3);let L=o.attributes.position.count*C,y=1;L>e.maxTextureSize&&(y=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*y*4*h),B=new Qc(w,L,y,h);B.type=ei,B.needsUpdate=!0;const M=C*4;for(let D=0;D<h;D++){const F=d[D],G=A[D],K=T[D],j=L*y*4*D;for(let X=0;X<F.count;X++){const ie=X*M;_===!0&&(a.fromBufferAttribute(F,X),w[j+ie+0]=a.x,w[j+ie+1]=a.y,w[j+ie+2]=a.z,w[j+ie+3]=0),S===!0&&(a.fromBufferAttribute(G,X),w[j+ie+4]=a.x,w[j+ie+5]=a.y,w[j+ie+6]=a.z,w[j+ie+7]=0),m===!0&&(a.fromBufferAttribute(K,X),w[j+ie+8]=a.x,w[j+ie+9]=a.y,w[j+ie+10]=a.z,w[j+ie+11]=K.itemSize===4?a.w:1)}}f={count:h,texture:B,size:new De(L,y)},n.set(o,f),o.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function bm(i,e,t,n){let a=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(a.get(h)!==l&&(e.update(h),a.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==l&&(f.update(),a.set(f,l))}return h}function r(){a=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}const du=new Zt,pc=new ks(1,1),fu=new Qc,pu=new Wh,mu=new ru,mc=[],xc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function va(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=mc[a];if(s===void 0&&(s=new Float32Array(a),mc[a]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(s,o)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ws(i,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function Cm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),Nt(t,n)}}function wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),Nt(t,n)}}function Pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),Nt(t,n)}}function Rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function Im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function Bm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(pc.compareFunction=Kc,s=pc):s=du,t.setTexture2D(e||s,a)}function zm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||pu,a)}function Vm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||mu,a)}function Gm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||fu,a)}function km(i){switch(i){case 5126:return ym;case 35664:return Em;case 35665:return Tm;case 35666:return Am;case 35674:return Cm;case 35675:return wm;case 35676:return Pm;case 5124:case 35670:return Rm;case 35667:case 35671:return Dm;case 35668:case 35672:return Lm;case 35669:case 35673:return Um;case 5125:return Im;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Hm(i,e){i.uniform1fv(this.addr,e)}function Wm(i,e){const t=va(e,this.size,2);i.uniform2fv(this.addr,t)}function Xm(i,e){const t=va(e,this.size,3);i.uniform3fv(this.addr,t)}function qm(i,e){const t=va(e,this.size,4);i.uniform4fv(this.addr,t)}function Ym(i,e){const t=va(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jm(i,e){const t=va(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zm(i,e){const t=va(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $m(i,e){i.uniform1iv(this.addr,e)}function Km(i,e){i.uniform2iv(this.addr,e)}function Jm(i,e){i.uniform3iv(this.addr,e)}function Qm(i,e){i.uniform4iv(this.addr,e)}function e0(i,e){i.uniform1uiv(this.addr,e)}function t0(i,e){i.uniform2uiv(this.addr,e)}function n0(i,e){i.uniform3uiv(this.addr,e)}function i0(i,e){i.uniform4uiv(this.addr,e)}function a0(i,e,t){const n=this.cache,a=e.length,s=Ws(t,a);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||du,s[r])}function s0(i,e,t){const n=this.cache,a=e.length,s=Ws(t,a);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||pu,s[r])}function r0(i,e,t){const n=this.cache,a=e.length,s=Ws(t,a);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||mu,s[r])}function o0(i,e,t){const n=this.cache,a=e.length,s=Ws(t,a);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||fu,s[r])}function l0(i){switch(i){case 5126:return Hm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return jm;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return o0}}class c0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=km(t.type)}}class u0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l0(t.type)}}class h0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Mc(i,e){i.seq.push(e),i.map[e.id]=e}function d0(i,e,t){const n=i.name,a=n.length;for(Sr.lastIndex=0;;){const s=Sr.exec(n),r=Sr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===a){Mc(t,l===void 0?new c0(o,i,e):new u0(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new h0(o),Mc(t,h)),t=h}}}class Is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);d0(s,r,this)}}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&n.push(r)}return n}}function Sc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const f0=37297;let p0=0;function m0(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const bc=new $e;function x0(i){lt._getMatrix(bc,lt.workingColorSpace,i);const e=`mat3( ${bc.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Bs:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+m0(i.getShaderSource(e),o)}else return s}function g0(i,e){const t=x0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _0(i,e){let t;switch(e){case ah:t="Linear";break;case sh:t="Reinhard";break;case rh:t="Cineon";break;case Gc:t="ACESFilmic";break;case lh:t="AgX";break;case ch:t="Neutral";break;case oh:t="Custom";break;default:je("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ms=new O;function v0(){lt.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),e=Ms.y.toFixed(4),t=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function S0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function b0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),r=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Ua(i){return i!==""}function Ec(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(y0,T0)}const E0=new Map;function T0(i,e){let t=Ke[e];if(t===void 0){const n=E0.get(e);if(n!==void 0)t=Ke[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return go(t)}const A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(A0,C0)}function C0(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Cc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function P0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pa:case ma:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ma&&(e="ENVMAP_MODE_REFRACTION"),e}function D0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case nh:e="ENVMAP_BLENDING_MIX";break;case ih:e="ENVMAP_BLENDING_ADD";break}return e}function L0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function U0(i,e,t,n){const a=i.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=w0(t),l=P0(t),u=R0(t),h=D0(t),f=L0(t),p=M0(t),_=S0(s),S=a.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ua).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ua).join(`
`),d.length>0&&(d+=`
`)):(m=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),d=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==gi?_0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,g0("linearToOutputTexel",t.outputColorSpace),v0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),r=go(r),r=Ec(r,t),r=Tc(r,t),o=go(o),o=Ec(o,t),o=Tc(o,t),r=Ac(r),o=Ac(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=A+m+r,C=A+d+o,L=Sc(a,a.VERTEX_SHADER,T),y=Sc(a,a.FRAGMENT_SHADER,C);a.attachShader(S,L),a.attachShader(S,y),t.index0AttributeName!==void 0?a.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function w(D){if(i.debug.checkShaderErrors){const F=a.getProgramInfoLog(S)||"",G=a.getShaderInfoLog(L)||"",K=a.getShaderInfoLog(y)||"",j=F.trim(),X=G.trim(),ie=K.trim();let z=!0,se=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,S,L,y);else{const le=yc(a,L,"vertex"),Ce=yc(a,y,"fragment");Tt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+le+`
`+Ce)}else j!==""?je("WebGLProgram: Program Info Log:",j):(X===""||ie==="")&&(se=!1);se&&(D.diagnostics={runnable:z,programLog:j,vertexShader:{log:X,prefix:m},fragmentShader:{log:ie,prefix:d}})}a.deleteShader(L),a.deleteShader(y),B=new Is(a,S),M=b0(a,S)}let B;this.getUniforms=function(){return B===void 0&&w(this),B};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=a.getProgramParameter(S,f0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p0++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=L,this.fragmentShader=y,this}let I0=0;class N0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new F0(e),t.set(e,n)),n}}class F0{constructor(e){this.id=I0++,this.code=e,this.usedTimes=0}}function O0(i,e,t,n,a,s,r){const o=new Vo,c=new N0,l=new Set,u=[],h=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,v,D,F,G){const K=F.fog,j=G.geometry,X=M.isMeshStandardMaterial?F.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),z=ie&&ie.mapping===Vs?ie.image.height:null,se=_[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&je("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const le=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ce=le!==void 0?le.length:0;let He=0;j.morphAttributes.position!==void 0&&(He=1),j.morphAttributes.normal!==void 0&&(He=2),j.morphAttributes.color!==void 0&&(He=3);let Je,et,nt,Y;if(se){const ct=Un[se];Je=ct.vertexShader,et=ct.fragmentShader}else Je=M.vertexShader,et=M.fragmentShader,c.update(M),nt=c.getVertexShaderID(M),Y=c.getFragmentShaderID(M);const $=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Le=G.isInstancedMesh===!0,Me=G.isBatchedMesh===!0,Ze=!!M.map,bt=!!M.matcap,Xe=!!ie,ot=!!M.aoMap,R=!!M.lightMap,Oe=!!M.bumpMap,qe=!!M.normalMap,st=!!M.displacementMap,ve=!!M.emissiveMap,at=!!M.metalnessMap,J=!!M.roughnessMap,Be=M.anisotropy>0,E=M.clearcoat>0,x=M.dispersion>0,N=M.iridescence>0,q=M.sheen>0,Z=M.transmission>0,k=Be&&!!M.anisotropyMap,Ee=E&&!!M.clearcoatMap,ue=E&&!!M.clearcoatNormalMap,Re=E&&!!M.clearcoatRoughnessMap,Te=N&&!!M.iridescenceMap,te=N&&!!M.iridescenceThicknessMap,ne=q&&!!M.sheenColorMap,Ie=q&&!!M.sheenRoughnessMap,be=!!M.specularMap,fe=!!M.specularColorMap,Ne=!!M.specularIntensityMap,P=Z&&!!M.transmissionMap,ee=Z&&!!M.thicknessMap,ae=!!M.gradientMap,he=!!M.alphaMap,oe=M.alphaTest>0,Q=!!M.alphaHash,Ae=!!M.extensions;let We=gi;M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(We=i.toneMapping);const gt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Je,fragmentShader:et,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Me,batchingColor:Me&&G._colorsTexture!==null,instancing:Le,instancingColor:Le&&G.instanceColor!==null,instancingMorph:Le&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:xa,alphaToCoverage:!!M.alphaToCoverage,map:Ze,matcap:bt,envMap:Xe,envMapMode:Xe&&ie.mapping,envMapCubeUVHeight:z,aoMap:ot,lightMap:R,bumpMap:Oe,normalMap:qe,displacementMap:f&&st,emissiveMap:ve,normalMapObjectSpace:qe&&M.normalMapType===fh,normalMapTangentSpace:qe&&M.normalMapType===$c,metalnessMap:at,roughnessMap:J,anisotropy:Be,anisotropyMap:k,clearcoat:E,clearcoatMap:Ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,dispersion:x,iridescence:N,iridescenceMap:Te,iridescenceThicknessMap:te,sheen:q,sheenColorMap:ne,sheenRoughnessMap:Ie,specularMap:be,specularColorMap:fe,specularIntensityMap:Ne,transmission:Z,transmissionMap:P,thicknessMap:ee,gradientMap:ae,opaque:M.transparent===!1&&M.blending===ha&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:oe,alphaHash:Q,combine:M.combine,mapUv:Ze&&S(M.map.channel),aoMapUv:ot&&S(M.aoMap.channel),lightMapUv:R&&S(M.lightMap.channel),bumpMapUv:Oe&&S(M.bumpMap.channel),normalMapUv:qe&&S(M.normalMap.channel),displacementMapUv:st&&S(M.displacementMap.channel),emissiveMapUv:ve&&S(M.emissiveMap.channel),metalnessMapUv:at&&S(M.metalnessMap.channel),roughnessMapUv:J&&S(M.roughnessMap.channel),anisotropyMapUv:k&&S(M.anisotropyMap.channel),clearcoatMapUv:Ee&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&S(M.sheenRoughnessMap.channel),specularMapUv:be&&S(M.specularMap.channel),specularColorMapUv:fe&&S(M.specularColorMap.channel),specularIntensityMapUv:Ne&&S(M.specularIntensityMap.channel),transmissionMapUv:P&&S(M.transmissionMap.channel),thicknessMapUv:ee&&S(M.thicknessMap.channel),alphaMapUv:he&&S(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(qe||Be),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(Ze||he),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:He,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ze&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:ve&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===In,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ae&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&M.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function d(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)v.push(D),v.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(A(v,M),T(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function A(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function T(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function C(M){const v=_[M.type];let D;if(v){const F=Un[v];D=Ri.clone(F.uniforms)}else D=M.uniforms;return D}function L(M,v){let D;for(let F=0,G=u.length;F<G;F++){const K=u[F];if(K.cacheKey===v){D=K,++D.usedTimes;break}}return D===void 0&&(D=new U0(i,v,M,s),u.push(D)),D}function y(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function w(M){c.remove(M)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:C,acquireProgram:L,releaseProgram:y,releaseShaderCache:w,programs:u,dispose:B}}function B0(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function a(r,o,c){i.get(r)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function z0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pc(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function r(h,f,p,_,S,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:S,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=S,d.group=m),e++,d}function o(h,f,p,_,S,m){const d=r(h,f,p,_,S,m);p.transmission>0?n.push(d):p.transparent===!0?a.push(d):t.push(d)}function c(h,f,p,_,S,m){const d=r(h,f,p,_,S,m);p.transmission>0?n.unshift(d):p.transparent===!0?a.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||z0),n.length>1&&n.sort(f||wc),a.length>1&&a.sort(f||wc)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:o,unshift:c,finish:u,sort:l}}function V0(){let i=new WeakMap;function e(n,a){const s=i.get(n);let r;return s===void 0?(r=new Pc,i.set(n,[r])):a>=s.length?(r=new Pc,s.push(r)):r=s[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function G0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new rt};break;case"SpotLight":t={position:new O,direction:new O,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function k0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let H0=0;function W0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function X0(i){const e=new G0,t=k0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const a=new O,s=new yt,r=new yt;function o(l){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,S=0,m=0,d=0,A=0,T=0,C=0,L=0,y=0,w=0;l.sort(W0);for(let M=0,v=l.length;M<v;M++){const D=l[M],F=D.color,G=D.intensity,K=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*G,h+=F.g*G,f+=F.b*G;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],G);w++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ie=D.shadow,z=t.get(D);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=D.shadow.matrix,A++}n.directional[p]=X,p++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(G),X.distance=K,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[S]=X;const ie=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,ie.updateMatrices(D),D.castShadow&&y++),n.spotLightMatrix[S]=ie.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,n.spotShadow[S]=z,n.spotShadowMap[S]=j,C++}S++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(F).multiplyScalar(G),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const ie=D.shadow,z=t.get(D);z.shadowIntensity=ie.intensity,z.shadowBias=ie.bias,z.shadowNormalBias=ie.normalBias,z.shadowRadius=ie.radius,z.shadowMapSize=ie.mapSize,z.shadowCameraNear=ie.camera.near,z.shadowCameraFar=ie.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=D.shadow.matrix,T++}n.point[_]=X,_++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(G),X.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[d]=X,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const B=n.hash;(B.directionalLength!==p||B.pointLength!==_||B.spotLength!==S||B.rectAreaLength!==m||B.hemiLength!==d||B.numDirectionalShadows!==A||B.numPointShadows!==T||B.numSpotShadows!==C||B.numSpotMaps!==L||B.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=C+L-y,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=w,B.directionalLength=p,B.pointLength=_,B.spotLength=S,B.rectAreaLength=m,B.hemiLength=d,B.numDirectionalShadows=A,B.numPointShadows=T,B.numSpotShadows=C,B.numSpotMaps=L,B.numLightProbes=w,n.version=H0++)}function c(l,u){let h=0,f=0,p=0,_=0,S=0;const m=u.matrixWorldInverse;for(let d=0,A=l.length;d<A;d++){const T=l[d];if(T.isDirectionalLight){const C=n.directional[h];C.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(m),h++}else if(T.isSpotLight){const C=n.spot[p];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const C=n.rectArea[_];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(m),r.identity(),s.copy(T.matrixWorld),s.premultiply(m),r.extractRotation(s),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(r),C.halfHeight.applyMatrix4(r),_++}else if(T.isPointLight){const C=n.point[f];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const C=n.hemi[S];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(m),S++}}}return{setup:o,setupView:c,state:n}}function Rc(i){const e=new X0(i),t=[],n=[];function a(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function r(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:r}}function q0(i){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new Rc(i),e.set(a,[o])):s>=r.length?(o=new Rc(i),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z0(i,e,t){let n=new ou;const a=new De,s=new De,r=new Ct,o=new fd({depthPacking:dh}),c=new pd,l={},u=t.maxTextureSize,h={[On]:sn,[sn]:On,[In]:In},f=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Y0,fragmentShader:j0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new ai;_.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new hn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let d=this.type;this.render=function(y,w,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const M=i.getRenderTarget(),v=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(zt),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=d!==Jn&&this.type===Jn,K=d===Jn&&this.type!==Jn;for(let j=0,X=y.length;j<X;j++){const ie=y[j],z=ie.shadow;if(z===void 0){je("WebGLShadowMap:",ie,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const se=z.getFrameExtents();if(a.multiply(se),s.copy(z.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/se.x),a.x=s.x*se.x,z.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/se.y),a.y=s.y*se.y,z.mapSize.y=s.y)),z.map===null||G===!0||K===!0){const Ce=this.type!==Jn?{minFilter:kt,magFilter:kt}:{};z.map!==null&&z.map.dispose(),z.map=new wn(a.x,a.y,Ce),z.map.texture.name=ie.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const le=z.getViewportCount();for(let Ce=0;Ce<le;Ce++){const He=z.getViewport(Ce);r.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),F.viewport(r),z.updateMatrices(ie,Ce),n=z.getFrustum(),C(w,B,z.camera,ie,this.type)}z.isPointLightShadow!==!0&&this.type===Jn&&A(z,B),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,D)};function A(y,w){const B=e.update(S);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new wn(a.x,a.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,B,f,S,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,B,p,S,null)}function T(y,w,B,M){let v=null;const D=B.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)v=D;else if(v=B.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=v.uuid,G=w.uuid;let K=l[F];K===void 0&&(K={},l[F]=K);let j=K[G];j===void 0&&(j=v.clone(),K[G]=j,w.addEventListener("dispose",L)),v=j}if(v.visible=w.visible,v.wireframe=w.wireframe,M===Jn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,B.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=i.properties.get(v);F.light=B}return v}function C(y,w,B,M,v){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Jn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld);const G=e.update(y),K=y.material;if(Array.isArray(K)){const j=G.groups;for(let X=0,ie=j.length;X<ie;X++){const z=j[X],se=K[z.materialIndex];if(se&&se.visible){const le=T(y,se,M,v);y.onBeforeShadow(i,y,w,B,G,le,z),i.renderBufferDirect(B,null,G,le,y,z),y.onAfterShadow(i,y,w,B,G,le,z)}}}else if(K.visible){const j=T(y,K,M,v);y.onBeforeShadow(i,y,w,B,G,j,null),i.renderBufferDirect(B,null,G,j,y,null),y.onAfterShadow(i,y,w,B,G,j,null)}}const F=y.children;for(let G=0,K=F.length;G<K;G++)C(F[G],w,B,M,v)}function L(y){y.target.removeEventListener("dispose",L);for(const B in l){const M=l[B],v=y.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const $0={[Dr]:Lr,[Ur]:Fr,[Ir]:Or,[fa]:Nr,[Lr]:Dr,[Fr]:Ur,[Or]:Ir,[Nr]:fa};function K0(i,e){function t(){let P=!1;const ee=new Ct;let ae=null;const he=new Ct(0,0,0,0);return{setMask:function(oe){ae!==oe&&!P&&(i.colorMask(oe,oe,oe,oe),ae=oe)},setLocked:function(oe){P=oe},setClear:function(oe,Q,Ae,We,gt){gt===!0&&(oe*=We,Q*=We,Ae*=We),ee.set(oe,Q,Ae,We),he.equals(ee)===!1&&(i.clearColor(oe,Q,Ae,We),he.copy(ee))},reset:function(){P=!1,ae=null,he.set(-1,0,0,0)}}}function n(){let P=!1,ee=!1,ae=null,he=null,oe=null;return{setReversed:function(Q){if(ee!==Q){const Ae=e.get("EXT_clip_control");Q?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ee=Q;const We=oe;oe=null,this.setClear(We)}},getReversed:function(){return ee},setTest:function(Q){Q?$(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(Q){ae!==Q&&!P&&(i.depthMask(Q),ae=Q)},setFunc:function(Q){if(ee&&(Q=$0[Q]),he!==Q){switch(Q){case Dr:i.depthFunc(i.NEVER);break;case Lr:i.depthFunc(i.ALWAYS);break;case Ur:i.depthFunc(i.LESS);break;case fa:i.depthFunc(i.LEQUAL);break;case Ir:i.depthFunc(i.EQUAL);break;case Nr:i.depthFunc(i.GEQUAL);break;case Fr:i.depthFunc(i.GREATER);break;case Or:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Q}},setLocked:function(Q){P=Q},setClear:function(Q){oe!==Q&&(ee&&(Q=1-Q),i.clearDepth(Q),oe=Q)},reset:function(){P=!1,ae=null,he=null,oe=null,ee=!1}}}function a(){let P=!1,ee=null,ae=null,he=null,oe=null,Q=null,Ae=null,We=null,gt=null;return{setTest:function(ct){P||(ct?$(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(ct){ee!==ct&&!P&&(i.stencilMask(ct),ee=ct)},setFunc:function(ct,nn,$t){(ae!==ct||he!==nn||oe!==$t)&&(i.stencilFunc(ct,nn,$t),ae=ct,he=nn,oe=$t)},setOp:function(ct,nn,$t){(Q!==ct||Ae!==nn||We!==$t)&&(i.stencilOp(ct,nn,$t),Q=ct,Ae=nn,We=$t)},setLocked:function(ct){P=ct},setClear:function(ct){gt!==ct&&(i.clearStencil(ct),gt=ct)},reset:function(){P=!1,ee=null,ae=null,he=null,oe=null,Q=null,Ae=null,We=null,gt=null}}}const s=new t,r=new n,o=new a,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,S=!1,m=null,d=null,A=null,T=null,C=null,L=null,y=null,w=new rt(0,0,0),B=0,M=!1,v=null,D=null,F=null,G=null,K=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=ie>=1):z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=ie>=2);let se=null,le={};const Ce=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),Je=new Ct().fromArray(Ce),et=new Ct().fromArray(He);function nt(P,ee,ae,he){const oe=new Uint8Array(4),Q=i.createTexture();i.bindTexture(P,Q),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<ae;Ae++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(ee+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return Q}const Y={};Y[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),$(i.DEPTH_TEST),r.setFunc(fa),Oe(!1),qe(Ll),$(i.CULL_FACE),ot(zt);function $(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function de(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Le(P,ee){return h[P]!==ee?(i.bindFramebuffer(P,ee),h[P]=ee,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ee),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Me(P,ee){let ae=p,he=!1;if(P){ae=f.get(ee),ae===void 0&&(ae=[],f.set(ee,ae));const oe=P.textures;if(ae.length!==oe.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ae=oe.length;Q<Ae;Q++)ae[Q]=i.COLOR_ATTACHMENT0+Q;ae.length=oe.length,he=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,he=!0);he&&i.drawBuffers(ae)}function Ze(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const bt={[En]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[Hu]:i.FUNC_REVERSE_SUBTRACT};bt[Wu]=i.MIN,bt[Xu]=i.MAX;const Xe={[La]:i.ZERO,[qu]:i.ONE,[Yu]:i.SRC_COLOR,[Cr]:i.SRC_ALPHA,[Ku]:i.SRC_ALPHA_SATURATE,[Rr]:i.DST_COLOR,[Pr]:i.DST_ALPHA,[ju]:i.ONE_MINUS_SRC_COLOR,[wr]:i.ONE_MINUS_SRC_ALPHA,[$u]:i.ONE_MINUS_DST_COLOR,[Zu]:i.ONE_MINUS_DST_ALPHA,[Ju]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[eh]:i.CONSTANT_ALPHA,[th]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(P,ee,ae,he,oe,Q,Ae,We,gt,ct){if(P===zt){S===!0&&(de(i.BLEND),S=!1);return}if(S===!1&&($(i.BLEND),S=!0),P!==zc){if(P!==m||ct!==M){if((d!==En||C!==En)&&(i.blendEquation(i.FUNC_ADD),d=En,C=En),ct)switch(P){case ha:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ul:i.blendFunc(i.ONE,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Tt("WebGLState: Invalid blending: ",P);break}else switch(P){case ha:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ul:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Il:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nl:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",P);break}A=null,T=null,L=null,y=null,w.set(0,0,0),B=0,m=P,M=ct}return}oe=oe||ee,Q=Q||ae,Ae=Ae||he,(ee!==d||oe!==C)&&(i.blendEquationSeparate(bt[ee],bt[oe]),d=ee,C=oe),(ae!==A||he!==T||Q!==L||Ae!==y)&&(i.blendFuncSeparate(Xe[ae],Xe[he],Xe[Q],Xe[Ae]),A=ae,T=he,L=Q,y=Ae),(We.equals(w)===!1||gt!==B)&&(i.blendColor(We.r,We.g,We.b,gt),w.copy(We),B=gt),m=P,M=!1}function R(P,ee){P.side===In?de(i.CULL_FACE):$(i.CULL_FACE);let ae=P.side===sn;ee&&(ae=!ae),Oe(ae),P.blending===ha&&P.transparent===!1?ot(zt):ot(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const he=P.stencilWrite;o.setTest(he),he&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ve(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){v!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),v=P)}function qe(P){P!==zu?($(i.CULL_FACE),P!==D&&(P===Ll?i.cullFace(i.BACK):P===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),D=P}function st(P){P!==F&&(X&&i.lineWidth(P),F=P)}function ve(P,ee,ae){P?($(i.POLYGON_OFFSET_FILL),(G!==ee||K!==ae)&&(i.polygonOffset(ee,ae),G=ee,K=ae)):de(i.POLYGON_OFFSET_FILL)}function at(P){P?$(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function J(P){P===void 0&&(P=i.TEXTURE0+j-1),se!==P&&(i.activeTexture(P),se=P)}function Be(P,ee,ae){ae===void 0&&(se===null?ae=i.TEXTURE0+j-1:ae=se);let he=le[ae];he===void 0&&(he={type:void 0,texture:void 0},le[ae]=he),(he.type!==P||he.texture!==ee)&&(se!==ae&&(i.activeTexture(ae),se=ae),i.bindTexture(P,ee||Y[P]),he.type=P,he.texture=ee)}function E(){const P=le[se];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function q(){try{i.texSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Z(){try{i.texSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ue(){try{i.texStorage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Re(){try{i.texStorage3D(...arguments)}catch(P){P("WebGLState:",P)}}function Te(){try{i.texImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function te(){try{i.texImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ne(P){Je.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Je.copy(P))}function Ie(P){et.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),et.copy(P))}function be(P,ee){let ae=l.get(ee);ae===void 0&&(ae=new WeakMap,l.set(ee,ae));let he=ae.get(P);he===void 0&&(he=i.getUniformBlockIndex(ee,P.name),ae.set(P,he))}function fe(P,ee){const he=l.get(ee).get(P);c.get(ee)!==he&&(i.uniformBlockBinding(ee,he,P.__bindingPointIndex),c.set(ee,he))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,le={},h={},f=new WeakMap,p=[],_=null,S=!1,m=null,d=null,A=null,T=null,C=null,L=null,y=null,w=new rt(0,0,0),B=0,M=!1,v=null,D=null,F=null,G=null,K=null,Je.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:$,disable:de,bindFramebuffer:Le,drawBuffers:Me,useProgram:Ze,setBlending:ot,setMaterial:R,setFlipSided:Oe,setCullFace:qe,setLineWidth:st,setPolygonOffset:ve,setScissorTest:at,activeTexture:J,bindTexture:Be,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Te,texImage3D:te,updateUBOMapping:be,uniformBlockBinding:fe,texStorage2D:ue,texStorage3D:Re,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:k,compressedTexSubImage3D:Ee,scissor:ne,viewport:Ie,reset:Ne}}function J0(i,e,t,n,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,x){return p?new OffscreenCanvas(E,x):Ga("canvas")}function S(E,x,N){let q=1;const Z=Be(E);if((Z.width>N||Z.height>N)&&(q=N/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const k=Math.floor(q*Z.width),Ee=Math.floor(q*Z.height);h===void 0&&(h=_(k,Ee));const ue=x?_(k,Ee):h;return ue.width=k,ue.height=Ee,ue.getContext("2d").drawImage(E,0,0,k,Ee),je("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+k+"x"+Ee+")."),ue}else return"data"in E&&je("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,x,N,q,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let k=x;if(x===i.RED&&(N===i.FLOAT&&(k=i.R32F),N===i.HALF_FLOAT&&(k=i.R16F),N===i.UNSIGNED_BYTE&&(k=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.R8UI),N===i.UNSIGNED_SHORT&&(k=i.R16UI),N===i.UNSIGNED_INT&&(k=i.R32UI),N===i.BYTE&&(k=i.R8I),N===i.SHORT&&(k=i.R16I),N===i.INT&&(k=i.R32I)),x===i.RG&&(N===i.FLOAT&&(k=i.RG32F),N===i.HALF_FLOAT&&(k=i.RG16F),N===i.UNSIGNED_BYTE&&(k=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.RG8UI),N===i.UNSIGNED_SHORT&&(k=i.RG16UI),N===i.UNSIGNED_INT&&(k=i.RG32UI),N===i.BYTE&&(k=i.RG8I),N===i.SHORT&&(k=i.RG16I),N===i.INT&&(k=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.RGB8UI),N===i.UNSIGNED_SHORT&&(k=i.RGB16UI),N===i.UNSIGNED_INT&&(k=i.RGB32UI),N===i.BYTE&&(k=i.RGB8I),N===i.SHORT&&(k=i.RGB16I),N===i.INT&&(k=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),N===i.UNSIGNED_INT&&(k=i.RGBA32UI),N===i.BYTE&&(k=i.RGBA8I),N===i.SHORT&&(k=i.RGBA16I),N===i.INT&&(k=i.RGBA32I)),x===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),x===i.RGBA){const Ee=Z?Bs:lt.getTransfer(q);N===i.FLOAT&&(k=i.RGBA32F),N===i.HALF_FLOAT&&(k=i.RGBA16F),N===i.UNSIGNED_BYTE&&(k=Ee===mt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function C(E,x){let N;return E?x===null||x===Ni||x===_i?N=i.DEPTH24_STENCIL8:x===ei?N=i.DEPTH32F_STENCIL8:x===za&&(N=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ni||x===_i?N=i.DEPTH_COMPONENT24:x===ei?N=i.DEPTH_COMPONENT32F:x===za&&(N=i.DEPTH_COMPONENT16),N}function L(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==kt&&E.minFilter!==jt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function y(E){const x=E.target;x.removeEventListener("dispose",y),B(x),x.isVideoTexture&&u.delete(x)}function w(E){const x=E.target;x.removeEventListener("dispose",w),v(x)}function B(E){const x=n.get(E);if(x.__webglInit===void 0)return;const N=E.source,q=f.get(N);if(q){const Z=q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(E),Object.keys(q).length===0&&f.delete(N)}n.remove(E)}function M(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const N=E.source,q=f.get(N);delete q[x.__cacheKey],r.memory.textures--}function v(E){const x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Z=0;Z<x.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=E.textures;for(let q=0,Z=N.length;q<Z;q++){const k=n.get(N[q]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),r.memory.textures--),n.remove(N[q])}n.remove(E)}let D=0;function F(){D=0}function G(){const E=D;return E>=a.maxTextures&&je("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+a.maxTextures),D+=1,E}function K(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function j(E,x){const N=n.get(E);if(E.isVideoTexture&&at(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const q=E.image;if(q===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,E,x);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function X(E,x){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Y(N,E,x);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function ie(E,x){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Y(N,E,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function z(E,x){const N=n.get(E);if(E.version>0&&N.__version!==E.version){$(N,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const se={[Cn]:i.REPEAT,[cn]:i.CLAMP_TO_EDGE,[Vr]:i.MIRRORED_REPEAT},le={[kt]:i.NEAREST,[uh]:i.NEAREST_MIPMAP_NEAREST,[es]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[Ys]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},Ce={[ph]:i.NEVER,[Mh]:i.ALWAYS,[mh]:i.LESS,[Kc]:i.LEQUAL,[xh]:i.EQUAL,[vh]:i.GEQUAL,[gh]:i.GREATER,[_h]:i.NOTEQUAL};function He(E,x){if(x.type===ei&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===jt||x.magFilter===Ys||x.magFilter===es||x.magFilter===Li||x.minFilter===jt||x.minFilter===Ys||x.minFilter===es||x.minFilter===Li)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,se[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,se[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,se[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,le[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,le[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==es&&x.minFilter!==Li||x.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Je(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",y));const q=x.source;let Z=f.get(q);Z===void 0&&(Z={},f.set(q,Z));const k=K(x);if(k!==E.__cacheKey){Z[k]===void 0&&(Z[k]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,N=!0),Z[k].usedTimes++;const Ee=Z[E.__cacheKey];Ee!==void 0&&(Z[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(x)),E.__cacheKey=k,E.__webglTexture=Z[k].texture}return N}function et(E,x,N){return Math.floor(Math.floor(E/N)/x)}function nt(E,x,N,q){const k=E.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,N,q,x.data);else{k.sort((te,ne)=>te.start-ne.start);let Ee=0;for(let te=1;te<k.length;te++){const ne=k[Ee],Ie=k[te],be=ne.start+ne.count,fe=et(Ie.start,x.width,4),Ne=et(ne.start,x.width,4);Ie.start<=be+1&&fe===Ne&&et(Ie.start+Ie.count-1,x.width,4)===fe?ne.count=Math.max(ne.count,Ie.start+Ie.count-ne.start):(++Ee,k[Ee]=Ie)}k.length=Ee+1;const ue=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Te=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let te=0,ne=k.length;te<ne;te++){const Ie=k[te],be=Math.floor(Ie.start/4),fe=Math.ceil(Ie.count/4),Ne=be%x.width,P=Math.floor(be/x.width),ee=fe,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Ne,P,ee,ae,N,q,x.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function Y(E,x,N){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const Z=Je(E,x),k=x.source;t.bindTexture(q,E.__webglTexture,i.TEXTURE0+N);const Ee=n.get(k);if(k.version!==Ee.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);const ue=lt.getPrimaries(lt.workingColorSpace),Re=x.colorSpace===Tn?null:lt.getPrimaries(x.colorSpace),Te=x.colorSpace===Tn||ue===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let te=S(x.image,!1,a.maxTextureSize);te=J(x,te);const ne=s.convert(x.format,x.colorSpace),Ie=s.convert(x.type);let be=T(x.internalFormat,ne,Ie,x.colorSpace,x.isVideoTexture);He(q,x);let fe;const Ne=x.mipmaps,P=x.isVideoTexture!==!0,ee=Ee.__version===void 0||Z===!0,ae=k.dataReady,he=L(x,te);if(x.isDepthTexture)be=C(x.format===Fi,x.type),ee&&(P?t.texStorage2D(i.TEXTURE_2D,1,be,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,be,te.width,te.height,0,ne,Ie,null));else if(x.isDataTexture)if(Ne.length>0){P&&ee&&t.texStorage2D(i.TEXTURE_2D,he,be,Ne[0].width,Ne[0].height);for(let oe=0,Q=Ne.length;oe<Q;oe++)fe=Ne[oe],P?ae&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,fe.width,fe.height,ne,Ie,fe.data):t.texImage2D(i.TEXTURE_2D,oe,be,fe.width,fe.height,0,ne,Ie,fe.data);x.generateMipmaps=!1}else P?(ee&&t.texStorage2D(i.TEXTURE_2D,he,be,te.width,te.height),ae&&nt(x,te,ne,Ie)):t.texImage2D(i.TEXTURE_2D,0,be,te.width,te.height,0,ne,Ie,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){P&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,be,Ne[0].width,Ne[0].height,te.depth);for(let oe=0,Q=Ne.length;oe<Q;oe++)if(fe=Ne[oe],x.format!==un)if(ne!==null)if(P){if(ae)if(x.layerUpdates.size>0){const Ae=oc(fe.width,fe.height,x.format,x.type);for(const We of x.layerUpdates){const gt=fe.data.subarray(We*Ae/fe.data.BYTES_PER_ELEMENT,(We+1)*Ae/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,We,fe.width,fe.height,1,ne,gt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,fe.width,fe.height,te.depth,ne,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,be,fe.width,fe.height,te.depth,0,fe.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,fe.width,fe.height,te.depth,ne,Ie,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,be,fe.width,fe.height,te.depth,0,ne,Ie,fe.data)}else{P&&ee&&t.texStorage2D(i.TEXTURE_2D,he,be,Ne[0].width,Ne[0].height);for(let oe=0,Q=Ne.length;oe<Q;oe++)fe=Ne[oe],x.format!==un?ne!==null?P?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,fe.width,fe.height,ne,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,be,fe.width,fe.height,0,fe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ae&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,fe.width,fe.height,ne,Ie,fe.data):t.texImage2D(i.TEXTURE_2D,oe,be,fe.width,fe.height,0,ne,Ie,fe.data)}else if(x.isDataArrayTexture)if(P){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,be,te.width,te.height,te.depth),ae)if(x.layerUpdates.size>0){const oe=oc(te.width,te.height,x.format,x.type);for(const Q of x.layerUpdates){const Ae=te.data.subarray(Q*oe/te.data.BYTES_PER_ELEMENT,(Q+1)*oe/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,te.width,te.height,1,ne,Ie,Ae)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ne,Ie,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,te.width,te.height,te.depth,0,ne,Ie,te.data);else if(x.isData3DTexture)P?(ee&&t.texStorage3D(i.TEXTURE_3D,he,be,te.width,te.height,te.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ne,Ie,te.data)):t.texImage3D(i.TEXTURE_3D,0,be,te.width,te.height,te.depth,0,ne,Ie,te.data);else if(x.isFramebufferTexture){if(ee)if(P)t.texStorage2D(i.TEXTURE_2D,he,be,te.width,te.height);else{let oe=te.width,Q=te.height;for(let Ae=0;Ae<he;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,be,oe,Q,0,ne,Ie,null),oe>>=1,Q>>=1}}else if(Ne.length>0){if(P&&ee){const oe=Be(Ne[0]);t.texStorage2D(i.TEXTURE_2D,he,be,oe.width,oe.height)}for(let oe=0,Q=Ne.length;oe<Q;oe++)fe=Ne[oe],P?ae&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ne,Ie,fe):t.texImage2D(i.TEXTURE_2D,oe,be,ne,Ie,fe);x.generateMipmaps=!1}else if(P){if(ee){const oe=Be(te);t.texStorage2D(i.TEXTURE_2D,he,be,oe.width,oe.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,Ie,te)}else t.texImage2D(i.TEXTURE_2D,0,be,ne,Ie,te);m(x)&&d(q),Ee.__version=k.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function $(E,x,N){if(x.image.length!==6)return;const q=Je(E,x),Z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const k=n.get(Z);if(Z.version!==k.__version||q===!0){t.activeTexture(i.TEXTURE0+N);const Ee=lt.getPrimaries(lt.workingColorSpace),ue=x.colorSpace===Tn?null:lt.getPrimaries(x.colorSpace),Re=x.colorSpace===Tn||Ee===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Te=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let Q=0;Q<6;Q++)!Te&&!te?ne[Q]=S(x.image[Q],!0,a.maxCubemapSize):ne[Q]=te?x.image[Q].image:x.image[Q],ne[Q]=J(x,ne[Q]);const Ie=ne[0],be=s.convert(x.format,x.colorSpace),fe=s.convert(x.type),Ne=T(x.internalFormat,be,fe,x.colorSpace),P=x.isVideoTexture!==!0,ee=k.__version===void 0||q===!0,ae=Z.dataReady;let he=L(x,Ie);He(i.TEXTURE_CUBE_MAP,x);let oe;if(Te){P&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ne,Ie.width,Ie.height);for(let Q=0;Q<6;Q++){oe=ne[Q].mipmaps;for(let Ae=0;Ae<oe.length;Ae++){const We=oe[Ae];x.format!==un?be!==null?P?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,0,0,We.width,We.height,be,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,Ne,We.width,We.height,0,We.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,0,0,We.width,We.height,be,fe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,Ne,We.width,We.height,0,be,fe,We.data)}}}else{if(oe=x.mipmaps,P&&ee){oe.length>0&&he++;const Q=Be(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ne,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(te){P?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ne[Q].width,ne[Q].height,be,fe,ne[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ne,ne[Q].width,ne[Q].height,0,be,fe,ne[Q].data);for(let Ae=0;Ae<oe.length;Ae++){const gt=oe[Ae].image[Q].image;P?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,0,0,gt.width,gt.height,be,fe,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,Ne,gt.width,gt.height,0,be,fe,gt.data)}}else{P?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,be,fe,ne[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ne,be,fe,ne[Q]);for(let Ae=0;Ae<oe.length;Ae++){const We=oe[Ae];P?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,0,0,be,fe,We.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,Ne,be,fe,We.image[Q])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),k.__version=Z.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function de(E,x,N,q,Z,k){const Ee=s.convert(N.format,N.colorSpace),ue=s.convert(N.type),Re=T(N.internalFormat,Ee,ue,N.colorSpace),Te=n.get(x),te=n.get(N);if(te.__renderTarget=x,!Te.__hasExternalTextures){const ne=Math.max(1,x.width>>k),Ie=Math.max(1,x.height>>k);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,k,Re,ne,Ie,x.depth,0,Ee,ue,null):t.texImage2D(Z,k,Re,ne,Ie,0,Ee,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,te.__webglTexture,0,st(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,te.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(E,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){const q=x.depthTexture,Z=q&&q.isDepthTexture?q.type:null,k=C(x.stencilBuffer,Z),Ee=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=st(x);ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,k,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,k,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,k,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,E)}else{const q=x.textures;for(let Z=0;Z<q.length;Z++){const k=q[Z],Ee=s.convert(k.format,k.colorSpace),ue=s.convert(k.type),Re=T(k.internalFormat,Ee,ue,k.colorSpace),Te=st(x);N&&ve(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Re,x.width,x.height):ve(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,Re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Re,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const Z=q.__webglTexture,k=st(x);if(x.depthTexture.format===Va)ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(x.depthTexture.format===Fi)ve(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ze(E){const x=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=q}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const q=E.texture.mipmaps;q&&q.length>0?Me(x.__webglFramebuffer[0],E):Me(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),Le(x.__webglDepthbuffer[q],E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,k)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Le(x.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(E,x,N){const q=n.get(E);x!==void 0&&de(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ze(E)}function Xe(E){const x=E.texture,N=n.get(E),q=n.get(x);E.addEventListener("dispose",w);const Z=E.textures,k=E.isWebGLCubeRenderTarget===!0,Ee=Z.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,r.memory.textures++),k){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let Re=0;Re<x.mipmaps.length;Re++)N.__webglFramebuffer[ue][Re]=i.createFramebuffer()}else N.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)N.__webglFramebuffer[ue]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ue=0,Re=Z.length;ue<Re;ue++){const Te=n.get(Z[ue]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),r.memory.textures++)}if(E.samples>0&&ve(E)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const Re=Z[ue];N.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const Te=s.convert(Re.format,Re.colorSpace),te=s.convert(Re.type),ne=T(Re.internalFormat,Te,te,Re.colorSpace,E.isXRRenderTarget===!0),Ie=st(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ne,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),He(i.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)de(N.__webglFramebuffer[ue][Re],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re);else de(N.__webglFramebuffer[ue],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ue=0,Re=Z.length;ue<Re;ue++){const Te=Z[ue],te=n.get(Te);let ne=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,te.__webglTexture),He(ne,Te),de(N.__webglFramebuffer,E,Te,i.COLOR_ATTACHMENT0+ue,ne,0),m(Te)&&d(ne)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,q.__webglTexture),He(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)de(N.__webglFramebuffer[Re],E,x,i.COLOR_ATTACHMENT0,ue,Re);else de(N.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ue,0);m(x)&&d(ue),t.unbindTexture()}E.depthBuffer&&Ze(E)}function ot(E){const x=E.textures;for(let N=0,q=x.length;N<q;N++){const Z=x[N];if(m(Z)){const k=A(E),Ee=n.get(Z).__webglTexture;t.bindTexture(k,Ee),d(k),t.unbindTexture()}}}const R=[],Oe=[];function qe(E){if(E.samples>0){if(ve(E)===!1){const x=E.textures,N=E.width,q=E.height;let Z=i.COLOR_BUFFER_BIT;const k=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(E),ue=x.length>1;if(ue)for(let Te=0;Te<x.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Re=E.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Te=0;Te<x.length;Te++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const te=n.get(x[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,N,q,0,0,N,q,Z,i.NEAREST),c===!0&&(R.length=0,Oe.length=0,R.push(i.COLOR_ATTACHMENT0+Te),E.depthBuffer&&E.resolveDepthBuffer===!1&&(R.push(k),Oe.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Te=0;Te<x.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const te=n.get(x[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function st(E){return Math.min(a.maxSamples,E.samples)}function ve(E){const x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function at(E){const x=r.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function J(E,x){const N=E.colorSpace,q=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==xa&&N!==Tn&&(lt.getTransfer(N)===mt?(q!==un||Z!==Bn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",N)),x}function Be(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=ie,this.setTextureCube=z,this.rebindTextures=bt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ve}function Q0(i,e){function t(n,a=Tn){let s;const r=lt.getTransfer(a);if(n===Bn)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Do)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hc)return i.BYTE;if(n===Wc)return i.SHORT;if(n===za)return i.UNSIGNED_SHORT;if(n===Po)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===jc)return i.RGB;if(n===un)return i.RGBA;if(n===Va)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===Uo)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===No)return i.RGBA_INTEGER;if(n===Rs||n===Ds||n===Ls||n===Us)if(r===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gr||n===kr||n===Hr||n===Wr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xr||n===qr||n===Yr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xr||n===qr)return r===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yr)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jr||n===Zr||n===$r||n===Kr||n===Jr||n===Qr||n===eo||n===to||n===no||n===io||n===ao||n===so||n===ro||n===oo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===jr)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zr)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$r)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kr)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jr)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qr)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===to)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===no)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===io)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ro)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oo)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===co||n===uo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===lo)return r===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===co)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ho||n===fo||n===po||n===mo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ho)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new lu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ut({vertexShader:ex,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ix extends Bi{constructor(e,t){super();const n=this;let a=null,s=1,r=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new nx,d={},A=t.getContextAttributes();let T=null,C=null;const L=[],y=[],w=new De;let B=null;const M=new _n;M.viewport=new Ct;const v=new _n;v.viewport=new Ct;const D=[M,v],F=new vd;let G=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=L[Y];return $===void 0&&($=new pr,L[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=L[Y];return $===void 0&&($=new pr,L[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=L[Y];return $===void 0&&($=new pr,L[Y]=$),$.getHandSpace()};function j(Y){const $=y.indexOf(Y.inputSource);if($===-1)return;const de=L[$];de!==void 0&&(de.update(Y.inputSource,Y.frame,l||r),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){a.removeEventListener("select",j),a.removeEventListener("selectstart",j),a.removeEventListener("selectend",j),a.removeEventListener("squeeze",j),a.removeEventListener("squeezestart",j),a.removeEventListener("squeezeend",j),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<L.length;Y++){const $=y[Y];$!==null&&(y[Y]=null,L[Y].disconnect($))}G=null,K=null,m.reset();for(const Y in d)delete d[Y];e.setRenderTarget(T),p=null,f=null,h=null,a=null,C=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",j),a.addEventListener("selectstart",j),a.addEventListener("selectend",j),a.addEventListener("squeeze",j),a.addEventListener("squeezestart",j),a.addEventListener("squeezeend",j),a.addEventListener("end",X),a.addEventListener("inputsourceschange",ie),A.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Le=null,Me=null;A.depth&&(Me=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=A.stencil?Fi:Va,Le=A.stencil?_i:Ni);const Ze={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ze),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new wn(f.textureWidth,f.textureHeight,{format:un,type:Bn,depthTexture:new ks(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new wn(p.framebufferWidth,p.framebufferHeight,{format:un,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await a.requestReferenceSpace(o),nt.setContext(a),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Y){for(let $=0;$<Y.removed.length;$++){const de=Y.removed[$],Le=y.indexOf(de);Le>=0&&(y[Le]=null,L[Le].disconnect(de))}for(let $=0;$<Y.added.length;$++){const de=Y.added[$];let Le=y.indexOf(de);if(Le===-1){for(let Ze=0;Ze<L.length;Ze++)if(Ze>=y.length){y.push(de),Le=Ze;break}else if(y[Ze]===null){y[Ze]=de,Le=Ze;break}if(Le===-1)break}const Me=L[Le];Me&&Me.connect(de)}}const z=new O,se=new O;function le(Y,$,de){z.setFromMatrixPosition($.matrixWorld),se.setFromMatrixPosition(de.matrixWorld);const Le=z.distanceTo(se),Me=$.projectionMatrix.elements,Ze=de.projectionMatrix.elements,bt=Me[14]/(Me[10]-1),Xe=Me[14]/(Me[10]+1),ot=(Me[9]+1)/Me[5],R=(Me[9]-1)/Me[5],Oe=(Me[8]-1)/Me[0],qe=(Ze[8]+1)/Ze[0],st=bt*Oe,ve=bt*qe,at=Le/(-Oe+qe),J=at*-Oe;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(J),Y.translateZ(at),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Be=bt+at,E=Xe+at,x=st-J,N=ve+(Le-J),q=ot*Xe/E*Be,Z=R*Xe/E*Be;Y.projectionMatrix.makePerspective(x,N,q,Z,Be,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ce(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let $=Y.near,de=Y.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(de=m.depthFar)),F.near=v.near=M.near=$,F.far=v.far=M.far=de,(G!==F.near||K!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,K=F.far),F.layers.mask=Y.layers.mask|6,M.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;const Le=Y.parent,Me=F.cameras;Ce(F,Le);for(let Ze=0;Ze<Me.length;Ze++)Ce(Me[Ze],Le);Me.length===2?le(F,M,v):F.projectionMatrix.copy(M.projectionMatrix),He(Y,F,Le)};function He(Y,$,de){de===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ha*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return d[Y]};let Je=null;function et(Y,$){if(u=$.getViewerPose(l||r),_=$,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let Le=!1;de.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let Xe=0;Xe<de.length;Xe++){const ot=de[Xe];let R=null;if(p!==null)R=p.getViewport(ot);else{const qe=h.getViewSubImage(f,ot);R=qe.viewport,Xe===0&&(e.setRenderTargetTextures(C,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(C))}let Oe=D[Xe];Oe===void 0&&(Oe=new _n,Oe.layers.enable(Xe),Oe.viewport=new Ct,D[Xe]=Oe),Oe.matrix.fromArray(ot.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(ot.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(R.x,R.y,R.width,R.height),Xe===0&&(F.matrix.copy(Oe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Oe)}const Me=a.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&S){h=n.getBinding();const Xe=h.getDepthInformation(de[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,a.renderState)}if(Me&&Me.includes("camera-access")&&S){e.state.unbindTexture(),h=n.getBinding();for(let Xe=0;Xe<de.length;Xe++){const ot=de[Xe].camera;if(ot){let R=d[ot];R||(R=new lu,d[ot]=R);const Oe=h.getCameraImage(ot);R.sourceTexture=Oe}}}}for(let de=0;de<L.length;de++){const Le=y[de],Me=L[de];Le!==null&&Me!==void 0&&Me.update(Le,$,l||r)}Je&&Je(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const nt=new hu;nt.setAnimationLoop(et),this.setAnimationLoop=function(Y){Je=Y},this.dispose=function(){}}}const Pi=new ii,ax=new yt;function sx(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,au(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,A,T,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,C)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,A,T):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),T=A.envMap,C=A.envMapRotation;T&&(m.envMap.value=T,Pi.copy(C),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Pi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,A,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function rx(i,e,t,n){let a={},s={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const C=T.program;n.uniformBlockBinding(A,C)}function l(A,T){let C=a[A.id];C===void 0&&(_(A),C=u(A),a[A.id]=C,A.addEventListener("dispose",m));const L=T.program;n.updateUBOMapping(A,L);const y=e.render.frame;s[A.id]!==y&&(f(A),s[A.id]=y)}function u(A){const T=h();A.__bindingPointIndex=T;const C=i.createBuffer(),L=A.__size,y=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,L,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,C),C}function h(){for(let A=0;A<o;A++)if(r.indexOf(A)===-1)return r.push(A),A;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=a[A.id],C=A.uniforms,L=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let y=0,w=C.length;y<w;y++){const B=Array.isArray(C[y])?C[y]:[C[y]];for(let M=0,v=B.length;M<v;M++){const D=B[M];if(p(D,y,M,L)===!0){const F=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let j=0;j<G.length;j++){const X=G[j],ie=S(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,F+K,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,K),K+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,T,C,L){const y=A.value,w=T+"_"+C;if(L[w]===void 0)return typeof y=="number"||typeof y=="boolean"?L[w]=y:L[w]=y.clone(),!0;{const B=L[w];if(typeof y=="number"||typeof y=="boolean"){if(B!==y)return L[w]=y,!0}else if(B.equals(y)===!1)return B.copy(y),!0}return!1}function _(A){const T=A.uniforms;let C=0;const L=16;for(let w=0,B=T.length;w<B;w++){const M=Array.isArray(T[w])?T[w]:[T[w]];for(let v=0,D=M.length;v<D;v++){const F=M[v],G=Array.isArray(F.value)?F.value:[F.value];for(let K=0,j=G.length;K<j;K++){const X=G[K],ie=S(X),z=C%L,se=z%ie.boundary,le=z+se;C+=se,le!==0&&L-le<ie.storage&&(C+=L-le),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=C,C+=ie.storage}}}const y=C%L;return y>0&&(C+=L-y),A.__size=C,A.__cache={},this}function S(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const C=r.indexOf(T.__bindingPointIndex);r.splice(C,1),i.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function d(){for(const A in a)i.deleteBuffer(a[A]);r=[],a={},s={}}return{bind:c,update:l,dispose:d}}const ox=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Kn=null;function lx(){return Kn===null&&(Kn=new Gs(ox,32,32,Uo,zn),Kn.minFilter=jt,Kn.magFilter=jt,Kn.wrapS=cn,Kn.wrapT=cn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class cx{constructor(e={}){const{canvas:t=Sh(),context:n=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const _=new Set([No,Io,Lo]),S=new Set([Bn,Ni,za,_i,Ro,Do]),m=new Uint32Array(4),d=new Int32Array(4);let A=null,T=null;const C=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=Gt;let B=0,M=0,v=null,D=-1,F=null;const G=new Ct,K=new Ct;let j=null;const X=new rt(0);let ie=0,z=t.width,se=t.height,le=1,Ce=null,He=null;const Je=new Ct(0,0,z,se),et=new Ct(0,0,z,se);let nt=!1;const Y=new ou;let $=!1,de=!1;const Le=new yt,Me=new O,Ze=new Ct,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ot(){return v===null?le:1}let R=n;function Oe(g,U){return t.getContext(g,U)}try{const g={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),R===null){const U="webgl2";if(R=Oe(U,g),R===null)throw Oe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw g("WebGLRenderer: "+g.message),g}let qe,st,ve,at,J,Be,E,x,N,q,Z,k,Ee,ue,Re,Te,te,ne,Ie,be,fe,Ne,P,ee;function ae(){qe=new gm(R),qe.init(),Ne=new Q0(R,qe),st=new lm(R,qe,e,Ne),ve=new K0(R,qe),st.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),at=new Mm(R),J=new B0,Be=new J0(R,qe,ve,J,st,Ne,at),E=new um(y),x=new xm(y),N=new yd(R),P=new rm(R,N),q=new _m(R,N,at,P),Z=new bm(R,q,N,at),Ie=new Sm(R,st,Be),Te=new cm(J),k=new O0(y,E,x,qe,st,P,Te),Ee=new sx(y,J),ue=new V0,Re=new q0(qe),ne=new sm(y,E,x,ve,Z,p,c),te=new Z0(y,Z,st),ee=new rx(R,at,st,ve),be=new om(R,qe,at),fe=new vm(R,qe,at),at.programs=k.programs,y.capabilities=st,y.extensions=qe,y.properties=J,y.renderLists=ue,y.shadowMap=te,y.state=ve,y.info=at}ae();const he=new ix(y,R);this.xr=he,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const g=qe.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=qe.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(g){g!==void 0&&(le=g,this.setSize(z,se,!1))},this.getSize=function(g){return g.set(z,se)},this.setSize=function(g,U,H=!0){if(he.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}z=g,se=U,t.width=Math.floor(g*le),t.height=Math.floor(U*le),H===!0&&(t.style.width=g+"px",t.style.height=U+"px"),this.setViewport(0,0,g,U)},this.getDrawingBufferSize=function(g){return g.set(z*le,se*le).floor()},this.setDrawingBufferSize=function(g,U,H){z=g,se=U,le=H,t.width=Math.floor(g*H),t.height=Math.floor(U*H),this.setViewport(0,0,g,U)},this.getCurrentViewport=function(g){return g.copy(G)},this.getViewport=function(g){return g.copy(Je)},this.setViewport=function(g,U,H,W){g.isVector4?Je.set(g.x,g.y,g.z,g.w):Je.set(g,U,H,W),ve.viewport(G.copy(Je).multiplyScalar(le).round())},this.getScissor=function(g){return g.copy(et)},this.setScissor=function(g,U,H,W){g.isVector4?et.set(g.x,g.y,g.z,g.w):et.set(g,U,H,W),ve.scissor(K.copy(et).multiplyScalar(le).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(g){ve.setScissorTest(nt=g)},this.setOpaqueSort=function(g){Ce=g},this.setTransparentSort=function(g){He=g},this.getClearColor=function(g){return g.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(g=!0,U=!0,H=!0){let W=0;if(g){let I=!1;if(v!==null){const ce=v.texture.format;I=_.has(ce)}if(I){const ce=v.texture.type,me=S.has(ce),ye=ne.getClearColor(),_e=ne.getClearAlpha(),ze=ye.r,Se=ye.g,Ue=ye.b;me?(m[0]=ze,m[1]=Se,m[2]=Ue,m[3]=_e,R.clearBufferuiv(R.COLOR,0,m)):(d[0]=ze,d[1]=Se,d[2]=Ue,d[3]=_e,R.clearBufferiv(R.COLOR,0,d))}else W|=R.COLOR_BUFFER_BIT}U&&(W|=R.DEPTH_BUFFER_BIT),H&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ne.dispose(),ue.dispose(),Re.dispose(),J.dispose(),E.dispose(),x.dispose(),Z.dispose(),P.dispose(),ee.dispose(),k.dispose(),he.dispose(),he.removeEventListener("sessionstart",Sa),he.removeEventListener("sessionend",ba),Pn.stop()};function oe(g){g.preventDefault(),Vl("WebGLRenderer: Context Lost."),w=!0}function Q(){Vl("WebGLRenderer: Context Restored."),w=!1;const g=at.autoReset,U=te.enabled,H=te.autoUpdate,W=te.needsUpdate,I=te.type;ae(),at.autoReset=g,te.enabled=U,te.autoUpdate=H,te.needsUpdate=W,te.type=I}function Ae(g){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function We(g){const U=g.target;U.removeEventListener("dispose",We),gt(U)}function gt(g){ct(g),J.remove(g)}function ct(g){const U=J.get(g).programs;U!==void 0&&(U.forEach(function(H){k.releaseProgram(H)}),g.isShaderMaterial&&k.releaseShaderCache(g))}this.renderBufferDirect=function(g,U,H,W,I,ce){U===null&&(U=bt);const me=I.isMesh&&I.matrixWorld.determinant()<0,ye=fn(g,U,H,W,I);ve.setMaterial(W,me);let _e=H.index,ze=1;if(W.wireframe===!0){if(_e=q.getWireframeAttribute(H),_e===void 0)return;ze=2}const Se=H.drawRange,Ue=H.attributes.position;let Ye=Se.start*ze,tt=(Se.start+Se.count)*ze;ce!==null&&(Ye=Math.max(Ye,ce.start*ze),tt=Math.min(tt,(ce.start+ce.count)*ze)),_e!==null?(Ye=Math.max(Ye,0),tt=Math.min(tt,_e.count)):Ue!=null&&(Ye=Math.max(Ye,0),tt=Math.min(tt,Ue.count));const ut=tt-Ye;if(ut<0||ut===1/0)return;P.setup(I,W,ye,H,_e);let ht,dt=be;if(_e!==null&&(ht=N.get(_e),dt=fe,dt.setIndex(ht)),I.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*ot()),dt.setMode(R.LINES)):dt.setMode(R.TRIANGLES);else if(I.isLine){let Fe=W.linewidth;Fe===void 0&&(Fe=1),ve.setLineWidth(Fe*ot()),I.isLineSegments?dt.setMode(R.LINES):I.isLineLoop?dt.setMode(R.LINE_LOOP):dt.setMode(R.LINE_STRIP)}else I.isPoints?dt.setMode(R.POINTS):I.isSprite&&dt.setMode(R.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)ka("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))dt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Fe=I._multiDrawStarts,Mt=I._multiDrawCounts,it=I._multiDrawCount,Ht=_e?N.get(_e).bytesPerElement:1,kn=J.get(W).currentProgram.getUniforms();for(let Vt=0;Vt<it;Vt++)kn.setValue(R,"_gl_DrawID",Vt),dt.render(Fe[Vt]/Ht,Mt[Vt])}else if(I.isInstancedMesh)dt.renderInstances(Ye,ut,I.count);else if(H.isInstancedBufferGeometry){const Fe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Mt=Math.min(H.instanceCount,Fe);dt.renderInstances(Ye,ut,Mt)}else dt.render(Ye,ut)};function nn(g,U,H){g.transparent===!0&&g.side===In&&g.forceSinglePass===!1?(g.side=sn,g.needsUpdate=!0,si(g,U,H),g.side=On,g.needsUpdate=!0,si(g,U,H),g.side=In):si(g,U,H)}this.compile=function(g,U,H=null){H===null&&(H=g),T=Re.get(H),T.init(U),L.push(T),H.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(T.pushLight(I),I.castShadow&&T.pushShadow(I))}),g!==H&&g.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(T.pushLight(I),I.castShadow&&T.pushShadow(I))}),T.setupLights();const W=new Set;return g.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ce=I.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const ye=ce[me];nn(ye,H,I),W.add(ye)}else nn(ce,H,I),W.add(ce)}),T=L.pop(),W},this.compileAsync=function(g,U,H=null){const W=this.compile(g,U,H);return new Promise(I=>{function ce(){if(W.forEach(function(me){J.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){I(g);return}setTimeout(ce,10)}qe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let $t=null;function Ma(g){$t&&$t(g)}function Sa(){Pn.stop()}function ba(){Pn.start()}const Pn=new hu;Pn.setAnimationLoop(Ma),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(g){$t=g,he.setAnimationLoop(g),g===null?Pn.stop():Pn.start()},he.addEventListener("sessionstart",Sa),he.addEventListener("sessionend",ba),this.render=function(g,U){if(U!==void 0&&U.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(U),U=he.getCamera()),g.isScene===!0&&g.onBeforeRender(y,g,U,v),T=Re.get(g,L.length),T.init(U),L.push(T),Le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Le,Nn,U.reversedDepth),de=this.localClippingEnabled,$=Te.init(this.clippingPlanes,de),A=ue.get(g,C.length),A.init(),C.push(A),he.enabled===!0&&he.isPresenting===!0){const ce=y.xr.getDepthSensingMesh();ce!==null&&vi(ce,U,-1/0,y.sortObjects)}vi(g,U,0,y.sortObjects),A.finish(),y.sortObjects===!0&&A.sort(Ce,He),Xe=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Xe&&ne.addToRenderList(A,g),this.info.render.frame++,$===!0&&Te.beginShadows();const H=T.state.shadowsArray;te.render(H,g,U),$===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=A.opaque,I=A.transmissive;if(T.setupLights(),U.isArrayCamera){const ce=U.cameras;if(I.length>0)for(let me=0,ye=ce.length;me<ye;me++){const _e=ce[me];zi(W,I,g,_e)}Xe&&ne.render(g);for(let me=0,ye=ce.length;me<ye;me++){const _e=ce[me];Mi(A,g,_e,_e.viewport)}}else I.length>0&&zi(W,I,g,U),Xe&&ne.render(g),Mi(A,g,U);v!==null&&M===0&&(Be.updateMultisampleRenderTarget(v),Be.updateRenderTargetMipmap(v)),g.isScene===!0&&g.onAfterRender(y,g,U),P.resetDefaultState(),D=-1,F=null,L.pop(),L.length>0?(T=L[L.length-1],$===!0&&Te.setGlobalState(y.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?A=C[C.length-1]:A=null};function vi(g,U,H,W){if(g.visible===!1)return;if(g.layers.test(U.layers)){if(g.isGroup)H=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(U);else if(g.isLight)T.pushLight(g),g.castShadow&&T.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||Y.intersectsSprite(g)){W&&Ze.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Le);const me=Z.update(g),ye=g.material;ye.visible&&A.push(g,me,ye,H,Ze.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||Y.intersectsObject(g))){const me=Z.update(g),ye=g.material;if(W&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Ze.copy(g.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ze.copy(me.boundingSphere.center)),Ze.applyMatrix4(g.matrixWorld).applyMatrix4(Le)),Array.isArray(ye)){const _e=me.groups;for(let ze=0,Se=_e.length;ze<Se;ze++){const Ue=_e[ze],Ye=ye[Ue.materialIndex];Ye&&Ye.visible&&A.push(g,me,Ye,H,Ze.z,Ue)}}else ye.visible&&A.push(g,me,ye,H,Ze.z,null)}}const ce=g.children;for(let me=0,ye=ce.length;me<ye;me++)vi(ce[me],U,H,W)}function Mi(g,U,H,W){const{opaque:I,transmissive:ce,transparent:me}=g;T.setupLightsView(H),$===!0&&Te.setGlobalState(y.clippingPlanes,H),W&&ve.viewport(G.copy(W)),I.length>0&&Gn(I,U,H),ce.length>0&&Gn(ce,U,H),me.length>0&&Gn(me,U,H),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function zi(g,U,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;T.state.transmissionRenderTarget[W.id]===void 0&&(T.state.transmissionRenderTarget[W.id]=new wn(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?zn:Bn,minFilter:Li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const ce=T.state.transmissionRenderTarget[W.id],me=W.viewport||G;ce.setSize(me.z*y.transmissionResolutionScale,me.w*y.transmissionResolutionScale);const ye=y.getRenderTarget(),_e=y.getActiveCubeFace(),ze=y.getActiveMipmapLevel();y.setRenderTarget(ce),y.getClearColor(X),ie=y.getClearAlpha(),ie<1&&y.setClearColor(16777215,.5),y.clear(),Xe&&ne.render(H);const Se=y.toneMapping;y.toneMapping=gi;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),$===!0&&Te.setGlobalState(y.clippingPlanes,W),Gn(g,H,W),Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let tt=0,ut=U.length;tt<ut;tt++){const ht=U[tt],{object:dt,geometry:Fe,material:Mt,group:it}=ht;if(Mt.side===In&&dt.layers.test(W.layers)){const Ht=Mt.side;Mt.side=sn,Mt.needsUpdate=!0,Vi(dt,H,W,Fe,Mt,it),Mt.side=Ht,Mt.needsUpdate=!0,Ye=!0}}Ye===!0&&(Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce))}y.setRenderTarget(ye,_e,ze),y.setClearColor(X,ie),Ue!==void 0&&(W.viewport=Ue),y.toneMapping=Se}function Gn(g,U,H){const W=U.isScene===!0?U.overrideMaterial:null;for(let I=0,ce=g.length;I<ce;I++){const me=g[I],{object:ye,geometry:_e,group:ze}=me;let Se=me.material;Se.allowOverride===!0&&W!==null&&(Se=W),ye.layers.test(H.layers)&&Vi(ye,U,H,_e,Se,ze)}}function Vi(g,U,H,W,I,ce){g.onBeforeRender(y,U,H,W,I,ce),g.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),I.onBeforeRender(y,U,H,W,g,ce),I.transparent===!0&&I.side===In&&I.forceSinglePass===!1?(I.side=sn,I.needsUpdate=!0,y.renderBufferDirect(H,U,W,I,g,ce),I.side=On,I.needsUpdate=!0,y.renderBufferDirect(H,U,W,I,g,ce),I.side=In):y.renderBufferDirect(H,U,W,I,g,ce),g.onAfterRender(y,U,H,W,I,ce)}function si(g,U,H){U.isScene!==!0&&(U=bt);const W=J.get(g),I=T.state.lights,ce=T.state.shadowsArray,me=I.state.version,ye=k.getParameters(g,I.state,ce,U,H),_e=k.getProgramCacheKey(ye);let ze=W.programs;W.environment=g.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(g.isMeshStandardMaterial?x:E).get(g.envMap||W.environment),W.envMapRotation=W.environment!==null&&g.envMap===null?U.environmentRotation:g.envMapRotation,ze===void 0&&(g.addEventListener("dispose",We),ze=new Map,W.programs=ze);let Se=ze.get(_e);if(Se!==void 0){if(W.currentProgram===Se&&W.lightsStateVersion===me)return ki(g,ye),Se}else ye.uniforms=k.getUniforms(g),g.onBeforeCompile(ye,y),Se=k.acquireProgram(ye,_e),ze.set(_e,Se),W.uniforms=ye.uniforms;const Ue=W.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Ue.clippingPlanes=Te.uniform),ki(g,ye),W.needsLights=Kt(g),W.lightsStateVersion=me,W.needsLights&&(Ue.ambientLightColor.value=I.state.ambient,Ue.lightProbe.value=I.state.probe,Ue.directionalLights.value=I.state.directional,Ue.directionalLightShadows.value=I.state.directionalShadow,Ue.spotLights.value=I.state.spot,Ue.spotLightShadows.value=I.state.spotShadow,Ue.rectAreaLights.value=I.state.rectArea,Ue.ltc_1.value=I.state.rectAreaLTC1,Ue.ltc_2.value=I.state.rectAreaLTC2,Ue.pointLights.value=I.state.point,Ue.pointLightShadows.value=I.state.pointShadow,Ue.hemisphereLights.value=I.state.hemi,Ue.directionalShadowMap.value=I.state.directionalShadowMap,Ue.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ue.spotShadowMap.value=I.state.spotShadowMap,Ue.spotLightMatrix.value=I.state.spotLightMatrix,Ue.spotLightMap.value=I.state.spotLightMap,Ue.pointShadowMap.value=I.state.pointShadowMap,Ue.pointShadowMatrix.value=I.state.pointShadowMatrix),W.currentProgram=Se,W.uniformsList=null,Se}function Gi(g){if(g.uniformsList===null){const U=g.currentProgram.getUniforms();g.uniformsList=Is.seqWithValue(U.seq,g.uniforms)}return g.uniformsList}function ki(g,U){const H=J.get(g);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function fn(g,U,H,W,I){U.isScene!==!0&&(U=bt),Be.resetTextureUnits();const ce=U.fog,me=W.isMeshStandardMaterial?U.environment:null,ye=v===null?y.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:xa,_e=(W.isMeshStandardMaterial?x:E).get(W.envMap||me),ze=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Se=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!H.morphAttributes.position,Ye=!!H.morphAttributes.normal,tt=!!H.morphAttributes.color;let ut=gi;W.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(ut=y.toneMapping);const ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,dt=ht!==void 0?ht.length:0,Fe=J.get(W),Mt=T.state.lights;if($===!0&&(de===!0||g!==F)){const Ft=g===F&&W.id===D;Te.setState(W,g,Ft)}let it=!1;W.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Mt.state.version||Fe.outputColorSpace!==ye||I.isBatchedMesh&&Fe.batching===!1||!I.isBatchedMesh&&Fe.batching===!0||I.isBatchedMesh&&Fe.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Fe.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Fe.instancing===!1||!I.isInstancedMesh&&Fe.instancing===!0||I.isSkinnedMesh&&Fe.skinning===!1||!I.isSkinnedMesh&&Fe.skinning===!0||I.isInstancedMesh&&Fe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Fe.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Fe.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Fe.instancingMorph===!1&&I.morphTexture!==null||Fe.envMap!==_e||W.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Te.numPlanes||Fe.numIntersection!==Te.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==Se||Fe.morphTargets!==Ue||Fe.morphNormals!==Ye||Fe.morphColors!==tt||Fe.toneMapping!==ut||Fe.morphTargetsCount!==dt)&&(it=!0):(it=!0,Fe.__version=W.version);let Ht=Fe.currentProgram;it===!0&&(Ht=si(W,U,I));let kn=!1,Vt=!1,ri=!1;const _t=Ht.getUniforms(),wt=Fe.uniforms;if(ve.useProgram(Ht.program)&&(kn=!0,Vt=!0,ri=!0),W.id!==D&&(D=W.id,Vt=!0),kn||F!==g){ve.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),_t.setValue(R,"projectionMatrix",g.projectionMatrix),_t.setValue(R,"viewMatrix",g.matrixWorldInverse);const Dt=_t.map.cameraPosition;Dt!==void 0&&Dt.setValue(R,Me.setFromMatrixPosition(g.matrixWorld)),st.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_t.setValue(R,"isOrthographic",g.isOrthographicCamera===!0),F!==g&&(F=g,Vt=!0,ri=!0)}if(I.isSkinnedMesh){_t.setOptional(R,I,"bindMatrix"),_t.setOptional(R,I,"bindMatrixInverse");const Ft=I.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),_t.setValue(R,"boneTexture",Ft.boneTexture,Be))}I.isBatchedMesh&&(_t.setOptional(R,I,"batchingTexture"),_t.setValue(R,"batchingTexture",I._matricesTexture,Be),_t.setOptional(R,I,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",I._indirectTexture,Be),_t.setOptional(R,I,"batchingColorTexture"),I._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",I._colorsTexture,Be));const Jt=H.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Ie.update(I,H,Ht),(Vt||Fe.receiveShadow!==I.receiveShadow)&&(Fe.receiveShadow=I.receiveShadow,_t.setValue(R,"receiveShadow",I.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(wt.envMap.value=_e,wt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(wt.envMapIntensity.value=U.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=lx()),Vt&&(_t.setValue(R,"toneMappingExposure",y.toneMappingExposure),Fe.needsLights&&pn(wt,ri),ce&&W.fog===!0&&Ee.refreshFogUniforms(wt,ce),Ee.refreshMaterialUniforms(wt,W,le,se,T.state.transmissionRenderTarget[g.id]),Is.upload(R,Gi(Fe),wt,Be)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Is.upload(R,Gi(Fe),wt,Be),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_t.setValue(R,"center",I.center),_t.setValue(R,"modelViewMatrix",I.modelViewMatrix),_t.setValue(R,"normalMatrix",I.normalMatrix),_t.setValue(R,"modelMatrix",I.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ft=W.uniformsGroups;for(let Dt=0,Hi=Ft.length;Dt<Hi;Dt++){const Rn=Ft[Dt];ee.update(Rn,Ht),ee.bind(Rn,Ht)}}return Ht}function pn(g,U){g.ambientLightColor.needsUpdate=U,g.lightProbe.needsUpdate=U,g.directionalLights.needsUpdate=U,g.directionalLightShadows.needsUpdate=U,g.pointLights.needsUpdate=U,g.pointLightShadows.needsUpdate=U,g.spotLights.needsUpdate=U,g.spotLightShadows.needsUpdate=U,g.rectAreaLights.needsUpdate=U,g.hemisphereLights.needsUpdate=U}function Kt(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(g,U,H){const W=J.get(g);W.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),J.get(g.texture).__webglTexture=U,J.get(g.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:H,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,U){const H=J.get(g);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const rn=R.createFramebuffer();this.setRenderTarget=function(g,U=0,H=0){v=g,B=U,M=H;let W=!0,I=null,ce=!1,me=!1;if(g){const _e=J.get(g);if(_e.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(R.FRAMEBUFFER,null),W=!1;else if(_e.__webglFramebuffer===void 0)Be.setupRenderTarget(g);else if(_e.__hasExternalTextures)Be.rebindTextures(g,J.get(g.texture).__webglTexture,J.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const Ue=g.depthTexture;if(_e.__boundDepthTexture!==Ue){if(Ue!==null&&J.has(Ue)&&(g.width!==Ue.image.width||g.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(g)}}const ze=g.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(me=!0);const Se=J.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Se[U])?I=Se[U][H]:I=Se[U],ce=!0):g.samples>0&&Be.useMultisampledRTT(g)===!1?I=J.get(g).__webglMultisampledFramebuffer:Array.isArray(Se)?I=Se[H]:I=Se,G.copy(g.viewport),K.copy(g.scissor),j=g.scissorTest}else G.copy(Je).multiplyScalar(le).floor(),K.copy(et).multiplyScalar(le).floor(),j=nt;if(H!==0&&(I=rn),ve.bindFramebuffer(R.FRAMEBUFFER,I)&&W&&ve.drawBuffers(g,I),ve.viewport(G),ve.scissor(K),ve.setScissorTest(j),ce){const _e=J.get(g.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,H)}else if(me){const _e=U;for(let ze=0;ze<g.textures.length;ze++){const Se=J.get(g.textures[ze]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+ze,Se.__webglTexture,H,_e)}}else if(g!==null&&H!==0){const _e=J.get(g.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_e.__webglTexture,H)}D=-1},this.readRenderTargetPixels=function(g,U,H,W,I,ce,me,ye=0){if(!(g&&g.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=J.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){ve.bindFramebuffer(R.FRAMEBUFFER,_e);try{const ze=g.textures[ye],Se=ze.format,Ue=ze.type;if(!st.textureFormatReadable(Se)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ue)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=g.width-W&&H>=0&&H<=g.height-I&&(g.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ye),R.readPixels(U,H,W,I,Ne.convert(Se),Ne.convert(Ue),ce))}finally{const ze=v!==null?J.get(v).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(g,U,H,W,I,ce,me,ye=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=J.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e)if(U>=0&&U<=g.width-W&&H>=0&&H<=g.height-I){ve.bindFramebuffer(R.FRAMEBUFFER,_e);const ze=g.textures[ye],Se=ze.format,Ue=ze.type;if(!st.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ye),R.bufferData(R.PIXEL_PACK_BUFFER,ce.byteLength,R.STREAM_READ),g.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ye),R.readPixels(U,H,W,I,Ne.convert(Se),Ne.convert(Ue),0);const tt=v!==null?J.get(v).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,tt);const ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await bh(R,ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ye),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ce),R.deleteBuffer(Ye),R.deleteSync(ut),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,U=null,H=0){const W=Math.pow(2,-H),I=Math.floor(g.image.width*W),ce=Math.floor(g.image.height*W),me=U!==null?U.x:0,ye=U!==null?U.y:0;Be.setTexture2D(g,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,me,ye,I,ce),ve.unbindTexture()};const mn=R.createFramebuffer(),xn=R.createFramebuffer();this.copyTextureToTexture=function(g,U,H=null,W=null,I=0,ce=null){ce===null&&(I!==0?(ka("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=I,I=0):ce=0);let me,ye,_e,ze,Se,Ue,Ye,tt,ut;const ht=g.isCompressedTexture?g.mipmaps[ce]:g.image;if(H!==null)me=H.max.x-H.min.x,ye=H.max.y-H.min.y,_e=H.isBox3?H.max.z-H.min.z:1,ze=H.min.x,Se=H.min.y,Ue=H.isBox3?H.min.z:0;else{const Jt=Math.pow(2,-I);me=Math.floor(ht.width*Jt),ye=Math.floor(ht.height*Jt),g.isDataArrayTexture?_e=ht.depth:g.isData3DTexture?_e=Math.floor(ht.depth*Jt):_e=1,ze=0,Se=0,Ue=0}W!==null?(Ye=W.x,tt=W.y,ut=W.z):(Ye=0,tt=0,ut=0);const dt=Ne.convert(U.format),Fe=Ne.convert(U.type);let Mt;U.isData3DTexture?(Be.setTexture3D(U,0),Mt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),Mt=R.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),Mt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const it=R.getParameter(R.UNPACK_ROW_LENGTH),Ht=R.getParameter(R.UNPACK_IMAGE_HEIGHT),kn=R.getParameter(R.UNPACK_SKIP_PIXELS),Vt=R.getParameter(R.UNPACK_SKIP_ROWS),ri=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ht.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ht.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ze),R.pixelStorei(R.UNPACK_SKIP_ROWS,Se),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ue);const _t=g.isDataArrayTexture||g.isData3DTexture,wt=U.isDataArrayTexture||U.isData3DTexture;if(g.isDepthTexture){const Jt=J.get(g),Ft=J.get(U),Dt=J.get(Jt.__renderTarget),Hi=J.get(Ft.__renderTarget);ve.bindFramebuffer(R.READ_FRAMEBUFFER,Dt.__webglFramebuffer),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Rn=0;Rn<_e;Rn++)_t&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,J.get(g).__webglTexture,I,Ue+Rn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,J.get(U).__webglTexture,ce,ut+Rn)),R.blitFramebuffer(ze,Se,me,ye,Ye,tt,me,ye,R.DEPTH_BUFFER_BIT,R.NEAREST);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(I!==0||g.isRenderTargetTexture||J.has(g)){const Jt=J.get(g),Ft=J.get(U);ve.bindFramebuffer(R.READ_FRAMEBUFFER,mn),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,xn);for(let Dt=0;Dt<_e;Dt++)_t?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Jt.__webglTexture,I,Ue+Dt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Jt.__webglTexture,I),wt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ft.__webglTexture,ce,ut+Dt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ft.__webglTexture,ce),I!==0?R.blitFramebuffer(ze,Se,me,ye,Ye,tt,me,ye,R.COLOR_BUFFER_BIT,R.NEAREST):wt?R.copyTexSubImage3D(Mt,ce,Ye,tt,ut+Dt,ze,Se,me,ye):R.copyTexSubImage2D(Mt,ce,Ye,tt,ze,Se,me,ye);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else wt?g.isDataTexture||g.isData3DTexture?R.texSubImage3D(Mt,ce,Ye,tt,ut,me,ye,_e,dt,Fe,ht.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Mt,ce,Ye,tt,ut,me,ye,_e,dt,ht.data):R.texSubImage3D(Mt,ce,Ye,tt,ut,me,ye,_e,dt,Fe,ht):g.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ce,Ye,tt,me,ye,dt,Fe,ht.data):g.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ce,Ye,tt,ht.width,ht.height,dt,ht.data):R.texSubImage2D(R.TEXTURE_2D,ce,Ye,tt,me,ye,dt,Fe,ht);R.pixelStorei(R.UNPACK_ROW_LENGTH,it),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ht),R.pixelStorei(R.UNPACK_SKIP_PIXELS,kn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Vt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ri),ce===0&&U.generateMipmaps&&R.generateMipmap(Mt),ve.unbindTexture()},this.initRenderTarget=function(g){J.get(g).__webglFramebuffer===void 0&&Be.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?Be.setTextureCube(g,0):g.isData3DTexture?Be.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?Be.setTexture2DArray(g,0):Be.setTexture2D(g,0),ve.unbindTexture()},this.resetState=function(){B=0,M=0,v=null,ve.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const ux=new Uint8Array(0);class hx{audioElement;fftSize;audioContext=null;analyser=null;recordingDestination=null;elementSource=null;micSource=null;micGainNode=null;micStream=null;currentSource=null;monitorSource=null;fftData=ux;fileUrl=null;micSensitivity=1;mode="none";constructor(e,t=2048){this.audioElement=e,this.fftSize=t}getAudioContextCtor(){const e=window,t=window.AudioContext??e.webkitAudioContext;if(!t)throw new Error("Web Audio API is not available in this browser.");return t}async ensureContext(){if(this.audioContext)this.micGainNode||(this.micGainNode=this.audioContext.createGain(),this.micGainNode.gain.value=this.micSensitivity);else{const e=this.getAudioContextCtor();this.audioContext=new e,this.analyser=this.audioContext.createAnalyser(),this.micGainNode=this.audioContext.createGain(),this.micGainNode.gain.value=this.micSensitivity,this.recordingDestination=this.audioContext.createMediaStreamDestination(),this.analyser.fftSize=this.fftSize,this.analyser.smoothingTimeConstant=.8,this.analyser.minDecibels=-100,this.analyser.maxDecibels=-10,this.fftData=new Uint8Array(this.analyser.frequencyBinCount)}this.audioContext.state==="suspended"&&await this.audioContext.resume()}getAnalyserOrThrow(){if(!this.analyser)throw new Error("Audio analyser is not initialized.");return this.analyser}connectSource(e,t){const n=this.getAnalyserOrThrow();this.currentSource&&this.currentSource.disconnect(),e.connect(n),this.recordingDestination&&e.connect(this.recordingDestination),t&&this.audioContext?(e.connect(this.audioContext.destination),this.monitorSource=e):this.monitorSource=null,this.currentSource=e}stopMicSource(){if(this.micSource&&(this.micSource.disconnect(),this.micSource=null),this.micGainNode&&this.micGainNode.disconnect(),this.currentSource===this.micGainNode&&(this.currentSource=null),this.monitorSource===this.micGainNode&&(this.monitorSource=null),this.micStream){for(const e of this.micStream.getTracks())e.stop();this.micStream=null}this.mode==="mic"&&(this.mode="none")}async ensureElementSource(){if(await this.ensureContext(),this.stopMicSource(),!this.audioContext)throw new Error("Audio context is unavailable.");this.elementSource||(this.elementSource=this.audioContext.createMediaElementSource(this.audioElement)),this.connectSource(this.elementSource,!0),this.mode="file"}setSmoothing(e){this.analyser&&(this.analyser.smoothingTimeConstant=e)}setMicSensitivity(e){const t=Math.max(.1,Math.min(4,Number.isFinite(e)?e:1));this.micSensitivity=t,this.micGainNode&&(this.micGainNode.gain.value=t)}hasLoadedFile(){return this.audioElement.src.length>0}isFilePlaying(){return this.mode==="file"&&!this.audioElement.paused}async loadFile(e){await this.ensureElementSource(),this.fileUrl&&URL.revokeObjectURL(this.fileUrl),this.fileUrl=URL.createObjectURL(e),this.audioElement.src=this.fileUrl,this.audioElement.currentTime=0,this.audioElement.loop=!0,await this.audioElement.play()}async loadUrl(e){await this.ensureElementSource(),this.fileUrl&&(URL.revokeObjectURL(this.fileUrl),this.fileUrl=null),this.audioElement.src=e,this.audioElement.currentTime=0,this.audioElement.loop=!0,await this.audioElement.play()}async startMic(){if(await this.ensureContext(),this.audioElement.pause(),this.audioElement.currentTime=0,!navigator.mediaDevices?.getUserMedia)throw new Error("Microphone capture is not supported in this browser.");const e=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!1});if(this.stopMicSource(),!this.audioContext)throw new Error("Audio context is unavailable.");this.monitorSource&&(this.monitorSource.disconnect(),this.monitorSource=null),this.micStream=e,this.micSource=this.audioContext.createMediaStreamSource(e),this.micGainNode||(this.micGainNode=this.audioContext.createGain(),this.micGainNode.gain.value=this.micSensitivity),this.micSource.connect(this.micGainNode),this.connectSource(this.micGainNode,!1),this.mode="mic"}async stopMic(){this.stopMicSource(),this.hasLoadedFile()&&(await this.ensureElementSource(),this.audioElement.pause(),this.audioElement.currentTime=0)}async togglePlayback(){return this.hasLoadedFile()?(await this.ensureElementSource(),this.audioElement.paused?(await this.audioElement.play(),!0):(this.audioElement.pause(),!1)):!1}readFrequencyData(){return!this.analyser||this.mode==="none"?(this.fftData.length>0&&this.fftData.fill(0),this.fftData):(this.analyser.getByteFrequencyData(this.fftData),this.fftData)}getRecordingAudioTrack(){if(!this.recordingDestination)return null;const e=this.recordingDestination.stream.getAudioTracks()[0];return e?e.clone():null}dispose(){this.stopMicSource(),this.audioElement.pause(),this.currentSource&&(this.currentSource.disconnect(),this.currentSource=null),this.monitorSource&&(this.monitorSource.disconnect(),this.monitorSource=null),this.elementSource&&(this.elementSource.disconnect(),this.elementSource=null),this.micGainNode&&(this.micGainNode.disconnect(),this.micGainNode=null),this.analyser&&(this.analyser.disconnect(),this.analyser=null),this.recordingDestination&&(this.recordingDestination.disconnect(),this.recordingDestination=null),this.fileUrl&&(URL.revokeObjectURL(this.fileUrl),this.fileUrl=null),this.audioContext&&(this.audioContext.close(),this.audioContext=null),this.mode="none"}}class dx{attack;release;bands={low:0,mid:0,high:0,level:0};constructor(e=.42,t=.12){this.attack=e,this.release=t}setEnvelope(e,t){this.attack=e,this.release=t}getRangeAverage(e,t,n){if(e.length===0)return 0;const a=Math.max(0,Math.floor(e.length*t)),s=Math.max(a+1,Math.floor(e.length*n));let r=0,o=0;for(let c=a;c<s;c+=1)r+=e[c],o+=1;return o===0?0:r/(o*255)}envelope(e,t){const n=t>e?this.attack:this.release;return e+(t-e)*n}normalize(e,t){return Math.pow(Math.max(0,Math.min(1,e)),t)}update(e){const t=this.normalize(this.getRangeAverage(e,.01,.12),1.05),n=this.normalize(this.getRangeAverage(e,.12,.45),1.15),a=this.normalize(this.getRangeAverage(e,.45,.96),1.2);this.bands.low=this.envelope(this.bands.low,t),this.bands.mid=this.envelope(this.bands.mid,n),this.bands.high=this.envelope(this.bands.high,a);const s=this.bands.low*.52+this.bands.mid*.33+this.bands.high*.15;return this.bands.level=this.envelope(this.bands.level,Math.min(1,s*1.35)),this.bands}}function pt(i,e){const t=i.querySelector(e);if(!t)throw new Error(`Missing required control element: ${e}`);return t}function fx(i,e,t=""){return`${i.toFixed(e)}${t}`}function Ln(i,e){const t=document.createElement("details");t.className="folder",t.open=e;const n=document.createElement("summary");n.textContent=i,t.appendChild(n);const a=document.createElement("div");return a.className="folder-body",t.appendChild(a),t}function px(i,e,t){i.innerHTML=`
    <div class="panel-dock" data-ui-hidden="false">
      <section class="panel">
        <div class="panel-head">
          <h1 class="title">LIQUID NOISE</h1>
          <div class="project-description" aria-label="Project description">
            <p class="project-description-line">Audio-reactive procedural displacement playground.</p>
            <p class="project-description-line">Use Default loop, load your own track, or drive with Mic.</p>
          </div>
          <div class="action-row">
            <button id="default-audio-btn" type="button">Default sound</button>
            <label class="file-button">
              <input id="audio-file-input" type="file" accept="audio/*" />
              <span>Load mp3</span>
            </label>
            <button id="mic-toggle-btn" type="button">Mic</button>
            <button id="record-toggle-btn" type="button">Record video</button>
          </div>
          <div class="meter-row">
            <button id="play-toggle-btn" type="button" disabled>Play</button>
            <div class="playback-bars">
              <div class="meter">
                <div id="energy-fill" class="meter-fill"></div>
              </div>
              <input id="seek-slider" class="seek-slider" type="range" min="0" max="1" step="0.001" value="0" disabled aria-label="Playback position" />
            </div>
          </div>
          <p id="status-line" class="status">Idle. Choose Default/Load or enable microphone.</p>
          <div id="tabs-nav-slot" class="tabs-nav-slot"></div>
        </div>
        <div id="folders-root" class="folders-root"></div>
      </section>
      <button id="ui-visibility-btn" class="ui-visibility-btn" type="button" aria-label="Hide UI">
        <span class="ui-visibility-icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="hint-row">
      <div id="fps-readout" class="fps-readout">FPS: --</div>
      <div class="hint">Orbit: left drag | Pan: right drag | Zoom: wheel</div>
    </div>
  `;const n=pt(i,".panel-dock"),a=pt(i,"#ui-visibility-btn"),s=pt(i,".title"),r=pt(i,".project-description"),o=pt(i,"#default-audio-btn"),c=pt(i,"#audio-file-input"),l=pt(i,"#mic-toggle-btn"),u=pt(i,"#record-toggle-btn"),h=pt(i,"#play-toggle-btn"),f=pt(i,"#energy-fill"),p=pt(i,"#seek-slider"),_=pt(i,"#status-line"),S=pt(i,"#tabs-nav-slot"),m=pt(i,"#folders-root"),d=pt(i,".hint-row"),A=pt(i,"#fps-readout"),T=pt(i,".panel"),C=pt(i,".panel-head"),L=document.createElement("div");L.className="panel-scrollbar",L.setAttribute("aria-hidden","true"),L.dataset.hidden="true";const y=document.createElement("div");y.className="panel-scrollbar-thumb",L.appendChild(y),T.appendChild(L);const w={...e.noiseParams},B={...e.audioMapParams},M={...e.interactionParams},v={...e.qualityParams},D={...e.cameraParams};let F=e.materialMode;const G={...e.materialParams};let K=e.ambientOcclusionParams.mode;const j={...e.ambientOcclusionParams},X={...e.shadingParams},ie={enabled:0},z=[],le={value:(b=>b==="soft"||b==="deep"||b==="medium"?b:"medium")(i.dataset.uiDepth)},Ce=b=>{le.value=b,i.dataset.uiDepth=b};let He=!1,Je=!1,et=!1,nt=!0,Y=!1,$=!1,de=!1,Le=!1;const Me="LIQUID NOISE",Ze=["Audio-reactive procedural displacement playground.","Use Default loop, load your own track, or drive with Mic."],bt=Array.from(r.querySelectorAll(".project-description-line")).map(b=>b.textContent?.trim()??"").filter(b=>b.length>0);let Xe=(s.textContent?.trim()??"")||Me,ot=(bt.length>0?bt:Ze).join(`
`);const R=()=>{i.dataset.uiHidden=Le?"true":"false",n.dataset.uiHidden=Le?"true":"false",a.setAttribute("aria-label",Le?"Show UI":"Hide UI"),Hn(!1)},Oe=()=>{o.disabled=He,l.disabled=Je,u.disabled=et||!nt,h.disabled=Y||!$,p.disabled=de||!$},qe=b=>{const V=Math.max(0,Math.min(1,Number.isFinite(b)?b:0));p.value=V.toFixed(4),p.style.setProperty("--seek-progress",`${(V*100).toFixed(2)}%`)},st=b=>{const V=b.trim();s.textContent=V.length>0?V:Me},ve=b=>{const re=b.replace(/\r\n/g,`
`).split(`
`).map(xe=>xe.trim()).filter(xe=>xe.length>0),we=re.length>0?re:Ze;for(;r.firstChild;)r.removeChild(r.firstChild);for(const xe of we){const ke=document.createElement("p");ke.className="project-description-line",ke.textContent=xe,r.appendChild(ke)}},at=(b,V,re,we)=>{const xe=document.createElement("div");xe.className="control-row";const ke=document.createElement("label");ke.className="control-label",ke.textContent=re.label;const Ve=document.createElement("output");Ve.className="control-value";const Pe=document.createElement("input");Pe.type="range",Pe.min=String(re.min),Pe.max=String(re.max),Pe.step=String(re.step),Pe.value=String(b[V]);const St=()=>{const Wt=Number.parseFloat(Pe.min),Xn=Number.parseFloat(Pe.max),Ja=Number.parseFloat(Pe.value),ya=Xn-Wt,Ea=ya>0?(Ja-Wt)/ya:0,vt=Math.max(0,Math.min(1,Number.isFinite(Ea)?Ea:0));Pe.style.setProperty("--range-progress",`${(vt*100).toFixed(2)}%`)},ft=Wt=>{Ve.textContent=fx(Wt,re.precision,re.suffix)},Pt=Wt=>{const Xn=Number(Pe.value);b[V]=Xn,ft(Xn),St(),Wt&&we(V,Xn)},Qt=()=>{Pt(!re.changeOnly)},Dn=()=>{re.changeOnly&&Pt(!0)};return ft(Number(Pe.value)),St(),Pe.addEventListener("input",Qt),Pe.addEventListener("change",Dn),z.push(()=>Pe.removeEventListener("input",Qt)),z.push(()=>Pe.removeEventListener("change",Dn)),xe.appendChild(ke),xe.appendChild(Ve),xe.appendChild(Pe),xe},J=(b,V,re,we,xe)=>{const ke=at(V,re,we,xe);b.appendChild(ke)},Be=(b,V,re,we,xe,ke)=>{const Ve=document.createElement("label");Ve.className="checkbox-row";const Pe=document.createElement("input");Pe.type="checkbox",Pe.className="checkbox-input",Pe.checked=Number(V[re])>.5;const St=document.createElement("span");St.className="checkbox-toggle",St.setAttribute("aria-hidden","true");const ft=document.createElement("span");ft.className="checkbox-label",ft.textContent=we;const Pt=()=>{const Qt=Pe.checked?1:0;V[re]=Qt,xe(re,Qt)};Pe.addEventListener("change",Pt),z.push(()=>Pe.removeEventListener("change",Pt)),Ve.appendChild(Pe),Ve.appendChild(St),Ve.appendChild(ft),b.appendChild(Ve)},E=b=>Math.round(Math.max(0,Math.min(1,b))*255).toString(16).padStart(2,"0"),x=(b,V,re)=>`#${E(b)}${E(V)}${E(re)}`,N=(b,V)=>{const re=b.trim().toLowerCase();if(/^#[0-9a-f]{6}$/.test(re))return re;if(/^#[0-9a-f]{3}$/.test(re))return`#${re[1]}${re[1]}${re[2]}${re[2]}${re[3]}${re[3]}`;const we=re.match(/^rgba?\(([^)]+)\)$/);if(we){const xe=we[1].split(",").slice(0,3).map(ke=>Number.parseFloat(ke.trim()));if(xe.length===3&&xe.every(ke=>Number.isFinite(ke))){const ke=Math.max(0,Math.min(255,Math.round(xe[0]))),Ve=Math.max(0,Math.min(255,Math.round(xe[1]))),Pe=Math.max(0,Math.min(255,Math.round(xe[2])));return`#${ke.toString(16).padStart(2,"0")}${Ve.toString(16).padStart(2,"0")}${Pe.toString(16).padStart(2,"0")}`}}return V},q=b=>Math.round(Math.max(0,Math.min(1,b))*255),Z=b=>{const V=b.startsWith("#")?b.slice(1):b;if(V.length!==6)return{r:1,g:1,b:1};const re=Number.parseInt(V.slice(0,2),16),we=Number.parseInt(V.slice(2,4),16),xe=Number.parseInt(V.slice(4,6),16);return{r:Number.isFinite(re)?re/255:1,g:Number.isFinite(we)?we/255:1,b:Number.isFinite(xe)?xe/255:1}},k=(b,V,re,we)=>{const xe=document.createElement("div");xe.className="control-row";const ke=document.createElement("label");ke.className="control-label",ke.textContent=V;const Ve=document.createElement("input");Ve.type="color",Ve.className="control-color",Ve.value=x(re.r,re.g,re.b);const Pe=()=>{we(Z(Ve.value))};return Ve.addEventListener("input",Pe),z.push(()=>Ve.removeEventListener("input",Pe)),xe.appendChild(ke),xe.appendChild(Ve),b.appendChild(xe),Ve},Ee=(b,V,re,we,xe)=>{const ke=document.createElement("div");ke.className="control-row";const Ve=document.createElement("label");if(Ve.className="control-label",Ve.textContent=V,xe?.multiline){const ft=document.createElement("textarea");ft.className="control-textarea",ft.rows=xe.rows??3,ft.value=re,xe.placeholder&&(ft.placeholder=xe.placeholder);const Pt=()=>{we(ft.value)};ft.addEventListener("input",Pt),z.push(()=>ft.removeEventListener("input",Pt)),ke.appendChild(Ve),ke.appendChild(ft),b.appendChild(ke);return}const Pe=document.createElement("input");Pe.type="text",Pe.className="control-text",Pe.value=re,xe?.placeholder&&(Pe.placeholder=xe.placeholder);const St=()=>{we(Pe.value)};Pe.addEventListener("input",St),z.push(()=>Pe.removeEventListener("input",St)),ke.appendChild(Ve),ke.appendChild(Pe),b.appendChild(ke)},ue=(b,V,re)=>{const we=document.createElement("div");we.className="control-row";const xe=document.createElement("label");xe.className="control-label",xe.textContent=V;const ke=document.createElement("div");ke.className="texture-input-row";const Ve=document.createElement("label");Ve.className="file-button texture-file-button";const Pe=document.createElement("span");Pe.textContent="Choose File";const St=document.createElement("input");St.type="file",St.accept="image/*";const ft=document.createElement("span");ft.className="texture-file-name",ft.textContent="Built-in default";const Pt=document.createElement("button");Pt.type="button",Pt.className="texture-clear-button",Pt.textContent="Clear";const Qt=()=>{const Wt=St.files?.[0]??null;Wt&&(ft.textContent=Wt.name,t.onMaterialMapSelected(re,Wt),St.value="")},Dn=()=>{t.onMaterialMapSelected(re,null),ft.textContent="Built-in default",St.value=""};St.addEventListener("change",Qt),Pt.addEventListener("click",Dn),z.push(()=>St.removeEventListener("change",Qt)),z.push(()=>Pt.removeEventListener("click",Dn)),Ve.appendChild(St),Ve.appendChild(Pe),ke.appendChild(Ve),ke.appendChild(ft),ke.appendChild(Pt),we.appendChild(xe),we.appendChild(ke),b.appendChild(we)},Re=(b,V,re,we)=>{const xe=document.createElement("div");xe.className="control-row";const ke=document.createElement("label");ke.className="control-label",ke.textContent=b;const Ve=document.createElement("div");Ve.className="control-select",Ve.dataset.open="false";const Pe=document.createElement("button");Pe.type="button",Pe.className="control-select-trigger",Pe.setAttribute("aria-haspopup","listbox"),Pe.setAttribute("aria-expanded","false");const St=document.createElement("span");St.className="control-select-value",Pe.appendChild(St);const ft=document.createElement("div");ft.className="control-select-menu",ft.setAttribute("role","listbox");const Pt=vt=>V.find(At=>At.value===vt)??V[0];let Qt=Pt(re).value;const Dn=[],Wt=vt=>{Ve.dataset.open=vt?"true":"false",Pe.setAttribute("aria-expanded",vt?"true":"false")},Xn=(vt,At)=>{const yi=Pt(vt);Qt=yi.value,St.textContent=yi.label;for(const Ta of Dn){const Qa=Ta.value===Qt;Ta.element.dataset.selected=Qa?"true":"false",Ta.element.setAttribute("aria-selected",Qa?"true":"false")}At&&we(Qt)};for(const vt of V){const At=document.createElement("button");At.type="button",At.className="control-select-option",At.textContent=vt.label,At.dataset.value=vt.value,At.dataset.selected="false",At.setAttribute("role","option"),At.setAttribute("aria-selected","false");const yi=()=>{Xn(vt.value,!0),Wt(!1),Pe.focus()};At.addEventListener("click",yi),z.push(()=>At.removeEventListener("click",yi)),Dn.push({value:vt.value,element:At}),ft.appendChild(At)}const Ja=()=>{const vt=Ve.dataset.open==="true";Wt(!vt)},ya=vt=>{if(vt.key==="Enter"||vt.key===" "){vt.preventDefault();const qs=Ve.dataset.open==="true";Wt(!qs);return}if(vt.key==="Escape"){Ve.dataset.open==="true"&&(vt.preventDefault(),Wt(!1));return}if(vt.key!=="ArrowDown"&&vt.key!=="ArrowUp")return;vt.preventDefault();const At=V.findIndex(qs=>qs.value===Qt),yi=At>=0?At:0,Ta=vt.key==="ArrowDown"?1:-1,Qa=(yi+Ta+V.length)%V.length;Xn(V[Qa].value,!0)},Ea=vt=>{const At=vt.target;At instanceof Node&&(Ve.contains(At)||Wt(!1))};return Pe.addEventListener("click",Ja),Pe.addEventListener("keydown",ya),document.addEventListener("pointerdown",Ea),z.push(()=>Pe.removeEventListener("click",Ja)),z.push(()=>Pe.removeEventListener("keydown",ya)),z.push(()=>document.removeEventListener("pointerdown",Ea)),Xn(re,!1),Ve.appendChild(Pe),Ve.appendChild(ft),xe.appendChild(ke),xe.appendChild(Ve),xe},Te=(b,V,re,we,xe)=>{b.appendChild(Re(V,re,we,xe))},te=document.createElement("div");te.className="tabs-nav";const ne=document.createElement("div");ne.className="tabs-panels";const Ie={},be={},fe=new Set(["camera","ui"]),Ne=b=>{const V=Object.keys(Ie),re=V.filter(xe=>!fe.has(xe)),we=re.includes(b)?b:re[0]??b;te.style.gridTemplateColumns=`repeat(${Math.max(1,re.length)}, minmax(0, 1fr))`;for(const xe of V){const ke=!fe.has(xe),Ve=ke&&xe===we;Ie[xe].hidden=!ke,Ie[xe].dataset.active=Ve?"true":"false",be[xe].hidden=!Ve}Hn()},P=(b,V)=>{const re=document.createElement("button");re.type="button",re.className="tab-button",re.textContent=V;const we=document.createElement("div");we.className="tab-panel";const xe=()=>Ne(b);re.addEventListener("click",xe),z.push(()=>re.removeEventListener("click",xe)),Ie[b]=re,be[b]=we,te.appendChild(re),ne.appendChild(we)};P("noise","Noise"),P("audio","Audio"),P("shader","Shader"),P("interation","Interation"),P("camera","Camera"),P("ui","UI");const ee=document.documentElement.style,ae=getComputedStyle(document.documentElement),he=N(ae.getPropertyValue("--text"),"#c5cfdf"),oe=N(ae.getPropertyValue("--folder-title-color"),"#c3cedf"),Q=N(ae.getPropertyValue("--ui-main-color"),"#253041"),Ae=N(ae.getPropertyValue("--panel-head-color"),"#1f2836"),We=N(ae.getPropertyValue("--accent"),"#96c6ff"),gt=N(ae.getPropertyValue("--slider-fill"),We),ct=N(ae.getPropertyValue("--ui-scrollbar-color"),"#7e8999"),nn=Number.parseFloat(ae.getPropertyValue("--ui-scale")),$t=Number.parseFloat(ae.getPropertyValue("--ui-width-scale")),Ma=Number.parseFloat(ae.getPropertyValue("--ui-bevel-strength")),Sa=Number.parseFloat(ae.getPropertyValue("--menu-section-gap")),ba=Number.parseFloat(ae.getPropertyValue("--panel-content-pad-top")),Pn=Number.parseFloat(ae.getPropertyValue("--panel-content-pad-bottom")),vi=Number.parseFloat(ae.getPropertyValue("--head-folder-lightness")),Mi={value:Number.isFinite(nn)&&nn>0?nn:1},zi={value:Number.isFinite($t)&&$t>0?$t:1},Gn={value:Number.isFinite(Ma)&&Ma>0?Ma:1},Vi={value:Number.isFinite(Sa)?Sa:1},si={value:Number.isFinite(ba)?ba:1},Gi={value:Number.isFinite(Pn)?Pn:1},ki={value:Number.isFinite(vi)&&vi>0?vi:1},fn=Z(he),pn=Z(oe),Kt=Z(Q),rn=Z(Ae),mn=Z(We),xn=Z(gt),g=Z(ct),U={r:11/255,g:17/255,b:26/255},H={matcap:{text:"#d5deeb",folderTitle:"#d2dbe9",main:"#3a3b42",head:"#26303d",accent:"#a8d2ff",sliderFill:"#a8d2ff",scrollbar:"#97a3b4"},pbr:{text:"#dde3ea",folderTitle:"#d8dee6",main:"#454545",head:"#3f454d",accent:"#f3f6fa",sliderFill:"#9ec7f4",scrollbar:"#b8bec6"}};let W=null,I=null,ce=null,me=null,ye=null,_e=null,ze=null;const Se=(b,V,re)=>Math.max(V,Math.min(re,b)),Ue=()=>{const b=Se(Mi.value,.75,1.6),V=Se(Gn.value,.6,1.8),re=Se(6.8*b,6,11),we=Se((4.5+(V-1)*5.2)*b,4,14),xe=Se((11+(V-1)*8)*b,10,26),ke=Se((34+(V-1)*12)*b,26,54),Ve=getComputedStyle(T),Pe=Number.parseFloat(Ve.paddingRight),St=Se(((Number.isFinite(Pe)?Pe:15)-re)*.5,0,40);ee.setProperty("--ui-scrollbar-size",`${re.toFixed(1)}px`),ee.setProperty("--ui-scrollbar-right-offset",`${St.toFixed(1)}px`),ee.setProperty("--ui-scrollbar-top-offset",`${we.toFixed(1)}px`),ee.setProperty("--ui-scrollbar-bottom-offset",`${xe.toFixed(1)}px`),ee.setProperty("--ui-scrollbar-thumb-min",`${ke.toFixed(1)}px`)};let Ye=0,tt=0,ut=0,ht=null,dt=0,Fe=0,Mt=-1,it=-1,Ht=-1,kn=-1;const Vt=(b,V)=>{const re=Number.parseFloat(b);return Number.isFinite(re)?re:V},ri=(b,V)=>{const re=b.trim().split(/\s+/)[0]??"",we=Number.parseFloat(re);return Number.isFinite(we)?we:V},_t=()=>{const b=ne.scrollHeight-ne.clientHeight;if(b<=0)return null;const V=getComputedStyle(document.documentElement),re=Math.max(ne.clientHeight,0),we=L.clientHeight>0?L.clientHeight:re;if(we<=0)return null;const xe=Vt(V.getPropertyValue("--ui-scrollbar-thumb-min"),26),ke=ne.clientHeight/ne.scrollHeight,Ve=Se(we*ke,Math.min(xe,we),we),Pe=Math.max(we-Ve,0);return{scrollRange:b,trackHeight:we,thumbSize:Ve,maxThumbOffset:Pe}},wt=()=>{const b=_t(),V=ne.scrollTop;if(L.style.transform="translateY(0)",!b){L.dataset.hidden="true",y.style.height="",y.style.transform="translateY(0)";return}L.dataset.hidden="false";const re=Se(V/b.scrollRange,0,1),we=b.thumbSize,ke=b.maxThumbOffset*re;y.style.height=`${we.toFixed(1)}px`,y.style.transform=`translateY(${ke.toFixed(1)}px)`},Jt=()=>{if(Le||!i.isConnected||!T.isConnected||!d.isConnected)return;const b=i.getBoundingClientRect();if(b.width<=0)return;const V=T.getBoundingClientRect(),re=Math.max(0,Math.min(b.width,V.right-b.left)),we=re+(b.width-re)*.5;i.style.setProperty("--hint-center-x",`${we.toFixed(1)}px`)},Ft=()=>{ut!==0&&window.cancelAnimationFrame(ut),ut=window.requestAnimationFrame(()=>{ut=0,Jt()})},Dt=b=>{if(ht===null||b!==void 0&&b!==ht)return;const V=ht;ht=null,y.dataset.dragging="false",y.hasPointerCapture(V)&&y.releasePointerCapture(V)},Hi=b=>{b.button!==0||!_t()||(b.preventDefault(),ht=b.pointerId,dt=b.clientY,Fe=ne.scrollTop,y.dataset.dragging="true",y.setPointerCapture(b.pointerId))},Rn=b=>{if(ht===null||b.pointerId!==ht)return;const V=_t();if(!V||V.maxThumbOffset<=0||V.scrollRange<=0)return;b.preventDefault();const we=(b.clientY-dt)/V.maxThumbOffset*V.scrollRange;ne.scrollTop=Se(Fe+we,0,V.scrollRange),wt()},qo=b=>{Dt(b.pointerId)},Yo=b=>{Dt(b.pointerId)},jo=b=>{Dt(b.pointerId)};y.dataset.dragging="false",y.addEventListener("pointerdown",Hi),y.addEventListener("pointermove",Rn),y.addEventListener("pointerup",qo),y.addEventListener("pointercancel",Yo),y.addEventListener("lostpointercapture",jo),z.push(()=>y.removeEventListener("pointerdown",Hi)),z.push(()=>y.removeEventListener("pointermove",Rn)),z.push(()=>y.removeEventListener("pointerup",qo)),z.push(()=>y.removeEventListener("pointercancel",Yo)),z.push(()=>y.removeEventListener("lostpointercapture",jo)),z.push(()=>Dt());const Eu=()=>{const b=()=>{const V=ne.scrollTop,re=ne.clientHeight,we=ne.scrollHeight,xe=L.clientHeight;(V!==Mt||re!==it||we!==Ht||xe!==kn)&&(Mt=V,it=re,Ht=we,kn=xe,wt()),tt=window.requestAnimationFrame(b)};tt!==0&&window.cancelAnimationFrame(tt),tt=window.requestAnimationFrame(b)},Tu=()=>{if(!ne.isConnected)return;const b=T.getBoundingClientRect(),V=C.getBoundingClientRect(),re=ne.getBoundingClientRect(),we=getComputedStyle(T),xe=getComputedStyle(ne);if(b.height<=0||re.height<=0||V.height<=0)return;const ke=Vt(xe.paddingTop,0),Ve=Vt(xe.paddingBottom,0),Pe=V.bottom-b.top+ke,St=b.bottom-re.bottom+Ve,ft=ri(we.borderTopRightRadius,0),Pt=ri(we.borderBottomRightRadius,0),Qt=Se(Math.max(Pe,ft),0,b.height*.46),Dn=Se(Math.max(St,Pt),0,b.height*.46);ee.setProperty("--ui-scrollbar-top-offset",`${Qt.toFixed(1)}px`),ee.setProperty("--ui-scrollbar-bottom-offset",`${Dn.toFixed(1)}px`),wt()},Hn=(b=!0)=>{Ye!==0&&window.cancelAnimationFrame(Ye),Ye=window.requestAnimationFrame(()=>{Ye=0,Tu(),b&&Jt()})},Zo=b=>{const V=x(b.r,b.g,b.b),re=q(b.r),we=q(b.g),xe=q(b.b);ee.setProperty("--text",V),ee.setProperty("--muted",`rgba(${re}, ${we}, ${xe}, 0.72)`)},$o=b=>{const V=x(b.r,b.g,b.b);ee.setProperty("--folder-title-color",V)},Au=b=>({r:b.r*.74+U.r*.26,g:b.g*.74+U.g*.26,b:b.b*.74+U.b*.26}),Ko=b=>{Kt.r=b.r,Kt.g=b.g,Kt.b=b.b,ee.setProperty("--ui-main-color",x(b.r,b.g,b.b)),Jo(Au(b))},Jo=b=>{rn.r=b.r,rn.g=b.g,rn.b=b.b,ee.setProperty("--panel-head-color",x(b.r,b.g,b.b))},Qo=b=>{const V=Se(b,.7,1.35);ee.setProperty("--head-folder-lightness",V.toFixed(2))},el=b=>{const V=x(b.r,b.g,b.b),re=q(b.r),we=q(b.g),xe=q(b.b);ee.setProperty("--accent",V),ee.setProperty("--line",`rgba(${re}, ${we}, ${xe}, 0.18)`),ee.setProperty("--line-strong",`rgba(${re}, ${we}, ${xe}, 0.32)`)},tl=b=>{const V=Math.max(.75,Math.min(1.6,b));ee.setProperty("--ui-scale",V.toFixed(2)),Ue(),Hn()},nl=b=>{const V=Se(b,.6,1.8);ee.setProperty("--ui-width-scale",V.toFixed(2)),Ue(),Hn()},il=b=>{const V=Se(b,.6,1.8);ee.setProperty("--ui-bevel-strength",V.toFixed(2)),Ue(),Hn()},al=b=>{const V=x(b.r,b.g,b.b);ee.setProperty("--slider-fill",V)},sl=b=>{const V=x(b.r,b.g,b.b);ee.setProperty("--ui-scrollbar-color",V)},rl=b=>{const V=Se(b,.2,1.8);ee.setProperty("--menu-section-gap",`${V.toFixed(2)}rem`),wt()},ol=b=>{const V=Se(b,0,2);ee.setProperty("--panel-content-pad-top",`${V.toFixed(2)}rem`),Hn()},ll=b=>{const V=Se(b,0,2);ee.setProperty("--panel-content-pad-bottom",`${V.toFixed(2)}rem`),Hn()},Wi=(b,V)=>{const re=Z(V);b.r=re.r,b.g=re.g,b.b=re.b},Cu=()=>{W&&(W.value=x(fn.r,fn.g,fn.b)),I&&(I.value=x(pn.r,pn.g,pn.b)),ce&&(ce.value=x(Kt.r,Kt.g,Kt.b)),me&&(me.value=x(rn.r,rn.g,rn.b)),ye&&(ye.value=x(mn.r,mn.g,mn.b)),_e&&(_e.value=x(xn.r,xn.g,xn.b)),ze&&(ze.value=x(g.r,g.g,g.b))},cl=b=>{const V=H[b];Wi(fn,V.text),Zo(fn),Wi(pn,V.folderTitle),$o(pn),Wi(Kt,V.main),Ko(Kt),Wi(mn,V.accent),el(mn),Wi(xn,V.sliderFill),al(xn),Wi(g,V.scrollbar),sl(g),Cu()};il(Gn.value),nl(zi.value),tl(Mi.value),rl(Vi.value),ol(si.value),ll(Gi.value),Qo(ki.value),st(Xe),ve(ot);const ul=Ln("MAIN NOISE",!0),oi=pt(ul,".folder-body");Te(oi,"Noise Core",[{label:"Type 1",value:"simplex"},{label:"Type 2",value:"openSimplex"},{label:"Type 3",value:"openSimplexFixed"}],(b=>{const V=Math.round(b);return V===1?"openSimplex":V>=2?"openSimplexFixed":"simplex"})(w.noiseCore),b=>{const V=b==="openSimplex"?1:b==="openSimplexFixed"?2:0;w.noiseCore=V,t.onNoiseParamChange("noiseCore",V)}),J(oi,w,"baseFreq",{label:"Main Noise Size",min:.05,max:1,step:.001,precision:3},t.onNoiseParamChange);const ja=document.createElement("div");ja.className="control-row-pair";const wu=at(w,"outputMin",{label:"Output Min",min:-2,max:2,step:.01,precision:2},t.onNoiseParamChange),Pu=at(w,"outputMax",{label:"Output Max",min:-2,max:2,step:.01,precision:2},t.onNoiseParamChange);ja.appendChild(wu),ja.appendChild(Pu),oi.appendChild(ja),J(oi,w,"finalAmp",{label:"Final Amplitude",min:0,max:8,step:.01,precision:2},t.onNoiseParamChange);const Za=document.createElement("div");Za.className="control-row-pair";const Ru=at(w,"latticeWarp",{label:"Lattice Warp",min:0,max:1,step:.01,precision:2},t.onNoiseParamChange),Du=at(w,"latticeWarpFreq",{label:"Warp Frequency",min:.05,max:1,step:.01,precision:2},t.onNoiseParamChange);Za.appendChild(Ru),Za.appendChild(Du),oi.appendChild(Za);const Lu=Re("Symmetry",[{label:"Off",value:"0"},{label:"Single",value:"1"},{label:"Cross",value:"2"}],(b=>{const V=Math.round(b);return V===1?"1":V>=2?"2":"0"})(w.symmetryMode),b=>{const V=Number(b);w.symmetryMode=V,t.onNoiseParamChange("symmetryMode",V)}),$a=document.createElement("div");$a.className="control-row-pair";const Uu=at(w,"symmetryWidth",{label:"Symmetry Width",min:.001,max:1,step:.001,precision:3},t.onNoiseParamChange);$a.appendChild(Lu),$a.appendChild(Uu),oi.appendChild($a),J(oi,w,"driftSpeed",{label:"Drift Speed",min:0,max:.65,step:.001,precision:3},t.onNoiseParamChange),J(oi,v,"subdivisions",{label:"Subdivisions",min:512,max:1600,step:1,precision:0,changeOnly:!0},t.onQualityParamChange);const hl=Ln("DISTORTION NOISE",!0),Ka=pt(hl,".folder-body");J(Ka,w,"turboFreq",{label:"Distortion Noise Size",min:.05,max:1,step:.01,precision:2},t.onNoiseParamChange),J(Ka,w,"roughness",{label:"Roughness",min:0,max:1,step:.01,precision:2},t.onNoiseParamChange),J(Ka,w,"attenuation",{label:"Attenuation",min:.05,max:.7,step:.01,precision:2},t.onNoiseParamChange),Be(Ka,w,"complement","Complement",t.onNoiseParamChange);const dl=Ln("AUDIO MAPPING",!0),vn=pt(dl,".folder-body");J(vn,B,"lowGain",{label:"Low Gain",min:0,max:3,step:.01,precision:2},t.onAudioMapParamChange),J(vn,B,"midGain",{label:"Mid Gain",min:0,max:3,step:.01,precision:2},t.onAudioMapParamChange),J(vn,B,"highGain",{label:"High Gain",min:0,max:3,step:.01,precision:2},t.onAudioMapParamChange),J(vn,B,"globalGain",{label:"Global Gain",min:0,max:3,step:.01,precision:2},t.onAudioMapParamChange),J(vn,B,"micSensitivity",{label:"Mic Sensitivity",min:.1,max:4,step:.01,precision:2},t.onAudioMapParamChange),J(vn,w,"baseOffsetZ",{label:"Z Offset",min:-8,max:8,step:.01,precision:2},t.onNoiseParamChange),J(vn,B,"driftAudioAmount",{label:"Drift Audio",min:0,max:3,step:.01,precision:2},t.onAudioMapParamChange),J(vn,B,"offsetZAudioAmount",{label:"Z Offset Audio",min:0,max:3,step:.01,precision:2},t.onAudioMapParamChange),J(vn,B,"finalAmpAudioAmount",{label:"Final Amp Audio",min:0,max:1,step:.01,precision:2},t.onAudioMapParamChange),J(vn,B,"attack",{label:"Attack",min:.02,max:.98,step:.01,precision:2},t.onAudioMapParamChange),J(vn,B,"release",{label:"Release",min:.02,max:.98,step:.01,precision:2},t.onAudioMapParamChange);const fl=Ln("INTERACTION",!0),Xi=pt(fl,".folder-body");J(Xi,M,"mouseRadius",{label:"Mouse Radius",min:.5,max:.6,step:.005,precision:3},t.onInteractionParamChange),J(Xi,M,"mouseStrength",{label:"Mouse Strength",min:.2,max:2.2,step:.01,precision:2},t.onInteractionParamChange),Be(Xi,M,"mouseNoiseOffset","Mouse Noise Offset",t.onInteractionParamChange),J(Xi,M,"edgeFade",{label:"Edge Fade",min:.1,max:.5,step:.001,precision:3},t.onInteractionParamChange),J(Xi,M,"edgeRadius",{label:"Edge Radius",min:.1,max:.5,step:.001,precision:3},t.onInteractionParamChange),J(Xi,M,"edgePower",{label:"Edge Power",min:.9,max:4,step:.01,precision:2},t.onInteractionParamChange);const pl=Ln("CAMERA",!0),Wn=pt(pl,".folder-body");J(Wn,D,"fov",{label:"FOV",min:20,max:100,step:1,precision:0,suffix:"deg"},t.onCameraParamChange),J(Wn,D,"minDistance",{label:"Zoom Min",min:1,max:80,step:.1,precision:1},t.onCameraParamChange),J(Wn,D,"maxDistance",{label:"Zoom Max",min:1,max:120,step:.1,precision:1},t.onCameraParamChange),J(Wn,D,"minPolarDeg",{label:"Min Polar",min:0,max:89,step:1,precision:0,suffix:"deg"},t.onCameraParamChange),J(Wn,D,"maxPolarDeg",{label:"Max Polar",min:0,max:89,step:1,precision:0,suffix:"deg"},t.onCameraParamChange),Be(Wn,D,"centerLock","Center Lock",t.onCameraParamChange),J(Wn,D,"panRange",{label:"Pan Range",min:0,max:10,step:.1,precision:1},t.onCameraParamChange),J(Wn,D,"orbitTail",{label:"Orbit Tail",min:0,max:3,step:.01,precision:2,suffix:"s"},t.onCameraParamChange),J(Wn,D,"panTail",{label:"Pan Tail",min:0,max:3,step:.01,precision:2,suffix:"s"},t.onCameraParamChange);const ml=Ln("UI CONFIG",!0),Ot=pt(ml,".folder-body");Te(Ot,"UI Bevel",[{label:"Soft",value:"soft"},{label:"Medium",value:"medium"},{label:"Deep",value:"deep"}],le.value,b=>{Ce(b)}),Be(Ot,ie,"enabled","Solo Noise Plane",(b,V)=>{ie.enabled=V,t.onSoloNoisePlaneToggle(V>=.5)}),J(Ot,Gn,"value",{label:"Bevel Shape",min:.6,max:1.8,step:.01,precision:2},(b,V)=>{Gn.value=V,il(V)}),Ee(Ot,"Main Title",Xe,b=>{Xe=b,st(b)},{placeholder:Me}),Ee(Ot,"Description",ot,b=>{ot=b,ve(b)},{multiline:!0,rows:3,placeholder:Ze.join(`
`)}),W=k(Ot,"UI Text Color",fn,b=>{fn.r=b.r,fn.g=b.g,fn.b=b.b,Zo(fn)}),I=k(Ot,"Folder Name Color",pn,b=>{pn.r=b.r,pn.g=b.g,pn.b=b.b,$o(pn)}),ce=k(Ot,"Main UI Color",Kt,b=>{Kt.r=b.r,Kt.g=b.g,Kt.b=b.b,Ko(Kt)}),me=k(Ot,"Head Color",rn,b=>{rn.r=b.r,rn.g=b.g,rn.b=b.b,Jo(rn)}),J(Ot,ki,"value",{label:"Head/Folder Lightness",min:.7,max:1.35,step:.01,precision:2},(b,V)=>{ki.value=V,Qo(V)}),ye=k(Ot,"Accent Color",mn,b=>{mn.r=b.r,mn.g=b.g,mn.b=b.b,el(mn)}),_e=k(Ot,"Slider Fill",xn,b=>{xn.r=b.r,xn.g=b.g,xn.b=b.b,al(xn)}),ze=k(Ot,"Scrollbar Color",g,b=>{g.r=b.r,g.g=b.g,g.b=b.b,sl(g)}),J(Ot,Mi,"value",{label:"UI Size",min:.75,max:1.6,step:.01,precision:2},(b,V)=>{Mi.value=V,tl(V)}),J(Ot,zi,"value",{label:"UI Width",min:.6,max:1.8,step:.01,precision:2},(b,V)=>{zi.value=V,nl(V)}),J(Ot,Vi,"value",{label:"Folder Gap",min:.2,max:1.8,step:.01,precision:2},(b,V)=>{Vi.value=V,rl(V)}),J(Ot,si,"value",{label:"Menu Padding Top",min:0,max:2,step:.01,precision:2},(b,V)=>{si.value=V,ol(V)}),J(Ot,Gi,"value",{label:"Menu Padding Bottom",min:0,max:2,step:.01,precision:2},(b,V)=>{Gi.value=V,ll(V)});const xl=Ln("MATERIAL",!0),Xs=pt(xl,".folder-body"),Si=document.createElement("div");Si.className="mode-group";const bi=document.createElement("div");bi.className="mode-group";const gl=()=>{Si.hidden=F!=="pbr",bi.hidden=F!=="matcap"};Te(Xs,"Mode",[{label:"PBR",value:"pbr"},{label:"Matcap",value:"matcap"}],F,b=>{F=b,t.onMaterialModeChange(b),cl(b),gl()}),k(Si,"PBR Color",{r:X.baseColorR,g:X.baseColorG,b:X.baseColorB},b=>{X.baseColorR=b.r,X.baseColorG=b.g,X.baseColorB=b.b,t.onShadingParamChange("baseColorR",b.r),t.onShadingParamChange("baseColorG",b.g),t.onShadingParamChange("baseColorB",b.b)}),J(Si,G,"diffuse",{label:"Diffuse",min:0,max:2,step:.01,precision:2},t.onMaterialParamChange),J(Si,G,"roughness",{label:"Roughness",min:0,max:1,step:.01,precision:2},t.onMaterialParamChange),J(Si,G,"metalness",{label:"Metalness",min:0,max:1,step:.01,precision:2},t.onMaterialParamChange),J(bi,G,"matcapBrightness",{label:"Matcap Brightness",min:0,max:3,step:.01,precision:2},t.onMaterialParamChange),J(bi,G,"matcapContrast",{label:"Matcap Contrast",min:0,max:3,step:.01,precision:2},t.onMaterialParamChange),J(bi,G,"matcapSaturation",{label:"Matcap Saturation",min:0,max:2,step:.01,precision:2},t.onMaterialParamChange),ue(bi,"Matcap Map","matcap"),Xs.appendChild(Si),Xs.appendChild(bi),gl(),cl(F);const _l=Ln("AO",!0),vl=pt(_l,".folder-body"),Ml=Ln("LIGHTING",!0),li=pt(Ml,".folder-body"),Sl=Ln("PERFORMANCE",!0),Iu=pt(Sl,".folder-body");Be(vl,{enabled:K==="gtao"?1:0},"enabled","AO",(b,V)=>{const re=V>.5?"gtao":"none";K=re,t.onAmbientOcclusionModeChange(re)});let bl="60";Te(Iu,"FPS Limit",[{label:"30 FPS",value:"30"},{label:"60 FPS",value:"60"},{label:"Unlimited",value:"unlimited"}],bl,b=>{bl=b,t.onFpsLimitModeChange(b)}),J(vl,j,"intensity",{label:"AO Intensity",min:0,max:3,step:.01,precision:2},t.onAmbientOcclusionParamChange),J(li,X,"keyAzimuth",{label:"Key Azimuth",min:-180,max:180,step:1,precision:0,suffix:"deg"},t.onShadingParamChange),J(li,X,"keyElevation",{label:"Key Elevation",min:-89,max:89,step:1,precision:0,suffix:"deg"},t.onShadingParamChange),J(li,X,"keyStrength",{label:"Key Strength",min:0,max:1.5,step:.01,precision:2},t.onShadingParamChange),J(li,X,"fillAzimuth",{label:"Fill Azimuth",min:-180,max:180,step:1,precision:0,suffix:"deg"},t.onShadingParamChange),J(li,X,"fillElevation",{label:"Fill Elevation",min:-89,max:89,step:1,precision:0,suffix:"deg"},t.onShadingParamChange),J(li,X,"fillStrength",{label:"Fill Strength",min:0,max:1.5,step:.01,precision:2},t.onShadingParamChange),J(li,X,"hemiStrength",{label:"Hemi Strength",min:0,max:1,step:.01,precision:2},t.onShadingParamChange),J(li,X,"diffuseBase",{label:"Diffuse Base",min:0,max:1.2,step:.01,precision:2},t.onShadingParamChange),be.noise.appendChild(ul),be.noise.appendChild(hl),be.audio.appendChild(dl),be.shader.appendChild(xl),be.shader.appendChild(_l),be.shader.appendChild(Ml),be.shader.appendChild(Sl),be.interation.appendChild(fl),be.camera.appendChild(pl),be.ui.appendChild(ml),S.appendChild(te),m.appendChild(ne),Ne("noise"),Hn(),Eu();const yl=async()=>{const b=c.files?.[0];b&&(await t.onFileSelected(b),c.value="")},Nu=async()=>{if(!Je){Je=!0,Oe();try{await t.onMicToggle()}finally{Je=!1,Oe()}}},Fu=async()=>{if(!He){He=!0,Oe();try{await t.onDefaultSelected()}finally{He=!1,Oe()}}},Ou=async()=>{if(!(Y||!$)){Y=!0,Oe();try{await t.onPlayToggle()}finally{Y=!1,Oe()}}},Bu=async()=>{if(!(et||!nt)){et=!0,Oe();try{await t.onRecordToggle()}finally{et=!1,Oe()}}},El=()=>{Fu()},Tl=()=>{Nu()},Al=()=>{Ou()},Cl=()=>{Bu()},wl=()=>{const b=Number(p.value);de=!0,qe(b),Promise.resolve(t.onSeekNormalized(Math.max(0,Math.min(1,b)))).finally(()=>{de=!1,Oe()})},Pl=()=>{Le=!Le,R()},Rl=()=>{Hn(),Ft()},Dl=()=>{wt()};return o.addEventListener("click",El),c.addEventListener("change",yl),l.addEventListener("click",Tl),u.addEventListener("click",Cl),h.addEventListener("click",Al),p.addEventListener("input",wl),a.addEventListener("click",Pl),ne.addEventListener("scroll",Dl,{passive:!0}),window.addEventListener("resize",Rl),z.push(()=>o.removeEventListener("click",El)),z.push(()=>c.removeEventListener("change",yl)),z.push(()=>l.removeEventListener("click",Tl)),z.push(()=>u.removeEventListener("click",Cl)),z.push(()=>h.removeEventListener("click",Al)),z.push(()=>p.removeEventListener("input",wl)),z.push(()=>a.removeEventListener("click",Pl)),z.push(()=>ne.removeEventListener("scroll",Dl)),z.push(()=>window.removeEventListener("resize",Rl)),z.push(()=>{ut!==0&&(window.cancelAnimationFrame(ut),ut=0)}),z.push(()=>{Ye!==0&&(window.cancelAnimationFrame(Ye),Ye=0),tt!==0&&(window.cancelAnimationFrame(tt),tt=0)}),Ce(le.value),R(),Ft(),Oe(),qe(0),{setStatus(b,V="info"){_.textContent=b,_.dataset.kind=V},setEnergy(b){const V=Math.max(0,Math.min(1,b));f.style.transform=`scaleX(${V.toFixed(3)})`},setFps(b){const V=Number.isFinite(b)?Math.max(0,b):0;A.textContent=`FPS: ${V.toFixed(0)}`},setMicActive(b){l.dataset.active=b?"true":"false",l.textContent=b?"Mic Live":"Mic"},setRecordState(b){u.dataset.active=b?"true":"false",u.textContent=b?"Stop video":"Record video"},setRecordEnabled(b){nt=b,Oe()},setPlayState(b){h.textContent=b?"Pause":"Play"},setPlayEnabled(b){$=b,Oe()},setPlaybackProgress(b){de||qe(b)},dispose(){for(const b of z)b();i.innerHTML=""}}}const Dc={type:"change"},Ho={type:"start"},xu={type:"end"},Ss=new zo,Lc=new Qn,mx=Math.cos(70*ge.DEG2RAD),Lt=new O,an=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},br=1e-6;class xx extends Sd{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ua.ROTATE,MIDDLE:ua.DOLLY,RIGHT:ua.PAN},this.touches={ONE:ca.ROTATE,TWO:ca.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Oi,this._lastTargetPosition=new O,this._quat=new Oi().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rc,this._sphericalDelta=new rc,this._scale=1,this._panOffset=new O,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new O,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_x.bind(this),this._onPointerDown=gx.bind(this),this._onPointerUp=vx.bind(this),this._onContextMenu=Ax.bind(this),this._onMouseWheel=bx.bind(this),this._onKeyDown=yx.bind(this),this._onTouchStart=Ex.bind(this),this._onTouchMove=Tx.bind(this),this._onMouseDown=Mx.bind(this),this._onMouseMove=Sx.bind(this),this._interceptControlDown=Cx.bind(this),this._interceptControlUp=wx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dc),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(n)&&isFinite(a)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),a<-Math.PI?a+=an:a>Math.PI&&(a-=an),n<=a?this._spherical.theta=Math.max(n,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+a)/2?Math.max(n,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Lt.length();r=this._clampDistance(o*this._scale);const c=o-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),r=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Ss.origin.copy(this.object.position),Ss.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ss.direction))<mx?this.object.lookAt(this.target):(Lc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ss.intersectPlane(Lc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>br||8*(1-this._lastQuaternion.dot(this.object.quaternion))>br||this._lastTargetPosition.distanceToSquared(this.target)>br?(this.dispatchEvent(Dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Lt.copy(a).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),a=e-n.left,s=t-n.top,r=n.width,o=n.height;this._mouse.x=a/r*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(n,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(n,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,s=Math.sqrt(n*n+a*a);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(a,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(n,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,a=e.pageY-t.y,s=Math.sqrt(n*n+a*a);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function gx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function _x(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function vx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xu),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Mx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ua.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case ua.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case ua.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Ho)}function Sx(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function bx(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(Ho),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(xu))}function yx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Ex(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ca.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case ca.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case ca.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case ca.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Ho)}function Tx(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function Ax(i){this.enabled!==!1&&i.preventDefault()}function Cx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ns={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ya{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Px=new cu(-1,1,1,-1,0,1);class Rx extends ai{constructor(){super(),this.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ni([0,2,0,0,2,0],2))}}const Dx=new Rx;class gu{constructor(e){this._mesh=new hn(Dx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Px)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Lx extends Ya{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ri.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Uc extends Ya{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const a=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.buffers.stencil.setFunc(a.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(a.EQUAL,1,4294967295),s.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.buffers.stencil.setLocked(!0)}}class Ux extends Ya{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ix{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lx(Ns),this.copyPass.material.blending=zt,this.clock=new uu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let a=0,s=this.passes.length;a<s;a++){const r=this.passes[a];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Uc!==void 0&&(r instanceof Uc?n=!0:r instanceof Ux&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(n,a),this.renderTarget2.setSize(n,a);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const bs={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new De},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new yt},cameraProjectionMatrixInverse:{value:new yt},cameraWorldMatrix:{value:new yt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ys={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},yr={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Nx(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Fx(e),n=t.length,a=new Uint8Array(n*4);for(let r=0;r<n;++r){const o=t[r],c=2*Math.PI*o/n,l=new O(Math.cos(c),Math.sin(c),0).normalize();a[r*4]=(l.x*.5+.5)*255,a[r*4+1]=(l.y*.5+.5)*255,a[r*4+2]=127,a[r*4+3]=255}const s=new Gs(a,e,e);return s.wrapS=Cn,s.wrapT=Cn,s.needsUpdate=!0,s}function Fx(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let a=Math.floor(e/2),s=e-1;for(let r=1;r<=t;){if(a===-1&&s===e?(s=e-2,a=0):(s===e&&(s=0),a<0&&(a=e-1)),n[a*e+s]!==0){s-=2,a++;continue}else n[a*e+s]=r++;s++,a--}return n}const Es={defines:{SAMPLES:16,SAMPLE_VECTORS:_u(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new De},cameraProjectionMatrixInverse:{value:new yt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function _u(i,e,t){const n=Ox(i,e,t);let a="vec3[SAMPLES](";for(let s=0;s<i;s++){const r=n[s];a+=`vec3(${r.x}, ${r.y}, ${r.z})${s<i-1?",":")"}`}return a}function Ox(i,e,t){const n=[];for(let a=0;a<i;a++){const s=2*Math.PI*e*a/i,r=Math.pow(a/(i-1),t);n.push(new O(Math.cos(s),Math.sin(s),r))}return n}class Bx{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,a,s;const r=.5*(Math.sqrt(3)-1),o=(e+t)*r,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(c+l)*u,f=c-h,p=l-h,_=e-f,S=t-p;let m,d;_>S?(m=1,d=0):(m=0,d=1);const A=_-m+u,T=S-d+u,C=_-1+2*u,L=S-1+2*u,y=c&255,w=l&255,B=this.perm[y+this.perm[w]]%12,M=this.perm[y+m+this.perm[w+d]]%12,v=this.perm[y+1+this.perm[w+1]]%12;let D=.5-_*_-S*S;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[B],_,S));let F=.5-A*A-T*T;F<0?a=0:(F*=F,a=F*F*this._dot(this.grad3[M],A,T));let G=.5-C*C-L*L;return G<0?s=0:(G*=G,s=G*G*this._dot(this.grad3[v],C,L)),70*(n+a+s)}noise3d(e,t,n){let a,s,r,o;const l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),h=Math.floor(t+l),f=Math.floor(n+l),p=1/6,_=(u+h+f)*p,S=u-_,m=h-_,d=f-_,A=e-S,T=t-m,C=n-d;let L,y,w,B,M,v;A>=T?T>=C?(L=1,y=0,w=0,B=1,M=1,v=0):A>=C?(L=1,y=0,w=0,B=1,M=0,v=1):(L=0,y=0,w=1,B=1,M=0,v=1):T<C?(L=0,y=0,w=1,B=0,M=1,v=1):A<C?(L=0,y=1,w=0,B=0,M=1,v=1):(L=0,y=1,w=0,B=1,M=1,v=0);const D=A-L+p,F=T-y+p,G=C-w+p,K=A-B+2*p,j=T-M+2*p,X=C-v+2*p,ie=A-1+3*p,z=T-1+3*p,se=C-1+3*p,le=u&255,Ce=h&255,He=f&255,Je=this.perm[le+this.perm[Ce+this.perm[He]]]%12,et=this.perm[le+L+this.perm[Ce+y+this.perm[He+w]]]%12,nt=this.perm[le+B+this.perm[Ce+M+this.perm[He+v]]]%12,Y=this.perm[le+1+this.perm[Ce+1+this.perm[He+1]]]%12;let $=.6-A*A-T*T-C*C;$<0?a=0:($*=$,a=$*$*this._dot3(this.grad3[Je],A,T,C));let de=.6-D*D-F*F-G*G;de<0?s=0:(de*=de,s=de*de*this._dot3(this.grad3[et],D,F,G));let Le=.6-K*K-j*j-X*X;Le<0?r=0:(Le*=Le,r=Le*Le*this._dot3(this.grad3[nt],K,j,X));let Me=.6-ie*ie-z*z-se*se;return Me<0?o=0:(Me*=Me,o=Me*Me*this._dot3(this.grad3[Y],ie,z,se)),32*(a+s+r+o)}noise4d(e,t,n,a){const s=this.grad4,r=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let u,h,f,p,_;const S=(e+t+n+a)*c,m=Math.floor(e+S),d=Math.floor(t+S),A=Math.floor(n+S),T=Math.floor(a+S),C=(m+d+A+T)*l,L=m-C,y=d-C,w=A-C,B=T-C,M=e-L,v=t-y,D=n-w,F=a-B,G=M>v?32:0,K=M>D?16:0,j=v>D?8:0,X=M>F?4:0,ie=v>F?2:0,z=D>F?1:0,se=G+K+j+X+ie+z,le=r[se][0]>=3?1:0,Ce=r[se][1]>=3?1:0,He=r[se][2]>=3?1:0,Je=r[se][3]>=3?1:0,et=r[se][0]>=2?1:0,nt=r[se][1]>=2?1:0,Y=r[se][2]>=2?1:0,$=r[se][3]>=2?1:0,de=r[se][0]>=1?1:0,Le=r[se][1]>=1?1:0,Me=r[se][2]>=1?1:0,Ze=r[se][3]>=1?1:0,bt=M-le+l,Xe=v-Ce+l,ot=D-He+l,R=F-Je+l,Oe=M-et+2*l,qe=v-nt+2*l,st=D-Y+2*l,ve=F-$+2*l,at=M-de+3*l,J=v-Le+3*l,Be=D-Me+3*l,E=F-Ze+3*l,x=M-1+4*l,N=v-1+4*l,q=D-1+4*l,Z=F-1+4*l,k=m&255,Ee=d&255,ue=A&255,Re=T&255,Te=o[k+o[Ee+o[ue+o[Re]]]]%32,te=o[k+le+o[Ee+Ce+o[ue+He+o[Re+Je]]]]%32,ne=o[k+et+o[Ee+nt+o[ue+Y+o[Re+$]]]]%32,Ie=o[k+de+o[Ee+Le+o[ue+Me+o[Re+Ze]]]]%32,be=o[k+1+o[Ee+1+o[ue+1+o[Re+1]]]]%32;let fe=.6-M*M-v*v-D*D-F*F;fe<0?u=0:(fe*=fe,u=fe*fe*this._dot4(s[Te],M,v,D,F));let Ne=.6-bt*bt-Xe*Xe-ot*ot-R*R;Ne<0?h=0:(Ne*=Ne,h=Ne*Ne*this._dot4(s[te],bt,Xe,ot,R));let P=.6-Oe*Oe-qe*qe-st*st-ve*ve;P<0?f=0:(P*=P,f=P*P*this._dot4(s[ne],Oe,qe,st,ve));let ee=.6-at*at-J*J-Be*Be-E*E;ee<0?p=0:(ee*=ee,p=ee*ee*this._dot4(s[Ie],at,J,Be,E));let ae=.6-x*x-N*N-q*q-Z*Z;return ae<0?_=0:(ae*=ae,_=ae*ae*this._dot4(s[be],x,N,q,Z)),27*(u+h+f+p+_)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,a){return e[0]*t+e[1]*n+e[2]*a}_dot4(e,t,n,a,s){return e[0]*t+e[1]*n+e[2]*a+e[3]*s}}class yn extends Ya{constructor(e,t,n=512,a=512,s,r,o){super(),this.width=n,this.height=a,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Nx(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new wn(this.width,this.height,{type:zn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ut({defines:Object.assign({},bs.defines),uniforms:Ri.clone(bs.uniforms),vertexShader:bs.vertexShader,fragmentShader:bs.fragmentShader,blending:zt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new dd,this.normalMaterial.blending=zt,this.pdMaterial=new Ut({defines:Object.assign({},Es.defines),uniforms:Ri.clone(Es.uniforms),vertexShader:Es.vertexShader,fragmentShader:Es.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ut({defines:Object.assign({},ys.defines),uniforms:Ri.clone(ys.uniforms),vertexShader:ys.vertexShader,fragmentShader:ys.fragmentShader,blending:zt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ut({uniforms:Ri.clone(Ns.uniforms),vertexShader:Ns.vertexShader,fragmentShader:Ns.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Rr,blendDst:La,blendEquation:En,blendSrcAlpha:Pr,blendDstAlpha:La,blendEquationAlpha:En}),this.blendMaterial=new Ut({uniforms:Ri.clone(yr.uniforms),vertexShader:yr.vertexShader,fragmentShader:yr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:zc,blendSrc:Rr,blendDst:La,blendEquation:En,blendSrcAlpha:Pr,blendDstAlpha:La,blendEquationAlpha:En}),this._fsQuad=new gu(null),this._originalClearColor=new rt,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ks,this.depthTexture.format=Fi,this.depthTexture.type=_i,this.normalRenderTarget=new wn(this.width,this.height,{minFilter:kt,magFilter:kt,type:zn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,a=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=a,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=a,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=_u(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case yn.OUTPUT.Off:break;case yn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case yn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case yn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case yn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case yn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case yn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,a,s){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,a!=null&&(e.setClearColor(a),e.setClearAlpha(s||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_renderOverride(e,t,n,a,s){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,a=t.clearColor||a,s=t.clearAlpha||s,a!=null&&(e.setClearColor(a),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new Bx,n=e*e*4,a=new Uint8Array(n);for(let r=0;r<e;r++)for(let o=0;o<e;o++){const c=r,l=o;a[(r*e+o)*4]=(t.noise(c,l)*.5+.5)*255,a[(r*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,a[(r*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,a[(r*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const s=new Gs(a,e,e,un,Bn);return s.wrapS=Cn,s.wrapT=Cn,s.needsUpdate=!0,s}}yn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};class zx extends Ya{constructor(e,t,n=null,a=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=a,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,n){const a=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=a}}const Er=`
varying vec2 vUv;
varying vec3 vWorldPos;
varying float vHeight;

uniform float uLow;
uniform float uMid;
uniform float uHigh;
uniform float uIsFloor;
uniform vec2 uFloorHoleHalfSize;
uniform float uFloorCircleRadius;
uniform float uFloorCircleFade;
uniform float uFloorOpacity;
uniform float uMaterialMode;
uniform float uMatDiffuse;
uniform float uMatRoughness;
uniform float uMatMetalness;
uniform float uMatClearcoat;
uniform float uMatNormalStrength;
uniform sampler2D uAlbedoMap;
uniform sampler2D uRoughnessMap;
uniform sampler2D uMetalnessMap;
uniform sampler2D uClearcoatMap;
uniform sampler2D uNormalMap;
uniform sampler2D uMatcapMap;
uniform float uUseAlbedoMap;
uniform float uUseRoughnessMap;
uniform float uUseMetalnessMap;
uniform float uUseClearcoatMap;
uniform float uUseNormalMap;
uniform float uUseMatcapMap;
uniform float uMatcapBrightness;
uniform float uMatcapContrast;
uniform float uMatcapSaturation;
uniform vec3 uKeyDir;
uniform vec3 uFillDir;
uniform float uKeyStrength;
uniform float uFillStrength;
uniform float uHemiStrength;
uniform float uDiffuseBase;
uniform vec3 uBaseColor;

const float PI = 3.14159265359;

vec3 fresnelSchlick(float cosTheta, vec3 f0) {
  return f0 + (1.0 - f0) * pow(1.0 - cosTheta, 5.0);
}

float distributionGGX(vec3 n, vec3 h, float roughness) {
  float a = roughness * roughness;
  float a2 = a * a;
  float ndh = max(dot(n, h), 0.0);
  float ndh2 = ndh * ndh;
  float denom = ndh2 * (a2 - 1.0) + 1.0;
  return a2 / max(PI * denom * denom, 0.000001);
}

float geometrySchlickGGX(float ndv, float roughness) {
  float r = roughness + 1.0;
  float k = (r * r) / 8.0;
  return ndv / max(ndv * (1.0 - k) + k, 0.000001);
}

float geometrySmith(vec3 n, vec3 v, vec3 l, float roughness) {
  float ndv = max(dot(n, v), 0.0);
  float ndl = max(dot(n, l), 0.0);
  float ggxV = geometrySchlickGGX(ndv, roughness);
  float ggxL = geometrySchlickGGX(ndl, roughness);
  return ggxV * ggxL;
}

mat3 cotangentFrame(vec3 n, vec3 p, vec2 uv) {
  vec3 dp1 = dFdx(p);
  vec3 dp2 = dFdy(p);
  vec2 duv1 = dFdx(uv);
  vec2 duv2 = dFdy(uv);

  vec3 dp2perp = cross(dp2, n);
  vec3 dp1perp = cross(n, dp1);
  vec3 t = dp2perp * duv1.x + dp1perp * duv2.x;
  vec3 b = dp2perp * duv1.y + dp1perp * duv2.y;
  float invMax = inversesqrt(max(dot(t, t), dot(b, b)));
  return mat3(t * invMax, b * invMax, n);
}

vec3 applyNormalMap(vec3 n, vec3 p, vec2 uv) {
  if (uUseNormalMap < 0.5 || uMatNormalStrength <= 0.0001) {
    return n;
  }
  vec3 mapNormal = texture2D(uNormalMap, uv).xyz * 2.0 - 1.0;
  mapNormal.xy *= uMatNormalStrength;
  mat3 tbn = cotangentFrame(n, p, uv);
  return normalize(tbn * mapNormal);
}

vec3 applySaturation(vec3 color, float saturation) {
  float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
  return mix(vec3(luma), color, max(0.0, saturation));
}

vec3 sampleMatcap(vec2 uv) {
  return texture2D(uMatcapMap, uv).rgb;
}

vec3 evaluatePBRLight(
  vec3 n,
  vec3 v,
  vec3 l,
  vec3 albedo,
  float roughness,
  float metalness,
  float clearcoat
) {
  float ndl = max(dot(n, l), 0.0);
  float ndv = max(dot(n, v), 0.0);
  if (ndl <= 0.0 || ndv <= 0.0) {
    return vec3(0.0);
  }

  vec3 h = normalize(v + l);
  float hdv = max(dot(h, v), 0.0);

  vec3 f0 = mix(vec3(0.04), albedo, metalness);
  float ndf = distributionGGX(n, h, roughness);
  float g = geometrySmith(n, v, l, roughness);
  vec3 f = fresnelSchlick(hdv, f0);

  vec3 specular = (ndf * g * f) / max(4.0 * ndv * ndl, 0.000001);
  vec3 ks = f;
  vec3 kd = (vec3(1.0) - ks) * (1.0 - metalness);
  vec3 diffuse = kd * albedo / PI;

  vec3 color = (diffuse + specular) * ndl;

  if (clearcoat > 0.0) {
    float ccRoughness = max(0.02, roughness * 0.35);
    float ccNdf = distributionGGX(n, h, ccRoughness);
    float ccG = geometrySmith(n, v, l, ccRoughness);
    float ccF = fresnelSchlick(hdv, vec3(0.04)).r;
    float ccSpec = (ccNdf * ccG * ccF) / max(4.0 * ndv * ndl, 0.000001);
    color += vec3(ccSpec * clearcoat * 0.28) * ndl;
  }

  return color;
}

vec3 shadeSurface(vec3 normal, vec3 viewDir, vec2 uv) {
  vec3 albedo = uBaseColor * uMatDiffuse;
  if (uUseAlbedoMap > 0.5) {
    albedo *= texture2D(uAlbedoMap, uv).rgb;
  }

  float roughness = uMatRoughness;
  if (uUseRoughnessMap > 0.5) {
    roughness *= texture2D(uRoughnessMap, uv).r;
  }
  roughness = clamp(roughness, 0.04, 1.0);

  float metalness = uMatMetalness;
  if (uUseMetalnessMap > 0.5) {
    metalness *= texture2D(uMetalnessMap, uv).r;
  }
  metalness = clamp(metalness, 0.0, 1.0);

  float clearcoat = uMatClearcoat;
  if (uUseClearcoatMap > 0.5) {
    clearcoat *= texture2D(uClearcoatMap, uv).r;
  }
  clearcoat = clamp(clearcoat, 0.0, 1.0);

  vec3 n = normal;
  if (uMaterialMode < 0.5) {
    n = applyNormalMap(normal, vWorldPos, uv);
  }

  vec3 shaded;
  if (uMaterialMode > 0.5) {
    vec3 viewNormal = normalize((viewMatrix * vec4(n, 0.0)).xyz);
    vec2 matcapUv = clamp(viewNormal.xy * 0.5 + 0.5, 0.0, 1.0);
    vec3 matcapColor = sampleMatcap(matcapUv);
    matcapColor = (matcapColor - vec3(0.5)) * max(0.0, uMatcapContrast) + vec3(0.5);
    matcapColor = applySaturation(matcapColor, uMatcapSaturation);
    matcapColor *= max(0.0, uMatcapBrightness);
    shaded = clamp(matcapColor, vec3(0.0), vec3(1.0));
  } else {
    vec3 keyDir = normalize(uKeyDir);
    vec3 fillDir = normalize(uFillDir);
    float hemi = clamp(n.y * 0.5 + 0.5, 0.0, 1.0);

    vec3 ambient = albedo * (uDiffuseBase + hemi * uHemiStrength) * (1.0 - metalness * 0.65);
    vec3 keyLight = evaluatePBRLight(n, viewDir, keyDir, albedo, roughness, metalness, clearcoat) * uKeyStrength;
    vec3 fillLight = evaluatePBRLight(n, viewDir, fillDir, albedo, roughness, metalness, clearcoat) * uFillStrength;

    shaded = clamp(ambient + keyLight + fillLight, vec3(0.0), vec3(1.0));
  }

  return shaded;
}

void main() {
  vec3 dx = dFdx(vWorldPos);
  vec3 dy = dFdy(vWorldPos);
  vec3 normal = normalize(cross(dx, dy));
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  vec3 shaded = shadeSurface(normal, viewDir, vUv);

  if (uIsFloor > 0.5) {
    vec2 holeHalf = max(uFloorHoleHalfSize, vec2(0.0001));
    vec2 holeDelta = abs(vWorldPos.xz) - holeHalf;
    float holeSdf = max(holeDelta.x, holeDelta.y);
    if (holeSdf < 0.0) {
      discard;
    }

    float radius = max(0.001, uFloorCircleRadius);
    float fade = max(0.001, uFloorCircleFade);
    float distToCenter = length(vWorldPos.xz);
    float mask = 1.0 - smoothstep(radius - fade, radius, distToCenter);
    float alpha = clamp(mask * uFloorOpacity, 0.0, 1.0);
    if (alpha <= 0.001) {
      discard;
    }

    gl_FragColor = vec4(shaded, alpha);
    return;
  }

  gl_FragColor = vec4(shaded, 1.0);
}
`,Tr=`
varying vec2 vUv;
varying vec3 vWorldPos;
varying float vHeight;

uniform float uTime;
uniform float uNoiseCore;
uniform float uDriftPhase;

uniform float uBaseFreq;
uniform vec3 uBaseOffset;
uniform vec2 uDomainScale;
uniform float uDomainRotation;
uniform float uLatticeWarp;
uniform float uLatticeWarpFreq;
uniform float uComplement;
uniform float uFinalAmp;

uniform float uTurboFreq;
uniform float uTurboLacunarity;
uniform float uTurboAmp;
uniform float uRoughness;
uniform float uRidgeAmount;
uniform float uContrast;
uniform float uAttenuation;
uniform float uTurbulence;
uniform float uOutputMin;
uniform float uOutputMax;
uniform float uDetailFreq;
uniform float uDetailStrength;
uniform float uAudioMacroReactivity;
uniform float uAudioDetailReactivity;
uniform float uSymmetryMode;
uniform float uSymmetryWidth;
uniform float uSymmetryStretch;

uniform float uLow;
uniform float uMid;
uniform float uHigh;
uniform float uLowGain;
uniform float uMidGain;
uniform float uHighGain;
uniform float uGlobalGain;

uniform vec2 uMouseUv;
uniform float uMouseRadius;
uniform float uMouseStrength;
uniform float uMouseHover;
uniform vec2 uMouseMoveDir;
uniform float uMouseNoiseOffset;
uniform float uPulseAge;
uniform float uEdgeFade;
uniform float uEdgeRadius;
uniform float uEdgePower;
uniform float uDriftSpeed;
uniform float uIsFloor;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(
    permute(
      permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) +
        i.y + vec4(0.0, i1.y, i2.y, 1.0)
    ) + i.x + vec4(0.0, i1.x, i2.x, 1.0)
  );

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(
    vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3))
  );
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(
    0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)),
    0.0
  );
  m = m * m;
  return 42.0 * dot(
    m * m,
    vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))
  );
}

vec4 os2sPermute(vec4 t) {
  return t * (t * 34.0 + 133.0);
}

vec3 os2sGrad(float hash) {
  vec3 cube = mod(floor(hash / vec3(1.0, 2.0, 4.0)), 2.0) * 2.0 - 1.0;
  vec3 cuboct = cube;
  if (hash < 16.0) {
    cuboct.x = 0.0;
  } else if (hash < 32.0) {
    cuboct.y = 0.0;
  } else {
    cuboct.z = 0.0;
  }

  float type = mod(floor(hash / 8.0), 2.0);
  vec3 rhomb = (1.0 - type) * cube + type * (cuboct + cross(cube, cuboct));
  vec3 g = cuboct * 1.22474487139 + rhomb;
  g *= (1.0 - 0.042942436724648037 * type) * 3.5946317686139184;
  return g;
}

float openSimplex2SPart(vec3 X) {
  vec3 b = floor(X);
  vec4 i4 = vec4(X - b, 2.5);

  vec3 v1 = b + floor(dot(i4, vec4(0.25)));
  vec3 v2 = b + vec3(1.0, 0.0, 0.0) + vec3(-1.0, 1.0, 1.0) * floor(dot(i4, vec4(-0.25, 0.25, 0.25, 0.35)));
  vec3 v3 = b + vec3(0.0, 1.0, 0.0) + vec3(1.0, -1.0, 1.0) * floor(dot(i4, vec4(0.25, -0.25, 0.25, 0.35)));
  vec3 v4 = b + vec3(0.0, 0.0, 1.0) + vec3(1.0, 1.0, -1.0) * floor(dot(i4, vec4(0.25, 0.25, -0.25, 0.35)));

  vec4 hashes = os2sPermute(mod(vec4(v1.x, v2.x, v3.x, v4.x), 289.0));
  hashes = os2sPermute(mod(hashes + vec4(v1.y, v2.y, v3.y, v4.y), 289.0));
  hashes = mod(os2sPermute(mod(hashes + vec4(v1.z, v2.z, v3.z, v4.z), 289.0)), 48.0);

  vec3 d1 = X - v1;
  vec3 d2 = X - v2;
  vec3 d3 = X - v3;
  vec3 d4 = X - v4;
  vec4 a = max(0.75 - vec4(dot(d1, d1), dot(d2, d2), dot(d3, d3), dot(d4, d4)), 0.0);
  vec4 aa = a * a;
  vec4 aaaa = aa * aa;

  vec3 g1 = os2sGrad(hashes.x);
  vec3 g2 = os2sGrad(hashes.y);
  vec3 g3 = os2sGrad(hashes.z);
  vec3 g4 = os2sGrad(hashes.w);
  vec4 extrapolations = vec4(dot(d1, g1), dot(d2, g2), dot(d3, g3), dot(d4, g4));

  return dot(aaaa, extrapolations);
}

float openSimplex2SNoise(vec3 X) {
  mat3 orthonormalMap = mat3(
    0.788675134594813, -0.211324865405187, -0.577350269189626,
    -0.211324865405187, 0.788675134594813, -0.577350269189626,
    0.577350269189626, 0.577350269189626, 0.577350269189626
  );

  vec3 xr = orthonormalMap * X;
  return openSimplex2SPart(xr) + openSimplex2SPart(xr + 144.5);
}

float softLimitSigned(float x) {
  return x / sqrt(1.0 + x * x);
}

float coreNoise(vec3 p) {
  if (uNoiseCore < 0.5) {
    return snoise(p);
  }

  float os2sFreqComp = 1.0;
  float os2sAmpComp = 1.0;
  if (uNoiseCore < 1.5) {
    return softLimitSigned(openSimplex2SNoise(p * os2sFreqComp) * os2sAmpComp);
  }

  // OpenSimplexFixed v2: keep seam-safe OpenSimplex core but bias toward wider Simplex-like plateaus.
  float os2sFixedFreqComp = 0.93;
  float os2sFixedAmpComp = 1.30;
  float os2sFixedGamma = 1.10;
  float os2sFixedPlateauMix = 0.22;

  float nMain = openSimplex2SNoise(p * os2sFixedFreqComp);
  float nLow = openSimplex2SNoise(p * (os2sFixedFreqComp * 0.52));
  float n = mix(nMain, nLow, os2sFixedPlateauMix);
  n = softLimitSigned(n * os2sFixedAmpComp);
  n = sign(n) * pow(abs(n), os2sFixedGamma);
  return n;
}

float baseNoise(vec3 p) {
  float n = coreNoise(p) * 0.5 + 0.5;
  return mix(n, 1.0 - n, clamp(uComplement, 0.0, 1.0));
}

vec3 warpVector(vec3 p) {
  float wx = coreNoise(p + vec3(19.2, 3.7, 11.8));
  float wy = coreNoise(p + vec3(-7.4, 13.1, 5.2));
  float wz = coreNoise(p + vec3(9.3, -17.0, 6.1));
  return vec3(wx, wy, wz);
}

float alligatorTurbulence(vec3 p) {
  float sum = 0.0;
  float gain = max(0.0, uTurboAmp);
  float octaveAmp = 1.0;
  float freq = max(0.0001, uTurboFreq);
  float norm = 0.0;
  float roughPow = mix(0.9, 3.5, clamp(uRoughness, 0.0, 1.0));
  float atten = clamp(uAttenuation, 0.05, 0.7);

  if (gain <= 0.000001) {
    return 0.0;
  }

  for (int i = 0; i < 8; i++) {
    float enabled = step(float(i), uTurbulence - 0.5);
    float n = abs(coreNoise(p * freq + vec3(float(i) * 7.13, float(i) * 3.11, float(i) * 5.23)));
    float ridge = 1.0 - n;
    n = mix(n, ridge, clamp(uRidgeAmount, 0.0, 1.0));
    n = pow(clamp(n, 0.0, 1.0), roughPow);
    sum += n * octaveAmp * enabled;
    norm += octaveAmp * enabled;
    freq *= max(1.01, uTurboLacunarity);
    octaveAmp *= atten;
  }

  if (norm <= 0.0) {
    return 0.0;
  }
  return clamp((sum / norm) * gain, 0.0, 1.0);
}

float softAbs(float x, float width) {
  float w = max(0.0001, width);
  return sqrt(x * x + w * w) - w;
}

float softSymmetryAxis(float coord, float width, float stretch) {
  float absCoord = abs(coord);
  float mirrored = softAbs(coord, width);
  float nearAxis = 1.0 - smoothstep(width * 0.6, width * 3.5, absCoord);
  return mirrored + nearAxis * max(0.0, stretch) * width;
}

vec2 applySymmetry(vec2 p) {
  float mode = floor(uSymmetryMode + 0.5);
  if (mode < 0.5) {
    return p;
  }

  float width = max(0.0001, uSymmetryWidth);
  float stretch = max(0.0, uSymmetryStretch);
  p.x = softSymmetryAxis(p.x, width, stretch);

  if (mode > 1.5) {
    p.y = softSymmetryAxis(p.y, width, stretch);
  }
  return p;
}

float edgePin(vec2 uv, float audioEdge) {
  float radius = clamp(uEdgeRadius, 0.1, 0.5);
  float fade = max(0.1, uEdgeFade);
  float basePower = max(0.9, uEdgePower);
  float power = clamp(basePower + audioEdge * (4.0 - basePower), 0.9, 4.0);
  float distToCenter = distance(uv, vec2(0.5));
  float pin = 1.0 - smoothstep(radius - fade, radius, distToCenter);
  return pow(clamp(pin, 0.0, 1.0), power);
}

void main() {
  vUv = uv;

  float domainAngle = uDomainRotation;
  float dc = cos(domainAngle);
  float ds = sin(domainAngle);
  mat2 domainRotate = mat2(dc, -ds, ds, dc);
  vec2 domainScaled = position.xy * max(abs(uDomainScale), vec2(0.0001));
  vec2 domainPos = domainRotate * domainScaled;
  vec2 symmetryPos = applySymmetry(domainPos);
  vec3 basePos = vec3(symmetryPos, uDriftPhase) + uBaseOffset;
  // Keep temporal phase scale stable while changing main noise size.
  // This prevents rapid "scrolling" artifacts when uBaseFreq is dragged.
  vec3 simplexInput = vec3(
    basePos.xy * max(0.0001, uBaseFreq),
    basePos.z * 0.32
  );
  if (uMouseNoiseOffset > 0.5) {
    float moveLen = length(uMouseMoveDir);
    if (moveLen > 0.0001) {
      float distToMouseForNoise = distance(vUv, uMouseUv);
      float noiseMask = 1.0 - smoothstep(0.0, max(0.0001, uMouseRadius * 1.3), distToMouseForNoise);
      vec2 moveDir = uMouseMoveDir / moveLen;
      simplexInput.xy += moveDir * (noiseMask * 0.12);
    }
  }
  vec3 simplexWarp = warpVector(simplexInput * max(0.0001, uLatticeWarpFreq)) * uLatticeWarp;
  vec3 simplexWarped = simplexInput + simplexWarp;

  float simplex01 = baseNoise(simplexWarped);
  vec3 alligatorPos = vec3(simplex01, simplex01, simplex01);
  float alligator01 = clamp(alligatorTurbulence(alligatorPos), 0.0, 1.0);
  alligator01 = clamp((alligator01 - 0.5) * max(0.0, uContrast) + 0.5, 0.0, 1.0);
  float finalRemap = mix(uOutputMin, uOutputMax, alligator01);

  float macroAudio = 1.0 + (uLow * uLowGain + uMid * uMidGain) * uGlobalGain * uAudioMacroReactivity;
  float edgeAudio = clamp(
    (uLow * uLowGain + uMid * uMidGain + uHigh * uHighGain) * uGlobalGain * 0.35,
    0.0,
    1.0
  );
  float fine = coreNoise(
    simplexWarped * max(0.0001, uDetailFreq) +
    vec3(0.0, 0.0, uDriftPhase * 1.9 + uTime * 0.03)
  );
  float audioShape = finalRemap * macroAudio + fine * uHigh * uHighGain * uGlobalGain * uDetailStrength * uAudioDetailReactivity;

  float distToMouse = distance(vUv, uMouseUv);
  float radius = max(0.5, uMouseRadius);
  float mouseFalloff = 1.0 - smoothstep(0.0, radius, distToMouse);
  float hoverTerm = mouseFalloff * uMouseHover * uMouseStrength;

  float pulseTerm = 0.0;
  if (uPulseAge >= 0.0) {
    float normalizedDist = distToMouse / radius;
    float spatialEnvelope = exp(-normalizedDist * 2.0);
    float temporalEnvelope = exp(-uPulseAge * 3.2);
    float phase = normalizedDist * 14.0 - uPulseAge * 16.0;
    pulseTerm = sin(phase) * spatialEnvelope * temporalEnvelope * uMouseStrength;
  }
  float mouseTerm = hoverTerm + pulseTerm;

  float height = edgePin(vUv, edgeAudio) * ((audioShape * uFinalAmp) + mouseTerm);
  if (uIsFloor > 0.5) {
    height = 0.0;
  }
  vHeight = height;

  vec3 displaced = position;
  displaced.z += height;

  vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
  vWorldPos = worldPosition.xyz;

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,_o={noiseCore:0,baseFreq:.32,baseOffsetX:-8,baseOffsetY:-8,baseOffsetZ:.98,domainScaleX:1,domainScaleY:1,domainRotationDeg:0,latticeWarp:0,latticeWarpFreq:.05,complement:0,finalAmp:8,turboFreq:.7,turboLacunarity:1.92,turboAmp:1,roughness:.1,ridgeAmount:0,contrast:1,attenuation:.42,turbulence:8,outputMin:-.06,outputMax:.44,driftSpeed:.5,detailFreq:3.35,detailStrength:.45,audioMacroReactivity:1,audioDetailReactivity:1,symmetryMode:0,symmetryWidth:.08,symmetryStretch:.4},Vx={lowGain:3,midGain:3,highGain:3,globalGain:1.2,micSensitivity:1,attack:.98,release:.24,driftAudioAmount:3,finalAmpAudioAmount:1,offsetZAudioAmount:1},Gx={mouseRadius:.525,mouseStrength:1.11,mouseNoiseOffset:0,parallaxStrength:0,edgeFade:.407,edgeRadius:.5,edgePower:1.23},kx={subdivisions:1444},Hx={fov:28,minDistance:8,maxDistance:28.9,minPolarDeg:2,maxPolarDeg:68,minAzimuthDeg:-180,maxAzimuthDeg:180,centerLock:0,panRange:2.8,orbitTail:1,panTail:1},Wx={diffuse:2,roughness:.64,metalness:1,clearcoat:0,normalStrength:0,matcapBrightness:2.22,matcapContrast:1,matcapSaturation:1},Xx="matcap",qx={mode:"none",intensity:1.86,radius:.36,thickness:.66,falloff:.1,denoiseRadius:17},Yx={keyAzimuth:-22,keyElevation:68,keyStrength:1,fillAzimuth:0,fillElevation:0,fillStrength:1.28,hemiStrength:.22,diffuseBase:0,baseColorR:.9,baseColorG:.9,baseColorB:.91},vu=16,Ts=vu,As=vu,Ic=220,jx=-.003,Nc=600,Zx=-.0038,$x=-.0012,Cs=.02,Kx=58,Jx=16,Qx=1,Fc=.03,eg=1e5,tg=1,ng="./gorilla2.jpg",ws=new O(0,1,0),ig=6.5,ag=5.4,sg=2.6,rg=4.4,og=1.2,lg=4.2,cg=1.8,ug=16/9,hg=62,dg=.2;class fg{container;scene;camera;controls;composer;renderPass;gtaoPass;aoDepthTarget;aoDepthTexture;material;floorMaterial;backgroundFloorMaterial;mesh;underlayMesh;floorMesh;backgroundFloorMesh;geometry;underlayGeometry;floorGeometry;backgroundFloorGeometry;uniforms;raycaster=new Md;pointerNdc=new De;pointerWorld=new O;clearColorScratch=new rt;pointerUvTarget=new De(.5,.5);pointerMoveDirTarget=new De;pointerMoveDirCurrent=new De;pointerMoveDelta=new De;floorPlane=new Qn(ws,0);controlsCenter=new O(0,.1,0);targetDelta=new O;controlDragLastClient=new De;rotateInertiaVelocity=new De;panInertiaVelocity=new O;panInertiaRight=new O;panInertiaUp=new O;rotateInertiaOffset=new O;rotateInertiaAxis=new O;parallaxMoveTarget=new De;parallaxMoveCurrent=new De;parallaxLastClient=new De;parallaxHasLastClient=!1;controlDragPointerId=-1;controlDragLastTimeMs=0;controlDragMode="none";controlDragActive=!1;parallaxOffsetCurrent=new O;parallaxOffsetTarget=new O;parallaxForward=new O;parallaxRight=new O;parallaxUp=new O;mouseStrengthCurrent=0;mouseStrengthTarget=0;pulseAge=-1;audioLow=0;audioMid=0;audioHigh=0;audioLevel=0;audioMotionLevel=0;audioDriftAdd=0;audioOffsetZAdd=0;driftPhase=0;baseFreqCurrent=_o.baseFreq;baseFreqTarget=_o.baseFreq;soloNoisePlane=!1;renderer;noiseParams;audioMapParams;interactionParams;qualityParams;cameraParams;materialMode;materialParams;ambientOcclusionParams;shadingParams;textureLoader=new _d;mapTextures={};defaultAlbedoTexture;defaultScalarTexture;defaultNormalTexture;defaultMatcapTexture;pointerEventToUv(e){const t=this.renderer.domElement.getBoundingClientRect();if(t.width<=0||t.height<=0)return null;const n=(e.clientX-t.left)/t.width,a=(e.clientY-t.top)/t.height;if(this.pointerNdc.set(n*2-1,-(a*2-1)),this.raycaster.setFromCamera(this.pointerNdc,this.camera),!this.raycaster.ray.intersectPlane(this.floorPlane,this.pointerWorld))return null;const r=this.pointerWorld.x/Ts+.5,o=.5-this.pointerWorld.z/As;return r<0||r>1||o<0||o>1?null:new De(r,o)}handlePointerMove=e=>{this.captureParallaxPointerDelta(e);const t=this.pointerEventToUv(e);if(!t){this.mouseStrengthTarget=0,this.pointerMoveDirTarget.set(0,0);return}this.pointerMoveDelta.copy(t).sub(this.pointerUvTarget),this.pointerMoveDelta.lengthSq()>1e-8&&(this.pointerMoveDelta.normalize(),this.pointerMoveDirTarget.copy(this.pointerMoveDelta)),this.pointerUvTarget.copy(t),this.mouseStrengthTarget=1};handlePointerDown=e=>{if(this.parallaxLastClient.set(e.clientX,e.clientY),this.parallaxHasLastClient=!0,e.button!==0)return;const t=this.pointerEventToUv(e);t&&(this.pointerUvTarget.copy(t),this.uniforms.uMouseUv.value.copy(t),this.mouseStrengthTarget=1,this.pulseAge=0)};handlePointerLeave=()=>{this.mouseStrengthTarget=0,this.pointerMoveDirTarget.set(0,0),this.parallaxMoveTarget.set(0,0),this.parallaxHasLastClient=!1};handleControlsPointerDown=e=>{const t=e.button===0,n=e.button===2&&this.controls.enablePan;!t&&!n||(this.controlDragMode=t?"rotate":"pan",this.controlDragActive=!0,this.controlDragPointerId=e.pointerId,this.controlDragLastClient.set(e.clientX,e.clientY),this.controlDragLastTimeMs=e.timeStamp,this.rotateInertiaVelocity.set(0,0),this.panInertiaVelocity.set(0,0,0))};handleControlsPointerMove=e=>{if(this.captureParallaxPointerDelta(e),!this.controlDragActive||e.pointerId!==this.controlDragPointerId)return;const t=e.clientX-this.controlDragLastClient.x,n=e.clientY-this.controlDragLastClient.y;this.controlDragLastClient.set(e.clientX,e.clientY);const a=Math.max(1/240,(e.timeStamp-this.controlDragLastTimeMs)/1e3);if(this.controlDragLastTimeMs=e.timeStamp,this.controlDragMode==="rotate"){const s=Math.max(1,this.renderer.domElement.clientHeight),r=2*Math.PI*t*this.controls.rotateSpeed/s,o=2*Math.PI*n*this.controls.rotateSpeed/s,c=1/a;this.rotateInertiaVelocity.set(ge.lerp(this.rotateInertiaVelocity.x,r*c,.65),ge.lerp(this.rotateInertiaVelocity.y,o*c,.65));return}if(this.controlDragMode==="pan"){const s=Math.max(1,this.renderer.domElement.clientHeight),r=this.camera.position.distanceTo(this.controls.target)*Math.tan(ge.degToRad(this.camera.fov*.5)),o=this.controls.panSpeed*(2*r/s),c=t*o,l=n*o,u=this.camera.matrix;this.panInertiaRight.setFromMatrixColumn(u,0).normalize(),this.panInertiaUp.setFromMatrixColumn(u,1).normalize();const h=1/a,f=-c*h,p=l*h;this.panInertiaVelocity.copy(this.panInertiaRight).multiplyScalar(f).addScaledVector(this.panInertiaUp,p)}};handleControlsPointerUp=e=>{!this.controlDragActive||e.pointerId!==this.controlDragPointerId||(this.controlDragActive=!1,this.controlDragPointerId=-1,this.controlDragMode="none")};captureParallaxPointerDelta(e){const t=this.renderer.domElement.getBoundingClientRect();if(t.width<=0||t.height<=0)return;if(!this.parallaxHasLastClient){this.parallaxLastClient.set(e.clientX,e.clientY),this.parallaxHasLastClient=!0;return}const n=(e.clientX-this.parallaxLastClient.x)/t.width,a=(e.clientY-this.parallaxLastClient.y)/t.height;this.parallaxLastClient.set(e.clientX,e.clientY),this.parallaxMoveTarget.set(n,a);const s=.08;this.parallaxMoveTarget.lengthSq()>s*s&&this.parallaxMoveTarget.setLength(s)}constructor(e){this.container=e.container,this.noiseParams={...e.noiseParams},this.baseFreqTarget=ge.clamp(this.noiseParams.baseFreq,.05,1),this.baseFreqCurrent=this.baseFreqTarget,this.audioMapParams={...e.audioMapParams},this.interactionParams={...e.interactionParams},this.qualityParams={...e.qualityParams},this.cameraParams={...e.cameraParams},this.materialMode=e.materialMode,this.materialParams={...e.materialParams},this.ambientOcclusionParams={...e.ambientOcclusionParams},this.shadingParams={...e.shadingParams},this.defaultAlbedoTexture=this.createSolidTexture(255,255,255,Gt),this.defaultScalarTexture=this.createSolidTexture(255,255,255,Tn),this.defaultNormalTexture=this.createSolidTexture(128,128,255,Tn),this.defaultMatcapTexture=this.createDefaultMatcapTexture(),this.renderer=new cx({antialias:!0,alpha:!1}),this.renderer.outputColorSpace=Gt,this.renderer.toneMapping=Gc,this.renderer.toneMappingExposure=1.06,this.renderer.domElement.classList.add("viewport-canvas"),this.container.appendChild(this.renderer.domElement),this.scene=new ld,this.scene.background=new rt(329740),this.scene.fog=new Go(329740,8,25),this.camera=new _n(44,1,.1,120),this.camera.position.set(0,8.4,14.4),this.controls=new xx(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.target.copy(this.controlsCenter),this.composer=new Ix(this.renderer),this.renderPass=new zx(this.scene,this.camera),this.composer.addPass(this.renderPass),this.gtaoPass=new yn(this.scene,this.camera,512,512),this.gtaoPass.output=yn.OUTPUT.Default,this.composer.addPass(this.gtaoPass),this.aoDepthTexture=new ks(1,1,_i),this.aoDepthTexture.format=Fi,this.aoDepthTexture.type=_i,this.aoDepthTarget=new wn(1,1,{minFilter:kt,magFilter:kt,type:zn,depthTexture:this.aoDepthTexture,depthBuffer:!0,stencilBuffer:!0}),this.aoDepthTarget.texture.generateMipmaps=!1,this.gtaoPass.setGBuffer(this.aoDepthTexture),this.uniforms={uTime:{value:0},uNoiseCore:{value:ge.clamp(Math.round(this.noiseParams.noiseCore),0,2)},uDriftPhase:{value:0},uBaseFreq:{value:this.baseFreqCurrent},uBaseOffset:{value:new O(this.noiseParams.baseOffsetX,this.noiseParams.baseOffsetY,this.noiseParams.baseOffsetZ)},uDomainScale:{value:new De(this.noiseParams.domainScaleX,this.noiseParams.domainScaleY)},uDomainRotation:{value:ge.degToRad(this.noiseParams.domainRotationDeg)},uLatticeWarp:{value:this.noiseParams.latticeWarp},uLatticeWarpFreq:{value:this.noiseParams.latticeWarpFreq},uComplement:{value:this.noiseParams.complement},uFinalAmp:{value:this.noiseParams.finalAmp},uTurboFreq:{value:this.noiseParams.turboFreq},uTurboLacunarity:{value:this.noiseParams.turboLacunarity},uTurboAmp:{value:this.noiseParams.turboAmp},uRoughness:{value:this.noiseParams.roughness},uRidgeAmount:{value:this.noiseParams.ridgeAmount},uContrast:{value:this.noiseParams.contrast},uAttenuation:{value:this.noiseParams.attenuation},uTurbulence:{value:this.noiseParams.turbulence},uOutputMin:{value:this.noiseParams.outputMin},uOutputMax:{value:this.noiseParams.outputMax},uDetailFreq:{value:this.noiseParams.detailFreq},uDetailStrength:{value:this.noiseParams.detailStrength},uAudioMacroReactivity:{value:this.noiseParams.audioMacroReactivity},uAudioDetailReactivity:{value:this.noiseParams.audioDetailReactivity},uSymmetryMode:{value:this.noiseParams.symmetryMode},uSymmetryWidth:{value:this.noiseParams.symmetryWidth},uSymmetryStretch:{value:this.noiseParams.symmetryStretch},uLow:{value:0},uMid:{value:0},uHigh:{value:0},uLowGain:{value:this.audioMapParams.lowGain},uMidGain:{value:this.audioMapParams.midGain},uHighGain:{value:this.audioMapParams.highGain},uGlobalGain:{value:this.audioMapParams.globalGain},uMouseUv:{value:new De(.5,.5)},uMouseRadius:{value:this.interactionParams.mouseRadius},uMouseStrength:{value:this.interactionParams.mouseStrength},uMouseHover:{value:0},uMouseMoveDir:{value:new De(0,0)},uMouseNoiseOffset:{value:this.interactionParams.mouseNoiseOffset},uPulseAge:{value:-1},uEdgeFade:{value:this.interactionParams.edgeFade},uEdgeRadius:{value:this.interactionParams.edgeRadius},uEdgePower:{value:this.interactionParams.edgePower},uDriftSpeed:{value:this.noiseParams.driftSpeed},uIsFloor:{value:0},uFloorHoleHalfSize:{value:new De(Math.max(.001,Ts*.5-Cs),Math.max(.001,As*.5-Cs))},uFloorCircleRadius:{value:Kx},uFloorCircleFade:{value:Jx},uFloorOpacity:{value:Qx},uMaterialMode:{value:this.materialMode==="matcap"?1:0},uMatDiffuse:{value:this.materialParams.diffuse},uMatRoughness:{value:this.materialParams.roughness},uMatMetalness:{value:this.materialParams.metalness},uMatClearcoat:{value:this.materialParams.clearcoat},uMatNormalStrength:{value:this.materialParams.normalStrength},uAlbedoMap:{value:this.defaultAlbedoTexture},uRoughnessMap:{value:this.defaultScalarTexture},uMetalnessMap:{value:this.defaultScalarTexture},uClearcoatMap:{value:this.defaultScalarTexture},uNormalMap:{value:this.defaultNormalTexture},uMatcapMap:{value:this.defaultMatcapTexture},uUseAlbedoMap:{value:0},uUseRoughnessMap:{value:0},uUseMetalnessMap:{value:0},uUseClearcoatMap:{value:0},uUseNormalMap:{value:0},uUseMatcapMap:{value:1},uMatcapBrightness:{value:this.materialParams.matcapBrightness},uMatcapContrast:{value:this.materialParams.matcapContrast},uMatcapSaturation:{value:this.materialParams.matcapSaturation},uKeyDir:{value:new O(0,1,0)},uFillDir:{value:new O(0,1,0)},uKeyStrength:{value:this.shadingParams.keyStrength},uFillStrength:{value:this.shadingParams.fillStrength},uHemiStrength:{value:this.shadingParams.hemiStrength},uDiffuseBase:{value:this.shadingParams.diffuseBase},uBaseColor:{value:new O(this.shadingParams.baseColorR,this.shadingParams.baseColorG,this.shadingParams.baseColorB)}};const t={...this.uniforms,uIsFloor:{value:1}},n={...this.uniforms,uIsFloor:{value:1},uFloorHoleHalfSize:{value:new De(Math.max(.001,Ts*.5-Cs+Fc),Math.max(.001,As*.5-Cs+Fc))},uFloorCircleRadius:{value:eg},uFloorCircleFade:{value:tg},uFloorOpacity:{value:1}};this.material=new Ut({uniforms:this.uniforms,vertexShader:Tr,fragmentShader:Er,side:In}),this.floorMaterial=new Ut({uniforms:t,vertexShader:Tr,fragmentShader:Er,side:On,transparent:!0,depthWrite:!1}),this.backgroundFloorMaterial=new Ut({uniforms:n,vertexShader:Tr,fragmentShader:Er,side:On,transparent:!1,depthWrite:!0}),this.floorGeometry=this.createFloorGeometry(),this.floorMesh=new hn(this.floorGeometry,this.floorMaterial),this.floorMesh.rotation.x=-Math.PI*.5,this.floorMesh.position.y=jx,this.floorMesh.renderOrder=-1,this.scene.add(this.floorMesh),this.backgroundFloorGeometry=this.createBackgroundFloorGeometry(),this.backgroundFloorMesh=new hn(this.backgroundFloorGeometry,this.backgroundFloorMaterial),this.backgroundFloorMesh.rotation.x=-Math.PI*.5,this.backgroundFloorMesh.position.y=Zx,this.backgroundFloorMesh.renderOrder=-2,this.scene.add(this.backgroundFloorMesh),this.geometry=this.createGeometry(this.qualityParams.subdivisions),this.mesh=new hn(this.geometry,this.material),this.mesh.rotation.x=-Math.PI*.5,this.mesh.renderOrder=1,this.scene.add(this.mesh),this.underlayGeometry=this.createGeometry(this.qualityParams.subdivisions),this.underlayMesh=new hn(this.underlayGeometry,this.material),this.underlayMesh.rotation.x=-Math.PI*.5,this.underlayMesh.position.y=$x,this.underlayMesh.renderOrder=0,this.scene.add(this.underlayMesh),this.applySceneVisibility(),this.applyNoiseUniforms(),this.applyAudioMapUniforms(),this.applyInteractionUniforms(),this.applyCameraParams(),this.applyMaterialUniforms(),this.applyShadingUniforms(),this.applyAmbientOcclusionParams(),this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerleave",this.handlePointerLeave),this.renderer.domElement.addEventListener("pointerdown",this.handleControlsPointerDown),window.addEventListener("pointermove",this.handleControlsPointerMove),window.addEventListener("pointerup",this.handleControlsPointerUp),window.addEventListener("pointercancel",this.handleControlsPointerUp),this.resize()}createSolidTexture(e,t,n,a){const s=new Gs(new Uint8Array([e,t,n,255]),1,1,un);return s.colorSpace=a,s.wrapS=Cn,s.wrapT=Cn,s.needsUpdate=!0,s}createDefaultMatcapTexture(){const e=this.textureLoader.load(ng,t=>{t.colorSpace=Gt,t.wrapS=cn,t.wrapT=cn,t.minFilter=jt,t.magFilter=jt,t.generateMipmaps=!0,t.needsUpdate=!0});return e.colorSpace=Gt,e.wrapS=cn,e.wrapT=cn,e.minFilter=jt,e.magFilter=jt,e.generateMipmaps=!0,e.needsUpdate=!0,e}createGeometry(e){const t=Math.min(1600,Math.max(512,Math.round(e)));return new Ii(Ts,As,t,t)}createFloorGeometry(){return new Ii(Ic,Ic,1,1)}createBackgroundFloorGeometry(){return new Ii(Nc,Nc,1,1)}applyNoiseUniforms(){const e=ge.clamp(Math.round(this.noiseParams.noiseCore),0,2),t=ge.clamp(this.noiseParams.baseFreq,.05,1),n=ge.clamp(this.noiseParams.domainScaleX,.1,4),a=ge.clamp(this.noiseParams.domainScaleY,.1,4),s=ge.degToRad(ge.clamp(this.noiseParams.domainRotationDeg,-180,180)),r=ge.clamp(this.noiseParams.latticeWarpFreq,.05,1),o=ge.clamp(this.noiseParams.turboFreq,.05,1),c=ge.clamp(this.noiseParams.turboLacunarity,1.01,3),l=ge.clamp(this.noiseParams.turboAmp,0,3),u=ge.clamp(this.noiseParams.ridgeAmount,0,1),h=ge.clamp(this.noiseParams.contrast,0,4),f=ge.clamp(this.noiseParams.turbulence,1,8),p=ge.clamp(this.noiseParams.driftSpeed,0,.65),_=Math.min(this.noiseParams.outputMin,this.noiseParams.outputMax),S=Math.max(this.noiseParams.outputMin,this.noiseParams.outputMax),m=ge.clamp(this.noiseParams.detailFreq,.5,8),d=ge.clamp(this.noiseParams.detailStrength,0,2),A=ge.clamp(this.noiseParams.audioMacroReactivity,0,4),T=ge.clamp(this.noiseParams.audioDetailReactivity,0,4),C=ge.clamp(Math.round(this.noiseParams.symmetryMode),0,2),L=ge.clamp(this.noiseParams.symmetryWidth,.001,1),y=ge.clamp(this.noiseParams.symmetryStretch,0,3);this.uniforms.uNoiseCore.value=e,this.baseFreqTarget=t,this.uniforms.uBaseOffset.value.set(this.noiseParams.baseOffsetX,this.noiseParams.baseOffsetY,this.noiseParams.baseOffsetZ),this.uniforms.uDomainScale.value.set(n,a),this.uniforms.uDomainRotation.value=s,this.uniforms.uLatticeWarp.value=this.noiseParams.latticeWarp,this.uniforms.uLatticeWarpFreq.value=r,this.uniforms.uComplement.value=this.noiseParams.complement,this.uniforms.uFinalAmp.value=this.noiseParams.finalAmp,this.uniforms.uTurboFreq.value=o,this.uniforms.uTurboLacunarity.value=c,this.uniforms.uTurboAmp.value=l,this.uniforms.uRoughness.value=this.noiseParams.roughness,this.uniforms.uRidgeAmount.value=u,this.uniforms.uContrast.value=h,this.uniforms.uAttenuation.value=ge.clamp(this.noiseParams.attenuation,.05,.7),this.uniforms.uTurbulence.value=f,this.uniforms.uDriftSpeed.value=p,this.uniforms.uOutputMin.value=_,this.uniforms.uOutputMax.value=S,this.uniforms.uDetailFreq.value=m,this.uniforms.uDetailStrength.value=d,this.uniforms.uAudioMacroReactivity.value=A,this.uniforms.uAudioDetailReactivity.value=T,this.uniforms.uSymmetryMode.value=C,this.uniforms.uSymmetryWidth.value=L,this.uniforms.uSymmetryStretch.value=y}applyAudioMapUniforms(){this.uniforms.uLowGain.value=this.audioMapParams.lowGain,this.uniforms.uMidGain.value=this.audioMapParams.midGain,this.uniforms.uHighGain.value=this.audioMapParams.highGain,this.uniforms.uGlobalGain.value=this.audioMapParams.globalGain}applyInteractionUniforms(){this.uniforms.uMouseRadius.value=ge.clamp(this.interactionParams.mouseRadius,.5,.6),this.uniforms.uMouseStrength.value=ge.clamp(this.interactionParams.mouseStrength,.2,2.2),this.uniforms.uMouseNoiseOffset.value=this.interactionParams.mouseNoiseOffset>=.5?1:0,this.uniforms.uEdgeFade.value=Math.max(.1,this.interactionParams.edgeFade),this.uniforms.uEdgeRadius.value=ge.clamp(this.interactionParams.edgeRadius,.1,.5),this.uniforms.uEdgePower.value=Math.max(.9,this.interactionParams.edgePower)}clearCameraParallaxOffset(){this.parallaxOffsetCurrent.lengthSq()<=1e-8||(this.camera.position.sub(this.parallaxOffsetCurrent),this.controls.target.sub(this.parallaxOffsetCurrent),this.parallaxOffsetCurrent.set(0,0,0))}applyCameraParallax(e,t){const n=ge.clamp(this.interactionParams.parallaxStrength,0,2);if(n<=1e-4||t<0){this.parallaxOffsetTarget.set(0,0,0),this.parallaxMoveTarget.set(0,0),this.parallaxMoveCurrent.set(0,0);return}const a=1-Math.exp(-e*24);if(this.parallaxMoveCurrent.lerp(this.parallaxMoveTarget,a),this.parallaxMoveTarget.multiplyScalar(Math.exp(-e*10)),this.parallaxMoveTarget.lengthSq()<1e-8&&this.parallaxMoveTarget.set(0,0),this.parallaxForward.copy(this.controls.target).sub(this.camera.position),this.parallaxForward.lengthSq()<1e-8){this.parallaxOffsetTarget.set(0,0,0);return}this.parallaxForward.normalize(),this.parallaxRight.crossVectors(this.parallaxForward,ws),this.parallaxRight.lengthSq()<1e-8?this.parallaxRight.set(1,0,0):this.parallaxRight.normalize(),this.parallaxUp.crossVectors(this.parallaxRight,this.parallaxForward).normalize();const s=this.camera.position.distanceTo(this.controls.target),r=s*1.9*n,o=s*.12,c=ge.clamp(-this.parallaxMoveCurrent.x*r,-o,o),l=ge.clamp(this.parallaxMoveCurrent.y*r*.85,-o,o);this.parallaxOffsetTarget.copy(this.parallaxRight).multiplyScalar(c),this.parallaxOffsetTarget.addScaledVector(this.parallaxUp,l);const u=1-Math.exp(-e*14);this.parallaxOffsetCurrent.lerp(this.parallaxOffsetTarget,u),this.camera.position.add(this.parallaxOffsetCurrent),this.controls.target.add(this.parallaxOffsetCurrent)}applyControlsReleaseInertia(e){if(this.controlDragActive)return;const t=ge.clamp(this.cameraParams.orbitTail,0,3),n=ge.clamp(this.cameraParams.panTail,0,3),a=t<=1e-4?0:Math.exp(-(Math.log(100)/t)*e),s=n<=1e-4?0:Math.exp(-(Math.log(100)/n)*e);if(this.rotateInertiaVelocity.length()>1e-6){const c=this.rotateInertiaVelocity.x*e,l=this.rotateInertiaVelocity.y*e;this.rotateInertiaOffset.copy(this.camera.position).sub(this.controls.target),this.rotateInertiaOffset.lengthSq()>1e-8&&(this.rotateInertiaOffset.applyAxisAngle(ws,-c),this.rotateInertiaAxis.crossVectors(ws,this.rotateInertiaOffset),this.rotateInertiaAxis.lengthSq()>1e-8&&(this.rotateInertiaAxis.normalize(),this.rotateInertiaOffset.applyAxisAngle(this.rotateInertiaAxis,-l)),this.camera.position.copy(this.controls.target).add(this.rotateInertiaOffset)),this.rotateInertiaVelocity.multiplyScalar(a),this.rotateInertiaVelocity.lengthSq()<1e-8&&this.rotateInertiaVelocity.set(0,0)}this.panInertiaVelocity.length()>1e-6&&(this.camera.position.addScaledVector(this.panInertiaVelocity,e),this.controls.target.addScaledVector(this.panInertiaVelocity,e),this.panInertiaVelocity.multiplyScalar(s),this.panInertiaVelocity.lengthSq()<1e-8&&this.panInertiaVelocity.set(0,0,0))}enforceCameraTargetBounds(){if(this.cameraParams.centerLock>=.5){this.controls.target.copy(this.controlsCenter);return}const e=Math.max(0,this.cameraParams.panRange);this.targetDelta.copy(this.controls.target).sub(this.controlsCenter),this.targetDelta.y=ge.clamp(this.targetDelta.y,-e,e);const t=Math.hypot(this.targetDelta.x,this.targetDelta.z);if(t>e&&t>1e-6){const n=e/t;this.targetDelta.x*=n,this.targetDelta.z*=n}this.controls.target.copy(this.controlsCenter).add(this.targetDelta)}applyCameraParams(){const e=ge.clamp(this.cameraParams.fov,20,100),t=ge.clamp(this.cameraParams.minDistance,1,80),n=ge.clamp(this.cameraParams.maxDistance,t+.1,120),a=ge.clamp(this.cameraParams.minPolarDeg,0,89),s=ge.clamp(this.cameraParams.maxPolarDeg,a,89);this.cameraParams.orbitTail=ge.clamp(this.cameraParams.orbitTail,0,3),this.cameraParams.panTail=ge.clamp(this.cameraParams.panTail,0,3),this.camera.fov=e,this.camera.updateProjectionMatrix(),this.controls.minDistance=t,this.controls.maxDistance=n,this.controls.minPolarAngle=ge.degToRad(a),this.controls.maxPolarAngle=ge.degToRad(s),this.controls.minAzimuthAngle=-1/0,this.controls.maxAzimuthAngle=1/0,this.controls.enablePan=this.cameraParams.centerLock<.5,this.enforceCameraTargetBounds()}applyMaterialUniforms(){this.uniforms.uMaterialMode.value=this.materialMode==="matcap"?1:0,this.uniforms.uUseMatcapMap.value<.5&&(this.uniforms.uMatcapMap.value=this.defaultMatcapTexture,this.uniforms.uUseMatcapMap.value=1),this.uniforms.uMatDiffuse.value=this.materialParams.diffuse,this.uniforms.uMatRoughness.value=this.materialParams.roughness,this.uniforms.uMatMetalness.value=this.materialParams.metalness,this.uniforms.uMatClearcoat.value=this.materialParams.clearcoat,this.uniforms.uMatNormalStrength.value=this.materialParams.normalStrength,this.uniforms.uMatcapBrightness.value=this.materialParams.matcapBrightness,this.uniforms.uMatcapContrast.value=this.materialParams.matcapContrast,this.uniforms.uMatcapSaturation.value=this.materialParams.matcapSaturation}setMaterialMapTexture(e,t,n){if(e==="albedo"){this.uniforms.uAlbedoMap.value=t,this.uniforms.uUseAlbedoMap.value=n;return}if(e==="roughness"){this.uniforms.uRoughnessMap.value=t,this.uniforms.uUseRoughnessMap.value=n;return}if(e==="metalness"){this.uniforms.uMetalnessMap.value=t,this.uniforms.uUseMetalnessMap.value=n;return}if(e==="clearcoat"){this.uniforms.uClearcoatMap.value=t,this.uniforms.uUseClearcoatMap.value=n;return}if(e==="normal"){this.uniforms.uNormalMap.value=t,this.uniforms.uUseNormalMap.value=n;return}this.uniforms.uMatcapMap.value=t,this.uniforms.uUseMatcapMap.value=n}async setMaterialMap(e,t){if(!t){const a=this.mapTextures[e];a&&(a.dispose(),delete this.mapTextures[e]);const s=e==="normal"?this.defaultNormalTexture:e==="albedo"?this.defaultAlbedoTexture:e==="matcap"?this.defaultMatcapTexture:this.defaultScalarTexture;this.setMaterialMapTexture(e,s,e==="matcap"?1:0);return}const n=URL.createObjectURL(t);try{const a=await this.textureLoader.loadAsync(n);a.wrapS=Cn,a.wrapT=Cn,a.colorSpace=e==="albedo"||e==="matcap"?Gt:Tn,a.needsUpdate=!0;const s=this.mapTextures[e];s&&s.dispose(),this.mapTextures[e]=a,this.setMaterialMapTexture(e,a,1)}finally{URL.revokeObjectURL(n)}}updateLightDirection(e,t,n){const a=ge.degToRad(e),s=ge.degToRad(ge.clamp(t,-89,89)),r=Math.cos(s);n.set(Math.cos(a)*r,Math.sin(s),Math.sin(a)*r).normalize()}applyShadingUniforms(){this.updateLightDirection(this.shadingParams.keyAzimuth,this.shadingParams.keyElevation,this.uniforms.uKeyDir.value),this.updateLightDirection(this.shadingParams.fillAzimuth,this.shadingParams.fillElevation,this.uniforms.uFillDir.value),this.uniforms.uKeyStrength.value=this.shadingParams.keyStrength,this.uniforms.uFillStrength.value=this.shadingParams.fillStrength,this.uniforms.uHemiStrength.value=this.shadingParams.hemiStrength,this.uniforms.uDiffuseBase.value=this.shadingParams.diffuseBase,this.uniforms.uBaseColor.value.set(this.shadingParams.baseColorR,this.shadingParams.baseColorG,this.shadingParams.baseColorB)}applyAmbientOcclusionParams(){const e=this.ambientOcclusionParams.mode;if(this.gtaoPass.enabled=e==="gtao",e==="gtao"){const t=ge.clamp(this.ambientOcclusionParams.denoiseRadius/24,0,1),n=ge.lerp(2,32,t),a=ge.lerp(.08,18,t),s=ge.lerp(.02,4,t),r=ge.lerp(14,8,t);this.gtaoPass.blendIntensity=this.ambientOcclusionParams.intensity,this.gtaoPass.updateGtaoMaterial({radius:this.ambientOcclusionParams.radius,thickness:this.ambientOcclusionParams.thickness,distanceFallOff:this.ambientOcclusionParams.falloff,samples:32}),this.gtaoPass.updatePdMaterial({radius:n,lumaPhi:a,depthPhi:s,normalPhi:r,rings:4,samples:32,radiusExponent:1.6})}}applySceneVisibility(){this.mesh.visible=!0;const e=!this.soloNoisePlane;this.underlayMesh.visible=e,this.floorMesh.visible=e,this.backgroundFloorMesh.visible=e}renderAODepthBuffer(){const e=this.renderer.getRenderTarget(),t=this.renderer.autoClear,n=this.renderer.getClearAlpha();this.renderer.getClearColor(this.clearColorScratch);const a=this.material.colorWrite,s=this.material.depthWrite,r=this.floorMaterial.colorWrite,o=this.floorMaterial.depthWrite,c=this.backgroundFloorMaterial.colorWrite,l=this.backgroundFloorMaterial.depthWrite;this.material.colorWrite=!1,this.material.depthWrite=!0,this.floorMaterial.colorWrite=!1,this.floorMaterial.depthWrite=!0,this.backgroundFloorMaterial.colorWrite=!1,this.backgroundFloorMaterial.depthWrite=!0;try{this.renderer.setRenderTarget(this.aoDepthTarget),this.renderer.autoClear=!0,this.renderer.setClearColor(0,1),this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,this.camera)}finally{this.material.colorWrite=a,this.material.depthWrite=s,this.floorMaterial.colorWrite=r,this.floorMaterial.depthWrite=o,this.backgroundFloorMaterial.colorWrite=c,this.backgroundFloorMaterial.depthWrite=l,this.renderer.autoClear=t,this.renderer.setRenderTarget(e),this.renderer.setClearColor(this.clearColorScratch,n)}}setNoiseParam(e,t){this.noiseParams[e]=t,this.applyNoiseUniforms()}setSoloNoisePlane(e){this.soloNoisePlane=e,this.applySceneVisibility()}setAudioMapParam(e,t){this.audioMapParams[e]=t,this.applyAudioMapUniforms()}setInteractionParam(e,t){this.interactionParams[e]=t,this.applyInteractionUniforms()}setCameraParam(e,t){this.cameraParams[e]=t,this.applyCameraParams()}setMaterialParam(e,t){this.materialParams[e]=t,this.applyMaterialUniforms()}setMaterialMode(e){this.materialMode=e,this.applyMaterialUniforms()}setAmbientOcclusionParam(e,t){this.ambientOcclusionParams[e]=t,this.applyAmbientOcclusionParams()}setAmbientOcclusionMode(e){this.ambientOcclusionParams.mode=e,this.applyAmbientOcclusionParams()}setQualityParam(e,t){if(e!=="subdivisions")return;const n=ge.clamp(Math.round(t),512,1600);if(n===this.qualityParams.subdivisions)return;this.qualityParams.subdivisions=n;const a=this.createGeometry(n),s=this.createGeometry(n);this.mesh.geometry.dispose(),this.mesh.geometry=a,this.geometry=a,this.underlayMesh.geometry.dispose(),this.underlayMesh.geometry=s,this.underlayGeometry=s}getAudioMapParams(){return{...this.audioMapParams}}setAudioBands(e){this.audioLow=e.low,this.audioMid=e.mid,this.audioHigh=e.high,this.audioLevel=ge.clamp(e.level,0,1)}render(e,t){const n=1-Math.exp(-e*14);this.uniforms.uMouseUv.value.lerp(this.pointerUvTarget,n),this.mouseStrengthCurrent+=(this.mouseStrengthTarget-this.mouseStrengthCurrent)*n,this.pointerMoveDirCurrent.lerp(this.pointerMoveDirTarget,n),this.uniforms.uMouseMoveDir.value.copy(this.pointerMoveDirCurrent),this.pointerMoveDirTarget.lengthSq()>0&&(this.pointerMoveDirTarget.multiplyScalar(Math.exp(-e*8)),this.pointerMoveDirTarget.lengthSq()<1e-8&&this.pointerMoveDirTarget.set(0,0)),this.pulseAge>=0&&(this.pulseAge+=e,this.pulseAge>2&&(this.pulseAge=-1));const a=1-Math.exp(-e*ig),s=Math.max(1e-4,this.baseFreqCurrent),r=Math.max(1e-4,this.baseFreqTarget),o=Math.exp(ge.lerp(Math.log(s),Math.log(r),a));this.baseFreqCurrent=Math.abs(o-r)<1e-5?r:o,this.uniforms.uTime.value=t,this.uniforms.uBaseFreq.value=this.baseFreqCurrent,this.uniforms.uMouseHover.value=this.mouseStrengthCurrent,this.uniforms.uPulseAge.value=this.pulseAge,this.uniforms.uLow.value=this.audioLow,this.uniforms.uMid.value=this.audioMid,this.uniforms.uHigh.value=this.audioHigh;const c=this.audioLevel,l=c>this.audioMotionLevel?ag:sg,u=1-Math.exp(-e*l);this.audioMotionLevel+=(c-this.audioMotionLevel)*u;const h=ge.clamp(this.audioMapParams.driftAudioAmount,0,3),f=ge.clamp(this.audioMapParams.finalAmpAudioAmount,0,1),p=ge.clamp(this.audioMapParams.offsetZAudioAmount,0,3),_=ge.clamp(this.noiseParams.driftSpeed,0,.65),S=ge.clamp(this.noiseParams.finalAmp,0,8),m=this.noiseParams.baseOffsetZ,d=ge.clamp(Math.pow(this.audioMotionLevel,.78)*1.45,0,1),A=ge.clamp(Math.pow(this.audioLevel,.82)*1.3,0,1),T=h*A*.55,C=T>this.audioDriftAdd?rg:og,L=1-Math.exp(-e*C);this.audioDriftAdd+=(T-this.audioDriftAdd)*L;const y=ge.clamp(Math.pow(this.audioLevel,.85)*1.28,0,1),w=p*y*3.5,B=w>this.audioOffsetZAdd?lg:cg,M=1-Math.exp(-e*B);this.audioOffsetZAdd+=(w-this.audioOffsetZAdd)*M;const D=Math.max(0,8-S)*d*f,F=S+D,G=ge.clamp(_+this.audioDriftAdd,0,2.4);this.uniforms.uDriftSpeed.value=G,this.driftPhase+=G*e,this.uniforms.uDriftPhase.value=this.driftPhase,this.uniforms.uBaseOffset.value.z=m+this.audioOffsetZAdd,this.uniforms.uFinalAmp.value=ge.clamp(F,.5,8),this.clearCameraParallaxOffset(),this.applyControlsReleaseInertia(e),this.controls.update(),this.enforceCameraTargetBounds(),this.applyCameraParallax(e,t),this.ambientOcclusionParams.mode==="gtao"&&this.renderAODepthBuffer(),this.composer.render()}resize(){const e=this.container.clientWidth,t=Math.max(this.container.clientHeight,1),n=1;this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.aoDepthTarget.setSize(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n)));const a=e/t;this.camera.aspect=a;const s=ge.clamp(this.cameraParams.fov,20,100);if(typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches&&Math.min(window.innerWidth,window.innerHeight)<=900&&a<1){const o=ge.degToRad(s),c=2*Math.atan(Math.tan(o*.5)*ug),l=2*Math.atan(Math.tan(c*.5)/Math.max(dg,a));this.camera.fov=ge.clamp(ge.radToDeg(l),s,hg)}else this.camera.fov=s;this.camera.updateProjectionMatrix()}dispose(){this.renderer.domElement.removeEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerleave",this.handlePointerLeave),this.renderer.domElement.removeEventListener("pointerdown",this.handleControlsPointerDown),window.removeEventListener("pointermove",this.handleControlsPointerMove),window.removeEventListener("pointerup",this.handleControlsPointerUp),window.removeEventListener("pointercancel",this.handleControlsPointerUp),this.controls.dispose(),this.backgroundFloorGeometry.dispose(),this.backgroundFloorMaterial.dispose(),this.floorGeometry.dispose(),this.floorMaterial.dispose(),this.underlayGeometry.dispose(),this.geometry.dispose(),this.material.dispose(),this.renderPass.dispose(),this.gtaoPass.dispose(),this.aoDepthTarget.dispose(),this.aoDepthTexture.dispose(),this.composer.dispose();for(const e of Object.values(this.mapTextures))e?.dispose();this.defaultAlbedoTexture.dispose(),this.defaultScalarTexture.dispose(),this.defaultNormalTexture.dispose(),this.defaultMatcapTexture.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}setShadingParam(e,t){this.shadingParams[e]=t,this.applyShadingUniforms()}}function Wo(i){const e=document.querySelector(i);if(!e)throw new Error(`Missing required element: ${i}`);return e}function oa(i){return i instanceof Error?i.message:"Unknown error"}const pg=Wo("#app");pg.innerHTML=`
  <main class="app-shell">
    <div id="viewport" class="viewport"></div>
    <div id="overlay" class="overlay"></div>
  </main>
`;const Mu=Wo("#viewport"),mg=Wo("#overlay"),vo={..._o},xi={...Vx},Mo={...Gx},So={...kx},bo={...Hx};let yo=Xx;const Eo={...Wx},Fs={...qx},To={...Yx},Vn=new Audio;Vn.preload="auto";Vn.crossOrigin="anonymous";Vn.loop=!0;const Su="./Noise_Default.mp3",xg=60,gg="60",Et=new hx(Vn);Et.setMicSensitivity(xi.micSensitivity);const bu=new dx(xi.attack,xi.release),Xo=typeof window<"u"&&"MediaRecorder"in window;let Ui=null,Os=null,Ps=[],Da=null,Ba=!1,yu=gg,Ia=0,Na=0;Vn.src=Su;Vn.load();const _g=i=>i==="unlimited"?0:1e3/Number(i),vg=()=>{if(!Xo)return null;const i=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"];for(const e of i)if(MediaRecorder.isTypeSupported(e))return e;return null},Ao=()=>{if(Os){for(const i of Os.getTracks())i.stop();Os=null}},Mg=i=>{Da&&(URL.revokeObjectURL(Da),Da=null);const e=new Date,t=s=>s.toString().padStart(2,"0"),n=`after-form-noise-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}${t(e.getSeconds())}.webm`;Da=URL.createObjectURL(i);const a=document.createElement("a");a.href=Da,a.download=n,document.body.appendChild(a),a.click(),a.remove()},Sg=()=>{if(!Xo)throw new Error("Recording is not supported in this browser.");const i=Mu.querySelector("canvas");if(!i)throw new Error("Viewport canvas not found.");const e=i.captureStream(xg),t=new MediaStream;for(const r of e.getVideoTracks())t.addTrack(r);const n=Et.getRecordingAudioTrack();n&&t.addTrack(n);const a=vg(),s=a?new MediaRecorder(t,{mimeType:a}):new MediaRecorder(t);return Ps=[],Os=t,Ui=s,s.addEventListener("dataavailable",r=>{r.data&&r.data.size>0&&Ps.push(r.data)}),s.addEventListener("stop",()=>{const r=s.mimeType||"video/webm",o=new Blob(Ps,{type:r});Ps=[],Ao(),Ui=null,Ba=!1,Ge.setRecordState(!1),o.size>0?(Mg(o),Ge.setStatus("Recording saved.")):Ge.setStatus("Recording stopped (empty output).","error")}),s.addEventListener("error",()=>{Ao(),Ui=null,Ba=!1,Ge.setRecordState(!1),Ge.setStatus("Recording failed.","error")}),s.start(),Ba=!0,Ge.setRecordState(!0),{hasAudio:t.getAudioTracks().length>0}},bg=()=>{Ui&&(Ui.state!=="inactive"?Ui.stop():(Ao(),Ui=null,Ba=!1,Ge.setRecordState(!1)))},Yt=new fg({container:Mu,noiseParams:vo,audioMapParams:xi,interactionParams:Mo,qualityParams:So,cameraParams:bo,materialMode:yo,materialParams:Eo,ambientOcclusionParams:Fs,shadingParams:To});let Ge;Ge=px(mg,{noiseParams:vo,audioMapParams:xi,interactionParams:Mo,qualityParams:So,cameraParams:bo,materialMode:yo,materialParams:Eo,ambientOcclusionParams:Fs,shadingParams:To},{onDefaultSelected:async()=>{try{Ge.setStatus("Loading default track..."),Et.mode==="mic"&&(await Et.stopMic(),Ge.setMicActive(!1)),await Et.loadUrl(Su),Ge.setPlayEnabled(!0),Ge.setPlayState(!0),Ge.setStatus("Now playing: default track.")}catch(i){Ge.setStatus(`Default track failed: ${oa(i)}`,"error")}},onFileSelected:async i=>{try{Ge.setStatus(`Loading ${i.name}...`),Et.mode==="mic"&&(await Et.stopMic(),Ge.setMicActive(!1)),await Et.loadFile(i),Ge.setPlayEnabled(!0),Ge.setPlayState(!0),Ge.setStatus(`Now playing: ${i.name}`)}catch(e){Ge.setStatus(`Audio load failed: ${oa(e)}`,"error")}},onMicToggle:async()=>{try{if(Et.mode==="mic"){await Et.stopMic(),Ge.setMicActive(!1),Ge.setPlayEnabled(Et.hasLoadedFile()),Ge.setPlayState(Et.isFilePlaying()),Ge.setStatus("Microphone stopped.");return}await Et.startMic(),Ge.setMicActive(!0),Ge.setPlayEnabled(!1),Ge.setPlayState(!1),Ge.setStatus("Microphone capture is active.")}catch(i){Ge.setStatus(`Mic access failed: ${oa(i)}`,"error")}},onRecordToggle:async()=>{try{if(Ba){Ge.setStatus("Stopping recording..."),bg();return}const{hasAudio:i}=Sg();Ge.setStatus(i?"Recording video + audio...":"Recording video (no audio source).")}catch(i){Ge.setRecordState(!1),Ge.setStatus(`Recording failed: ${oa(i)}`,"error")}},onPlayToggle:async()=>{try{const i=await Et.togglePlayback();if(!Et.hasLoadedFile()){Ge.setStatus("Load an audio file before playing.","error");return}Ge.setPlayState(i),Ge.setStatus(i?"File playback active.":"File playback paused.")}catch(i){Ge.setStatus(`Playback failed: ${oa(i)}`,"error")}},onSeekNormalized:async i=>{if(!Et.hasLoadedFile()||Et.mode!=="file")return;const e=Vn.duration;if(!Number.isFinite(e)||e<=0)return;const t=Math.max(0,Math.min(1,i));Vn.currentTime=e*t},onFpsLimitModeChange:i=>{yu=i,Ia=0,Na=0},onNoiseParamChange:(i,e)=>{vo[i]=e,Yt.setNoiseParam(i,e)},onAudioMapParamChange:(i,e)=>{xi[i]=e,Yt.setAudioMapParam(i,e),i==="micSensitivity"&&Et.setMicSensitivity(e),bu.setEnvelope(xi.attack,xi.release)},onInteractionParamChange:(i,e)=>{Mo[i]=e,Yt.setInteractionParam(i,e)},onQualityParamChange:(i,e)=>{So[i]=e,Yt.setQualityParam(i,e)},onCameraParamChange:(i,e)=>{bo[i]=e,Yt.setCameraParam(i,e)},onMaterialParamChange:(i,e)=>{Eo[i]=e,Yt.setMaterialParam(i,e)},onMaterialModeChange:i=>{yo=i,Yt.setMaterialMode(i)},onMaterialMapSelected:async(i,e)=>{const t={albedo:"Albedo",roughness:"Roughness",metalness:"Metalness",clearcoat:"Clearcoat",normal:"Normal",matcap:"Matcap"};try{e?Ge.setStatus(`Loading ${t[i]} map...`):Ge.setStatus(`Clearing ${t[i]} map...`),await Yt.setMaterialMap(i,e),Ge.setStatus(e?`${t[i]} map loaded.`:`${t[i]} map cleared.`)}catch(n){Ge.setStatus(`${t[i]} map failed: ${oa(n)}`,"error")}},onAmbientOcclusionModeChange:i=>{Fs.mode=i,Yt.setAmbientOcclusionMode(i)},onAmbientOcclusionParamChange:(i,e)=>{Fs[i]=e,Yt.setAmbientOcclusionParam(i,e)},onShadingParamChange:(i,e)=>{To[i]=e,Yt.setShadingParam(i,e)},onSoloNoisePlaneToggle:i=>{Yt.setSoloNoisePlane(i)}});Ge.setMicActive(!1);Ge.setRecordEnabled(Xo);Ge.setRecordState(!1);Ge.setPlayState(!1);Ge.setPlayEnabled(Et.hasLoadedFile());Et.hasLoadedFile()&&Ge.setStatus("Default track ready. Press Play.");const Oc=new uu;let Ar=60;function Co(i){Ia===0&&(Ia=i);const e=Math.max(0,i-Ia);Ia=i;const t=_g(yu);if(t>0){if(Na+=e,Na<t){window.requestAnimationFrame(Co);return}Na%=t}else Na=0;const n=Oc.getDelta(),a=Oc.elapsedTime,s=n>0?1/n:0;Ar+=(s-Ar)*.12;const r=Et.readFrequencyData(),o=bu.update(r);if(Yt.setAudioBands(o),Ge.setEnergy(o.level),Et.hasLoadedFile()&&Et.mode==="file"){const c=Vn.duration,l=Vn.currentTime,u=Number.isFinite(c)&&c>0&&Number.isFinite(l)?Math.max(0,Math.min(1,l/c)):0;Ge.setPlaybackProgress(u)}else Ge.setPlaybackProgress(0);Ge.setFps(Ar),Yt.render(n,a),window.requestAnimationFrame(Co)}const yg=()=>{Yt.resize()};window.addEventListener("resize",yg);Yt.resize();window.requestAnimationFrame(Co);
