System.register(["aurelia-router", "bootstrap"], function (_export) {
  var Router, bootstrap, _createClass, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.map([{ route: "", moduleId: "./welcome", nav: true, title: "Welcome" }, { route: ":id", moduleId: "./projects/detail", nav: true }, { route: "new", moduleId: "./projects/create", nav: true, title: "Create Project" }, { route: ":projectId/:issueId", moduleId: "./projects/issue", nav: true }, { route: "login", moduleId: "./login", nav: true, title: "Login" }]);
          });
        }

        _createClass(App, null, {
          inject: {
            value: function inject() {
              return [Router];
            }
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMsaUNBRUgsR0FBRzs7OztBQUhSLFlBQU0sa0JBQU4sTUFBTTs7QUFDUCxlQUFTOzs7Ozs7Ozs7QUFFSCxTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLE1BQU0sRUFBRTtnQ0FGVCxHQUFHOztBQUdaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUN6QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBTSxRQUFRLEVBQUUsV0FBVyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxFQUN6RSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUcsUUFBUSxFQUFFLG1CQUFtQixFQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUMsRUFDaEUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFHLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxnQkFBZ0IsRUFBRSxFQUNuRixFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRyxFQUMzRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsQ0FDbkUsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDO1NBQ0o7O3FCQWRVLEdBQUc7QUFDUCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7OztlQUR6QixHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9