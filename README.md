# Introduction to Testing

## Description
Testing in the world of software development is a virtue in which we must strive to develop our software.  If done correctly, testing becomes the specification to which our software must conform.

Testing allows us to write our software that remains resilient and gives us the ability to more easily identify places in our code that break.

We've all seen javascript errors that cause us to scratch our heads in wonder, but with testing, we can write more confident code knowing that if something changes and a test breaks and/or fails, we can immediately determine the cause of the error, fix the code, and move on to develop more features.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand the basic principles of testing using Jasmine by fixing failing tests.
* Begin to understand test driven development by writing application code based on a failing suite of tests.

### Performance Objectives

After completing this assignment, you be able to effectively use

* Use the Jasmine testing framework to solve the Javascript Koans
* Write constructors based on failing tests.


## Details

### Deliverables

This assignment is twofold, meaning it consists of 2 parts:

1) Using the prewritten koans, edit the files contained HERE : `javascript-koans/koans/` (except for AboutApplyingWhatWeHaveLearnt.js)

* So you must correct the following files:
  * `javascript-koans/koans/AboutExpects.js`
  * `javascript-koans/koans/AboutArrays.js`
  * `javascript-koans/koans/AboutFunctions.js`
  * `javascript-koans/koans/AboutObjects.js`
  * `javascript-koans/koans/AboutMutability.js`
  * `javascript-koans/koans/AboutHigherOrderFunctions.js`
  * `javascript-koans/koans/AboutInheritance.js`

To see your progress and run the tests, simply open in your browser: [The Koans Runner - `javascript-koans/KoansRunner.html`](javascript-koans/KoansRunner.html)

For an Introduction to using the Javascript Koans, please see the readme.md contained within `javascript-koans` and view this 2 part youtube series:

- [Part 1 - Koans](http://youtu.be/ofOT8n2Vn-k)
- [Part 2 - Koans](http://youtu.be/cbM5lDmSriQ)

2) Open and edit `constructors.spec.js` and write constructors based on the instances created and the failing tests.

NOTE: You will need to initially create the constructors before you will begin to see failing tests.  The only code you will write will be the constructors, and when you do, all of the tests should pass when you open `constructorTests.html`

### Requirements

* Passing unit tests in [The Koans Runner - `javascript-koans/KoansRunner.html`](javascript-koans/KoansRunner.html)
* Passing unit tests in the [Constructor tests](constructorTests.html)


## Normal Mode

As stated above in the Deliverables sections, this assignment is 2 parts, with the first part doing some review and writing the answers to the javascript Koans.  The second part is writing constructors based on the instances created in `constructors.spec.js` so that the constructorTests.html file shows all tests passing (they will be in green text).

## Hard Mode

In addition to completing normal mode, uncomment line 22 in [`javascript-koans/KoansRunner.html`](javascript-koans/KoansRunner.html#L22) and complete those tests with underscore.


## Additional Resources

* Read [Jasmine](http://jasmine.github.io/2.2/introduction.html)
