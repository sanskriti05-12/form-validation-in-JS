let submitt=()=>{
    let name=document.querySelector("#name").value;
    let email =document.querySelector("#email").value;
    let pass=document.querySelector("#password").value;
    let conformpass=document.querySelector("#conformpass").value;
    let mobil=document.querySelector("#mobil").value;


    let errname=document.querySelector("#errorname")
    let erremail=document.querySelector("#errorid")
    let errnpass=document.querySelector("#errorpassword")
    let errcpass=document.querySelector("#errorcpass")
    let errmobil=document.querySelector("#errormobilno")


    if(name===""){
        errorname.innerHTML="please fill your name";
        errorname.style.color="red";
        return false;
    }
    else if(email===""){
        errorid.innerHTML="please fill your email";
        errorid.style.color="red";
        return false;
    }


    else if(password===""){
        errorpassword.innerHTML="please fill your password";
        errorpassword.style.color="red";
        return false;
    }

     else if(conformpass===""){
        errorcpass.innerHTML="please fill your congormpassword";
        errorcpass.style.color="red";
        return false;
    }


    else if(mobil===""){
        errormobilno.innerHTML="please fill your mobil no.";
        errormobilno.style.color="red";
        return false;
    }

    else if(isNaN(mobil)){
        errormobilno.innerHTML="!please put an correct no.";
        errormobilno.style.color="red";
        return false;
    }


    
    else if(mobil.length!==10){
        errormobilno.innerHTML="enter 10 digit no";
        errormobilno.style.color="red";
        return false;
    }
    else if(!(email.includes('@')&& email.includes('.com'))){
        errorid.innerHTML="!please put an correct gmail.";
        errorid.style.color="red";
        return false;

    }
    else if (password!=conformpass){
        errcpass.innerHTML="conform pass is not match";
        errorcpass.style.color="red";
        return false;
    }

    else if (!(pass.match(/[1234567890]/)&& 
    pass.match(/[!@#$%^&*]/)&&
     pass.match(/[a-z]/))){
        errcpass.innerHTML="please chouse a strong password";
     }
return false;

}
