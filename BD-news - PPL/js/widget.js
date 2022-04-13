/*WIDGET WINDOW*/
var button = document.querySelector('.button')
var inputValue = document.querySelector('.input_value')
var name = document.querySelector('.name');
var desc = document.querySelector('.dec');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e5dc7dc89014dbfffac2e3d3369b4493')

    .then(response => response.json())
    .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];;;

    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})
        
    
    .catch(err => alert("Wrong City Name!"))

})

/*
var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];;;
    
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
*/