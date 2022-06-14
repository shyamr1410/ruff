let x=parseInt(prompt("enter the no. of elements"));
let a=new Array(x);
for(let i=0;i<x;i++)
{
    a[i]=parseInt(prompt("enter the"+i+1+"th item"));
  
}
let res=(a,x)=>{
    let sum=0;
    for(let i=0;i<x;i++){
        if(a[i]%2==0)
        sum=sum+a[i];
    }
    return sum
}
alert("sum of even no."+res(a,x));