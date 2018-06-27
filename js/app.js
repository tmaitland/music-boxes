//Create variables at the top
var keys = document.querySelectorAll(".key")
var notes = {
    ckey: document.querySelector("#cAudio"),
    dkey: document.querySelector("#dAudio"),
    ekey: document.querySelector("#eAudio"),
    fkey: document.querySelector("#fAudio"),
    gkey: document.querySelector("#gAudio"),
    akey: document.querySelector("#aAudio"),
    bkey: document.querySelector("#bAudio")
}

//Define functions in the middle
function playNote(key){
    console.log(key)
    notes[key].currentTime = 0
    notes[key].play()
}



//Call funtions and/or add Event Listeners
keys.forEach(function(key){
    key.addEventListener("click", function(){
        playNote(key.id)
    })
})

document.addEventListener('keydown', function(event){
    // console.log(event)
    if(event.key == "a"){
        playNote("ckey")
    }
    if(event.key == "s"){
        playNote("dkey")
    }
    if(event.key == "d"){
        playNote("ekey")
    }
    if(event.key == "f"){
        playNote("fkey")
    }
    if(event.key == "g"){
        playNote("gkey")
    }
    if(event.key == "h"){
        playNote("akey")
    }
    if(event.key == "j"){
        playNote("bkey")
    }
})