const findTheOldest = function(peoples) {
    let oldest = peoples[0];
    let this_year = ((new Date).getFullYear());
    for (let i=1; i < peoples.length;i++) {
        let last_age;
        let next_age;

        if (!peoples[i].yearOfDeath) {
            next_age = this_year - peoples[i].yearOfBirth;
        } else next_age = peoples[i].yearOfDeath - peoples[i].yearOfBirth;

        if (!oldest.yearOfDeath) {
            last_age = this_year - oldest.yearOfBirth;
        } else last_age = oldest.yearOfDeath - oldest.yearOfBirth;

        if (next_age > last_age) {
            oldest = peoples[i];
        }
    }
    return oldest;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

let ans = findTheOldest(people);
console.log(ans);

// Do not edit below this line
module.exports = findTheOldest;
