const button = document.querySelector(".button")
let inputEl = document.querySelector(".input-el")
let name = document.querySelector(".name")
let desc = document.querySelector(".desc")
let temp = document.querySelector(".temp")

button.addEventListener("click", function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value}&appid=c76c4f0d596f0c5e1a7e910003cdf6ba`)
    .then(response=>response.json())
    .then(data=>{
        let nameValue = data.name
        let tempValue = data.main.temp
        let descValue = data["weather"][0]["description"]
        name.innerHTML = nameValue
        temp.innerHTML = `temp: ${tempValue}`
        desc.innerHTML = descValue
    })
    .catch(err=>alert("Wrong city name"))
})




















