# Java 11 to 17 features

## Record
```Java
public static record(String name, int age) {
}
```
It creates a class with immutable properties (name, age) with public accessors and getters.

It includes a `toString` method to print the properties nicely.

You can add extra methods within like a class.

## Multiline Strings
```Java
String sql = """
  select *
  from table
  where cond = 1;
""";
```
You can use `"` inside without escaping.

It preserves line end, tabbing, spacing.

You can use it anywhere you could normally use a string.

## Var
```Java
var abc = new Car();
```
It automatically infers the type.

## Pattern matching
```Java
switch (object) {
  Car c -> c.doSomething();
  Truck t -> t.doSomethingElse();
}
```
(I think)

Let's you do a switch based on class type.
