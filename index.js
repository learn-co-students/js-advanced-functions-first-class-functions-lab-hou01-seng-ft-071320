// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (array) {
    const a = array.slice(0,2)
    return a
}

// console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = function (array) {
    return array.slice(-2)
}

// console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

// console.log(selectingDrivers)
// console.log(selectingDrivers[0](drivers))
// console.log(selectingDrivers[1](drivers))

const createFareMultiplier = function (integer) {
   return function(fare) {
        return fare * integer
    }
}

// console.log(createFareMultiplier(20)(1.25))

const fareDoubler = createFareMultiplier(2)

// console.log(fareDoubler(2))

const fareTripler = createFareMultiplier(3)

// console.log(fareTripler(3))

const selectDifferentDrivers = function (array, fn) {
   return fn(array)
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))



