var idInput,passwordInput,id,sifre,login;

$(document).ready(function(){
    idInput = document.querySelector('#id');
    passwordInput = document.querySelector("#password");
    login = document.querySelector("#login");
});

function loginFunc() {
    id = idInput.value;
    sifre = passwordInput.value;
    /* IF */
    if(id == "umut" && sifre == "123")
    /* Giriş Başarılıysa */{window.alert('Giriş Başarılı');}else
    /* Giriş Hatalıysa */{window.alert('Hatalı Kullanıcı Adı veya Şifre');}
    /* END_IF */
}