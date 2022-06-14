let myFunc=(a,b)=>{
    return a+""+b;
};

let a =prompt("enter 1st string");
let b=prompt("enter 2nd string");

alert(myFunc(a,b));

 let n=prompt(" enter th length of string u want");
 let x=prompt("input the no. of ele in array");
 var arr=new Array(x);
 for(let i=0;i<x;i++)
 {
     arr[i]=prompt("enter the "+i+"th"+"element");
 }
 var ans=new Array();
 
  
 let sol=(n,x)=>
 {  
    
     if(n<=0)
     {
         console.log(" enter a valid length");

     }
     else

    { for(let i=0;i<x;i++)
     {
        if(arr[i].length==n)
          {
             ans.push(arr[i]);
          }

     }}
     return ans;

 }
 alert(sol(n,x));
 