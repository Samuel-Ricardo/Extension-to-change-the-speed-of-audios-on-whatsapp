

const interval = setInterval(()=>{  // checks every 1 second if the header has already been created // checa a cada 1 segundo se o header já foi criado
   
    const header = document.querySelector("._1QUKR")

    if(header){ // if it has already been created it stops repeating and creates the button and the Input // se já tiver sido criado ele para de repetir e cria o botao e o Input

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

            audios.forEach((audio) => { // scan the audios // varre os audios

                console.log(audios)
                audio.playbackRate = Number(numberInput.value); // change their speed with the input value // modifica a velocidade deles com o valor do input
            })

        })

         // put inside the header // põe dentro do header

        header.appendChild(numberInput)
        header.appendChild(button)
    }
},1000)


