// 在 JavaScript 中函数是一等公民, 因此可以写成全局对象的形式，并且发布者与订阅者无耦合。但是这里仍使用类似 Java 的写法。
var Subscriber = /** @class */ (function () {
    function Subscriber(name) {
        this._name = name;
    }
    Subscriber.prototype.getMessage = function () {
        console.log("\u6211\u662F" + this._name + ", \u6211\u6536\u5230\u4E86\u6D88\u606F");
    };
    return Subscriber;
}());
var Pulisher = /** @class */ (function () {
    function Pulisher() {
        this._stack = [];
    }
    Pulisher.prototype.pulish = function () {
        for (var _i = 0, _a = this._stack; _i < _a.length; _i++) {
            var item = _a[_i];
            item.getMessage();
        }
    };
    Pulisher.prototype.subscription = function (subscriber) {
        this._stack.push(subscriber);
    };
    return Pulisher;
}());
var pulisher = new Pulisher();
var li = new Subscriber("li");
var su = new Subscriber("su");
pulisher.subscription(li);
pulisher.subscription(su);
pulisher.pulish();
