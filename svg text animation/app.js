let  logo = document.querySelectorAll("#logo path");
let delay = 0;
logo.forEach(function(i){
    // console.log(i);
    i.style.strokeDasharray = i.getTotalLength()+"px";
    i.style.strokeDashoffset = i.getTotalLength()+"px";
    i.style.animation = `line-anim 2s ease forwards ${delay}s`;
    console.log(delay);
    delay = delay + 0.3;
});