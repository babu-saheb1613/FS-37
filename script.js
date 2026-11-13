function data() {

let a = document.getElementById("n1").value
let b = document.getElementById("n2").value
let c = document.getElementById("n3").value
let d = document.getElementById("n4").value

if(a==="" ||b===""||c===""||d==="") {
    alert("enter your valid code")
    return false
}else if(b.length<10||b.length>10) {
    alert("enter your 10 digit number")
    return false
}else if(c != d) {
    alert(" enter as  same password")
    return false

}else if(isNaN(b)) {
    alert("enter the digital number")
    return false


}else{
    true
}
}