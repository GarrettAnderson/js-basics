const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}
document.addEventListener('DOMContentLoaded', main)

// Variable mutations and type coercions

// var firstName = 'John'
// var age = 28

// console.log(firstName + ' ' + age)

// var job, isMarried
// job = 'teacher'
// isMarried = false

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// Variable mutation
// age = 'twenty eight'
// job = 'driver'

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// var lastName = prompt('what is his last name?')
// console.log(firstName + ' ' + lastName)

/*****************************************
Basic Operators
 */

// var year, yearJohn, yearMark
// now = 2020
// ageJohn = 28
// ageMark = 33

// math operators
// yearJohn = now - ageJohn
// yearMark = now - ageMark

// console.log(now + 2)
// console.log(now * 2)
// console.log(now / 2)

// Logical operators
// var johnOlder = ageJohn < ageMark
// console.log(johnOlder)

// typeof operator
// console.log(typeof johnOlder)
// console.log(typeof ageJohn)
// console.log(typeof 'Mark is older than John')

// Operator precedence
// var now = 2020
// var yearJohn = 1989
// var fullAge = 30

// var isFullAge = now - yearJohn >= fullAge
// console.log(isFullAge)

// var ageJohn = now - yearJohn
// var ageMark = 35
// var average = (ageJohn + ageMark) / 2
// console.log(average)

// Multiple assignments
var x, y
x = (3 + 5) * 4 - 6 // 8 * 4 // 32 - 6// 26
console.log(x)

// More operators
x *= 2
console.log(x)
x += 10
console.log(x)
x--
console.log(x)

// coding challenge
var massMark = 80
var massJohn = 90
var heightMark = 3
var heightJohn = 4
var bmiMark = massMark / (heightMark * heightMark)
var bmiJohn = massJohn / (heightJohn * heightJohn)

var largerMass = bmiMark > bmiJohn
console.log(largerMass)

/********************************************
 if / else statements
 */

var firstName = 'John'
var civilStatus = 'single'

if (civilStatus === 'married') {
  console.log(firstName + ' is married')
} else {
  console.log(firstName + ' is single.')
}

var isMarried = true
if (isMarried === true) {
  console.log(firstName + ' is married')
} else {
  console.log(firstName + ' is single.')
}

if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher than John's")
} else {
  console.log("John's BMI is higher than Mark's")
}

/***********************************
 Boolean Logic

 */
var age = 16

if (age < 13) {
  console.log(firstName + ' is a boy.')
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.')
} else {
  console.log(firstName + ' is a man.')
}

/*************************************
  Ternary Operator and Switch Statements
 */
// Ternary operater
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice'
console.log(drink)

// Switch statement
var job = 'teacher'

switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code.')
    break
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.')
    break
  case 'designer':
    console.log(firstName + ' designs beautiful websites.')
    break
  default:
    console.log(firstName + ' does something else.')
}

/**************************************
 Truthy and Falsy value and equality operators 
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height
height = 23
if (height) {
  console.log('Variable is defined')
} else {
  console.log('Variable has not been defined')
}

/*********************************************
 Coding Challenge
 */

var teamJohnAvg = (89 + 120 + 103) / 3
var teamMikeAvg = (116 + 94 + 123) / 3
var teamMaryAvg = (97 + 134 + 105) / 3

if (teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg) {
  console.log("John's team is the winner")
} else if (teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg) {
  console.log("Mike's team is the winner")
} else {
  console.log('Both teams tied')
}

/********************************************
  Functions 
 */

function calculateAge(birthYear) {
  return 2020 - birthYear
}

var ageJohn = calculateAge(1990)
var ageMike = calculateAge(1948)
var ageJane = calculateAge(1969)

console.log(ageJohn, ageMike, ageJane)

yearsUntilRetirement = (year, firstName) => {
  let age = calculateAge(year)
  let retirement = 65 - age

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.')
  } else {
    console.log(firstName + ' is already retired.')
  }
}

yearsUntilRetirement(1990, 'John')

/*******************************************
 Function Statements and Expressions
 */

// Function Declaration
// whatDoYouDo = (job, firstName) => {}

// Function expression
const whatDoYouDo = (job, firstName) => {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code'
    case 'driver':
      return firstName + ' drives a cab in Lisbon'
    case 'designer':
      return firstName + ' designs beautiful websites'
    default:
      return firstName + ' does something else'
  }
}
console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('driver', 'Jane'))
console.log(whatDoYouDo('retired', 'Mike'))

/*********************************************
 Arrays
 */
// Initialize new array
let names = [ 'John', 'Mark', 'Jane' ]
let years = new Array(1990, 1969, 1948)
console.log(names[0])

// Mutate array data
names[1] = 'Ben'
names[names.length] = 'Mary'
console.log(names.length)

var john = [ 'John', 'Smith', 1990, 'teacher', false ]
john.push('blue') // push adds to end of the array
john.unshift('Mr.') // adds to beginning of array
john.pop() // removes value from the end of array
john.shift() // removes the value from the beginning of the array

console.log(john)

console.log(john.indexOf(1990)) // returns -1 if no element in the array

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'
console.log(isDesigner)

// Tip Calculator challenge
const tipCalculator = (bill) => {
  var percentage
  if (bill < 50) {
    percentage = 0.2
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15
  } else {
    percentage = 0.1
  }
  return percentage * bill
}

console.log(tipCalculator(100))
var bills = [ 124, 48, 268 ]
var tips = [ tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2]) ]
var finalValues = [ bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ]

console.log(tips, finalValues)

/*******************************************
 *Objects and properties
 */

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1989,
  family: [ 'Jane', 'Mark', 'Emily' ],
  job: 'teacher',
  isMarried: false
}

console.log(john.firstName)
console.log(john['lastName'])
var x = 'birthYear'
console.log(john[x])

john.job = 'designer'
john['isMarried'] = true
console.log(john)

var jane = new Object()
jane.firstName = 'Jane'
jane.birthYear = '1969'
jane['lastName'] = 'Smith'
console.log(jane)

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1989,
  family: [ 'Jane', 'Mark', 'Emily' ],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2018 - this.birthYear
  }
}

// console.log(john.calcAge())
// john.age = john.calcAge()
john.calcAge()
console.log(john)

var john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}

var mark = {
  fullName: 'Mark Jones',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}

john.calcBMI()
mark.calcBMI()
console.log(john, mark)

if (john.bmi > mark.bmi) {
  console.log(john.fullName + ' has a higher bmi of ' + john.bmi)
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has a higher bmi of ' + mark.bmi)
} else {
  console.log('There is a tie')
}

/*********************************************
 Loops and iteration
 */

for (var i = 0; i < 10; i++) {
  console.log(i)
}

let james = [ 'James', 'Smith', 1990, 'designer', false, 'blue' ]
/*
for (var i = 0; i < james.length; i++) {
  console.log(james[i])
}
*/
// Continue and break statements
/*
for (var i = 0; i < james.length; i++) {
  if (typeof john[i] !== 'string') continue
  console.log(james[i])
}

for (var i = 0; i < james.length; i++) {
  if (typeof john[i] !== 'string') break
  console.log(james[i])
}
*/
// Looping backwards
for (var i = james.length - 1; i >= 0; i--) {
  console.log(james[i])
}

// Coding challenge #5
var johnDinner = {
  fullName: 'John Smith',
  bills: [ 124, 48, 268, 180, 42 ],
  calcTips: function() {
    this.tips = []
    this.finalValues = []
    for (var i = 0; i < this.bills.length; i++) {
      var percentage
      var bill = this.bills[i]
      if (bill < 50) {
        percentage = 0.2
      } else if (bill > 50 && bill < 200) {
        percentage = 0.15
      } else {
        percentage = 0.1
      }
      this.tips[i] = bill * percentage
      this.finalValues[i] = bill + bill * percentage
    }
  }
}

johnDinner.calcTips()
console.log(johnDinner)

var markDinner = {
  fullName: 'Mark Jones',
  bills: [ 77, 375, 110, 45 ],
  calcTips: function() {
    this.tips = []
    this.finalValues = []
    for (var i = 0; i < this.bills.length; i++) {
      var percentage
      var bill = this.bills[i]
      if (bill < 100) {
        percentage = 0.2
      } else if (bill > 100 && bill < 300) {
        percentage = 0.1
      } else {
        percentage = 0.25
      }
      this.tips[i] = bill * percentage
      this.finalValues[i] = bill + bill * percentage
    }
  }
}

const calcAverage = (tips) => {
  const sum = 0
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i]
  }
  return sum / tips.length
}

markDinner.calcTips()
console.log(markDinner)

john.average = calcAverage(john.tips)
mark.average = calcAverage(mark.tips)

console.log(john, mark)
