var enrollstudent=document.getElementById('enrollstudent')
enrollstudent.addEventListener("click",onFormSubmit);
function onFormSubmit(){
    if(validate()){
        var formData=readFormData();
        insertNewRecord(formData);
        resetForm();
    }
   
    
}
//to read the form data
function readFormData(){
    formData={};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["website"] = document.getElementById("website").value;
    formData["imagelink"] = document.getElementById("imagelink").value;

    
    if(document.getElementById('male').checked){
         formData["gender"]=document.getElementById('male').value;
    }else if(document.getElementById('female').checked){
        console.log("female")
        formData["gender"]=document.getElementById('female').value;
    }else{
        formData["gender"]=" ";
    }
  
   
    var res=" ";   
    if (document.getElementById("skill1").checked){  
    
        var pl1= document.getElementById("skill1").value ;  
        res = pl1 + ",";   
    }   
    if (document.getElementById("skill2").checked){  
  
        var pl2 = document.getElementById("skill2").value;  
        res = res + pl2 + ",";   
    }  
    if (document.getElementById("skill3").checked){  
      
        var pl3 = document.getElementById("skill3").value;  
        res = res + pl3+",";   
    } 
    res=res.slice(0,-1);
    console.log(res);
    formData["skill"]=res; 
   
    
    return formData;
} 

// To insert a new row in a table 
function insertNewRecord(data){
    var display =document.getElementById("display").getElementsByTagName('tbody')[0];
    var newRow=display.insertRow(display.length);
    

    cell1=newRow.insertCell(0);
    
    
    cell1.innerText=data.name+ "\n"+data.gender+"\n" +data.email +"\n"+data.skill+"\n";
 

    cell1.innerHTML+='<a href="'+data.website+'">'+data.website+'</a>';
    
    cell2=newRow.insertCell(1);
    cell2.innerHTML='<img src="'+data.imagelink+'" width=\"130px\"  height=\"100px\"/>';
    
}

//Validate function if the name,email these fields are present or not
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "" ||
        document.getElementById("email").value == "" ||
        document.getElementById("website").value == "" ||
        (document.getElementById("male").checked ==false && document.getElementById("female").checked ==false )||
        (document.getElementById("skill1").checked == false  && document.getElementById("skill2").checked == false &&
        document.getElementById("skill3").checked == false)){
        isValid = false;
        window.alert("Fill all the fields");
    }
    else {
        isValid = true;
    }
    return isValid;
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("website").value = "";
    document.getElementById("imagelink").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("skill1").checked = false;
    document.getElementById("skill2").checked= false;
    document.getElementById("skill3").checked = false;

    selectedRow = null;
}
//function To clear all the rows
function removeAll() {
    for(var i = document.getElementById("display").rows.length; i > 1;i--)
    {
            document.getElementById("display").deleteRow(i -1);
    }
}