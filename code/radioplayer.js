// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const bigChannel = document.getElementById("channels");

async function fetchData (){
    const radio = await fetch("https://api.sr.se/api/v2/channels/?format=json");
    const data = await radio.json();

    console.log(data);

    data.channels.forEach((radioE) => {
        console.log(radioE);

        const videoContainer = document.createElement("div");
        videoContainer.className = "videoContainer";
        videoContainer.innerHTML = `
        <img class = "image"  src="${radioE.image}"/>

        <div class = "right">
            <div class="name">
                <h2>${radioE.name}</h2>
            </div>
        
             <div class="player">
                <audio controls>
                    <source src="${radioE.liveaudio.url}" type="audio/mpeg" />
                </audio>
            </div>
        </div>

        `;

        videoContainer.style.backgroundColor = `#${radioE.color}`;

        bigChannel.appendChild(videoContainer);


    });

};

fetchData()

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.



// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
