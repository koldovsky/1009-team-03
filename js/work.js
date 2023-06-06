const textElement = document.getElementById("animated-text");
const headingElement = document.getElementById("heading");

const words = textElement.innerHTML.split(/\s+/);

let currentIndex = 0;
let animationTimeout;
let animationFinished = false;

function highlightNextWord() {
    if (currentIndex >= words.length) {
        animationFinished = true;
        headingElement.style.textShadow = "0 0 4px var(--header-gradient-light-blue)";
        return;
    }

    const highlightedText = words
        .map((word, index) => {
            if (index === currentIndex) {
                return `<span class="highlight">${word}</span>`;
            } else {
                return word;
            }
        })
        .join(" ");

    textElement.innerHTML = highlightedText;

    currentIndex++;

    clearTimeout(animationTimeout);
    animationTimeout = setTimeout(highlightNextWord, 350);
}

function handleScroll() {
    const elementPosition = textElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition - windowHeight <= 0) {
        if (!animationFinished) {
            highlightNextWord();
        } else {
            clearTimeout(animationTimeout);
            headingElement.style.textShadow = "0 0 16px blue";
        }
    } else {
        clearTimeout(animationTimeout);
        currentIndex = 0;
        textElement.innerHTML = words.join(" ");
        headingElement.style.textShadow = "none";
        animationFinished = false;
    }
}

window.addEventListener("scroll", handleScroll);

