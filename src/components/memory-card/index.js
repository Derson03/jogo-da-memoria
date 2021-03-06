function memoryCard(){

    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    
    $style.textContent = `
    .memory-card{
        position: relative;
        width: 155px;
        height: 155px;
    }

    .memory-card .card{
        width: 100%;
        height: 100%;
        background-color: #f25a70;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        position: absolute;
    }
    
    .memory-card.-active .card,
    .memory-card.-scored .card{
        display: none;
    }

    .memory-card.-active .card.-front,
    .memory-card.-scored .card.-front{
        display: flex;
    }
    
    .memory-card .card.-front{
        background-color: #fff;
        display: flex;
    }
    
    .memory-card .card.-front::before{
        content: '';
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
    
    }
    
    .memory-card .card > .icon{
        width: 100px;
        height: 100px;
    }
    
    .memory-card .card.-front > .icon{
        position: absolute;
        transform: translateY(-12px);
    }`;
    
    $head.insertBefore($style, null);

    return ({nameClass, src, alt}) => `
        <div class="memory-card" onClick="handleClick(this)">
            <article class="card ${nameClass}">
                <img 
                    src="${src}"
                    alt="${alt}" 
                    class="icon" 
                />
            </article>
            <article class="card">
                <img 
                    src="img/icon-collabcode.png"
                    alt="Mascote da collabcode" 
                    class="icon" 
                />
            </article>
        </div>
    `;
};

/*
const createMemoryCardFront = () =>`
    <article class="memory-card -front">
        <img 
            src='img/icon-c.png'
            alt='Gueio' 
            class='icon' 
            onClick="handleClick()"
        />
    </article>
`;
*/

const handleClick = $component => {
    if(!$component.classList.contains("-active")){    
        activeMemoryCard($component);
        checkSure();
    }
}; 

function activeMemoryCard($component){
    if(qtdActiveMemoryCard < 2){
        $component.classList.add("-active")
    }
}

function checkSure(){
    if(qtdActiveMemoryCard == 1){
        const $activeMemoryCards = document.querySelectorAll(".memory-card.-active");

        if($activeMemoryCards[0].querySelector(".-front .icon").getAttribute("src") == $activeMemoryCards[1].querySelector(".-front .icon").getAttribute("src") ){
            store.score++;

            console.log("Score: ", store.score);
            
            $activeMemoryCards.forEach($memoryCard => {
                $memoryCard.classList.add("-scored");
                $memoryCard.classList.remove("-active");
            });
        }else{
            setTimeout(() => {
                $activeMemoryCards.forEach($memorycard => {
                    $memorycard.classList.remove("-active");
                });

                qtdActiveMemoryCard = 0;

            },1500);
        }

    }
}