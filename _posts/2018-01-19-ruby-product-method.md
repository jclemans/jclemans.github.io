---
layout: default
title:  "Combining Arrays with Ruby’s Array#product Method"
date:   2018-01-19 13:21:00 -0800
---

Have you ever needed to combine two or more arrays? If so this one’s for you. Imagine you have arrays nums = ["1", "2"] and alphas = ["a", "b"]. You want to get all the possible combinations of each item in the first array with each item in the second. One way would be to use the #map or #collect method. However, Ruby has a handy little method called #product that can be used like this:

```
nums.product(alphas)
 
=> [["1", "a"], ["1", "b"], ["2", "a"], ["2", "b"]]
```

## What if you have more than two arrays? No problem

Let’s say we need to model a card game, but it has variations where some suits or numbers aren’t needed. We can use the #product method to build our deck in a flexible way. For simplicity lets assume we have a game that requires cards with three attributes:&nbsp;

```
card_types = ["Jack", "Queen", "King", "Ace"]

card_suits = [" of Kittens", "of Unicorns"]

card_actions = ["move 1", "move 3", "pass"]
```

Now our method would look like this:

```
card_types.product(card_suits, card_actions)

=> [["Jack", " of Kittens", "move 1"], 
    ["Jack", " of Kittens", "move 3"], 
    ["Jack", " of Kittens", "pass"], 
    ["Jack", "of Unicorns", "move 1"], 
    ["Jack", "of Unicorns", "move 3"], 
    ["Jack", "of Unicorns", "pass"], 
    ["Queen", " of Kittens", "move 1"], 
    ["Queen", " of Kittens", "move 3"], 
    ["Queen", " of Kittens", "pass"], 
    ["Queen", "of Unicorns", "move 1"], 
    ["Queen", "of Unicorns", "move 3"], 
    ["Queen", "of Unicorns", "pass"], 
    ["King", " of Kittens", "move 1"], 
    ["King", " of Kittens", "move 3"], 
    ["King", " of Kittens", "pass"], 
    ["King", "of Unicorns", "move 1"], 
    ["King", "of Unicorns", "move 3"], 
    ["King", "of Unicorns", "pass"], 
    ["Ace", " of Kittens", "move 1"], 
    ["Ace", " of Kittens", "move 3"], 
    ["Ace", " of Kittens", "pass"], 
    ["Ace", "of Unicorns", "move 1"], 
    ["Ace", "of Unicorns", "move 3"], 
    ["Ace", "of Unicorns", "pass"]]
```

## What if we have an arbitrary number of arrays?

This was the question I ran into that prompted me to write this up. The good news is that the answer is simple. Set up an array of arrays with all of the attributes you want to combine and voila!

```
primary_attributes = ['Foo','Bar']

array_of_arrays = [[1,2], ['a','b'], [true, false], ['etc']]

primary_attributes.product(*array_of_arrays)

=> [["Foo", 1, "a", true, "etc"], 
    ["Foo", 1, "a", false, "etc"], 
    ["Foo", 1, "b", true, "etc"], 
    ["Foo", 1, "b", false, "etc"], 
    ["Foo", 2, "a", true, "etc"], 
    ["Foo", 2, "a", false, "etc"], 
    ["Foo", 2, "b", true, "etc"], 
    ["Foo", 2, "b", false, "etc"], 
    ["Bar", 1, "a", true, "etc"], 
    ["Bar", 1, "a", false, "etc"], 
    ["Bar", 1, "b", true, "etc"], 
    ["Bar", 1, "b", false, "etc"], 
    ["Bar", 2, "a", true, "etc"], 
    ["Bar", 2, "a", false, "etc"], 
    ["Bar", 2, "b", true, "etc"], 
    ["Bar", 2, "b", false, "etc"]]
```

I hope this helps someone else as much as it helped me!&nbsp;

Resources:

[http://ruby-doc.org/core-2.3.0/Array.html#method-i-product](http://ruby-doc.org/core-2.3.0/Array.html#method-i-product)