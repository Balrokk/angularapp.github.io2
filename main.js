(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Отвечает за переключение компонентов (м-ду таблицей и профилем)
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.changeUserId = null;
        this.openProfileFlag = false;
    }
    // Открываем профиль (форму)
    AppComponent.prototype.openProfile = function (userId) {
        if (userId === void 0) { userId = null; }
        this.changeUserId = userId;
        this.openProfileFlag = true;
    };
    // Закрываем профиль (форму)
    AppComponent.prototype.closeProfile = function () {
        this.openProfileFlag = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12\" *ngIf=\"!openProfileFlag\">\n                    <h1>\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438</h1>\n                    <button type=\"button\" class=\"btn btn-success mb-2\" (click)=\"openProfile()\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n                    <app-list (changeUserProfile)=\"openProfile($event)\"></app-list>\n                </div>\n                <div class=\"col-12\" *ngIf=\"openProfileFlag\">\n                    <h1>\u041F\u0440\u043E\u0444\u0438\u043B\u044C</h1>\n                    <app-accaunt (closeProfile)=\"closeProfile()\" [userId]=\"changeUserId\"></app-accaunt>\n                </div>\n\n            </div>\n        </div>\n\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [
                _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tg {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 0 0 3em 0;\r\n    padding: 0;\r\n    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);\r\n}\r\n.tg .tg-row {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\n.tg .tg-row .tg-cell {\r\n    box-sizing: border-box;\r\n    flex-grow: 1;\r\n    padding: 0.8em 1.2em;\r\n    overflow: hidden;\r\n    list-style: none;\r\n}\r\n.tg-cell {\r\n    border-top: 1px solid #d4d4d4;\r\n}\r\n.tg .tg-row .tg-cell.column-heading {\r\n    background-color: #43bac0;\r\n    color: white;\r\n    padding: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx3Q0FBd0M7Q0FDM0M7QUFDRDtJQUNJLFlBQVk7SUFDWixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSw4QkFBOEI7Q0FDakM7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogMCAwIDNlbSAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4udGcgLnRnLXJvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnRnIC50Zy1yb3cgLnRnLWNlbGwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDEuMmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi50Zy1jZWxsIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG59XHJcblxyXG4udGcgLnRnLXJvdyAudGctY2VsbC5jb2x1bW4taGVhZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNiYWMwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tg\">\n    <div class=\"tg-row\">\n        <div class=\"tg-cell column-heading\" [ngStyle]=\"{width: '10%'}\">#</div>\n        <div class=\"tg-cell column-heading\" [ngStyle]=\"{width: '30%'}\">Имя Фамилия Отчество</div>\n        <div class=\"tg-cell column-heading\" [ngStyle]=\"{width: '20%'}\">Должность</div>\n        <div class=\"tg-cell column-heading\" [ngStyle]=\"{width: '20%'}\">Дата рождения</div>\n        <div class=\"tg-cell column-heading\" [ngStyle]=\"{width: '10%'}\">Статус</div>\n        <div class=\"tg-cell column-heading\" [ngStyle]=\"{width: '10%'}\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> add</div>\n    </div>\n\n    <div class=\"tg-row\" *ngFor=\"let user of users | async;let i = index\">\n        <div class=\"tg-cell\" [ngStyle]=\"{width: '10%'}\">{{i+1}}</div>\n        <div class=\"tg-cell\" [ngStyle]=\"{width: '30%'}\">{{user.firstName}} {{user.secondName}} {{user.lastName}}</div>\n        <div class=\"tg-cell\" [ngStyle]=\"{width: '20%'}\">{{user.role}}</div>\n        <div class=\"tg-cell\" [ngStyle]=\"{width: '20%'}\">{{user.dateBorn | date:\"dd-MM-yyyy\"}}</div>\n        <div class=\"tg-cell\" [ngStyle]=\"{width: '10%'}\">{{user.statusWork}}</div>\n        <div class=\"tg-cell\" [ngStyle]=\"{width: '10%'}\">\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                <i class=\"fa fa-address-card-o btn btn-primary\" (click)=\"openInfoUser(user.id)\"></i>\n                <i class=\"fa fa-trash-o btn btn-danger\" (click)=\"deleteUser(user.id)\"></i>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(dataService) {
        this.dataService = dataService;
        this.changeUserProfile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.users = this.dataService.userList;
    }
    ListComponent.prototype.openInfoUser = function (userId) {
        // выходное событие с ID пользователя
        this.changeUserProfile.emit(userId);
    };
    ListComponent.prototype.deleteUser = function (userId) {
        this.dataService.deleteUser(userId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ListComponent.prototype, "changeUserProfile", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\">\r\n    <div class=\"form-group\">\r\n        <label>Фамилия</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"secondName\"/>\r\n        <div class=\"alert alert-danger\"\r\n             *ngIf=\"myForm.controls['secondName'].invalid && myForm.controls['secondName'].touched\">\r\n            Обязательно к заполнению\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Имя</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\"/>\r\n        <div class=\"alert alert-danger\"\r\n             *ngIf=\"myForm.controls['firstName'].invalid && myForm.controls['firstName'].touched\">\r\n            Обязательно к заполнению\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Отчество</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"lastName\"/>\r\n        <div class=\"alert alert-danger\"\r\n             *ngIf=\"myForm.controls['lastName'].invalid && myForm.controls['lastName'].touched\">\r\n            Обязательно к заполнению\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Должность</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"role\"/>\r\n        <div class=\"alert alert-danger\"\r\n             *ngIf=\"myForm.controls['role'].invalid && myForm.controls['role'].touched\">\r\n            Обязательно к заполнению\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Дата рождения</label>\r\n        <input type=\"date\" class=\"form-control\" formControlName=\"dateBorn\"/>\r\n        <div class=\"alert alert-danger\"\r\n             *ngIf=\"myForm.controls['dateBorn'].invalid && myForm.controls['dateBorn'].touched\">\r\n            Обязательно к заполнению\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Статус</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"statusWork\"/>\r\n        <div class=\"alert alert-danger\"\r\n             *ngIf=\"myForm.controls['statusWork'].invalid && myForm.controls['statusWork'].touched\">\r\n            Обязательно к заполнению\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-6\">\r\n            <label>Ссылка на Фото</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"photo\"/>\r\n            <img src=\"{{myForm.controls.photo.value}}\" class=\"rounded img-fluid d-block col\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-6\">\r\n            <label>Коментарий</label>\r\n            <textarea class=\"form-control\" formControlName=\"comment\"></textarea>\r\n        </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveUser()\" >Сохранить</button>\r\n    <button type=\"submit\" class=\"btn btn-light ml-2\"(click)=\"cancel()\">Отмена</button>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dataService) {
        this.dataService = dataService;
        this.closeProfile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            secondName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            dateBorn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            statusWork: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    // Добавление (сетим) данных в форму
    ProfileComponent.prototype.initForm = function () {
        var _this = this;
        var user = null;
        if (this.userId) {
            this.dataService.userList.value.forEach(function (item) {
                if (item.id === _this.userId) {
                    user = item;
                }
            });
        }
        if (user) {
            this.myForm.patchValue(user);
        }
    };
    ProfileComponent.prototype.saveUser = function () {
        var formData = this.myForm.getRawValue();
        if (this.userId) { // Редактирование
            this.dataService.editUserById(formData, this.userId);
        }
        else { // обавление поьзователья
            this.dataService.addUser(formData);
        }
        this.cancel();
    };
    ProfileComponent.prototype.cancel = function () {
        this.closeProfile.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProfileComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProfileComponent.prototype, "closeProfile", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accaunt',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.userList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        var lsUsers = localStorage.getItem('users');
        if (lsUsers !== null) {
            this.userList.next(JSON.parse(lsUsers));
        }
    }
    DataService.prototype.deleteUser = function (userId) {
        var users = this.userList.value.filter(function (item) {
            if (item.id === userId) {
                return false;
            }
            return true;
        });
        this.userList.next(users);
        this.saveToLocalStorage();
    };
    DataService.prototype.editUserById = function (formData, userId) {
        var newUserList = this.userList.value.map(function (item, i) {
            if (item.id === userId) {
                formData.id = userId;
                return formData;
            }
            else {
                return item;
            }
        });
        this.userList.next(newUserList);
    };
    DataService.prototype.addUser = function (user) {
        if (user) {
            user.id = this.getIdNewUser(); // Получили id
            this.userList.value.push(user);
            this.userList.next(this.userList.value);
            this.saveToLocalStorage();
        }
    };
    // Сохраняем в ls
    DataService.prototype.saveToLocalStorage = function () {
        localStorage.setItem('users', JSON.stringify(this.userList.value));
    };
    DataService.prototype.getIdNewUser = function () {
        var id = 1;
        this.userList.value.forEach(function () {
            id++;
        });
        return id;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Антон\PhpstormProjects\VLS2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map