function checkDone() {
    let signupbottun = document.querySelector("#signup");
    let emailinp = document.querySelector("#email");
    let phoneinp = document.querySelector("#mobile");
    let passinp = document.querySelector("#password1");
    let chagree = document.querySelector("#chAgree");
    let nameInput = document.querySelector("#name");
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    const phonePattern = /^077\d{7}$/;
    const namePattern = /(\w|\s|[\.\'-])+/ ;
  
    if (
      emailPattern.test(emailinp.value) &&
      phonePattern.test(phoneinp.value) &&
      namePattern.test(nameInput.value)&&
      passwordPattern.test(passinp.value) &&
      chagree.checked
    ) {
      console.log("good");
      document.querySelector("#alert1").style.display = "none";
      document.querySelector("#alert2").style.display = "none";
      document.querySelector("#alert3").style.display = "none";
      signupbottun.removeAttribute("disabled");
    } else {
      signupbottun.setAttribute("disabled", "true");
    }
  }
  
  function passwordCorrect() {
    let passwordInput = document. querySelector ("#password");
    let errorMessage = document. querySelector ("#errPass");
    const capitalletterPattern = / [A-Z]/;
    const lowerLetterPattern = /[a-z]/;
    const numberPattern = /\d/;
    const symbolPattern = /[1@#$%^&*(,?":}|«>]/;

    if (passwordInput.value.length < 8) {
    errorMessage.textContent = "Password must be 8 characters long";
} else if (!capitalletterPattern.test(passwordInput.value)) {
    errorMessage. textContent = "Password must capital letter";
}
else if (!lowerLetterPattern.test(passwordInput.value)) {
    errorMessage. textContent = "Password must contain a lower letter";
    } 
    
    else if (!numberPattern.test(passwordInput.value)) {
        errorMessage. textContent = "Password must contain a number";
    }
     else if (!symbolPattern.test(passwordInput.value)) {
        errorMessage. textContent = "Password must contain a special character";
    }else{
        errorMessage.textContent="";
    }
    }

    localStorage.clear();
    document.querySelector("#signup").addEventListener("click", function () {
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#mobile").value;
        let name = document.querySelector("#name").value;
        let password = document.querySelector("#password1").value;
        
        // إنشاء معرف فريد باستخدام التاريخ والوقت الحاليين
        let id = new Date().getTime();
        
        // إنشاء اوبجكت يحتوي على البيانات المدخلة ومعرّف
        let user = {
            id: id,
            name: name,
            email: email,
            phone: phone,
            password: password
        };
        
        // تحويل الاوبجكت إلى JSON
        let userJSON = JSON.stringify(user);
        
        
        // تخزين الـ JSON في localStorage
        localStorage.setItem("user", userJSON);
        
        alert("Account created successfully!");
        
        // الانتقال إلى صفحة تسجيل الدخول
        window.location.href = "login.html";
    });
    
