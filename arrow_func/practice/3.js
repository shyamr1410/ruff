let x=parseInt(prompt("enter the no. of elements"));
let a=new Array(x);
for(let i=0;i<x;i++)
{
    a[i]=parseInt(prompt("enter the"+i+1+"th item"));
  
}
let res=(a,x)=>{
    
    return (a.map(num=>num*10));
}
alert("new elements"+res(a,x));