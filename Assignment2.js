function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
  
  
  }
  function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
  
  }
  
  function validateForm(){
    var returnval = true;
    clearErrors();
  
    //perform validation and if validation fails, set the value of returnval to false
    var var1 = false;
    var name = document.forms['myForm']["fname"].value;
    if (name.length<8 || name.length>18){
        seterror("name", "*Length of name is should be between 8 to 18 charcters");
        return returnval = false;
    }
    
  
    
    var inputElems = document.getElementsByTagName("input"),
    count = 0;
    for (var i=0; i<inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
        count++;
        
    }
}

if(count<2){
    alert("choose at least 2 hobby")
    return returnval = false;
}
    
  
  
  
   
    
  
   
  
   
   
    
  if(returnval == true){
    alert("welcome")
  }
    
    return returnval;
  }
  
  

























