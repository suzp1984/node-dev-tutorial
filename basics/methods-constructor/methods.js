

function Person(name, family) {
    this.name = name;
    this.family = family;
    this.records = [{type: "in", amount: 0}];
};

Person.prototype.getFull = function() {
    return this.name + " " + this.family;
};

Person.prototype.getProfile = function() {
    return this.getFull() + ", totoal balance: " + this.balance();
};

Person.prototype.addTransaction = function(trans) {
    if (trans.hasOwnProperty("type") && trans.hasOwnProperty("amount")) {
        this.records.push(trans);
    }
};

Person.prototype.balance = function() {
    var totoal = 0;

    this.records.forEach(function(record) {
        if (record.type == "in") {
            totoal += record.amount;
        } else {
            
            totoal -= record.amount;
        }
    });

    return totoal;
};


module.exports = Person;
