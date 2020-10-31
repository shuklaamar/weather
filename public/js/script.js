//const { response } = require("express")

const weather = document.querySelector('form')
const search = document.querySelector('input')
weather.addEventListener('submit',(e)=>{
    e.preventDefault()
    document.getElementById('message1').textContent="loading"
    document.getElementById('message2').textContent="..."
    fetch('/weather?address='+search.value).then((response) => {
    response.json().then((data) => {
        if(data.error){
            document.getElementById('message1').textContent="please provide a correct location"
            document.getElementById('message2').textContent="^_^"
        }
        else{
            document.getElementById("message1").textContent=data.forecast
            document.getElementById("message2").textContent=data.location
        }
    }
    )
}
)
}
)