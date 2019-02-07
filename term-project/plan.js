class Plan {

  constructor(name, year, major, student, semester) {
    this.name     = name;
    this.year     = year;
    this.major    = major;
    this.student  = student;
    this.semester = semester;

    this.courses  = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }

  convertToYears() {
    let minYear = this.courses.reduce((min, curr) => Math.min(min, curr.year), this.courses[0].year);
    let years   = [];
    for(let i = minYear; i < this.year + 4; i++) {
      let currentYear = new Year(i, i + 1);
      let fallCourses = this.courses.filter(course => course.year === i && course.term === 'Fall');
      let otherCourses = this.courses.filter(course => course.year === i + 1 && course.term !== 'Fall');
      fallCourses.forEach(course => currentYear.addCourse(course));
      otherCourses.forEach(course => currentYear.addCourse(course));
      years.push(currentYear);
    }
    return years;
  }

  display() {
    let yearPlan = this.convertToYears();
    for(let year of yearPlan) {
    }
  }

}

class Year {

  constructor(startYear, endYear) {
    this.startYear = startYear;
    this.endYear   = endYear;

    this.terms = {
      fall:   new Term('Fall', startYear),
      spring: new Term('Spring', endYear),
      summer: new Term('Summer', endYear)
    };
  }

  addCourse(course) {
    this.terms[course.term.toLowerCase()].addCourse(course);
  }

  getTerm(term) {
    return this.terms[term];
  }

}

class Term {
  
  constructor(term, year) {
    this.courses = [];
    this.term    = term;
    this.year    = year;
  }

  addCourse(course) {
    this.courses.push(course);
  }

}

class Course {

  constructor(term, year, designator, name) {
    this.term       = term;
    this.year       = year;
    this.designator = designator;
    this.name       = name;
  }

}

function makePlan() {
  let currentPlan = new Plan('Dasch\'s Plan', 2016, 'Computer Science', 'Dasch', 'spr-2019');
  currentPlan.addCourse(new Course('Fall', 2016, 'CS-1210', 'C++ Programming'));
  currentPlan.addCourse(new Course('Fall', 2016, 'COM-1100', 'Fundamentals of Speech'));
  currentPlan.addCourse(new Course('Fall', 2016, 'HUM-1400', 'Intro to Humanities'));
  currentPlan.addCourse(new Course('Fall', 2016, 'EGCP-1010', 'Digital Logic Design'));
  currentPlan.addCourse(new Course('Fall', 2016, 'MATH-1710', 'Calculus I'));
  currentPlan.addCourse(new Course('Spring', 2017, 'CS-1220', 'Object Oriented Design with C++'));
  currentPlan.addCourse(new Course('Spring', 2017, 'PHYS-2110', 'General Physics I'));
  currentPlan.addCourse(new Course('Spring', 2017, 'BTGE-1720', 'Spiritual Formation'));
  currentPlan.addCourse(new Course('Spring', 2017, 'MATH-1720', 'Calculus II'));
  currentPlan.addCourse(new Course('Spring', 2017, 'PEF-1990', 'Phys Act & the Christian Life'));

  currentPlan.addCourse(new Course('Fall', 2017, 'CS-1210', 'C++ Programming'));
  currentPlan.addCourse(new Course('Fall', 2017, 'COM-1100', 'Fundamentals of Speech'));
  currentPlan.addCourse(new Course('Fall', 2017, 'HUM-1400', 'Intro to Humanities'));
  currentPlan.addCourse(new Course('Fall', 2017, 'EGCP-1010', 'Digital Logic Design'));
  currentPlan.addCourse(new Course('Fall', 2017, 'MATH-1710', 'Calculus I'));
  currentPlan.addCourse(new Course('Spring', 2018, 'CS-1220', 'Object Oriented Design with C++'));
  currentPlan.addCourse(new Course('Spring', 2018, 'PHYS-2110', 'General Physics I'));
  currentPlan.addCourse(new Course('Spring', 2018, 'BTGE-1720', 'Spiritual Formation'));
  currentPlan.addCourse(new Course('Spring', 2018, 'MATH-1720', 'Calculus II'));
  currentPlan.addCourse(new Course('Spring', 2018, 'PEF-1990', 'Phys Act & the Christian Life'));

  currentPlan.addCourse(new Course('Fall', 2018, 'CS-1210', 'C++ Programming'));
  currentPlan.addCourse(new Course('Fall', 2018, 'COM-1100', 'Fundamentals of Speech'));
  currentPlan.addCourse(new Course('Fall', 2018, 'HUM-1400', 'Intro to Humanities'));
  currentPlan.addCourse(new Course('Fall', 2018, 'EGCP-1010', 'Digital Logic Design'));
  currentPlan.addCourse(new Course('Fall', 2018, 'MATH-1710', 'Calculus I'));
  currentPlan.addCourse(new Course('Spring', 2019, 'CS-1220', 'Object Oriented Design with C++'));
  currentPlan.addCourse(new Course('Spring', 2019, 'PHYS-2110', 'General Physics I'));
  currentPlan.addCourse(new Course('Spring', 2019, 'BTGE-1720', 'Spiritual Formation'));
  currentPlan.addCourse(new Course('Spring', 2019, 'MATH-1720', 'Calculus II'));
  currentPlan.addCourse(new Course('Spring', 2019, 'PEF-1990', 'Phys Act & the Christian Life'));

  currentPlan.addCourse(new Course('Fall', 2019, 'CS-1210', 'C++ Programming'));
  currentPlan.addCourse(new Course('Fall', 2019, 'COM-1100', 'Fundamentals of Speech'));
  currentPlan.addCourse(new Course('Fall', 2019, 'HUM-1400', 'Intro to Humanities'));
  currentPlan.addCourse(new Course('Fall', 2019, 'EGCP-1010', 'Digital Logic Design'));
  currentPlan.addCourse(new Course('Fall', 2019, 'MATH-1710', 'Calculus I'));
  currentPlan.addCourse(new Course('Spring', 2020, 'CS-1220', 'Object Oriented Design with C++'));
  currentPlan.addCourse(new Course('Spring', 2020, 'PHYS-2110', 'General Physics I'));
  currentPlan.addCourse(new Course('Spring', 2020, 'BTGE-1720', 'Spiritual Formation'));
  currentPlan.addCourse(new Course('Spring', 2020, 'MATH-1720', 'Calculus II'));
  currentPlan.addCourse(new Course('Spring', 2020, 'PEF-1990', 'Phys Act & the Christian Life'));

  currentPlan.display();
  console.log(currentPlan);
  console.log(yearPlan);
}

makePlan();
