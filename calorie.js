const calories = document.querySelector(".cal-calculator .resoult .calories");
const resoult = document.querySelector(".cal-calculator .resoult .resoult-message");
const submit = document.querySelector(".cal-calculator .resoult .cal-btn");
const age = document.querySelector(".cal-calculator form #age");
const height = document.querySelector(".cal-calculator form #height");
const weight = document.querySelector(".cal-calculator form #weight");
const error_msg = document.querySelector(".cal-calculator .resoult .error_message");

// Man = 10*weight + 6.25*height - 5*age + 5
// Woman = 10*weight + 6.25*height - 5*age - 161

const calculate_cal = (weight,height,age,gender,work) =>{
    if (gender == "male"){
        if(work == "1"){
            return (10*weight + 6.25*height - 5*age + 5) * 1.375;
        }else if(work == "2"){
            return (10*weight + 6.25*height - 5*age + 5) * 1.55;
        }else if(work == "3"){
            return (10*weight + 6.25*height - 5*age + 5) * 1.725;
        }else if(work == "0"){
            return (10*weight + 6.25*height - 5*age + 5);
        }
            
    }else{
        if(work == "1"){
            return (10*weight + 6.25*height - 5*age - 161) * 1.375;
        }else if(work == "2"){
            return (10*weight + 6.25*height - 5*age - 161) * 1.55;
        }else if(work == "3"){
            return (10*weight + 6.25*height - 5*age - 161) * 1.725;
        }else if(work == "0"){
            return (10*weight + 6.25*height - 5*age - 161);
        }
            
    }
};

submit.addEventListener("click",() => {

    if(age.classList.contains("invalid") || height.classList.contains("invalid") || weight.classList.contains("invalid")){
        error_msg.classList.add("active");
        resoult.classList.remove("visible");
        return;
    };


    let genderValue = document.querySelector(".cal-calculator form input[name='gender']:checked").value;
    let workValue = document.querySelector(".cal-calculator form select option[name='work']:checked").value;

    let BMR = calculate_cal(weight.value, height.value, age.value,genderValue,workValue);

    calories.innerHTML = BMR.toLocaleString("en-US");
    resoult.classList.add("visible");
    error_msg.classList.remove("active");
})

age.addEventListener("input", (e) => {
    let ageValue = e.target.value;

    if (!ageValue || isNaN(ageValue) || ageValue < 6 || ageValue > 100){
        age.classList.add("invalid");
    }else{
        age.classList.remove("invalid");
    }

});

height.addEventListener("input", (e) => {
    let heightValue = e.target.value;

    if (!heightValue || isNaN(heightValue) || heightValue < 0){
        height.classList.add("invalid");
    }else{
        height.classList.remove("invalid");
    }

});
weight.addEventListener("input", (e) => {
    let weightValue = e.target.value;

    if (!weightValue || isNaN(weightValue) || weightValue < 0){
        weight.classList.add("invalid");
    }else{
        weight.classList.remove("invalid");
    }

});
