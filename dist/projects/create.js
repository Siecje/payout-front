System.register(["../api", "aurelia-router"], function (_export) {
  var API, Router, _createClass, _classCallCheck, CreateProject;

  return {
    setters: [function (_api) {
      API = _api.API;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      CreateProject = _export("CreateProject", (function () {
        function CreateProject(API, router) {
          _classCallCheck(this, CreateProject);

          this.API = API;
          this.router = router;
          this.project = {};
        }

        _createClass(CreateProject, {
          createProject: {
            value: function createProject() {
              // TODO: why does it send two requests the first one 400
              this.API.saveProject(this.project).then(function () {
                console.log("here");
                this.router.navigate("/");
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [API, Router];
            }
          }
        });

        return CreateProject;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsR0FBRyxFQUNILE1BQU0saUNBRUQsYUFBYTs7OztBQUhsQixTQUFHLFFBQUgsR0FBRzs7QUFDSCxZQUFNLGtCQUFOLE1BQU07Ozs7Ozs7OztBQUVELG1CQUFhO0FBR2IsaUJBSEEsYUFBYSxDQUdaLEdBQUcsRUFBRSxNQUFNLEVBQUM7Z0NBSGIsYUFBYTs7QUFJdEIsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNuQjs7cUJBUFUsYUFBYTtBQVN4Qix1QkFBYTttQkFBQSx5QkFBRTs7QUFFYixrQkFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFVO0FBQ2hELHVCQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLG9CQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUMzQixDQUFDLENBQUM7YUFDSjs7O0FBZE0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUFFOzs7O2VBRDlCLGFBQWEiLCJmaWxlIjoicHJvamVjdHMvY3JlYXRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=