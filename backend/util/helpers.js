
function required(){
    throw new Error('Param is required');
}

function envVarRequired(envVarName){
    if( process.env[envVarName] == null ) 
        throw new Error(`Enviornment variable '${envVarName}' is required`);
}

module.exports = {
    required: required,
    envVarRequired: envVarRequired
}