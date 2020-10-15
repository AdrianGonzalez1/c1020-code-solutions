/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log('4 isUnderFive:', isUnderFive(4));
console.log('10 isUnderFive:', isUnderFive(10));
console.log('5 isUnderFive:', isUnderFive(5));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('4 isEven:', isEven(4));
console.log('10 isEven:', isEven(10));
console.log('5 isEven:', isEven(5));
console.log('23 isEven:', isEven(23));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return 'does not begin with capital J';
  }
}

console.log('(JavaScript)startsWithJ:', startsWithJ('JavaScript'));
console.log('(PHP)startsWithJ:', startsWithJ('PHP'));
console.log('(HTML) startsWithJ:', startsWithJ('HTML'));
console.log('(Java)startsWithJ:', startsWithJ('Java'));
console.log('(Kotlin)startsWithJ:', startsWithJ('Kotlin'));
console.log('(C#)startsWithJ):', startsWithJ('C#'));

var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
var homer = {
  name: 'Homer Simpson',
  age: 39
};
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return person.name + ', age ' + person.age + ', can have a drink!';
  } else {
    return person.name + person.age + ' is too young to drink!';
  }
}

console.log(isOldEnoughToDrink(bart));
console.log(isOldEnoughToDrink(homer));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return person.name + ', age ' + person.age + ', can drive.';
  } else {
    return person.name + ' is too young to drive.';
  }
}

console.log(isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) {
  if (person) {
    return 'drinking and driving is always illegal!';
  }
}

console.log('isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive(homer));

function categorizeAcidity(pH) {
  if (pH >= 0 && pH <= 6) {
    return 'level ' + pH + ' pH is acidic';
  } else {
    if (pH === 7) {
      return 'level ' + pH + ' is neutral';
    } else {
      if (pH < 0 || pH > 14) {
        return 'level ' + pH + ' is an invalid pH';
      } else {
        if (pH > 7 && pH <= 14) {
          return 'level ' + pH + ' is base';
        }
      }
    }
  }
}
console.log(categorizeAcidity(-1));
console.log(categorizeAcidity(14.000001));
console.log(categorizeAcidity(7));
console.log(categorizeAcidity(2));
console.log(categorizeAcidity(9));

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  } else {
    if (name === 'dot') {
      return 'I\'m cute~';
    } else {
      return 'Goodnight everybody!';
    }
  }
}

console.log('introduceWarnerBro Yakko:', introduceWarnerBro('yakko'));
console.log('introduceWarnerBro Wakko:', introduceWarnerBro('wakko'));
console.log('introduceWarnerBro Dot:', introduceWarnerBro('dot'));
console.log('introduceWarnerBro Cody:', introduceWarnerBro('cody'));
console.log('introduceWarnerBro Minerva:', introduceWarnerBro('minerva'));