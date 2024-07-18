let num=Math.floor(100*Math.random()+1)
let ans=0;
while(ans!=num)
{
    ans=prompt("enter the guess")
    if(ans>num)
    {
        alert("enter a smaller number")
    }
    else if(ans<num)
    {
        alert("enter a higher number")
    }
    else
    {
        alert("correct guess")
        break
    }
}