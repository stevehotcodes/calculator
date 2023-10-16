// window.addEventListener('load',(e)=>{
// e.preventDefault()

// const display=document.querySelector("#screen");
// const ac=document.querySelector("#ac");
// const del=document.querySelector("#delete");
// const equals=document.querySelector("#equal");
// const number_btns=document.querySelectorAll(".number-btn");
// const operators=document.querySelectorAll(".operators")


// //number buttons functionality
// number_btns.forEach(button=>{
//     button.addEventListener('click',(e)=>{
//         e.preventDefault();
//         e.stopPropagation()
    
//         display.value += button.value
       
//     })
// })
// //equals  button functionality
// equals.addEventListener('click',(e)=>{
//     e.preventDefault();
    
//     try {
//         display.value= eval(display.value)
//     } catch (error) {
//         console.error("Invalid error:",error)
//         display.style.backgroundColor="red"
//         display.value ="Invalid expression"
//         // display.value=" "
//         location.reload()
//     }
    
    
// })

// //ac functionality
// ac.addEventListener('click',(e)=>{
//     e.preventDefault()

//     display.value = " "
// })

// //delete button functionality

// del.addEventListener('click',(e)=>{
//      e.preventDefault()

//     display.value=display.value.toString().slice(0,-1);
// })

// //operators functionality

// operators.forEach(operator=>{
//     operator.addEventListener('click',(e)=>{
//         e.preventDefault()
        
//         display.value +=operator.value
//     })
// })



// })

//oop implementation

