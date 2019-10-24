import { isObject } from "util";

class Functor {
    constructor(val) { 
        this.val = val; 
    }
  
    map(f) {
        return new Functor(f(this.val));
    }

    of(val) {
        return new Functor(val);
    }
}

// 解决空值问题
class Maybe extends Functor {
    map(f) {
        return this.val ? Maybe.of() : Maybe.of();
    }
}

// 解决条件分支问题
class Either extends Functor {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
  
    map(f) {
      return this.right ? 
        Either.of(this.left, f(this.right)) :
        Either.of(f(this.left), this.right);
    }
    of(left, right) {
        return new Either(left, right);
    };
}

// 解决不同函子之间的链式调用问题
class Ap extends Functor {
    ap(F) {
      return Ap.of(this.val(F.val));
    }
}

// 解决多层嵌套问题
class Monad extends Functor {
    _join() {
        return this.val;
    }
    flatMap(f) {
        return this.map(f)._join();
    }
}

// IO 操作
class IO extends Functor {
    _join() {
        return this.val;
    }
    chain(f) {
        return this.map(f)._join();
    }
}

// 
function Factory(func,) {
    return new IO(func)
}