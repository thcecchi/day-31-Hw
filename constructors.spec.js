// utilities for testing

// this function just adds the test result to the page
function addTestDom(element, color, text) {
  var body = document.getElementsByTagName("body")[0];
  var elem = document.createElement(element);
  elem.style.color = color;
  elem.innerHTML = text;
  body.appendChild(elem);
}

// this it() function describes a group of tests
function it(description, contents) {
  var body = document.getElementsByTagName("body")[0];
  var elem = document.createElement("h3");
  elem.innerHTML = "It " + description;
  body.appendChild(elem);
  console.log("\n\n It " + description + "");
  contents();
}

// checks strict equality of expectation and target for passing test
// eg. expect(calvin.mood).tobe("happy");
function expect(expectation) {
  return {
      tobe: function(target) {
        if (target === expectation) {
          var passTxt = "PASSED " + "Expected " + target + " to be " + expectation;
          addTestDom("p", "green", passTxt);
          console.log('\n   %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
        } else {
          var failTxt = "FAILED " + "Expected " + target + " to be " + expectation;
          addTestDom("p", "red", failTxt);
          console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
          return false;
        }
      }
    };
}

/*
** Assignment: You will need to write constructors that satisfy
** this constructors that are being used below.  To do this, you will
** need to write constructors that contain the methods and properties
** that are being used in your instances.
**
*/

// Write Constructors HERE
function Human (obj) {
  var spec = obj || {};

  this.isCool = String(spec.isCool) == "true" || (spec.isCool === undefined) ? true : false;
  this.mood = spec.mood || 'happy';
  this.pet = function(pet) {
    pet.mood = "happy"
  }
  this.feed = function(pet) {
    pet.isHungry = false
  }
}

function Pet (obj) {
  var spec = obj || {};

  this.color = obj.color || "some color";
  this.isHungry =  obj.isHungry || true;
  this.mood = obj.mood || "happy";
  this.owner = obj.owner || undefined;
}

/* instances defined for unwritten constructors
** DO NOT EDIT ANY LINE BELOW
**
*/
var calvin = new Human({
  isCool: false
});

var sally = new Human();

var teddy = new Pet({
  color: "golden",
  isHungry: true,
  mood: "sleepy"
});

var snips = new Pet({
  color: "black-white",
  mood: "grumpy"
});

// Tests
// Do not edit the tests below, you will need to write your
// constructors above so that the following tests pass.

it("calvin and teddy should have happy mood when calvin pets teddy", function() {

  calvin.pet(teddy);
  expect(calvin.mood).tobe("happy");
  expect(teddy.mood).tobe("happy");

});

it("should see if teddy is indeed golden", function() {
  expect(teddy.color).tobe("golden");

});

it("should make teddy not hungry when calvin feeds him", function() {

  calvin.feed(teddy);
  expect(teddy.isHungry).tobe(false);

});

it("should expect sally to be cool by default and calvin as defined to not", function() {
  expect(calvin.isCool).tobe(false);
  expect(sally.isCool).tobe(true);
});

it("should not affect snips' owner if calvin becomes teddy's owner", function() {
  teddy.owner = calvin;
  expect(teddy.owner).tobe(calvin);
  expect(snips.owner).tobe(undefined);

});
