

  const maleAkan = ["Kwasi","Kwadwo","Kwabena","Kwaku","yaw","kofi","kwame"];

  const femaleAkan =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const btn = document.getElementById("btn");
  
  function formReset() {
    document.getElementById("myform").reset();
  }
  
  btn.addEventListener("click", function (event) {
      event.preventDefault();
      var date = document.getElementById("date").value;
      var gender = document.querySelector("input[type = 'radio']:checked");
      const name = document.getElementById("name");
      const user = document.getElementById("user");

      

      console.log(date);
      let New = new Date(date);
      let Day =  New.getDay();
    console.log(Day);
    
      if(date === ""){
         return  user.innerHTML = "choose your date of birth!";
      } else if(gender.value === "female"){
          name.innerHTML ="Your Akan Name is " + femaleAkan[Day];

        } else if(gender.value === "male"){
            name.innerHTML = "Your Akan Name is " + maleAkan[Day];
        }
        user.innerHTML = "";
        formReset();

    });