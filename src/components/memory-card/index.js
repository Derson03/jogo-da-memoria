const createMemoryCard = (src, alt, nameClass) => `
    <article class="memory-card ${nameClass}">
        <img 
            src="${src}"
            alt="${alt}" 
            class="icon" 
            onClick="handleClick()"
        />
    </article>
`;


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

function handleClick(){

}