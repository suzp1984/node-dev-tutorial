function Person(name, family) {
    this.name = name;
    this.family = family;
    
    var records = [{type: "in", amount: 0}];

    this.addTransaction = function(trans) {
        if (trans.hasOwnProperty("type") && trans.hasOwnProperty("amount")) {
            records.push(trans);
        }
    };

    this.balance = function() {
        var totoal = 0;

        records.forEach(function(record) {
            if (record.type == "in") {
                totoal += record.amount;
            } else {

                totoal -= record.amount;
            }
        });

        return totoal;
    };

    
};

Person.prototype.getFull = function() {
    return this.name + " " + this.family;
};

Person.prototype.getProfile = function() {
    return this.getFull() + ", totoal balance: " + this.balance();
};


module.exports = Person;
