
const {addElem}=require('./BuildUI');

beforeAll(()=>{
    addElem("abc","def","bgkjabcskjbsak","https://randomuser.me/api/portraits/men/52.jpg")
    
})

test('DOM setup',function(){
    var x=document.getElementById('header')    
    expect(x.innerHTML).toEqual('CONTACTS');  
})

test('checking card',function(){
    var x=document.getElementsByClassName('card')
    expect(x.length).toEqual(1);
})

test('Test Name',function(){
    var x=document.getElementById('nameId')
    expect(x).toBeTruthy();
    expect(x.innerHTML).toEqual("abc def")
})
test('Test Email',function(){
    var x=document.getElementById('emailId')
    expect(x).toBeTruthy();
    expect(x.innerHTML).toEqual("bgkjabcskjbsak")
})
test('Test Image',function(){
    var x=document.getElementsByClassName('img')
    expect(x).toBeTruthy();   
})





