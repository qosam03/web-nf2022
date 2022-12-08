function login (){
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(uname == "qosam03" && pass == "gemoy"){
        location.replace("success.html");
        alert("login berhasil!");
    }else{
        alert("login gagal");
    }
}
