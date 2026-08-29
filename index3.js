// console.log("hello world34545")
let randomnumber=Math.floor(Math.random()*100)
const guess=document.querySelector('.guess')
const output=document.querySelector(".output")
const button=document.querySelector('.btn')

button.addEventListener('click', function(){
    let input=document.querySelector('.number').value
        if(input==randomnumber){
        output.textContent=`YESS YOU ARE WINNERR...${input}`
        }else if(input>randomnumber){
            output.textContent=`OOPS... YOUR GUESS IS TOO HIGH ${input}`
        }if (input<randomnumber){
            output.textContent=`OOPS... YOUR GUESS IS TOO LOW ${input}`
        } 
})
