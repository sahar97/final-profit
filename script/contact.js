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
    var element=event.target;
var elementId =event.target.id;

    if ((element.value.match(fields_validations.elementId))) {

        elementId.classList.add('invalid')

    }
else {
    elementId.classList.remove('invalid')
}
}

