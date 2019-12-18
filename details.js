
function load(callback) {
    var request = new XMLHttpRequest()
    //url = 'https://reqres.in/api/users?page=' + x
    url='https://randomuser.me/api/?results=100'
    request.open('GET', url, true)
    console.log(url)
    request.onload = function () {
        callback();
        var data = JSON.parse(this.response);
        var data2=data["results"];
        console.log(data2.length);
        build(data2);   
        
    }
    request.send()
}

function mycallback() {
    document.getElementById("loader").style.visibility="hidden";
    
}

window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        document.getElementById("loader").style.visibility="visible";
        load(mycallback);
    }
};
