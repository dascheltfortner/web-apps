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
    let planHTML = '';
    for(let year of yearPlan) {
      let yearHTML = '<div class="year-block">\n';
      for(let key in year.terms) {
        yearHTML += '\t<div class="semester-block">\n';
        yearHTML += '\t<div class="semester-heading">\n';
        yearHTML += '\t\t<h5>' + year.terms[key].term + ' ' + year.terms[key].year + '</h5>\n';
        yearHTML += '\t\t<h5>' + year.terms[key].credits + ' Hours</h5>\n';
        yearHTML += '\t</div>\n';

        for(let course of year.terms[key].courses) {
          yearHTML += '\t<div class="class-block">\n';
          yearHTML += '\t\t<h5>' + course.designator + '</h5>\n';
          yearHTML += '\t\t<h6>' + course.name + '</h6>\n';
          yearHTML += '\t</div>\n';
        }

        yearHTML += '\t</div>\n';
      }
      yearHTML += '</div>\n';
      planHTML += yearHTML;
    }
    let container = document.getElementById('course-content');
    container.innerHTML = planHTML;
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
    this.credits = 0;
  }

  addCourse(course) {
    this.courses.push(course);
    this.credits += course.credits;
  }

}

class Course {

  constructor(term, year, designator, name, credits) {
    this.term       = term;
    this.year       = year;
    this.designator = designator;
    this.name       = name;
    this.credits    = credits;
  }

}

function makePlan() {
  let currentPlan = new Plan('Dasch\'s Plan', 2016, 'Computer Science', 'Dasch', 'spr-2019');
  currentPlan.addCourse(new Course('Fall', 2016, 'CS-1210', 'C++ Programming', 3));
  currentPlan.addCourse(new Course('Fall', 2016, 'COM-1100', 'Fundamentals of Speech', 3));
  currentPlan.addCourse(new Course('Fall', 2016, 'HUM-1400', 'Intro to Humanities', 3));
  currentPlan.addCourse(new Course('Fall', 2016, 'EGCP-1010', 'Digital Logic Design', 3));
  currentPlan.addCourse(new Course('Fall', 2016, 'MATH-1710', 'Calculus I', 5));
  currentPlan.addCourse(new Course('Spring', 2017, 'CS-1220', 'Object Oriented Design with C++', 3));
  currentPlan.addCourse(new Course('Spring', 2017, 'PHYS-2110', 'General Physics I', 4));
  currentPlan.addCourse(new Course('Spring', 2017, 'BTGE-1720', 'Spiritual Formation', 3));
  currentPlan.addCourse(new Course('Spring', 2017, 'MATH-1720', 'Calculus II', 5));
  currentPlan.addCourse(new Course('Spring', 2017, 'PEF-1990', 'Phys Act & the Christian Life', 2));

  currentPlan.addCourse(new Course('Fall', 2017, 'CS-1210', 'C++ Programming', 3));
  currentPlan.addCourse(new Course('Fall', 2017, 'COM-1100', 'Fundamentals of Speech', 3));
  currentPlan.addCourse(new Course('Fall', 2017, 'HUM-1400', 'Intro to Humanities', 3));
  currentPlan.addCourse(new Course('Fall', 2017, 'EGCP-1010', 'Digital Logic Design', 3));
  currentPlan.addCourse(new Course('Fall', 2017, 'MATH-1710', 'Calculus I', 5));
  currentPlan.addCourse(new Course('Spring', 2018, 'CS-1220', 'Object Oriented Design with C++', 3));
  currentPlan.addCourse(new Course('Spring', 2018, 'PHYS-2110', 'General Physics I', 4));
  currentPlan.addCourse(new Course('Spring', 2018, 'BTGE-1720', 'Spiritual Formation', 3));
  currentPlan.addCourse(new Course('Spring', 2018, 'MATH-1720', 'Calculus II', 5));
  currentPlan.addCourse(new Course('Spring', 2018, 'PEF-1990', 'Phys Act & the Christian Life', 2));

  currentPlan.addCourse(new Course('Fall', 2018, 'CS-1210', 'C++ Programming', 3));
  currentPlan.addCourse(new Course('Fall', 2018, 'COM-1100', 'Fundamentals of Speech', 3));
  currentPlan.addCourse(new Course('Fall', 2018, 'HUM-1400', 'Intro to Humanities', 3));
  currentPlan.addCourse(new Course('Fall', 2018, 'EGCP-1010', 'Digital Logic Design', 3));
  currentPlan.addCourse(new Course('Fall', 2018, 'MATH-1710', 'Calculus I', 5));
  currentPlan.addCourse(new Course('Spring', 2019, 'CS-1220', 'Object Oriented Design with C++', 3));
  currentPlan.addCourse(new Course('Spring', 2019, 'PHYS-2110', 'General Physics I', 4));
  currentPlan.addCourse(new Course('Spring', 2019, 'BTGE-1720', 'Spiritual Formation', 3));
  currentPlan.addCourse(new Course('Spring', 2019, 'MATH-1720', 'Calculus II', 5));
  currentPlan.addCourse(new Course('Spring', 2019, 'PEF-1990', 'Phys Act & the Christian Life', 2));

  currentPlan.addCourse(new Course('Fall', 2019, 'CS-1210', 'C++ Programming', 3));
  currentPlan.addCourse(new Course('Fall', 2019, 'COM-1100', 'Fundamentals of Speech', 3));
  currentPlan.addCourse(new Course('Fall', 2019, 'HUM-1400', 'Intro to Humanities', 3));
  currentPlan.addCourse(new Course('Fall', 2019, 'EGCP-1010', 'Digital Logic Design', 3));
  currentPlan.addCourse(new Course('Fall', 2019, 'MATH-1710', 'Calculus I', 5));
  currentPlan.addCourse(new Course('Spring', 2020, 'CS-1220', 'Object Oriented Design with C++', 3));
  currentPlan.addCourse(new Course('Spring', 2020, 'PHYS-2110', 'General Physics I', 4));
  currentPlan.addCourse(new Course('Spring', 2020, 'BTGE-1720', 'Spiritual Formation', 3));
  currentPlan.addCourse(new Course('Spring', 2020, 'MATH-1720', 'Calculus II', 5));
  currentPlan.addCourse(new Course('Spring', 2020, 'PEF-1990', 'Phys Act & the Christian Life', 2));

  currentPlan.display();
}

makePlan();
