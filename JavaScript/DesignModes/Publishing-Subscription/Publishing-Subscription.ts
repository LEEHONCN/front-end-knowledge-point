// 在 JavaScript 中函数是一等公民, 因此可以写成全局对象的形式，并且发布者与订阅者无耦合。但是这里仍使用类似 Java 的写法。
class Subscriber {
    private _name: string;
    constructor(name: string){
        this._name = name;
    }
    getMessage():void {
        console.log(`我是${this._name}, 我收到了消息`);
    }
}

class Pulisher {
    private _stack: Subscriber[];
    constructor(){
        this._stack = [];
    }

    pulish():void{
        for (const item of this._stack) {
            item.getMessage();
        }
    }

    subscription(subscriber: Subscriber):void{
        this._stack.push(subscriber);
    }
}

const pulisher = new Pulisher();
const li = new Subscriber("li");
const su = new Subscriber("su");

pulisher.subscription(li);
pulisher.subscription(su);

pulisher.pulish();
