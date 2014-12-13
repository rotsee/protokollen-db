// Custom widget for Elastic UI that adds a date range filter
var elasticui;
(function (elasticui) {
    (function (widgets) {
        (function (directives) {
            var DaterangeDirective = (function () {
                function DaterangeDirective($parse) {
                    var directive = {};
                    directive.restrict = 'E';
                    directive.scope = true;

                    directive.link = {
                        'pre': function (scope, element, attrs) {
                            elasticui.util.AngularTool.setupBinding($parse, scope, attrs, ["field", "size", "from", "to"]);
                            scope.agg_name = scope.field.replace(/[^a-z_0-9]/gmi, '_') + '_' + (directives.default_agg_count++);
                        }
                    };
                    
                    directive.template = '\
                        <ul class="nav nav-list" eui-filter="ejs.RangeFilter(field).field(field).from(model.from).to(model.to)" eui-enabled="true"/>\
                            <li>Från: \
                                <div class="input-group" ng-controller="DatepickerCtrl" model="from" date="2011-01-01">\
                                    <input type="text" class="form-control"\
                                        datepicker-popup="{{format}}"\
                                        ng-model="model.from"\
                                        is-open="opened"\
                                        max-date="maxDate"\
                                        datepicker-options="dateOptions"\
                                        date-disabled="disabled(date, mode)"\
                                        ng-required="true"\
                                        close-text="Close"\
                                        ng-click="open($event)"\
                                        />\
                                    <span class="input-group-btn">\
                                        <button type="button" class="btn btn-default" ng-click="open($event)">\
                                            <i class="glyphicon glyphicon-calendar"></i>\
                                        </button>\
                                    </span>\
                                </div>\
                            </li>\
                            <li>Till: \
                                <div class="input-group" ng-controller="DatepickerCtrl" model="to" date="2014-12-12">\
                                    <input type="text" class="form-control"\
                                        datepicker-popup="{{format}}"\
                                        ng-model="model.to"\
                                        is-open="opened"\
                                        max-date="maxDate"\
                                        datepicker-options="dateOptions"\
                                        date-disabled="disabled(date, mode)"\
                                        ng-required="true"\
                                        close-text="Close"\
                                        ng-click="open($event)"\
                                        />\
                                    <span class="input-group-btn">\
                                        <button type="button" class="btn btn-default" ng-click="open($event)">\
                                            <i class="glyphicon glyphicon-calendar"></i>\
                                        </button>\
                                    </span>\
                                </div></li>\
                        </ul>';

                    return directive;
                }
                DaterangeDirective.$inject = ['$parse'];
                return DaterangeDirective;
            })();
            directives.DaterangeDirective = DaterangeDirective;
            directives.directives.directive('euiDaterange', DaterangeDirective);
        })(widgets.directives || (widgets.directives = {}));
        var directives = widgets.directives;
    })(elasticui.widgets || (elasticui.widgets = {}));
    var widgets = elasticui.widgets;
})(elasticui || (elasticui = {}));