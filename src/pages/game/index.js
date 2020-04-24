(function(){
    const $root = document.querySelector("#root");

    const $cardsWrapper = createCardsWrapper();

    // const $memoryCard = createMemoryCard({
    //     nameClass: "img/icon-collabcode.png", 
    //     src: "Gueio"
    // });

    const createMemoryCard = memoryCard();

    const $memoryCardCelular = createMemoryCard({
        src: "img/icon-celular.png", 
        alt: "Imagem celular",
        nameClass: "-front"
    });

    const $memoryCardPhp = createMemoryCard({
        src: "img/icon-php.png", 
        alt: "Livro php",
        nameClass: "-front"
    });

    const $memoryCardJs = createMemoryCard({
        src: "img/icon-js.png", 
        alt: "Livro php",
        nameClass: "-front"
    });

    const $memoryCardC = createMemoryCard({
        nameClass: "-front",
        src: "img/icon-c.png",
        alt: "Livro de C++"
    });

    $root.insertAdjacentElement("beforeend", $cardsWrapper);

    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCelular);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCelular);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
})();
