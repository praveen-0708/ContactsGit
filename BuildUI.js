const app = document.getElementById('root')
function build(data){
    for(var i=0;i<6;i++){
        var fname=data[i].name.first;
        var lname=data[i].name.last;
        var em=data[i].email;
        var iurl=data[i].picture.large;
        addElem(fname,lname,em,iurl);
    }
}

function addElem(firstname,lastname,email,img_url){
    const card=document.createElement('div')
    card.setAttribute('class','card')

    const details=document.createElement('div')
    details.setAttribute('class','container')
    
    if(img_url){
        image=document.createElement('img')
        image.src=img_url;      
        image.setAttribute('class','img')
        card.appendChild(image);
    }
    else{
        imageNA=document.createElement('div')
        imageNA.textContent=firstname[0].toUpperCase()+lastname[0].toUpperCase();
        imageNA.setAttribute('class','profileImage')
        details.appendChild(imageNA);
        
    }
    const h4 = document.createElement('h4')
    h4.textContent = firstname+' '+lastname;
    
    const p = document.createElement('p')
    p.textContent = email;
 
    details.appendChild(h4);
    details.appendChild(p);
    card.appendChild(details);

    app.appendChild(card);
}