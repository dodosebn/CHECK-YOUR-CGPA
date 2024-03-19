let selectSmt = document.getElementById("semester");
let selectDpt = document.getElementById("Department");
const FirstContainer = document.querySelector(".body-container");
let NumberCourses = document.getElementById("numCourses");
const EmptySmt = document.getElementById("smtEmpty");
const EmptyDpt = document.getElementById("dptEmpty");
const numCEmpty = document.getElementById("numCEmpty");
const Btn1 = document.getElementById("nextStep1");
const SecondContainer = document.querySelector(".Container");
const thirdContainer = document.querySelector(".T-Container");

const Semesters = ["First Semester", "Second Semester"];

const departments = [
  "Accountancy",
  "Anatomy",
  "Banking & Finance",
  "Biology",
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

const noOfCourses = ["6", "7", "8", "9", "10", "11", "12", "13"];
Semesters.forEach((semester) => {
  const option = document.createElement("option");
  option.value = semester;
  option.textContent = semester;
  selectSmt.appendChild(option);
});

departments.forEach((department) => {
  const option = document.createElement("option");
  option.value = department;
  option.textContent = department;
  selectDpt.appendChild(option);
});
noOfCourses.forEach((noOfCourse) => {
  const option = document.createElement("option");
  option.value = noOfCourse;
  option.textContent = noOfCourse;
  NumberCourses.append(option);
});

selectSmt.addEventListener("change", function () {
  const selectedSemester = selectSmt.value;

  console.log("Selected department:", selectedSemester);
});
selectDpt.addEventListener("change", function () {
  const selectedDepartment = selectDpt.value;

  console.log("Selected department:", selectedDepartment);
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

  if (NumberCourses.selectedIndex === 0) {
    numCEmpty.textContent = "This field is required";
    return false;
  } else {
    numCEmpty.textContent = "";
  }

  return true;
};

Btn1.addEventListener("click", function () {
  formValidation();
  Btn1.addEventListener("click", function () {
    if (formValidation()) {
      FirstContainer.style.display = "none";
      SecondContainer.style.display = "block";
      recreateForm();
    }
  });
});

// second form
function recreateForm() {
  const selectedNumberOfCourses = NumberCourses.value;
  const formHold = document.querySelector(".FORM-HOLD");
  formHold.innerHTML = "";

  for (let i = 0; i < selectedNumberOfCourses; i++) {
    const div = document.createElement("div");
    div.classList.add("course-hold");

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "inputa";
    inputField.placeholder = "Course code";
    inputField.name = "input" + (i + 1);
    div.appendChild(inputField);

    const selectField = document.createElement("select");
    selectField.name = "Credit Unit";
    selectField.id = "select" + (i + 1);
    div.appendChild(selectField);

    const creditNum = ["C.U", "0", "1", "2", "3", "4", "5"];
    creditNum.forEach((creditnum) => {
      const option = document.createElement("option");
      option.value = creditnum;
      option.textContent = creditnum;
      if (creditnum === "C.U") {
        option.selected = true;
        option.disabled = true;
      }
      selectField.appendChild(option);
    });

    selectField.addEventListener("change", function () {
      const Worddings = selectField.value;
      console.log(Worddings);
    });

    const selectScore = document.createElement("select");
    selectScore.name = "Score";
    selectScore.id = "score" + (i + 1);
    div.appendChild(selectScore);

    const ScoreRate = ["select score", "Below 40 ", "From 40 to 49", "from 50 to 59", "from 60 to  69", "70 & Above"];
    ScoreRate.forEach((scorela) => {
      const option = document.createElement("option");
      option.value = scorela;
      option.textContent = scorela;
      if (ScoreRate === "select score") {
        option.selected = true;
        option.disabled = true;
      }
      selectScore.appendChild(option);
    });

    selectScore.addEventListener("change", function () {
      const Worddings = selectScore.value;
      console.log(Worddings);
    });

    formHold.appendChild(div);
  }
}
const Button2 = document.getElementById("nextStep2");
function validateInputs() {
  const inputFields = document.querySelectorAll(".course-hold input");
  const selectFields = document.querySelectorAll(".course-hold select");
  inputFields.forEach((input) => {
    if (input.value.trim() === "") {
      input.style.border = "1px solid red";
      input.placeholder = "Course code!!";
      input.style.color = "red";
      return false;
    } else {
      input.style.border = "";
      input.style.color = "";
      input.placeholder = "";
    }
    return true;
  });
  selectFields.forEach((select) => {
    if (select.selectedIndex === 0) {
      select.style.color = "red";
      return false;
    } else {
      select.style.color = "";
    }
    return true;
  });
}

// function RecursionHard() {
//   const selectedNumberOfCourses = NumberCourses.value;
//   const FORM3 = document.querySelector(".form3");
//   FORM3.innerHTML = "";

// }
  Button2.addEventListener("click", function () {
      SecondContainer.style.display = "none";
      thirdContainer.style.display = "block";
      // RecursionHard();
  });

  // function calculateGrade(score) {
  //   if (score < 40) {
  //     return "Fail";
  //   } else if (score >= 40 && score <= 49) {
  //     return "Pass";
  //   } else if (score >= 50 && score <= 59) {
  //     return "C";
  //   } else if (score >= 60 && score <= 69) {
  //     return "B";
  //   } else if (score >= 70) {
  //     return "Excellent";
  //   } else {
  //     return "Invalid score";
  //   }
  // }
  
  // // Example usage
  // const score = 75;
  // const grade = calculateGrade(score);
  // console.log(`Score: ${score}, Grade: ${grade}`);

