

const interval = setInterval(()=>{
   
    const header = document.querySelector("._1QUKR")

    if(header){

        clearInterval(interval)

        const numberInput = document.createElement("INPUT")

        numberInput.setAttribute("type","number")
        numberInput.setAttribute("value","2")
        numberInput.setAttribute("min","0.1")
        numberInput.classList.add("number-input")

        const button = document.createElement("button")

        button.innerHTML = "Acelerar"
        button.classList.add("apply-button")

        button.addEventListener("click",()=>{

            const audios = document.querySelectorAll("audio")

            audios.forEach((audio) => {

                console.log(audios)
                audio.playbackRate = Number(numberInput.value);
            })

        })

        
        header.appendChild(numberInput)
        header.appendChild(button)
    }
},1000)


