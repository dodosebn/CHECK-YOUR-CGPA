let selectSmt = document.getElementById('semester');
let selectDpt = document.getElementById('Department');
const FirstContainer = document.querySelector(".body-container");
let NumberCourses = document.getElementById('numCourses');
const EmptySmt = document.getElementById('smtEmpty');
const EmptyDpt = document.getElementById('dptEmpty');
const numCEmpty = document.getElementById('numCEmpty');
const Btn1 = document.getElementById("nextStep1");
// ANOTHER SIDE
const SecondContainer = document.querySelector(".Container");

const Semesters = ['First Semester','Second Semester'];

const departments = ['Accountancy','Anatomy','Banking & Finance','Biology',
'Chemistry','Criminology','Electrical Engineering','English and literature',
'Food science Tech','Geology','GeoPhysics','Histology','History','Liguistics',
'Mathematics Education','Mathematics','Nursing','Public Administration',
'Physics','Religious Studies','Statistics','Sociology'];

const noOfCourses = ['6','7','8','9','10','11','12','13'];
Semesters.forEach(semester => {
const option = document.createElement('option');
option.value = semester;
option.textContent = semester;
selectSmt.appendChild(option);
});

departments.forEach(department => {
const option = document.createElement('option');
option.value = department;
option.textContent = department;
selectDpt.appendChild(option);
});
noOfCourses.forEach(noOfCourse => {
const option = document.createElement('option');
option.value = noOfCourse;
option.textContent = noOfCourse;
NumberCourses.append(option);
});

selectSmt.addEventListener('change', function() {
const selectedSemester = selectSmt.value;

console.log('Selected department:', selectedSemester);
});
selectDpt.addEventListener('change', function() {
    const selectedDepartment = selectDpt.value;
    
    console.log('Selected department:', selectedDepartment);
    });
    NumberCourses.addEventListener('change', function() {
        const selectedNumberOfCourses = NumberCourses.value;
        if (selectedNumberOfCourses >= 8) {
            SecondContainer.style.height = "53em";
            console.log(selectedNumberOfCourses);
        } else {
            SecondContainer.style.height = "33em";
        }
        if (window.innerWidth <= 385) {
            if (selectedNumberOfCourses >= 8) {
                SecondContainer.style.height = "65em";
                console.log(selectedNumberOfCourses);
            } else {
                SecondContainer.style.height = "41em";
            }
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

Btn1.addEventListener("click", function(){
    formValidation();
    Btn1.addEventListener("click", function(){
       if(formValidation()){
        FirstContainer.style.display = "none"
        SecondContainer.style.display = "block"
        recreateForm();
    };
    });
});

// second form
function recreateForm() {
  

    const selectedNumberOfCourses =  NumberCourses.value;
    
    const formHold = document.querySelector('.FORM-HOLD');
    formHold.innerHTML = '';
  
    for (let i = 0; i < selectedNumberOfCourses; i++) {
     
      const div = document.createElement('div');
      div.classList.add('course-hold');
  
      const inputField = document.createElement('input');
      inputField.type = 'text'
      inputField.name = 'input' + (i + 1);
      div.appendChild(inputField);
  
      const selectField = document.createElement('select');
      selectField.name = 'Credit Unit'
      selectField.id = 'CreditUnit' + (i + 1);
      div.appendChild(selectField);
  
//  const CreditUnit = document.getElementById("CreditUnit");

const creditNum = [ '1', '2', '3', '4', '5', '6']

creditNum.forEach(creditnum => {
const option = document.createElement("option");
option.value = creditnum
option.textContent =  creditnum
selectField.appendChild(option);
});
      
  
      formHold.appendChild(div);
    }

    
  }
  



