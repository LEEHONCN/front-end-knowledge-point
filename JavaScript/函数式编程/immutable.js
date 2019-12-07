const _ = require("immutable");

const obj = [ 
  {
    id: 1,
    count: 1
  },
  {
    id: 2,
    count: 2
  } 
];

let map1 = _.fromJS(obj);
let map2 = map1.set(map1.findIndex((item) => item.id === 2), _.fromJS({ id: 2, count: 3}))
let map3 = map1.push(_.fromJS({ id: 3, count: 3}))
console.log(map1)
console.log(map2)
console.log(map3)

let map4 = _.fromJS([]);
map4.push(_.fromJS(obj));
console.log(map4);

// List [ Map { "id": 1, "count": 1 }, Map { "id": 2, "count": 2 } ]
// List [ Map { "id": 1, "count": 1 }, Map { "id": 2, "count": 3 } ]
// List [ Map { "id": 1, "count": 1 }, Map { "id": 2, "count": 2 }, Map { "id": 3, "count": 3 } ]