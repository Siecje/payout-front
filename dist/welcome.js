System.register(["./api"], function (_export) {
  var API, _createClass, _classCallCheck, Welcome, UpperValueConverter;

  return {
    setters: [function (_api) {
      API = _api.API;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Welcome = _export("Welcome", (function () {
        function Welcome(API) {
          _classCallCheck(this, Welcome);

          this.heading = "Welcome to the Aurelia Navigation App!";
          this.firstName = "John";
          this.lastName = "Doe";
          this.API = API;
          this.projects = [];
        }

        _createClass(Welcome, {
          activate: {
            value: function activate() {
              var _this = this;

              return this.API.getAllProjects().then(function (response) {
                _this.projects = response.content;
              });
            }
          },
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            }
          },
          welcome: {
            value: function welcome() {
              alert("Welcome, " + this.fullName + "!");
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [API];
            }
          }
        });

        return Welcome;
      })());
      UpperValueConverter = _export("UpperValueConverter", (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, {
          toView: {
            value: function toView(value) {
              return value && value.toUpperCase();
            }
          }
        });

        return UpperValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLEdBQUcsaUNBRUUsT0FBTyxFQTBCUCxtQkFBbUI7Ozs7QUE1QnhCLFNBQUcsUUFBSCxHQUFHOzs7Ozs7Ozs7QUFFRSxhQUFPO0FBRVAsaUJBRkEsT0FBTyxDQUVOLEdBQUcsRUFBQztnQ0FGTCxPQUFPOztBQUdoQixjQUFJLENBQUMsT0FBTyxHQUFHLHdDQUF3QyxDQUFDO0FBQ3hELGNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2YsY0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDcEI7O3FCQVJVLE9BQU87QUFVbEIsa0JBQVE7bUJBQUEsb0JBQUU7OztBQUNSLHFCQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hELHNCQUFLLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO2VBQ2xDLENBQUMsQ0FBQzthQUNKOztBQUVHLGtCQUFRO2lCQUFBLFlBQUU7QUFDWiwwQkFBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUc7YUFDN0M7O0FBRUQsaUJBQU87bUJBQUEsbUJBQUU7QUFDUCxtQkFBSyxlQUFhLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQzthQUNyQzs7O0FBckJNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUFFOzs7O2VBRHRCLE9BQU87O0FBMEJQLHlCQUFtQjtpQkFBbkIsbUJBQW1CO2dDQUFuQixtQkFBbUI7OztxQkFBbkIsbUJBQW1CO0FBQzlCLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBQztBQUNYLHFCQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDckM7Ozs7ZUFIVSxtQkFBbUIiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9