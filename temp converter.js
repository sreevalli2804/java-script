let temp=prompt("enter the temperature")
let units=prompt("enter 1 if the units are celsius and 2 if fahrenhiet")
if(units == 1 )
{
    let ans = (temp * 9/5) + 32
    alert("the temperature in fahrenhiet is"+ ans)
}
else if(units == 2)
{
    let ans=  (temp - 32) * 5/94
    alert("the temperature in celsius is"+ ans)
}
else{
    alert("invalid units")
}