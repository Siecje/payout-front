System.register(["../api"], function (_export) {
  var API, _createClass, _classCallCheck, Project;

  return {
    setters: [function (_api) {
      API = _api.API;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Project = _export("Project", (function () {
        function Project(API) {
          _classCallCheck(this, Project);

          this.API = API;
          this.project = {};
        }

        _createClass(Project, {
          activate: {
            value: function activate(params) {
              var _this = this;

              return this.API.getProject(params.id).then(function (response) {
                _this.project = response.content;
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [API];
            }
          }
        });

        return Project;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RldGFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsR0FBRyxpQ0FFRSxPQUFPOzs7O0FBRlosU0FBRyxRQUFILEdBQUc7Ozs7Ozs7OztBQUVFLGFBQU87QUFFUCxpQkFGQSxPQUFPLENBRU4sR0FBRyxFQUFDO2dDQUZMLE9BQU87O0FBR2hCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2YsY0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDbkI7O3FCQUxVLE9BQU87QUFPbEIsa0JBQVE7bUJBQUEsa0JBQUMsTUFBTSxFQUFDOzs7QUFDZCxxQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ3JELHNCQUFLLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO2VBQ2pDLENBQUMsQ0FBQzthQUNKOzs7QUFWTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFBRTs7OztlQUR0QixPQUFPIiwiZmlsZSI6InByb2plY3RzL2RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9