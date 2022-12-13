
    let x =document.getElementById("name").value
    let y =document.getElementById("nom").value
function Name(){
    if( x == "omar" || y == "Alice"){
        alert("hello "+ x)
        alert("hello "+ y)
    }
    else alert ("hello" + " stranger")

}
document.getElementById("click").onclick=function() {Name()}