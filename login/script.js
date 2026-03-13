function login(){

    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    
    if(email === "admin@rentfood.com" && senha === "1234"){
    
        window.location.href = "index.html"
    
    }else{
    
        document.getElementById("erro").innerText = "Email ou senha incorretos"
    
    }
    
    }