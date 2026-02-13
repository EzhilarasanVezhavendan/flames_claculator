function calculateFlames() {

    removeEffects();

    let name1 = document.getElementById("name1").value
        .toLowerCase()
        .replace(/[^a-z]/g, '');

    let name2 = document.getElementById("name2").value
        .toLowerCase()
        .replace(/[^a-z]/g, '');

    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    let arr1 = name1.split('');
    let arr2 = name2.split('');

    // Remove common letters
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && arr1[i] !== '') {
                arr1[i] = '';
                arr2[j] = '';
                break;
            }
        }
    }

    let count = arr1.join('').length + arr2.join('').length;

    let flames = ["F", "L", "A", "M", "E", "S"];
    let index = 0;

    while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
    }

    showResult(flames[0]);
}

function showResult(letter) {

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    // Reset background
    document.body.classList.remove("lover-bg", "marriage-bg");
    document.body.classList.add("default-bg");

    let text = "";

    switch(letter) {

        case "F":
            text = "You are Friends 💙";
            break;

        case "L":
            text = "Lovable Lovers ❤️";
            document.body.classList.remove("default-bg");
            document.body.classList.add("lover-bg");
            createHearts();
            break;

        case "A":
            text = "Affection 😍";
            break;

        case "M":
            text = "Marriage 💍";
            document.body.classList.remove("default-bg");
            document.body.classList.add("marriage-bg");
            createMarriageEffect();
            break;

        case "E":
            text = "Enemies 😡";
            break;

        case "S":
            text = "Soulmates 💖";
            break;
    }

    resultDiv.innerHTML = text;
}

/* ❤️ Lover effect */
function createHearts() {

    const container = document.createElement("div");
    container.classList.add("hearts-container");
    document.body.appendChild(container);

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        // Spread from left & right
        heart.style.left = Math.random() < 0.5
            ? Math.random() * 20 + "vw"
            : 80 + Math.random() * 20 + "vw";

        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

        container.appendChild(heart);
    }

    setTimeout(() => container.remove(), 4000);
}

/* 💍 Marriage effect */
function createMarriageEffect() {

    const container = document.createElement("div");
    container.classList.add("hearts-container");
    document.body.appendChild(container);

    for (let i = 0; i < 40; i++) {

        const element = document.createElement("div");

        if (Math.random() > 0.5) {
            element.classList.add("heart");
            element.innerHTML = "💖";
        } else {
            element.classList.add("ring");
            element.innerHTML = "💍";
        }

        element.style.left = Math.random() * 100 + "vw";
        element.style.animationDuration = (Math.random() * 2 + 3) + "s";

        container.appendChild(element);
    }

    setTimeout(() => container.remove(), 4000);
}

function removeEffects() {
    const old = document.querySelector(".hearts-container");
    if (old) old.remove();
}
