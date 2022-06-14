let x=prompt("enter the string");
let fun1=(x)=>{
    let s=x.slice(1,x.length);
    if(x[0]>='a'&&x[0]<='z')
    {
      
     alert(x[0].toUpperCase()+s);
    }else
    alert(string.b+s)
}
alert(fun1(x));
let fun2=(x)=>{
    let z=prompt("enter the string to be inserted");
    let y=parseInt(prompt("enter the position "));
    let a=x.slice(0,y);
    let b=a.concat(z);
    let c=x.slice(y,x.length);
    let ans=b.concat(c);
    return ans;

}
alert(fun2(x));

let fun3=(x)=>
{
    for(let i=0;i<x.length;i++){
        if((x[i]>='a'&&x[i]<='z')||(x[i]>='A'&&x[i]<='Z'));
        else
        return "Not a string";

    }
    return "is a string";
}

alert(fun3(x));
let fun4=(x)=>
{let Arr=x.split(" ");
return Arr;
}
alert(fun4(x));