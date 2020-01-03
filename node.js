function validations()
{
  var name=document.getElementById("Name");
  var password=document.getElementById("Password");
  var numericExpression = /^[A-Za-z]+$/;
  var special=/^[W]+$/
   if (name.value =="")                                  
    { 
       alert("Please enter your name."); 
        
        return false; 
    }
    if (name.value.match(numericExpression))
    {
        true;
    }
      else{
        alert("Name Cannot Contain Numeric Values and Special Characters");
        name.focus();
        return false;
    }
  if(password.value=="")
    {
        alert("Password Field cannot be empty");
        return false;
    }
    else{
        alert("Data submitted successfully.....");
        return ;
    }

}
