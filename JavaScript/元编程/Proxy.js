var obj = { a: 1 };
var handler = {
  get(target, p, receiver) {
    console.log(arguments.callee.name);
    return Reflect.get(...arguments);
  },
  set(target, p, value, receiver) {
    console.log(arguments.callee);
    console.log(arguments.callee.name);
    return Reflect.set(...arguments);
  },
  has() {
    console.log(arguments.callee.name);
    return Reflect.has(...arguments);
  },
  getPrototypeOf() {
    console.log(arguments.callee.name);
    return Reflect.getPrototypeOf(...arguments);
  },
  setPrototypeOf() {
    console.log(arguments.callee.name);
    return Reflect.setPrototypeOf(...arguments);
  },
  isExtensible() {
    console.log(arguments.callee.name);
    return Reflect.isExtensible(...arguments);
  },
  preventExtensions() {
    console.log(arguments.callee.name);
    return Reflect.preventExtensions(...arguments);
  },
  deleteProperty() {
    console.log(arguments.callee.name);
    return Reflect.deleteProperty(...arguments);
  },
  defineProperty() {
    console.log(arguments.callee.name);
    return Reflect.defineProperty(...arguments);
  },
  apply() {
    console.log(arguments.callee.name);
    return Reflect.apply(...arguments);
  },
  construct() {
    console.log(arguments.callee.name);
    return Reflect.construct(...arguments);
  },
  ownKeys() {
    console.log(arguments.callee.name);
    return Reflect.ownKeys(...arguments);
  },
  getOwnPropertyDescriptor(target, prop) {
    console.log(arguments.callee.name);
    console.log(arguments);
    return Reflect.getOwnPropertyDescriptor(target, prop);
  }
};

var pobj = new Proxy(obj, handler);
// console.log(Object.getOwnPropertyDescriptor(pobj, 'a'));
// console.log(Reflect.getOwnPropertyDescriptor(pobj, 'a'));
// console.log(Reflect.getOwnPropertyDescriptor(pobj));
// pobj.a = 2;
// pobj.b = 3;

// console.log(Reflect.isExtensible(pobj));

// Reflect.getPrototypeOf(pobj);
// Reflect.ownKeys(pobj);