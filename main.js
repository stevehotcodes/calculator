
window.addEventListener('load',()=>{
    const form=document.querySelector("#new-input-form");
    const input=document.querySelector(".number-input");
    const output=document.querySelector(".output-display");
    const submit=document.querySelector(".enter")
    console.log(form);

    const results=document.querySelector(".results")

    //capturing users input and verifying if it is of type number
     const numberInput=input.value;
     
     //verify that it is a number
      if((!isNaN(parseFloat(numberInput))&&isFinite(numberInput))){
        return "Only numbers are allowed as inputs. Please input a number only"
      }

    //display output
 

    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        e.stopPropagation() 
        const numberInput=document.querySelector(".number-input")
        // console.log(numberInput.value)
         console.log(document.querySelector('.output-display').innerText=numberInput.value);
         numberInput.value=" "
         const inputValue=document.createElement("p")
        inputValue.innerText=numberInput.value;

        //  let outputArray=[]
        //  outputArray.push(numberInput.value)

         
         
        
    })
    
    




})