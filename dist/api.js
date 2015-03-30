System.register(["aurelia-http-client", "./User"], function (_export) {
  var HttpClient, User, _createClass, _classCallCheck, API;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_User) {
      User = _User.User;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      API = _export("API", (function () {
        function API(http, User) {
          _classCallCheck(this, API);

          this.http = http;
          this.http.configure(function (x) {
            x.withBaseUri("http://localhost:8000/api/");
            var token = localStorage.getItem("token");
            if (token) {
              x.withHeader("Authorization", "Token " + token);
            }
            x.withHeader("Content-Type", "application/json");
            x.withHeader("Accept", "application/json");
          });
          this.User = User;
        }

        _createClass(API, {
          getAuthToken: {
            value: function getAuthToken(username, password) {
              var _this = this;

              this.http.post("auth/token", { username: username, password: password }).then(function (response) {
                var token = JSON.parse(response.response).token;
                _this.http.configure(function (x) {
                  x.withHeader("Authorization", "Token " + token);
                });
                localStorage.setItem("token", token);
              });
            }
          },
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
          },
          getIssue: {
            value: function getIssue(id) {
              return this.http.get("issues/" + id);
            }
          },
          saveComment: {
            value: function saveComment(comment) {
              if (comment.id) {
                return this.http.put("comments/" + comment.id, comment);
              } else {
                // TODO: use current user or use authenticated user of request
                comment.user = 1;
                return this.http.post("comments", comment);
              }
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [HttpClient, User];
            }
          }
        });

        return API;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxFQUNWLElBQUksaUNBRUMsR0FBRzs7OztBQUhSLGdCQUFVLHNCQUFWLFVBQVU7O0FBQ1YsVUFBSSxTQUFKLElBQUk7Ozs7Ozs7OztBQUVDLFNBQUc7QUFHSCxpQkFIQSxHQUFHLENBR0YsSUFBSSxFQUFFLElBQUksRUFBQztnQ0FIWixHQUFHOztBQUlaLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ3ZCLGFBQUMsQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUM1QyxnQkFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxQyxnQkFBRyxLQUFLLEVBQUM7QUFDUCxlQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDakQ7QUFDRCxhQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pELGFBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7V0FDNUMsQ0FBQyxDQUFDO0FBQ0gsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3FCQWZVLEdBQUc7QUFpQmQsc0JBQVk7bUJBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQzs7O0FBQzlCLGtCQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUNuRSxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsb0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNoRCxzQkFBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ3ZCLG1CQUFDLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7aUJBQ2pELENBQUMsQ0FBQztBQUNILDRCQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztlQUN0QyxDQUFDLENBQUM7YUFDTjs7QUFFRCx3QkFBYzttQkFBQSwwQkFBRTtBQUNkLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2xDOztBQUVELG9CQUFVO21CQUFBLG9CQUFDLEVBQUUsRUFBQztBQUNaLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxlQUFhLEVBQUUsQ0FBRyxDQUFDO2FBQ3hDOztBQUVELHFCQUFXO21CQUFBLHFCQUFDLE9BQU8sRUFBQztBQUNsQixrQkFBRyxPQUFPLENBQUMsRUFBRSxFQUFDO0FBQ1osdUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7ZUFDekQsTUFDRzs7QUFFRix1QkFBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDcEIsdUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2VBQzVDO2FBQ0Y7O0FBRUQsa0JBQVE7bUJBQUEsa0JBQUMsRUFBRSxFQUFDO0FBQ1YscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQVcsRUFBRSxDQUFHLENBQUM7YUFDdEM7O0FBRUQscUJBQVc7bUJBQUEscUJBQUMsT0FBTyxFQUFDO0FBQ2xCLGtCQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUM7QUFDWix1QkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztlQUN6RCxNQUNHOztBQUVGLHVCQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNqQix1QkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7ZUFDNUM7YUFDRjs7O0FBM0RNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFBRTs7OztlQURuQyxHQUFHIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9