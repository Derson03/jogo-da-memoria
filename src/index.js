const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon = 
    `<img 
        src='img/icon-collabcode.png'
        alt='Gueio' 
        class='icon' 
    />`;

$memoryCard.classList.add("memory-card");
$memoryCard.innerHTML = $icon;

$root.insertBefore($memoryCard, null);

// $memoryCard.insertAdjacentHTML("afterend", $icon);