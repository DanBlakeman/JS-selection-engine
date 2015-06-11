# Writing a JavaScript selection engine

## Time taken

< Half Day.

## Assumptions

- Assumed that users would not have two elements on the same page with the same ID. (This had the benefit of letting me show two different approaches for locating elements in the DOM).

## Approach

It was unusual not to write tests when begining a task like this, but also quite fun to have them set as a challenge.

Not knowing an awful lot about using JS to locate items in the DOM without JQuery I thought it better to explore the problem as I went along rather than planning in advance. I began by making the first test pass.

I then let the domain and its requirements emerge with each subsequent test.

You can see the domain and my approach evolving test to test, from the commits.

Each time a new requirement was discovered I pivoted my approach.

I first began by making mini functions which used regex to extract the html tags, class names, and IDs from the selector string provided.

These functions later got refactored into simpler variables, which has the benefit of not having to run a function each time I needed to access the class name again.

From this point on, I used the JS method 'getElementsByTagName' to find either a specified element, or select all elements in the page body.

Two subsequent if statements then apply further filtering of this list as required.

To locate an element using an ID I use a HTMLCollection method.

To locate elements by classes, I used a custom method in combination with the JS Filter method (Available on a HTML collection object via the Array prototype).



## Feelings

This was a really fun challenge, and a great learning experience. Up until now I have largely used jQuery methods for locating elements in the DOM so it was great to learn more about the methods JS supplies natively, and learn about HTMLCollections/more about nodes.

It feels a little dirty using a method from the Array prototype on a HTMLCollection object - given further time I would possibly investigate other ways of doing this.

Also feels a little dirty to declare functions within a function (line 17). But with both of these, it seemed a concise, readable way of achieving the goal given the rules of the challenge said to only edit the internals of the given function. :)

## Extensions

I will likely investigate further refactoring options, particularily lines 4/5. I used a ternary here, as the regex match method would return an error if there is no match (null) and i tried to access the second element of null.

## Possible extensions to the challenge

I ensured that the solution will select the second/or later class of an element if given, however this isn't tested in the tests.

May be fun to add an extension to the test to see if one could select an element using '.some_other_class'.

## Questions or Feedback?

Thanks for reading!

I'd love feedback.

If you have any questions, thoughts, or perhaps you're just reading this on GitHub and have some further challenges around this theme, please feel free to get in touch:

- GitHubDan@gmail.com

- [Linkedin](https://uk.linkedin.com/pub/dan-blakeman/68/3a4/1a2)

- [Twitter](https://twitter.com/grok_with_dan)
