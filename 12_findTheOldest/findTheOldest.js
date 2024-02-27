const findTheOldest = function (people = []) {
  let arrwithage = people.reduce((Obj, aPerson) => {
    if (!("yearOfDeath" in aPerson)) {
      aPerson.yearOfDeath = new Date().getFullYear();
    }
    aPerson.age = aPerson.yearOfDeath - aPerson.yearOfBirth;

    if (Obj.age < aPerson.age || !("age" in Obj)) {
      Obj = aPerson;
    }

    return Obj;
  }, {});
  return arrwithage;
};

// Do not edit below this line
module.exports = findTheOldest;
