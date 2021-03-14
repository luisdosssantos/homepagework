// Clock

setInterval(() => {
    let date = new Date();

    let years = date.getFullYear();
    let months = date.getUTCMonth() +1;
    let days = date.getUTCDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    document.getElementById('years').innerHTML = "/"+ years
    document.getElementById('months').innerHTML = months
    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = ":"+minutes
    document.getElementById('seconds').innerHTML = ":"+seconds

    if (years < 10){
        document.getElementById('years').innerHTML = "/" + "0" + years
    }
    if (months < 10){
        document.getElementById('months').innerHTML = "/" + "0"+ months
    }
    if (days < 10){
        document.getElementById('days').innerHTML = "/" + "0" + days
    }
    if (hours < 10){
    document.getElementById('hours').innerHTML = "0" + hours
    }
    if (minutes < 10){
        document.getElementById('minutes').innerHTML = ":"+ "0"+ minutes
    }
    if (seconds < 10){
        document.getElementById('seconds').innerHTML = ":" + "0" + seconds
    }    
}, 1000);

// Keys

window.addEventListener('keydown',(event)=>{
    if (event.key === 'l' ) {
        event.preventDefault();
        window.location.href ="https://www.linkedin.com/feed/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'd' ) {
        event.preventDefault();
        window.location.href ="https://www.deviantart.com/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'y' ) {
        event.preventDefault();
        window.location.href ="https://www.youtube.com/feed/subscriptions";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.ctrlKey && event.key === 'l' ) {
        event.preventDefault();
        window.location.href ="http://luissantos.duckdns.org/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.ctrlKey && event.key === 's' ) {
        event.preventDefault();
        window.location.href ="https://statcounter.com/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'g' ) {
        event.preventDefault();
        window.location.href ="https://github.com/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'c' ) {
        event.preventDefault();
        window.location.href ="https://codepen.io/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 's' ) {
        event.preventDefault();
        window.location.href ="https://stackoverflow.com/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'i' ) {
        event.preventDefault();
        window.location.href ="https://ianli.github.io/so-you-need-a-typeface/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.ctrlKey && event.key === 'd' ) {
        event.preventDefault();
        window.location.href ="https://www.dafont.com";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.shiftKey && event.key === 'c' ) {
        event.preventDefault();
        window.location.href ="https://coolors.co/generate";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'a' ) {
        event.preventDefault();
        window.location.href ="https://color.adobe.com/pt/create/color-wheel";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'f' ) {
        event.preventDefault();
        window.location.href ="https://fontawesome.com";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'w' ) {
        event.preventDefault();
        window.location.href ="https://wetransfer.com/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 't' ) {
        event.preventDefault();
        window.location.href ="https://tiiny.host/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'm' ) {
        event.preventDefault();
        window.location.href ="https://mega.nz/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'f' ) {
        event.preventDefault();
        window.location.href ="https://fontawesome.com";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.shiftKey && event.key === 'd' ) {
        event.preventDefault();
        window.location.href ="https://www.dropbox.com";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.shiftKey && event.key === 's' ) {
        event.preventDefault();
        window.location.href ="https://streamable.com/";
    }
})

window.addEventListener('keydown',(event)=>{
    if (event.key === 'i' ) {
        event.preventDefault();
        window.location.href ="https://imgur.com/";
    }
})