class Calculator{
    constructor(){
     this.display=document.querySelector("#screen");
     this.ac=document.querySelector("#ac");
     this.del=document.querySelector("#delete");
     this.equals=document.querySelector("#equal");
     this.number_btns=document.querySelectorAll(".number-btn");
     this.operators=document.querySelectorAll(".operators")
        
     this.addEventListeners()
    }
    
    addEventListeners(){
        this.number_btns.forEach((button,e)=>{
            button.addEventListener('click',e=>this.addNumber(e,button.value))
        })

        this.equals.addEventListener('click',e=>this.evalExpression(e))

        this.ac.addEventListener('click',e=>this.allClear(e));
        this.del.addEventListener('click',e=>this.deleteNumber(e));
        this.operators.forEach((op,e)=>op.addEventListener('click',e=>this.operatorType(e,op.value)))
    }


    addNumber(event,number){
        event.preventDefault();
        this.display.value+=number
    }


    evalExpression(e){
        e.preventDefault()
        if(this.display.value !==""){
            try {
                this.display.value= eval(this.display.value)
            } catch (error) {
                console.error("Invalid error:",error)
                this.display.style.backgroundColor="red"
                this.display.value ="Invalid expression"
                // display.value=" "
                location.reload()
            }
        }
        else{
            return 
        }
        
    }
    allClear(event){
        if(event) event.preventDefault()
        this.display.value=""
    }
    deleteNumber(event){
        event.preventDefault();
        this.display.value=this.display.value.toString().slice(0,-1);
    }
    operatorType(event,sign){
        event.preventDefault();
        this.display.value +=sign;
    }

}

window.addEventListener('load',(e)=>{
    e.preventDefault();

    const calculator=new Calculator();


})