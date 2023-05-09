let burger = document.getElementById('burger');
burger.onclick = function(){
    console.log('burger');
    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    burger.classList.toggle('active');
}