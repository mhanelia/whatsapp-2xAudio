
const interval = setInterval(()=>{
    const header = document.querySelector(".LhZF7");
    if(header){
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("twoTimesButton")
        header.appendChild(button)

        button.addEventListener("click",()=>{
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = 1.3;

            })
        })
        
    }





},1000)

