

  const maleAkan = ["Kwasi","Kwadwo","Kwabena","Kwaku","yaw","kofi","kwame"];

  const femaleAkan =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const btn = document.getElementById("btn");
  
  
  btn.addEventListener("click", function (event) {
      event.preventDefault();
      const date = document.getElementById("date");
      const gender = document.querySelector("input[type = 'radio']:checked");
      const name = document.getElementById("name");
      

      console.log(date);
      let userDate = date.value;
      let New = new Date(userDate);
      let Day =  New.getDay();
    // console.log(Day);

    if(gender.value === "female"){
        name.innerHTML = femaleAkan[Day];
        // alert(femaleAkan[Day]);
    }
    if(gender.value === "male"){
        name.innerHTML = maleAkan[Day];
        // alert(maleAkan[Day]);
    }

    });