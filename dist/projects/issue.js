System.register(["../api"], function (_export) {
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
          this.comment = {};
          this.issue = {};
          this.projectId = "";
        }

        _createClass(CreateProject, {
          activate: {
            value: function activate(params) {
              var _this = this;

              this.projectId = params.projectId;
              this.API.getIssue(params.issueId).then(function (response) {
                _this.issue = response.content;
                _this.comment.issue = _this.issue.id;
              });
            }
          },
          createComment: {
            value: function createComment() {
              var _this = this;

              this.API.saveComment(this.comment).then(function (response) {
                _this.issue.comments.push(JSON.parse(response.response));
                _this.comment = { issue: _this.issue.id, text: "" };
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

        return CreateProject;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lzc3VlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxHQUFHLGlDQUVFLGFBQWE7Ozs7QUFGbEIsU0FBRyxRQUFILEdBQUc7Ozs7Ozs7OztBQUVFLG1CQUFhO0FBR2IsaUJBSEEsYUFBYSxDQUdaLEdBQUcsRUFBQztnQ0FITCxhQUFhOztBQUl0QixjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLGNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ3JCOztxQkFSVSxhQUFhO0FBVXhCLGtCQUFRO21CQUFBLGtCQUFDLE1BQU0sRUFBQzs7O0FBQ2Qsa0JBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNsQyxrQkFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNqRCxzQkFBSyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUM5QixzQkFBSyxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztlQUNwQyxDQUFDLENBQUM7YUFDSjs7QUFFRCx1QkFBYTttQkFBQSx5QkFBRTs7O0FBQ2Isa0JBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDbEQsc0JBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUN4RCxzQkFBSyxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsTUFBSyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztlQUNqRCxDQUFDLENBQUM7YUFDSjs7O0FBdEJNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUFFOzs7O2VBRHRCLGFBQWEiLCJmaWxlIjoicHJvamVjdHMvaXNzdWUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==