// here we will learn about unions

type name = string | number | object            // this way we create the union type two or more data types

function learnUnion(x: name): name {    // this will work perfectly
  return x;
}

console.log(learnUnion("Hello"))
console.log(learnUnion(3))
console.log(learnUnion({user: "HELLo"}))