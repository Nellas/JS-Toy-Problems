//Write a function called identity that takes an argument and returns that argument

// your code


// Write two binary functions, add and mul, that take two numbers and return their sum and product

// your code


// Write a function, indentityf,  that takes an argument and returns a functions that returns that argument

// your code


// Write a function, addf,  that adds from two invocations
//  addf(3)(4)      // 7

// your code

// Write a function that takes a binary function and makes it callable with two invocations.
//    addf = applyf(add);
//    addf(3)(4)        // 7
//    applyf(mul)(5)(6) // 30

// your code


// Write a function that takes a function and an argument, and returns a function that can supply a second argument.
//  add3 = curry(add, 3);
//  add3(4)             // 7
//  curry(mul, 5)(6)    // 30

// your code


// Without writing any new functions, show three ways to create the inc function
//    inc(5)        // 6
//    inc(inc(5))   // 7

// your code


// Write methodize, a function that converts a binary function to a method
//    Number.prototype.add = methodize(add);
//    (3).add(4)    // 7

// your code


// Write demethodize, a function that converts a method to a binary function
//  demothodize(Number.prototype.add) (5, 6)    // 11

// your code


// Write a function called twice that takes a binary function and returns a unary function that passes its argument to the binary function twice
//    var double = twice(add);
//    double(11)    // 22
//    var square = twice(mul);
//    square(11)    // 121 (11 squared)

// your code


// Write a function composeu that takes two unary functions and returns a unary function that calls them both.
//    composeu(double, square)(3)   // 36

// your code


// Write a function composeb that takes two binary functions and returns a function that calls them both
//  composeb(add, mul) (2, 3, 5)    // 25

// your code


// Write a function that allows another function to only be called once
//  add_once = once(add);
//  add_once(3, 4)  //7
//  add_once(3, 4)  // throw!

// your code


// Write a factory function that returns two functions that implement an up/down counter
//  counter = counterf(10);
//  counter.inc()   // 11
//  counter.dec()   // 10

// your code


// Make a revocable function that takes a nice function, and returns a revoke function that denies access to the nice function, and an invoke function that can invoke the nice function until it is revoked.
//  temp = revocable(alert);
//  temp.invoke(7);     // alert: 7
//  temp.revoke();
//  temp.invoke(8);     // throw!
