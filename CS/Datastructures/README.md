# Abstract Datatypes
An abstract data type (ADT) is an abstraction of a data structure which provides only the interface to which a data structure must adhere to. The interface does not give any specific details about how something should be implemented or in what programming language.

## Data Stucture
A data structure (DS) is way of organizing data so it can be used effectivly. They are essential ingredients in creating fast and powerful algorithms. They help to manage and organzize data. They make code cleaner and easier to understand.


Example: ADT Motortransportation from A to B --> Specific modes like walking, driving or taking the bus. 
| Abstraction ADT | Implementation DS | 
| ------------- |:-------------:|
| List | Dynamic Array, Linked List |
| Queue | Linked List based Queue, Array based Queue | 
| Map | Tree Map, Hash Map, Hash Table | 
| Vehicle | Golf Cart, Bicycle, Smart Car | 


## Introduction to Big-O
As programmers, we often find ourselves asking the same two questions over and over again:
1. How much time does this algorithm need to finish?
2. How much space does this algorithm need for its computation?

Big-O Notation gives an upper bound of the complexity in the worst case, helping to quantify performance as the input size becomes arbitrarily large.

n - The size of the input
Complexities order in from smallest to largest:
1. Constant Time: O(1)
2. Logarithmic Time: O(log(n))
3. Linear Time: O(n)
4. Linearithmic Time: O(nlog()n)
5. Quadratic Time: O(n^2)
6. Cubic Time: O(n^3)
7. Exponential Time: O(b^n), b > 1
8. Factorial Time: O(n!)

### Big-O Properties
0(n + c) = O(n)
O(cn) = O(n), c > 0

Let f be a function that describes the running time of a particular algorithm for an input of size n:

f(n) = 7log(n)^3 + 15n^2 + 2n^3 + 8
O(f(n)) = O(n^3)  <-- because the cube has the biggest impact

## Hash Map
Key Value Pairs

## Hash Table
They are used when speedy insertion, deletion or lookup of elements is priority. An hash table is an array coupled to a hash function. The hash function will take a piece of data as input (Key). Output will be the hash value. There is a possibilty of collision when new elements are added that the indeces could be same. For resolving that we can use linear probing or seperate chaining. Linear probing = new data stored in the next available slot. Clustering still possible = collision expands in the same space = O(n). In the seperate chaining model the hash table is an array of pointers to a linked lists. When a collision occurs, the key can be inserted in constant time at the head of the appropriate linked list. In the worst case we must traverse the entire linked list starting at index 0 which mean O(n/k) -> O(n).

A good hash function:
- Makes use of all info provided by the key
- Uniformly distributes output across table
- Maps similar key to very different hash values
- Uses only very fast operations

## Linked Lists
A simple data structure which stores a list of values but in a way that each value is connected or linked to the next value.

Data = Value you want to store
Next = Adress of the next node
Previous = Adress of the previous node

The first node is the head of the list that has a any noded pointing to it.

A double linked list containes also the previous node pointer.

In both approaches the last node is a null field to represent when nothing is to link to

In a circular linked list the last node will be connected with the head node.


| Advantages | Disadvantages | 
| ------------- |:-------------:|
| Adding a node to list is easy by extending the last node | Can take more memory than a simple array |