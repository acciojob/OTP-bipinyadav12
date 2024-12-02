document.addEventListener('DOMContentLoaded',()=>{
	  document.getElementById("code-1").focus();
	 const inputs = document.querySelectorAll(".code"); 
	inputs.forEach((input,index)=>{
		input.addEventListener('input',(e)=>{
			const value=e.target.value;
			if (value){
				if(index<inputs.length-1){
					inputs[index+1].focus()
				}
			}
				
		})
		input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        if (!input.value && index > 0) {
          inputs[index - 1].focus();
        }
      }
    });
	})
	
}) 
.focused().should("have.id", "code-1");
