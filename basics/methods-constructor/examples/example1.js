var Persn = require("../index.js");

var joh = new Persn("joh", "Fitness");

joh.addTransaction({type: "in", amount: 100});
joh.addTransaction({type: "in", amount: 300});
joh.addTransaction({type: "out", amount: 50});

console.log(joh.getProfile());


