let getButtons=document.querySelectorAll('.btn')
getButtons.forEach(function(btn){
    btn.addEventListener('click',function(event){
        buttonClick(event.target.innerText);
    })
})



function buttonClick(value){
    document.getElementById('text1').innerHTML=value;
}