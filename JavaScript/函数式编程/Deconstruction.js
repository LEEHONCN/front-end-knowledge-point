let obj1 = {
  id: { 
    a: 1
  }
};

let obj2 = { ...obj1 };
console.log(obj2);
obj1.id.a = 2;
console.log(obj2);