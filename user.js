export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export const printName = (user) => {
  console.log(`User's name is ${user.name}`);
};

export const printAge = (user) => {
  console.log(`User's is ${user.age} years old`);
};
