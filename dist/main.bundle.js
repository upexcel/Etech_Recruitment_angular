webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_login_route_guard__ = __webpack_require__("../../../../../src/app/service/login-route-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_login_login_component__ = __webpack_require__("../../../../../src/app/modules/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_core_core_component__ = __webpack_require__("../../../../../src/app/modules/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_inbox_inbox_component__ = __webpack_require__("../../../../../src/app/modules/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_email_logs_email_logs_component__ = __webpack_require__("../../../../../src/app/modules/email-logs/email-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_useractivitylog_useractivitylog_component__ = __webpack_require__("../../../../../src/app/modules/useractivitylog/useractivitylog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_setting_setting_component__ = __webpack_require__("../../../../../src/app/modules/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modules_changepassword_changepassword_component__ = __webpack_require__("../../../../../src/app/modules/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_imap_server_imap_server_component__ = __webpack_require__("../../../../../src/app/modules/imap-server/imap-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modules_smtp_server_smtp_server_component__ = __webpack_require__("../../../../../src/app/modules/smtp-server/smtp-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modules_email_templates_email_templates_component__ = __webpack_require__("../../../../../src/app/modules/email-templates/email-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modules_email_variables_email_variables_component__ = __webpack_require__("../../../../../src/app/modules/email-variables/email-variables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__modules_tag_setting_tag_setting_component__ = __webpack_require__("../../../../../src/app/modules/tag-setting/tag-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modules_automatic_tag_automatic_tag_component__ = __webpack_require__("../../../../../src/app/modules/automatic-tag/automatic-tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__modules_job_profile_tag_job_profile_tag_component__ = __webpack_require__("../../../../../src/app/modules/job-profile-tag/job-profile-tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__modules_actions_actions_component__ = __webpack_require__("../../../../../src/app/modules/actions/actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__modules_manage_users_manage_users_component__ = __webpack_require__("../../../../../src/app/modules/manage-users/manage-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__modules_inbox_side_nav_inbox_side_nav_component__ = __webpack_require__("../../../../../src/app/modules/inbox-side-nav/inbox-side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__modules_emailbox_emailbox_component__ = __webpack_require__("../../../../../src/app/modules/emailbox/emailbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__modules_imap_component_form_imap_component_form_component__ = __webpack_require__("../../../../../src/app/modules/imap-component-form/imap-component-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__modules_manual_tag_modal_manual_tag_modal_component__ = __webpack_require__("../../../../../src/app/modules/manual-tag-modal/manual-tag-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__modules_automatic_tag_modal_automatic_tag_modal_component__ = __webpack_require__("../../../../../src/app/modules/automatic-tag-modal/automatic-tag-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__service_http_factory__ = __webpack_require__("../../../../../src/app/service/http.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__service_http_interceptor__ = __webpack_require__("../../../../../src/app/service/http.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__modules_smtp_component_form_smtp_component_form_component__ = __webpack_require__("../../../../../src/app/modules/smtp-component-form/smtp-component-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__modules_slack_component_form_slack_component_form_component__ = __webpack_require__("../../../../../src/app/modules/slack-component-form/slack-component-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__modules_add_email_temp_add_email_temp_component__ = __webpack_require__("../../../../../src/app/modules/add-email-temp/add-email-temp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__modules_add_tag_modal_add_tag_modal_component__ = __webpack_require__("../../../../../src/app/modules/add-tag-modal/add-tag-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__modules_email_modal_email_modal_component__ = __webpack_require__("../../../../../src/app/modules/email-modal/email-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__service_safe_html_pipe_pipe__ = __webpack_require__("../../../../../src/app/service/safe-html-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__service_safe_url_pipe__ = __webpack_require__("../../../../../src/app/service/safe-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__modules_single_template_single_template_component__ = __webpack_require__("../../../../../src/app/modules/single-template/single-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__modules_template_edit_template_edit_component__ = __webpack_require__("../../../../../src/app/modules/template-edit/template-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__modules_add_var_add_var_component__ = __webpack_require__("../../../../../src/app/modules/add-var/add-var.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__modules_edit_variable_edit_variable_component__ = __webpack_require__("../../../../../src/app/modules/edit-variable/edit-variable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__modules_test_template_test_template_component__ = __webpack_require__("../../../../../src/app/modules/test-template/test-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__modules_setvaremailpreview_setvaremailpreview_component__ = __webpack_require__("../../../../../src/app/modules/setvaremailpreview/setvaremailpreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__modules_openattachement_openattachement_component__ = __webpack_require__("../../../../../src/app/modules/openattachement/openattachement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__modules_forget_password_forget_password_component__ = __webpack_require__("../../../../../src/app/modules/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__modules_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/modules/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__modules_compose_email_compose_email_component__ = __webpack_require__("../../../../../src/app/modules/compose-email/compose-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__modules_schedule_interview_schedule_interview_component__ = __webpack_require__("../../../../../src/app/modules/schedule-interview/schedule-interview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__modules_add_new_user_add_new_user_component__ = __webpack_require__("../../../../../src/app/modules/add-new-user/add-new-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__modules_fetch_email_by_day_fetch_email_by_day_component__ = __webpack_require__("../../../../../src/app/modules/fetch-email-by-day/fetch-email-by-day.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__modules_users_list_users_list_component__ = __webpack_require__("../../../../../src/app/modules/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__modules_confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/modules/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__modules_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__modules_cron_status_model_cron_status_model_component__ = __webpack_require__("../../../../../src/app/modules/cron-status-model/cron-status-model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__modules_add_note_add_note_component__ = __webpack_require__("../../../../../src/app/modules/add-note/add-note.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__modules_slack_info_slack_info_component__ = __webpack_require__("../../../../../src/app/modules/slack-info/slack-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__service_local_storage_service__ = __webpack_require__("../../../../../src/app/service/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__service_dialog_service__ = __webpack_require__("../../../../../src/app/service/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__service_dashboard_service__ = __webpack_require__("../../../../../src/app/service/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__service_avatar_directive_directive__ = __webpack_require__("../../../../../src/app/service/avatar-directive.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__modules_add_sub_tag_modal_add_sub_tag_modal_component__ = __webpack_require__("../../../../../src/app/modules/add-sub-tag-modal/add-sub-tag-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_69_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modules_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__modules_core_core_component__["a" /* CoreComponent */],
                __WEBPACK_IMPORTED_MODULE_15__modules_inbox_inbox_component__["a" /* InboxComponent */],
                __WEBPACK_IMPORTED_MODULE_16__modules_email_logs_email_logs_component__["a" /* EmailLogsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__modules_useractivitylog_useractivitylog_component__["a" /* UserActivityLogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__modules_setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__modules_changepassword_changepassword_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_20__modules_imap_server_imap_server_component__["a" /* ImapServerComponent */],
                __WEBPACK_IMPORTED_MODULE_21__modules_smtp_server_smtp_server_component__["a" /* SmtpServerComponent */],
                __WEBPACK_IMPORTED_MODULE_22__modules_email_templates_email_templates_component__["a" /* EmailTemplatesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__modules_email_variables_email_variables_component__["a" /* EmailVariablesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__modules_tag_setting_tag_setting_component__["a" /* TagSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_25__modules_automatic_tag_automatic_tag_component__["a" /* AutomaticTagComponent */],
                __WEBPACK_IMPORTED_MODULE_26__modules_job_profile_tag_job_profile_tag_component__["a" /* JobProfileTagComponent */],
                __WEBPACK_IMPORTED_MODULE_27__modules_actions_actions_component__["a" /* ActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__modules_manage_users_manage_users_component__["a" /* ManageUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_29__modules_inbox_side_nav_inbox_side_nav_component__["a" /* InboxSideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_30__modules_emailbox_emailbox_component__["a" /* EmailboxComponent */],
                __WEBPACK_IMPORTED_MODULE_31__modules_imap_component_form_imap_component_form_component__["a" /* ImapComponentFormComponent */],
                __WEBPACK_IMPORTED_MODULE_32__modules_manual_tag_modal_manual_tag_modal_component__["a" /* ManualTagModalComponent */],
                __WEBPACK_IMPORTED_MODULE_33__modules_automatic_tag_modal_automatic_tag_modal_component__["a" /* AutomaticTagModalComponent */],
                __WEBPACK_IMPORTED_MODULE_33__modules_automatic_tag_modal_automatic_tag_modal_component__["a" /* AutomaticTagModalComponent */],
                __WEBPACK_IMPORTED_MODULE_39__modules_add_tag_modal_add_tag_modal_component__["a" /* AddTagModalComponent */],
                __WEBPACK_IMPORTED_MODULE_40__modules_email_modal_email_modal_component__["a" /* EmailModalComponent */],
                __WEBPACK_IMPORTED_MODULE_41__service_safe_html_pipe_pipe__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_42__service_safe_url_pipe__["a" /* SafeUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_36__modules_smtp_component_form_smtp_component_form_component__["a" /* SmtpComponentFormComponent */],
                __WEBPACK_IMPORTED_MODULE_38__modules_add_email_temp_add_email_temp_component__["a" /* AddEmailTempComponent */],
                __WEBPACK_IMPORTED_MODULE_53__modules_compose_email_compose_email_component__["a" /* ComposeEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_44__modules_single_template_single_template_component__["a" /* SingleTemplateComponent */],
                __WEBPACK_IMPORTED_MODULE_45__modules_template_edit_template_edit_component__["a" /* TemplateEditComponent */],
                __WEBPACK_IMPORTED_MODULE_46__modules_add_var_add_var_component__["a" /* AddVarComponent */],
                __WEBPACK_IMPORTED_MODULE_47__modules_edit_variable_edit_variable_component__["a" /* EditVariableComponent */],
                __WEBPACK_IMPORTED_MODULE_48__modules_test_template_test_template_component__["a" /* TestTemplateComponent */],
                __WEBPACK_IMPORTED_MODULE_49__modules_setvaremailpreview_setvaremailpreview_component__["a" /* SetvaremailpreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_50__modules_openattachement_openattachement_component__["a" /* OpenattachementComponent */],
                __WEBPACK_IMPORTED_MODULE_51__modules_forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_52__modules_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_55__modules_add_new_user_add_new_user_component__["a" /* AddNewUserComponent */],
                __WEBPACK_IMPORTED_MODULE_56__modules_fetch_email_by_day_fetch_email_by_day_component__["a" /* FetchEmailByDayComponent */],
                __WEBPACK_IMPORTED_MODULE_57__modules_users_list_users_list_component__["a" /* UsersListComponent */],
                __WEBPACK_IMPORTED_MODULE_54__modules_schedule_interview_schedule_interview_component__["a" /* ScheduleInterviewComponent */],
                __WEBPACK_IMPORTED_MODULE_58__modules_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_59__modules_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_67__service_avatar_directive_directive__["a" /* AvatarDirectiveDirective */],
                __WEBPACK_IMPORTED_MODULE_60__modules_cron_status_model_cron_status_model_component__["a" /* CronStatusModelComponent */],
                __WEBPACK_IMPORTED_MODULE_61__modules_add_note_add_note_component__["a" /* AddNoteComponent */],
                __WEBPACK_IMPORTED_MODULE_62__modules_slack_info_slack_info_component__["a" /* SlackInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_37__modules_slack_component_form_slack_component_form_component__["a" /* SlackComponentFormComponent */],
                __WEBPACK_IMPORTED_MODULE_68__modules_add_sub_tag_modal_add_sub_tag_modal_component__["a" /* AddSubTagModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MdProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MdSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routes */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_43_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_69_ng2_dragula__["DragulaModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__service_imapemails_service__["a" /* ImapMailsService */],
                __WEBPACK_IMPORTED_MODULE_10__service_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_63__service_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_64__service_local_storage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_65__service_dialog_service__["a" /* DialogService */],
                __WEBPACK_IMPORTED_MODULE_66__service_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_12__service_login_route_guard__["a" /* LoginRouteGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_35__service_http_interceptor__["a" /* InterceptedHttp */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_34__service_http_factory__["a" /* httpFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]]
                }
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_32__modules_manual_tag_modal_manual_tag_modal_component__["a" /* ManualTagModalComponent */],
                __WEBPACK_IMPORTED_MODULE_33__modules_automatic_tag_modal_automatic_tag_modal_component__["a" /* AutomaticTagModalComponent */],
                __WEBPACK_IMPORTED_MODULE_39__modules_add_tag_modal_add_tag_modal_component__["a" /* AddTagModalComponent */],
                __WEBPACK_IMPORTED_MODULE_40__modules_email_modal_email_modal_component__["a" /* EmailModalComponent */],
                __WEBPACK_IMPORTED_MODULE_38__modules_add_email_temp_add_email_temp_component__["a" /* AddEmailTempComponent */],
                __WEBPACK_IMPORTED_MODULE_53__modules_compose_email_compose_email_component__["a" /* ComposeEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_45__modules_template_edit_template_edit_component__["a" /* TemplateEditComponent */],
                __WEBPACK_IMPORTED_MODULE_46__modules_add_var_add_var_component__["a" /* AddVarComponent */],
                __WEBPACK_IMPORTED_MODULE_47__modules_edit_variable_edit_variable_component__["a" /* EditVariableComponent */],
                __WEBPACK_IMPORTED_MODULE_48__modules_test_template_test_template_component__["a" /* TestTemplateComponent */],
                __WEBPACK_IMPORTED_MODULE_49__modules_setvaremailpreview_setvaremailpreview_component__["a" /* SetvaremailpreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_60__modules_cron_status_model_cron_status_model_component__["a" /* CronStatusModelComponent */],
                __WEBPACK_IMPORTED_MODULE_50__modules_openattachement_openattachement_component__["a" /* OpenattachementComponent */],
                __WEBPACK_IMPORTED_MODULE_54__modules_schedule_interview_schedule_interview_component__["a" /* ScheduleInterviewComponent */],
                __WEBPACK_IMPORTED_MODULE_55__modules_add_new_user_add_new_user_component__["a" /* AddNewUserComponent */],
                __WEBPACK_IMPORTED_MODULE_56__modules_fetch_email_by_day_fetch_email_by_day_component__["a" /* FetchEmailByDayComponent */],
                __WEBPACK_IMPORTED_MODULE_58__modules_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_61__modules_add_note_add_note_component__["a" /* AddNoteComponent */],
                __WEBPACK_IMPORTED_MODULE_68__modules_add_sub_tag_modal_add_sub_tag_modal_component__["a" /* AddSubTagModalComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_login_login_component__ = __webpack_require__("../../../../../src/app/modules/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_core_core_component__ = __webpack_require__("../../../../../src/app/modules/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_inbox_inbox_component__ = __webpack_require__("../../../../../src/app/modules/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_email_logs_email_logs_component__ = __webpack_require__("../../../../../src/app/modules/email-logs/email-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_useractivitylog_useractivitylog_component__ = __webpack_require__("../../../../../src/app/modules/useractivitylog/useractivitylog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_setting_setting_component__ = __webpack_require__("../../../../../src/app/modules/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_changepassword_changepassword_component__ = __webpack_require__("../../../../../src/app/modules/changepassword/changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_imap_server_imap_server_component__ = __webpack_require__("../../../../../src/app/modules/imap-server/imap-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_smtp_server_smtp_server_component__ = __webpack_require__("../../../../../src/app/modules/smtp-server/smtp-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_email_templates_email_templates_component__ = __webpack_require__("../../../../../src/app/modules/email-templates/email-templates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_email_variables_email_variables_component__ = __webpack_require__("../../../../../src/app/modules/email-variables/email-variables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_tag_setting_tag_setting_component__ = __webpack_require__("../../../../../src/app/modules/tag-setting/tag-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_actions_actions_component__ = __webpack_require__("../../../../../src/app/modules/actions/actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_manage_users_manage_users_component__ = __webpack_require__("../../../../../src/app/modules/manage-users/manage-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__ = __webpack_require__("../../../../../src/app/service/login-route-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_forget_password_forget_password_component__ = __webpack_require__("../../../../../src/app/modules/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/modules/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modules_email_modal_email_modal_component__ = __webpack_require__("../../../../../src/app/modules/email-modal/email-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_automatic_tag_automatic_tag_component__ = __webpack_require__("../../../../../src/app/modules/automatic-tag/automatic-tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modules_job_profile_tag_job_profile_tag_component__ = __webpack_require__("../../../../../src/app/modules/job-profile-tag/job-profile-tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_users_list_users_list_component__ = __webpack_require__("../../../../../src/app/modules/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modules_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modules_slack_info_slack_info_component__ = __webpack_require__("../../../../../src/app/modules/slack-info/slack-info.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });























var routes = [{
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_21__modules_dashboard_dashboard_component__["a" /* DashboardComponent */],
        data: { isHome: true }
    },
    {
        path: 'core',
        component: __WEBPACK_IMPORTED_MODULE_1__modules_core_core_component__["a" /* CoreComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]],
        children: [{
                path: '',
                redirectTo: 'inbox',
                pathMatch: 'full'
            },
            {
                path: 'inbox',
                component: __WEBPACK_IMPORTED_MODULE_2__modules_inbox_inbox_component__["a" /* InboxComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]],
                children: [{
                        path: 'email/:id',
                        pathMatch: 'full',
                        component: __WEBPACK_IMPORTED_MODULE_17__modules_email_modal_email_modal_component__["a" /* EmailModalComponent */]
                    }]
            },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_21__modules_dashboard_dashboard_component__["a" /* DashboardComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]],
                data: { isHome: false }
            }, {
                path: 'setting',
                component: __WEBPACK_IMPORTED_MODULE_5__modules_setting_setting_component__["a" /* SettingComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]],
                children: [{
                        path: '',
                        redirectTo: 'imap',
                        pathMatch: 'full'
                    }, {
                        path: 'imap',
                        component: __WEBPACK_IMPORTED_MODULE_7__modules_imap_server_imap_server_component__["a" /* ImapServerComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'smtp',
                        component: __WEBPACK_IMPORTED_MODULE_8__modules_smtp_server_smtp_server_component__["a" /* SmtpServerComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'emailtemplate',
                        component: __WEBPACK_IMPORTED_MODULE_9__modules_email_templates_email_templates_component__["a" /* EmailTemplatesComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'emailvariable',
                        component: __WEBPACK_IMPORTED_MODULE_10__modules_email_variables_email_variables_component__["a" /* EmailVariablesComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'tagsetting',
                        component: __WEBPACK_IMPORTED_MODULE_11__modules_tag_setting_tag_setting_component__["a" /* TagSettingComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'action',
                        component: __WEBPACK_IMPORTED_MODULE_12__modules_actions_actions_component__["a" /* ActionsComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'manageuser',
                        component: __WEBPACK_IMPORTED_MODULE_13__modules_manage_users_manage_users_component__["a" /* ManageUsersComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'automaticTags',
                        component: __WEBPACK_IMPORTED_MODULE_18__modules_automatic_tag_automatic_tag_component__["a" /* AutomaticTagComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'jobProfileTags',
                        component: __WEBPACK_IMPORTED_MODULE_19__modules_job_profile_tag_job_profile_tag_component__["a" /* JobProfileTagComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'resetPassword',
                        component: __WEBPACK_IMPORTED_MODULE_16__modules_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'usersList',
                        component: __WEBPACK_IMPORTED_MODULE_20__modules_users_list_users_list_component__["a" /* UsersListComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'useractivity',
                        component: __WEBPACK_IMPORTED_MODULE_4__modules_useractivitylog_useractivitylog_component__["a" /* UserActivityLogComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'emailLogs',
                        component: __WEBPACK_IMPORTED_MODULE_3__modules_email_logs_email_logs_component__["a" /* EmailLogsComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }, {
                        path: 'slackinfo',
                        component: __WEBPACK_IMPORTED_MODULE_22__modules_slack_info_slack_info_component__["a" /* SlackInfoComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
                    }]
            }, {
                path: 'changepassword',
                component: __WEBPACK_IMPORTED_MODULE_6__modules_changepassword_changepassword_component__["a" /* ChangePasswordComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_14__service_login_route_guard__["a" /* LoginRouteGuard */]]
            }
        ]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__modules_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'forgot',
        component: __WEBPACK_IMPORTED_MODULE_15__modules_forget_password_forget_password_component__["a" /* ForgetPasswordComponent */]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/config/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return color_list; });
var config = {
    'interviewRounds': [{ 'name': 'First Round', 'value': 'first_round' }, { 'name': 'Second Round', 'value': 'second_round' }, { 'name': 'Third Round', 'value': 'third_round' }],
    'userType': ['Admin', 'Hr', 'Guest'],
    'mobileNoPrefix': '+91',
    'titles': { '/core/dashboa': 'Dashboard', '/core/setting': 'Settings', '/core/inbox': 'Inbox', '/core/inbox/e': 'Inbox' },
    'roles': { 'HR': ['/core/setting/emailtemplate', '/core/setting/emailvariable', '/core/setting/tagsetting', '/core/setting/automaticTags', '/core/setting/jobProfileTags', '/core/inbox', '/core/setting/resetPassword', '/core/dashboard'], 'Guest': ['/core/inbox', '/core/setting/resetPassword', '/core/dashboard'] },
    'dashboardChartColor': [
        {
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            backgroundColor: 'rgba(50,205,50,0.2)',
            borderColor: 'rgba(50,205,50,1)',
            pointBackgroundColor: 'rgba(50,205,50,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(50,205,50,0.8)'
        }
    ],
    dashboardChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        animation: {
            easing: 'easeInQuad'
        },
        scales: {
            xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
        }
    },
    dashboardPieChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
    },
    dashboardChartRefreshTime: 60000
};
var color_list = ['#cb891b', '#ef2e46', '#ff5722', '#ba21d3', '#f3b08c', '#f0793d', '#eb7303', '#db62e9', '#ffeb3b', '#3882b8'];
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/app/modules/actions/actions.component.html":
/***/ (function(module, exports) {

module.exports = "<p align=\"center\">\n  actions component\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/modules/actions/actions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/actions/actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionsComponent = (function () {
    function ActionsComponent() {
    }
    ActionsComponent.prototype.ngOnInit = function () {
    };
    ActionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-actions',
            template: __webpack_require__("../../../../../src/app/modules/actions/actions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/actions/actions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActionsComponent);
    return ActionsComponent;
}());

//# sourceMappingURL=actions.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/add-email-temp/add-email-temp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <p class=\"h-text\">Create Template</p>\n</div>\n<form autoComplete=\"off\" #addTemp=\"ngForm\" (ngSubmit)=\"save(addTemp)\">\n    <p *ngIf=\"showMessage\" class=\"error-show\">{{message}}</p>\n    <div class=\"con-pg\">\n      <div class=\"row\">\n        <div class=\"main col-sm-8\">\n            <p>\n                <md-input-container class=\"width-100\">\n                    <input mdInput placeholder=\"Template Name\" autoComplete=\"off\" name=\"templateName\" required ngModel>\n                    <md-error>Required</md-error>\n                </md-input-container>\n                <md-input-container class=\"width-25\">\n                    <input mdInput placeholder=\"Subject\" [disabled]=\"true\" autoComplete=\"off\" name=\"fixedsubject\" required [(ngModel)]=\"subject_for_genuine\">\n                    <md-error>Required</md-error>\n                </md-input-container>\n                <md-input-container class=\"width-75\">\n                    <input mdInput placeholder=\"\" autoComplete=\"off\" name=\"subject\" required ngModel>\n                    <md-error>Required</md-error>\n                </md-input-container>\n                <ckeditor name=\"body\"\n                    [config]=\"{uiColor: '#00ffff'}\"\n                    debounce=\"500\" ngModel>\n                </ckeditor>\n            </p>\n        </div>\n        <div class=\"side\">\n          <div class=\"col-sm-4\">\n            <md-card class=\"side-nav\">\n                <button md-button class=\"h-d\">System Variables</button>\n                <md-card-content class=\"d-c\">\n                    <button md-button class=\"con-btn\" *ngFor=\"let svar of sysVar; trackBy: sysVarTrack\">{{svar.variableCode}}</button>\n                </md-card-content>\n            </md-card>\n            <br/>\n            <md-card class=\"side-nav\">\n                <button md-button class=\"h-d\">User Variables</button>\n                <md-card-content class=\"d-c\">\n                    <button md-button class=\"con-btn\" *ngFor=\"let uvar of userVar; trackBy: userVarTrack\">{{uvar.variableCode}}</button>\n                </md-card-content>\n            </md-card>\n        </div>\n      </div>\n    </div>\n  </div>\n    <div class=\"fx-pos\">\n    \t<button md-raised-button (click)=\"close()\">Back</button>\n    \t<button md-raised-button type=\"submit\" color=\"accent\">Save</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/modules/add-email-temp/add-email-temp.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  position: relative;\n  border-bottom: 1px solid black;\n  font-weight: bold; }\n\n.h-text {\n  font-size: 20px;\n  opacity: 0.8; }\n\n.width-100 {\n  width: 100%; }\n\n.width-75 {\n  width: 70%; }\n\n.main {\n  padding: 10px; }\n\n.sidenav {\n  padding: 5px; }\n\n.d-c {\n  background: #e0f7fa; }\n\n.h-d {\n  padding: 9px;\n  background: cyan;\n  width: 100%; }\n\nmd-card {\n  padding: 1px !important; }\n\n.con-btn {\n  text-align: left;\n  padding: 6px;\n  width: 100%; }\n\n.fx-pos {\n  float: right;\n  margin-top: 8px; }\n\n.error-show {\n  color: red;\n  text-align: center; }\n\n.mat-input-container {\n  margin: 4px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/add-email-temp/add-email-temp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmailTempComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEmailTempComponent = (function () {
    function AddEmailTempComponent(dialogRef, getVariable) {
        this.dialogRef = dialogRef;
        this.getVariable = getVariable;
    }
    AddEmailTempComponent.prototype.ngOnInit = function () {
        this.showMessage = false;
        this.subject_for_genuine = localStorage.getItem('subject_for_genuine');
    };
    AddEmailTempComponent.prototype.save = function (form) {
        var _this = this;
        if (form.valid) {
            this.getVariable.addTemplate(form.value).subscribe(function (data) {
                form.reset();
            }, function (err) {
                _this.showMessage = true;
                _this.message = err.message;
            });
            this.dialogRef.close('added');
        }
    };
    AddEmailTempComponent.prototype.sysVarTrack = function (index, data) {
        return data.id || index;
    };
    AddEmailTempComponent.prototype.userVarTrack = function (index, data) {
        return data.id || index;
    };
    AddEmailTempComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddEmailTempComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-email-temp',
            template: __webpack_require__("../../../../../src/app/modules/add-email-temp/add-email-temp.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/add-email-temp/add-email-temp.component.scss")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], AddEmailTempComponent);
    return AddEmailTempComponent;
    var _a, _b;
}());

//# sourceMappingURL=add-email-temp.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/add-new-user/add-new-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainform\">\n    <form autoComplete=\"off\" [formGroup]=\"addNewUserForm\">\n        <md-card-title class=\"cardsub\">\n            Add New User\n        </md-card-title>\n        <md-card-subtitle class=\"error\" *ngIf=\"showmessage\">{{message}}</md-card-subtitle>\n        <md-card-content>\n            <table class=\"width-100\">\n                <tr>\n                    <td class=\"width-50\">\n                        <md-input-container class=\"width-100\">\n                          <input mdInput placeholder=\"Email Id\" type=\"text\" [formControl]=\"addNewUserForm.controls['email']\">\n                        </md-input-container>\n                        <md-error *ngIf=\"!addNewUserForm.controls['email'].valid && addNewUserForm.controls['email'].touched\">\n                            Please enter a valid email\n                        </md-error>\n                    </td>\n                    <td class=\"width-50\">\n                        <md-select placeholder=\"Select Role\" class=\"width-100 role-select\" [formControl]=\"addNewUserForm.controls['user_type']\">\n                           <md-option *ngFor=\"let user of userType; trackBy: userTypeTrack\" [value]=\"user\">{{ user }}</md-option>\n                        </md-select>\n                    </td>\n                </tr>\n                <tr>\n                    <td class=\"width-50\">\n                        <md-input-container class=\"width-100\">\n                          <input mdInput placeholder=\"Password\" type=\"password\" [formControl]=\"addNewUserForm.controls['password']\">\n                        </md-input-container>\n                        <md-error *ngIf=\"!addNewUserForm.controls['password'].valid && addNewUserForm.controls['password'].touched\">\n                            Please enter password\n                        </md-error>\n                    </td>\n                    <td class=\"width-50\">\n                        <md-input-container class=\"width-100\">\n                          <input mdInput placeholder=\"Confirm Password\" type=\"password\" [formControl]=\"addNewUserForm.controls['confirm_password']\">\n                        </md-input-container>\n                        <md-error *ngIf=\"addNewUserForm.controls['confirm_password'].touched && addNewUserForm.controls['confirm_password'].hasError('notEquivalent')\">Password don't match</md-error>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <button md-raised-button (click)=\"close()\"> Close </button>\n                        <button type=\"submit\" md-raised-button color=primary [disabled]=\"addNewUserForm.invalid || loading\" (click)=\"addUser()\"> Add User </button>\n                    </td>\n                </tr>\n            </table>\n        </md-card-content>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/add-new-user/add-new-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-card {\n  width: 315px;\n  position: absolute;\n  left: 36%;\n  top: 25%; }\n\n.width-100 {\n  width: 100%; }\n\n.width-50 {\n  width: 50%; }\n\nmd-card-actions {\n  margin-left: 0px;\n  margin-right: 0px; }\n\n.outerbody {\n  background-color: #1e3750;\n  width: 100%;\n  position: absolute;\n  height: 100%; }\n\n.hav-acc {\n  color: #ffffff;\n  margin-left: 15%;\n  font-size: 15px; }\n\n.signup {\n  text-decoration: none;\n  color: #00bcd4; }\n\n.spin {\n  height: 50px;\n  width: 50px;\n  margin-left: 35%; }\n\n.error {\n  color: #ff0000;\n  text-align: center; }\n\n.text-center {\n  text-align: center; }\n\n.mat-input-error {\n  font-size: 10px; }\n\n.mat-input-wrapper {\n  padding-bottom: 0px; }\n\n.role-select {\n  height: 37px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/add-new-user/add-new-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddNewUserComponent = (function () {
    function AddNewUserComponent(dialogRef, formBuilder, _imapMailsService, snackBar) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this._imapMailsService = _imapMailsService;
        this.snackBar = snackBar;
        this.addNewUserForm = this.formBuilder.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')
                ])],
            'user_type': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'confirm_password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        }, { validator: this.checkIfMatchingPasswords('password', 'confirm_password') });
        this.userType = __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* config */]['userType'];
    }
    AddNewUserComponent.prototype.ngOnInit = function () {
        this.loading = false;
    };
    AddNewUserComponent.prototype.checkIfMatchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    AddNewUserComponent.prototype.addUser = function () {
        var _this = this;
        if (this.addNewUserForm.valid) {
            this.loading = true;
            this.showmessage = false;
            this._imapMailsService.addUser(this.addNewUserForm.value).subscribe(function (res) {
                _this.loading = false;
                _this.showmessage = false;
                _this.dialogRef.close(res);
                _this.addNewUserForm.reset();
            }, function (err) {
                _this.loading = false;
                _this.showmessage = true;
                _this.message = err.message;
            });
        }
    };
    AddNewUserComponent.prototype.userTypeTrack = function (index, data) {
        return index;
    };
    AddNewUserComponent.prototype.close = function () {
        this.dialogRef.close('back');
    };
    AddNewUserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-new-user',
            template: __webpack_require__("../../../../../src/app/modules/add-new-user/add-new-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/add-new-user/add-new-user.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdSnackBar */]) === "function" && _d || Object])
    ], AddNewUserComponent);
    return AddNewUserComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=add-new-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/add-note/add-note.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <p class=\"h-text\">Add Note</p>\n</div>\n<form autoComplete=\"off\" #addNote=\"ngForm\" *ngIf=\"formOpen\">\n    <div class=\"con-pg\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n        <div class=\"main\">\n            <p>\n                <md-input-container class=\"width-75\">\n                    <textarea mdInput placeholder=\"\" autoComplete=\"off\" name=\"note\" required [(ngModel)]=\"note\"></textarea>\n                    <md-error>Required</md-error>\n                </md-input-container>\n            </p>\n        </div>\n    </div>\n    <div class=\"fx-pos\">\n    \t<button md-raised-button color=\"accent\" (click)=\"save(addNote)\">Save</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/modules/add-note/add-note.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  border-bottom: 1px solid black; }\n\n.width-75 {\n  width: 73%; }\n\n.fx-pos {\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/add-note/add-note.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddNoteComponent = (function () {
    function AddNoteComponent(dialogRef, _apiService) {
        this.dialogRef = dialogRef;
        this._apiService = _apiService;
        this.note = '';
        this.formOpen = true;
    }
    AddNoteComponent.prototype.save = function (form) {
        var _this = this;
        if (form.valid) {
            form.value.note = this.note;
            form.value.mongo_id = this.candidateid;
            this._apiService.addNote(form.value).subscribe(function (data) {
                _this.close();
            });
            this.dialogRef.close({ 'notedata': form.value });
        }
    };
    AddNoteComponent.prototype.close = function () {
    };
    AddNoteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-note',
            template: __webpack_require__("../../../../../src/app/modules/add-note/add-note.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/add-note/add-note.component.scss")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], AddNoteComponent);
    return AddNoteComponent;
    var _a, _b;
}());

//# sourceMappingURL=add-note.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/add-sub-tag-modal/add-sub-tag-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 class=\"heading\">Add Sub Tag</h3>\n</div>\n<form #addForm=\"ngForm\" (ngSubmit)=\"addTag(addForm)\" class=\"add-tag\">\n  <span class=\"text-err\" *ngIf=\"showMessage\">{{message}}</span>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <md-input-container class=\"width-100\">\n          <input mdInput name=\"title\" placeholder=\"Title\" ngModel required>\n          <md-error>Title Is Required</md-error>\n        </md-input-container>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <md-radio-group class=\"pos-radio width-100\" name=\"type\" [(ngModel)]=\"type\" ngModel required>\n          <md-radio-button *ngIf=\"addTagType == 'Default'\" name=\"type\" value=\"Default\">Default Tag</md-radio-button>\n        </md-radio-group>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <md-input-container class=\"width-100\">\n          <input mdInput name=\"email\" type=\"email\" placeholder=\"Email\" ngModel  [formControl]=\"emailFormControl\">\n           <md-error *ngIf=\"emailFormControl.hasError('pattern')\">\n                                Please enter a valid email address\n                            </md-error>\n         <!--  <md-error>Invalid Email</md-error> -->\n        </md-input-container>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <md-input-container class=\"width-100\">\n          <input mdInput name=\"subject\" placeholder=\"Subject\" ngModel required>\n        </md-input-container>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <md-input-container class=\"width-100\">\n          <input mdInput name=\"from\" type=\"date\" placeholder=\"From date\" ngModel>\n        </md-input-container>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <md-input-container class=\"width-100\">\n          <input mdInput name=\"to\" type=\"date\" placeholder=\"To date\" ngModel>\n        </md-input-container>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12\">\n        <h4> Tag Color </h4>\n        <div class=\"selected-color\" [ngStyle]=\"{'background-color': originalcolor}\"></div>\n        <div class=\"color-box\">\n          <div class=\"selected-color\" *ngFor=\"let color of availableColors; trackBy: availableColorsTrackBY;\" (click)=\"originalcolor = color\" [ngStyle]=\"{'background-color': color}\"></div>\n        </div>\n      </div>\n      <div class=\"col-md-12 col-sm-12 text-right\">\n        <button md-raised-button (click)=\"close()\">Close</button>\n        <button md-raised-button type=\"submit\" color=primary [disabled]=\"addForm.invalid || showloading\" (click)=\"addTag(addForm)\"><span>Save </span></button>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/modules/add-sub-tag-modal/add-sub-tag-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pos-radio md-radio-button {\n  margin-top: 16px; }\n\n.width-100 {\n  width: 100%; }\n\n.text-err {\n  color: red;\n  margin: 0px 0px 0px 76px; }\n\n.s-ld {\n  height: 25px;\n  width: 20px;\n  display: inline-block; }\n\n.add-tag {\n  margin-top: 8px; }\n  .add-tag .col-md-6 {\n    min-height: 60px; }\n\n.heading {\n  margin: 0px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #ddd; }\n\n.tag-color-title {\n  margin-top: 1em;\n  margin-bottom: 1em; }\n\n@media screen and (min-width: 320px) and (max-width: 988px) {\n  .add-tag .col-md-12, .add-tag .col-sm-12 {\n    padding: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/add-sub-tag-modal/add-sub-tag-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSubTagModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var AddSubTagModalComponent = (function () {
    function AddSubTagModalComponent(dialogRef, tagUpdate) {
        this.dialogRef = dialogRef;
        this.tagUpdate = tagUpdate;
        this.originalcolor = __WEBPACK_IMPORTED_MODULE_4__config_config__["b" /* color_list */][0];
        this.availableColors = __WEBPACK_IMPORTED_MODULE_4__config_config__["b" /* color_list */];
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(EMAIL_REGEX)]);
    }
    AddSubTagModalComponent.prototype.ngOnInit = function () {
        this.type = this.addTagType;
        this.showMessage = false;
        this.showloading = false;
    };
    AddSubTagModalComponent.prototype.addTag = function (form) {
        var _this = this;
        this.showMessage = false;
        this.showloading = true;
        if (form.valid) {
            form.value['email'] = this.emailFormControl.value;
            form.value.color = this.originalcolor;
            form.value.parent_id = this.parentid;
            this.tagUpdate.addSubTag(form.value).subscribe(function (data) {
                _this.showloading = true;
                _this.dialogRef.close('Added');
                form.reset();
            }, function (err) {
                _this.showMessage = true;
                _this.showloading = false;
                _this.message = err.message;
            });
        }
    };
    AddSubTagModalComponent.prototype.availableColorsTrackBY = function (index, data) {
        return data.id || index;
    };
    AddSubTagModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddSubTagModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-tag-modal',
            template: __webpack_require__("../../../../../src/app/modules/add-sub-tag-modal/add-sub-tag-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/add-sub-tag-modal/add-sub-tag-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], AddSubTagModalComponent);
    return AddSubTagModalComponent;
    var _a, _b;
}());

//# sourceMappingURL=add-sub-tag-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/add-tag-modal/add-tag-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 class=\"heading\">Add Tag</h3>\n</div>\n<form #addForm=\"ngForm\" (ngSubmit)=\"addTag(addForm)\" class=\"add-tag\">\n  <span class=\"text-err\" *ngIf=\"showMessage\">{{message}}</span>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <md-input-container class=\"width-100\">\n          <input mdInput name=\"title\" placeholder=\"Title\" ngModel required>\n          <md-error>Title Is Required</md-error>\n        </md-input-container>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <md-radio-group class=\"pos-radio width-100\" name=\"type\" [(ngModel)]=\"type\" ngModel required>\n          <md-radio-button *ngIf=\"addTagType == 'manual'\" name=\"type\" value=\"Manual\" (click)=\"types = 0\">Manual Tag</md-radio-button>\n          <md-radio-button *ngIf=\"addTagType == 'automatic'\" name=\"type\" value=\"Automatic\" (click)=\"types = 1\">Automatic Tag</md-radio-button>\n          <md-radio-button *ngIf=\"addTagType == 'jobProfile'\" name=\"type\" value=\"Automatic\" (click)=\"types = 1\">Create Job Profile</md-radio-button>\n        </md-radio-group>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <md-input-container class=\"width-100\">\n          <input mdInput name=\"email\" type=\"email\" placeholder=\"Email\" ngModel>\n          <md-error>Invalid Email</md-error>\n        </md-input-container>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <md-input-container class=\"width-100\">\n          <input mdInput name=\"subject\" placeholder=\"Subject\" ngModel required>\n        </md-input-container>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <md-input-container class=\"width-100\">\n          <input mdInput name=\"from\" type=\"date\" placeholder=\"From date\" ngModel>\n        </md-input-container>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <md-input-container class=\"width-100\">\n          <input mdInput name=\"to\" type=\"date\" placeholder=\"To date\" ngModel>\n        </md-input-container>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\" *ngIf=\"addTagType == 'jobProfile'\">\n        <md-input-container class=\"width-100\">\n          <textarea mdInput rows=\"4\" name=\"job_description\" type=\"textarea\" placeholder=\"Job Description\" ngModel required></textarea>\n          <md-error>Job Description Is Required</md-error>\n        </md-input-container>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <md-select class=\"width-100\" placeholder=\"Select Template\" name=\"template_id\" ngModel>\n          <md-option>\n            None\n          </md-option>\n          <md-option *ngFor=\"let temp of tempList; trackBy: tempListTrack;\" [value]=\"temp.id\">\n            {{temp.templateName}}\n          </md-option>\n        </md-select>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <md-slide-toggle name=\"is_email_send\" ngModel class=\"width-100\">Send Automatic Template</md-slide-toggle>\n        <md-slide-toggle name=\"assign\" ngModel class=\"width-100\">Assign to all existing mails</md-slide-toggle>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12\">\n        <h4> Tag Color </h4>\n        <div class=\"selected-color\" [ngStyle]=\"{'background-color': originalcolor}\"></div>\n        <div class=\"color-box\">\n          <div class=\"selected-color\" *ngFor=\"let color of availableColors; trackBy: availableColorsTrackBY;\" (click)=\"originalcolor = color\" [ngStyle]=\"{'background-color': color}\"></div>\n        </div>\n      </div>\n      <div class=\"col-md-12 col-sm-12 text-right\">\n        <button md-raised-button (click)=\"close()\">Close</button>\n        <button md-raised-button type=\"submit\" color=primary [disabled]=\"addForm.invalid || showloading\" (click)=\"addTag(addForm)\"><span>Save </span></button>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/modules/add-tag-modal/add-tag-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pos-radio md-radio-button {\n  margin-top: 16px; }\n\n.width-100 {\n  width: 100%; }\n\n.text-err {\n  color: red;\n  margin: 0px 0px 0px 76px; }\n\n.s-ld {\n  height: 25px;\n  width: 20px;\n  display: inline-block; }\n\n.add-tag {\n  margin-top: 8px; }\n  .add-tag .col-md-6 {\n    min-height: 60px; }\n\n.heading {\n  margin: 0px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #ddd; }\n\n.tag-color-title {\n  margin-top: 1em;\n  margin-bottom: 1em; }\n\n@media screen and (min-width: 320px) and (max-width: 988px) {\n  .add-tag .col-md-12, .add-tag .col-sm-12 {\n    padding: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/add-tag-modal/add-tag-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTagModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddTagModalComponent = (function () {
    function AddTagModalComponent(dialogRef, tagUpdate) {
        this.dialogRef = dialogRef;
        this.tagUpdate = tagUpdate;
        this.originalcolor = __WEBPACK_IMPORTED_MODULE_3__config_config__["b" /* color_list */][0];
        this.availableColors = __WEBPACK_IMPORTED_MODULE_3__config_config__["b" /* color_list */];
    }
    AddTagModalComponent.prototype.ngOnInit = function () {
        if (this.addTagType === 'manual') {
            this.types = 0;
            this.type = 'Manual';
        }
        else if (this.addTagType === 'automatic' || this.addTagType === 'jobProfile') {
            this.type = 'Automatic';
            this.types = 1;
        }
        this.showMessage = false;
        this.showloading = false;
    };
    AddTagModalComponent.prototype.addTag = function (form) {
        var _this = this;
        this.showMessage = false;
        this.showloading = true;
        if (form.valid) {
            if (this.addTagType === 'jobProfile') {
                form.value.is_job_profile_tag = 1;
            }
            if (form.value.assign === '') {
                form.value.assign = false;
            }
            if (form.value.is_email_send === '') {
                form.value.is_email_send = false;
            }
            form.value.color = this.originalcolor;
            this.tagUpdate.addTag(form.value).subscribe(function (data) {
                form.reset();
                _this.showloading = true;
            }, function (err) {
                _this.showMessage = true;
                _this.showloading = false;
                _this.message = err.message;
            });
            this.dialogRef.close('Added');
        }
    };
    AddTagModalComponent.prototype.tempListTrack = function (index, data) {
        return data.id || index;
    };
    AddTagModalComponent.prototype.availableColorsTrackBY = function (index, data) {
        return data.id || index;
    };
    AddTagModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddTagModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-tag-modal',
            template: __webpack_require__("../../../../../src/app/modules/add-tag-modal/add-tag-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/add-tag-modal/add-tag-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], AddTagModalComponent);
    return AddTagModalComponent;
    var _a, _b;
}());

//# sourceMappingURL=add-tag-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/add-var/add-var.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <p class=\"h-text\">Create Variable</p>\n</div>\n<form autoComplete=\"off\" #add=\"ngForm\" (ngSubmit)=\"save(add)\">\n    <p *ngIf=\"showMessage\" class=\"error-show\">{{message}}</p>\n    <div class=\"con-pg\">\n        <div class=\"main\">\n            <p>\n                <md-input-container class=\"width-100\">\n                    <input mdInput placeholder=\"Enter Variable\" autoComplete=\"off\" name=\"variableCode\" required ngModel>\n                    <md-error>Required</md-error>\n                </md-input-container>\n            </p>\n               <md-radio-group class=\"pos-radio\" name=\"type\" [(ngModel)]=\"types\" ngModel>\n                    <md-radio-button [value]=\"0\" (click)=\"types = 0\">Add header/footer</md-radio-button>\n                    <md-radio-button [value]=\"1\" (click)=\"types = 1\">Other than header/footer</md-radio-button>\n                </md-radio-group>\n                <div class=\"editor\" *ngIf=\"types\">\n                <ckeditor name=\"variableValue\" \n                    [config]=\"{uiColor: '#00ffff'}\"\n                    debounce=\"500\" ngModel>\n                </ckeditor>\n                </div>\n                <div class=\"text-area\" *ngIf=\"!types\">\n                \t<md-input-container class=\"width-100\">\n                        <textarea mdInput name=\"variableValue\" mdTextareaAutosize  mdAutosizeMinRows=\"5\" placeholder=\" Write html code for header/footer\" ngModel></textarea>\n                    </md-input-container>\n                </div>\n        </div>\n    </div>\n    <div class=\"text-right\">\n    \t<button md-raised-button (click)=\"close()\">BACK</button>\n    \t<button md-raised-button type=\"submit\" color=\"accent\">SUBMIT</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/modules/add-var/add-var.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  font-weight: bold;\n  border-bottom: 1px solid black; }\n\n.h-text {\n  font-size: 20px;\n  opacity: 0.8; }\n\n.width-100 {\n  width: 100%; }\n\n.main {\n  padding: 10px; }\n\n.sidenav {\n  padding: 5px; }\n\n.d-c {\n  background: #e0f7fa; }\n\n.h-d {\n  padding: 9px;\n  background: cyan;\n  width: 100%; }\n\nmd-card {\n  padding: 1px !important; }\n\n.con-btn {\n  text-align: left;\n  padding: 6px;\n  width: 100%; }\n\n.fx-pos {\n  position: absolute;\n  top: 91%;\n  left: 75%; }\n\n.editor {\n  margin-top: 15px; }\n\n.error-show {\n  color: red;\n  text-align: center; }\n\n.text-right {\n  text-align: right;\n  padding-top: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/add-var/add-var.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddVarComponent = (function () {
    function AddVarComponent(dialogRef, getVariable) {
        this.dialogRef = dialogRef;
        this.getVariable = getVariable;
    }
    AddVarComponent.prototype.ngOnInit = function () {
        this.types = 1;
    };
    AddVarComponent.prototype.save = function (form) {
        var _this = this;
        if (form.valid) {
            this.body = {
                'variableCode': '#' + form.value['variableCode'],
                'variableValue': form.value['variableValue']
            };
            this.getVariable.addUserVariable(this.body).subscribe(function (data) {
                form.reset();
                _this.dialogRef.close();
            }, function (err) {
                _this.showMessage = true;
                _this.message = err.message;
            });
        }
    };
    AddVarComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddVarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-var',
            template: __webpack_require__("../../../../../src/app/modules/add-var/add-var.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/add-var/add-var.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], AddVarComponent);
    return AddVarComponent;
    var _a, _b;
}());

//# sourceMappingURL=add-var.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/automatic-tag-modal/automatic-tag-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"heading\">Edit Tag</h3>\n<hr>\n<div class=\"container-fluid edit-tag\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <md-input-container style=\"width: 100%\">\n        <input mdInput placeholder=\"Title\" disabled [(ngModel)]=\"originaltitle\">\n      </md-input-container>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <md-input-container style=\"width: 100%\">\n        <input mdInput placeholder=\"Email\" [(ngModel)]=\"tag.email\">\n      </md-input-container>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <md-input-container style=\"width: 100%\">\n        <input mdInput placeholder=\"Subject\" [(ngModel)]=\"tag.subject\">\n      </md-input-container>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <md-input-container style=\"width: 100%\">\n        <input mdInput placeholder=\"From date\" type=\"date\" [(ngModel)]=\"tag.from\">\n      </md-input-container>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <md-input-container style=\"width: 100%\">\n        <input mdInput placeholder=\"To date\" type=\"date\" [(ngModel)]=\"tag.to\">\n      </md-input-container>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <md-select class=\"width-100\" placeholder=\"Select Template\" [(ngModel)]=\"temp_id\" name=\"template_id\" ngModel style=\"width: 100%\">\n        <md-option>\n          None\n        </md-option>\n        <md-option *ngFor=\"let temp of tempList\" [value]=\"temp.id\">\n          {{temp.templateName}}\n        </md-option>\n      </md-select>\n    </div>\n    <div class=\"col-md-12 col-sm-12\">\n      <md-input-container class=\"width-100\">\n        <textarea mdInput rows=\"4\" placeholder=\"Job Description\" [value]=\"tag.job_description\" [(ngModel)]=\"tag.job_description\" required></textarea>\n      </md-input-container>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <md-slide-toggle [checked]=\"tag.is_email_send\" name=\"is_email_send\" style=\"width: 100%\" [(ngModel)]=\"tag.is_email_send\">Send Automatic Template</md-slide-toggle>\n      <md-slide-toggle [(ngModel)]=\"tag.assign_to_all_emails\" [checked]=\"tag.assign_to_all_emails\" [ngClass]=\"{'toggle-green':tag.assign_to_all_emails}\"\n        name=\"assign\" style=\"width: 100%\">Assign to all existing mails</md-slide-toggle>\n    </div>\n    <div class=\"col-md-12 col-sm-12\">\n      <h4> Tag Color </h4>\n      <div class=\"selected-color\" [ngStyle]=\"{'background-color': originalcolor}\"></div>\n      <div class=\"color-box\">\n        <div class=\"selected-color\" *ngFor=\"let color of availableColors\" (click)=\"originalcolor = color\" [ngStyle]=\"{'background-color': color}\"></div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <button md-raised-button (click)=\"close()\">Close</button>\n      <button md-raised-button color=primary [disabled]=\"tag.job_description.length <= 0\" (click)=\"save()\">Save</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/automatic-tag-modal/automatic-tag-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 320px) and (max-width: 988px) {\n  .edit-tag .col-md-12, .edit-tag .col-sm-12 {\n    padding: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/automatic-tag-modal/automatic-tag-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutomaticTagModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AutomaticTagModalComponent = (function () {
    function AutomaticTagModalComponent(dialogRef, tagupdate) {
        this.dialogRef = dialogRef;
        this.tagupdate = tagupdate;
        this.originalcolor = '';
        this.originaltitle = '';
        this.availableColors = __WEBPACK_IMPORTED_MODULE_3__config_config__["b" /* color_list */];
    }
    AutomaticTagModalComponent.prototype.ngOnInit = function () {
        this.originaltitle = this.tag.title;
        this.originalcolor = this.tag.color;
        this.temp_id = this.tag.template_id;
        if (this.tag['from']) {
            this.tag['from'] = __WEBPACK_IMPORTED_MODULE_4_moment__(this.tag['from']).format('YYYY-MM-DD');
        }
        if (this.tag['to']) {
            this.tag['to'] = __WEBPACK_IMPORTED_MODULE_4_moment__(this.tag['to']).format('YYYY-MM-DD');
        }
    };
    AutomaticTagModalComponent.prototype.save = function () {
        var _this = this;
        this.tag.title = this.originaltitle;
        this.tag.color = this.originalcolor;
        this.tag.template_id = this.temp_id;
        this.tagupdate.updateTag(this.tag, this.tag.type).subscribe(function (data) {
            _this.dialogRef.close('updated');
        }, function (err) {
            console.log(err);
        });
    };
    AutomaticTagModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AutomaticTagModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-automatic-tag-modal',
            template: __webpack_require__("../../../../../src/app/modules/automatic-tag-modal/automatic-tag-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/automatic-tag-modal/automatic-tag-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], AutomaticTagModalComponent);
    return AutomaticTagModalComponent;
    var _a, _b;
}());

//# sourceMappingURL=automatic-tag-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/automatic-tag/automatic-tag.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainform\" *ngIf=\"!loading\">\n    <p class=\"font-18\">Automatic tag(s)</p>\n    <hr class=\"linespace\">\n    <span *ngFor=\"let tag of tags?.Automatic\">\n            <div class=\"tagbutton1\" [style.background-color]=\"tag.color\" *ngIf=\"!tag.is_job_profile_tag\">\n                <div class=\"taglogo\" (click)=\"openAutomatic(tag)\">\n                {{tag.title.charAt(0)}}\n                </div>\n                <span class=\"tagname\" (click)=\"openAutomatic(tag)\">\n                    {{tag.title}}\n                </span>\n    <md-icon class=\"iconset\" (click)=\"removeTag(tag.id,'Automatic')\">cancel</md-icon>\n</div>\n</span>\n</div>\n\n<div class=\"pos-add\" *ngIf=\"!loading\">\n    <button md-fab (click)=\"addTag()\">\n        <md-icon>add</md-icon>\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/automatic-tag/automatic-tag.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainform {\n  margin-bottom: 10px;\n  background-color: #ffffff;\n  padding: 10px;\n  border-radius: 4px; }\n\n.font-18 {\n  font-size: 18px;\n  margin: 5px 0px; }\n\n.tagbutton {\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  cursor: default;\n  text-decoration: none;\n  margin: 4px;\n  padding: 0px;\n  outline: none;\n  border-radius: 16px;\n  width: -webkit-fit-content; }\n\n.tagbutton1 {\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  cursor: pointer;\n  margin: 4px;\n  padding: 0px;\n  outline: none;\n  border-radius: 16px;\n  width: -webkit-fit-content; }\n\n.taglogo {\n  color: #ffffff;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 16px;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  margin-right: -4px;\n  -webkit-user-select: none; }\n\n.tagname {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 32px;\n  padding-left: 12px;\n  padding-right: 12px;\n  opacity: 0.8;\n  white-space: nowrap;\n  -webkit-user-select: none; }\n\n.linespace {\n  opacity: 0.5;\n  margin-bottom: 15px; }\n\n.iconset {\n  margin: 0px 4px 0px -8px;\n  opacity: 0.5;\n  position: relative;\n  top: 5px; }\n\n.iconset:hover, .tagname:hover {\n  opacity: 1; }\n\n.pos-add {\n  position: fixed;\n  right: 10px;\n  bottom: 20px; }\n\n.center {\n  position: absolute;\n  left: 45%;\n  top: 30%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/automatic-tag/automatic-tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__automatic_tag_modal_automatic_tag_modal_component__ = __webpack_require__("../../../../../src/app/modules/automatic-tag-modal/automatic-tag-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_tag_modal_add_tag_modal_component__ = __webpack_require__("../../../../../src/app/modules/add-tag-modal/add-tag-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutomaticTagComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AutomaticTagComponent = (function () {
    function AutomaticTagComponent(gettags, dialog, viewContainerRef, snackBar) {
        this.gettags = gettags;
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.snackBar = snackBar;
        this.loading = false;
    }
    AutomaticTagComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getAllTag();
        this.getAllTemp();
    };
    AutomaticTagComponent.prototype.getAllTemp = function () {
        var _this = this;
        this.gettags.getTemplate().subscribe(function (data) {
            _this.tempList = data;
        }, function (err) {
            console.log(err);
        });
    };
    AutomaticTagComponent.prototype.getAllTag = function () {
        var _this = this;
        this.gettags.getAllTags()
            .subscribe(function (data) {
            _this.formatTagsInArray(data);
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    AutomaticTagComponent.prototype.removeTag = function (id, type) {
        var _this = this;
        this.gettags.deleteTag(id, type)
            .subscribe(function (data) {
            _this.getAllTag();
        }, function (err) {
            console.log(err);
        });
    };
    AutomaticTagComponent.prototype.openAutomatic = function (tag1) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__automatic_tag_modal_automatic_tag_modal_component__["a" /* AutomaticTagModalComponent */], {});
        this.dialogRef.componentInstance.tag = tag1;
        this.dialogRef.componentInstance.tempList = this.tempList;
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'updated') {
                _this.snackBar.open('Tag Updated Successfully', '', {
                    duration: 2000,
                });
                _this.dialogRef = null;
                _this.getAllTag();
            }
        });
    };
    AutomaticTagComponent.prototype.addTag = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__add_tag_modal_add_tag_modal_component__["a" /* AddTagModalComponent */], {});
        this.dialogRef.componentInstance.tempList = this.tempList;
        this.dialogRef.componentInstance.addTagType = 'automatic';
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'Added') {
                _this.dialogRef = null;
                _this.getAllTag();
            }
        });
    };
    AutomaticTagComponent.prototype.formatTagsInArray = function (data) {
        this.tags = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].type === 'Default') {
                if (!this.tags['Default']) {
                    this.tags['Default'] = [];
                    this.tags['Default'].push(data[i]);
                }
                else {
                    this.tags['Default'].push(data[i]);
                }
            }
            else if (data[i].type === 'Manual') {
                if (!this.tags['Manual']) {
                    this.tags['Manual'] = [];
                    this.tags['Manual'].push(data[i]);
                }
                else {
                    this.tags['Manual'].push(data[i]);
                }
            }
            else if (data[i].type === 'Automatic') {
                if (!this.tags['Automatic']) {
                    this.tags['Automatic'] = [];
                    this.tags['Automatic'].push(data[i]);
                }
                else {
                    this.tags['Automatic'].push(data[i]);
                }
            }
        }
        this.loading = false;
    };
    AutomaticTagComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-automatic-tag',
            template: __webpack_require__("../../../../../src/app/modules/automatic-tag/automatic-tag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/automatic-tag/automatic-tag.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdSnackBar */]) === "function" && _d || Object])
    ], AutomaticTagComponent);
    return AutomaticTagComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=automatic-tag.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/changepassword/changepassword.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 align=\"center\">\n  Change Password Component\n</h3>\n"

/***/ }),

/***/ "../../../../../src/app/modules/changepassword/changepassword.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/changepassword/changepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangePasswordComponent = (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__("../../../../../src/app/modules/changepassword/changepassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/changepassword/changepassword.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());

//# sourceMappingURL=changepassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/compose-email/compose-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <p class=\"h-text\">Send Email</p>\n</div>\n<form autoComplete=\"off\" #composeEmail=\"ngForm\" *ngIf=\"formOpen\">\n    <p *ngIf=\"showMessage\" class=\"error-show\">{{message}}</p>\n    <div class=\"con-pg\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n        <div class=\"main\">\n            <p>\n                <md-input-container class=\"width-100\" *ngIf=\"emails\">\n                    <input mdInput type=\"text-area\" [disabled]=\"true\" placeholder=\"Email\" autoComplete=\"off\" name=\"email\" required [(ngModel)]=\"emails\">\n                    <md-error>Required</md-error>\n                </md-input-container>\n                <md-card class=\"width-100\" style=\"box-shadow: none;\" *ngIf=\"emailParentId\">\n                  <md-card-header>\n                    <md-card-subtitle>Tag <sup>*</sup></md-card-subtitle>\n                    <md-card-subtitle>{{emailParenttitle}} - <b>{{emailChildTitle}}</b></md-card-subtitle>\n                  </md-card-header>\n                </md-card>\n                <md-input-container class=\"width-25\">\n                    <input mdInput placeholder=\"Subject\" [disabled]=\"true\" autoComplete=\"off\" name=\"fixedsubject\" required [(ngModel)]=\"subject_for_genuine\">\n                    <md-error>Required</md-error>\n                </md-input-container>\n                <md-input-container class=\"width-75\">\n                    <input mdInput placeholder=\"\" autoComplete=\"off\" name=\"subject\" required [(ngModel)]=\"subject\">\n                    <md-error>Required</md-error>\n                </md-input-container>\n                <md-select placeholder=\"Select Template\" class=\"width-25\" [(ngModel)]=\"selectedTemplate\" (change)=\"selectTemplate(selectedTemplate)\" [ngModelOptions]=\"{standalone: true}\">\n                    <md-option *ngFor=\"let template of templates\" [value]=\"template\">\n                        {{ template.templateName }}\n                    </md-option>\n                </md-select>\n                <ckeditor [config]=\"{uiColor: '#00ffff'}\" debounce=\"500\" [(ngModel)]=\"body\" [ngModelOptions]=\"{standalone: true}\"></ckeditor>\n            </p>\n        </div>\n    </div>\n    <div class=\"fx-pos\">\n    \t<button md-raised-button (click)=\"close()\">Back</button>\n    \t<button md-raised-button color=\"accent\" (click)=\"save(composeEmail)\">Send</button>\n    </div>\n</form>\n<md-card *ngIf=\"!formOpen\">\n    <h4 *ngIf=\"sendSuccessEmailList && sendSuccessEmailList.length > 0\">Send Success Email List</h4>\n    <ol>\n        <li *ngFor=\"let successEmail of sendSuccessEmailList;\">{{successEmail}}</li>\n    </ol>\n    <h4 *ngIf=\"sendFailedEmailList && sendFailedEmailList.length > 0\">Send Failed Email List</h4>\n    <ol>\n        <li *ngFor=\"let failedEmail of sendFailedEmailList;\">{{failedEmail}}</li>\n    </ol>\n    <div class=\"fx-pos\" style=\"padding: 8px;\">\n        <button md-raised-button (click)=\"close()\">Back</button>\n    </div>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/modules/compose-email/compose-email.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  border-bottom: 1px solid black; }\n\n.h-text {\n  font-size: 20px;\n  opacity: 0.8; }\n\n.width-100 {\n  width: 100%; }\n  .width-100 div {\n    margin: 0px; }\n\n.width-75 {\n  width: 73%; }\n\n.width-25 {\n  width: 25%; }\n\n.sidenav {\n  padding: 5px; }\n\n.d-c {\n  background: #e0f7fa; }\n\n.h-d {\n  padding: 9px;\n  background: cyan;\n  width: 100%; }\n\nmd-card {\n  padding: 1px !important; }\n\n.con-btn {\n  text-align: left;\n  padding: 6px;\n  width: 100%; }\n\n.fx-pos {\n  float: right; }\n\n.error-show {\n  color: red;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/compose-email/compose-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setvaremailpreview_setvaremailpreview_component__ = __webpack_require__("../../../../../src/app/modules/setvaremailpreview/setvaremailpreview.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeEmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComposeEmailComponent = (function () {
    function ComposeEmailComponent(setvardialog, dialogRef, sendToManyEmail, snackBar) {
        this.setvardialog = setvardialog;
        this.dialogRef = dialogRef;
        this.sendToManyEmail = sendToManyEmail;
        this.snackBar = snackBar;
        this.formOpen = true;
        this.pendingVariables = [];
        this.filteredTemp = {};
        this.subject = '';
    }
    ComposeEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showMessage = false;
        this.emails = this.emailList ? this.emailList.toString() : false;
        this.sendToManyEmail.getTemplate().subscribe(function (res) {
            _this.templates = res;
        }, function (err) {
            console.log(err);
        });
    };
    ComposeEmailComponent.prototype.selectTemplate = function (seletectTemplated) {
        var _this = this;
        this.body = '';
        this.selectedTempplateId = seletectTemplated['id'];
        if (seletectTemplated['subject']) {
            this.subject = seletectTemplated['subject'] + ' ' + this.subject;
        }
        this.sendToManyEmail.testTemplate(seletectTemplated.id).subscribe(function (data) {
            _this.body = data;
        }, function (err) {
            console.log(err);
        });
    };
    ComposeEmailComponent.prototype.save = function (form) {
        if (form.valid) {
            form.value.subject = this.subject_for_genuine + ' ' + this.subject;
            form.value.body = this.body;
            form.value.template_id = this.selectedTempplateId;
            if (this.emails) {
                form.value.emails = this.emailList;
                this.getUnsavedVariable(form);
            }
            else if (this.emailParentId && this.emailChildId) {
                if (this.emailParentId === this.emailChildId) {
                    form.value.tag_id = this.emailParentId;
                }
                else {
                    form.value.tag_id = this.emailParentId;
                    form.value.default_id = this.emailChildId;
                }
                this.getUnsavedVariable(form);
            }
        }
    };
    ComposeEmailComponent.prototype.getUnsavedVariable = function (form) {
        var _this = this;
        var stringtocheck = this.body;
        var regx = /#[\w-]+\|[\w -\.,@$%&*!:%^\\\/]+\||#[\w-]+/ig;
        var result = stringtocheck.match(regx);
        this.pendingVariables = [];
        if (result !== null && result.length > 0 && !this.notGenuine) {
            result = __WEBPACK_IMPORTED_MODULE_3_lodash__["uniq"](result);
            result.map(function (str) {
                var start_pos = str.indexOf('|') + 1;
                var end_pos = str.indexOf('|', start_pos);
                var defaultValue = str.substring(start_pos, end_pos);
                _this.pendingVariables.push({ name: str, value: defaultValue });
            });
            this.setVariable(form);
        }
        else {
            this.setVariable(form);
        }
    };
    ComposeEmailComponent.prototype.setVariable = function (form) {
        var _this = this;
        this.SetvaremaildialogRef = this.setvardialog.open(__WEBPACK_IMPORTED_MODULE_4__setvaremailpreview_setvaremailpreview_component__["a" /* SetvaremailpreviewComponent */], {
            height: '60%',
            width: '40%'
        });
        this.filteredTemp['subject'] = form.value.subject;
        this.filteredTemp['body'] = this.body;
        this.filteredTemp['template_id'] = form.value.template_id;
        if (form.value['default_id'] || form.value['tag_id']) {
            this.filteredTemp['default_id'] = form.value['default_id'];
            this.filteredTemp['tag_id'] = form.value['tag_id'];
        }
        this.SetvaremaildialogRef.componentInstance.pendingVariables = this.pendingVariables;
        this.SetvaremaildialogRef.componentInstance.temp = this.filteredTemp;
        this.SetvaremaildialogRef.componentInstance.notGenuine = this.notGenuine;
        this.SetvaremaildialogRef.componentInstance.userDetails = { 'CandidateEmail': this.emailList };
        this.SetvaremaildialogRef.afterClosed().subscribe(function (result) {
            _this.SetvaremaildialogRef.close();
            _this.SetvaremaildialogRef = null;
            if (result !== 'close') {
                _this.dialogRef.close('done');
                _this.dialogRef = null;
            }
        });
    };
    ComposeEmailComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ComposeEmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-compose-email-temp',
            template: __webpack_require__("../../../../../src/app/modules/compose-email/compose-email.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/compose-email/compose-email.component.scss")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSnackBar */]) === "function" && _d || Object])
    ], ComposeEmailComponent);
    return ComposeEmailComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=compose-email.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/confirmation-dialog/confirmation-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Confirm Please</h1>\n<div md-dialog-content>{{message}}</div>\n<div md-dialog-actions>\n  <button md-raised-button md-dialog-close=\"yes\">Yes</button>\n  <button md-raised-button md-dialog-close=\"no\">No</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/confirmation-dialog/confirmation-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-content {\n  margin: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/confirmation-dialog/confirmation-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmationDialogComponent = (function () {
    function ConfirmationDialogComponent() {
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__("../../../../../src/app/modules/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/confirmation-dialog/confirmation-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());

//# sourceMappingURL=confirmation-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/core/core.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"width100\">\n  <md-sidenav #sidenav class=\"main\">\n    <div class=\"mainlogo\">\n      <img src=\"assets/logo.png\">\n    </div>\n    <hr>\n    <div class=\"hovestyle\" (click)=\"goto('dashboard','Dashboard');sidenav.close()\">\n      <p class=\"mainnav\">Dashboard</p>\n    </div>\n    <hr>\n    <div class=\"hovestyle\" (click)=\"goto('inbox','Inbox');sidenav.close()\">\n      <p class=\"mainnav\">Inbox</p>\n    </div>\n    <hr>\n    <div class=\"hovestyle\" (click)=\"goto('setting','Settings');sidenav.close()\">\n      <p class=\"mainnav\">Settings</p>\n    </div>\n    <hr>\n    <hr>\n    <div class=\"hovestyle\" (click)=\"logout()\">\n      <p class=\"mainnav\">Logout</p>\n    </div>\n    <hr>\n  </md-sidenav>\n  <div class=\"bgcolor container-fluid\">\n    <div class=\"row\">\n      <md-toolbar color=\"accent\">\n        <button md-icon-button (click)=\"sidenav.open()\">\n          <md-icon>menu</md-icon>\n          </button>\n        <span>{{title}}</span>\n        <button md-icon-button mdTooltip=\"Fetch Latest Emails\" class=\"cursor-pt\" *ngIf=\"title == 'Inbox'\" (click)=\"emailRefresh()\">\n        <md-icon>system_update_alt</md-icon>\n      </button>\n        <button md-icon-button mdTooltip=\"Fetch Emails By Days\" class=\"cursor-pt\" *ngIf=\"title == 'Settings'\" (click)=\"fetchEmailByDay()\">\n        <i>\n        <small><md-icon>system_update_alt</md-icon></small>\n        </i>\n      </button>\n        <md-spinner class=\"commonSpinner\" *ngIf=\"progressSpinnner\"></md-spinner>\n      </md-toolbar>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/modules/core/core.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-sidenav {\n  width: 280px; }\n\n@media screen and (min-width: 320px) {\n  md-sidenav {\n    width: 240px; } }\n\n@media screen and (min-width: 480px) {\n  md-sidenav {\n    width: 280px; } }\n\nmd-toolbar {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n\n.width100 {\n  width: 100%; }\n\n.mainnav {\n  margin-left: 15px;\n  margin-bottom: 0px;\n  font-size: 16px; }\n\n.hovestyle {\n  padding: 10px 0px;\n  position: relative;\n  cursor: pointer; }\n\nmd-sidenav-container {\n  height: 100%; }\n  md-sidenav-container md-sidenav hr {\n    margin: -1px 0px 0px;\n    height: 1px;\n    border: none;\n    background-color: #e0e0e0; }\n  md-sidenav-container md-sidenav div.hovestyle:hover {\n    background-color: #ecf5ef; }\n\n.mainlogo {\n  background-color: #2e3e4e;\n  text-align: center;\n  padding: 30px; }\n\n.main {\n  text-decoration: none; }\n  .main a:hover {\n    text-decoration: none; }\n\n.bgcolor {\n  background-color: #2e3e4e;\n  width: 100%;\n  height: 100%; }\n\n.cursor-pt {\n  cursor: pointer;\n  position: absolute;\n  right: 10px; }\n\n.mat-list-item-content {\n  height: auto !important; }\n\n.commonSpinner {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 40px; }\n  .commonSpinner path {\n    stroke: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/core/core.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_local_storage_service__ = __webpack_require__("../../../../../src/app/service/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_dialog_service__ = __webpack_require__("../../../../../src/app/service/dialog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CoreComponent = (function () {
    function CoreComponent(_router, getNewEmail, access, _localStorageService, _dialogService) {
        var _this = this;
        this._router = _router;
        this.getNewEmail = getNewEmail;
        this.access = access;
        this._localStorageService = _localStorageService;
        this._dialogService = _dialogService;
        this.title = 'Inbox';
        this.progressSpinnner = false;
        this.routerInboxPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationStart */]) {
                if (event['url'] === '/core/inbox') {
                    _this.routerInboxPage.emit();
                }
            }
            _this.title = __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* config */]['titles'][event['url'].substr(0, 13)];
        });
        this.role = this._localStorageService.getItem('role');
    }
    CoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.access.verifyAccess().subscribe(function (data) {
            if (!data.status) {
                _this.logout();
            }
        }, function (err) {
            if (!err.status) {
                _this.logout();
            }
        });
        this.getNewEmail.apiStartEvent.subscribe(function () {
            _this.progressSpinnner = true;
        });
        this.getNewEmail.apiEndEvent.subscribe(function () {
            _this.progressSpinnner = false;
        });
    };
    CoreComponent.prototype.emailRefresh = function () {
        this.getNewEmail.fetchNewEmail();
    };
    CoreComponent.prototype.goto = function (path, navtitle) {
        this.title = navtitle;
        this._router.navigate(['/core/' + path]);
    };
    CoreComponent.prototype.fetchEmailByDay = function () {
        this._dialogService.fetchEmailByDay();
    };
    CoreComponent.prototype.logout = function () {
        var _this = this;
        this.access.removeToken().then(function (data) {
            if (data) {
                _this._router.navigate(['']);
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
    ], CoreComponent.prototype, "routerInboxPage", void 0);
    CoreComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-core',
            template: __webpack_require__("../../../../../src/app/modules/core/core.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/core/core.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_local_storage_service__["a" /* LocalStorageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_dialog_service__["a" /* DialogService */]) === "function" && _f || Object])
    ], CoreComponent);
    return CoreComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=core.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/cron-status-model/cron-status-model.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainform\">\n    <h3>Cron Status <md-spinner class=\"pull-right cron-spinner\" *ngIf=\"loading\" ></md-spinner></h3>\n    <p><b>Not Replied Candidate</b> : {{notRepliedCandidate}}</p>\n    <p><b>Pending Candidate Status</b> : {{pending_candidate_status}}</p>\n    <p><b>Send To All Status</b> : {{send_to_all_status}}</p>\n    <button class=\"pull-right\" md-raised-button (click)=\"close()\">Close</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/cron-status-model/cron-status-model.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/cron-status-model/cron-status-model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CronStatusModelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CronStatusModelComponent = (function () {
    function CronStatusModelComponent(dialogRef, _imapMailsService) {
        this.dialogRef = dialogRef;
        this._imapMailsService = _imapMailsService;
    }
    CronStatusModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this._imapMailsService.getCronStatus({ 'tag_id': this.emailParentId }).subscribe(function (res) {
            _this.loading = false;
            _this.notRepliedCandidate = res['notRepliedCandidate'];
            _this.pending_candidate_status = res['pending_candidate_status'];
            _this.send_to_all_status = res['send_to_all_status'];
        }, function (err) {
            console.log(err);
        });
    };
    CronStatusModelComponent.prototype.close = function () {
        this.dialogRef.close('back');
    };
    CronStatusModelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cron-status-model',
            template: __webpack_require__("../../../../../src/app/modules/cron-status-model/cron-status-model.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/cron-status-model/cron-status-model.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], CronStatusModelComponent);
    return CronStatusModelComponent;
    var _a, _b;
}());

//# sourceMappingURL=cron-status-model.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\" *ngIf=\"isHome\">\n  <img src=\"assets/logo.png\" class=\"img-responsive\" alt=\"Excellence Technologies\" />\n  <p (click)=\"logginpage()\" mdTooltip=\"Login\"><i class=\"material-icons\">power_settings_new</i></p>\n\n</div>\n<div class=\"dashboard\" *ngIf=\"dashboardData\">\n  <md-card>\n    <md-card-title>Jobs Application</md-card-title>\n    <md-select placeholder=\"\" class=\"job-selection\" [(ngModel)]=\"jobSelection\">\n      <md-option value=\"byDay\">\n        Day Wise\n      </md-option>\n      <md-option value=\"byMonth\">\n        Month Wise\n      </md-option>\n    </md-select>\n    <md-card-content *ngIf=\"jobSelection == 'byDay'\" >\n      <div class=\"charts\">\n        <canvas baseChart [datasets]=\"dashboardData.day_wise\" [labels]=\"dashboardData.day_wise[0]['dates']\" [options]=\"dashboardChartOptions\"\n          [legend]=\"lineChartLegend\" [chartType]=\"'line'\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </md-card-content>\n    <md-card-content *ngIf=\"jobSelection == 'byMonth'\">\n      <div class=\"charts\">\n        <canvas baseChart [datasets]=\"dashboardData.month_wise\" [labels]=\"dashboardData.month_wise[0]['months']\" [options]=\"dashboardChartOptions\"\n          [legend]=\"lineChartLegend\" [chartType]=\"'line'\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </md-card-content>\n  </md-card>\n  <md-card>\n    <md-card-title>Jobs Application - Round Distribution</md-card-title>\n    <md-card-content>\n      <div class=\"pie-chart\" *ngFor=\"let round of dashboardData.rounds; let i = index;\">\n        <p><b>{{round.label}}</b></p>\n        <div>\n          <canvas baseChart width=\"200\" height=\"200\" [data]=\"round.data\" [labels]=\"round.rounds\" [options]=\"pieChartOption\" [legend]=\"false\"\n            [chartType]=\"'pie'\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </div>\n    </md-card-content>\n  </md-card>\n  <md-card>\n    <md-card-title>Jobs Application Read</md-card-title>\n      <md-select placeholder=\"\" class=\"job-selection\" [(ngModel)]=\"jobApplicationReadSelection\">\n        <md-option value=\"byDay\">\n          By Day\n        </md-option>\n        <md-option value=\"byUser\">\n          By User\n        </md-option>\n      </md-select>\n      <md-card-content *ngIf=\"jobApplicationReadSelection == 'byDay'\">\n        <div class=\"charts\">\n            <canvas baseChart width=\"200\" height=\"200\" [datasets]=\"dashboardData.read_email_data\" [labels]=\"dashboardData.read_email_data[0]['dates']\" [options]=\"dashboardChartOptions\" [legend]=\"lineChartLegend\"\n              [chartType]=\"'line'\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </md-card-content>\n      <md-card-content *ngIf=\"jobApplicationReadSelection == 'byUser'\">\n        <div class=\"charts\">\n            <canvas baseChart width=\"200\" height=\"200\" [datasets]=\"dashboardData.read_mail_by_user\" [labels]=\"dashboardData.read_email_data[0]['dates']\" [options]=\"dashboardChartOptions\" [legend]=\"lineChartLegend\"\n              [chartType]=\"'line'\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n        </div>\n      </md-card-content>\n  </md-card>\n\n  <md-card>\n    <md-card-title>Automatic Email</md-card-title>\n    <md-select placeholder=\"\" class=\"job-selection\" [(ngModel)]=\"automaticEmailReadSelection\">\n      <md-option value=\"byDay\">\n        By Day\n      </md-option>\n      <md-option value=\"byProfile\">\n        By Profile\n      </md-option>\n    </md-select>\n    <md-card-content *ngIf=\"automaticEmailReadSelection == 'byDay'\">\n      <div class=\"charts\">\n        <canvas baseChart [datasets]=\"dashboardData.email_stat\" [labels]=\"dashboardData.email_stat[0]['dates']\" [options]=\"dashboardChartOptions\"\n          [legend]=\"lineChartLegend\" [chartType]=\"'bar'\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </md-card-content>\n    <md-card-content  *ngIf=\"automaticEmailReadSelection == 'byProfile'\">\n      <div class=\"charts\">\n        <canvas baseChart width=\"200\" height=\"200\" [datasets]=\"dashboardData.email_stat_by_job_profile\" [labels]=\"dashboardData.email_stat_by_job_profile[0]['dates']\" [options]=\"dashboardChartOptions\" [legend]=\"lineChartLegend\"\n        [chartType]=\"'line'\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard {\n  padding: 10px;\n  background-color: #2e3e4e; }\n  .dashboard md-card {\n    margin: 10px; }\n    .dashboard md-card .charts canvas {\n      height: 300px; }\n    .dashboard md-card .pie-chart {\n      display: inline-block;\n      min-width: 49%;\n      text-align: center; }\n  .dashboard .job-selection {\n    position: absolute;\n    right: 1.8em;\n    top: 1.5em; }\n\n@media screen and (min-width: 320px) {\n  md-card md-card-title {\n    font-size: 16px; }\n  md-card md-select {\n    height: 22px;\n    max-width: 100px; }\n  md-card md-card-content {\n    text-align: center; } }\n\n@media screen and (min-width: 480px) {\n  md-card md-card-title {\n    font-size: 16px; }\n  md-card md-select {\n    height: 22px;\n    max-width: 100px; }\n  md-card md-card-content {\n    text-align: center; } }\n\n@media screen and (min-width: 768px) {\n  md-card md-card-title {\n    font-size: 18px; }\n  md-card .mat-select-trigger {\n    height: 22px; }\n  md-card md-card-content {\n    text-align: center; } }\n\n@media screen and (min-width: 900px) {\n  md-card md-card-title {\n    font-size: 20px; } }\n\n@media screen and (min-width: 1024px) {\n  md-card md-card-title {\n    font-size: 22px; } }\n\n@media screen and (min-width: 1200px) {\n  md-card md-card-title {\n    font-size: 24px; } }\n\n.nav {\n  background-color: #00BCD4;\n  height: 64px;\n  width: 100%;\n  color: #fff;\n  text-align: center; }\n  .nav img {\n    margin-top: 12px;\n    display: inline-block; }\n  .nav p {\n    display: inline-block;\n    float: right;\n    padding-right: 2em;\n    padding-top: 1.2em;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_dashboard_service__ = __webpack_require__("../../../../../src/app/service/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(access, _router, route, _apiService, _dashboardService) {
        this.access = access;
        this._router = _router;
        this.route = route;
        this._apiService = _apiService;
        this._dashboardService = _dashboardService;
        this.dashboardChartOptions = __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* config */].dashboardChartOptions;
        this.lineChartLegend = true;
        this.pieChartOption = __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* config */].dashboardPieChartOptions;
        this.jobSelection = 'byDay';
        this.jobApplicationReadSelection = 'byDay';
        this.automaticEmailReadSelection = 'byDay';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.data.subscribe(function (res) { return _this.isHome = res.isHome; });
        this.loadDashBoardData();
        this.dashboardIntervalSubscription = setInterval(function () {
            _this.loadDashBoardData();
        }, __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* config */].dashboardChartRefreshTime);
    };
    DashboardComponent.prototype.loadDashBoardData = function () {
        var _this = this;
        this._apiService.getDashboardData().subscribe(function (res) {
            _this.dashboardData = _this._dashboardService.formatChartData(res);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.dashboardIntervalSubscription);
    };
    DashboardComponent.prototype.logginpage = function () {
        var _this = this;
        this.access.verifyAccess().subscribe(function (data) {
            if (data.status) {
                _this._router.navigate(['/core/inbox']);
            }
        }, function (error) {
            _this._router.navigate(['login']);
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/modules/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__service_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_dashboard_service__["a" /* DashboardService */]) === "function" && _e || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/edit-variable/edit-variable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <p class=\"h-text\">Edit Variable</p>\n</div>\n<form autoComplete=\"off\" #updateVar=\"ngForm\" (ngSubmit)=\"update(updateVar)\">\n    <div class=\"con-pg\">\n        <div class=\"main\">\n            <p>\n                <md-input-container class=\"width-100\">\n                    <input mdInput placeholder=\"Enter Variable\" [(ngModel)]=\"varCode\" autoComplete=\"off\" name=\"variableCode\" required ngModel>\n                    <md-error>Required</md-error>\n                </md-input-container>\n            </p>\n               <md-radio-group class=\"pos-radio\" name=\"type\" [(ngModel)]=\"types\" ngModel>\n                    <md-radio-button [value]=\"0\" (click)=\"types = 0\">Add header/footer</md-radio-button>\n                    <md-radio-button [value]=\"1\" (click)=\"types = 1\">Other than header/footer</md-radio-button>\n                </md-radio-group>\n                <div class=\"editor\" *ngIf=\"types\">\n                <ckeditor [(ngModel)]=\"varValue\" name=\"variableValue\" \n                    [config]=\"{uiColor: '#00ffff'}\"\n                    debounce=\"500\" ngModel>\n                </ckeditor>\n                </div>\n                <div class=\"text-area\" *ngIf=\"!types\">\n                \t<md-input-container class=\"width-100\">\n                        <textarea mdInput name=\"variableValue\" mdTextareaAutosize  mdAutosizeMinRows=\"5\" placeholder=\" Write html code for header/footer\" [(ngModel)]=\"varValue\"></textarea>\n                    </md-input-container>\n                </div>\n        </div>\n    </div>\n    <div class=\"fx-pos\">\n    \t<button md-raised-button type=\"button\" (click)=\"close()\">BACK</button>\n    \t<button md-raised-button type=\"submit\" color=\"accent\">UPDATE</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/modules/edit-variable/edit-variable.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  position: relative;\n  top: -24px;\n  border-bottom: 1px solid black; }\n\n.h-text {\n  font-size: 20px;\n  opacity: 0.8; }\n\n.width-100 {\n  width: 100%; }\n\n.main {\n  padding: 10px; }\n\n.sidenav {\n  padding: 5px; }\n\n.d-c {\n  background: #e0f7fa; }\n\n.h-d {\n  padding: 9px;\n  background: cyan;\n  width: 100%; }\n\nmd-card {\n  padding: 1px !important; }\n\n.con-btn {\n  text-align: left;\n  padding: 6px;\n  width: 100%; }\n\n.fx-pos {\n  position: absolute;\n  top: 91%;\n  left: 75%; }\n\n.con-pg {\n  max-height: 422px !important;\n  overflow-y: auto; }\n\n.editor {\n  margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/edit-variable/edit-variable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditVariableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditVariableComponent = (function () {
    function EditVariableComponent(dialogRef, getVariable) {
        this.dialogRef = dialogRef;
        this.getVariable = getVariable;
    }
    EditVariableComponent.prototype.ngOnInit = function () {
        this.types = 1;
        this.varCode = this.userVar.variableCode;
        this.varValue = this.userVar.variableValue;
    };
    EditVariableComponent.prototype.update = function (form) {
        var _this = this;
        this.body = {
            'variableCode': this.varCode,
            'variableValue': this.varValue
        };
        this.getVariable.updateVariable(this.body, this.userVar.id).subscribe(function (data) {
            form.reset();
            _this.dialogRef.close();
        }, function (err) {
            console.log(err);
        });
    };
    EditVariableComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditVariableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-variable',
            template: __webpack_require__("../../../../../src/app/modules/edit-variable/edit-variable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/edit-variable/edit-variable.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], EditVariableComponent);
    return EditVariableComponent;
    var _a, _b;
}());

//# sourceMappingURL=edit-variable.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/email-logs/email-logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <h2><span>Email Logs</span>\n    <div class=\"search-container\">\n      <form>\n        <input type=\"search\" id=\"search\" name=\"searchTerm\" [formControl]=\"searchInput\" placeholder=\"Search...\" />\n        <button type=\"submit\" (click)=\"search(searchTerm)\" class=\"icon\"><i class=\"material-icons\">search</i></button>\n      </form>\n    </div>\n    <div class=\"pagination\">\n      <button [disabled]=\"page == 1\" (click)=\"previous()\"><i class=\"material-icons\">keyboard_arrow_left</i></button> {{page}}/{{totalPages}}\n      <button [disabled]=\"page == totalPages || totalPages == 0\" (click)=\"next()\"><i class=\"material-icons\">keyboard_arrow_right</i></button>\n    </div>\n  </h2>\n  <p class=\"error\" *ngIf=\"emailLogs && emailLogs.length == 0\">No Logs Found</p>\n  <div class=\"table-responsive\">\n    <table class=\"table\" cellspacing=\"0\" cellpadding=\"0\" *ngIf=\"emailLogs && emailLogs.length > 0\">\n      <thead>\n        <tr>\n          <th>To</th>\n          <th>From</th>\n          <th>Subject</th>\n          <th>User</th>\n          <th>Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let email of emailLogs; trackBy: emailLogsTrack\" (click)=\"previewEmail(email)\">\n          <td>{{email.email}}</td>\n          <td>{{email.from}}</td>\n          <td>{{email.subject}}</td>\n          <td>{{email.user}}</td>\n          <td>{{(email.time == 'Invalid date') ? email.time : (email.time | date: 'medium')}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/email-logs/email-logs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  background-color: #ffffff;\n  padding: 16px 16px;\n  border-radius: 3px;\n  min-height: 100px; }\n  .content h2 {\n    margin: 0px;\n    text-align: right;\n    position: relative; }\n    .content h2 span {\n      position: absolute;\n      left: 0px;\n      top: 4px; }\n  .content .error {\n    color: #f00;\n    text-align: center; }\n  .content table {\n    border-collapse: collapse;\n    width: 100%;\n    margin-top: 16px; }\n    .content table th {\n      background-color: #C9DFF0;\n      padding: 10px 0px 10px 6px;\n      text-align: left; }\n    .content table tbody > tr {\n      border-bottom: 1px solid #828282;\n      cursor: pointer; }\n    .content table tr td {\n      padding: 10px 6px;\n      max-width: 400px; }\n\n@media screen and (min-width: 320px) and (max-width: 479px) {\n  h2 {\n    text-align: left !important; }\n    h2 span {\n      position: static !important; }\n  input#search {\n    width: 260px !important; } }\n\n@media screen and (min-width: 480px) and (max-width: 767px) {\n  h2 {\n    text-align: left !important; }\n    h2 span {\n      position: static !important; } }\n\n.pagination {\n  font-size: 14px;\n  display: inline-block; }\n  .pagination button {\n    background: transparent;\n    border: none;\n    outline: none;\n    vertical-align: middle; }\n  .pagination i {\n    cursor: pointer; }\n\n.search-container {\n  overflow: hidden;\n  width: 300px;\n  vertical-align: middle;\n  white-space: nowrap;\n  display: inline-block; }\n  .search-container input#search {\n    width: 300px;\n    height: 40px;\n    border: 1px solid #2b303b;\n    font-size: 10pt;\n    float: left;\n    color: #000;\n    padding-left: 15px;\n    border-radius: 5px; }\n  .search-container button.icon {\n    -webkit-border-top-right-radius: 5px;\n    -webkit-border-bottom-right-radius: 5px;\n    -moz-border-radius-topright: 5px;\n    -moz-border-radius-bottomright: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border: none;\n    background: #232833;\n    height: 40px;\n    width: 50px;\n    color: #fff;\n    opacity: 0;\n    font-size: 10pt;\n    outline: none;\n    opacity: 1;\n    margin-left: -50px;\n    cursor: pointer; }\n  .search-container input#search::-webkit-input-placeholder,\n  .search-container input#search:-moz-placeholder,\n  .search-container input#search::-moz-placeholder,\n  .search-container input#search:-ms-input-placeholder {\n    color: #65737e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/email-logs/email-logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_dialog_service__ = __webpack_require__("../../../../../src/app/service/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailLogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailLogsComponent = (function () {
    function EmailLogsComponent(_apiService, _dialogService) {
        this._apiService = _apiService;
        this._dialogService = _dialogService;
        this.page = 1;
        this.totalPages = 1;
        this.limit = 100;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]();
        this.searchTerm = '';
    }
    EmailLogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchInput.valueChanges
            .debounceTime(500)
            .subscribe(function (newValue) { return _this.search(newValue); });
        this.getEmailLogs();
    };
    EmailLogsComponent.prototype.getEmailLogs = function () {
        var _this = this;
        this._apiService.getEmailLogs({ 'page': this.page, 'email': this.searchTerm, 'limit': this.limit }).subscribe(function (res) {
            _this.emailLogs = res['data'];
            _this.totalPages = Math.ceil(res['count'] / _this.limit);
        }, function (err) {
            console.log(err);
        });
    };
    EmailLogsComponent.prototype.previous = function () {
        --this.page;
        this.getEmailLogs();
    };
    EmailLogsComponent.prototype.next = function () {
        ++this.page;
        this.getEmailLogs();
    };
    EmailLogsComponent.prototype.previewEmail = function (emailData) {
        this._dialogService.previewEmail(emailData).then(function (res) {
            console.log(res);
        });
    };
    EmailLogsComponent.prototype.search = function (searchText) {
        this.page = 1;
        if (searchText && searchText.length > 0) {
            this.searchTerm = searchText;
            this.getEmailLogs();
        }
        else {
            this.searchTerm = null;
            this.getEmailLogs();
        }
    };
    EmailLogsComponent.prototype.emailLogsTrack = function (index, data) {
        return data['_id'] || index;
    };
    EmailLogsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-logs',
            template: __webpack_require__("../../../../../src/app/modules/email-logs/email-logs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/email-logs/email-logs.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_dialog_service__["a" /* DialogService */]) === "function" && _b || Object])
    ], EmailLogsComponent);
    return EmailLogsComponent;
    var _a, _b;
}());

//# sourceMappingURL=email-logs.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/email-modal/email-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"background-white\">\n<div class=\"m-b\">\n    <div class=\"default-tag-buttons\" *ngIf=\"historyList.data\">\n        <button md-raised-button mdTooltip=\"Back\" mdTooltipPosition=\"below\" class=\"cyan back-button\" (click)=\"back()\"><i class=\"material-icons\">subdirectory_arrow_left</i></button>\n        <button md-raised-button mdTooltip=\"Send Email\" mdTooltipPosition=\"below\" class=\"cyan send-email\" (click)=\"sendEmail()\">Send Email</button>\n    </div>\n    <h4 *ngIf=\"error\" style=\"color: red; text-align: center;\">{{errorMessageText}}</h4>\n</div>\n<div class=\"bod\" *ngFor=\"let H_email of historyList.data; trackBy: historyListDataTrack;\">\n    <div class=\"b-b\" *ngIf=\"selectedEmail\">\n        <h3 class=\"font-300\" *ngIf=\"historyList.data.length == 1\">{{H_email.subject}}</h3>\n        <h3 class=\"font-300 pointer\" [ngClass]=\" (!H_email.accordianIsOpen) ? 'accordian-close' : 'accordian-open'\" *ngIf=\"historyList.data.length > 1\" (click)=\"openAccordian(H_email)\">{{H_email.subject}}</h3>\n        <div class=\"accordian-icon-box\" *ngIf=\"historyList.data.length > 1\" (click)=\"openAccordian(H_email)\">\n            <md-icon style=\"font-size: 24px!important;\" *ngIf=\"H_email.accordianIsOpen\">keyboard_arrow_up</md-icon>\n            <span *ngIf=\"!H_email.accordianIsOpen\"><i *ngIf=\"H_email.is_attachment\"  class=\"material-icons\">attach_file</i>{{H_email.date | date: 'medium'}} </span>\n            <md-icon style=\"font-size: 24px!important;\" *ngIf=\"!H_email.accordianIsOpen\">keyboard_arrow_down</md-icon>\n        </div>\n    </div>\n    <div [@collapseChange]=\"H_email.accordianIsOpen\" *ngIf=\"H_email.accordianIsOpen\">\n    <div class=\"p-y\">\n        from\n        <a>{{H_email.from}} {{H_email.sender_mail}}</a>\n        <span class=\"text-xs\"> on {{H_email.date | date: 'medium'}}</span>\n    </div>\n    <div class=\"default-tag-buttons\" *ngIf=\"historyList.data && H_email.accordianIsOpen && selectedTag && selectedTag >= 0\">\n        <span *ngFor=\"let tag of tags.Default; trackBy: tagsDefaultTrack\">\n            <a md-raised-button class=\"cyan\" *ngIf=\"tag.id != selectedTag && tag.title != 'All'\" [ngStyle]=\"getColor(tag.title)\" (click)=\"assignTag(tag.id, H_email._id, tag.title, H_email)\"><i class=\"material-icons\">{{getIcon(tag.title)}}</i> {{tag.title}}\n            </a>\n        </span>\n        <button md-raised-button mdTooltip=\"Add Note\" mdTooltipPosition=\"below\" class=\"cyan\" (click)=\"addNote(H_email._id)\">Add Note</button>\n    </div>\n    <div class=\"default-tag-buttons\" *ngIf=\"historyList.data && H_email.accordianIsOpen && !selectedTag || selectedTag == -1\">\n        <span *ngFor=\"let tag of inboxMailsTagsForEmailListAndModel.data; trackBy: inboxMailsTagsForEmailListAndModelDataTrack\">\n            <a md-raised-button class=\"cyan\" [ngStyle]=\"getColor(tag.title)\" (click)=\"assignTag(tag.id, H_email._id, tag.title, H_email)\"><i class=\"material-icons\">{{getIcon(tag.title)}}</i> {{tag.title}}\n            </a>\n        </span>\n        <!-- <span  class=\"cyan\" (click)=\"addNote()\">Add Note</span> -->\n        <button md-raised-button mdTooltip=\"Add Note\" mdTooltipPosition=\"below\" class=\"cyan\" (click)=\"addNote(H_email._id)\">Add Note</button>\n    </div>\n    <div *ngIf=\"H_email?.attachment?.length\" class=\"attachment-container\" style=\"width: 60%; display: inline-block;\">\n        <h4 class=\"at-hed\">Attachments</h4>\n        <div class=\"attach\" *ngFor=\"let attach of H_email.attachment; trackBy: H_emailAttachmentTrack;\" (click)=\"openAttachment(attach.link)\">\n            <a class=\"attach-click\"><i>View</i></a>\n            <iframe id=\"IframeId\" class=\"email-attachment\" [src]=\"attach.link | safeUrl\">\n              <p>Your browser does not support iframes.</p>\n            </iframe>\n            <div class=\"at-hd\">\n                <a>{{attach.name}}</a>\n            </div>\n        </div>\n    </div>\n    <div [innerHTML]=\"H_email.body | safeHtml\" class=\"email-body\" [ngStyle]=\"{ 'width': (H_email?.attachment?.length) ? '36%' : '100%'}\">\n    </div>\n       <div>\n       <h3>Notes</h3>\n         <div class=\"maindiv\"  *ngFor=\"let note of H_email.notes ; let i = index \">\n       <p class=\"fontstyle\">{{note.assignee}}</p>\n       <div class=\"childdiv\" contenteditable=\"true\"  mdTooltip=\"Edit Note\" mdTooltipPosition=\"below\" (input)=\"eventHandler($event,note.date,note.time,H_email._id)\" (focusout)=\"update($event,i)\">{{note.note}}\n    </div>\n    <div class=\"footer\">\n       <p class=\"datestyle\">{{note.date}} {{note.time}}</p>\n    </div>\n    </div>\n    </div>\n    </div>\n    <div class=\"clearfix\">\n    </div>\n\n</div>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/modules/email-modal/email-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\n  padding: 0 14px; }\n\n.background-white {\n  background-color: #fff;\n  pointer-events: all; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.send-email {\n  position: absolute;\n  top: 10px;\n  right: 30px; }\n\nmd-toolbar {\n  background-color: cyan; }\n\n.header {\n  margin-bottom: 30px; }\n\n.m-b {\n  margin-bottom: 1rem !important; }\n\n.cyan {\n  background-color: cyan;\n  margin-left: 1px;\n  margin-right: 5px; }\n\n.c-his {\n  background-color: #71B9F9;\n  margin-left: 1px;\n  margin-right: 5px; }\n\n.b-b {\n  border-bottom: 2px solid rgba(120, 130, 140, 0.13);\n  position: relative; }\n\n.p-y {\n  padding-bottom: 1 rem !important;\n  padding-top: 1 rem !important;\n  margin-top: 15px;\n  margin-bottom: 15px; }\n  .p-y a {\n    cursor: pointer;\n    outlint: 0;\n    text-decoration: none; }\n\n.text-xs {\n  font-size: .75rem; }\n\n.font-300 {\n  margin-bottom: 5px;\n  font-weight: bold; }\n\n.ifset {\n  height: 500px;\n  width: 100%; }\n\n.no-pos {\n  padding: 0px !important; }\n\nmd-grid-tile {\n  overflow: visible; }\n\n.mat-grid-tile {\n  overflow: auto; }\n\n.f-r {\n  left: 83%; }\n\n.h-ps {\n  margin: 6px; }\n\n.labels {\n  background-color: #6887ff;\n  color: rgba(255, 255, 255, 0.87);\n  padding: .15em .35em;\n  font-size: 75%;\n  line-height: 1;\n  vertical-align: baseline;\n  font-weight: 700;\n  border-radius: .2rem;\n  text-align: center;\n  white-space: nowrap;\n  display: inline-block; }\n\n.attach {\n  margin-bottom: 0.5rem !important;\n  margin-right: 0.5rem !important;\n  border: 1px solid rgba(120, 130, 140, 0.13);\n  display: inline-block;\n  padding: 10px;\n  cursor: pointer;\n  position: relative;\n  width: 100%; }\n\n.attach-click {\n  background-color: #fff;\n  font-weight: bold;\n  margin: 2px;\n  float: right;\n  position: relative;\n  top: 0;\n  right: 0px; }\n\n.at-hd {\n  padding: 0.25rem !important;\n  border-bottom: 1px solid rgba(120, 130, 140, 0.13);\n  cursor: pointer; }\n\n.p-a-xs {\n  width: 120px;\n  padding: 0.25rem !important; }\n\n.at-hed {\n  text-align: left;\n  margin-bottom: 0px; }\n\n.default-tag-buttons {\n  margin-bottom: 4px;\n  text-align: right; }\n  .default-tag-buttons .cyan {\n    line-height: 20px !important;\n    margin: 0px 4px 0px 4px;\n    font-weight: bold;\n    color: #fff;\n    font-size: 12px; }\n\n.accordian-open {\n  width: 90%; }\n\n.accordian-close {\n  width: 80%; }\n\n@media screen and (min-width: 320px) and (max-width: 480px) {\n  .default-tag-buttons span {\n    width: 100%;\n    display: block;\n    margin: 4px 0px; }\n    .default-tag-buttons span a {\n      width: 100%; }\n  .default-tag-buttons .cyan {\n    line-height: 12px !important; }\n  .attachment-container, .email-body {\n    width: 100% !important; }\n    .attachment-container .attach, .email-body .attach {\n      width: auto; }\n  .back-button {\n    left: 13px !important;\n    top: 10px; }\n  .accordian-close {\n    width: 47%;\n    word-break: break-all;\n    font-size: 12px; }\n  .accordian-icon-box {\n    font-size: 10px; } }\n\n@media screen and (min-width: 480px) and (max-width: 768px) {\n  .default-tag-buttons span {\n    width: 48%;\n    display: inline-block;\n    margin: 4px 0px;\n    padding: 0px 4px; }\n    .default-tag-buttons span a {\n      width: 100%; }\n  .default-tag-buttons .cyan {\n    line-height: 12px !important; }\n  .attachment-container, .email-body {\n    width: 100% !important; }\n    .attachment-container .attach, .email-body .attach {\n      width: 97%; }\n  .back-button {\n    left: 13px !important; }\n  .accordian-close {\n    width: 57%;\n    word-break: break-all; } }\n\n.material-icons {\n  font-size: 14px !important;\n  line-height: 1px;\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n\n.email-attachment {\n  height: 750px;\n  width: 100%; }\n\n.accordian-icon-box {\n  position: absolute;\n  cursor: pointer;\n  right: 0;\n  top: 0; }\n  .accordian-icon-box .material-icons {\n    line-height: 16px;\n    vertical-align: text-top; }\n\n.pointer {\n  cursor: pointer; }\n\n.clearfix {\n  clear: both; }\n\n.bod {\n  margin-top: 4px; }\n\n.email-body {\n  display: inline-block;\n  float: right; }\n  .email-body table {\n    margin: 0px;\n    width: 100%; }\n\n.back-button {\n  position: absolute;\n  left: 22px;\n  top: 10px;\n  background-color: #fff; }\n  .back-button .material-icons {\n    font-weight: bolder;\n    color: #000; }\n\n.auto-tags {\n  font-size: 10px;\n  margin: 0px 2px 0px 2px;\n  vertical-align: bottom; }\n\n.maindiv {\n  width: 15% !important;\n  padding-top: 0px !important;\n  padding-bottom: 4px !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  border: 1px solid transparent !important;\n  border-radius: 4px !important;\n  background-color: #fef045 !important;\n  min-height: 160px !important;\n  box-shadow: 2px 2px 4px 1px #fff !important;\n  margin-bottom: 15px !important; }\n\n.fontstyle {\n  margin-top: 8px;\n  font-weight: normal;\n  font-size: 14px; }\n\n.footer {\n  background-color: #ddba06;\n  margin-left: -10px;\n  margin-right: -10px;\n  margin-bottom: -4px;\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n  padding-bottom: 6px; }\n\n.datestyle {\n  color: white;\n  padding-top: 5px;\n  padding-bottom: 3px;\n  margin-bottom: -5px;\n  font-size: 14px;\n  text-align: right;\n  text-shadow: 1px 1px 2px #000000;\n  padding-right: 4px; }\n\n.childdiv {\n  min-height: 100px;\n  word-break: break-all; }\n\n.childdiv:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/email-modal/email-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__openattachement_openattachement_component__ = __webpack_require__("../../../../../src/app/modules/openattachement/openattachement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_local_storage_service__ = __webpack_require__("../../../../../src/app/service/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_dialog_service__ = __webpack_require__("../../../../../src/app/service/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__compose_email_compose_email_component__ = __webpack_require__("../../../../../src/app/modules/compose-email/compose-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_note_add_note_component__ = __webpack_require__("../../../../../src/app/modules/add-note/add-note.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var EmailModalComponent = (function () {
    function EmailModalComponent(_location, route, router, setvardialog, ngZone, sanitizer, tagUpdate, dialog, commonService, _localStorageService, _dialogService) {
        this._location = _location;
        this.route = route;
        this.router = router;
        this.setvardialog = setvardialog;
        this.ngZone = ngZone;
        this.tagUpdate = tagUpdate;
        this.dialog = dialog;
        this.commonService = commonService;
        this._localStorageService = _localStorageService;
        this._dialogService = _dialogService;
        this.error = false;
        this.email = this._localStorageService.getItem('email');
        if (!this._localStorageService.getItem('selectedTag')) {
            this.selectedTag = -1;
        }
        else {
            this.selectedTag = this._localStorageService.getItem('selectedTag');
        }
        this.tags = this._localStorageService.getItem('tags');
        this.dataForInterviewScheduleRound = this._localStorageService.getItem('dataForInterviewScheduleRound');
        this.inboxMailsTagsForEmailListAndModel = this._localStorageService.getItem('inboxMailsTagsForEmailListAndModel');
    }
    EmailModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedEmail = this.email;
        this.historyList = [];
        this.idlist = [];
        this.user = this._localStorageService.getItem('userEmail');
        this.body = {
            'status': false,
            'mongo_id': this.route.snapshot.paramMap.get('id')
        };
        if (this.selectedEmail.attachment && this.selectedEmail.attachment.length === 0 && this.selectedEmail.is_attachment) {
            this.tagUpdate.emailAttachment(this.body.mongo_id).subscribe(function (data) {
                _this.showEmail(data.data);
                _this.getCandiatehistory();
            }, function (err) {
                _this.error = true;
                _this.errorMessageText = err.message;
            });
        }
        this.getCandiatehistory();
        if (document.getElementsByClassName('mat-sidenav-content').length > 0) {
            setTimeout(function () {
                document.getElementsByClassName('mat-sidenav-content')[0].scrollTo(0, 0);
            }, 100);
        }
    };
    EmailModalComponent.prototype.getCandiatehistory = function () {
        if (this.email.sender_mail) {
            this.getCandidateHistoryApi(this.email.sender_mail);
        }
        else {
            this.getCandidateHistoryApi(this.email._id);
        }
    };
    EmailModalComponent.prototype.getCandidateHistoryApi = function (apiData) {
        var _this = this;
        this.tagUpdate.getCandidateHistory(apiData).subscribe(function (data) {
            _this.historyList = _this.commonService.formateEmailHistoryData(data, _this.route.snapshot.paramMap.get('id'));
            _this._localStorageService.setItem('email', _this.historyList['data'][0]);
        }, function (err) {
            console.log(err);
        });
    };
    EmailModalComponent.prototype.showEmail = function (singlemail) {
        this.selectedEmail = '';
        this.selectedEmail = singlemail;
    };
    EmailModalComponent.prototype.openAccordian = function (singleEmail) {
        this.selectedEmail = '';
        this.selectedEmail = singleEmail;
        if (this.selectedEmail.attachment && this.selectedEmail.attachment.length === 0 && this.selectedEmail.is_attachment) {
            this.getEmailAttachment(this.selectedEmail);
        }
        for (var i = 0; i < this.historyList['data'].length; i++) {
            if (this.historyList['data'][i]['_id'] === singleEmail['_id']) {
                if (this.historyList['data'][i]['accordianIsOpen']) {
                    this.historyList['data'][i]['accordianIsOpen'] = false;
                }
                else {
                    this.historyList['data'][i]['accordianIsOpen'] = true;
                }
            }
            else {
                // do not delete this is for close all other accordian
                // this.historyList['data'][i]['accordianIsOpen'] = false;
            }
        }
    };
    EmailModalComponent.prototype.getEmailAttachment = function (email) {
        var _this = this;
        var index = __WEBPACK_IMPORTED_MODULE_10_lodash__["findIndex"](this.historyList['data'], email);
        this.tagUpdate.emailAttachment(email['_id']).subscribe(function (data) {
            _this.historyList['data'][index] = data['data'];
            _this.historyList['data'][index]['accordianIsOpen'] = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessageText = err.message;
        });
    };
    EmailModalComponent.prototype.assignTag = function (id, emailId, title, emailData) {
        var _this = this;
        if (title === 'Schedule') {
            this._dialogService.openScheduleInterview({ 'tagId': id, 'emailId': emailId, 'dataForInterviewScheduleRound': this.dataForInterviewScheduleRound, 'tagselected': this.selectedTag, 'emailData': emailData }).then(function (data) {
                if (data && data.tag_id) {
                    _this.tagUpdate.assignTag(data).subscribe(function (res) {
                        _this.commonService.inboxRefreshEvent();
                    }, function (err) {
                        console.log(err);
                    });
                    _this._location.back();
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.body = null;
            this.idlist.push(emailId);
            this.body = {
                'tag_id': id,
                'mongo_id': this.idlist
            };
            this.tagUpdate.assignTag(this.body).subscribe(function (data) {
                _this.idlist = [];
                _this.commonService.inboxRefreshEvent();
            }, function (err) {
                console.log(err);
            });
            this._location.back();
        }
    };
    EmailModalComponent.prototype.openAttachment = function (link) {
        var _this = this;
        this.dialogConfig = this.setvardialog.open(__WEBPACK_IMPORTED_MODULE_4__openattachement_openattachement_component__["a" /* OpenattachementComponent */], {
            height: '100%',
            width: '120%'
        });
        this.dialogConfig.componentInstance.link = link;
        this.dialogConfig.afterClosed().subscribe(function (result) {
            _this.dialogConfig = null;
        });
    };
    EmailModalComponent.prototype.back = function () {
        this._location.back();
    };
    EmailModalComponent.prototype.getColor = function (title) {
        return this.commonService.getDefaultTagColor(title);
    };
    EmailModalComponent.prototype.getIcon = function (title) {
        return this.commonService.getDefaultTagIcon(title);
    };
    EmailModalComponent.prototype.historyListDataTrack = function (index, data) {
        return data['_id'] || index;
    };
    EmailModalComponent.prototype.tagsDefaultTrack = function (index, data) {
        return data['id'] || index;
    };
    EmailModalComponent.prototype.inboxMailsTagsForEmailListAndModelDataTrack = function (index, data) {
        return data['id'] || index;
    };
    EmailModalComponent.prototype.H_emailAttachmentTrack = function (index, data) {
        return index;
    };
    EmailModalComponent.prototype.sendEmail = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__compose_email_compose_email_component__["a" /* ComposeEmailComponent */], {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.componentInstance.emailList = [this.email['sender_mail']];
        this.dialogRef.componentInstance.subject_for_genuine = localStorage.getItem('subject_for_genuine');
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogRef = null;
        });
    };
    EmailModalComponent.prototype.addNote = function (candidateid) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_13__add_note_add_note_component__["a" /* AddNoteComponent */], {
            height: '30%',
            width: '30%'
        });
        this.dialogRef.componentInstance.candidateid = candidateid;
        this.dialogRef.componentInstance.emailList = this.historyList;
        this.dialogRef.afterClosed().subscribe(function (result) {
            var date = __WEBPACK_IMPORTED_MODULE_11_moment__(new Date()).format("DD-MM-YYYY");
            var time = __WEBPACK_IMPORTED_MODULE_11_moment__(new Date()).format("hh:mm:ss a");
            for (var i = 0; i <= _this.historyList.data.length; i++) {
                if (_this.historyList.data[i]._id == result.notedata.mongo_id) {
                    _this.historyList.data[i].notes.push({ 'note': result.notedata.note, 'date': date, 'assignee': _this.user, 'time': time });
                }
            }
            _this.dialogRef = null;
        });
    };
    EmailModalComponent.prototype.eventHandler = function (event, notedate, notetime, mongoid) {
        this.mongoid = mongoid;
        this.updatedData = { note: event.target.outerText, mongo_id: mongoid, note_date: notedate, note_time: notetime
        };
    };
    EmailModalComponent.prototype.update = function (event, i) {
        var _this = this;
        if (this.updatedData != undefined) {
            this.tagUpdate.updateNote(this.updatedData).subscribe(function (data) { }, function (err) {
                _this.error = true;
                _this.errorMessageText = err.message;
            });
            var date = __WEBPACK_IMPORTED_MODULE_11_moment__(new Date()).format("DD-MM-YYYY");
            var time = __WEBPACK_IMPORTED_MODULE_11_moment__(new Date()).format("hh:mm:ss a");
            for (var j = 0; j <= this.historyList.data.length; j++) {
                if (this.historyList.data[j]._id == this.mongoid) {
                    this.historyList.data[j].notes[i] = ({
                        'note': this.updatedData.note,
                        'date': date,
                        'assignee': this.user,
                        'time': time
                    });
                }
            }
        }
    };
    EmailModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-modal',
            template: __webpack_require__("../../../../../src/app/modules/email-modal/email-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/email-modal/email-modal.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Native,
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('collapseChange', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: '0', overflow: 'hidden' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: '*' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.25s ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_common_service__["a" /* CommonService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__service_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_local_storage_service__["a" /* LocalStorageService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9__service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_dialog_service__["a" /* DialogService */]) === "function" && _l || Object])
    ], EmailModalComponent);
    return EmailModalComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=email-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/email-templates/email-templates.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n            <button md-raised-button color=accent  (click)=\"addTemp()\">ADD NEW TEMPLATE</button>\n    </div>\n    <div class=\"col-md-6\" *ngFor=\"let temps of tempData; let i=index; trackBy: tempDataTrack;\">\n        <app-single-template [temp]=\"temps\" (testTemp)=\"testTemplate($event)\" (deleteTemp)=\"deleteTempId($event); tempData.splice(i,1)\" (edits)=\"editTemp($event)\"></app-single-template>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/email-templates/email-templates.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cd-pos {\n  position: inherit;\n  top: 60px;\n  background-color: #2e3e4e; }\n\n.flex-container {\n  display: -webkit-inline-flex;\n  /* Safari */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/email-templates/email-templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_email_temp_add_email_temp_component__ = __webpack_require__("../../../../../src/app/modules/add-email-temp/add-email-temp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_edit_template_edit_component__ = __webpack_require__("../../../../../src/app/modules/template-edit/template-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_template_test_template_component__ = __webpack_require__("../../../../../src/app/modules/test-template/test-template.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailTemplatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmailTemplatesComponent = (function () {
    function EmailTemplatesComponent(dialog, getVariable, snackBar) {
        this.dialog = dialog;
        this.getVariable = getVariable;
        this.snackBar = snackBar;
    }
    EmailTemplatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getVariable.getUserVariable().subscribe(function (data) {
            _this.userVar = data;
        });
        this.getVariable.getSystemVariable().subscribe(function (data) {
            _this.sysVar = data;
        });
        this.loadTemp();
    };
    EmailTemplatesComponent.prototype.loadTemp = function () {
        var _this = this;
        this.getVariable.getTemplate().subscribe(function (data) {
            _this.tempData = data;
        });
    };
    EmailTemplatesComponent.prototype.addTemp = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__add_email_temp_add_email_temp_component__["a" /* AddEmailTempComponent */], {
            height: '90%',
            width: '80%'
        });
        this.dialogRef.componentInstance.userVar = this.userVar;
        this.dialogRef.componentInstance.sysVar = this.sysVar;
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'added') {
                _this.snackBar.open('Template Added Successfully', '', {
                    duration: 2000,
                });
                _this.loadTemp();
            }
            _this.dialogRef = null;
        });
    };
    EmailTemplatesComponent.prototype.editTemp = function (temp) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__template_edit_template_edit_component__["a" /* TemplateEditComponent */], {
            height: '90%',
            width: '80%'
        });
        this.dialogRef.componentInstance.userVar = this.userVar;
        this.dialogRef.componentInstance.sysVar = this.sysVar;
        this.dialogRef.componentInstance.temp = temp;
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'updated') {
                _this.snackBar.open('Template Updated Successfully', '', {
                    duration: 2000,
                });
            }
            _this.dialogRef = null;
            _this.loadTemp();
        });
    };
    EmailTemplatesComponent.prototype.testTemplate = function (temp) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__test_template_test_template_component__["a" /* TestTemplateComponent */], {
            height: '40%',
            width: '60%'
        });
        this.dialogRef.componentInstance.temp = temp;
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'done') {
                _this.snackBar.open('Email Send Successfully', '', {
                    duration: 2000,
                });
            }
            _this.dialogRef = null;
            _this.loadTemp();
        });
    };
    EmailTemplatesComponent.prototype.deleteTempId = function (id) {
        var _this = this;
        this.getVariable.deleteTemplate(id).subscribe(function (data) {
            _this.loadTemp();
            _this.snackBar.open('Template Deleted Successfully', '', {
                duration: 2000,
            });
        }, function (err) {
            console.log(err);
            _this.snackBar.open(err.message, '', {
                duration: 2000,
            });
        });
    };
    EmailTemplatesComponent.prototype.tempDataTrack = function (index, data) {
        return data['id'] || index;
    };
    EmailTemplatesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-templates',
            template: __webpack_require__("../../../../../src/app/modules/email-templates/email-templates.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/email-templates/email-templates.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSnackBar */]) === "function" && _c || Object])
    ], EmailTemplatesComponent);
    return EmailTemplatesComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=email-templates.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/email-variables/email-variables.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12 text-right\">\n        <button md-raised-button color=accent (click)=\"addVariable()\">ADD NEW VARIABLE</button>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"header\" *ngIf=\"userVar\">\n            <md-card>\n                <h3>User Variable(s)</h3>\n                <md-divider></md-divider>\n                <md-card-content class=\"table-responsive\">\n                    <table class=\"list table\">\n                        <thead>\n                            <tr>\n                                <th>Variable code</th>\n                                <th>Variable value</th>\n                                <th>Delete</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let variable of userVar\">\n                                <td class=\"v-wid\">{{variable.variableCode}}</td>\n                                <td class=\"txt-edit\" (click)=\"editVariable(variable)\">\n                                    <p [innerHTML]=\"variable.variableValue | safeHtml\"></p>\n                                </td>\n                                <td class=\"del-wid\">\n                                    <md-icon class=\"red\" (click)=\"delete(variable.id)\">delete</md-icon>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </md-card-content>\n            </md-card>\n        </div>\n        <div class=\"header\" *ngIf=\"sysVar\">\n            <md-card>\n                <h3>System Variable(s)</h3>\n                <md-divider></md-divider>\n                <md-card-content class=\"table-responsive\">\n                    <table class=\"list table\">\n                        <thead>\n                            <tr>\n                                <th>Variable code</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"sys\">\n                            <tr *ngFor=\"let variable of sysVar\">\n                                <td class=\"v-wid\">{{variable.variableCode}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </md-card-content>\n            </md-card>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/email-variables/email-variables.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-pos {\n  left: 80%; }\n\n.header {\n  margin-top: 20px; }\n\n.table-responsive {\n  border: none; }\n\ntd {\n  border-top: none !important; }\n\ntable.list {\n  width: 100%; }\n  table.list tr, table.list th {\n    border: none;\n    text-align: left;\n    padding: 5px 0px;\n    vertical-align: middle; }\n  table.list tbody tr:hover {\n    background: #fafafa; }\n\ntbody.sys tr {\n  height: 48px; }\n\n.del-wid {\n  width: 20%; }\n\n.v-wid {\n  width: 33%; }\n\n.red {\n  color: #ff0000;\n  cursor: pointer; }\n\nmd-list-item {\n  padding: 10px 0px 10px 0px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.txt-edit {\n  cursor: pointer;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/email-variables/email-variables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_var_add_var_component__ = __webpack_require__("../../../../../src/app/modules/add-var/add-var.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_variable_edit_variable_component__ = __webpack_require__("../../../../../src/app/modules/edit-variable/edit-variable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_dialog_service__ = __webpack_require__("../../../../../src/app/service/dialog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailVariablesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmailVariablesComponent = (function () {
    function EmailVariablesComponent(dialog, getVariable, _dialogService) {
        this.dialog = dialog;
        this.getVariable = getVariable;
        this._dialogService = _dialogService;
    }
    EmailVariablesComponent.prototype.ngOnInit = function () {
        this.loadVariables();
    };
    EmailVariablesComponent.prototype.loadVariables = function () {
        var _this = this;
        this.getVariable.getUserVariable().subscribe(function (data) {
            _this.userVar = data;
        });
        this.getVariable.getSystemVariable().subscribe(function (data) {
            _this.sysVar = data;
        });
    };
    EmailVariablesComponent.prototype.addVariable = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__add_var_add_var_component__["a" /* AddVarComponent */], {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogRef = null;
            _this.loadVariables();
        });
    };
    EmailVariablesComponent.prototype.delete = function (id) {
        var _this = this;
        this._dialogService.openConfirmationBox('Are you sure ?').then(function (res) {
            if (res === 'yes') {
                _this.getVariable.deleteVariable(id).subscribe(function (data) {
                    _this.loadVariables();
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    EmailVariablesComponent.prototype.editVariable = function (usr_var) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__edit_variable_edit_variable_component__["a" /* EditVariableComponent */], {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.componentInstance.userVar = usr_var;
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogRef = null;
            _this.loadVariables();
        });
    };
    EmailVariablesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-variables',
            template: __webpack_require__("../../../../../src/app/modules/email-variables/email-variables.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/email-variables/email-variables.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_dialog_service__["a" /* DialogService */]) === "function" && _c || Object])
    ], EmailVariablesComponent);
    return EmailVariablesComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=email-variables.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/emailbox/emailbox.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"emailstyle\" [ngClass]=\"{'bleftblue': email.is_automatic_email_send, 'bleftwhite': !email.is_automatic_email_send}\">\n    <div class=\"avatar-image\" appAvatarDirective [email]=\"email.sender_mail\" (click)=\"email.selected = !email.selected; emailSelection()\"></div>\n    <div class=\"emailcheckbox\" *ngIf=\"role !== 'Guest'\" [style.visibility]=\"email.selected ? 'visible' : 'hidden'\">\n        <md-checkbox (change)=\"emailSelection()\" [(ngModel)]=\"email.selected\"></md-checkbox>\n    </div>\n    <div class=\"detailloc {{email.unread ? 'unchecked': 'checked'}}\" (click)=\"openEmails(email)\">\n        <h5>{{countEmailSubject(email.subject)}}</h5>\n        <h6 class=\"inline\">\n            <md-icon *ngIf=\"email.is_attachment\" class=\"attach\">attach_file</md-icon> {{email.date | date: 'medium'}}\n        </h6>\n        <p>{{email.sender_mail}} - From {{email.from}}</p>\n    </div>\n    <div *ngIf=\"role !== 'Guest'\" class=\"container-fluid\">\n        <div class=\"default-tag-buttons row\" *ngIf=\"tagselected\">\n            <span *ngFor=\"let tag of allTags.Default; trackBy: allTagsDefaultTrack;\">\n                    <div class=\"col-md-2 col-sm-2 col-xs-6\" *ngIf=\"tag.id != tagselected && tag.title != 'All'\" (click)=\"assignTag(tag.id, email._id, tag.title, email)\">\n                        <button md-raised-button class=\"cyan\" [ngStyle]=\"getColor(tag.title)\"><i class=\"material-icons\">{{getIcon(tag.title)}}</i> {{tag.title}}\n                    </button>\n                </div>\n                </span>\n                <p class=\"col-md-2 col-sm-2 col-xs-6 markunread\" mdTooltip=\" Mark As Unread\" *ngIf=\"!email.unread\" (click)=\"markReadUnread()\"><i class=\"material-icons unreadIcon\">drafts</i></p>\n                <p class=\"col-md-2 col-sm-2 col-xs-6 markunread\" mdTooltip=\" Mark As Read\" *ngIf=\"email.unread\" (click)=\"markReadUnread()\"><i class=\"material-icons unreadIcon\">markunread</i></p>\n        </div>\n        <div class=\"default-tag-buttons row\" *ngIf=\"!tagselected\">\n            <span *ngFor=\"let tag of inboxMailsTagsForEmailListAndModel.data; trackBy: inboxMailsTagsForEmailListAndModelDataTrack;\">\n                    <div class=\"col-md-2 col-sm-2 col-xs-6\" (click)=\"assignTag(tag.id, email._id, tag.title, email)\">\n                        <button md-raised-button class=\"cyan\" [ngStyle]=\"getColor(tag.title)\"><i class=\"material-icons\">{{getIcon(tag.title)}}</i> {{tag.title}}\n                        </button>\n                </div>\n                </span>\n                <p class=\"col-md-2 col-sm-2 col-xs-6 markunread\" mdTooltip=\" Mark As Unread\" *ngIf=\"!email.unread\" (click)=\"markReadUnread()\"><i class=\"material-icons unreadIcon\">drafts</i></p>\n                <p class=\"col-md-2 col-sm-2 col-xs-6 markunread\" mdTooltip=\" Mark As Read\" *ngIf=\"email.unread\" (click)=\"markReadUnread()\"><i class=\"material-icons unreadIcon\">markunread</i></p>\n        </div>\n    </div>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/modules/emailbox/emailbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.emailstyle {\n  padding: 2px;\n  margin-bottom: 2px;\n  width: 100%;\n  min-height: 60px; }\n  .emailstyle md-grid-list {\n    margin-left: 44px; }\n\n.bleftblue {\n  border-left: 5px solid #81d4fa; }\n\n.bleftwhite {\n  border-left: 5px solid #fff; }\n\n.logodesign, .logo {\n  color: #ffffff;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 20px;\n  border-radius: 50%;\n  left: 4px;\n  -webkit-user-select: none;\n  margin-left: 4px;\n  margin-right: 3px; }\n\n.heightwidth27, .logo {\n  height: 27px;\n  width: 27px; }\n\n.emailcheckbox {\n  height: 40px;\n  width: 40px;\n  cursor: pointer;\n  position: absolute;\n  left: 0px;\n  margin: 6px 0px 0px 0px;\n  background-repeat: no-repeat;\n  z-index: 9999;\n  background-size: cover; }\n\n.detailloc {\n  width: 75%;\n  cursor: pointer;\n  padding-right: 10px;\n  margin-left: 44px; }\n  .detailloc p {\n    margin-bottom: 0px;\n    margin-top: 0px;\n    font-size: 12px;\n    word-break: break-word; }\n  .detailloc h5 {\n    word-break: break-word;\n    display: inline-block;\n    margin: 0;\n    font-weight: bold; }\n\n.inline {\n  position: absolute;\n  right: 6px;\n  margin: 0;\n  top: 3px;\n  font-weight: bold; }\n\n.attach {\n  width: 8px;\n  height: 8px;\n  font-size: 15px;\n  padding-right: 10px;\n  vertical-align: sub; }\n\n.checked {\n  opacity: 0.6; }\n\n.unchecked {\n  opacity: 1; }\n\n.labels {\n  background-color: #6887ff;\n  color: rgba(255, 255, 255, 0.87);\n  padding: .15em .35em;\n  font-size: 75%;\n  line-height: 1;\n  vertical-align: baseline;\n  font-weight: 700;\n  border-radius: .2rem;\n  text-align: center;\n  white-space: nowrap;\n  display: inline-block; }\n\n.auto-tags {\n  font-size: 10px;\n  margin: 0px 2px 0px 2px;\n  vertical-align: bottom; }\n\n.default-tag-buttons {\n  text-align: right; }\n  .default-tag-buttons .col-md-2 {\n    float: right;\n    padding: 2px; }\n  .default-tag-buttons .cyan {\n    line-height: 20px !important;\n    margin: 0px 4px 0px 4px;\n    font-weight: bold;\n    color: #fff;\n    font-size: 12px; }\n  .default-tag-buttons .material-icons {\n    font-size: 14px !important;\n    line-height: 1px; }\n\n@media screen and (min-width: 320px) and (max-width: 480px) {\n  .detailloc {\n    min-height: 48px; }\n    .detailloc h5 {\n      font-size: 12px;\n      width: 50%; }\n    .detailloc .inline {\n      font-size: 9px; }\n  .default-tag-buttons .cyan {\n    margin: 2px;\n    padding: 0px;\n    width: 100%;\n    font-size: 10px; }\n  .default-tag-buttons .material-icons {\n    font-size: 14px !important;\n    line-height: 1px; } }\n\n@media screen and (min-width: 480px) and (max-width: 767px) {\n  .detailloc {\n    min-height: 48px; }\n    .detailloc h5 {\n      font-size: 14px;\n      width: 60%; }\n    .detailloc .inline {\n      font-size: 12px; }\n  .default-tag-buttons .cyan {\n    padding: 0px;\n    margin: 2px;\n    width: 100%;\n    font-size: 10px; }\n  .default-tag-buttons .material-icons {\n    font-size: 14px !important;\n    line-height: 1px; } }\n\n@media screen and (min-width: 768px) {\n  .default-tag-buttons .col-md-2 {\n    width: auto; }\n  .default-tag-buttons .cyan {\n    line-height: 20px !important;\n    margin: 0px 4px 0px 4px;\n    font-weight: bold;\n    color: #fff;\n    font-size: 12px; }\n  .default-tag-buttons .material-icons {\n    font-size: 14px !important;\n    line-height: 1px; } }\n\n.markunread {\n  cursor: pointer;\n  padding: 0px;\n  margin-bottom: -9px; }\n\n.markunread .unreadIcon {\n  margin-top: 11px;\n  color: grey;\n  font-size: 27px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/emailbox/emailbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_dialog_service__ = __webpack_require__("../../../../../src/app/service/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_local_storage_service__ = __webpack_require__("../../../../../src/app/service/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmailboxComponent = (function () {
    function EmailboxComponent(_localStorageService, assignEmail, dialog, commonService, _dialogService) {
        this._localStorageService = _localStorageService;
        this.assignEmail = assignEmail;
        this.dialog = dialog;
        this.commonService = commonService;
        this._dialogService = _dialogService;
        this.selected = false;
        this.refresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.openEmail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshEmail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectEmail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removeEmail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteAndAssignTag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EmailboxComponent.prototype.ngOnInit = function () {
        this.selectedMid = [];
        this.removeSelected();
        this.role = this._localStorageService.getItem('role');
    };
    EmailboxComponent.prototype.emailSelection = function () {
        if (this.email.selected) {
            this.selectEmail.emit(this.email.sender_mail);
        }
        else {
            this.removeEmail.emit(this.email.sender_mail);
        }
    };
    EmailboxComponent.prototype.openEmails = function (email) {
        if (email['unread']) {
            this.assignEmail.UnreadStatus({
                'status': false,
                'mongo_id': email['_id']
            }).subscribe(function (data) {
            }, function (err) {
                console.log(err);
            });
        }
        this.openEmail.emit(this.email);
    };
    EmailboxComponent.prototype.removeSelected = function () {
        this.tags = __WEBPACK_IMPORTED_MODULE_3_lodash__["reject"](this.tags, { 'id': this.tagselected });
    };
    EmailboxComponent.prototype.assignTag = function (id, emailId, title, emailData) {
        var _this = this;
        if (title === 'Schedule') {
            this._dialogService.openScheduleInterview({ 'tagId': id, 'emailId': emailId, 'dataForInterviewScheduleRound': this.dataForInterviewScheduleRound, 'tagselected': this.tagselected, 'emailData': emailData }).then(function (data) {
                if (data && data.tag_id) {
                    _this.assignEmail.assignTag(data).subscribe(function (res) {
                        _this.deleteAndAssignTag.emit(data.tag_id);
                    }, function (err) {
                        console.log(err);
                    });
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.deleteAndAssignTag.emit(id);
        }
    };
    EmailboxComponent.prototype.getColor = function (title) {
        return this.commonService.getDefaultTagColor(title);
    };
    EmailboxComponent.prototype.getIcon = function (title) {
        return this.commonService.getDefaultTagIcon(title);
    };
    EmailboxComponent.prototype.countEmailSubject = function (emailSubject) {
        return (emailSubject.length > 88) ? emailSubject.substring(0, 88) + '...' : emailSubject;
    };
    EmailboxComponent.prototype.allTagsDefaultTrack = function (index, data) {
        return data['id'] || index;
    };
    EmailboxComponent.prototype.inboxMailsTagsForEmailListAndModelDataTrack = function (index, data) {
        return index;
    };
    EmailboxComponent.prototype.markReadUnread = function () {
        var _this = this;
        if (!this.email.unread) {
            this.assignEmail.MarkASUnreadStatus({
                'mongo_id': this.email._id
            }).subscribe(function (data) {
                _this.refreshEmail.emit(_this.email);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.assignEmail.UnreadStatus({
                'status': false,
                'mongo_id': this.email._id
            }).subscribe(function (data) {
                _this.refreshEmail.emit(_this.email);
            }, function (err) {
                console.log(err);
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EmailboxComponent.prototype, "email", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], EmailboxComponent.prototype, "tags", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EmailboxComponent.prototype, "allTags", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EmailboxComponent.prototype, "tagselected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EmailboxComponent.prototype, "dataForInterviewScheduleRound", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EmailboxComponent.prototype, "inboxMailsTagsForEmailListAndModel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EmailboxComponent.prototype, "refresh", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EmailboxComponent.prototype, "openEmail", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EmailboxComponent.prototype, "refreshEmail", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EmailboxComponent.prototype, "selectEmail", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EmailboxComponent.prototype, "removeEmail", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EmailboxComponent.prototype, "deleteAndAssignTag", void 0);
    EmailboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'app-emailbox',
            template: __webpack_require__("../../../../../src/app/modules/emailbox/emailbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/emailbox/emailbox.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__service_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_local_storage_service__["a" /* LocalStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_dialog_service__["a" /* DialogService */]) === "function" && _e || Object])
    ], EmailboxComponent);
    return EmailboxComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=emailbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/fetch-email-by-day/fetch-email-by-day.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainform\">\n    <form autoComplete=\"off\" [formGroup]=\"daysForm\">\n        <md-card-title class=\"cardsub\">\n            Enter No Of Days\n        </md-card-title>\n        <md-card-content>\n            <table class=\"width-100\">\n                <tr>\n                    <td class=\"width-50\">\n                        <md-input-container class=\"width-100\">\n                            <input mdInput placeholder=\"no of days\" type=\"number\" [formControl]=\"daysForm.controls['days']\">\n                        </md-input-container>\n                        <md-error *ngIf=\"!daysForm.controls['days'].valid && daysForm.controls['days'].touched\">\n                            Please enter no of days\n                        </md-error>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <button type=\"submit\" md-raised-button color=primary [disabled]=\"daysForm.invalid\" (click)=\"sendData()\"> Submit </button>\n                        <button md-raised-button (click)=\"close()\"> Close </button>\n                    </td>\n                </tr>\n            </table>\n        </md-card-content>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/fetch-email-by-day/fetch-email-by-day.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/fetch-email-by-day/fetch-email-by-day.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchEmailByDayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FetchEmailByDayComponent = (function () {
    function FetchEmailByDayComponent(dialogRef, formBuilder, _imapMailsService, snackBar) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this._imapMailsService = _imapMailsService;
        this.snackBar = snackBar;
        this.daysForm = this.formBuilder.group({
            'days': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[1-9][0-9]*$')])]
        });
    }
    FetchEmailByDayComponent.prototype.ngOnInit = function () {
    };
    FetchEmailByDayComponent.prototype.sendData = function () {
        if (this.daysForm.valid) {
            this._imapMailsService.fetchEmailByDays(this.daysForm.value).subscribe(function (res) { }, function (err) { });
            this.dialogRef.close();
            this.daysForm.reset();
        }
    };
    FetchEmailByDayComponent.prototype.close = function () {
        this.dialogRef.close('back');
    };
    FetchEmailByDayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fetch-email-by-day',
            template: __webpack_require__("../../../../../src/app/modules/fetch-email-by-day/fetch-email-by-day.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/fetch-email-by-day/fetch-email-by-day.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdSnackBar */]) === "function" && _d || Object])
    ], FetchEmailByDayComponent);
    return FetchEmailByDayComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=fetch-email-by-day.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/forget-password/forget-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outerbody\">\n    <div class=\"logo\">\n        <img class=\"img-responsive\" src=\"assets/logo.png\">\n    </div>\n    <div class=\"login-card\">\n        <md-card>\n            <form autoComplete=\"off\" [formGroup]=\"forgotForm\" (ngSubmit)=\"forgotPassword()\">\n                <md-card-title>\n                    <h4>Forgot Password</h4>\n                </md-card-title>\n                <md-card-subtitle class=\"error\" *ngIf=\"showmessage\">{{message}}</md-card-subtitle>\n                <md-card-content>\n                    <table class=\"width-100\">\n                        <tr>\n                            <td>\n                                <md-input-container class=\"width-100\">\n                                    <input mdInput type=\"email\" formControlName=\"email\" placeholder=\"Email\" autoComplete=\"off\" [formControl]=\"forgotForm.controls['email']\">\n                                    <md-error>Enter Valid Email</md-error>\n                                </md-input-container>\n                            </td>\n                        </tr>\n                    </table>\n                </md-card-content>\n                <md-card-actions>\n                    <button *ngIf=\"!loading\" type=\"submit\" md-raised-button color=primary class=\"width-100\"  [disabled]=\"!forgotForm.valid\">Submit</button>\n                    <md-spinner *ngIf=\"loading\" class=\"spin\"></md-spinner>\n                </md-card-actions>\n            </form>\n        </md-card>\n        <br>\n        <div class=\"text-center\">\n            <a routerLink=\"/login\" class=\"forpas\">Sign In</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/forget-password/forget-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-card {\n  padding: 10px;\n  max-width: 316px;\n  margin: 0 auto; }\n  .login-card md-card-title h4 {\n    font-weight: bold; }\n\n.width-100 {\n  width: 100%; }\n\nmd-card-actions {\n  margin-left: 0px;\n  margin-right: 0px; }\n\n.outerbody {\n  background-color: #2e3e4e; }\n  .outerbody .logo img {\n    padding-top: 8%;\n    padding-bottom: 2%;\n    margin: 0 auto; }\n\n@media all and (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {\n  .outerbody .logo img {\n    padding-top: 10%;\n    margin: 0 auto; } }\n\n.forpas {\n  font-size: 15px;\n  text-decoration: none;\n  color: #00bcd4; }\n\n.hav-acc {\n  color: #ffffff;\n  margin-left: 15%;\n  font-size: 15px; }\n\n.signup {\n  text-decoration: none;\n  color: #00bcd4; }\n\n.spin {\n  height: 50px;\n  width: 50px;\n  margin: 0 auto; }\n\n.error {\n  color: #ff0000;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/forget-password/forget-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgetPasswordComponent = (function () {
    function ForgetPasswordComponent(formBuilder, _loginService, snackBar) {
        this.formBuilder = formBuilder;
        this._loginService = _loginService;
        this.snackBar = snackBar;
        this.forgotForm = this.formBuilder.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')
                ])],
        });
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.loading = false;
    };
    ForgetPasswordComponent.prototype.forgotPassword = function () {
        var _this = this;
        if (this.forgotForm.valid) {
            this.loading = true;
            this.showmessage = false;
            this._loginService.forgotPassword(this.forgotForm.value).subscribe(function (res) {
                _this.loading = false;
                _this.showmessage = false;
                _this.snackBar.open(res.message, '', {
                    duration: 2000,
                });
            }, function (err) {
                _this.loading = false;
                _this.showmessage = true;
                _this.message = err.message;
            });
        }
    };
    ForgetPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__("../../../../../src/app/modules/forget-password/forget-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/forget-password/forget-password.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdSnackBar */]) === "function" && _c || Object])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=forget-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/imap-component-form/imap-component-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainform\">\n    <md-card>\n        <form autoComplete=\"off\" #imapForm=\"ngForm\" (ngSubmit)=\"addImap(imapForm)\">\n            <md-card-subtitle class=\"cardsub\">\n                Incoming Resume Gmail Login\n            </md-card-subtitle>\n            <md-card-subtitle class=\"error\" *ngIf=\"showmessage\">{{message}}</md-card-subtitle>\n            <md-card-content>\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-12\">\n                        <md-input-container class=\"width-90\">\n                            <input mdInput name=\"email\" placeholder=\"Email\" ngModel autoComplete=\"off\" [formControl]=\"emailFormControl\">\n                            <md-error *ngIf=\"emailFormControl.hasError('required')\">\n                                This field is required\n                            </md-error>\n                            <md-error *ngIf=\"emailFormControl.hasError('pattern')\">\n                                Please enter a valid email address\n                            </md-error>\n                        </md-input-container>\n                    </div>\n                    <div class=\"col-md-4 col-sm-12\">\n                        <md-input-container class=\"width-90\">\n                            <input mdInput name=\"password\" type=\"password\" placeholder=\"Password\" required ngModel autoComplete=\"off\">\n                            <md-error>Password Required</md-error>\n                        </md-input-container>\n                    </div>\n                    <div class=\"col-md-4 col-sm-12\">\n                        <md-input-container class=\"width-90\">\n                            <input placeholder=\"Date\" mdInput [mdDatepicker]=\"picker\" required [formControl]=\"dateFormControl\" autocomplete=\"off\">\n                            <md-error *ngIf=\"dateFormControl.hasError('required')\">\n                                Date is required\n                            </md-error>\n                            <button mdSuffix [mdDatepickerToggle]=\"picker\"></button>\n                        </md-input-container>\n                        <md-datepicker #picker></md-datepicker>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <button type=\"submit\" md-raised-button color=primary [disabled]=\"imapForm.invalid || emailFormControl.invalid || dateFormControl.invalid\"> Save </button>\n                    </div>\n                </div>\n            </md-card-content>\n        </form>\n    </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/imap-component-form/imap-component-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  width: 100%;\n  min-height: 100%; }\n\n.width-90 {\n  width: 90%; }\n\n.cardsub {\n  color: inherit;\n  font-size: 18px; }\n\ntable.list {\n  width: 100%; }\n  table.list tr, table.list th {\n    text-align: center;\n    border-bottom: 1px solid #d0d0d0;\n    padding: 5px 0px;\n    vertical-align: middle; }\n  table.list tbody tr:hover {\n    background: #fafafa; }\n\n.mainform {\n  margin-bottom: 10px; }\n\n.error {\n  color: #ff0000;\n  text-align: center;\n  position: relative;\n  left: -70px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/imap-component-form/imap-component-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImapComponentFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var ImapComponentFormComponent = (function () {
    function ImapComponentFormComponent(imapServices) {
        this.imapServices = imapServices;
        this.addedImap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(EMAIL_REGEX)]);
        this.dateFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]);
    }
    ImapComponentFormComponent.prototype.ngOnInit = function () {
    };
    ImapComponentFormComponent.prototype.addImap = function (form) {
        var _this = this;
        this.showmessage = false;
        if (form.valid) {
            form.value['email'] = this.emailFormControl.value;
            form.value['last_fetched_time'] = this.dateFormControl.value;
            this.imapServices.storeImap(form.value).subscribe(function (data) {
                _this.addedImap.emit();
                form.resetForm();
                _this.emailFormControl.reset();
                _this.dateFormControl.reset();
            }, function (err) {
                _this.showmessage = true;
                _this.message = err.message;
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ImapComponentFormComponent.prototype, "addedImap", void 0);
    ImapComponentFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-imap-component-form',
            template: __webpack_require__("../../../../../src/app/modules/imap-component-form/imap-component-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/imap-component-form/imap-component-form.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _a || Object])
    ], ImapComponentFormComponent);
    return ImapComponentFormComponent;
    var _a;
}());

//# sourceMappingURL=imap-component-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/imap-server/imap-server.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <app-imap-component-form (addedImap)=\"getImapList()\"></app-imap-component-form>\n    <md-card>\n        <md-card-subtitle class=\"cardsub\">\n            IMAP/POP3 Settings <small class=\"note\">**NOTE : First you need to ON the Allow less secure apps button on your Gmail account <a target=\"_blank\" href=\"https://myaccount.google.com/lesssecureapps\">https://myaccount.google.com/lesssecureapps</a></small>\n        </md-card-subtitle>\n        <md-card-content class=\"table-responsive\">\n            <table class=\"table list\">\n                <thead>\n                    <tr>\n                        <th>Email ID</th>\n                        <th>Server</th>\n                        <th>Port</th>\n                        <th>Encryption</th>\n                        <th>Active</th>\n                        <th>Remove</th>\n                        <th>Statistics</th>\n                        <th>Days Left To Fetch</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let setting of imapSettingJson; trackBy: imapSettingJsonTrack;\">\n                        <td>{{setting.email}}</td>\n                        <td>{{setting.imap_server}}</td>\n                        <td>{{setting.server_port}}</td>\n                        <td>{{setting.type}}</td>\n                        <td>\n                            <md-icon class=\"material-icons {{setting.active ? 'on':'off'}}\" (click)=\"activateImap(setting.email)\">power_settings_new</md-icon>\n                        </td>\n                        <td>\n                            <button md-button class=\"chartcolor\" [disabled]=\"setting.active\" (click)=\"remove(setting.id)\">REMOVE</button>\n                        </td>\n                        <td>\n                            <md-icon class=\"chartcolor\" style=\"vertical-align: middle;\">insert_chart</md-icon>\n                            {{setting.fetched_email_count}}/{{setting.total_emails}} <br/>\n                            <span class=\"fetch-till\">Fetch Till : {{setting.fetched_mail_till}}</span>\n                        </td>\n                        <td>{{setting.days_left_to_fetched}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </md-card-content>\n    </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/imap-server/imap-server.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  width: 100%;\n  min-height: 100%; }\n\n.width-90 {\n  width: 90%; }\n\n.cardsub {\n  color: inherit;\n  font-size: 18px; }\n\ntable.list {\n  width: 100%; }\n  table.list tr, table.list th {\n    text-align: center;\n    border-bottom: 1px solid #d0d0d0;\n    padding: 5px 0px;\n    vertical-align: middle; }\n  table.list tbody tr:hover {\n    background: #fafafa; }\n\n.off {\n  color: #b71c1c;\n  cursor: pointer; }\n\n.on {\n  color: #8bc34a;\n  cursor: pointer; }\n\n.chartcolor {\n  color: #ec407a; }\n\n.mainform {\n  margin-bottom: 10px; }\n\n.note {\n  font-weight: bold;\n  font-style: italic;\n  color: red;\n  font-size: 10px; }\n\n.fetch-till {\n  font-size: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/imap-server/imap-server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImapServerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImapServerComponent = (function () {
    function ImapServerComponent(imapServices, snackBar) {
        this.imapServices = imapServices;
        this.snackBar = snackBar;
    }
    ImapServerComponent.prototype.ngOnInit = function () {
        this.getImapList();
    };
    ImapServerComponent.prototype.getImapList = function () {
        var _this = this;
        this.imapServices.getImapList().subscribe(function (data) {
            _this.imapSettingJson = data;
        }, function (err) {
            console.log(err);
        });
    };
    ImapServerComponent.prototype.activateImap = function (email) {
        var _this = this;
        this.imapServices.activateImap(email).subscribe(function (data) {
            _this.getImapList();
        }, function (err) {
            console.log(err);
            _this.snackBar.open(err.message, '', {
                duration: 2000,
            });
        });
    };
    ImapServerComponent.prototype.remove = function (id) {
        var _this = this;
        this.imapServices.deleteImap(id).subscribe(function (data) {
            _this.getImapList();
        }, function (err) {
            console.log(err);
            _this.snackBar.open(err.message, '', {
                duration: 2000,
            });
        });
    };
    ImapServerComponent.prototype.imapSettingJsonTrack = function (index, data) {
        return data['id'] || index;
    };
    ImapServerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-imap-server',
            template: __webpack_require__("../../../../../src/app/modules/imap-server/imap-server.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/imap-server/imap-server.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdSnackBar */]) === "function" && _b || Object])
    ], ImapServerComponent);
    return ImapServerComponent;
    var _a, _b;
}());

//# sourceMappingURL=imap-server.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/inbox-side-nav/inbox-side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-icon-button (click)=\"menuShow = !menuShow\"> <md-icon>menu</md-icon> </button>\n<div class=\"inbox-nav\" [ngClass]=\"{'showMenu': menuShow}\">\n    <div class=\"mainnav\" *ngFor=\"let tag of tags; let i = index\">\n        <a md-line class=\"main-title\">{{tag.title}}</a>\n        <div *ngIf=\"tag.data\">\n            <div class=\"subenav\" *ngFor=\"let subTag of tag.data; trackBy: tagDataTrack\">\n                <p [class.active]=\"selectedId == subTag.id && i != 0\" *ngIf=\"subTag.type == 'Automatic'\">\n                    <span> <a *ngIf=\"i == 0\" class=\"sub-title\">{{subTag.title}}</a>\n                        <md-icon *ngIf=\"i == 0\" class=\"plus\" (click)=\"addTag(subTag.id)\">add</md-icon>\n                   </span>\n                    <a (click)=\"getEmail(0, subTag.id, subTag.title, tag.title);\" *ngIf=\"i != 0 && subTag.type == 'Automatic'\">{{subTag.title}} ({{subTag.unread}}/{{subTag.count}})</a>\n                    <a (click)=\"getEmail(subTag.id, null);\" *ngIf=\"i != 0 &&  subTag.type == 'Default'\">{{subTag.title}} ({{subTag.unread}}/{{subTag.count}})</a>\n                </p>\n                <p [class.active]=\"selectedId == subTag.id && i != 0 && parantTagId == null\" *ngIf=\"subTag.type == 'Default'\">\n                    <a *ngIf=\"i == 0\" class=\"sub-title\">{{subTag.title}}</a>\n                    <a (click)=\"getEmail(0, subTag.id);\" *ngIf=\"i != 0 && subTag.type == 'Automatic'\">{{subTag.title}} ({{subTag.unread}}/{{subTag.count}})</a>\n\n                    <a (click)=\"getEmail(subTag.id, null);\" *ngIf=\"i != 0 &&  subTag.type == 'Default'\">{{subTag.title}} ({{subTag.unread}}/{{subTag.count}})</a>\n                </p>\n                <div *ngIf=\"subTag.subchild\">\n                <span *ngFor=\"let subTagSubchild of subTag.subchild; trackBy: subTagSubchildTrack\">\n                    <div class=\"subenav\" [class.active]=\"selectedId == subTagSubchild.id && parantTagId == subTag.id\" \n                        (click)=\"getEmail(subTagSubchild.id, subTag.id, subTagSubchild.title, subTag.title)\">\n                       <a>{{subTagSubchild.title}} ({{subTagSubchild.unread}}/{{subTagSubchild.count}})</a>\n                       </div>\n                     <md-icon *ngIf=\"subTagSubchild.parent_id !=null\" mdTooltip=\"Delete Tab\" mdTooltipPosition=\"below\"  class=\"delete\" (click)=\"removeTag(subTagSubchild.type,subTagSubchild.id)\">delete</md-icon>\n                    </span>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/inbox-side-nav/inbox-side-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-list md-list-item:hover {\n  background-color: #ecf5ef; }\n\nmd-list a {\n  text-decoration: none; }\n\nmd-list a:hover {\n  text-decoration: none; }\n\n.active {\n  background-color: #ecf5ef; }\n\n.blue {\n  color: #81d4fa; }\n\n.mainnav {\n  margin-left: 6px;\n  padding: 4px 0px;\n  position: relative;\n  cursor: pointer;\n  color: #000; }\n\n.mat-icon-button {\n  display: none; }\n\n@media screen and (min-width: 320px) and (max-width: 900px) {\n  .inbox-nav {\n    display: none; }\n  .mat-icon-button {\n    display: inline; }\n  .showMenu {\n    display: block; } }\n\n.main-title {\n  font-weight: bold; }\n\n.sub-title {\n  font-weight: bold; }\n\n.mainnav a {\n  font-size: 12px;\n  text-transform: capitalize;\n  color: #000; }\n\na:hover {\n  text-decoration: none; }\n\n.nav-arrow {\n  vertical-align: middle;\n  float: right;\n  position: absolute;\n  right: 0; }\n\n.subenav {\n  margin-left: 6px;\n  padding: 4px 0px;\n  cursor: pointer; }\n\n.subenav p {\n  margin: 0px;\n  position: relative; }\n\n.subenav a {\n  font-size: 12px; }\n\n.logodesign, .logo {\n  color: #ffffff;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 20px;\n  border-radius: 50%;\n  left: 4px;\n  -webkit-user-select: none;\n  margin-left: 4px;\n  margin-right: 3px; }\n\n.heightwidth27, .logo {\n  min-height: 27px;\n  min-width: 27px; }\n\n.assign {\n  color: #2196f3; }\n\n.candcolor {\n  color: #ff4081; }\n\n.posload {\n  left: 44%;\n  position: relative; }\n\n.plus {\n  float: right;\n  margin-right: 10px; }\n\n.delete {\n  float: right;\n  margin-right: 10px;\n  font-size: 16px !important;\n  margin-top: 4px;\n  position: absolute;\n  margin-top: -20px;\n  right: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/inbox-side-nav/inbox-side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_sub_tag_modal_add_sub_tag_modal_component__ = __webpack_require__("../../../../../src/app/modules/add-sub-tag-modal/add-sub-tag-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_dialog_service__ = __webpack_require__("../../../../../src/app/service/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxSideNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InboxSideNavComponent = (function () {
    function InboxSideNavComponent(_apiService, dialog, _dialogService) {
        this._apiService = _apiService;
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.firstlist = false;
        this.thirdlist = false;
        this.getEmails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getTags = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InboxSideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](this.tags, function (tagValue, tagKey) {
            if (tagValue['title'] === 'inbox') {
                __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](tagValue['data'], function (tagSubValue, tagSubKey) {
                    if (tagSubValue['title'] === 'Mails') {
                        _this.selectedId = tagSubValue['id'];
                        _this.parantTagId = '0';
                    }
                });
            }
        });
    };
    InboxSideNavComponent.prototype.getEmail = function (id, parantTagId, title, parentTitle) {
        this.parantTagId = parantTagId;
        this.selectedId = (id === 0 ? parantTagId : id);
        this.menuShow = false;
        if (title === 'Mails') {
            this.getEmails.emit({ 'id': null, 'parantTagId': null, 'title': title, 'parentTitle': parentTitle });
        }
        else if (title === 'Attachment') {
            this.getEmails.emit({ 'id': null, 'parantTagId': null, 'title': title, 'parentTitle': parentTitle, 'is_attach': true });
        }
        else {
            this.getEmails.emit({ 'id': id, 'parantTagId': parantTagId, 'title': title, 'parentTitle': parentTitle });
        }
    };
    InboxSideNavComponent.prototype.openSubMenu = function (title) {
        for (var i = 0; i < this.tags.length; i++) {
            if (this.tags[i]['title'] === title) {
                this.tags[i]['menuOpen'] = !this.tags[i]['menuOpen'];
                return;
            }
        }
    };
    InboxSideNavComponent.prototype.openSubChildMenu = function (title) {
        for (var i = 0; i < this.tags.length; i++) {
            for (var j = 0; j < this.tags[i]['data'].length; j++) {
                if (this.tags[i]['data'][j]['title'] === title) {
                    this.tags[i]['data'][j]['menuOpen'] = !this.tags[i]['data'][j]['menuOpen'];
                }
            }
        }
    };
    InboxSideNavComponent.prototype.tagDataTrack = function (index, data) {
        return data['id'] || index;
    };
    InboxSideNavComponent.prototype.subTagSubchildTrack = function (index, data) {
        return data['id'] || index;
    };
    InboxSideNavComponent.prototype.addTag = function (parentid) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__add_sub_tag_modal_add_sub_tag_modal_component__["a" /* AddSubTagModalComponent */], {});
        // this.dialogRef.componentInstance.tempList = this.tempList;
        this.dialogRef.componentInstance.addTagType = 'Default';
        this.dialogRef.componentInstance.parentid = parentid;
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'Added') {
                _this.getTags.emit();
                _this.dialogRef = null;
            }
        });
    };
    InboxSideNavComponent.prototype.removeTag = function (type, tagid) {
        var _this = this;
        this._dialogService.openConfirmationBox('Are you sure ?').then(function (res) {
            if (res === 'yes') {
                _this._apiService.deleteSubTag(type, tagid).subscribe(function (data) {
                    _this.getTags.emit();
                }, function (err) {
                    console.log(err);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], InboxSideNavComponent.prototype, "tags", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InboxSideNavComponent.prototype, "getEmails", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InboxSideNavComponent.prototype, "getTags", void 0);
    InboxSideNavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inbox-side-nav',
            template: __webpack_require__("../../../../../src/app/modules/inbox-side-nav/inbox-side-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/inbox-side-nav/inbox-side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_dialog_service__["a" /* DialogService */]) === "function" && _c || Object])
    ], InboxSideNavComponent);
    return InboxSideNavComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=inbox-side-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-2 no-pad background-white\">\n                <app-inbox-side-nav *ngIf=\"tags\" [tags]=\"tags\" (getEmails)=\"emaillists($event)\" (getTags)=\"getAllTag()\"></app-inbox-side-nav>\n            </div>\n            <div class=\"col-md-10 no-pad\">\n                <div class=\"content\">\n                    <router-outlet></router-outlet>\n                    <p class=\"bblue\" *ngIf=\"emaillist && showInboxEmailList\">Job Profile Template Sent</p>\n                    <div class=\"m-b\" *ngIf=\"showInboxEmailList && emaillist\">\n                        <div class=\"container-fluid\">\n                            <div class=\"row\">\n                                <div class=\"col-md-10 no-pad\">\n                                    <md-card class=\"card-pos\">\n                                        <form autoComplete=\"off\" #searchForm=\"ngForm\" (ngSubmit)=\"searchEmail(searchForm)\">\n                                            <md-select name=\"option\" placeholder=\"Search In\" required ngModel>\n                                                <md-option value=\"email\">Email</md-option>\n                                                <md-option value=\"subject\">Subject</md-option>\n                                            </md-select>\n\n                                            <md-input-container class=\"mar-pos wid-300\">\n                                                <input mdInput name=\"keyword\" placeholder=\"Search\" required ngModel>\n                                            </md-input-container>\n                                            <button name=\"searchbtn\" type=\"submit\" md-raised-button [disabled]=\"searchForm.invalid\"> Search </button>\n                                            <button name=\"searchbtn\" md-raised-button [disabled]=\"searchForm.invalid\" (click)=\"emaillists(lastSelectedTagData); searchForm.reset()\"> Clear Search </button>\n                                            <md-checkbox name=\"currentTag\" class=\"mar-pos\" value=\"false\" ngModel> Search current tag </md-checkbox>\n                                        </form>\n                                    </md-card>\n                                </div>\n                                <div class=\"col-md-2 pagination\">\n                                    <a md-raised-button class=\"b-r pos\">\n                                                    {{data.page}} / {{emaillist.count? Math.ceil(emaillist.count/data.limit): '1'}}\n                                                    </a>\n                                    <button [disabled]=\"data.page == 1\" md-button class=\"d-w\" (click)=\"previous()\">\n                                                        <md-icon>keyboard_arrow_left</md-icon>\n                                                    </button>\n                                    <button md-button class=\"d-w\" (click)=\"next()\">\n                                                        <md-icon>keyboard_arrow_right</md-icon>\n                                                    </button>\n                                    <form class=\"form-inline\" class=\"go-to-page-form\">\n                                            <input [(ngModel)]=\"goToPageNo\" type=\"number\" class=\"form-control\" placeholder=\"Page No\" [ngModelOptions]=\"{standalone: true}\">\n                                        <button md-button (click)=\"gotTopage(goToPageNo)\" [disabled]=\"!goToPageNo || goToPageNo < 0\" class=\"btn btn-default\">Go To Page</button>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <h2 class=\"m-s\" *ngIf=\"showmessage && showInboxEmailList\">{{message}}</h2>\n                    <div class=\"compose-email\" *ngIf=\"showInboxEmailList\">\n                        <a *ngIf=\"emaillist && emailParentId && emaillist.data?.length > 0 && this.role !== 'Guest'\" style=\"margin-right: 4px; text-decoration: none;\">Send Email To: </a>\n                        <a style=\"margin-right: 4px;\" *ngIf=\"emaillist && emailParentId && emaillist.data?.length > 0 && this.role !== 'Guest'\" (click)=\"sendEmailToAll()\">All</a>\n                        <a style=\"margin-right: 4px;\" *ngIf=\"selectedTagTitle == 'All' && emaillist && emailParentId && emaillist.data?.length > 0 && this.role !== 'Guest'\" (click)=\"sendEmailToAll('notGenuine')\">Not Genuine</a>\n                        <a *ngIf=\"selectedTagTitle == 'All' && this.role !== 'Guest' && emaillist && emaillist.data && emaillist.data.length > 0\"\n                            style=\"margin-right: 4px;\" (click)=\"sendEmailToPendingCandidates()\">Pending  Candidates <span *ngIf=\"sendFailedEmailListCount || sendSuccessEmailListCount\">Success: {{sendSuccessEmailListCount}}, Failed: {{sendFailedEmailListCount}} </span></a>\n                        <a *ngIf=\"emailIds.length > 0 && this.role !== 'Guest'\" (click)=\"composeEmail()\"> Send Email </a>\n                        <a *ngIf=\"emaillist && this.role !== 'Guest' && emailParentId && selectedTagTitle == 'All'\" class=\"pull-right\" (click)=\"cronStatus()\"> Get Cron Status </a>\n                    </div>\n                    <div *ngIf=\"!loading && emaillist && showInboxEmailList && tagsForEmailListAndModel\">\n                        <app-emailbox *ngFor=\"let emails of emaillist.data; let i=index; trackBy: trackByEmails\" (openEmail)=\"openEmails($event)\" (refreshEmail)=\"refreshEmails($event)\"(refresh)=\"refresh($event)\"\n                            [tagselected]=\"selectedTag\" [email]=\"emails\" (selectEmail)=\"addEmail($event)\" (removeEmail)=\"removeEmails($event)\"\n                            [tags]=\"tagsForEmailListAndModel.Automatic\" [allTags]=\"tagsForEmailListAndModel\" [dataForInterviewScheduleRound]=\"dataForInterviewScheduleRound\"\n                            [inboxMailsTagsForEmailListAndModel]=\"inboxMailsTagsForEmailListAndModel\" (deleteAndAssignTag)=\"assign($event, emails._id); emaillist.data.splice(i,1)\"></app-emailbox>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/modules/inbox/inbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.content {\n  padding: 12px;\n  background-color: #2e3e4e; }\n\n.bblue {\n  background: #81d4fa;\n  display: inline-block;\n  color: #000;\n  padding: 2px;\n  margin: 0px 0px 2px 0px;\n  font-size: 12px; }\n\n.posload {\n  left: 44%;\n  position: relative;\n  min-height: 100%; }\n\n.go-to-page-form input {\n  margin: 0px 10px; }\n\n.go-to-page-form button {\n  margin: 2px 42px; }\n\n.m-b {\n  margin-bottom: 1rem !important; }\n\n.cyan {\n  background-color: cyan; }\n\n.white {\n  backgournd-color: #ffffff;\n  color: inherit; }\n\n.d-w {\n  background-color: white;\n  color: inherit;\n  padding: 0px;\n  margin: 2px;\n  min-width: 20px !important;\n  width: 20px;\n  height: 20px; }\n\n.b-r {\n  border-radius: 5%; }\n\n.options-main {\n  margin-right: 42.7%; }\n\n.options-sub {\n  margin-right: 40%; }\n\n.card-pos {\n  position: relative;\n  padding: 10px;\n  width: 100%; }\n\n.wid-300 {\n  width: 360px; }\n\n.pagination {\n  min-height: 42px; }\n\n@media screen and (min-width: 320px) {\n  .wid-300 {\n    width: 100%; }\n  .pagination {\n    min-height: auto;\n    margin: 5px 0; }\n  .mar-pos {\n    margin-left: 0px;\n    margin-right: 0px;\n    padding-top: 6px; }\n  .card-pos form .mat-select {\n    padding-top: 10px; } }\n\n@media screen and (min-width: 480px) {\n  .wid-300 {\n    width: 100%; }\n  .pagination {\n    min-height: auto;\n    margin: 5px 0; }\n  .mar-pos {\n    margin-left: 0px;\n    margin-right: 0px;\n    padding-top: 6px; }\n  .card-pos form .mat-select {\n    padding-top: 10px; } }\n\n@media screen and (min-width: 768px) {\n  .wid-300 {\n    width: 360px; }\n  .pagination {\n    min-height: 42px; }\n  .mar-pos {\n    margin-left: 10px;\n    margin-right: 10px;\n    padding-top: 6px; } }\n\n.pos {\n  width: auto;\n  overflow: hidden;\n  height: 20px;\n  padding: 0px;\n  line-height: 0px;\n  min-width: 66px;\n  background: transparent;\n  color: #fff;\n  box-shadow: none; }\n\n.m-s {\n  color: #ffffff;\n  text-align: center; }\n\n.compose-email {\n  color: #fff;\n  padding-bottom: 5px;\n  min-height: 18px;\n  cursor: pointer; }\n  .compose-email a {\n    font-size: 13px;\n    font-weight: bold;\n    text-decoration: underline;\n    color: #fff; }\n\n.background-white {\n  background-color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_core_core_component__ = __webpack_require__("../../../../../src/app/modules/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_compose_email_compose_email_component__ = __webpack_require__("../../../../../src/app/modules/compose-email/compose-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_local_storage_service__ = __webpack_require__("../../../../../src/app/service/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_dialog_service__ = __webpack_require__("../../../../../src/app/service/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var InboxComponent = (function () {
    function InboxComponent(_core, _location, _router, dialog, getemails, snackBar, _localStorageService, _commonService, _dialogService) {
        var _this = this;
        this._core = _core;
        this._location = _location;
        this._router = _router;
        this.dialog = dialog;
        this.getemails = getemails;
        this.snackBar = snackBar;
        this._localStorageService = _localStorageService;
        this._commonService = _commonService;
        this._dialogService = _dialogService;
        this.loading = false;
        this.showInboxEmailList = true;
        this.dataForInterviewScheduleRound = [];
        this.Math = Math;
        this.fetchEmailSubscription = this.getemails.componentMehtodCalled$.subscribe(function () {
            _this.fetchNewEmails();
        });
        this.role = this._localStorageService.getItem('role');
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emailIds = [];
        this.loading = true;
        this.data = {
            'page': 1,
            'tag_id': 0,
            'limit': 100
        };
        this.defaultOpen();
        setTimeout(function () {
            if (_this._location.path().substr(0, 17) === '/core/inbox/email') {
                _this.showInboxEmailList = false;
            }
            else {
                _this.showInboxEmailList = true;
            }
        });
        this.subscription = this._core.routerInboxPage.subscribe(function () {
            _this.showInboxEmailList = true;
        });
        this.inboxRefreshSubscription = this._commonService.inboxRefresh.subscribe(function () {
            _this.refresh();
        });
    };
    InboxComponent.prototype.defaultOpen = function () {
        var _this = this;
        this.getemails.getAllTagsMain()
            .subscribe(function (res) {
            _this.formatTagsInArray(res.data);
            if (res.data.length > 0) {
                __WEBPACK_IMPORTED_MODULE_10_lodash__["forEach"](res.data, function (value, key) {
                    if (value['title'] === 'inbox') {
                        __WEBPACK_IMPORTED_MODULE_10_lodash__["forEach"](value['data'], function (subMenuValue, subMenukey) {
                            if (subMenuValue['title'] === 'Mails') {
                                _this.data.tag_id = subMenuValue['id'];
                                _this.selectedTag = subMenuValue['id'];
                                _this.selectedTagTitle = subMenuValue['title'] || '';
                                // this.emailParentId = '0';
                                _this.emailChildId = subMenuValue['id'].toString() || '0';
                                _this.emailParenttitle = value['title'];
                                _this.emailChildTitle = subMenuValue['title'] || '';
                                _this.lastSelectedTagData = { 'id': _this.data.tag_id, 'parantTagId': _this.emailParentId, 'title': _this.selectedTagTitle, 'parentTitle': _this.emailParenttitle };
                                _this.getemails.getEmailList(_this.data).subscribe(function (data) {
                                    _this.addSelectedFieldInEmailList(data);
                                    _this.loading = false;
                                });
                            }
                        });
                    }
                });
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    InboxComponent.prototype.addSelectedFieldInEmailList = function (data) {
        if (data && data['data'].length > 0) {
            __WEBPACK_IMPORTED_MODULE_10_lodash__["forEach"](data['data'], function (value, key) {
                value['selected'] = false;
            });
        }
        this.emaillist = data;
    };
    InboxComponent.prototype.searchEmail = function (searchform) {
        var _this = this;
        if (searchform.valid) {
            if (!!searchform.value['currentTag']) {
                if (this.data['is_attach']) {
                    this.data = {
                        'page': 1,
                        'tag_id': this.emailParentId,
                        'default_id': this.emailChildId,
                        'limit': 100,
                        'type': searchform.value['option'],
                        'keyword': searchform.value['keyword'],
                        'selected': searchform.value['currentTag'],
                        'is_attach': this.data['is_attach']
                    };
                }
                else {
                    this.data = {
                        'page': 1,
                        'tag_id': this.emailParentId,
                        'default_id': this.emailChildId,
                        'limit': 100,
                        'type': searchform.value['option'],
                        'keyword': searchform.value['keyword'],
                        'selected': searchform.value['currentTag']
                    };
                }
            }
            else {
                this.data = {
                    'page': 1,
                    'limit': 100,
                    'type': searchform.value['option'],
                    'keyword': searchform.value['keyword'],
                    'selected': searchform.value['currentTag']
                };
            }
            this.loading = true;
            this.showmessage = false;
            this.getemails.getEmailList(this.data).subscribe(function (data) {
                if (data.data.length > 0) {
                    _this.addSelectedFieldInEmailList(data);
                    _this.emailIds = [];
                    _this.loading = false;
                }
                else {
                    _this.message = data.message;
                    _this.showmessage = true;
                    _this.emaillist = [];
                    _this.loading = false;
                }
            });
        }
    };
    InboxComponent.prototype.addEmail = function (id) {
        this.emailIds.push(id);
    };
    InboxComponent.prototype.removeEmails = function (id) {
        this.emailIds.splice(this.emailIds.indexOf(id), 1);
    };
    InboxComponent.prototype.composeEmail = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modules_compose_email_compose_email_component__["a" /* ComposeEmailComponent */], {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.componentInstance.emailList = this.emailIds;
        this.dialogRef.componentInstance.subject_for_genuine = this.subject_for_genuine;
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogRef = null;
            _this.emailIds = [];
            _this.addSelectedFieldInEmailList(_this.emaillist);
        });
    };
    InboxComponent.prototype.assign = function (tag_id, id) {
        var _this = this;
        this.selected = {
            'tag_id': tag_id,
            'mongo_id': id
        };
        this.getemails.assignTag(this.selected).subscribe(function (data) {
            _this.getAllTag();
            _this.emailIds.length = 0;
        }, function (err) {
            console.log(err);
            _this.refresh();
        });
    };
    InboxComponent.prototype.delete = function () {
        var _this = this;
        this.selected = {
            'tag_id': this.selectedTag,
            'mongo_id': this.emailIds
        };
        this.getemails.deleteEmail(this.selected).subscribe(function (data) {
            _this.refresh();
            _this.emailIds.length = 0;
            _this.notify('done', '');
        }, function (err) {
            console.log(err);
        });
    };
    InboxComponent.prototype.notify = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    InboxComponent.prototype.openEmails = function (email) {
        this.showInboxEmailList = true;
        var index = __WEBPACK_IMPORTED_MODULE_10_lodash__["findIndex"](this.emaillist['data'], email);
        if (index !== -1) {
            if (this.emaillist['data'][index]['unread']) {
                this.tags = this._commonService.reduseCountEmail(this.tags, this.selectedTag, this.emailParentId);
            }
            this.emaillist['data'][index]['unread'] = false;
        }
        var landingUrl = window.location + '/email/' + email._id;
        window.open(landingUrl);
        this._localStorageService.setItem('email', email);
        this._localStorageService.setItem('selectedTag', this.selectedTag);
        this._localStorageService.setItem('tags', this.tagsForEmailListAndModel);
        this._localStorageService.setItem('dataForInterviewScheduleRound', this.dataForInterviewScheduleRound);
        this._localStorageService.setItem('inboxMailsTagsForEmailListAndModel', this.inboxMailsTagsForEmailListAndModel);
    };
    InboxComponent.prototype.refreshEmails = function (email) {
        this.showInboxEmailList = true;
        var index = __WEBPACK_IMPORTED_MODULE_10_lodash__["findIndex"](this.emaillist['data'], email);
        if (index !== -1) {
            if (!this.emaillist['data'][index]['unread']) {
                this.emaillist['data'][index]['unread'] = true;
            }
            else {
                this.emaillist['data'][index]['unread'] = false;
            }
        }
    };
    InboxComponent.prototype.getAllTag = function () {
        var _this = this;
        this.getemails.getAllTagsMain()
            .subscribe(function (res) {
            _this.formatTagsInArray(res.data);
        }, function (err) {
            _this.loading = false;
        });
    };
    InboxComponent.prototype.sendEmailToPendingCandidates = function () {
        var _this = this;
        this.getemails.sendEmailToPendingCandidates({ 'tag_id': this.selectedTag }).subscribe(function (data) {
            _this.notify(data.message, '');
        }, function (err) {
            _this.notify(err.message, '');
        });
    };
    InboxComponent.prototype.sendEmailToAll = function (notGenuine) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modules_compose_email_compose_email_component__["a" /* ComposeEmailComponent */], {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.componentInstance.emailParenttitle = this.emailParenttitle;
        this.dialogRef.componentInstance.emailChildTitle = this.emailChildTitle;
        this.dialogRef.componentInstance.emailParentId = this.emailParentId;
        this.dialogRef.componentInstance.emailChildId = this.emailChildId;
        this.dialogRef.componentInstance.notGenuine = notGenuine;
        this.dialogRef.componentInstance.subject_for_genuine = this.subject_for_genuine;
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogRef = null;
            _this.emailIds = [];
            _this.addSelectedFieldInEmailList(_this.emaillist);
        });
    };
    InboxComponent.prototype.emaillists = function (emailData, page) {
        var _this = this;
        this.lastSelectedTagData = emailData;
        this.emailParenttitle = emailData['parentTitle'];
        this.emailChildTitle = emailData['title'];
        if (this._location.path().substr(0, 17) === '/core/inbox/email') {
            this.showInboxEmailList = true;
            this._location.back();
        }
        this.emailParentId = (emailData.parantTagId ? emailData.parantTagId.toString() : null);
        if (emailData.id == null) {
            this.emailChildId = null;
        }
        else {
            this.emailChildId = emailData.id.toString() || '0';
        }
        if (emailData.title === 'All') {
            this.selectedTagTitle = emailData.title;
        }
        else {
            this.selectedTagTitle = '';
        }
        this.selectedTag = emailData.id;
        this.data = null;
        this.showmessage = false;
        if (emailData['is_attach']) {
            this.data = {
                'page': page || 1,
                'tag_id': emailData.parantTagId || ((emailData.id === 0) ? 0 : emailData.id) || 0,
                'default_id': (emailData.parantTagId ? emailData.id : 0).toString() || '0',
                'limit': 100,
                'is_attach': emailData['is_attach']
            };
        }
        else {
            this.data = {
                'page': page || 1,
                'tag_id': emailData.parantTagId || ((emailData.id === 0) ? 0 : emailData.id) || 0,
                'default_id': (emailData.parantTagId ? emailData.id : 0).toString() || '0',
                'limit': 100
            };
        }
        this.loading = true;
        this.getemails.getEmailList(this.data).subscribe(function (data) {
            _this.addSelectedFieldInEmailList(data);
            _this.emailIds = [];
            _this.loading = false;
        });
    };
    InboxComponent.prototype.searchEmailList = function (page) {
        var _this = this;
        this.data.page = page || 1;
        this.showmessage = false;
        this.loading = true;
        this.getemails.getEmailList(this.data).subscribe(function (data) {
            _this.addSelectedFieldInEmailList(data);
            _this.emailIds = [];
            _this.loading = false;
        });
    };
    InboxComponent.prototype.previous = function () {
        if (this.data.page > 1) {
            this.data.page = this.data.page - 1;
            if (!this.data.type) {
                this.emaillists({ 'id': this.emailChildId, 'parantTagId': this.emailParentId, 'title': this.selectedTagTitle }, this.data.page);
            }
            else {
                this.searchEmailList(this.data.page);
            }
        }
    };
    InboxComponent.prototype.next = function () {
        if (this.data.page < this.emaillist.count / this.data.limit) {
            this.data.page = this.data.page + 1;
            if (!this.data.type) {
                this.emaillists({ 'id': this.emailChildId, 'parantTagId': this.emailParentId, 'title': this.selectedTagTitle }, this.data.page);
            }
            else {
                this.searchEmailList(this.data.page);
            }
        }
    };
    InboxComponent.prototype.gotTopage = function (pageNo) {
        if (pageNo <= Math.ceil(this.emaillist.count / this.data.limit)) {
            this.data.page = pageNo;
            if (!this.data.type) {
                this.emaillists({ 'id': this.emailChildId, 'parantTagId': this.emailParentId, 'title': this.selectedTagTitle }, this.data.page);
            }
            else {
                this.searchEmailList(this.data.page);
            }
        }
    };
    InboxComponent.prototype.fetchNewEmails = function () {
        var _this = this;
        this.loading = true;
        this.getemails.refreshNewEmails().subscribe(function (data) {
            _this.refresh();
        });
    };
    InboxComponent.prototype.refresh = function (id) {
        var _this = this;
        this.getAllTag();
        this.getemails.getEmailList(this.data).subscribe(function (data) {
            _this.emailIds = [];
            _this.addSelectedFieldInEmailList(data);
        });
    };
    InboxComponent.prototype.formatTagsInArray = function (data) {
        var _this = this;
        this.tags = JSON.parse(JSON.stringify(data));
        this._commonService.formateTags(data).then(function (res) {
            _this.tagsForEmailListAndModel = res.tagsForEmailListAndModel;
            _this.dataForInterviewScheduleRound = res.dataForInterviewScheduleRound;
            _this.subject_for_genuine = res.subject_for_genuine;
            _this.inboxMailsTagsForEmailListAndModel = res.inboxMailsTagsForEmailListAndModel;
        }, function (err) { });
        this.loading = false;
    };
    InboxComponent.prototype.trackByEmails = function (index, email) {
        return index;
    };
    InboxComponent.prototype.cronStatus = function () {
        this._dialogService.getCronStatusDialog(this.emailParentId);
    };
    InboxComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.inboxRefreshSubscription.unsubscribe();
        this.fetchEmailSubscription.unsubscribe();
    };
    InboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__("../../../../../src/app/modules/inbox/inbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/inbox/inbox.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__modules_core_core_component__["a" /* CoreComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__modules_core_core_component__["a" /* CoreComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdSnackBar */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__service_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_local_storage_service__["a" /* LocalStorageService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_common_service__["a" /* CommonService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_dialog_service__["a" /* DialogService */]) === "function" && _j || Object])
    ], InboxComponent);
    return InboxComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=inbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/job-profile-tag/job-profile-tag.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainform\" *ngIf=\"!loading\">\n    <p class=\"font-18\">Create Job Profile</p>\n    <hr class=\"linespace\">\n    <span [dragula]='\"first-bag\"' [dragulaModel]='tags.Automatic'>\n    <span *ngFor=\"let tag of tags?.Automatic; trackBy: tagsAutomaticTrack\">\n        <div class=\"tagbutton1\" [style.background-color]=\"tag.color\" *ngIf=\"tag.is_job_profile_tag\">\n            <div class=\"taglogo\" (click)=\"openAutomatic(tag)\">\n                {{tag.title.charAt(0)}}\n            </div>\n            <span class=\"tagname\" (click)=\"openAutomatic(tag)\">\n                {{tag.title}}\n            </span>\n            <md-icon class=\"iconset\" (click)=\"removeTag(tag.id,'Automatic')\">cancel</md-icon>\n        </div>\n    </span>\n</span>\n</div>\n\n<div class=\"pos-add\" *ngIf=\"!loading\">\n    <button md-fab (click)=\"addTag()\">\n        <md-icon>add</md-icon>\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/job-profile-tag/job-profile-tag.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainform {\n  margin-bottom: 10px;\n  background-color: #ffffff;\n  padding: 10px;\n  border-radius: 4px; }\n\n.font-18 {\n  font-size: 18px;\n  margin: 5px 0px; }\n\n.tagbutton {\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  cursor: default;\n  text-decoration: none;\n  margin: 4px;\n  padding: 0px;\n  outline: none;\n  border-radius: 16px;\n  width: -webkit-fit-content; }\n\n.tagbutton1 {\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  cursor: pointer;\n  margin: 4px;\n  padding: 0px;\n  outline: none;\n  border-radius: 16px;\n  width: -webkit-fit-content; }\n\n.taglogo {\n  color: #ffffff;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 16px;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  margin-right: -4px;\n  -webkit-user-select: none; }\n\n.tagname {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 32px;\n  padding-left: 12px;\n  padding-right: 12px;\n  opacity: 0.8;\n  white-space: nowrap;\n  -webkit-user-select: none; }\n\n.linespace {\n  opacity: 0.5;\n  margin-bottom: 15px; }\n\n.iconset {\n  margin: 0px 4px 0px -8px;\n  opacity: 0.5;\n  position: relative;\n  top: 5px; }\n\n.iconset:hover, .tagname:hover {\n  opacity: 1; }\n\n.pos-add {\n  position: fixed;\n  right: 10px;\n  bottom: 20px; }\n\n.center {\n  position: absolute;\n  left: 45%;\n  top: 30%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/job-profile-tag/job-profile-tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__automatic_tag_modal_automatic_tag_modal_component__ = __webpack_require__("../../../../../src/app/modules/automatic-tag-modal/automatic-tag-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_tag_modal_add_tag_modal_component__ = __webpack_require__("../../../../../src/app/modules/add-tag-modal/add-tag-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_dialog_service__ = __webpack_require__("../../../../../src/app/service/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobProfileTagComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var JobProfileTagComponent = (function () {
    function JobProfileTagComponent(dragulaService, getTags, dialog, viewContainerRef, snackBar, _dialogService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.getTags = getTags;
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.snackBar = snackBar;
        this._dialogService = _dialogService;
        this.loading = false;
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
    }
    JobProfileTagComponent.prototype.onDrop = function (args) {
        var apiData = [];
        __WEBPACK_IMPORTED_MODULE_7_lodash__["forEach"](this.tags['Automatic'], function (value, key) {
            apiData.push({ 'id': value['id'], 'priority': (key + 1) });
        });
        this.getTags.updatePriority(apiData).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    JobProfileTagComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getAllTag();
        this.getAllTemp();
    };
    JobProfileTagComponent.prototype.getAllTemp = function () {
        var _this = this;
        this.getTags.getTemplate().subscribe(function (data) {
            _this.tempList = data;
        }, function (err) {
            console.log(err);
        });
    };
    JobProfileTagComponent.prototype.getAllTag = function () {
        var _this = this;
        this.getTags.getAllTags()
            .subscribe(function (data) {
            _this.formatTagsInArray(data);
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    JobProfileTagComponent.prototype.removeTag = function (id, type) {
        var _this = this;
        this._dialogService.openConfirmationBox('Are you sure ?').then(function (res) {
            if (res === 'yes') {
                _this.getTags.deleteTag(id, type).subscribe(function (data) {
                    _this.getAllTag();
                }, function (err) {
                    console.log(err);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    JobProfileTagComponent.prototype.openAutomatic = function (tag1) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__automatic_tag_modal_automatic_tag_modal_component__["a" /* AutomaticTagModalComponent */], {});
        this.dialogRef.componentInstance.tag = tag1;
        this.dialogRef.componentInstance.tempList = this.tempList;
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'updated') {
                _this.snackBar.open('Tag Updated Successfully', '', {
                    duration: 2000,
                });
                _this.dialogRef = null;
                _this.getAllTag();
            }
        });
    };
    JobProfileTagComponent.prototype.addTag = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__add_tag_modal_add_tag_modal_component__["a" /* AddTagModalComponent */], {});
        this.dialogRef.componentInstance.tempList = this.tempList;
        this.dialogRef.componentInstance.addTagType = 'jobProfile';
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'Added') {
                _this.dialogRef = null;
                _this.getAllTag();
            }
        });
    };
    JobProfileTagComponent.prototype.formatTagsInArray = function (data) {
        this.tags = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].type === 'Default') {
                if (!this.tags['Default']) {
                    this.tags['Default'] = [];
                    this.tags['Default'].push(data[i]);
                }
                else {
                    this.tags['Default'].push(data[i]);
                }
            }
            else if (data[i].type === 'Manual') {
                if (!this.tags['Manual']) {
                    this.tags['Manual'] = [];
                    this.tags['Manual'].push(data[i]);
                }
                else {
                    this.tags['Manual'].push(data[i]);
                }
            }
            else if (data[i].type === 'Automatic') {
                if (!this.tags['Automatic']) {
                    this.tags['Automatic'] = [];
                    this.tags['Automatic'].push(data[i]);
                }
                else {
                    this.tags['Automatic'].push(data[i]);
                }
            }
        }
        this.loading = false;
    };
    JobProfileTagComponent.prototype.tagsAutomaticTrack = function (index, data) {
        return data['id'] || index;
    };
    JobProfileTagComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-job-profile-tag',
            template: __webpack_require__("../../../../../src/app/modules/job-profile-tag/job-profile-tag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/job-profile-tag/job-profile-tag.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__["DragulaService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdSnackBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_dialog_service__["a" /* DialogService */]) === "function" && _f || Object])
    ], JobProfileTagComponent);
    return JobProfileTagComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=job-profile-tag.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outerbody\">\n    <div class=\"logo\">\n        <img class=\"img-responsive\" src=\"assets/logo.png\">\n    </div>\n    <div class=\"login-card\">\n        <md-card>\n            <form autoComplete=\"off\" [formGroup]=\"addForm\" (ngSubmit)=\"login()\">\n                <md-card-title>\n                    <h4>Sign In</h4>\n                </md-card-title>\n                <md-card-subtitle class=\"error\" *ngIf=\"showmessage\">{{message}}</md-card-subtitle>\n                <md-card-content>\n                    <table class=\"width-100\">\n                        <tr>\n                            <td>\n                                <md-input-container class=\"width-100\">\n                                    <input mdInput type=\"email\" formControlName=\"email\" placeholder=\"Email\" autoComplete=\"off\">\n                                    <md-error>Enter Valid Email</md-error>\n                                </md-input-container>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <md-input-container class=\"width-100\">\n                                    <input mdInput type=\"password\" formControlName=\"password\" placeholder=\"Password\" autoComplete=\"off\">\n                                    <md-error>Enter Valid Password</md-error>\n                                </md-input-container>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <md-checkbox formControlName=\"keeplogin\">Keep me signed in</md-checkbox>\n                            </td>\n                        </tr>\n                    </table>\n                </md-card-content>\n                <md-card-actions>\n                    <button *ngIf=\"!loading\" type=\"submit\" md-raised-button color=primary class=\"width-100\" [disabled]=\"!addForm.valid\">Sign In</button>\n                    <md-spinner *ngIf=\"loading\" class=\"spin\"></md-spinner>\n                </md-card-actions>\n            </form>\n        </md-card>\n        <br>\n        <div>\n            <a routerLink=\"/forgot\" class=\"forpas\">Forgot Password?</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-card {\n  padding: 10px;\n  max-width: 316px;\n  margin: 0 auto; }\n  .login-card md-card-title h4 {\n    font-weight: bold; }\n\n.width-100 {\n  width: 100%; }\n\nmd-card-actions {\n  margin-left: 0px;\n  margin-right: 0px; }\n\n.outerbody {\n  background-color: #2e3e4e; }\n  .outerbody .logo img {\n    padding-top: 8%;\n    padding-bottom: 2%;\n    margin: 0 auto; }\n\n@media all and (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {\n  .outerbody .logo img {\n    padding-top: 10%;\n    margin: 0 auto; } }\n\n.forpas {\n  margin-left: 28%;\n  font-size: 15px;\n  text-decoration: none;\n  color: #00bcd4; }\n\n.hav-acc {\n  color: #ffffff;\n  margin-left: 15%;\n  font-size: 15px; }\n\n.signup {\n  text-decoration: none;\n  color: #00bcd4; }\n\n.spin {\n  height: 50px;\n  width: 50px;\n  margin: 0 auto; }\n\n.error {\n  color: #ff0000;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_local_storage_service__ = __webpack_require__("../../../../../src/app/service/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(formBuilder, access, _router, _localStorageService, _snackbar) {
        this.formBuilder = formBuilder;
        this.access = access;
        this._router = _router;
        this._localStorageService = _localStorageService;
        this._snackbar = _snackbar;
        if (this._localStorageService.getItem('loginMessage')) {
            this._snackbar.open(this._localStorageService.getItem('loginMessage'), '', {
                duration: 2000,
            });
            this._localStorageService.clearItem('loginMessage');
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            keeplogin: false
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.addForm.valid) {
            this.loading = true;
            this.showmessage = false;
            this.email = this.addForm.controls['email'].value;
            this.password = this.addForm.controls['password'].value;
            this.keeplogin = this.addForm.controls['keeplogin'].value;
            this.access.login(this.email, this.password, this.keeplogin).subscribe(function (data) {
                _this._localStorageService.setItem('role', data.role);
                _this._localStorageService.setItem('userEmail', _this.email);
                _this.access.storeToken(data.token).then(function (status) {
                    _this._router.navigate(['/core/inbox']);
                });
            }, function (err) {
                _this.loading = false;
                _this.showmessage = true;
                _this.message = err.message;
            });
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/modules/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_local_storage_service__["a" /* LocalStorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MdSnackBar */]) === "function" && _e || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/manage-users/manage-users.component.html":
/***/ (function(module, exports) {

module.exports = "<p align=\"center\">\n  manage-users component\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/modules/manage-users/manage-users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/manage-users/manage-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageUsersComponent = (function () {
    function ManageUsersComponent() {
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
    };
    ManageUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-users',
            template: __webpack_require__("../../../../../src/app/modules/manage-users/manage-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/manage-users/manage-users.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());

//# sourceMappingURL=manage-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/manual-tag-modal/manual-tag-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>Edit Tag</h3>\n</div>\n<hr>\n<div class=\"body\">\n    <md-input-container>\n        <input mdInput placeholder=\"Title\" [(ngModel)]=\"originaltitle\">\n    </md-input-container>\n    <h5>Select color</h5>\n    <div class=\"selected-color\" [ngStyle]=\"{'background-color': originalcolor}\"></div>\n    <div class=\"color-box\">\n        <div class=\"selected-color\" *ngFor=\"let color of availableColors\" (click)=\"originalcolor = color\" [ngStyle]=\"{'background-color': color}\"></div>\n    </div>\n</div>\n<div class=\"footer\">\n    <a md-raised-button (click)=\"close()\">Close</a>\n    <a md-raised-button color=primary (click)=\"save()\">Save</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/manual-tag-modal/manual-tag-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/manual-tag-modal/manual-tag-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualTagModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManualTagModalComponent = (function () {
    function ManualTagModalComponent(dialogRef, tagupdate) {
        this.dialogRef = dialogRef;
        this.tagupdate = tagupdate;
        this.originalcolor = '';
        this.originaltitle = '';
        this.availableColors = __WEBPACK_IMPORTED_MODULE_3__config_config__["b" /* color_list */];
    }
    ManualTagModalComponent.prototype.ngOnInit = function () {
        this.originaltitle = this.tag.title;
        this.originalcolor = this.tag.color;
    };
    ManualTagModalComponent.prototype.save = function () {
        var _this = this;
        this.tag.title = this.originaltitle;
        this.tag.color = this.originalcolor;
        this.tagupdate.updateTag(this.tag, this.tag.type).subscribe(function (data) {
            _this.dialogRef.close('saved');
        }, function (err) {
            console.log(err);
        });
    };
    ManualTagModalComponent.prototype.close = function () {
        this.dialogRef.close('closed');
    };
    ManualTagModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manual-tag-modal',
            template: __webpack_require__("../../../../../src/app/modules/manual-tag-modal/manual-tag-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/manual-tag-modal/manual-tag-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], ManualTagModalComponent);
    return ManualTagModalComponent;
    var _a, _b;
}());

//# sourceMappingURL=manual-tag-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/openattachement/openattachement.component.html":
/***/ (function(module, exports) {

module.exports = "<a md-mini-fab class=\"cyan\" (click)=\"close()\">\n    <md-icon>close</md-icon>\n</a>\n<iframe class=\"ifset\" [src]=\"link | safeUrl\">\n  <p>Your browser does not support iframes.</p>\n</iframe>\n"

/***/ }),

/***/ "../../../../../src/app/modules/openattachement/openattachement.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ifset {\n  width: 100%;\n  height: 100%; }\n\n.mat-dialog-container {\n  padding: 0px !important; }\n\n.cyan {\n  float: right;\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/openattachement/openattachement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenattachementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenattachementComponent = (function () {
    function OpenattachementComponent(setvardialog, dialogRef, sanitizer) {
        this.setvardialog = setvardialog;
        this.dialogRef = dialogRef;
    }
    OpenattachementComponent.prototype.ngOnInit = function () {
        this.dialogRef.updatePosition({ top: '0px', left: '125px' });
    };
    OpenattachementComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    OpenattachementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-openattachement',
            template: __webpack_require__("../../../../../src/app/modules/openattachement/openattachement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/openattachement/openattachement.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _c || Object])
    ], OpenattachementComponent);
    return OpenattachementComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=openattachement.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainform\">\n    <md-card>\n        <form autoComplete=\"off\" [formGroup]=\"resetPasswordForm\">\n            <md-card-title class=\"cardsub\">\n                Reset Password\n            </md-card-title>\n            <md-card-subtitle class=\"error\" *ngIf=\"showmessage\">{{message}}</md-card-subtitle>\n            <md-card-content>\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-sm-12\">\n                            <md-input-container class=\"width-100\">\n                                <input mdInput placeholder=\"Old Password\" type=\"password\" [formControl]=\"resetPasswordForm.controls['old_password']\">\n                            </md-input-container>\n                            <md-error *ngIf=\"!resetPasswordForm.controls['old_password'].valid && resetPasswordForm.controls['old_password'].touched\">\n                                Please enter old password\n                            </md-error>\n                        </div>\n                        <div class=\"col-md-6 col-sm-12\">\n                            <md-input-container class=\"width-100\">\n                                <input mdInput placeholder=\"New Password\" type=\"password\" [formControl]=\"resetPasswordForm.controls['new_password']\">\n                            </md-input-container>\n                            <md-error *ngIf=\"!resetPasswordForm.controls['new_password'].valid && resetPasswordForm.controls['new_password'].touched\">\n                                Please enter new password\n                            </md-error>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <button type=\"submit\" md-raised-button color=primary [disabled]=\"resetPasswordForm.invalid || loading\" (click)=\"resetPassword()\"> Update </button>\n                        </div>\n                    </div>\n                </div>\n            </md-card-content>\n        </form>\n    </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/reset-password/reset-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-card {\n  width: 315px;\n  position: absolute;\n  left: 36%;\n  top: 25%; }\n\n.width-100 {\n  width: 100%; }\n\nmd-card-actions {\n  margin-left: 0px;\n  margin-right: 0px; }\n\n@media screen and (min-width: 320px) and (max-width: 990px) {\n  .mainform div.row div {\n    padding: 0px; } }\n\n.error {\n  color: #ff0000;\n  text-align: center; }\n\n.text-center {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(formBuilder, _imapMailsService, snackBar) {
        this.formBuilder = formBuilder;
        this._imapMailsService = _imapMailsService;
        this.snackBar = snackBar;
        this.resetPasswordForm = this.formBuilder.group({
            'old_password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'new_password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.loading = false;
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        if (this.resetPasswordForm.valid) {
            this.loading = true;
            this.showmessage = false;
            this._imapMailsService.resetPassword(this.resetPasswordForm.value).subscribe(function (res) {
                _this.loading = false;
                _this.showmessage = false;
                _this.snackBar.open(res.message, '', {
                    duration: 2000,
                });
                _this.resetPasswordForm.reset();
            }, function (err) {
                _this.loading = false;
                _this.showmessage = true;
                _this.message = err.message;
            });
        }
    };
    ResetPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__("../../../../../src/app/modules/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MdSnackBar */]) === "function" && _c || Object])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/schedule-interview/schedule-interview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <p class=\"h-text\">Schedule Interview</p>\n</div>\n<h4><b>Name</b>: {{emailData.from}}</h4>\n<h5><b>Email</b>: {{emailData.sender_mail}}</h5>\n<p class=\"error\">{{errorMessage}}</p>\n<form autoComplete=\"off\" [formGroup]=\"interviewForm\" *ngIf=\"showForm\" class=\"schedule-form\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12\">\n                <md-select placeholder=\"Interview Round\" class=\"width-100\" [formControl]=\"interviewForm.controls['selectedInterviewRound']\"\n                    (change)=\"changeInInterviewRound(interviewForm.value.selectedInterviewRound)\">\n                    <md-option *ngFor=\"let interview of interviewRounds; trackBy: interviewRoundsTrack;\" [value]=\"interview\" [disabled]=\"interview.disable\">{{ interview.name }}</md-option>\n                </md-select>\n            </div>\n            <div class=\"col-md-6 col-sm-12 no-mar\">\n                <md-input-container>\n                    <input mdInput placeholder=\"Select Date\" [ngModel]=\"showSelectedDate | date:'dd-MMMM-y'\" (focus)=\"picker.open()\" [ngModelOptions]=\"{standalone: true}\"\n                        [disabled]=\"!selectedInterviewRound\">\n                    <input mdInput [mdDatepicker]=\"picker\" [min]=\"minDate\" [max]=\"maxDate\" [mdDatepickerFilter]=\"dateFilter\" placeholder=\"Select Date\"\n                        [formControl]=\"interviewForm.controls['selectedInterviewDate']\" [hidden]='true'>\n                    <button mdSuffix [mdDatepickerToggle]=\"picker\" [disabled]=\"!selectedInterviewRound\"></button>\n                </md-input-container>\n                <md-datepicker #picker (selectedChanged)=\"changeInDate($event)\"></md-datepicker>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12\">\n                <md-select placeholder=\"Select Time\" class=\"width-100\" [formControl]=\"interviewForm.controls['selectedInterviewTime']\">\n                    <md-option *ngFor=\"let timeData of timeListData; trackBy: timeListDataTrack;\" [value]=\"timeData.time\" [disabled]=\"!timeData.status\">{{ timeData.time }}</md-option>\n                </md-select>\n            </div>\n            <div class=\"col-md-6 col-sm-12\">\n                <md-select placeholder=\"Select Template\" class=\"width-100\" [formControl]=\"interviewForm.controls['selectedInterviewTemplate']\">\n                    <md-option *ngFor=\"let template of templateData; trackBy: templateDataTrack;\" [value]=\"template.id\">{{ template.templateName }}</md-option>\n                </md-select>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12\">\n                <md-input-container class=\"width-100\">\n                    <input mdInput type=\"text\" placeholder=\"Mobile No\" [formControl]=\"interviewForm.controls['mobile_no']\">\n                </md-input-container>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12 pull-right text-right\">\n                <button md-raised-button (click)=\"close()\">Back</button>\n                <button md-raised-button type=\"submit\" color=\"accent\" (click)=\"scheduleInterview(interviewForm)\" [disabled]=\"!interviewForm.valid\">Schedule</button>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/modules/schedule-interview/schedule-interview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  border-bottom: 1px solid black; }\n\n.h-text {\n  font-size: 20px;\n  opacity: 0.8; }\n\n.main {\n  width: 100%; }\n\n.width-100 {\n  width: 100%; }\n\n.pull-right {\n  float: right; }\n\n.no-pad-top {\n  margin-top: 0px; }\n\n.no-mar {\n  margin: 0px !important; }\n\n.error {\n  color: #f00;\n  text-align: center; }\n\n.schedule-form .col-md-6 {\n  margin-top: 16px;\n  margin-bottom: 16px; }\n\nh4, h5 {\n  word-wrap: break-word; }\n\n@media screen and (min-width: 320px) and (max-width: 988px) {\n  .schedule-form .col-md-6, .schedule-form .col-sm-12 {\n    padding: 10px 0px;\n    margin-top: 8px;\n    margin-bottom: 8px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/schedule-interview/schedule-interview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleInterviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ScheduleInterviewComponent = (function () {
    function ScheduleInterviewComponent(_fb, dialogRef, scheduleApi, _commonService) {
        var _this = this;
        this._fb = _fb;
        this.dialogRef = dialogRef;
        this.scheduleApi = scheduleApi;
        this._commonService = _commonService;
        this.showForm = false;
        this.showSelectedDate = null;
        this.dateFilter = function (d) {
            return __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](_this.scheduleData, { 'date': _this._commonService.formateDate(d) }).length;
        };
        this.interviewForm = this._fb.group({
            'selectedInterviewRound': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            'selectedInterviewTemplate': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            'selectedInterviewDate': [{ value: null, disabled: false }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            'selectedInterviewTime': [{ value: null, disabled: false }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            'mobile_no': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^\d+$/)])],
        });
    }
    ScheduleInterviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.emailData.mobile_no && this.emailData.mobile_no.length > 0) {
            this.emailData.mobile_no = this.emailData.mobile_no.substr(3, this.emailData.mobile_no.length);
            if (this.emailData.mobile_no === 'undefined') {
                this.emailData.mobile_no = '';
            }
        }
        this.interviewForm.get('mobile_no').setValue(this.emailData.mobile_no);
        this.scheduleApi.getEmailStatus({ 'tag_id': this.tagselected, 'mongo_id': this.emailData._id, 'email': this.emailData.sender_mail }).subscribe(function (res) {
            if (res.flag) {
                _this.scheduleApi.getScheduleData().subscribe(function (data) {
                    _this.scheduleData = data;
                    _this.minDate = new Date(data[0]['date']);
                    _this.maxDate = new Date(data[data.length - 1]['date']);
                    _this.getTeamplateList();
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.errorMessage = res.message;
            }
        }, function (err) {
            console.log(err);
        });
        this.interviewForm.get('selectedInterviewDate').disable();
        this.interviewForm.get('selectedInterviewTime').disable();
        this.interviewRounds = this._commonService.interviewRoundDisableCheck(this.dataForInterviewScheduleRound, this.tagselected);
    };
    ScheduleInterviewComponent.prototype.changeInInterviewRound = function (interviewRound) {
        this.selectedInterviewRound = interviewRound;
        this.interviewForm.get('selectedInterviewDate').enable();
        this.interviewForm.get('selectedInterviewDate').setValue(null);
        this.interviewForm.get('selectedInterviewTime').setValue(null);
        this.showSelectedDate = null;
    };
    ScheduleInterviewComponent.prototype.changeInDate = function (selectedDate) {
        this.interviewForm.get('selectedInterviewTime').enable();
        this.interviewForm.get('selectedInterviewTime').setValue(null);
        this.showSelectedDate = selectedDate;
        this.timeListData = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](this.scheduleData, { 'date': this._commonService.formateDate(selectedDate) })[0]['time_slots'][this.selectedInterviewRound['value']];
    };
    ScheduleInterviewComponent.prototype.scheduleInterview = function (data) {
        var apiData = {
            'tag_id': data.value.selectedInterviewRound.id,
            'mongo_id': [this.emailId],
            'shedule_for': data.value.selectedInterviewRound.value,
            'shedule_date': this._commonService.formateDate(data.value.selectedInterviewDate),
            'shedule_time': data.value.selectedInterviewTime,
            'tamplate_id': data.value.selectedInterviewTemplate,
            'mobile_no': __WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* config */].mobileNoPrefix + data.value.mobile_no
        };
        this.dialogRef.close(apiData);
    };
    ScheduleInterviewComponent.prototype.close = function () {
        this.dialogRef.close('back');
    };
    ScheduleInterviewComponent.prototype.getTeamplateList = function () {
        var _this = this;
        this.scheduleApi.getTemplate().subscribe(function (data) {
            _this.templateData = data;
            _this.showForm = true;
        }, function (err) {
            console.log(err);
        });
    };
    ScheduleInterviewComponent.prototype.interviewRoundsTrack = function (index, data) {
        return data['id'] || index;
    };
    ScheduleInterviewComponent.prototype.timeListDataTrack = function (index, data) {
        return data['id'] || index;
    };
    ScheduleInterviewComponent.prototype.templateDataTrack = function (index, data) {
        return data['id'] || index;
    };
    ScheduleInterviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule-interview',
            template: __webpack_require__("../../../../../src/app/modules/schedule-interview/schedule-interview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/schedule-interview/schedule-interview.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */]) === "function" && _d || Object])
    ], ScheduleInterviewComponent);
    return ScheduleInterviewComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=schedule-interview.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <button md-icon-button class=\"setting-menu\" (click)=\"menuShow = !menuShow\"> <md-icon>menu</md-icon> </button>\n        <div class=\"col-md-2 col-sm-2 sidenav no-pad\" [ngClass]=\"{'showMenu': menuShow}\">\n            <md-list>\n                <md-list-item class=\"navlist\" *ngIf=\"role == 'Admin'\" (click)=\"goto('imap','IMAP Server Setting')\">\n                    <a md-line> IMAP Server Setting </a>\n                </md-list-item>\n                <md-list-item class=\"navlist\" *ngIf=\"role == 'Admin'\" (click)=\"goto('smtp','SMTP Server Setting')\">\n                    <a md-line> SMTP Server Setting </a>\n                </md-list-item>\n                <md-list-item class=\"navlist\" *ngIf=\"role == 'Admin'\" (click)=\"goto('slackinfo','Slack info')\">\n                    <a md-line> Slack Info </a>\n                </md-list-item>\n\n                <md-list-item class=\"navlist\" *ngIf=\"role == 'Admin' || role == 'HR'\" (click)=\"listopen=!listopen\">\n                    <a md-line>  Template Setting </a>\n                    <md-icon>{{listopen? 'keyboard_arrow_up':'keyboard_arrow_down'}}</md-icon>\n                </md-list-item>\n                <md-list *ngIf=\"listopen\">\n                    <md-list-item class=\"subnavlist\" (click)=\"goto('emailtemplate','Email Templates')\">\n                        <a>Email Templates</a>\n                    </md-list-item>\n                    <md-list-item class=\"subnavlist\" (click)=\"goto('emailvariable','Email Variables')\">\n                        <a>Email Variables</a>\n                    </md-list-item>\n                </md-list>\n                <md-list-item class=\"navlist\" *ngIf=\"role == 'Admin' || role == 'HR'\" (click)=\"goto('tagsetting','Tag Setting')\">\n                    <a md-line> Tag Setting </a>\n                </md-list-item>\n                <md-list-item class=\"navlist\" *ngIf=\"role == 'Admin' || role == 'HR'\" (click)=\"goto('automaticTags','Automatic Tags')\">\n                    <a md-line> Automatic Tags </a>\n                </md-list-item>\n                <md-list-item class=\"navlist\" *ngIf=\"role == 'Admin' || role == 'HR'\" (click)=\"goto('jobProfileTags','Job Profile Tag')\">\n                    <a md-line> Job Profile </a>\n                </md-list-item>\n                <md-list-item class=\"navlist\" *ngIf=\"role == 'Admin'\" (click)=\"goto('usersList','Users List')\">\n                    <a md-line> Users List </a>\n                </md-list-item>\n                <md-list-item class=\"navlist\" *ngIf=\"role == 'Admin'\" (click)=\"goto('useractivity','Users Log')\">\n                    <a md-line> Users Log </a>\n                </md-list-item>\n                <md-list-item class=\"navlist\" *ngIf=\"role == 'Admin'\" (click)=\"goto('emailLogs','Email Logs')\">\n                    <a md-line> Email Logs </a>\n                </md-list-item>\n                <md-list-item class=\"navlist\" (click)=\"goto('resetPassword','Reset Password')\">\n                    <a md-line> Reset Password </a>\n                </md-list-item>\n            </md-list>\n        </div>\n        <div class=\"col-md-10 col-sm-10 content\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/setting/setting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav {\n  background-color: #fff; }\n  .sidenav md-list md-list-item:hover {\n    background-color: #ecf5ef; }\n\n.navlist {\n  position: relative;\n  cursor: pointer;\n  padding: 8px 0; }\n  .navlist a {\n    font-size: 12px;\n    font-weight: bold;\n    color: #000; }\n\n.subnavlist {\n  margin-left: 10px;\n  padding: 4px 0px;\n  cursor: pointer; }\n\n.subnavlist a {\n  color: #000;\n  font-size: 12px; }\n\nmd-list-item a:hover {\n  text-decoration: none; }\n\n.content {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-color: #2e3e4e;\n  min-height: 96%; }\n\n.setting-menu {\n  display: none; }\n\n@media screen and (min-width: 320px) and (max-width: 900px) {\n  .sidenav {\n    display: none; }\n  .setting-menu {\n    display: block;\n    color: #fff; }\n  .showMenu {\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_local_storage_service__ = __webpack_require__("../../../../../src/app/service/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingComponent = (function () {
    function SettingComponent(_router, _localStorageService) {
        this._router = _router;
        this._localStorageService = _localStorageService;
    }
    SettingComponent.prototype.ngOnInit = function () {
        this.listopen = false;
        this.role = this._localStorageService.getItem('role');
    };
    SettingComponent.prototype.goto = function (path, navtitle) {
        this.menuShow = false;
        this._router.navigate(['/core/setting/' + path]);
    };
    SettingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__("../../../../../src/app/modules/setting/setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/setting/setting.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object])
    ], SettingComponent);
    return SettingComponent;
    var _a, _b;
}());

//# sourceMappingURL=setting.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/setvaremailpreview/setvaremailpreview.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"first\" class=\"main-container\">\n    <h1 md-dialog-title>Enter Values</h1>\n    <hr>\n    <form class=\"m-p\" autoComplete=\"off\" #setVar=\"ngForm\">\n        <table class=\"full\" cellspacing=\"0\">\n            <tr *ngFor=\"let variable of pendingVariables\">\n                <td>\n                    <md-input-container class=\"full\">\n                        <input mdInput placeholder=\"{{variable.name}}\" [(ngModel)]=\"variable.value\" autoComplete=\"off\" name=\"{{variable.name}}\" required>\n                    </md-input-container>\n                </td>\n            </tr>\n        </table>\n    </form>\n    <div class=\"fx-pos\">\n        <button md-raised-button (click)=\"close()\">CLOSE</button>\n        <button md-raised-button type=\"submit\" color=\"accent\" (click)=\"setVariable(setVar)\">PREVIEW MAIL</button>\n    </div>\n</div>\n<div *ngIf=\"!first\" class=\"main-container\">\n    <h1 md-dialog-title class=\"a-c\">Mail Preview\n        <button md-raised-button style=\"float: right;\" (click)=\"close()\" md-mini-fab><md-icon>close</md-icon></button>\n    </h1>\n    <hr>\n        <table class=\"full\" cellspacing=\"0\">\n            <tr>\n                <td>\n                    <h3 class=\"a-c m-z\">{{temp.subject}}</h3>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <p class=\"con-of\" [innerHTML]=\"temp.body | safeHtml\"></p>\n                </td>\n            </tr>\n        </table>\n    <div class=\"fx-pos\">\n        <button md-raised-button (click)=\"close()\" *ngIf=\"userDetails\">CLOSE</button>\n        <button md-raised-button type=\"submit\" color=\"accent\" (click)=\"sendEmail()\" *ngIf=\"userDetails\" >SEND MAIL</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/setvaremailpreview/setvaremailpreview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full {\n  width: 100%; }\n\n.label {\n  padding: .25em .5em;\n  font-size: 75%;\n  line-height: 1;\n  vertical-align: baseline;\n  font-weight: 700;\n  background-color: #5bc0de;\n  color: #fff;\n  border-radius: .2rem;\n  text-align: center;\n  display: inline-block; }\n\n.m-f {\n  margin: 15px 0px; }\n\n.fx-pos {\n  position: absolute;\n  bottom: 0px;\n  right: 0px; }\n\n.m-p {\n  max-height: 240px !important;\n  overflow: auto; }\n\n.a-c {\n  text-align: center;\n  opacity: 0.7; }\n\n.con-of {\n  overflow: auto; }\n\n.fx-pos1 {\n  position: absolute;\n  top: 92%;\n  left: 76%; }\n\n.m-z {\n  margin: 0px; }\n\n.main-container {\n  height: 100%;\n  position: relative; }\n  .main-container .mat-icon {\n    padding: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/setvaremailpreview/setvaremailpreview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetvaremailpreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetvaremailpreviewComponent = (function () {
    function SetvaremailpreviewComponent(dialogRef, apiServices, snackBar) {
        this.dialogRef = dialogRef;
        this.apiServices = apiServices;
        this.snackBar = snackBar;
        this.body = '';
    }
    SetvaremailpreviewComponent.prototype.ngOnInit = function () {
        if (this.pendingVariables.length > 0) {
            this.first = true;
        }
        else {
            this.previewEmail();
        }
    };
    SetvaremailpreviewComponent.prototype.setVariable = function (form) {
        if (form.valid) {
            this.body = this.temp.body;
            var self_1 = this;
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](form.value, function (value, key) {
                self_1.body = __WEBPACK_IMPORTED_MODULE_3_lodash__["replace"](self_1.body, key, value);
            });
            self_1.temp.body = self_1.body;
            this.previewEmail();
        }
    };
    SetvaremailpreviewComponent.prototype.previewEmail = function () {
        this.first = false;
        this.dialogRef.updateSize('80%', '80%');
    };
    SetvaremailpreviewComponent.prototype.sendEmail = function () {
        var _this = this;
        if (this.temp['default_id'] || this.temp['tag_id']) {
            if (this.notGenuine) {
                this.apiServices.sendToNotReplied(this.temp).subscribe(function (data) {
                    _this.snackBar.open("Mail Sending to " + data.no_of_candidate, '', {
                        duration: 2000,
                    });
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                this.apiServices.sendEmail(this.temp).subscribe(function (data) {
                    _this.snackBar.open('Mail Send', '', {
                        duration: 2000,
                    });
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            if (this.userDetails['CandidateEmail'] && this.userDetails['CandidateName']) {
                this.apiServices.sendTestEmail(this.userDetails, this.temp).subscribe(function (data) {
                    _this.snackBar.open('Email Send', '', {
                        duration: 2000,
                    });
                }, function (err) {
                    _this.snackBar.open(err.message, '', {
                        duration: 2000,
                    });
                    console.log(err);
                });
            }
            else {
                this.temp['emails'] = this.userDetails['CandidateEmail'];
                this.apiServices.sendEmailBySeclection(this.temp).subscribe(function (data) {
                    _this.snackBar.open('Email Send', '', {
                        duration: 2000,
                    });
                }, function (err) {
                    _this.snackBar.open(err.message, '', {
                        duration: 2000,
                    });
                    console.log(err);
                });
            }
        }
        this.dialogRef.close('done');
    };
    SetvaremailpreviewComponent.prototype.close = function () {
        this.dialogRef.close('close');
    };
    SetvaremailpreviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-setvaremailpreview',
            template: __webpack_require__("../../../../../src/app/modules/setvaremailpreview/setvaremailpreview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/setvaremailpreview/setvaremailpreview.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSnackBar */]) === "function" && _c || Object])
    ], SetvaremailpreviewComponent);
    return SetvaremailpreviewComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=setvaremailpreview.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/single-template/single-template.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header (click)=\"open = !open\">\n    <md-card-title style=\"word-break: break-word;\">{{temp.templateName}}</md-card-title>\n    <md-card-subtitle  style=\"word-wrap: break-word;\">Subject: {{temp.subject}}</md-card-subtitle>\n  </md-card-header>\n  <md-card-content *ngIf=\"open\">\n    <p class=\"pad\" [innerHTML]=\"temp.body | safeHtml\"></p>\n  </md-card-content>\n  <md-card-actions class=\"set-pos\">\n    <button md-button (click)=\"test(temp)\">TEST <md-icon class=\"e-c\">email</md-icon></button>\n    <button md-button (click)=\"edit(temp)\">EDIT <md-icon class=\"m-e\">mode_edit</md-icon></button>\n    <button md-button (click)=\"delete(temp.id)\">DELETE <md-icon class=\"d-c\">delete</md-icon></button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/modules/single-template/single-template.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  padding: 0px;\n  margin-top: 10px; }\n\nmd-card-header {\n  background-color: #b2ebf2;\n  padding: 10px 0px 0px 12px; }\n\n.set-pos {\n  text-align: center;\n  display: block;\n  margin: 0px 0px 14px 0px !important;\n  padding-bottom: 8px !important; }\n\n.e-c {\n  color: #1a237e; }\n\n.m-e {\n  color: #64dd17; }\n\n.d-c {\n  color: #ff4081; }\n\n.pad {\n  padding: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/single-template/single-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_dialog_service__ = __webpack_require__("../../../../../src/app/service/dialog.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleTemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleTemplateComponent = (function () {
    function SingleTemplateComponent(_dialogService) {
        this._dialogService = _dialogService;
        this.edits = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteTemp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.testTemp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SingleTemplateComponent.prototype.ngOnInit = function () {
        this.open = false;
    };
    SingleTemplateComponent.prototype.delete = function (id) {
        var _this = this;
        this._dialogService.openConfirmationBox('Are you sure ?').then(function (res) {
            if (res === 'yes') {
                _this.deleteTemp.emit(id);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SingleTemplateComponent.prototype.edit = function (temp) {
        this.edits.emit(temp);
    };
    SingleTemplateComponent.prototype.test = function (temp) {
        this.testTemp.emit(temp);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SingleTemplateComponent.prototype, "temp", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SingleTemplateComponent.prototype, "edits", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SingleTemplateComponent.prototype, "deleteTemp", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SingleTemplateComponent.prototype, "testTemp", void 0);
    SingleTemplateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-single-template',
            template: __webpack_require__("../../../../../src/app/modules/single-template/single-template.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/single-template/single-template.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_dialog_service__["a" /* DialogService */]) === "function" && _a || Object])
    ], SingleTemplateComponent);
    return SingleTemplateComponent;
    var _a;
}());

//# sourceMappingURL=single-template.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/slack-component-form/slack-component-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainform\">\n   <md-card>\n      <form autoComplete=\"off\" [formGroup]=\"slackinfoForm\" (ngSubmit)=\"addInfo(slackinfoForm.value)\">\n      <md-card-subtitle class=\"cardsub\">\n         Slack Information\n      </md-card-subtitle>\n      <md-card-subtitle class=\"error\" *ngIf=\"showmessage\">{{message}}</md-card-subtitle>\n      <md-card-content>\n         <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12\">\n               <md-input-container class=\"width-90\">\n                  <input type=\"text\" mdInput name=\"teamname\" placeholder=\"Team-name\"  autoComplete=\"off\" [formControl]=\"slackinfoForm.controls['teamName']\">\n               </md-input-container>\n            </div>\n            <div class=\"col-md-6 col-sm-12\">\n               <md-input-container class=\"width-90\">\n                  <input mdInput name=\"token\" type=\"text\" placeholder=\"token\" [formControl]=\"slackinfoForm.controls['token']\"   autoComplete=\"off\">\n               </md-input-container>\n            </div>\n             <div class=\"col-md-12\">\n               <button type=\"submit\" md-raised-button color=primary  [disabled]=\"!slackinfoForm.valid\"> Save</button>\n            </div>\n         </div>\n      </md-card-content>\n      </form>\n   </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/slack-component-form/slack-component-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  width: 100%;\n  min-height: 100%; }\n\n.width-90 {\n  width: 90%; }\n\n.cardsub {\n  color: inherit;\n  font-size: 18px; }\n\ntable.list {\n  width: 100%; }\n  table.list tr, table.list th {\n    text-align: center;\n    border-bottom: 1px solid #d0d0d0;\n    padding: 5px 0px;\n    vertical-align: middle; }\n  table.list tbody tr:hover {\n    background: #fafafa; }\n\n.mainform {\n  margin-bottom: 10px; }\n\n.error {\n  color: #ff0000;\n  text-align: center;\n  position: relative;\n  left: -70px; }\n\n.status {\n  padding-top: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/slack-component-form/slack-component-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlackComponentFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlackComponentFormComponent = (function () {
    function SlackComponentFormComponent(fb, _apiService) {
        this.fb = fb;
        this._apiService = _apiService;
        this.addedTeam = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.status = false;
    }
    SlackComponentFormComponent.prototype.ngOnInit = function () {
        this.validate();
    };
    SlackComponentFormComponent.prototype.validate = function () {
        this.slackinfoForm = this.fb.group({
            teamName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            token: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
    };
    SlackComponentFormComponent.prototype.addInfo = function (forminfo) {
        var _this = this;
        forminfo.status = this.status;
        this._apiService.sendSlackInfo(forminfo).subscribe(function (data) {
            _this.addedTeam.emit();
            _this.validate();
        }, function (err) {
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SlackComponentFormComponent.prototype, "addedTeam", void 0);
    SlackComponentFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slack-component-form',
            template: __webpack_require__("../../../../../src/app/modules/slack-component-form/slack-component-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/slack-component-form/slack-component-form.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], SlackComponentFormComponent);
    return SlackComponentFormComponent;
    var _a, _b;
}());

//# sourceMappingURL=slack-component-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/slack-info/slack-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n   <app-slack-component-form (addedTeam)=\"getSlackList()\"></app-slack-component-form>\n   <md-card>\n   <md-spinner *ngIf=\"loading\" class=\"spin\"></md-spinner>\n    <md-card-subtitle class=\"success\" *ngIf=\"showmessage\">{{message}}</md-card-subtitle>\n      <md-card-content class=\"table-responsive\">\n         <table class=\"table list\">\n         <colgroup>\n             <col span=\"1\" style=\"width: 20%;\">\n              <col span=\"1\" style=\"width: 40%;\">\n               <col span=\"2\" style=\"width: 20%;\">\n\n         </colgroup>\n            <thead>\n               <tr>\n                  <th>Team Name</th>\n                  <th>Selected Channel</th>\n                  <th>Status</th>\n               </tr>\n            </thead>\n            \n            <tbody *ngIf=\"slackJson && slackJson.length\">\n\n               <tr *ngFor=\"let slackdata of slackJson;let i= index\">\n                  <td>{{slackdata.teamName}}</td>\n                  <td >\n                     <md-select [(ngModel)]=\"slackJson[i].selected_channel\" (ngModelChange)=\"select(i,slackdata.id)\"class=\"width-100\" >\n                        <md-option *ngFor=\"let channel of slackdata.channel_list \" [value]=\"channel.id\">{{channel.name}}</md-option>\n                     </md-select>\n                  </td>\n                  <td>\n                  <md-icon [ngClass]=\"{'red':true,'green': slackdata.status}\" (click)=\"activateSlack(slackdata,slackdata.id)\">power_settings_new</md-icon>\n                  </td>\n                  <td>\n                     <button md-button class=\"chartcolor\" [disabled]=\"slackdata.status\" (click)=\"deleteSlackData(slackdata.id)\">REMOVE</button>\n                  </td>\n               </tr>\n            </tbody>\n         </table>\n      </md-card-content>\n   </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/slack-info/slack-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  width: 100%;\n  min-height: 100%; }\n\n.width-90 {\n  width: 90%; }\n\ntable.list {\n  width: 100%; }\n  table.list tr, table.list th {\n    text-align: center;\n    border-bottom: 1px solid #d0d0d0;\n    padding: 5px 0px;\n    vertical-align: middle; }\n  table.list tbody tr:hover {\n    background: #fafafa; }\n\n.red {\n  color: red; }\n\n.green {\n  color: green; }\n\n.spin {\n  height: 50px;\n  width: 50px;\n  margin: 0 auto; }\n\n.deletespin {\n  height: 20px;\n  width: 20px;\n  margin: 0 auto; }\n\n.chartcolor {\n  color: #ec407a; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/slack-info/slack-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlackInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlackInfoComponent = (function () {
    function SlackInfoComponent(_apiService) {
        this._apiService = _apiService;
        this.loading = true;
        this.showmessage = true;
    }
    SlackInfoComponent.prototype.ngOnInit = function () {
        this.getSlackList();
    };
    SlackInfoComponent.prototype.select = function (index, id) {
        var refData = Object.assign({}, this.slackJson[index]);
        delete refData['channel_list'];
        this.updateSlackList(refData, id);
    };
    SlackInfoComponent.prototype.activateSlack = function (slackdata, id) {
        slackdata.status = !slackdata.status;
        this.updateSlackList(slackdata, id);
    };
    SlackInfoComponent.prototype.getSlackList = function () {
        var _this = this;
        this.loading = true;
        this._apiService.getSlackInfo().subscribe(function (data) {
            _this.loading = false;
            _this.slackJson = data;
        }, function (err) {
            console.log(err);
        });
    };
    SlackInfoComponent.prototype.updateSlackList = function (refData, id) {
        var _this = this;
        this._apiService.updateSlackInfo(refData, id).subscribe(function (data) {
            _this.showmessage = true;
            _this.message = "Data Updated!";
            if (data) {
                _this.getSlackList();
                _this.showmessage = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    SlackInfoComponent.prototype.deleteSlackData = function (id) {
        var _this = this;
        this._apiService.deleteSlackData(id).subscribe(function (data) {
            _this.getSlackList();
        }, function (err) {
            console.log(err);
        });
    };
    SlackInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slack-info',
            template: __webpack_require__("../../../../../src/app/modules/slack-info/slack-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/slack-info/slack-info.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _a || Object])
    ], SlackInfoComponent);
    return SlackInfoComponent;
    var _a;
}());

//# sourceMappingURL=slack-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/smtp-component-form/smtp-component-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainform\">\n    <md-card>\n        <form autoComplete=\"off\" #smtpForm=\"ngForm\" (ngSubmit)=\"addSMTP(smtpForm)\">\n            <md-card-subtitle class=\"cardsub\">\n                SMTP Server\n            </md-card-subtitle>\n            <md-card-subtitle class=\"error\" *ngIf=\"showmessage\">{{message}}</md-card-subtitle>\n            <md-card-content>\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-12\">\n                        <md-input-container class=\"width-100\">\n                            <input mdInput name=\"username\" placeholder=\"Email/User Name\" ngModel autoComplete=\"off\" required>\n                            <md-error *ngIf=\"emailFormControl.hasError('required')\">\n                                This field is required\n                            </md-error>\n                        </md-input-container>\n                    </div>\n                    <div class=\"col-md-4 col-sm-12\">\n                        <md-input-container class=\"width-100\">\n                            <input mdInput name=\"email\" placeholder=\"Email (send via)\" ngModel autoComplete=\"off\" [formControl]=\"emailFormControl\" required>\n                            <md-error *ngIf=\"emailFormControl.hasError('required')\">\n                                This field is required\n                            </md-error>\n                            <md-error *ngIf=\"emailFormControl.hasError('pattern')\">\n                                Please enter a valid email address\n                            </md-error>\n                        </md-input-container>\n                    </div>\n                    <div class=\"col-md-4 col-sm-12\">\n                        <md-input-container class=\"width-100\">\n                            <input mdInput name=\"password\" type=\"password\" placeholder=\"Password\" required ngModel autoComplete=\"off\">\n                            <md-error>Password Required</md-error>\n                        </md-input-container>\n                    </div>\n                    <div class=\"col-md-4 col-sm-12\">\n                        <md-input-container class=\"width-100\">\n                            <input mdInput name=\"smtp_server\" placeholder=\"SMTP Server\" required ngModel autoComplete=\"off\">\n                            <md-error>Invalid Server ID</md-error>\n                        </md-input-container>\n                    </div>\n                    <div class=\"col-md-4 col-sm-12\">\n                        <md-input-container class=\"width-100\">\n                            <input mdInput name=\"server_port\" type=\"number\" placeholder=\"Server port\" min=\"1\" required ngModel autoComplete=\"off\">\n                            <md-error>Invalid Port</md-error>\n                        </md-input-container>\n                    </div>\n                    <div class=\"col-md-4 col-sm-12\">\n                        <md-radio-group name=\"type\" id=\"type\" required ngModel>\n                            <md-radio-button name=\"type\" value=\"ssl\" checked>SSL</md-radio-button>\n                            <md-radio-button name=\"type\" value=\"tls\">TLS</md-radio-button>\n                        </md-radio-group>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <button type=\"submit\" md-raised-button color=primary [disabled]=\"smtpForm.invalid || emailFormControl.invalid\"> Save </button>\n                    </div>\n                </div>\n            </md-card-content>\n        </form>\n    </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/smtp-component-form/smtp-component-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  width: 100%;\n  min-height: 100%; }\n\n.width-90 {\n  width: 90%; }\n\n.cardsub {\n  color: inherit;\n  font-size: 18px; }\n\n.mainform {\n  margin-bottom: 10px; }\n\n.error {\n  color: #ff0000;\n  text-align: center;\n  position: relative;\n  left: -70px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/smtp-component-form/smtp-component-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmtpComponentFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var SmtpComponentFormComponent = (function () {
    function SmtpComponentFormComponent(apiServices) {
        this.apiServices = apiServices;
        this.addedSMTP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(EMAIL_REGEX)]);
    }
    SmtpComponentFormComponent.prototype.ngOnInit = function () {
    };
    SmtpComponentFormComponent.prototype.addSMTP = function (form) {
        var _this = this;
        this.showmessage = false;
        if (form.valid) {
            form.value['email'] = this.emailFormControl.value;
            this.apiServices.storeSmtp(form.value).subscribe(function (data) {
                _this.addedSMTP.emit();
                form.resetForm();
                _this.emailFormControl.reset();
            }, function (err) {
                _this.showmessage = true;
                _this.message = err.message;
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SmtpComponentFormComponent.prototype, "addedSMTP", void 0);
    SmtpComponentFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-smtp-component-form',
            template: __webpack_require__("../../../../../src/app/modules/smtp-component-form/smtp-component-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/smtp-component-form/smtp-component-form.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _a || Object])
    ], SmtpComponentFormComponent);
    return SmtpComponentFormComponent;
    var _a;
}());

//# sourceMappingURL=smtp-component-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/smtp-server/smtp-server.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <app-smtp-component-form (addedSMTP)=\"getSmtpList()\"></app-smtp-component-form>\n    <div>\n        <md-card>\n            <md-card-subtitle class=\"cardsub\">\n                SMTP Settings\n            </md-card-subtitle>\n            <md-card-content class=\"table-responsive\">\n                <table class=\"list table\">\n                    <thead>\n                        <tr>\n                            <th>Email ID</th>\n                            <th>Server</th>\n                            <th>Port</th>\n                            <th>Encryption</th>\n                            <th>Status</th>\n                            <th>Test</th>\n                            <th>Delete</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let setting of settingJson; trackBy: settingJsonTrack;\">\n                            <td>{{setting.email}}</td>\n                            <td>{{setting.smtp_server}}</td>\n                            <td>{{setting.server_port}}</td>\n                            <td>{{setting.type}}</td>\n                            <td>\n                                <md-icon class=\"{{setting.status ? 'on':'off'}}\" (click)=\"changeStatus(setting.email, setting.status)\"><i class=\"material-icons\">{{setting.status ? 'done' : 'clear'}}</i></md-icon>\n                            </td>\n                            <td>\n                                <button md-button class=\"chartcolor\" (click)=\"test(setting.email)\">TEST</button>\n                            </td>\n                            <td>\n                                <button md-button class=\"chartcolor\" [disabled]=\"setting.status\" (click)=\"remove(setting.id)\">REMOVE</button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </md-card-content>\n        </md-card>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/smtp-server/smtp-server.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  width: 100%;\n  min-height: 100%; }\n\n.width-90 {\n  width: 90%; }\n\n.cardsub {\n  color: inherit;\n  font-size: 18px; }\n\ntable.list {\n  width: 100%; }\n  table.list tr, table.list th {\n    text-align: center;\n    border-bottom: 1px solid #d0d0d0;\n    padding: 5px 0px;\n    vertical-align: middle; }\n  table.list tbody tr:hover {\n    background: #fafafa; }\n\n.off {\n  color: #b71c1c;\n  cursor: pointer; }\n\n.on {\n  color: #8bc34a;\n  cursor: pointer; }\n\n.chartcolor {\n  color: #ec407a; }\n\n.mainform {\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/smtp-server/smtp-server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmtpServerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmtpServerComponent = (function () {
    function SmtpServerComponent(apiServices, snackBar) {
        this.apiServices = apiServices;
        this.snackBar = snackBar;
    }
    SmtpServerComponent.prototype.ngOnInit = function () {
        this.getSmtpList();
    };
    SmtpServerComponent.prototype.getSmtpList = function () {
        var _this = this;
        this.apiServices.getSmtpList().subscribe(function (data) {
            _this.settingJson = data;
        }, function (err) {
            console.log(err);
        });
    };
    SmtpServerComponent.prototype.test = function (email) {
        var _this = this;
        this.apiServices.testSmtp(email).subscribe(function (data) {
            _this.getSmtpList();
            _this.snackBar.open('SMTP Tested Successfully', '', {
                duration: 2000,
            });
        }, function (err) {
            _this.snackBar.open(err.message, '', {
                duration: 2000,
            });
        });
    };
    SmtpServerComponent.prototype.changeStatus = function (email, status) {
        var _this = this;
        if (!status) {
            this.apiServices.changeSmtpStatus(email).subscribe(function (data) {
                _this.getSmtpList();
            }, function (err) {
                _this.snackBar.open(err.message, '', {
                    duration: 2000,
                });
            });
        }
        else {
            this.snackBar.open('SMTP is already active', '', {
                duration: 2000,
            });
        }
    };
    SmtpServerComponent.prototype.remove = function (id) {
        var _this = this;
        this.apiServices.deleteSmtp(id).subscribe(function (data) {
            _this.getSmtpList();
        }, function (err) {
            _this.snackBar.open(err.status, '', {
                duration: 2000,
            });
        });
    };
    SmtpServerComponent.prototype.settingJsonTrack = function (index, data) {
        return data['id'] || index;
    };
    SmtpServerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-smtp-server',
            template: __webpack_require__("../../../../../src/app/modules/smtp-server/smtp-server.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/smtp-server/smtp-server.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdSnackBar */]) === "function" && _b || Object])
    ], SmtpServerComponent);
    return SmtpServerComponent;
    var _a, _b;
}());

//# sourceMappingURL=smtp-server.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/tag-setting/tag-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainform\" *ngIf=\"!loading\">\n    <p class=\"font-18\">Default tag(s)</p>\n    <hr class=\"linespace\">\n    <div class=\"tagbutton\" [style.background-color]=\"tag.color\" *ngFor=\"let tag of tags?.Default\">\n        <div class=\"taglogo\">\n            {{tag.title.charAt(0)}}\n        </div>\n        <span class=\"tagname\">\n                {{tag.title}}\n            </span>\n    </div>\n</div>\n\n<div class=\"mainform\" *ngIf=\"!loading\">\n    <p class=\"font-18\">Manual tag(s)</p>\n    <hr class=\"linespace\">\n    <div class=\"tagbutton1\" [style.background-color]=\"tag.color\" *ngFor=\"let tag of tags?.Manual\">\n        <div class=\"taglogo\" (click)=\"openManual(tag)\">\n            {{tag.title.charAt(0)}}\n        </div>\n        <span class=\"tagname\" (click)=\"openManual(tag)\">\n                {{tag.title}}\n            </span>\n        <md-icon class=\"iconset\" (click)=\"removeTag(tag.id,'Manual')\">cancel</md-icon>\n    </div>\n</div>\n\n<div class=\"pos-add\" *ngIf=\"!loading\">\n    <button md-fab (click)=\"addTag()\">\n        <md-icon>add</md-icon>\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/tag-setting/tag-setting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainform {\n  margin-bottom: 10px;\n  background-color: #ffffff;\n  padding: 10px;\n  border-radius: 4px; }\n\n.font-18 {\n  font-size: 18px;\n  margin: 5px 0px; }\n\n.tagbutton {\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  cursor: default;\n  text-decoration: none;\n  margin: 4px;\n  padding: 0px;\n  outline: none;\n  border-radius: 16px;\n  width: -webkit-fit-content; }\n\n.tagbutton1 {\n  border: 10px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: Roboto, sans-serif;\n  cursor: pointer;\n  margin: 4px;\n  padding: 0px;\n  outline: none;\n  border-radius: 16px;\n  width: -webkit-fit-content; }\n\n.taglogo {\n  color: #ffffff;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 16px;\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  margin-right: -4px;\n  -webkit-user-select: none; }\n\n.tagname {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 32px;\n  padding-left: 12px;\n  padding-right: 12px;\n  opacity: 0.8;\n  white-space: nowrap;\n  -webkit-user-select: none; }\n\n.linespace {\n  opacity: 0.5;\n  margin-bottom: 15px; }\n\n.iconset {\n  margin: 0px 4px 0px -8px;\n  opacity: 0.5;\n  position: relative;\n  top: 5px; }\n\n.iconset:hover, .tagname:hover {\n  opacity: 1; }\n\n.pos-add {\n  position: fixed;\n  right: 10px;\n  bottom: 20px; }\n\n.center {\n  position: absolute;\n  left: 45%;\n  top: 30%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/tag-setting/tag-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manual_tag_modal_manual_tag_modal_component__ = __webpack_require__("../../../../../src/app/modules/manual-tag-modal/manual-tag-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_tag_modal_add_tag_modal_component__ = __webpack_require__("../../../../../src/app/modules/add-tag-modal/add-tag-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagSettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TagSettingComponent = (function () {
    function TagSettingComponent(gettags, dialog, viewContainerRef, snackBar) {
        this.gettags = gettags;
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.snackBar = snackBar;
        this.loading = false;
    }
    TagSettingComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getAllTag();
        this.getAllTemp();
    };
    TagSettingComponent.prototype.getAllTemp = function () {
        var _this = this;
        this.gettags.getTemplate().subscribe(function (data) {
            _this.tempList = data;
        }, function (err) {
            console.log(err);
        });
    };
    TagSettingComponent.prototype.getAllTag = function () {
        var _this = this;
        this.gettags.getAllTags()
            .subscribe(function (data) {
            _this.formatTagsInArray(data);
        }, function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    TagSettingComponent.prototype.removeTag = function (id, type) {
        var _this = this;
        this.gettags.deleteTag(id, type)
            .subscribe(function (data) {
            _this.getAllTag();
        }, function (err) {
            console.log(err);
        });
    };
    TagSettingComponent.prototype.openManual = function (tag) {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__manual_tag_modal_manual_tag_modal_component__["a" /* ManualTagModalComponent */], {});
        this.dialogRef.componentInstance.tag = tag;
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
                _this.snackBar.open('Tag Updated Successfully', '', {
                    duration: 2000,
                });
            }
            _this.dialogRef = null;
            _this.getAllTag();
        });
    };
    TagSettingComponent.prototype.addTag = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__add_tag_modal_add_tag_modal_component__["a" /* AddTagModalComponent */], {});
        this.dialogRef.componentInstance.tempList = this.tempList;
        this.dialogRef.componentInstance.addTagType = 'manual';
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'Added') {
                _this.dialogRef = null;
                _this.getAllTag();
            }
        });
    };
    TagSettingComponent.prototype.formatTagsInArray = function (data) {
        this.tags = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].type === 'Default') {
                if (!this.tags['Default']) {
                    this.tags['Default'] = [];
                    this.tags['Default'].push(data[i]);
                }
                else {
                    this.tags['Default'].push(data[i]);
                }
            }
            else if (data[i].type === 'Manual') {
                if (!this.tags['Manual']) {
                    this.tags['Manual'] = [];
                    this.tags['Manual'].push(data[i]);
                }
                else {
                    this.tags['Manual'].push(data[i]);
                }
            }
            else if (data[i].type === 'Automatic') {
                if (!this.tags['Automatic']) {
                    this.tags['Automatic'] = [];
                    this.tags['Automatic'].push(data[i]);
                }
                else {
                    this.tags['Automatic'].push(data[i]);
                }
            }
        }
        this.loading = false;
    };
    TagSettingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tag-setting',
            template: __webpack_require__("../../../../../src/app/modules/tag-setting/tag-setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/tag-setting/tag-setting.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdSnackBar */]) === "function" && _d || Object])
    ], TagSettingComponent);
    return TagSettingComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=tag-setting.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/template-edit/template-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <p class=\"h-text\">Create Template</p>\n</div>\n<form autoComplete=\"off\" #Temp=\"ngForm\" (ngSubmit)=\"update(Temp)\">\n    <div class=\"con-pg\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n      <div class=\"row\">\n        <div class=\"main col-sm-8\">\n            <p>\n                <md-input-container class=\"width-100\">\n                    <input mdInput placeholder=\"Template Name\" [(ngModel)]=\"tempName\" autoComplete=\"off\" name=\"templateName\" required ngModel>\n                    <md-error>Required</md-error>\n                </md-input-container>\n                <md-input-container class=\"width-25\">\n                    <input mdInput placeholder=\"Subject\" [disabled]=\"true\" autoComplete=\"off\" name=\"fixedsubject\" required [(ngModel)]=\"subject_for_genuine\">\n                    <md-error>Required</md-error>\n                </md-input-container>\n                <md-input-container class=\"width-75\">\n                    <input mdInput placeholder=\"\" [(ngModel)]=\"subject\" autoComplete=\"off\" name=\"subject\" required ngModel>\n                    <md-error>Required</md-error>\n                </md-input-container>\n                <ckeditor name=\"body\"\n                    [(ngModel)]=\"ckeditorContent\"\n                    [config]=\"{uiColor: '#00ffff'}\"\n                    debounce=\"500\" ngModel>\n                </ckeditor>\n            </p>\n        </div>\n        <div class=\"side\">\n            <div class=\"col-sm-4\">\n            <md-card class=\"side-nav\">\n                <button md-button class=\"h-d\">System Variables</button>\n                <md-card-content class=\"d-c\">\n                    <a md-button class=\"con-btn\" *ngFor=\"let svar of sysVar\">{{svar.variableCode}}</a>\n                </md-card-content>\n            </md-card>\n            <br/>\n            <md-card class=\"side-nav\">\n                <button md-button class=\"h-d\">User Variables</button>\n                <md-card-content class=\"d-c\">\n                    <a md-button class=\"con-btn\" *ngFor=\"let uvar of userVar\">{{uvar.variableCode}}</a>\n                </md-card-content>\n            </md-card>\n        </div>\n      </div>\n    </div>\n  </div>\n    <hr>\n    <div class=\"fx-pos\">\n    \t<button md-raised-button type=\"button\" (click)=\"close()\">Back</button>\n    \t<button md-raised-button type=\"submit\" color=\"accent\">Update</button>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/modules/template-edit/template-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  position: relative;\n  border-bottom: 1px solid black; }\n\n.h-text {\n  font-size: 20px;\n  opacity: 0.8; }\n\n.width-100 {\n  width: 100%; }\n\n.width-75 {\n  width: 70%; }\n\n.sidenav {\n  padding: 5px; }\n\n.d-c {\n  background: #e0f7fa; }\n\n.h-d {\n  padding: 9px;\n  background: cyan;\n  width: 100%; }\n\nmd-card {\n  padding: 1px !important; }\n\n.con-btn {\n  text-align: left;\n  padding: 6px;\n  width: 100%; }\n\n.fx-pos {\n  float: right; }\n\n.con-pg {\n  max-height: 422px !important;\n  overflow-y: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/template-edit/template-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplateEditComponent = (function () {
    function TemplateEditComponent(dialogRef, getVariable) {
        this.dialogRef = dialogRef;
        this.getVariable = getVariable;
    }
    TemplateEditComponent.prototype.ngOnInit = function () {
        this.tempName = this.temp.templateName;
        this.subject = this.temp.subject;
        this.ckeditorContent = this.temp.body;
        this.subject_for_genuine = localStorage.getItem('subject_for_genuine');
    };
    TemplateEditComponent.prototype.update = function (form) {
        var _this = this;
        this.updateData = {
            'templateName': this.tempName,
            'subject': this.subject,
            'body': this.ckeditorContent
        };
        this.getVariable.updateTemplate(this.updateData, this.temp.id).subscribe(function (data) {
            form.reset();
            _this.dialogRef.close('updated');
        }, function (err) {
            console.log(err);
        });
    };
    TemplateEditComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    TemplateEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-template-edit',
            template: __webpack_require__("../../../../../src/app/modules/template-edit/template-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/template-edit/template-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], TemplateEditComponent);
    return TemplateEditComponent;
    var _a, _b;
}());

//# sourceMappingURL=template-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/test-template/test-template.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"first\">\n    <h1 md-dialog-title>Enter Email Id</h1>\n    <form autoComplete=\"off\" #addTemp=\"ngForm\" (ngSubmit)=\"save(addTemp)\">\n        <table class=\"full\" cellspacing=\"0\">\n            <tr>\n                <td>\n                    <md-input-container class=\"full\">\n                        <input mdInput type=\"email\" pattern=\"^[a-z0-9](\\.?[a-z0-9_-]){0,}@[a-z0-9-]+\\.([a-z]{1,6}\\.)?[a-z]{2,6}$\" placeholder=\"Candidate Email Id\" autoComplete=\"off\" name=\"CandidateEmail\" required ngModel>\n                        <md-error>Enter a valid email</md-error>\n                    </md-input-container>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <md-input-container class=\"full\">\n                        <input mdInput placeholder=\"Candidate Name\" autoComplete=\"off\" name=\"CandidateName\" required ngModel>\n                        <md-error>Required</md-error>\n                    </md-input-container>\n                </td>\n            </tr>\n        </table>\n        <div>\n            <button md-raised-button class=\"m-b\" (click)=\"close()\">Back</button>\n            <button md-raised-button class=\"m-b\" type=\"submit\" [disabled]=\"!addTemp.form.valid\" color=\"accent\">Save</button>\n        </div>\n    </form>\n</div>\n<div *ngIf=\"!first\">\n    <h1 md-dialog-title>Send Mail</h1>\n    <hr>\n    <form class=\"m-p\" autoComplete=\"off\" #addTemp=\"ngForm\" (ngSubmit)=\"setVariable(addTemp)\">\n        <div class=\"m-f\">To: <span class=\"label\">{{userDetails.CandidateName}}</span></div>\n        <table class=\"full\" cellspacing=\"0\">\n            <tr>\n                <td>\n                    <md-input-container class=\"full\">\n                        <input mdInput placeholder=\"Template Name\" [(ngModel)]=\"templateName\" autoComplete=\"off\" name=\"TemplateName\" disabled>\n                        <md-error>Required</md-error>\n                    </md-input-container>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <md-input-container class=\"width-25\">\n                        <input mdInput placeholder=\"Subject\" [disabled]=\"true\" autoComplete=\"off\" name=\"fixedsubject\" required [(ngModel)]=\"subject_for_genuine\">\n                        <md-error>Required</md-error>\n                    </md-input-container>\n                    <md-input-container class=\"width-75\">\n                        <input mdInput placeholder=\"\" [(ngModel)]=\"subject\" autoComplete=\"off\" name=\"subject\" ngModel>\n                    </md-input-container>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <p [innerHTML]=\"temp.body | safeHtml\"></p>\n                </td>\n            </tr>\n        </table>\n    </form>\n    <div class=\"text-right\">\n        <button md-raised-button class=\"m-b\" (click)=\"close()\">CLOSE</button>\n        <button md-raised-button color=\"accent\" class=\"m-b\" (click)=\"setVariable()\">SET VARIABLES</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/test-template/test-template.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full {\n  width: 100%; }\n\n.width-75 {\n  width: 70%; }\n\n.label {\n  padding: .25em .5em;\n  font-size: 75%;\n  line-height: 1;\n  vertical-align: baseline;\n  font-weight: 700;\n  background-color: #5bc0de;\n  color: #fff;\n  border-radius: .2rem;\n  text-align: center;\n  display: inline-block; }\n\n.m-f {\n  margin: 15px 0px; }\n\n.fx-pos {\n  position: absolute;\n  top: 91%;\n  left: 75%; }\n\n.text-right {\n  text-align: right;\n  padding-top: 10px; }\n\n.m-p {\n  max-height: 385px !important;\n  overflow: auto; }\n\nm-b {\n  margin: 0px 5px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/test-template/test-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setvaremailpreview_setvaremailpreview_component__ = __webpack_require__("../../../../../src/app/modules/setvaremailpreview/setvaremailpreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestTemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestTemplateComponent = (function () {
    function TestTemplateComponent(setvardialog, dialogRef, getTemp) {
        this.setvardialog = setvardialog;
        this.dialogRef = dialogRef;
        this.getTemp = getTemp;
    }
    TestTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.first = true;
        this.subject = this.temp.subject;
        this.templateName = this.temp.templateName;
        this.subject_for_genuine = localStorage.getItem('subject_for_genuine');
        this.getTemp.testTemplate(this.temp.id).subscribe(function (data) {
            _this.filteredTemp = _this.temp;
            _this.filteredTemp.body = data;
        }, function (err) {
            console.log(err);
        });
    };
    TestTemplateComponent.prototype.save = function (form) {
        if (form.valid) {
            this.userDetails = form.value;
            this.first = false;
            this.dialogRef.updateSize('80%', '80%');
            this.replaceUserName(this.userDetails.CandidateName);
            this.getUnsavedVariable();
        }
    };
    TestTemplateComponent.prototype.replaceUserName = function (candidateName) {
        this.temp.body = __WEBPACK_IMPORTED_MODULE_2_lodash__["replace"](this.temp.body, '#candidate_name', candidateName);
    };
    TestTemplateComponent.prototype.setVariable = function () {
        var _this = this;
        this.dialogConfig = this.setvardialog.open(__WEBPACK_IMPORTED_MODULE_3__setvaremailpreview_setvaremailpreview_component__["a" /* SetvaremailpreviewComponent */], {
            height: '60%',
            width: '40%'
        });
        this.filteredTemp.subject = this.subject_for_genuine + ' ' + this.filteredTemp.subject;
        this.dialogConfig.componentInstance.pendingVariables = this.pendingVariables;
        this.dialogConfig.componentInstance.temp = this.filteredTemp;
        this.dialogConfig.componentInstance.userDetails = this.userDetails;
        this.dialogConfig.afterClosed().subscribe(function (result) {
            if (result === 'done') {
                _this.dialogConfig = null;
                _this.dialogRef.close('done');
            }
            _this.dialogConfig = null;
        });
    };
    TestTemplateComponent.prototype.getUnsavedVariable = function () {
        var _this = this;
        var stringtocheck = this.filteredTemp.body;
        var regx = /#[\w-]+\|[\w -\.,@$%&*!:%^\\\/]+\||#[\w-]+/ig;
        var result = stringtocheck.match(regx);
        this.pendingVariables = [];
        if (result !== null && result.length > 0) {
            result = __WEBPACK_IMPORTED_MODULE_2_lodash__["uniq"](result);
            result.map(function (str) {
                var start_pos = str.indexOf('|') + 1;
                var end_pos = str.indexOf('|', start_pos);
                var defaultValue = str.substring(start_pos, end_pos);
                _this.pendingVariables.push({ name: str, value: defaultValue });
            });
        }
    };
    TestTemplateComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    TestTemplateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test-template',
            template: __webpack_require__("../../../../../src/app/modules/test-template/test-template.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/test-template/test-template.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _c || Object])
    ], TestTemplateComponent);
    return TestTemplateComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=test-template.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/useractivitylog/useractivitylog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <md-grid-list cols=\"8\" rowHeight=\"80px\">\n    <md-grid-tile [colspan]=\"7\">\n      <h2 class=\"h2pos\">\n        Users Log\n      </h2>\n    </md-grid-tile>\n    <md-grid-tile [colspan]=\"1\">\n      <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n   <md-icon>more_vert</md-icon>\n  </button>\n\n      <md-menu #menu=\"mdMenu\">\n        <button md-menu-item *ngFor=\"let email of usersLog; trackBy: usersLogTrack;\" (click)=\"selectedUser(email)\">\n    <span>{{email.email}}</span>\n  </button>\n      </md-menu>\n    </md-grid-tile>\n  </md-grid-list>\n\n  <md-list>\n\n    <md-list-item>\n      <div class=\"activity\">\n        <span *ngIf=\"selectUserLog && selectUserLog.email\"><b>User Email:</b> {{selectUserLog.email}}</span>\n        <p class=\"error\" *ngIf=\"selectUserLog && !selectUserLog.action\">{{errorMessage}}</p>\n        <span class=\"pagination\" *ngIf=\"selectUserLog && selectUserLog.action\">\n          <button [disabled]=\"pageNo == 0\" (click)=\"previous()\"><i class=\"material-icons\">keyboard_arrow_left</i></button>\n           {{pageNo + 1}}/{{totalPages}} \n           <button [disabled]=\"(pageNo + 1) == totalPages\" (click)=\"next()\"><i class=\"material-icons\">keyboard_arrow_right</i></button>\n          </span>\n          <div class=\"clearfix\"></div>\n        <div class=\"table-responsive\" *ngIf=\"selectUserLog && selectUserLog.action\">\n          <table class=\"table\">\n            <tr>\n              <th>Action</th>\n              <th>Response</th>\n              <th>Date</th>\n            </tr>\n            <tr *ngFor=\"let action of selectUserLog.action; let i = index; trackBy: selectUserLogActionTrack;\">\n              <td>{{action}}</td>\n              <td>{{selectUserLog.json[i]}}</td>\n              <td>{{selectUserLog.time[i] | date:'medium'}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </md-list-item>\n  </md-list>\n  <br>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/useractivitylog/useractivitylog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  background-color: #ffffff;\n  border-radius: 3px;\n  min-height: 100px; }\n\n.h2pos {\n  position: inherit;\n  top: 0px;\n  left: 15px; }\n\n.activity {\n  width: 100%; }\n\n.center {\n  position: absolute;\n  left: 44%; }\n\n.pagination {\n  float: right;\n  margin-right: 2em; }\n  .pagination button {\n    background: transparent;\n    border: none;\n    outline: none;\n    vertical-align: middle; }\n  .pagination i {\n    cursor: pointer; }\n\n.error {\n  color: #f00;\n  text-align: center; }\n\ntd {\n  word-break: break-all; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/useractivitylog/useractivitylog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_local_storage_service__ = __webpack_require__("../../../../../src/app/service/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActivityLogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserActivityLogComponent = (function () {
    function UserActivityLogComponent(emailactivity, _localStorageService) {
        this.emailactivity = emailactivity;
        this._localStorageService = _localStorageService;
        this.pageNo = 0;
        this.recordPerPage = 100;
    }
    UserActivityLogComponent.prototype.ngOnInit = function () {
        this.selectedUserEmail = this._localStorageService.getItem('userEmail');
        if (this.selectedUserEmail) {
            this.getUserLogs();
            this.getUserList();
        }
    };
    UserActivityLogComponent.prototype.getUserLogs = function () {
        var _this = this;
        this.errorMessage = '';
        this.emailactivity.getHistory({ 'email': this.selectedUserEmail }).subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](data['data'], function (value, key) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](value['action'], function (actionValue, actionKey) {
                    data['data'][key]['action'][actionKey] = actionValue.substr(0, actionValue.indexOf('?'));
                    data['data'][key]['json'][actionKey] = JSON.stringify(data['data'][key]['json'][actionKey]);
                });
            });
            _this.selectUserLogFullData = data['data'][0] || [];
            _this.errorMessage = data['message'];
            if (data['data'][0]) {
                _this.totalPages = Math.ceil((_this.selectUserLogFullData['action'].length || 0) / _this.recordPerPage);
                _this.paginate(data['data'][0]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    UserActivityLogComponent.prototype.getUserList = function () {
        var _this = this;
        this.emailactivity.getUserList({ 'page': 1, limit: 100 }).subscribe(function (res) {
            _this.usersLog = res['data'];
            _this.usersLog.unshift({ 'email': _this._localStorageService.getItem('userEmail') });
        }, function (err) {
            console.log(err);
        });
    };
    UserActivityLogComponent.prototype.paginate = function (data) {
        data = JSON.parse(JSON.stringify(data));
        this.selectUserLog = { 'email': data['email'] };
        var startRec = this.pageNo * this.recordPerPage;
        var endRec = startRec + this.recordPerPage;
        this.selectUserLog['action'] = __WEBPACK_IMPORTED_MODULE_2_lodash__["slice"](data.action, startRec, endRec);
        this.selectUserLog['json'] = __WEBPACK_IMPORTED_MODULE_2_lodash__["slice"](data.json, startRec, endRec);
        this.selectUserLog['time'] = __WEBPACK_IMPORTED_MODULE_2_lodash__["slice"](data.time, startRec, endRec);
    };
    UserActivityLogComponent.prototype.next = function () {
        ++this.pageNo;
        this.paginate(this.selectUserLogFullData);
    };
    UserActivityLogComponent.prototype.previous = function () {
        --this.pageNo;
        this.paginate(this.selectUserLogFullData);
    };
    UserActivityLogComponent.prototype.selectedUser = function (logData) {
        this.selectedUserEmail = logData['email'];
        this.getUserLogs();
        this.pageNo = 0;
        this.selectUserLogFullData = [];
        this.selectUserLog = { 'email': logData['email'] };
    };
    UserActivityLogComponent.prototype.usersLogTrack = function (index, data) {
        return data['id'] || index;
    };
    UserActivityLogComponent.prototype.selectUserLogActionTrack = function (index, data) {
        return index;
    };
    UserActivityLogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-useractivitylog',
            template: __webpack_require__("../../../../../src/app/modules/useractivitylog/useractivitylog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/useractivitylog/useractivitylog.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object])
    ], UserActivityLogComponent);
    return UserActivityLogComponent;
    var _a, _b;
}());

//# sourceMappingURL=useractivitylog.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <h3 class=\"heading\">User List</h3>\n    <div class=\"table-responsive\">\n        <table class=\"list table\">\n            <thead>\n                <tr>\n                    <th>Sr. No</th>\n                    <th>Email</th>\n                    <th>Role</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let user of userList; index as i; trackBy: userListTrack\">\n                    <td>{{i+1}}</td>\n                    <td class=\"text-left\">{{user.email}}</td>\n                    <td>{{user.user_type}}</td>\n                    <td (click)=\"deleteUser(user)\"><i class=\"material-icons\">&#xE872;</i></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</md-card>\n<div class=\"pos-add\">\n    <a md-fab (click)=\"addUser()\">\n        <md-icon>add</md-icon>\n    </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/users-list/users-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-responsive {\n  border: none; }\n\ntable.list {\n  width: 100%;\n  border-collapse: collapse; }\n  table.list tr, table.list th, table.list td {\n    text-align: left;\n    border-bottom: 1px solid #d0d0d0;\n    padding: 5px 0px;\n    vertical-align: middle; }\n  table.list th, table.list td {\n    height: 30px; }\n  table.list tbody tr:hover {\n    background: #fafafa; }\n  table.list .material-icons {\n    cursor: pointer;\n    color: #f00; }\n\n.pos-add {\n  position: fixed;\n  right: 10px;\n  bottom: 20px; }\n\n.pagination {\n  text-align: right; }\n  .pagination button {\n    background: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_dialog_service__ = __webpack_require__("../../../../../src/app/service/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersListComponent = (function () {
    function UsersListComponent(_dialogService, _imapMailsService) {
        this._dialogService = _dialogService;
        this._imapMailsService = _imapMailsService;
        this.page = 1;
        this.limit = 100;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.Math = Math;
        this.getUserList();
    };
    UsersListComponent.prototype.getUserList = function () {
        var _this = this;
        this._imapMailsService.getUserList({ 'page': this.page, limit: this.limit }).subscribe(function (res) {
            _this.userList = res['data'];
            _this.totalCount = res['total_count'];
        }, function (err) {
            console.log(err);
        });
    };
    UsersListComponent.prototype.previous = function () {
        --this.page;
        this.getUserList();
    };
    UsersListComponent.prototype.next = function () {
        ++this.page;
        this.getUserList();
    };
    UsersListComponent.prototype.addUser = function () {
        var _this = this;
        this._dialogService.openAddUser().then(function (res) {
            if (res) {
                _this.userList.unshift(res);
                _this.getUserList();
            }
        }, function (err) {
            console.log(err);
        });
    };
    UsersListComponent.prototype.deleteUser = function (userData) {
        var _this = this;
        this._dialogService.openConfirmationBox('Are you sure ?').then(function (res) {
            if (res === 'yes') {
                __WEBPACK_IMPORTED_MODULE_3_lodash__["pull"](_this.userList, userData);
                _this._imapMailsService.deleteUser(userData.id).subscribe(function (deleteData) {
                    _this.getUserList();
                }, function (err) {
                    console.log(err);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    UsersListComponent.prototype.userListTrack = function (index, data) {
        return data['id'] || index;
    };
    UsersListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__("../../../../../src/app/modules/users-list/users-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/users-list/users-list.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_dialog_service__["a" /* DialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object])
    ], UsersListComponent);
    return UsersListComponent;
    var _a, _b;
}());

//# sourceMappingURL=users-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/avatar-directive.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarDirectiveDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvatarDirectiveDirective = (function () {
    function AvatarDirectiveDirective(elementRef, _http) {
        this.elementRef = elementRef;
        this._http = _http;
    }
    AvatarDirectiveDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.email && this.email.length && this.email.split('@')[1] === 'gmail.com') {
            this._http.get("http://picasaweb.google.com/data/entry/api/user/" + this.email + "?alt=json").subscribe(function (res) {
                var jsonResponse = res.json();
                _this.elementRef.nativeElement.innerHTML = "<img src=\"" + jsonResponse['entry']['gphoto$thumbnail']['$t'] + "\" />";
            }, function (err) {
                _this.elementRef.nativeElement.innerHTML = "<img src=\"assets/user.jpg\" />";
            });
        }
        else {
            this.elementRef.nativeElement.innerHTML = "<img src=\"assets/user.jpg\" />";
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AvatarDirectiveDirective.prototype, "email", void 0);
    AvatarDirectiveDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAvatarDirective]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _b || Object])
    ], AvatarDirectiveDirective);
    return AvatarDirectiveDirective;
    var _a, _b;
}());

//# sourceMappingURL=avatar-directive.directive.js.map

/***/ }),

/***/ "../../../../../src/app/service/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imapemails_service__ = __webpack_require__("../../../../../src/app/service/imapemails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_storage_service__ = __webpack_require__("../../../../../src/app/service/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommonService = (function () {
    function CommonService(_apiService, _localStorageService) {
        this._apiService = _apiService;
        this._localStorageService = _localStorageService;
        this.inboxRefresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
    }
    CommonService.prototype.getDefaultTagColor = function (title) {
        if (title === 'Ignore') {
            return { 'background-color': '#FF0000' };
        }
        else if (title === 'Genuine Applicant') {
            return { 'background-color': '#41A317' };
        }
        else if (title === 'Reject') {
            return { 'background-color': '#F1B2B2' };
        }
        else if (title === 'Schedule') {
            return { 'background-color': '#FBB917' };
        }
        else {
            return { 'background-color': 'cyan' };
        }
    };
    CommonService.prototype.getDefaultTagIcon = function (title) {
        if (title === 'Ignore') {
            return 'block';
        }
        else if (title === 'Genuine Applicant') {
            return 'done_all';
        }
        else if (title === 'Reject') {
            return 'highlight_off';
        }
        else if (title === 'Schedule') {
            return 'access_time';
        }
        else {
            return 'thumb_up';
        }
    };
    CommonService.prototype.formateDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_5_moment__(date).format('YYYY-MM-DD');
    };
    CommonService.prototype.interviewRoundDisableCheck = function (dataForInterviewScheduleRound, tagselected) {
        var interviewRounds = __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* config */]['interviewRounds'];
        var interviewRoundsDisableIndex = -1;
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](interviewRounds, function (value, key) {
            value['id'] = dataForInterviewScheduleRound[key]['id'];
            if (dataForInterviewScheduleRound[key]['id'] === tagselected) {
                interviewRoundsDisableIndex = key;
            }
        });
        // performing interview rounnd disable login as per select tag id from side nav
        if (interviewRoundsDisableIndex >= 0) {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](interviewRounds, function (value, key) {
                if (interviewRoundsDisableIndex >= key) {
                    value['disable'] = true;
                }
                else {
                    value['disable'] = false;
                }
            });
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](interviewRounds, function (value, key) {
                if (key > 0 && interviewRounds[key]['disable'] == false && interviewRounds[key - 1]['disable'] == true) {
                    interviewRounds[key - 1]['disable'] = false;
                }
                else {
                    if (key == interviewRounds.length - 1 && interviewRounds[interviewRounds.length - 1]) {
                        interviewRounds[interviewRounds.length - 1]['disable'] = false;
                    }
                }
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](interviewRounds, function (value, key) {
                if (key === 0) {
                    value['disable'] = false;
                }
                else {
                    value['disable'] = true;
                }
            });
        }
        return interviewRounds;
    };
    CommonService.prototype.inboxRefreshEvent = function () {
        this.inboxRefresh.emit();
    };
    CommonService.prototype.formateTags = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var tagsForEmailListAndModel = {};
            var dataForInterviewScheduleRound = [];
            var inboxMailsTagsForEmailListAndModel = {};
            var subject_for_genuine = '';
            var role = _this._localStorageService.getItem('role');
            if (role === 'Guest') {
                resolve({
                    'tagsForEmailListAndModel': tagsForEmailListAndModel,
                    'dataForInterviewScheduleRound': dataForInterviewScheduleRound,
                    'subject_for_genuine': subject_for_genuine,
                    'inboxMailsTagsForEmailListAndModel': inboxMailsTagsForEmailListAndModel
                });
                return;
            }
            if (data && data.length > 0) {
                inboxMailsTagsForEmailListAndModel = data[0];
            }
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](data, function (value, key) {
                if (value['subject_for_genuine']) {
                    subject_for_genuine = value['subject_for_genuine'];
                    localStorage.setItem('subject_for_genuine', value['subject_for_genuine']);
                }
                else {
                    subject_for_genuine = 'Revert Information';
                    localStorage.setItem('subject_for_genuine', 'Revert Information');
                }
                if (!tagsForEmailListAndModel['Default']) {
                    tagsForEmailListAndModel['Default'] = [];
                    tagsForEmailListAndModel['Default'] = data[0]['data'].length > 0 ? data[0]['data'][0]['subchild'] : [];
                }
                else {
                    tagsForEmailListAndModel['Default'] = data[0]['data'].length > 0 ? data[0]['data'][0]['subchild'] : [];
                }
                if (value['data'] && value['data'].length > 0) {
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](value['data'], function (value1, key1) {
                        if (value1['type'] === 'Automatic') {
                            if (!tagsForEmailListAndModel['Automatic']) {
                                tagsForEmailListAndModel['Automatic'] = [];
                                tagsForEmailListAndModel['Automatic'].push(value1);
                            }
                            else {
                                tagsForEmailListAndModel['Automatic'].push(value1);
                            }
                        }
                    });
                }
            });
            // code for removing schedule_first_round, schedule_second_round, schedule_third_round for tagsForEmailListAndModel
            // also creating interview schedule array from here
            _this._apiService.getScheduleData().subscribe(function (scheduleData) {
                if (scheduleData && scheduleData.length > 0) {
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](scheduleData[0]['rounds'], function (scheduleDataValue, scheduleDataKey) {
                        if (tagsForEmailListAndModel && tagsForEmailListAndModel['Default'] && tagsForEmailListAndModel['Default'].length > 0) {
                            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](tagsForEmailListAndModel['Default'], function (value, key) {
                                if (value['title'] === scheduleDataValue['round']) {
                                    dataForInterviewScheduleRound.push(value);
                                }
                            });
                        }
                    });
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["pullAll"](tagsForEmailListAndModel['Default'], dataForInterviewScheduleRound);
                    tagsForEmailListAndModel['Default'].push({ color: '#ba21d3', count: 0, id: 9999, title: 'Schedule', unread: 0 });
                }
                resolve({
                    'tagsForEmailListAndModel': tagsForEmailListAndModel,
                    'dataForInterviewScheduleRound': dataForInterviewScheduleRound,
                    'subject_for_genuine': subject_for_genuine,
                    'inboxMailsTagsForEmailListAndModel': inboxMailsTagsForEmailListAndModel
                });
            }, function (err) {
                console.log(err);
            });
        });
    };
    CommonService.prototype.reduseCountEmail = function (tags, selectedTag, parantId) {
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](tags, function (value, key) {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](value['data'], function (dataValue, dataKey) {
                if (!selectedTag && dataValue['title'] === 'Mails') {
                    dataValue['unread'] = dataValue['unread'] - 1;
                }
                if (parantId && parantId * 1 === dataValue['id'] * 1) {
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](dataValue['subchild'], function (subchildValue, subchildKey) {
                        if (subchildValue['id'] === selectedTag) {
                            subchildValue['unread'] = subchildValue['unread'] - 1;
                        }
                    });
                }
            });
        });
        return tags;
    };
    CommonService.prototype.formateEmailHistoryData = function (data, emailId) {
        var deletedData = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](data.data, { '_id': emailId });
        __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](data.data, {
            '_id': emailId
        });
        data.data.unshift(deletedData);
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](data['data'], function (value, key) {
            if (value['body']) {
                value['body'] = value['body'].replace(/<a/g, '<a target="_blank" ');
            }
            if (key === 0) {
                value['accordianIsOpen'] = true;
            }
            else {
                value['accordianIsOpen'] = false;
            }
        });
        return data;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
    ], CommonService.prototype, "inboxRefresh", void 0);
    CommonService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__imapemails_service__["a" /* ImapMailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__imapemails_service__["a" /* ImapMailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */]) === "function" && _c || Object])
    ], CommonService);
    return CommonService;
    var _a, _b, _c;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = (function () {
    function DashboardService() {
    }
    DashboardService.prototype.formatChartData = function (res) {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](res.day_wise, function (value, key) {
            __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](value.dates, function (dates, datesKey) {
                value.dates[datesKey] = __WEBPACK_IMPORTED_MODULE_2_moment__(dates).format('Do MMM');
            });
        });
        __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](res.email_stat, function (value, key) {
            __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](value.dates, function (dates, datesKey) {
                value.dates[datesKey] = __WEBPACK_IMPORTED_MODULE_2_moment__(dates).format('Do MMM');
            });
        });
        __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](res.read_email_data, function (value, key) {
            __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](value.dates, function (dates, datesKey) {
                value.dates[datesKey] = __WEBPACK_IMPORTED_MODULE_2_moment__(dates).format('Do MMM');
            });
        });
        return res;
    };
    DashboardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DashboardService);
    return DashboardService;
}());

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_schedule_interview_schedule_interview_component__ = __webpack_require__("../../../../../src/app/modules/schedule-interview/schedule-interview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_add_new_user_add_new_user_component__ = __webpack_require__("../../../../../src/app/modules/add-new-user/add-new-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/modules/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_setvaremailpreview_setvaremailpreview_component__ = __webpack_require__("../../../../../src/app/modules/setvaremailpreview/setvaremailpreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_fetch_email_by_day_fetch_email_by_day_component__ = __webpack_require__("../../../../../src/app/modules/fetch-email-by-day/fetch-email-by-day.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_cron_status_model_cron_status_model_component__ = __webpack_require__("../../../../../src/app/modules/cron-status-model/cron-status-model.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.openScheduleInterview = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__modules_schedule_interview_schedule_interview_component__["a" /* ScheduleInterviewComponent */], {
                height: '90%',
                width: '70%'
            });
            _this.dialogRef.componentInstance.tagId = data.id;
            _this.dialogRef.componentInstance.emailId = data.emailId;
            _this.dialogRef.componentInstance.dataForInterviewScheduleRound = data.dataForInterviewScheduleRound;
            _this.dialogRef.componentInstance.tagselected = data.tagselected;
            _this.dialogRef.componentInstance.emailData = data.emailData;
            _this.dialogRef.afterClosed().subscribe(function (result) {
                _this.dialogRef = null;
                if (result) {
                    resolve(result);
                }
                else {
                    resolve();
                }
            });
        });
    };
    DialogService.prototype.openAddUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__modules_add_new_user_add_new_user_component__["a" /* AddNewUserComponent */]);
            _this.dialogRef.afterClosed().subscribe(function (result) {
                _this.dialogRef = null;
                if (result) {
                    resolve(result);
                }
                else {
                    resolve();
                }
            });
        });
    };
    DialogService.prototype.getCronStatusDialog = function (emailParentId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modules_cron_status_model_cron_status_model_component__["a" /* CronStatusModelComponent */]);
            _this.dialogRef.componentInstance.emailParentId = emailParentId;
            _this.dialogRef.afterClosed().subscribe(function (result) {
                _this.dialogRef = null;
                if (result) {
                    resolve(result);
                }
                else {
                    resolve();
                }
            });
        });
    };
    DialogService.prototype.fetchEmailByDay = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modules_fetch_email_by_day_fetch_email_by_day_component__["a" /* FetchEmailByDayComponent */], {
                'height': '180px'
            });
            _this.dialogRef.afterClosed().subscribe(function (result) {
                _this.dialogRef = null;
                resolve();
            });
        });
    };
    DialogService.prototype.openConfirmationBox = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__modules_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */], {
                'height': '140px'
            });
            _this.dialogRef.componentInstance.message = message;
            _this.dialogRef.afterClosed().subscribe(function (result) {
                _this.dialogRef = null;
                if (result) {
                    resolve(result);
                }
                else {
                    resolve();
                }
            });
        });
    };
    DialogService.prototype.previewEmail = function (emailData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modules_setvaremailpreview_setvaremailpreview_component__["a" /* SetvaremailpreviewComponent */], {
                height: '60%',
                width: '40%'
            });
            _this.dialogRef.componentInstance.pendingVariables = [];
            _this.dialogRef.componentInstance.temp = emailData;
            _this.dialogRef.afterClosed().subscribe(function (result) {
                _this.dialogRef = null;
                resolve();
            });
        });
    };
    DialogService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdDialog */]) === "function" && _a || Object])
    ], DialogService);
    return DialogService;
    var _a;
}());

//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/http.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__("../../../../../src/app/service/http.interceptor.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = httpFactory;

function httpFactory(xhrBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a" /* InterceptedHttp */](xhrBackend, requestOptions);
}
//# sourceMappingURL=http.factory.js.map

/***/ }),

/***/ "../../../../../src/app/service/http.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterceptedHttp = (function (_super) {
    __extends(InterceptedHttp, _super);
    function InterceptedHttp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    InterceptedHttp.prototype.get = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.post = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.put = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.delete = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.updateUrl = function (req) {
        return req + '?accessToken=' + localStorage.getItem('token');
    };
    InterceptedHttp.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        }
        options.headers.append('Content-Type', 'application/json');
        return options;
    };
    InterceptedHttp.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options).catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                window.localStorage.setItem('loginMessage', JSON.stringify('Token Expire. Please login Again.'));
                var getUrl = window.location;
                var baseUrl = getUrl.protocol + '//' + getUrl.host + '/' + getUrl.pathname.split('/')[1];
                window.location.replace(baseUrl);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error);
        });
    };
    InterceptedHttp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]) === "function" && _b || Object])
    ], InterceptedHttp);
    return InterceptedHttp;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]));

//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/service/imapemails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mock_data__ = __webpack_require__("../../../../../src/app/service/mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_interceptor__ = __webpack_require__("../../../../../src/app/service/http.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImapMailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ImapMailsService = (function () {
    function ImapMailsService(http, Intercepted) {
        var _this = this;
        this.http = http;
        this.Intercepted = Intercepted;
        this.count = 0;
        this.apiStartEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.apiEndEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.childMethodCall = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();
        // Observalbe string streams
        this.componentMehtodCalled$ = this.childMethodCall.asObservable();
        window.onbeforeunload = function (e) {
            if (_this.count) {
                var dialogText = 'Dialog text here';
                e.returnValue = dialogText;
                return dialogText;
            }
            else {
                return e;
            }
        };
    }
    ImapMailsService.prototype.fetchNewEmail = function () {
        this.childMethodCall.next();
    };
    ImapMailsService.prototype.refreshNewEmails = function () {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'email/fetchByButton')
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.increaseAPiCount = function () {
        ++this.count;
        this.apiStartEvent.emit();
    };
    ImapMailsService.prototype.decreaseAPiCount = function () {
        --this.count;
        if (this.count === 0) {
            this.apiEndEvent.emit();
        }
    };
    ImapMailsService.prototype.getEmailList = function (body) {
        var _this = this;
        this.increaseAPiCount();
        if (!!body.type) {
            return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("email/fetch/" + body.tag_id + "/" + body.page + "/" + body.limit), body)
                .map(function (res) {
                _this.decreaseAPiCount();
                return res.json();
            })
                .catch(function (error) {
                _this.count = 0;
                _this.apiEndEvent.emit();
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
            });
        }
        else {
            return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("email/fetch/" + body.tag_id + "/" + body.page + "/" + body.limit), body)
                .map(function (res) {
                _this.decreaseAPiCount();
                return res.json();
            })
                .catch(function (error) {
                _this.count = 0;
                _this.apiEndEvent.emit();
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
            });
        }
    };
    ImapMailsService.prototype.sendEmailToPendingCandidates = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'email/send_to_selected_tag', body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.updatePriority = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'update/priority', body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getDashboardData = function () {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'dashboard')
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getEmailStatus = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'get/emailStatus', body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getScheduleData = function () {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'get/shedule')
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getEmailLogs = function (body) {
        var _this = this;
        this.increaseAPiCount();
        var url;
        if (body['email']) {
            url = "search/email/logs/" + body.email + "/" + body.page + "/" + body.limit;
        }
        else {
            url = "get/email/logs/" + body.page + "/" + body.limit;
        }
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + url)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getUserList = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("user/list/" + body.page + "/" + body.limit))
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.fetchEmailByDays = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("fetch/emails/" + body.days))
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getAllTagsMain = function () {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'email/countEmail')
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getAllTags = function () {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'tag/get')
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.addTag = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'tag/add/' + body.type, body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getCronStatus = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'email/cron_status', body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.addUser = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'user/add_user', body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.sendEmail = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'email/sendtomany', body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.sendToNotReplied = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'sendToNotReplied', body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.UnreadStatus = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("email/changeUnreadStatus/" + body.mongo_id + "/" + body.status), body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.MarkASUnreadStatus = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + "email/markAsUnread", body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.resetPassword = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + "account/update_password", body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.emailAttachment = function (id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("email/mailAttachment/" + id))
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.assignTag = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("email/assignMultiple/" + body.tag_id), body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.deleteEmail = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("email/deleteEmail/" + body.tag_id), body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.updateTag = function (tag, type) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'tag/update/' + type + '/' + tag.id, tag)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.deleteTag = function (tag, type) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'tag/delete/' + type + '/' + tag)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.deleteUser = function (id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'user/delete/' + id)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getHistory = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("user/log/" + body.email))
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getUserVariable = function () {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'variable/get/1/20')
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getSystemVariable = function () {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'systemVariable/get/1/20')
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.addUserVariable = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'variable/add/', body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.deleteVariable = function (id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'variable/delete/' + id)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.updateVariable = function (body, id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'variable/update/' + id, body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.addTemplate = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'template/add/', body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getEmailName = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_6__mock_data__["a" /* Emaillist */]);
    };
    ImapMailsService.prototype.deleteImap = function (id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'imap/delete/' + id)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.storeImap = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'imap/save', body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getImapList = function () {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'imap/get')
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.storeSmtp = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'smtp/save', body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.sendTestEmail = function (userDetail, body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("template/email/" + userDetail.CandidateEmail), body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.sendEmailBySeclection = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + "email/by_seclection", body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.activateImap = function (email_id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("imap/statusActive/" + email_id))
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getSmtpList = function () {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'smtp/get/1/10')
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.deleteSmtp = function (id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'smtp/delete/' + id)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.testSmtp = function (email) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("smtp/testSmtp/" + email))
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.changeSmtpStatus = function (email) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("smtp/changeStatus/" + email))
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    // *** Email template service functions ***
    ImapMailsService.prototype.getTemplate = function () {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'template/get/1/20')
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.updateTemplate = function (body, id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'template/update/' + id, body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.deleteTemplate = function (id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'template/delete/' + id)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getCandidateHistory = function (Email_id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("email/inbox/" + Email_id))
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.testTemplate = function (temp_id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + ("template/test/" + temp_id))
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.addNote = function (data) {
        var _this = this;
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'candidate_notes/insert/', data)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.updateNote = function (data) {
        var _this = this;
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + "candidate_notes/update/", data)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.sendSlackInfo = function (info) {
        var _this = this;
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + "add/slackInfo/", info)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.getSlackInfo = function () {
        var _this = this;
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + "get/slackInfo/")
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.updateSlackInfo = function (body, id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'update/slackInfo/' + id, body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.deleteSlackData = function (id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + "delete/slackInfo/" + id)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.addSubTag = function (body) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + 'tag/add/' + body.type, body)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    ImapMailsService.prototype.deleteSubTag = function (type, id) {
        var _this = this;
        this.increaseAPiCount();
        return this.Intercepted.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['apibase'] + "tag/delete/" + type + '/' + id)
            .map(function (res) {
            _this.decreaseAPiCount();
            return res.json();
        })
            .catch(function (error) {
            _this.count = 0;
            _this.apiEndEvent.emit();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json() || 'Server error');
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
    ], ImapMailsService.prototype, "apiStartEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
    ], ImapMailsService.prototype, "apiEndEvent", void 0);
    ImapMailsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__http_interceptor__["a" /* InterceptedHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__http_interceptor__["a" /* InterceptedHttp */]) === "function" && _d || Object])
    ], ImapMailsService);
    return ImapMailsService;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=imapemails.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setItem = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    LocalStorageService.prototype.getItem = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    LocalStorageService.prototype.clearItem = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/login-route-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__("../../../../../src/app/config/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_storage_service__ = __webpack_require__("../../../../../src/app/service/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginRouteGuard = (function () {
    function LoginRouteGuard(router, _localStorageService) {
        this.router = router;
        this._localStorageService = _localStorageService;
    }
    LoginRouteGuard.prototype.canActivate = function (route, state) {
        if (!!this._localStorageService.getItem('role')) {
            this.role = this._localStorageService.getItem('role');
            if (this.role === 'Admin') {
                return true;
            }
            if (__WEBPACK_IMPORTED_MODULE_3_lodash__["indexOf"](__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* config */]['roles'][this.role], state.url) !== -1) {
                return true;
            }
            else {
                if (state.url === '/core/setting/imap' && this.role === 'HR') {
                    this.router.navigate(['/core/setting/emailtemplate']);
                    return true;
                }
                else if (state.url === '/core/setting/imap' && this.role === 'Guest') {
                    this.router.navigate(['/core/setting/resetPassword']);
                    return true;
                }
                else if (state.url.substring(0, 18) === '/core/inbox/email/') {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return false;
        }
    };
    LoginRouteGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object])
    ], LoginRouteGuard);
    return LoginRouteGuard;
    var _a, _b;
}());

//# sourceMappingURL=login-route-guard.js.map

/***/ }),

/***/ "../../../../../src/app/service/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_interceptor__ = __webpack_require__("../../../../../src/app/service/http.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginService = (function () {
    function LoginService(http, Intercepted) {
        this.http = http;
        this.Intercepted = Intercepted;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: this.headers
        });
    }
    LoginService.prototype.login = function (id, password, keepLogin) {
        var body = {
            'email': id,
            'password': password,
            'remember_me': keepLogin
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */]['apibase'] + 'user/login', body, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json() || 'Server error'); });
    };
    LoginService.prototype.forgotPassword = function (body) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */]['apibase'] + ("account/forgot_password/" + body.email), body)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json() || 'Server error'); });
    };
    LoginService.prototype.verifyAccess = function () {
        return this.Intercepted.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */]['apibase'] + 'verify')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json() || 'Server error'); });
    };
    LoginService.prototype.storeToken = function (token) {
        localStorage.setItem('token', token);
        return Promise.resolve(true);
    };
    LoginService.prototype.removeToken = function () {
        localStorage.removeItem('token');
        return Promise.resolve(true);
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_interceptor__["a" /* InterceptedHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_interceptor__["a" /* InterceptedHttp */]) === "function" && _b || Object])
    ], LoginService);
    return LoginService;
    var _a, _b;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export historylog */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emaillist; });
/* unused harmony export SystemVar */
var historylog = [{
        'email': '123@gmail.com',
        'action': 'New Email server added',
        'actionsub': 'new server email id: sdkf@gmail.com',
        'date': '04/05/2017 12:15:41'
    },
    {
        'email': 'amit@gmail.com',
        'action': 'New Email server added',
        'actionsub': 'new server email id: 23sdf@gmail.com',
        'date': '02/05/2017 12:16:21'
    }
];
var Emaillist = [{
        '_id': '4394dssdfj',
        'email_id': 'amit@gmail.com'
    },
    {
        '_id': '43sdsssdfj',
        'email_id': 'surender@gmail.com'
    },
    {
        '_id': '4394dsdffj',
        'email_id': 'anurag@gmail.com'
    },
    {
        '_id': '4394sdfdfj',
        'email_id': 'shekhar@gmail.com'
    }
];
var SystemVar = [{
        '_id': '4394dssdfj',
        'variableCode': '#date'
    },
    {
        '_id': '43sdsssdfj',
        'variableCode': '#candidate_name'
    },
    {
        '_id': '4394dsdffj',
        'variableCode': '#candidate_email_id'
    },
    {
        '_id': '4394sdfdfj',
        'variableCode': '#page_break'
    },
    {
        '_id': '4394sdfdfj',
        'variableCode': '#logo'
    }
];
//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ "../../../../../src/app/service/safe-html-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safeHtml'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _a || Object])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
    var _a;
}());

//# sourceMappingURL=safe-html-pipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/service/safe-url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeUrlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrlPipe = (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeUrl' }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* DomSanitizer */]) === "function" && _a || Object])
    ], SafeUrlPipe);
    return SafeUrlPipe;
    var _a;
}());

//# sourceMappingURL=safe-url.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    'apibase': 'https://hr-recruit-dev.herokuapp.com/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./af.js": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./ar": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./az": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./az.js": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./be": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./be.js": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./bg": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bn": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bo": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./br": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./br.js": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./bs": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./ca": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./cs": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cv": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cy": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./da": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./da.js": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./de": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./de-at": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./dv": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./el": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./el.js": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./en-au": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./es": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./es-do": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es.js": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./et": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./et.js": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./eu": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./fa": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fi": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fo": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fr": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fy": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./gd": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gl": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./he": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./he.js": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./hi": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hr": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hu": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./id.js": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./is": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./is.js": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./it": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./it.js": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./ja": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./jv": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./ka": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./kk": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./km": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./km.js": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./kn": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./ko": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ky": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./lb": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lo": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lt": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lv": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./me": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./me.js": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./mi": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mk": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./ml": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./mr": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./ms": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./my": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./my.js": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./nb": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./ne": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./nl": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nn": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pt": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./ro": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ru": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./sd": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./se": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./se.js": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./si": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./si.js": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./sk": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sl": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sq": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sr": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./ss": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./sv": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sw": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./ta": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./te": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./te.js": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./tet": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./th": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./th.js": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./ur": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./uz": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./vi": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../chart.js/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../chart.js/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map