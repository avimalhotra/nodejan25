
document.querySelector(".api").addEventListener("click",function(){
    document.querySelector(".apidata").innerHTML="";
    fetch("/api").then(i=>i.json()).then(i=>{
        i.forEach(j=>document.querySelector(".apidata").innerHTML+=`<li>${j}</li>`)
    });
});


document.querySelector("#car").addEventListener("input",function(){
    const x=this.value.toLowerCase();
    document.querySelector(".carsdata").innerHTML=``

    fetch("/search",{method:"POST",body:JSON.stringify({car:x})})
    .then(i=>i.json())
    .then(i=>{
        console.log(i);
        
        if(i.length==0){
            document.querySelector(".err").innerHTML ="no car";
            document.querySelector(".carsdata").innerHTML=``;
        }
        else if(i.length>0){
            i.forEach(j=>{
                document.querySelector(".carsdata").innerHTML+=`<li>${j.name}</li>`;
            })
        }
        else{
            document.querySelector(".err").innerHTML ="no car";
        }
    })

})
