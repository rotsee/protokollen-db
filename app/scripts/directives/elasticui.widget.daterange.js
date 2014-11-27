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
                            elasticui.util.AngularTool.setupBinding($parse, scope, attrs, ["field", "size"]);
                            scope.agg_name = scope.field.replace(/[^a-z_0-9]/gmi, '_') + '_' + (directives.default_agg_count++);
                        }
                    };

                    directive.template = '\
                    <div ng-init="from=\'2005-02-06T00:00:00\';to=\'2014-04-06T00:00:00\';">\
                        <ul class="nav nav-list" eui-filter="ejs.RangeFilter(field).field(field).from(from).to(to)" eui-enabled="true"/>\
                            <li>Från: <input type="text" ng-model="from"/></li>\
                            <li>Till: <input type="text" ng-model="to"/></li>\
                        </ul>\
                    </div>'; 

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