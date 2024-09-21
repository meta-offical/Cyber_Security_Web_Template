const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 20;

counterNum.forEach((curElem) => {
    const updateNumber = ()=>{

        const targetNumber= parseInt(curElem.dataset.number);

        const initialNum =parseInt(curElem.innerText);
        
         const incrementNumber= Math.trunc(targetNumber/speed);
         console.log(incrementNumber);

         if(initialNum <targetNumber){
            curElem.innerText= `${initialNum + incrementNumber}+`;

            setTimeout(updateNumber,40);
         }
    }

    updateNumber();

})