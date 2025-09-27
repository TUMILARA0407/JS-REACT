class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
     console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const student = new Human("Tumilara", 18);
student.greet();
