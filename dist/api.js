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
            x.withHeader("Content-Type", "application/json");
            x.withHeader("Accept", "application/json");
          });
        }

        _createClass(API, {
          getAllProjects: {
            value: function getAllProjects() {
              return this.http.get("projects");
            }
          },
          getProject: {
            value: function getProject(id) {
              return this.http.get("projects/" + id);
            }
          },
          saveProject: {
            value: function saveProject(project) {
              if (project.id) {
                return this.http.put("projects/" + project.id, project);
              } else {
                // TODO: use current user or use authenticated user of request
                project.creator = 1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxpQ0FFTCxHQUFHOzs7O0FBRlIsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7Ozs7O0FBRUwsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixJQUFJLEVBQUM7Z0NBRk4sR0FBRzs7QUFHWixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUN2QixhQUFDLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDNUMsYUFBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzVELGFBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDakQsYUFBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztXQUM1QyxDQUFDLENBQUM7U0FDSjs7cUJBVlUsR0FBRztBQVlkLHdCQUFjO21CQUFBLDBCQUFFO0FBQ2QscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbEM7O0FBRUQsb0JBQVU7bUJBQUEsb0JBQUMsRUFBRSxFQUFDO0FBQ1oscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWEsRUFBRSxDQUFHLENBQUM7YUFDeEM7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsT0FBTyxFQUFDO0FBQ2xCLGtCQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUM7QUFDWix1QkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztlQUN6RCxNQUNHOztBQUVGLHVCQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNwQix1QkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7ZUFDNUM7YUFDRjs7O0FBNUJNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7O2VBRDdCLEdBQUciLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=