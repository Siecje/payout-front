System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _createClass, _classCallCheck, API;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      API = _export("API", (function () {
        function API(http) {
          _classCallCheck(this, API);

          this.http = http;
          this.http.configure(function (x) {
            x.withBaseUri("http://localhost:8000/api/");
            x.withHeader("Authorization", "Basic " + btoa("cody:cody"));
            //x.withHeader('Content-Type', 'application/json');
            // x.withResponseType('application/json');
          });
        }

        _createClass(API, {
          getAllProjects: {
            value: function getAllProjects() {
              // TODO: default should be JSON
              return this.http.get("projects?format=json");
            }
          },
          getProject: {
            value: function getProject(id) {
              return this.http.get("projects/" + id + "?format=json");
            }
          },
          saveProject: {
            value: function saveProject(project) {
              if (project.id) {
                return this.http.put("projects/" + project.id, project);
              } else {
                return this.http.post("projects", project);
              }
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [HttpClient];
            }
          }
        });

        return API;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxpQ0FFTCxHQUFHOzs7O0FBRlIsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7Ozs7O0FBRUwsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixJQUFJLEVBQUM7Z0NBRk4sR0FBRzs7QUFHWixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUN2QixhQUFDLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDNUMsYUFBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7V0FHN0QsQ0FBQyxDQUFDO1NBQ0o7O3FCQVZVLEdBQUc7QUFZZCx3QkFBYzttQkFBQSwwQkFBRTs7QUFFZCxxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQzlDOztBQUVELG9CQUFVO21CQUFBLG9CQUFDLEVBQUUsRUFBQztBQUNaLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxlQUFhLEVBQUUsa0JBQWUsQ0FBQzthQUNwRDs7QUFFRCxxQkFBVzttQkFBQSxxQkFBQyxPQUFPLEVBQUM7QUFDbEIsa0JBQUcsT0FBTyxDQUFDLEVBQUUsRUFBQztBQUNaLHVCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2VBQ3pELE1BQ0c7QUFDRix1QkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7ZUFDNUM7YUFDRjs7O0FBM0JNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7O2VBRDdCLEdBQUciLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=