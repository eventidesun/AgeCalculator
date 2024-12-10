// we have all the elements using the method called getElementById
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

// this function calculates the age
function calculateAge() {

    const birthdayValue = birthdayEl.value;

    // console.log(birthdayValue);
    if (birthdayValue === "") { // if nothing is entered, we get an alert saying that we need to enter the birthday date
        alert("Please enter your birthday")
    } else { // if the birthday date is entered, we then call the getAge function
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your are ${age} ${age > 1 ? "years" : "year"} old`; // we follow this format - if the age is 1 then we use "year" otherwise we use "years"
    }
}

function getAge(birthdayValue) { // we pass the birthdayValue here as a paremeter
    const currentDate = new Date()
    const birthdayDate = new Date(birthdayValue); // we need to calculate the age based on the current age and the birthday date
    let age = currentDate.getFullYear() - birthdayDate.getFullYear(); // here, we calculate the age
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    // console.log(birthdayDate.getFullYear());

    // if the month is less than 0 (that is, the birthday month) or when the month is 0 but the day is less than the birthday day then the age is decreased by 1
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age; // then we return the age
}

// we have created an event listener such that when the button (btnEl) is clicked, teh function calculateAge is called
btnEl.addEventListener("click", calculateAge) 
