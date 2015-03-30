System.register(["./api"], function (_export) {
  var API, _createClass, _classCallCheck, Login;

  return {
    setters: [function (_api) {
      API = _api.API;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Login = _export("Login", (function () {
        function Login(API) {
          _classCallCheck(this, Login);

          this.api = API;
          this.username = "";
          this.password = "";
        }

        _createClass(Login, {
          login: {

            // activate(){
            //   // redirect if already logged in
            // }

            value: function login() {
              this.api.getAuthToken(this.username, this.password);
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [API];
            }
          }
        });

        return Login;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxHQUFHLGlDQUVFLEtBQUs7Ozs7QUFGVixTQUFHLFFBQUgsR0FBRzs7Ozs7Ozs7O0FBRUUsV0FBSztBQUVMLGlCQUZBLEtBQUssQ0FFSixHQUFHLEVBQUM7Z0NBRkwsS0FBSzs7QUFHZCxjQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNmLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ3BCOztxQkFOVSxLQUFLO0FBWWhCLGVBQUs7Ozs7OzttQkFBQSxpQkFBRTtBQUNMLGtCQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyRDs7O0FBYk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEdEIsS0FBSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9