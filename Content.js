

const interval = setInterval(()=>{
   
    const header = document.querySelector("._1QUKR")

    if(header){

        console.log(header)
        clearInterval(interval)


        const button = document.createElement("button")

        button.innerHTML = "2x"
        button.classList.add("two-times-button")
        header.appendChild(button)
    }
},1000)


