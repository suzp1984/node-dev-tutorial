
var Person = require("../methods.js");

var joh = new Person("joh", "Fitness");


for (prop in joh) {
    console.log("----- " + prop); 
}

for (prop in Person) {
    console.log("++++ " + prop);
}

joh.addTransaction({type: "in", amount: 100});
joh.addTransaction({type: "in", amount: 300});
joh.addTransaction({type: "out", amount: 50});

console.log(joh.getProfile());


var bob = new Person("Bob", "Megic");
console.log(bob.getProfile());
