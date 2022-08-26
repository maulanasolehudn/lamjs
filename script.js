let container = document.getElementById('container');
for (let i = 0; i < 100; i++) {
    let colorbohlam = ""
    if (i % 2 == 0){
        colorbohlam = "green"
    }else{
        colorbohlam = "blue"
    }
    container.innerHTML += `<div class="bohlam" id="bohlam` + i + `">
        <div class= "btnToggle circle ${colorbohlam}"></div>
        <button class="button circle" data-index="`+ i + `"></button> </div>`
}

function toggleLight(index) {
    let beralih = document.getElementById('bohlam' + index).querySelector('.btnToggle');
    beralih.classList.toggle('on')
}




container.addEventListener('click', function (event) {
    if (event.target.classList.contains('button')) {
        let index = event.target.attributes['data-index'].value
        toggleLight(index)
    }
});
