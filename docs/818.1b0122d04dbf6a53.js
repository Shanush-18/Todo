"use strict";(self.webpackChunktodo=self.webpackChunktodo||[]).push([[818],{4818:(F,u,r)=>{r.r(u),r.d(u,{TasksModule:()=>U});var c=r(6895),l=r(3393),t=r(8256);const C=function(e){return{category:e}},m=function(e){return{"background-color":e}};function M(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"div")(4,"span",4),t._uU(5),t.qZA()(),t.TgZ(6,"div",5)(7,"span",6),t._uU(8),t.qZA()()()(),t.BQk()),2&e){const n=s.$implicit;t.xp6(1),t.Q6J("routerLink",null==n?null:n.path)("queryParams",t.VKq(5,C,null==n?null:n.title)),t.xp6(3),t.Q6J("ngStyle",t.VKq(7,m,null==n?null:n.bgClr)),t.xp6(1),t.Oqu(null==n?null:n.icon),t.xp6(3),t.hij(" ",null==n?null:n.title," ")}}let h=(()=>{class e{constructor(){this.categories=[{id:1,title:"Work",path:"work",icon:"work",bgClr:"#FED049",type:"work"},{id:1,title:"Activity",path:"activity",icon:"directions_run",bgClr:"#FF8400",type:"activity"},{id:1,title:"Home",path:"home",icon:"home",bgClr:"#19376D",type:"home"},{id:1,title:"Entertainment",path:"entertainment",icon:"live_tv",bgClr:"#E21818",type:"entertainment"},{id:1,title:"Shopping",path:"shopping",icon:"shopping_cart",bgClr:"#FF5F9E",type:"shopping"},{id:1,title:"Travel",path:"travel",icon:"luggage",bgClr:"#1F8A70",type:"travel"}]}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["todo-tasks"]],decls:2,vars:1,consts:[[1,"task-wrapper","container-fluid"],[4,"ngFor","ngForOf"],[1,"category",3,"routerLink","queryParams"],[1,"card-content"],[1,"material-icons",3,"ngStyle"],[1,"my-2"],[1,"category-title"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.YNc(1,M,9,9,"ng-container",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",i.categories))},dependencies:[c.sg,c.PC,l.rH],styles:[".task-wrapper[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{width:165px;height:150px;margin:var(--padding-10);border-radius:var(--padding-10);background-color:#fff;display:inline-block;box-shadow:#0000000d 0 0 0 1px}.task-wrapper[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;cursor:pointer}.task-wrapper[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#fff;padding:var(--padding-10);border-radius:50%}.task-wrapper[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]{font-size:15px;font-weight:500;cursor:pointer}"]}),e})();var p=r(9300),_=r(590);let k=(()=>{class e{constructor(n){this.viewContainerRef=n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.s_b))},e.\u0275dir=t.lG2({type:e,selectors:[["","todoPlaceholder",""]]}),e})();var f=r(6012),a=r(433);const O=["form"];let P=(()=>{class e{constructor(n){this.todoservice=n,this.onClose=new t.vpe}ngOnInit(){this.id&&this.todoservice.getTask(this.id)?.pipe((0,p.h)(n=>!!n))?.subscribe(n=>{n&&this.ngForm?.setValue({title:n?.title,status:n?.status,startDate:n?.startDate,endDate:n?.endDate,description:n?.description})})}onSave(){this.id?this.todoservice.updateTask({...this.ngForm.value,type:this.task,id:this.id})?.subscribe(n=>{n&&this.onClose.emit(n)}):this.todoservice.addTask({...this.ngForm.value,type:this.task})?.subscribe(n=>{n&&this.onClose.emit(n)})}onCancel(){this.onClose.emit()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.w))},e.\u0275cmp=t.Xpm({type:e,selectors:[["todo-add-task"]],viewQuery:function(n,i){if(1&n&&t.Gf(O,5),2&n){let o;t.iGM(o=t.CRH())&&(i.ngForm=o.first)}},inputs:{task:"task",id:"id"},outputs:{onClose:"onClose"},decls:41,vars:5,consts:[[1,"todo-popup-back-drop"],[1,"add-task-wrapper"],["form","ngForm"],[1,"add-task-header","p-2"],[1,"m-0","fw-semibold","mx-1"],[1,"add-task-content"],[1,"row","m-3"],[1,"col-md-6","my-1","form-group"],["for","title"],["id","title","type","text","name","title","ngModel","",1,"form-control",3,"required"],[1,"col-md-6","my-1"],["for","Status"],["id","Status","name","status","ngModel","",1,"form-control",3,"required"],["value","Todo"],["value","In Progress"],["value","Completed"],["for","startdate"],["id","startdate","type","date","name","startDate","ngModel","",1,"form-control",3,"required"],["for","endDate"],["id","endDate","type","date","name","endDate","ngModel","",1,"form-control"],[1,"col-md-12"],["for","desc"],["id","desc","type","text","name","description","ngModel","",1,"form-control"],["align","end",1,"add-task-actions","add-task-footer","p-2"],[1,"secondary-btn",3,"click"],[1,"primary-btn",3,"disabled","click"]],template:function(n,i){if(1&n&&(t._UZ(0,"div",0),t.TgZ(1,"div")(2,"div",1)(3,"form",null,2)(5,"div",3)(6,"h5",4),t._uU(7),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"label",8),t._uU(12,"Title"),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",10)(15,"label",11),t._uU(16,"Status"),t.qZA(),t.TgZ(17,"select",12)(18,"option",13),t._uU(19,"Todo"),t.qZA(),t.TgZ(20,"option",14),t._uU(21,"In Progress"),t.qZA(),t.TgZ(22,"option",15),t._uU(23,"Completed"),t.qZA()()(),t.TgZ(24,"div",10)(25,"label",16),t._uU(26,"Start Date"),t.qZA(),t._UZ(27,"input",17),t.qZA(),t.TgZ(28,"div",10)(29,"label",18),t._uU(30,"End Date"),t.qZA(),t._UZ(31,"input",19),t.qZA(),t.TgZ(32,"div",20)(33,"label",21),t._uU(34,"Description"),t.qZA(),t._UZ(35,"textarea",22),t.qZA()()(),t.TgZ(36,"div",23)(37,"button",24),t.NdJ("click",function(){return i.onCancel()}),t._uU(38," Cancel "),t.qZA(),t.TgZ(39,"button",25),t.NdJ("click",function(){return i.onSave()}),t._uU(40," Save "),t.qZA()()()()()),2&n){const o=t.MAs(4);t.xp6(7),t.hij(" ",i.id?"Update":"Add"," Task"),t.xp6(6),t.Q6J("required",!0),t.xp6(4),t.Q6J("required",!0),t.xp6(10),t.Q6J("required",!0),t.xp6(12),t.Q6J("disabled",null==o?null:o.invalid)}},dependencies:[a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.Q7,a.On,a.F],styles:[".todo-popup-back-drop[_ngcontent-%COMP%]{position:fixed;background-color:#00000081;top:0;left:0;width:100vw;height:100vh;z-index:50}.add-task-wrapper[_ngcontent-%COMP%]{position:fixed;background-color:#fff;width:53vw;min-height:52vh;max-height:80vh;overflow:auto;z-index:51;left:25vw;border-radius:10px}.add-task-header[_ngcontent-%COMP%]{border-bottom:1px solid #e0dfdf;position:sticky;top:0;background:#fff}.add-task-footer[_ngcontent-%COMP%]{position:sticky;bottom:0;background:#fff;border-top:1px solid #ebebeb}"]}),e})();function v(e,s){}function x(e,s){if(1&e&&(t.TgZ(0,"span"),t._uU(1,"End Date:"),t.TgZ(2,"span",20),t._uU(3),t.ALo(4,"date"),t.qZA()()),2&e){const n=t.oxw().$implicit;t.xp6(3),t.Oqu(t.lcZ(4,1,null==n?null:n.endDate))}}const T=function(e,s,n){return{todo:e,"in-progress":s,completed:n}};function b(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",13)(1,"span",14),t.NdJ("click",function(){const d=t.CHM(n).$implicit,g=t.oxw(2);return t.KtG(g.onDelete(null==d?null:d.id))}),t._uU(2,"delete"),t.qZA(),t.TgZ(3,"div",15)(4,"div",16)(5,"h5")(6,"a",7),t.NdJ("click",function(){const d=t.CHM(n).$implicit,g=t.oxw(2);return t.KtG(g.addTask(null==d?null:d.id))}),t._uU(7),t.qZA()(),t.TgZ(8,"span",17),t._UZ(9,"span",18),t._uU(10),t.qZA()(),t.TgZ(11,"div",19)(12,"p"),t._uU(13),t.qZA(),t._uU(14," Start Date:"),t.TgZ(15,"span",20),t._uU(16),t.ALo(17,"date"),t.qZA(),t._uU(18,"\xa0 "),t.YNc(19,x,5,3,"span",21),t.qZA()()()}if(2&e){const n=s.$implicit;t.xp6(7),t.Oqu(null==n?null:n.title),t.xp6(1),t.Q6J("ngClass",t.kEZ(8,T,"Todo"===(null==n?null:n.status),"In Progress"===(null==n?null:n.status),"Completed"===(null==n?null:n.status))),t.xp6(2),t.Oqu(null==n?null:n.status),t.xp6(3),t.Oqu(null==n?null:n.description),t.xp6(3),t.Oqu(t.lcZ(17,6,null==n?null:n.startDate)),t.xp6(3),t.Q6J("ngIf",n.endDate)}}function y(e,s){if(1&e&&(t.ynx(0),t.YNc(1,b,20,12,"div",12),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.tasks)}}function w(e,s){if(1&e&&(t.TgZ(0,"div",22)(1,"h5"),t._uU(2),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.hij("No ",n.title," Todos")}}const Z=[{path:"",component:h},{path:":task",component:(()=>{class e{constructor(n,i){this.activatedRoute=n,this.todoService=i,this.tasks=[],this.activatedRoute.queryParams.pipe((0,p.h)(o=>!!o),(0,_.P)()).subscribe(o=>{o&&(this.title=o.category)}),this.activatedRoute.params.pipe((0,p.h)(o=>!!o),(0,_.P)()).subscribe(o=>{o&&(this.task=o.task)})}ngOnInit(){this.getTasks()}addTask(n){const i=this.addTaskHost?.viewContainerRef;i?.clear();const o=i?.createComponent(P);o.instance.task=this.task,o.instance.id=n,o.instance.onClose.subscribe(d=>{d&&this.getTasks(),i.clear()})}getTasks(){this.todoService?.getTasks(this.task)?.subscribe(n=>{n&&(this.tasks=n)})}onDelete(n){this.todoService?.deleteTask(n)?.subscribe(i=>{i&&this.getTasks()})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz),t.Y36(f.w))},e.\u0275cmp=t.Xpm({type:e,selectors:[["todo-task-list"]],viewQuery:function(n,i){if(1&n&&t.Gf(k,5),2&n){let o;t.iGM(o=t.CRH())&&(i.addTaskHost=o.first)}},decls:17,vars:3,consts:[["todoPlaceholder",""],[1,"container-fluid","g-0","task-list"],[1,"task-list-wrapper"],[1,"title-wrapper","d-flex","align-items-center","justify-content-between"],[1,"d-flex","align-items-center"],[1,"material-icons","filled-bg-icon"],[1,"m-0"],[3,"click"],[1,"material-icons"],[1,"row","pt-3",2,"background","#fff","margin","0"],[4,"ngIf","ngIfElse"],["noTodos",""],["class","col-md-12 position-relative",4,"ngFor","ngForOf"],[1,"col-md-12","position-relative"],[1,"material-icons","delete-todo",3,"click"],[1,"m-2","mx-3","task-card"],[1,"title-header","d-flex","align-items-center","justify-content-between"],[1,"status",3,"ngClass"],[1,"dot"],[1,"task-content"],[1,"task-date"],[4,"ngIf"],[1,"d-flex","align-items-center","justify-content-center","h-30"]],template:function(n,i){if(1&n&&(t.YNc(0,v,0,0,"ng-template",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5),t._uU(6,"home"),t.qZA(),t.TgZ(7,"h6",6),t._uU(8),t.qZA()(),t.TgZ(9,"div")(10,"button",7),t.NdJ("click",function(){return i.addTask()}),t.TgZ(11,"span",8),t._uU(12,"add"),t.qZA()()()(),t.TgZ(13,"div",9),t.YNc(14,y,2,1,"ng-container",10),t.YNc(15,w,3,1,"ng-template",null,11,t.W1O),t.qZA()()()),2&n){const o=t.MAs(16);t.xp6(8),t.Oqu(i.title),t.xp6(6),t.Q6J("ngIf",(null==i.tasks?null:i.tasks.length)>0)("ngIfElse",o)}},dependencies:[c.mk,c.sg,c.O5,k,c.uU],styles:[".task-list[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]{border-radius:10px;border:1px solid #f3f3f3;box-shadow:#0000000d 0 0 0 1px}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px 10px 0 0;padding:10px;font-weight:500;border-bottom:.5px solid rgb(219,219,221)}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--primary-base);border-radius:50%;height:22px;width:22px;display:flex;align-items:center;justify-content:center;border:none}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:20px;color:#fff;padding:5px}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:5px;font-size:14px;border:1px solid rgba(178,192,205,.4196078431)}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .title-header[_ngcontent-%COMP%]{border-bottom:1px solid #eaeff5;padding:10px 10px 7px}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .title-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer;color:#238add}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .task-content[_ngcontent-%COMP%]{padding:var(--padding-10)}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .task-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:inherit!important;margin-bottom:5px!important}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .task-content[_ngcontent-%COMP%]   .task-date[_ngcontent-%COMP%]{font-weight:600;font-size:13px;color:#2a2a49;background:#f5f5f5;padding:0 7px;border-radius:3px}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{padding:0 10px;font-weight:600;height:24px;position:relative;display:flex;align-items:center;border-radius:20px}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:8px;width:8px;border-radius:10px;margin-right:5px}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .status.todo[_ngcontent-%COMP%]{color:#fd3807;background-color:#fd380730}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .status.todo[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{background:#fd3807}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .status.in-progress[_ngcontent-%COMP%]{color:#e4af10;background-color:#e4af1030}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .status.in-progress[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{background:#e4af10}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .status.completed[_ngcontent-%COMP%]{color:#1f8a70;background-color:#1f8a7030}.task-list[_ngcontent-%COMP%]   .task-list-wrapper[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .status.completed[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{background:#1F8A70}.task-list[_ngcontent-%COMP%]   .delete-todo[_ngcontent-%COMP%]{position:absolute;right:20px;top:-2px;font-size:16px;background:#fff;border:1px solid #ddd9d9;padding:2px;border-radius:50%;color:red;cursor:pointer}"]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(Z),l.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez]}),e})(),U=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,A,q,a.u5]}),e})()}}]);