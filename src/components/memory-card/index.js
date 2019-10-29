const createMemoryCard = () =>`
        <article class="memory-card">
            <img 
                src='img/icon-collabcode.png'
                alt='Gueio' 
                class='icon' 
            />
        </article>
    `;

function createMemoryCardFront(){
    const $memoryCard =  `
        <article class="memory-card -front">
            <img 
                src='img/icon-c.png'
                alt='Gueio' 
                class='icon' 
                onClick="handleClick()"
            />
        </article>
    `;

    return $memoryCard;
}

function handleClick(){

}