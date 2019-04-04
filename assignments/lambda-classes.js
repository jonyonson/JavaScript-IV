// CODE here for your Lambda Classes

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }

  listsSubjects() {
    const arr = this.favSubjects;
    console.log(`${this.name}'s favorite subjects:`);
    arr.forEach((x, y) => console.log(`  ${y + 1}. ${x}`));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

const jonathan = new Student({
  name: 'Jonathan',
  age: 37,
  location: 'Florence, AL',
  gender: 'male',
  previousBackground: 'Poker',
  className: 'web19',
  favSubjects: ['JavaScript', 'React', 'Computer Science'],
});

const bob = new Student({
  name: 'Robert',
  age: 32,
  location: 'New Orleans, LA',
  gender: 'male',
  previousBackground: 'accounting',
  classname: 'web18',
  favSubjects: ['Node', 'Back end'],
});

console.log('\n');
console.log('======================== STUDENTS =======================');
console.log(jonathan);
console.log(bob);
jonathan.PRAssignment('JavaScript-III');
bob.sprintChallenge('Advanced CSS');
jonathan.listsSubjects();

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Dont't forget the homies!`,
});

const joe = new Instructor({
  name: 'Joey',
  location: 'New York, NY',
  age: 33,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `How You doin'?`,
});

console.log('\n');
console.log('====================== INSTRUCTORS ======================');
console.log(fred);
console.log(joe);
fred.demo('pseudo-classical inheritance');
joe.grade(jonathan, 'JavaScript-IV');

const jerry = new ProjectManager({
  name: 'Jerry',
  location: 'NYC',
  age: 33,
  gender: 'male',
  favLanguage: 'C',
  specialty: 'CS',
  catchPhrase: `Hello, Newman.`,
  gradClassName: 'CS1',
  favInstructor: 'Josh',
});

const newman = new ProjectManager({
  name: 'Newman',
  location: 'NYC',
  age: 37,
  gender: 'male',
  favLanguage: 'JS',
  specialty: 'React/Redux',
  catchPhrase: `Hello, Jerry.`,
  gradClassName: 'CS1',
  favInstructor: 'Josh',
});

console.log('\n');
console.log('=================== PROJECT MANAGERS ===================');
console.log(jerry);
console.log(newman);
newman.standUp('web19_newman');
jerry.debugsCode(bob, 'Applied JavaScript');
