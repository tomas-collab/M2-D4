

function addPerson(){
let ul = document.getElementById("dynamic-list")
let candidate = document.getElementById('candidate')
let li = document.createElement("li")
li.setAttribute('id',candidate.value)
li.appendChild(document.createTextNode(candidate.value))
ul.appendChild(li)
}



function removePerson(){
let ul = document.getElementById("dynamic-list")
let candidate = document.getElementById('candidate')
let item = document.getElementById(candidate.value)
ul.removeChild(item)
    
}


function assignTeam(){
    let randomize = addPerson()

    for(let random of randomize){

        random = Math.floor(Math.random()*randomize.length)
       
        document.getElementById('list').innerHTML= randomize.splice([random],2)
     }
}













