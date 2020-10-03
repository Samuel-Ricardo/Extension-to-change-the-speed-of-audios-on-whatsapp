

const interval = setInterval(()=>{
   
    const header = document.querySelector("._1QUKR")

    if(header){

        clearInterval(interval)

        const numberInput = document.createElement("INPUT")

        numberInput.setAttribute("type","number")
        numberInput.setAttribute("value","2")
        numberInput.classList.add("number-input")

        const button = document.createElement("button")

        button.innerHTML = "Acelerar em"
        button.classList.add("apply-button")

        button.addEventListener("click",()=>{

            const audios = document.querySelectorAll("audio")

            audios.forEach((audio) => {

                console.log(audios)
                audio.playbackRate = 2;
            })

        })

        header.appendChild(button)
        header.appendChild(numberInput)
    }
},1000)


