# Difference Between Type Alias & Interface

## What is type alias and interface?

**Type alias** is a custom name type where developer can set a custom typing and give that kind of type a unique name. That custom type can be usable throughout the development which save time and extra lines of code. On the other hand **Interface** is kind of similer to the **type alias** but for object. It is a custom typing system for a type of object where it looked like an object and developer can set type of the properties inside and giving a name of the **interface** can be use afterwards. Both hase similer or almost the same task but the use cases are different.

## What is the actual difference between them & use cases?
 
- The obvios difference between **type alias** and **interface** are the syntax
  type declaration:
```typescript
  type ID = string | number;
  type Name = string;
```
 
  interface declaration:
 
```typescript
  interface User {
    name: string;
    age: number;
  }
```
 
- Type alias can not be merge or redeclared that throughs an error where interface with the same name automatically merge and create a bigger interface.
  Example with interface (merges):
```typescript
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }
 
  const user: User = { name: "Sara", age: 25 };
```
 
  Example with type alias (error):
 
```typescript
  type Person = { name: string };
  type Person = { age: number }; 
```
 
- Type alias can not be extended on the other hand interface can be extended. To extend type alias we have to use intersection (&).
  Example with interface:
```typescript
  interface Animal {
    name: string;
  }
  interface Dog extends Animal {
    breed: string;
  }
 
  const dog: Dog = { name: "Rex", breed: "Labrador" };
```
 
  Example with type alias:
 
```typescript
  type Animal = { name: string };
  type Dog = Animal & { breed: string };
 
  const dog: Dog = { name: "Rex", breed: "Labrador" };
```
 
- The use cases for type alias and interface are different. Type alias normally use as a type of a variable and also can be used in the type of a property of an object. But interface only used in an object where it defines the typing of the properties of that object
  Example with type alias:
```typescript
  type ID = string | number;
  type Point = [number, number];
 
  let userId: ID = 101;
  let position: Point = [10, 20];
```
 
  Example with interface:
 
```typescript
  interface Product {
    title: string;
    price: number;
  }
 
  const item: Product = { title: "Book", price: 12 };
```
 
- Interface normally gives clearer error messages and are slightly faster to compiler and checking, because they'er cached by name. Intersections of type aliases are reevaluated more often.
  Example:
```typescript
  interface Dog extends Animal { breed: string } // checked and cached by name
  type Dog = Animal & { breed: string };
```


## Conclusion

Both type aliases and interfaces let you give a custom name to a type, and in many cases either one works. The difference is in how they are best used. A type alias is more flexible: it can describe primitives, unions, tuples, and object shapes, so it is a good fit for things like string | number. An interface is designed for object shapes. It supports declaration merging and extends, and it usually gives clearer error messages and slightly better compiler performance.