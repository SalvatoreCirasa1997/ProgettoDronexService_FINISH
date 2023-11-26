//controllo errori del nome
function checkNome(event){
    const nome = event.currentTarget.value;
    const dim_nome = nome.length;
    if(dim_nome > 2){
        errore.classList.add('hidden');
        const span = document.querySelector('.nome_utente span');
        span.classList.remove('error');
        span.textContent="";}   

    if(dim_nome < 2 && dim_nome != 0){
        errore.classList.remove('hidden');
        const span = document.querySelector('.nome_utente span');
        span.classList.add('error');
        span.textContent="Nome inserito troppo corto (min 3)";
        event.preventDefault();}

    if(dim_nome == 0){
        errore.classList.remove('hidden');
        const span = document.querySelector('.nome_utente span');
        span.classList.add('error');
        span.textContent="Nome non inserito";
        event.preventDefault();}
    
    if(dim_nome > 15){
        errore.classList.remove('hidden');
        const span = document.querySelector('.nome_utente span');
        span.classList.add('error');
        span.textContent="Nome inserito troppo lungo (max 15)";
        event.preventDefault();}  
}

//controllo errori del cognome
function checkCognome(event){
    const cognome = event.currentTarget.value; 
    const dim_cognome = cognome.length;
    if(dim_cognome > 2){
        errore.classList.add('hidden');
        const span = document.querySelector('.cognome_utente span');
        span.classList.remove('error');
        span.textContent="";}
    
    else{
        errore.classList.remove('hidden');
        const span = document.querySelector('.cognome_utente span');
        span.classList.add('error');
        span.textContent="Cognome inserito troppo corto (min 3)";
        event.preventDefault();}
    
    if(dim_cognome > 15){
        errore.classList.remove('hidden');
        const span = document.querySelector('.cognome_utente span');
        span.classList.add('error');
        span.textContent="cognome inserito troppo lungo (max 15)";
        event.preventDefault();}

    if(dim_cognome==0){
        errore.classList.remove('hidden');
        const span = document.querySelector('.cognome_utente span');
        span.classList.add('error');
        span.textContent="Cognome non inserito";
        event.preventDefault();}  
}

//controllo errori dell'username
function checkUsername(event){
    const username = event.currentTarget.value; 
    const regex = /^[a-zA-z0-9_]{5,15}$/;
    if(!regex.test(username)){
        const span = document.querySelector('.username span');
        span.classList.add('error');
        span.textContent="Username non inserito (min 5 , max 15)";
        formStatus.username=false;
        event.preventDefault();}
    else{
        fetch("check_username.php?q="+encodeURIComponent(username)).then(fetchresponse).then(JsonCheckUsername);} //verifica username gia' presente nel DB.
    }

//controllo errori dell'email
function checkEmail(event){
    const e_mail = event.currentTarget.value; 
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(e_mail)){
        const span = document.querySelector('.e_mail span');
        span.classList.remove('okay');
        span.classList.add('error');
        span.textContent="Email inserita non valida o assente";
        event.preventDefault();}
    else{
        fetch("check_email.php?q="+encodeURIComponent(e_mail)).then(fetchresponse).then(JsonCheckEmail);} //verifica e_mail già presente nel DB.
}

//controllo errori della password
function checkPassword(event){
    const password = event.currentTarget.value; 
    const dim_pass = password.length;
    if(dim_pass > 5){
        errore.classList.add('hidden');
        const span = document.querySelector('.password span');
        span.textContent="";}

    if(dim_pass < 5 && dim_pass != 0){
        errore.classList.remove('hidden');
        const span = document.querySelector('.password span');
        span.classList.add('error');
        span.textContent="Password inserita non valida (min 6)";
        event.preventDefault();}

    if(dim_pass==0){
        errore.classList.remove('hidden');
        const span = document.querySelector('.password span');
        span.classList.add('error');
        span.textContent="Password non inserita";
        event.preventDefault();}
    
    if(dim_pass > 15){
        errore.classList.remove('hidden');
        const span = document.querySelector('.password span');
        span.classList.add('error');
        span.textContent="Password inserita troppo lunga (max 15)";
        event.preventDefault();}
}


function JsonCheckUsername(json){
    //controllo il campo exists ritornato dal php in formato json
    if(username = !json.exists){ //Se exists è falsa username disponibile
       const span = document.querySelector('.username span');
       span.classList.add('okay');
       span.textContent="Username disponibile";}
    else{
        //username già in uso
       const span = document.querySelector('.username span');
       span.classList.remove('okay');
       span.classList.add('error');
       span.textContent="Username già utilizzato da un'altro utente";
    }
}

function JsonCheckEmail(json){
    //controllo il campo exists ritornato dal php in formato json
    if(e_mail = !json.exists){ //Se exists è falsa
        //e_mail disponibile
       const span = document.querySelector('.e_mail span');
       span.classList.add('okay');
       span.textContent="E-mail disponibile";
    }
    else{
        //e_mail già in uso
       const span = document.querySelector('.e_mail span');
       span.classList.add('error');
       span.textContent="E-mail già utilizzata da un'altro utente";
    }
}

function fetchresponse(response){
    if(!response.ok) return null;
    return response.json();
}



const errore = document.querySelector('.errore');
document.querySelector('.nome_utente input').addEventListener('blur',checkNome);
document.querySelector('.cognome_utente input').addEventListener('blur',checkCognome);
document.querySelector('.username input').addEventListener('blur',checkUsername);
document.querySelector('.password input').addEventListener('blur',checkPassword);
document.querySelector('.e_mail input').addEventListener('blur',checkEmail);

if(document.querySelector('.error')!==null){
    checkUsername(); checkPassword(); checkCognome(); checkEmail(); checkNome();
    document.querySelector('.nome_utente input').dispatchEvent(new Event('blur'));
    document.querySelector('.username input').dispatchEvent(new Event ('blur'));
}