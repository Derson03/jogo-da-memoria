const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

const $iconCollab = 
    `<img 
        src='img/icon-collabcode.png'
        alt='Gueio' 
        class='icon' 
    />`;

const $iconC = 
    `<img 
        src='img/icon-c.png'
        alt='Gueio' 
        class='icon' 
    />`;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);