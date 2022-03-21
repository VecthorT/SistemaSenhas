var botaoPreferencial = document.querySelector("#btn-pref")
var botaoComum = document.querySelector("#btn-com")
var senhaPref = 0
var senhaComum = 0

botaoPreferencial.addEventListener('click', function(){
    document.cookie = `${senhaPref+1}:${senhaComum}`
    cookie = document.cookie
    alert(cookie)
})