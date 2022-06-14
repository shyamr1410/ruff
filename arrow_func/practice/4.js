let x=parseInt(prompt("enter the weigth in kgs"));
let res=(x)=>{
    let wtlbs=2.2*x;
    if(wtlbs>150)
    return "obese";
    else
    if(wtlbs<100)
    return "underweight";
    else
    return("you are ok")
}
alert("results:"+res(x));