System.register(["./api"], function (_export) {
  var API, _createClass, _classCallCheck, CreateProject;

  return {
    setters: [function (_api) {
      API = _api.API;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      CreateProject = _export("CreateProject", (function () {
        function CreateProject(API) {
          _classCallCheck(this, CreateProject);

          this.API = API;
          this.project = {};
        }

        _createClass(CreateProject, {
          createProject: {
            value: function createProject() {
              this.API.saveProject(this.project);
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [API];
            }
          }
        });

        return CreateProject;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsR0FBRyxpQ0FFRSxhQUFhOzs7O0FBRmxCLFNBQUcsUUFBSCxHQUFHOzs7Ozs7Ozs7QUFFRSxtQkFBYTtBQUdiLGlCQUhBLGFBQWEsQ0FHWixHQUFHLEVBQUM7Z0NBSEwsYUFBYTs7QUFJdEIsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixjQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNuQjs7cUJBTlUsYUFBYTtBQVF4Qix1QkFBYTttQkFBQSx5QkFBRTtBQUNiLGtCQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEM7OztBQVRNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUFFOzs7O2VBRHRCLGFBQWEiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=