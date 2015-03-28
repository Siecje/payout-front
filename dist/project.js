System.register(["./api"], function (_export) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLEdBQUcsaUNBRUUsT0FBTzs7OztBQUZaLFNBQUcsUUFBSCxHQUFHOzs7Ozs7Ozs7QUFFRSxhQUFPO0FBRVAsaUJBRkEsT0FBTyxDQUVOLEdBQUcsRUFBQztnQ0FGTCxPQUFPOztBQUdoQixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLGNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ25COztxQkFMVSxPQUFPO0FBT2xCLGtCQUFRO21CQUFBLGtCQUFDLE1BQU0sRUFBQzs7O0FBQ2QscUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNyRCxzQkFBSyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztlQUNqQyxDQUFDLENBQUM7YUFDSjs7O0FBVk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEdEIsT0FBTyIsImZpbGUiOiJwcm9qZWN0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=