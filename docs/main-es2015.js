(self["webpackChunkcsv_coding_assignment_2021"] = self["webpackChunkcsv_coding_assignment_2021"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 52720:
/*!****************************************!*\
  !*** ./src/app/app-routing.modules.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": function() { return /* binding */ routes; },
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-list/task-list.component */ 37955);
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-detail/task-detail.component */ 90417);





const routes = [
    { path: '', component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_0__.TaskListComponent },
    { path: `detail/:${_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_1__.TASK_ID_PARAM_KEY}`, component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_1__.TaskDetailComponent },
    { path: '**', redirectTo: '' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _K_Project_KhuongNM_csv_coding_assignment_angular_csv_coding_assignment_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 6849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.service */ 90254);





let AppComponent = class AppComponent {
    constructor(backend) {
        this.backend = backend;
        this.tasks = this.backend.tasks();
        this.users = this.backend.users();
    }
};
AppComponent.ctorParameters = () => [
    { type: _backend_service__WEBPACK_IMPORTED_MODULE_2__.BackendService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _K_Project_KhuongNM_csv_coding_assignment_angular_csv_coding_assignment_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _app_routing_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.modules */ 52720);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.service */ 90254);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ 95123);
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-detail/task-detail.component */ 90417);
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-list/task-list.component */ 37955);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
            _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__.TaskListComponent,
            _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__.TaskDetailComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_modules__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.NoopAnimationsModule,
        ],
        providers: [_backend_service__WEBPACK_IMPORTED_MODULE_2__.BackendService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 90254:
/*!************************************!*\
  !*** ./src/app/backend.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackendService": function() { return /* binding */ BackendService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 75428);




function randomDelay() {
    return Math.random() * 1000;
}
let BackendService = class BackendService {
    constructor() {
        this.storedTasks = [
            {
                id: 0,
                description: "Install a monitor arm",
                assigneeId: 111,
                completed: false
            },
            {
                id: 1,
                description: "Move the desk to the new location",
                assigneeId: 111,
                completed: false
            },
            {
                id: 2,
                description: "Mock Data",
                assigneeId: 222,
                completed: false
            }
        ];
        this.storedUsers = [
            { id: 111, name: "Mike" },
            { id: 222, name: "James" }
        ];
        this.lastId = 1;
        this.findTaskById = id => this.storedTasks.find(task => task.id === +id);
        this.findUserById = id => this.storedUsers.find(user => user.id === +id);
    }
    tasks() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.storedTasks).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(randomDelay()));
    }
    task(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.findTaskById(id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(randomDelay()));
    }
    users() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.storedUsers).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(randomDelay()));
    }
    user(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.findUserById(id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(randomDelay()));
    }
    newTask(payload) {
        const newTask = {
            id: ++this.lastId,
            description: payload.description,
            assigneeId: null,
            completed: false
        };
        this.storedTasks.push(newTask);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(newTask).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(randomDelay()));
    }
    assign(taskId, userId) {
        return this.update(taskId, { assigneeId: userId });
    }
    complete(taskId, completed) {
        return this.update(taskId, { completed });
    }
    update(taskId, updates) {
        const foundTask = this.findTaskById(taskId);
        if (!foundTask) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(new Error("task not found"));
        }
        const updatedTask = Object.assign(Object.assign({}, foundTask), updates);
        this.storedTasks = this.storedTasks.map(t => t.id === taskId ? updatedTask : t);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(updatedTask).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(randomDelay()));
    }
};
BackendService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], BackendService);



/***/ }),

/***/ 95123:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": function() { return /* binding */ MaterialModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);










const EXPORTED_MODULES = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_0__.MatCardModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInputModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelectModule,
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule
];
let MaterialModule = class MaterialModule {
};
MaterialModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        ],
        exports: [...EXPORTED_MODULES],
    })
], MaterialModule);



/***/ }),

/***/ 90417:
/*!******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TASK_ID_PARAM_KEY": function() { return /* binding */ TASK_ID_PARAM_KEY; },
/* harmony export */   "TaskDetailComponent": function() { return /* binding */ TaskDetailComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _K_Project_KhuongNM_csv_coding_assignment_angular_csv_coding_assignment_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_task_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./task-detail.component.html */ 44939);
/* harmony import */ var _task_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-detail.component.css */ 77814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 92597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 20088);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend.service */ 90254);










const TASK_ID_PARAM_KEY = 'taskId';
let TaskDetailComponent = class TaskDetailComponent {
    constructor(activatedRoute, backend, fb, snackBar) {
        this.backend = backend;
        this.fb = fb;
        this.snackBar = snackBar;
        this.isLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
        this.taskId = Number(activatedRoute.snapshot.paramMap.get(TASK_ID_PARAM_KEY));
        this.users$ = this.backend.users().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({ refCount: true, bufferSize: 1 }));
        this.form = this.initForm();
    }
    ngOnInit() {
        this.backend.task(this.taskId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe((value) => {
            if (value) {
                this.form.patchValue(value);
                this.isLoaded$.next(true);
            }
        });
    }
    updateTask() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.form.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)((payload) => {
            return this.backend.update(this.taskId, payload);
        })).subscribe(() => {
            this.snackBar.open("Updated new value!");
        });
    }
    initForm() {
        return this.fb.group({
            id: [0],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            assigneeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            completed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        });
    }
};
TaskDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _backend_service__WEBPACK_IMPORTED_MODULE_2__.BackendService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar }
];
TaskDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-task-detail',
        template: _K_Project_KhuongNM_csv_coding_assignment_angular_csv_coding_assignment_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_task_detail_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_task_detail_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TaskDetailComponent);



/***/ }),

/***/ 37955:
/*!**************************************************!*\
  !*** ./src/app/task-list/task-list.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskListComponent": function() { return /* binding */ TaskListComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _K_Project_KhuongNM_csv_coding_assignment_angular_csv_coding_assignment_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_task_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./task-list.component.html */ 5314);
/* harmony import */ var _task_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-list.component.css */ 99685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 42949);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backend.service */ 90254);







let TaskListComponent = class TaskListComponent {
    constructor(backend) {
        this.backend = backend;
        this.userUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.tasks$ = this.backend.tasks().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(tasks => {
            if (this.filterValue) {
                return tasks.filter(task => task.assigneeId === this.filterValue);
            }
            else {
                return tasks;
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.repeatWhen)(() => this.userUpdated$));
        this.users$ = this.backend.users();
    }
    getAssigneeName(assigneeId) {
        this.users$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(users => {
            users.find(u => u.id === assigneeId);
        }));
    }
    addNewTask() {
        this.backend.newTask({ description: this.description }).pipe().subscribe((value) => {
            this.userUpdated$.next(); // trigger reload list
            this.description = ''; // clear input
        });
    }
    trackByFunction(index, task) {
        return task.id;
    }
    filterChange(userId) {
        this.filterValue = userId;
        this.userUpdated$.next(); // trigger reload list
    }
};
TaskListComponent.ctorParameters = () => [
    { type: _backend_service__WEBPACK_IMPORTED_MODULE_2__.BackendService }
];
TaskListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-task-list',
        template: _K_Project_KhuongNM_csv_coding_assignment_angular_csv_coding_assignment_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_task_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_task_list_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], TaskListComponent);



/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 7435);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 61882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);



(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/reflect */ 61281);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es7/reflect */ 98347);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js */ 47761);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_2__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ 44939:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/task-detail/task-detail.component.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"title\">Task Detail</h2>\r\n<button mat-button color=\"warn\" routerLink=\"/\">Go Back</button>\r\n\r\n<ng-container *ngIf=\"isLoaded$ | async as task; else notFoundTask\">\r\n  <form (submit)=\"updateTask()\" class=\"form\" [formGroup]=\"form\">\r\n    <mat-form-field>\r\n      <mat-label>Description</mat-label>\r\n      <input\r\n        matInput\r\n        type=\"text\"\r\n        formControlName=\"description\"\r\n        name=\"description\"\r\n      />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field *ngIf=\"users$ | async as users\">\r\n      <mat-label>Select an user</mat-label>\r\n      <mat-select formControlName=\"assigneeId\">\r\n        <mat-option>None</mat-option>\r\n        <mat-option *ngFor=\"let option of users\" [value]=\"option.id\">\r\n          {{ option.name }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-checkbox color=\"primary\" formControlName=\"completed\" name=\"completed\">\r\n      Completed\r\n    </mat-checkbox>\r\n\r\n    <button type=\"submit\" mat-raised-button color=\"warn\">Save</button>\r\n  </form>\r\n</ng-container>\r\n\r\n<ng-template #notFoundTask>\r\n  <p>This task is not existed.</p>\r\n</ng-template>\r\n");

/***/ }),

/***/ 5314:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/task-list/task-list.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"title\">Task List</h2>\r\n\r\n<div class=\"filter\">\r\n  <mat-form-field *ngIf=\"users$ | async as users\">\r\n    <mat-label>Filter by user</mat-label>\r\n    <mat-select\r\n      [ngModel]=\"filterValue\"\r\n      name=\"filter\"\r\n      (ngModelChange)=\"filterChange($event)\"\r\n    >\r\n      <mat-option>All</mat-option>\r\n      <mat-option *ngFor=\"let option of users\" [value]=\"option.id\">\r\n        {{ option.name }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<ng-container\r\n  *ngFor=\"let task of tasks$ | async as tasks; trackBy: trackByFunction\"\r\n>\r\n  <div class=\"task-list\">\r\n    <mat-card class=\"task-list-item\" routerLink=\"detail/{{ task.id }}\">\r\n      <mat-card-title>Task {{ task.id }}</mat-card-title>\r\n      <mat-card-content>\r\n        <h4>{{ task.description }}</h4>\r\n        <h4 class=\"status\" [ngClass]=\"task.completed ? 'completed' : ''\">\r\n          {{ task.completed ? \"Done\" : \"Incomplete\" }}\r\n        </h4>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</ng-container>\r\n\r\n<form (submit)=\"addNewTask()\" class=\"form\">\r\n  <h3 class=\"title\">New Task</h3>\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-label>Description</mat-label>\r\n    <input matInput type=\"text\" [(ngModel)]=\"description\" name=\"description\" />\r\n  </mat-form-field>\r\n  <button type=\"submit\" mat-raised-button color=\"warn\">Add new task</button>\r\n</form>\r\n");

/***/ }),

/***/ 6849:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 77814:
/*!*******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.css ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = ":host {\n  display: block;\n  padding: 2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmIiwiZmlsZSI6InRhc2stZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAycmVtO1xufVxuIl19 */";

/***/ }),

/***/ 99685:
/*!***************************************************!*\
  !*** ./src/app/task-list/task-list.component.css ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = ":host {\n  display: block;\n  padding: 2rem;\n}\n\n.task-list {\n  margin-bottom: 2rem;\n}\n\n.task-list-item {\n  cursor: pointer;\n}\n\n.task-list-item:not(:last-of-type) {\n  margin-bottom: 1rem;\n}\n\n.status {\n  color: red;\n}\n\n.status.completed {\n  color: green;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoidGFzay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4udGFzay1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnRhc2stbGlzdC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhc2stbGlzdC1pdGVtOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zdGF0dXMge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3RhdHVzLmNvbXBsZXRlZCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbiJdfQ== */";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map