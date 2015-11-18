//Write a function called identity that takes an argument and returns that argument

function identity(x) {
    return x;
}

// Write two binary functions, add and mul, that take two numbers and return their sum and product

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

// Write a function, indentityf,  that takes an argument and returns a functions that returns that argument

function identityf(x) {
    return function () {
        return x;
    };
}

// Write a function, addf,  that adds from two invocations
// addf(3)(4)   // 7

function addf(x) {
    return function (y) {
        return x + y;
    };
}

// Write a function that takes a binary function and makes it callable with two invocations.
//    addf = applyf(add);
//    addf(3)(4)        // 7
//    applyf(mul)(5)(6) // 30

function applyf(binary) {
    return function (x) {
        return function (y) {
            return binary(x, y);
        };
    };
}
// PROOF
//console.log(applyf(add)(4)(3));

// Write a function that takes a function and an argument, and returns a function that can supply a second argument.
//  add3 = curry(add, 3);
//  add3(4)             // 7
//  curry(mul, 5)(6)    // 30

function curry(binary, x) {
    return function (y) {
        return binary(x, y);
    }
}
// PROOF
//console.log(curry(add, 3)(4));


// Without writing any new functions, show three ways to create the inc function
//    inc(5)        // 6
//    inc(inc(5))   // 7

inc = addf(1);
inc = curry(add, 1);
inc = applyf(add)(1);
// PROOF
//console.log(inc(5));
//console.log(inc(inc(5)));


// Write methodize, a function that converts a binary function to a method
//    Number.prototype.add = methodize(add);
//    (3).add(4)    // 7

function methodize(func) {
    return function(y) {
        return func(this, y);
    }
}
// PROOF
//Number.prototype.add = methodize(add);
//console.log((3).add(4));


// Write demethodize, a function that converts a method to a binary function
//  demothodize(Number.prototype.add) (5, 6)    // 11

function demethodize(func) {
    return function (that, y) {
        return func.call(that, y);
    };
}
// PROOF
//console.log(demethodize(Number.prototype.add) (5, 6));


// Write a function called twice that takes a binary function and returns a unary function that passes its argument to the binary function twice
//    var double = twice(add);
//    double(11)    // 22
//    var square = twice(mul);
//    square(11)    // 121 (11 squared)

function twice(binary) {
    return function (x) {
        return binary(x, x)
    };
}
// PROOF
//var double = twice(add);
//console.log(double(11));

//var square = twice(mul);
//console.log(square(11));


// Write a function composeu that takes two unary functions and returns a unary function that calls them both.
//    composeu(double, square)(3)   // 36

function composeu(a1, a2) {
    return function (x) {
        return (a2(a1(x)));
    };
}
// PROOF
//console.log(composeu(double, square)(3));


// Write a function composeb that takes two binary functions and returns a function that calls them both
//  composeb(add, mul) (2, 3, 5)    // 25

function composeb(a1, a2) {
    return function (x, y, z) {
        console.log(a1(2, 3, 5));
        console.log(a2(2, 3, 5));
        return a2(a1(x, y), z)
    }
}
// PROOF
//console.log(composeb(add, mul) (2, 3, 5));


// Write a function that allows another function to only be called once
//  add_once = once(add);
//  add_once(3, 4)  //7
//  add_once(3, 4)  // throw!

function once(func) {
    return function () {
        var f = func;
        //func = null;
        return f.apply(this, arguments)
    };
}
// PROOF
//add_once = once(add);
//console.log(add_once(3, 4)); //7
//console.log(add_once(3, 4)); // throw!


// Write a factory function that returns two functions that implement an up/down counter
//  counter = counterf(10);
//  counter.inc()   // 11
//  counter.dec()   // 10

function counterf(x) {
    return {
        inc: function () {
            return x += 1;
        },
        dec: function () {
            return x -= 1;
        }
    }
}
// PROOF
//counter = counterf(10);
//console.log(counter.inc());
//console.log(counter.dec());


// Make a revocable function that takes a nice function, and returns a revoke function that denies access to the nice function, and an invoke function that can invoke the nice function until it is revoked.
//  temp = revocable(alert);
//  temp.invoke(7);     // alert: 7
//  temp.revoke();
//  temp.invoke(8);     // throw!

function niceFunc(x) {
    console.log(x);
}

function revocable(func) {
    var privateVar = true;
    return {
        revoke: function () {
            func = null;
        },
        invoke: function (x) {
            if (privateVar) {
                return func(x)
            }
        }
    }
}

// A better way to do this is by using apply, the function would look like this:

function revocableAgain(nice) {
    return {
        invoke: function () {
            return nice.apply(this, arguments);
        },
        revoke: function () {
            nice = null;
        }
    }
}

// PROOF
//temp = revocable(niceFunc);
//console.log(temp.invoke(7));
//temp.revoke();
//console.log(temp.invoke(8));