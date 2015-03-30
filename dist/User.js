System.register([], function (_export) {
  var _createClass, _classCallCheck, User;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      User = _export("User", (function () {
        function User() {
          _classCallCheck(this, User);

          this.data = {};
        }

        _createClass(User, {
          getUser: {
            value: function getUser() {
              return this.data;
            }
          },
          setUser: {
            value: function setUser(user) {
              this.data = user;
            }
          },
          setToken: {
            value: function setToken(token) {
              this.data.token = token;
            }
          }
        });

        return User;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBYSxJQUFJOzs7Ozs7Ozs7OztBQUFKLFVBQUk7QUFFSixpQkFGQSxJQUFJLEdBRUY7Z0NBRkYsSUFBSTs7QUFHYixjQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNoQjs7cUJBSlUsSUFBSTtBQU1mLGlCQUFPO21CQUFBLG1CQUFFO0FBQ1AscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQjs7QUFFRCxpQkFBTzttQkFBQSxpQkFBQyxJQUFJLEVBQUM7QUFDWCxrQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDbEI7O0FBRUQsa0JBQVE7bUJBQUEsa0JBQUMsS0FBSyxFQUFDO0FBQ2Isa0JBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUN6Qjs7OztlQWhCVSxJQUFJIiwiZmlsZSI6IlVzZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==