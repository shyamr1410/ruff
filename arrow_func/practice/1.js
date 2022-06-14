let x=parseInt(prompt("enter the no. of elements"));
let a=new Array(5);
for(let i=0;i<x;i++)
{
    a[i]=parseInt(prompt("enter the"+i+1+"th item"));
  
}
let res=(a,x)=>{
    let sum=0;
    for(let i=0;i<x;i++){
        sum=sum+a[i];
    }
    return sum/x;
}
alert(res(a,x));