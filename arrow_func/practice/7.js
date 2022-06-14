
let res=(x)=>{
    let n=x;
    let count=0;
    while(n!=0)
    {
     count=count+1;
     n=parseInt(n/10); 
    }
    n=x;
    let sum=0;
    while(n!=0)
    {
        sum=sum+parseInt(Math.pow(n%10,count));
        count=count-1;
        n=parseInt(n/10);
    }

    return sum;
}
for(let i=0;i<=100;i++)
if(i==res(i)){
    console.log(i);
}