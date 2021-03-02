const fields_validations = {
    'first_name' : /^[a-zA-Z ]{2,30}$/,
    'last_name' : /^[a-zA-Z ]{2,30}$/,
    }

function validate (event){
    var element=event.target.id;
    console.log(element);
}
