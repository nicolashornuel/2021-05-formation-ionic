(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{dTEF:function(e,t,n){"use strict";var i,s,o;n.d(t,"c",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o}),function(e){e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS"}(i||(i={})),function(e){e.Rear="REAR",e.Front="FRONT"}(s||(s={})),function(e){e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl"}(o||(o={}))},yIOV:function(e,t,n){"use strict";n.r(t),n.d(t,"FolderPageModule",function(){return Y});var i=n("ofXK"),s=n("3Pt+"),o=n("TEn/"),c=n("tyNb"),r=n("fXoL"),a=n("LRne"),l=n("lJxs"),b=n("vkgz"),p=n("tk/3");let u=(()=>{class e{constructor(e){this.http=e,this.urlBack="https://devfest-nantes-2018-api.cleverapps.io/"}listerSessions(){return this.sessionsCache?Object(a.a)(this.sessionsCache):this.http.get(`${this.urlBack}sessions`).pipe(Object(l.a)(e=>{const t=[];for(let n in e)t.push(e[n]);return t}),Object(b.a)(e=>this.sessionsCache=e))}getSchedule(){return this.schedulesCache?Object(a.a)(this.schedulesCache):this.http.get(`${this.urlBack}schedule`).pipe(Object(l.a)(e=>this.schedulesCache=e))}getSpeakers(){return this.speakersCache?Object(a.a)(this.speakersCache):this.http.get(`${this.urlBack}speakers`).pipe(Object(l.a)(e=>this.speakersCache=e))}getSessions(){return this.http.get(`${this.urlBack}sessions`)}getBlog(){return this.http.get(`${this.urlBack}blog`)}getPartners(){return this.http.get(`${this.urlBack}partners`)}getTeam(){return this.http.get(`${this.urlBack}team`)}getDb(){return this.http.get(`${this.urlBack}db`)}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(p.a))},e.\u0275prov=r.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function f(e,t){if(1&e){const e=r.Ob();r.Nb(0,"ion-chip",6),r.Nb(1,"ion-label",7),r.Vb("click",function(){r.gc(e);const n=t.$implicit;return r.Xb(3).openSession(n)}),r.kc(2),r.Mb(),r.Mb()}if(2&e){const e=t.$implicit;r.Ab(2),r.mc("",e," ")}}function h(e,t){if(1&e&&(r.Nb(0,"ion-item",4),r.kc(1),r.jc(2,f,3,1,"ion-chip",5),r.Mb()),2&e){const e=t.$implicit;r.Ab(1),r.nc(" ",e.startTime," - ",e.endTime," "),r.Ab(1),r.cc("ngForOf",e.sessions)}}function d(e,t){if(1&e&&(r.Nb(0,"ion-list"),r.Nb(1,"ion-item",1),r.Nb(2,"ion-label"),r.kc(3),r.Yb(4,"date"),r.Mb(),r.Mb(),r.Nb(5,"ion-item",2),r.Nb(6,"ion-label",1),r.kc(7,"Start - End"),r.Mb(),r.Nb(8,"ion-label",1),r.kc(9,"Sessions"),r.Mb(),r.Mb(),r.jc(10,h,3,3,"ion-item",3),r.Mb()),2&e){const e=t.$implicit;r.Ab(3),r.mc(" ",r.Zb(4,2,e.date,"EEEE d MMMM y")," "),r.Ab(7),r.cc("ngForOf",e.timeslots)}}let g=(()=>{class e{constructor(e,t){this.devfestnantesService=e,this.router=t,this.schedules=[]}ngOnInit(){this.initializeData()}initializeData(){this.devfestnantesService.getSchedule().subscribe({next:e=>this.schedules=e,error:e=>console.log(e),complete:()=>console.log("Array Schedules done")})}openSession(e){this.router.navigate(["folder/detail session"],{fragment:e[0].toString()})}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(u),r.Kb(c.g))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-schedule"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["color","primary"],["lines","full"],["lines","inset",4,"ngFor","ngForOf"],["lines","inset"],["size","small",4,"ngFor","ngForOf"],["size","small"],[3,"click"]],template:function(e,t){1&e&&r.jc(0,d,11,5,"ion-list",0),2&e&&r.cc("ngForOf",t.schedules)},directives:[i.i,o.s,o.q,o.r,o.j],pipes:[i.d],styles:[""]}),e})();function m(e,t){if(1&e){const e=r.Ob();r.Nb(0,"ion-list",1),r.Nb(1,"ion-item",2),r.Vb("click",function(){r.gc(e);const n=t.$implicit;return r.Xb().showDetail(n.id)}),r.Nb(2,"p"),r.kc(3),r.Mb(),r.Nb(4,"ion-label"),r.kc(5),r.Mb(),r.Lb(6,"ion-icon",3),r.Mb(),r.Mb()}if(2&e){const e=t.$implicit;r.Ab(3),r.lc(e.id),r.Ab(2),r.mc(" - ",e.title,"")}}let k=(()=>{class e{constructor(e,t){this.devfestnantesService=e,this.router=t,this.sessions=[]}ngOnInit(){this.initializeData()}initializeData(){this.devfestnantesService.listerSessions().subscribe(e=>this.sessions=e)}showDetail(e){this.router.navigate(["folder/detail session"],{fragment:e.toString()})}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(u),r.Kb(c.g))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-session"]],decls:1,vars:1,consts:[["lines","inset",4,"ngFor","ngForOf"],["lines","inset"],["button","",3,"click"],["slot","end","name","chevron-forward-outline"]],template:function(e,t){1&e&&r.jc(0,m,7,2,"ion-list",0),2&e&&r.cc("ngForOf",t.sessions)},directives:[i.i,o.s,o.q,o.r,o.o],styles:[""]}),e})();function M(e,t){if(1&e){const e=r.Ob();r.Nb(0,"ion-list",1),r.Nb(1,"ion-item",2),r.Vb("click",function(){r.gc(e);const n=t.$implicit;return r.Xb().showDetail(n.id)}),r.Nb(2,"p"),r.kc(3),r.Mb(),r.Nb(4,"ion-label"),r.kc(5),r.Mb(),r.Lb(6,"ion-icon",3),r.Mb(),r.Mb()}if(2&e){const e=t.$implicit;r.Ab(3),r.lc(e.id),r.Ab(2),r.mc(" - ",e.name,"")}}let v=(()=>{class e{constructor(e,t){this.devfestnantesService=e,this.router=t,this.speakers=[]}ngOnInit(){this.initializeData()}initializeData(){this.devfestnantesService.getSpeakers().subscribe({next:e=>{for(const t in e)this.speakers.push(e[t])},error:e=>console.log(e),complete:()=>console.log("Object Speakers done")})}showDetail(e){this.router.navigate(["folder/detail speaker"],{fragment:e.toString()})}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(u),r.Kb(c.g))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-speaker"]],decls:1,vars:1,consts:[["lines","inset",4,"ngFor","ngForOf"],["lines","inset"],["button","",3,"click"],["slot","end","name","chevron-forward-outline"]],template:function(e,t){1&e&&r.jc(0,M,7,2,"ion-list",0),2&e&&r.cc("ngForOf",t.speakers)},directives:[i.i,o.s,o.q,o.r,o.o],styles:[""]}),e})();var N=n("mrSG"),y=n("b0Oa"),O=n("FUe0"),I=n("dTEF");const j=Object(O.c)("Camera",{web:()=>n.e(14).then(n.bind(null,"wzPO")).then(e=>new e.CameraWeb)});let A=(()=>{class e{constructor(){}takePicture(){return Object(N.a)(this,void 0,void 0,function*(){return(yield j.getPhoto({quality:90,allowEditing:!0,resultType:I.b.Uri,source:I.c.Camera})).webPath})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const S=["input"];function C(e,t){if(1&e&&(r.Nb(0,"ion-card-subtitle"),r.kc(1),r.Mb()),2&e){const e=r.Xb();r.Ab(1),r.nc("Session n\xb0",e.session.id," : ",e.session.title," ")}}function w(e,t){if(1&e&&(r.Nb(0,"ion-card-subtitle"),r.kc(1),r.Mb()),2&e){const e=t.$implicit;r.Ab(1),r.nc(" Speaker n\xb0",e.id," : ",e.name," ")}}function F(e,t){if(1&e&&r.Lb(0,"ion-img",14),2&e){const e=r.Xb();r.cc("src",e.myImage)}}let P=(()=>{class e{constructor(e,t,n,i){this.filesystemService=e,this.cameraService=t,this.modalController=n,this.toastController=i,this.myImage=null}ngOnInit(){}makeSomeNote(){let e=this.input.value+"_src_"+this.myImage;console.log(e),this.filesystemService.set(e),this.presentToast()}dismiss(){this.modalController.dismiss({dismissed:!0})}presentToast(){return Object(N.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"Your note have been saved.",duration:2e3})).present(),this.dismiss()})}takePicture(){this.cameraService.takePicture().then(e=>this.myImage=e)}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(y.a),r.Kb(A),r.Kb(o.I),r.Kb(o.L))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-modal-note"]],viewQuery:function(e,t){if(1&e&&r.oc(S,1),2&e){let e;r.fc(e=r.Wb())&&(t.input=e.first)}},inputs:{session:"session",speakers:"speakers"},decls:22,vars:3,consts:[["translucent",""],["slot","end"],[3,"click"],["name","close-outline"],["fullscreen",""],[4,"ngIf"],[4,"ngFor","ngForOf"],["position","floating"],["autoGrow","","cols","10"],["input",""],[3,"src",4,"ngIf"],[1,"ion-text-center"],["name","save-outline"],["name","camera-outline"],[3,"src"]],template:function(e,t){1&e&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar"),r.Nb(2,"ion-title"),r.kc(3,"Create a note"),r.Mb(),r.Nb(4,"ion-buttons",1),r.Nb(5,"ion-button",2),r.Vb("click",function(){return t.dismiss()}),r.Lb(6,"ion-icon",3),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(7,"ion-content",4),r.Nb(8,"ion-card-header"),r.jc(9,C,2,2,"ion-card-subtitle",5),r.jc(10,w,2,2,"ion-card-subtitle",6),r.Mb(),r.Nb(11,"ion-item"),r.Nb(12,"ion-label",7),r.kc(13,"Write here"),r.Mb(),r.Lb(14,"ion-textarea",8,9),r.Mb(),r.jc(16,F,1,1,"ion-img",10),r.Nb(17,"div",11),r.Nb(18,"ion-button",2),r.Vb("click",function(){return t.makeSomeNote()}),r.Lb(19,"ion-icon",12),r.Mb(),r.Nb(20,"ion-button",2),r.Vb("click",function(){return t.takePicture()}),r.Lb(21,"ion-icon",13),r.Mb(),r.Mb(),r.Mb()),2&e&&(r.Ab(9),r.cc("ngIf",t.session),r.Ab(1),r.cc("ngForOf",t.speakers),r.Ab(6),r.cc("ngIf",t.myImage))},directives:[o.n,o.F,o.E,o.e,o.d,o.o,o.l,o.g,i.j,i.i,o.q,o.r,o.D,o.K,o.h,o.p],styles:[""]}),e})();function L(e,t){1&e&&r.Lb(0,"ion-progress-bar",2)}function E(e,t){if(1&e&&r.Lb(0,"img",10),2&e){const e=r.Xb(2);r.dc("src","https://devfest2018.gdgnantes.com/",e.session.image,"",r.hc)}}function K(e,t){if(1&e){const e=r.Ob();r.Nb(0,"ion-chip"),r.Nb(1,"ion-label",13),r.Vb("click",function(){r.gc(e);const t=r.Xb().$implicit;return r.Xb(2).openSpeaker(t.id)}),r.kc(2),r.Mb(),r.Mb()}if(2&e){const e=r.Xb().$implicit;r.Ab(2),r.mc("",e.id," ")}}function $(e,t){if(1&e&&r.Lb(0,"img",14),2&e){const e=r.Xb().$implicit;r.dc("src","https://devfest2018.gdgnantes.com/",e.photoUrl,"",r.hc)}}function x(e,t){if(1&e&&(r.Nb(0,"ion-item"),r.jc(1,K,3,1,"ion-chip",1),r.Nb(2,"ion-label",11),r.kc(3),r.Mb(),r.jc(4,$,1,1,"img",12),r.Mb()),2&e){const e=t.$implicit;r.Ab(1),r.cc("ngIf",e.id),r.Ab(2),r.lc(e.name),r.Ab(1),r.cc("ngIf",e.photoUrl)}}function X(e,t){if(1&e){const e=r.Ob();r.Nb(0,"ion-content"),r.Nb(1,"ion-item",3),r.Lb(2,"ion-back-button",4),r.Nb(3,"ion-label",5),r.kc(4),r.Mb(),r.Nb(5,"ion-button",6),r.Vb("click",function(){return r.gc(e),r.Xb().presentModal()}),r.kc(6,"Note"),r.Mb(),r.Mb(),r.jc(7,E,1,1,"img",7),r.Nb(8,"ion-grid"),r.Nb(9,"ion-row"),r.Nb(10,"ion-col"),r.Nb(11,"div",8),r.Nb(12,"ion-card-header"),r.Nb(13,"ion-card-subtitle"),r.kc(14),r.Mb(),r.Nb(15,"ion-card-title"),r.kc(16),r.Mb(),r.Mb(),r.Nb(17,"ion-card-content"),r.kc(18),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.jc(19,x,5,3,"ion-item",9),r.Mb()}if(2&e){const e=r.Xb();r.Ab(4),r.mc("Session n\xb0",e.session.id,""),r.Ab(3),r.cc("ngIf",e.session.image),r.Ab(7),r.lc(e.session.type),r.Ab(2),r.lc(e.session.title),r.Ab(2),r.lc(e.session.description),r.Ab(1),r.cc("ngForOf",e.speakers)}}let z=(()=>{class e{constructor(e,t,n,i){this.devfestnantesService=e,this.route=t,this.router=n,this.modalController=i,this.loading=!0,this.speakers=[]}ngOnInit(){this.checkRoute()}checkRoute(){this.route.fragment.subscribe(e=>this.initializeOnly(e))}initializeOnly(e){const t=this.devfestnantesService.getSessions().toPromise(),n=this.devfestnantesService.getSpeakers().toPromise();Promise.all([t,n]).then(t=>{const n=t[0],i=t[1];for(const s in n)s==e&&(this.session=n[s]);if(this.session.speakers)for(const e in i)this.session.speakers.forEach(t=>{+e==t&&this.speakers.push(i[e])});else this.speakers=[];this.loading=!1})}openSpeaker(e){this.router.navigate(["folder/detail speaker"],{fragment:e.toString()})}presentModal(){return Object(N.a)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:P,componentProps:{session:this.session,speakers:this.speakers}});return yield e.present()})}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(u),r.Kb(c.a),r.Kb(c.g),r.Kb(o.I))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-session-detail"]],decls:2,vars:2,consts:[["type","indeterminate",4,"ngIf"],[4,"ngIf"],["type","indeterminate"],["lines","full"],["defaultHref","/"],["color","primary"],["color","primary",3,"click"],[3,"src",4,"ngIf"],[1,"ion-text-start"],[4,"ngFor","ngForOf"],[3,"src"],["color","secondary"],["style","height: 40px",3,"src",4,"ngIf"],[3,"click"],[2,"height","40px",3,"src"]],template:function(e,t){1&e&&(r.jc(0,L,1,0,"ion-progress-bar",0),r.jc(1,X,20,6,"ion-content",1)),2&e&&(r.cc("ngIf",t.loading),r.Ab(1),r.cc("ngIf",!t.loading))},directives:[i.j,o.y,o.l,o.q,o.b,o.c,o.r,o.d,o.m,o.A,o.k,o.g,o.h,o.i,o.f,i.i,o.j],styles:[""]}),e})();function D(e,t){1&e&&r.Lb(0,"ion-progress-bar",2)}function R(e,t){if(1&e&&r.Lb(0,"img",10),2&e){const e=r.Xb(2);r.dc("src","https://devfest2018.gdgnantes.com/",e.speaker.companyLogo,"",r.hc)}}function T(e,t){if(1&e&&r.Lb(0,"img",11),2&e){const e=r.Xb(2);r.dc("src","https://devfest2018.gdgnantes.com/",e.speaker.photoUrl,"",r.hc)}}function B(e,t){if(1&e){const e=r.Ob();r.Nb(0,"ion-content"),r.Nb(1,"ion-item",3),r.Lb(2,"ion-back-button",4),r.Nb(3,"ion-label",5),r.kc(4),r.Mb(),r.Nb(5,"ion-button",6),r.Vb("click",function(){return r.gc(e),r.Xb().presentModal()}),r.kc(6,"Note"),r.Mb(),r.Mb(),r.Nb(7,"ion-grid"),r.Nb(8,"ion-row"),r.Nb(9,"ion-col"),r.Nb(10,"div",7),r.Nb(11,"ion-card-header"),r.jc(12,R,1,1,"img",8),r.Nb(13,"ion-card-subtitle"),r.kc(14),r.Mb(),r.Nb(15,"ion-card-title"),r.kc(16),r.Mb(),r.Mb(),r.jc(17,T,1,1,"img",9),r.Nb(18,"ion-card-content"),r.kc(19),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()}if(2&e){const e=r.Xb();r.Ab(4),r.mc("Speaker n\xb0",e.speaker.id,""),r.Ab(8),r.cc("ngIf",e.speaker.companyLogo),r.Ab(2),r.nc("Company : ",e.speaker.company," - Country : ",e.speaker.country,""),r.Ab(2),r.lc(e.speaker.name),r.Ab(1),r.cc("ngIf",e.speaker.photoUrl),r.Ab(2),r.mc("Description : ",e.speaker.bio,"")}}let V=(()=>{class e{constructor(e,t,n){this.devfestnantesService=e,this.route=t,this.modalController=n,this.loading=!0}ngOnInit(){this.checkRoute()}checkRoute(){this.route.fragment.subscribe(e=>this.initializeOnly(e))}initializeOnly(e){this.devfestnantesService.getSpeakers().subscribe(t=>{for(const n in t)n==e&&(this.speaker=t[n]);this.loading=!1})}presentModal(){return Object(N.a)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:P,componentProps:{speakers:[this.speaker]}});return yield e.present()})}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(u),r.Kb(c.a),r.Kb(o.I))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-speaker-detail"]],decls:2,vars:2,consts:[["type","indeterminate",4,"ngIf"],[4,"ngIf"],["type","indeterminate"],["lines","full"],["defaultHref","/"],["color","primary"],["color","primary",3,"click"],[1,"ion-text-center"],["style","height: 40px",3,"src",4,"ngIf"],["style","height: 300px",3,"src",4,"ngIf"],[2,"height","40px",3,"src"],[2,"height","300px",3,"src"]],template:function(e,t){1&e&&(r.jc(0,D,1,0,"ion-progress-bar",0),r.jc(1,B,20,7,"ion-content",1)),2&e&&(r.cc("ngIf",t.loading),r.Ab(1),r.cc("ngIf",!t.loading))},directives:[i.j,o.y,o.l,o.q,o.b,o.c,o.r,o.d,o.m,o.A,o.k,o.g,o.h,o.i,o.f],styles:[""]}),e})();function _(e,t){1&e&&r.Lb(0,"app-schedule",6)}function U(e,t){1&e&&r.Lb(0,"app-session",6)}function q(e,t){1&e&&r.Lb(0,"app-speaker",6)}function G(e,t){1&e&&r.Lb(0,"app-session-detail",6)}function H(e,t){1&e&&r.Lb(0,"app-speaker-detail",6)}const J=[{path:"",component:(()=>{class e{constructor(e,t){this.activatedRoute=e,this.devfestnantesService=t}ngOnInit(){this.folder=this.activatedRoute.snapshot.paramMap.get("id")}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(c.a),r.Kb(u))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-folder"]],decls:16,vars:9,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container",4,"ngIf"],["id","container"]],template:function(e,t){1&e&&(r.Nb(0,"ion-header",0),r.Nb(1,"ion-toolbar"),r.Nb(2,"ion-buttons",1),r.Lb(3,"ion-menu-button"),r.Mb(),r.Nb(4,"ion-title"),r.kc(5),r.Mb(),r.Mb(),r.Mb(),r.Nb(6,"ion-content",2),r.Nb(7,"ion-header",3),r.Nb(8,"ion-toolbar"),r.Nb(9,"ion-title",4),r.kc(10),r.Mb(),r.Mb(),r.Mb(),r.jc(11,_,1,0,"app-schedule",5),r.jc(12,U,1,0,"app-session",5),r.jc(13,q,1,0,"app-speaker",5),r.jc(14,G,1,0,"app-session-detail",5),r.jc(15,H,1,0,"app-speaker-detail",5),r.Mb()),2&e&&(r.cc("translucent",!0),r.Ab(5),r.lc(t.folder),r.Ab(1),r.cc("fullscreen",!0),r.Ab(4),r.lc(t.folder),r.Ab(1),r.cc("ngIf","schedule"==t.folder),r.Ab(1),r.cc("ngIf","session"==t.folder),r.Ab(1),r.cc("ngIf","speaker"==t.folder),r.Ab(1),r.cc("ngIf","detail session"==t.folder),r.Ab(1),r.cc("ngIf","detail speaker"==t.folder))},directives:[o.n,o.F,o.e,o.v,o.E,o.l,i.j,g,k,v,z,V],styles:["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{text-align:center;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})()},{path:"schedule",component:g},{path:"session",component:k},{path:"detail session",component:z},{path:"speaker",component:v},{path:"detail speaker",component:V}];let W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({imports:[[c.j.forChild(J)],c.j]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({imports:[[i.b,s.a,o.G,W]]}),e})()}}]);