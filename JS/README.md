1. What data types exist in JavaScript?
Number - Numbers
String - Strings
Boolean - Boolean type, true or false
Object - JavaScript object
null - a special value that represents "nothing", "empty", or "unknown value".
undefined - "value has not been assigned". This type is assigned if a variable is declared but has no assigned value.
Symbol - a unique and immutable data type that can be used as an identifier for object properties.
BigInt - used for creating large numbers.

2. What is the difference between "==" and "==="?
The operator "==" checks for abstract equality, while "===" checks for strict equality.
In other words, the "==" operator performs necessary type conversions before comparison, whereas "===" does not perform type conversion. Therefore, if two values are not of the same type, it will return false when using the "===" operator.

== -> Type conversion before compairing
=== -> comparing strictly two or more values

3. What are the ways to declare a variable?
Can be defined globally, in a function or in a block scope
let and const preferable. They have block scope, meaning that a variable declared inside, for example, a function, will not be visible outside of that function. "const" variables are immutable, but if it's an object, you can change its properties, and if it's an array, you can modify and add elements.

4. What is the difference between null and undefined?
Both options represent an empty value. If we initialize a variable but don't assign a value to it, it will be assigned a special marker - undefined. Null is assigned manually.

Null is a special value that represents "nothing," "empty," or "unknown value." If we need to clear the value of a variable, we set foo = null.

5. Arrow functions and the differences from regular functions.
Arrow functions cannot use the arguments object. They have a different syntax.
Arrow functions do not have their own this context. When referencing this, an arrow function takes the context from the surrounding scope.
Arrow functions cannot be used as constructor functions. In other words, they cannot be invoked with the new keyword.

6. What is a closure and why are they needed?
A closure is a function along with all the external variables that it has access to. For example, there is a function that has a nested function which will close over and retain the variables from its parent.
