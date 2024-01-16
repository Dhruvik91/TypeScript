// here we'll learn about class declaration 
var User = /** @class */ (function () {
    function User() {
        this.name = "RAVI";
    }
    User.prototype.getname = function () {
        return this.name;
    };
    return User;
}());
var user1 = new User();
console.log(user1.getname());
