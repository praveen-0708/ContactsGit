
//var x = 1;
function load() {
    var request = new XMLHttpRequest()
    //url = 'https://reqres.in/api/users?page=' + x
    url='https://randomuser.me/api/?results=100'
    request.open('GET', url, true)
    console.log(url)
    request.onload = function () {
        var data = JSON.parse(this.response);
        var data2=data["results"];
        if(data2.length>0){
            build(data2);
        }
        else{   
            document.getElementById("btn").style.visibility = "hidden";
            alert("No Data")
        }
    }
    request.send()
    //x = x + 1;
}