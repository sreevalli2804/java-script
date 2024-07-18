let arr=['rock','paper','scissor']
rand_idx=Math.floor(3*Math.random()+1)
let ans=arr[rand_idx]
let user = prompt("enter rock, paper or scissor?")
user.toLowerCase()
if(user == ans)
    {
        alert("tie")
    }
    else if(user == "rock" && ans=="paper")
    {
        alert("loose")
    }
    else if(user == "paper" && user == "scissor")
        {
            alert("loose")
        }
        else if(user == "scissor" && user == "rock")
            {
                alert("loose")
            }
    else{
        alert("win")
    }
