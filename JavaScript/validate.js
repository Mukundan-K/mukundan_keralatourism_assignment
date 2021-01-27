// for login page validation
// function validatelog()
// {
    
//     email = document.getElementById("emailInput");
//     pass = document.getElementById("passwordInput");
//     if(email.value==""||pass.value=="")
//     {
//         alert("fiels should not be empty");        
//         return false;
//     }
//     else
//     {
//         return true;
//     }
// }

function validatelogin() 
{
    var email, emailerror, pass, passerror;
    email = document.getElementById("emailInput");
    emailerror = document.getElementById("mailerror");
    pass = document.getElementById("passwordInput");
    passerror = document.getElementById("passworderror");
    if(email.value==""||pass.value=="")
    {
        alert("Must enter Email & Password");        
        return false;
    }
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
    {
        emailerror.classList.remove("display");
        emailerror.classList.add("hide");
        email.style.border="2px solid white";
        return true;
    }
    else
    {
        emailerror.classList.remove("hide");
        emailerror.classList.add("display");
        email.style.border="2px solid red";
    }  
}

//   for sign up page
function validatesignup()
{
    var email, emailerror, pass, passerror, weak, medium, strong, phone, phoneerror;
    email = document.getElementById("emailInput");
    emailerror = document.getElementById("mailerror");
    pass = document.getElementById("passwordInput");
    passerror = document.getElementById("passworderror");
    phone = document.getElementById("inputph");
    phoneerror = document.getElementById("phoneerror");
    weak = document.getElementById("weak");
    strong = document.getElementById("strong");
    medium = document.getElementById("medium");

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
    {
        emailerror.classList.remove("display");
        emailerror.classList.add("hide");
        email.style.border="2px solid white";

    }
    else
    {
        emailerror.classList.remove("hide");
        emailerror.classList.add("display");
        email.style.border="2px solid red";
    }

    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(pass.value))
    {
        passerror.classList.remove("display");
        passerror.classList.add("hide");
        pass.style.border="2px solid white";

        if(pass.value.length < 10)
        {
            console.log('haiiii')
            weak.classList.add('display');
            weak.classList.remove("hide");
            medium.classList.remove("display");
            strong.classList.remove("display");
            pass.style.border="2px solid red";
        }
        else if (pass.value.length < 12)
        {
            medium.classList.add('display');
            medium.classList.remove("hide");
            strong.classList.remove("display");
            weak.classList.remove("display");
            pass.style.border="2px solid yellow";
        }
        else
        {
            strong.classList.add('display');
            strong.classList.remove("hide");
            weak.classList.remove("display");
            medium.classList.remove("display");
            pass.style.border="2px solid green";
        }

    } 
    else 
    {
        passerror.classList.remove("hide");
        passerror.classList.add("display");
        pass.style.border="2px solid red";
    }    

    if (/^\d{10}$/.test(phone.value)) 
    {
        phoneerror.classList.remove("display");
        phoneerror.classList.add("hide");
        phone.style.border="2px solid white";
    } else {
        phoneerror.classList.remove("hide");
        phoneerror.classList.add("display");
        phone.style.border="2px solid red";
    }
}