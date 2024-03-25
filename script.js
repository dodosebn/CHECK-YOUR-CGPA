
let selectSmt = document.getElementById("semester");
let selectDpt = document.getElementById("Department");
let NumberCourses = document.getElementById("numCourses");
const FirstContainer = document.querySelector(".body-container");
const EmptySmt = document.getElementById("smtEmpty");
const fronterName = document.querySelector(".name");
const fronterSkul = document.querySelector(".skul");
const EmptyDpt = document.getElementById("dptEmpty");
const numCEmpty = document.getElementById("numCEmpty");
const Btn1 = document.getElementById("nextStep1");
const SecondContainer = document.querySelector(".Container");
const thirdContainer = document.querySelector(".main-cont");
const studentName = document.getElementById("cgName");
const studentSchool = document.getElementById("cgSchool");
const studentSemester = document.getElementById("cgSemester");
const studentDepartment = document.getElementById("cgDepartment");
const CGPAhimself = document.getElementById("CGPAhimself");

const Semesters = ["First Semester", "Second Semester"];

const departments = [
  "Accountancy",
  "Anatomy",
  "Banking & Finance",
  "Biology",
  "BioChemistry",
  "Chemistry",
  "Criminology",
  "Electrical Engineering",
  "English and literature",
  "Food science Tech",
  "Geology",
  "GeoPhysics",
  "Histology",
  "History",
  "Liguistics",
  "Mathematics Education",
  "Mathematics",
  "Nursing",
  "Public Administration",
  "Physics",
  "Religious Studies",
  "Statistics",
  "Sociology",
];

const noOfCourses = ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

// Populate dropdowns
function populateDropdown(select, options) {
  for (let i = 0; i < options.length; i++) {
    let option = document.createElement("option");
    option.text = options[i];
    select.add(option);
  }
}

populateDropdown(selectSmt, Semesters);
populateDropdown(selectDpt, departments);
populateDropdown(NumberCourses, noOfCourses);

// Event listeners for dropdowns
selectSmt.addEventListener("change", function () {
  console.log(selectSmt.value);
});

selectDpt.addEventListener("change", function () {
  console.log(selectDpt.value);
});

NumberCourses.addEventListener("change", function () {
  console.log(NumberCourses.value);
});

NumberCourses.addEventListener("change", function () {
  const selectedNumberOfCourses = NumberCourses.value;
  if (selectedNumberOfCourses >= 8) {
    SecondContainer.style.height = "52em";
    console.log(selectedNumberOfCourses);
  } else {
    SecondContainer.style.height = "33em";
  }

  console.log("selected:", selectedNumberOfCourses);
});
// Form validation
const formValidation = () => {
  if (selectSmt.selectedIndex === 0) {
    EmptySmt.textContent = "This field is required";
    return false;
  } else {
    EmptySmt.textContent = "";
  }

  if (selectDpt.selectedIndex === 0) {
    EmptyDpt.textContent = "This field is required";
    return false;
  } else {
    EmptyDpt.textContent = "";
  }
  if(fronterName.value.trim() === ""){
    fronterName.style.border = "1px solid red";
    return false;
  }else{
    fronterName.style.border = "";
  }
  if(fronterSkul.value.trim() === ""){
    fronterSkul.placeholder = "This field is required";
    fronterSkul.style.border = "1px solid red";
    return false;
  }else{
    fronterSkul.style.border = "";
  }
  recreateForm();
  FirstContainer.style.display = "none";
  SecondContainer.style.display = "block";
  return true;
  
};


Btn1.addEventListener("click", function () {
  formValidation();

});

// Dynamically recreate the form based on the selected number of courses
function recreateForm() {
  let numCourses = parseInt(NumberCourses.value);
  const formHold = document.querySelector(".FORM-HOLD");
  formHold.innerHTML = ""; // Clear previous form

  let table = document.createElement("table");
  table.classList.add("tabClass");

  for (let i = 0; i < numCourses; i++) {
    let row = document.createElement("tr");

    let courseCodeCell = document.createElement("td");
    let creditUnitCell = document.createElement("td");
    let gradeCell = document.createElement("td");

    let courseCodeInput = document.createElement("input");
    courseCodeInput.type = "text";
    courseCodeInput.placeholder = "Course Code";
    let creditUnitInput = document.createElement("select");

    const CreditUni = ["C.U", "0", "1", "2", "3", "4", "5", "6"];
    CreditUni.forEach((creditnum) => {
      const option = document.createElement("option");
      option.value = creditnum;
      option.textContent = creditnum;
      if (creditnum === "C.U") {
        option.selected = true;
        option.disabled = true;
      }
      creditUnitInput.appendChild(option);
    });
    let gradeInput = document.createElement("select");
    gradeInput.classList.add("gradoo");
    const gradeSelect = ["Grade", "A", "B", "C", "D", "E", "F"];

    gradeSelect.forEach((Grade) => {
      const option = document.createElement("option");
      option.value = Grade;
      option.textContent = Grade;
      if (Grade === "Grade") {
        option.selected = true;
        option.disabled = true;
      }
      gradeInput.appendChild(option);
    });
    courseCodeCell.appendChild(courseCodeInput);
    creditUnitCell.appendChild(creditUnitInput);
    gradeCell.appendChild(gradeInput);

    row.appendChild(courseCodeCell);
    row.appendChild(creditUnitCell);
    row.appendChild(gradeCell);

    table.appendChild(row);
  }

  formHold.appendChild(table);
}
function calculateCGPA() {
  function getGradeValue(grade) {
    switch (grade) {
      case "A":
        return 5;
      case "B":
        return 4;
      case "C":
        return 3;
      case "D":
        return 2;
      case "E":
        return 1;
      case "F":
        return 0;
      default:
        return 0;
    }
  }

  const tabClass = document.querySelector(".tabClass");
  const allSele = document.querySelector(".tabClass select");
  const Input = document.querySelector(".tabClass input");
  const gradoo = document.querySelector(".gradoo");
  const error = document.querySelector(".guild p");

  if (Input.value.trim() === "") {
    Input.style.border = "1px solid red";
    return false;
  } else {
    Input.style.border = "";
  }

  if (allSele.selectedIndex === 0 ||gradoo.selectedIndex === 0){
    error.textContent = "input all Fields";
    return false;
  } else{
    error.textContent = " ";
  }


  const formHold = document.querySelector(".FORM-HOLD");
  let rows = formHold.getElementsByTagName("tr");
  let totalCreditUnits = 0;
  let totalWeightedGrades = 0;

  for (let i = 0; i < rows.length; i++) {
    let creditUnitCell = rows[i].getElementsByTagName("td")[1];
    let creditUnitInput = creditUnitCell.querySelector("select");

    let gradeCell = rows[i].getElementsByTagName("td")[2];
    let gradeInput = gradeCell.querySelector("select");

    let creditUnit = parseInt(creditUnitInput.value);
    let grade = gradeInput.value;
    let gradeValue = getGradeValue(grade);

    let weightedGrade = creditUnit * gradeValue;
    totalWeightedGrades += weightedGrade;
    totalCreditUnits += creditUnit;
  }

  let cgpa = totalWeightedGrades / totalCreditUnits;
  // console.log("CGPA:", cgpa);
  SecondContainer.style.display = "none"
  studentSemester.textContent =`Semester: ${selectSmt.value}`;
  studentDepartment.textContent = `Department: ${selectDpt.value}`;
  studentSchool.textContent = `School: ${fronterSkul.value}`;
  studentName.textContent = `Name: ${fronterName.value}`;
  CGPAhimself.textContent = `CGPA: ${cgpa}`;
  thirdContainer.style.display = "block";
  return true;
}


nextStep2.addEventListener("click", () => {
  calculateCGPA();
});
