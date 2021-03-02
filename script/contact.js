const fields_validations = {
    'first_name' : /^[a-zA-Z ]{2,30}$/,
    'last_name' : /^[a-zA-Z ]{2,30}$/,
     'comName' :/^[0-9a-zA-Z]+$/,
     'job' :/^[0-9a-zA-Z]+$/,
     'email' :/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
     'numb' :/[0][0-9]{9}/,
     'comWeb' : /https?:\/\/[^\s]/,
    }

function validate (event){
    element=event.target;
       elementId=event.target.id;
    var elementVal =event.target.value;

alert("id :" + elementId);
alert("value : " + elementVal);
alert(fields_validations[elementId]);

if (!(elementVal.match(fields_validations[elementId]))) {
alert("false");
document.getElementById(elementId).classList.add('invalid');

}
else {
    document.getElementById(elementId).classList.remove('invalid');
}

}

