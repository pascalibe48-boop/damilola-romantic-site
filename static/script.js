// ==========================
// ROMANTIC WEBSITE JAVASCRIPT
// ==========================


// ==========================
// LOVE MESSAGE
// ==========================

function openLoveLetter() {

    const letter =
        document.getElementById(
            "interactiveLetter"
        );

    const envelope =
        document.getElementById(
            "letterEnvelope"
        );

    if (!letter) return;

    if (envelope) {
        envelope.classList.add("opening");
    }

    setTimeout(function() {

        if (envelope) {
            envelope.style.display = "none";
        }

        letter.classList.add(
            "show-letter"
        );

    }, 550);
}


function closeLove() {

    const hero =
        document.querySelector(".hero");

    const loveMessage =
        document.getElementById("loveMessage");

    if (loveMessage) {
        loveMessage.style.display = "none";
    }

    if (hero) {
        hero.style.display = "flex";
    }
}


// ==========================
// MUSIC PLAYER
// ==========================

function toggleMusic() {

    const audio =
        document.getElementById("loveSong");

    const button =
        document.getElementById("musicButton");

    const player =
        document.getElementById("musicPlayer");

    const disc =
        player
        ? player.querySelector(".music-icon")
        : null;

    if (!audio) return;


    if (audio.paused) {

        audio.play()
            .then(function() {

                if (button) {
                    button.innerHTML = "⏸️";
                }

                if (disc) {
                    disc.style.animationPlayState =
                        "running";
                }

            })
            .catch(function(error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });

    } else {

        audio.pause();

        if (button) {
            button.innerHTML = "▶️";
        }

        if (disc) {
            disc.style.animationPlayState =
                "paused";
        }
    }
}


// Keep player state correct

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const audio =
            document.getElementById("loveSong");

        const player =
            document.getElementById("musicPlayer");

        if (!audio) return;


        audio.addEventListener(
            "play",
            function() {

                const button =
                    document.getElementById(
                        "musicButton"
                    );

                const disc =
                    player
                    ? player.querySelector(
                        ".music-icon"
                    )
                    : null;

                if (button) {
                    button.innerHTML = "⏸️";
                }

                if (disc) {
                    disc.style.animationPlayState =
                        "running";
                }

            }
        );


        audio.addEventListener(
            "pause",
            function() {

                const button =
                    document.getElementById(
                        "musicButton"
                    );

                const disc =
                    player
                    ? player.querySelector(
                        ".music-icon"
                    )
                    : null;

                if (button) {
                    button.innerHTML = "▶️";
                }

                if (disc) {
                    disc.style.animationPlayState =
                        "paused";
                }

            }
        );


        audio.addEventListener(
            "ended",
            function() {

                const button =
                    document.getElementById(
                        "musicButton"
                    );

                if (button) {
                    button.innerHTML = "▶️";
                }

            }
        );

    }
);


// ==========================
// FULLSCREEN PHOTO VIEWER
// ==========================

function openPhotoViewer(imageSource) {

    const viewer =
        document.getElementById("photoViewer");

    const image =
        document.getElementById("viewerImage");

    if (!viewer || !image) return;

    image.src = imageSource;

    viewer.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closePhotoViewer() {

    const viewer =
        document.getElementById("photoViewer");

    if (!viewer) return;

    viewer.style.display = "none";

    document.body.style.overflow = "";
}


// Close photo viewer with Escape

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closePhotoViewer();

        }

    }
);


// ==========================
// INTERACTIVE LOVE LETTER
// ==========================

function openLoveLetter() {

    const letter =
        document.getElementById(
            "interactiveLetter"
        );

    const button =
        document.getElementById(
            "letterButton"
        );

    const envelope =
        document.getElementById(
            "letterEnvelope"
        );

    if (!letter) return;

    letter.classList.add(
        "show-letter"
    );

    if (button) {
        button.style.display = "none";
    }

    if (envelope) {
        envelope.style.display = "none";
    }
}


// ==========================
// FINAL ANSWERS
// ==========================

function sayYes() {

    const question =
        document.querySelector(
            ".question-container"
        );

    if (!question) return;

    question.innerHTML = `

        <div class="yes-result">

            <div class="yes-heart">
                ❤️
            </div>

            <p class="small-text">
                You just made Pascal smile...
            </p>

            <h2>
                Thank You, Damilola ❤️
            </h2>

            <p>
                I promise to cherish this chance,
                respect you, make you smile,
                and never take it for granted.
            </p>

            <div class="yes-hearts">
                ❤️ 💕 ❤️
            </div>

        </div>

    `;
}


function sayMaybe() {

    const question =
        document.querySelector(
            ".question-container"
        );

    if (!question) return;

    question.innerHTML = `

        <div class="maybe-result">

            <div class="maybe-heart">
                😌❤️
            </div>

            <h2>
                Take Your Time, Damilola
            </h2>

            <p>
                I don't want to rush you.
                Take all the time you need.
            </p>

            <p style="
                margin-top: 22px;
                color: #ff9cbd;
                font-size: 19px;
            ">
                Whenever you're ready... ❤️
            </p>

        </div>

    `;
}
// =========================================
// FLOATING HEARTS
// =========================================

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (14 + Math.random() * 18) + "px";

    const duration =
        7 + Math.random() * 6;

    heart.style.animationDuration =
        duration + "s";

    document.body.appendChild(heart);

    setTimeout(function() {

        heart.remove();

    }, duration * 1000);
}


// Create hearts occasionally

setInterval(
    createFloatingHeart,
    1800
);


// =========================================
// SPARKLES
// =========================================

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.className =
        "sparkle";

    sparkle.innerHTML = "✦";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.fontSize =
        (8 + Math.random() * 12) + "px";

    const duration =
        2 + Math.random() * 2;

    sparkle.style.animationDuration =
        duration + "s";

    document.body.appendChild(sparkle);

    setTimeout(function() {

        sparkle.remove();

    }, duration * 1000);
}


// Create subtle sparkles

setInterval(
    createSparkle,
    900
);
// =========================================
// OPENING SURPRISE
// =========================================

function openSurprise() {

    const openingScreen =
        document.getElementById(
            "openingScreen"
        );

    if (!openingScreen) return;

    openingScreen.classList.add("hide");

    setTimeout(function() {

        openingScreen.style.display =
            "none";

    }, 900);
               }
