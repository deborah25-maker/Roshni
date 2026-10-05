
/* =========================================================
   ROSHNI BIRTHDAY STORY
   From Deborah ❤️
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Roshni Birthday Story loaded ❤️");


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const prankScene = document.getElementById("prankScene");
    const revealScene = document.getElementById("revealScene");
    const storyScene = document.getElementById("storyScene");
    const birthdayScene = document.getElementById("birthdayScene");

    const hackButton = document.getElementById("hackButton");
    const startButton = document.getElementById("startButton");

    const previousButton =
        document.getElementById("previousButton");

    const nextButton =
        document.getElementById("nextButton");

    const musicButton =
        document.getElementById("musicButton");

    const replayButton =
        document.getElementById("replayButton");

    const storyImage =
        document.getElementById("storyImage");

    const sceneNumber =
        document.getElementById("sceneNumber");

    const storyLabel =
        document.getElementById("storyLabel");

    const storyTitle =
        document.getElementById("storyTitle");

    const storyDescription =
        document.getElementById("storyDescription");

    const storyQuote =
        document.getElementById("storyQuote");

    const progressFill =
        document.getElementById("progressFill");

    const music =
        document.getElementById("backgroundMusic");


    /* =====================================================
       STORY DATA
    ===================================================== */

    const scenes = [

        {
            title: "When We Were Little",
            label: "WHEN WE WERE LITTLE",

            description:
                "Roshni, when I look back now, I realize how much of my life has your name in it. We were just two little girls, growing up together and making memories without knowing how precious they would become.",

            quote:
                "Some of the most beautiful memories are the ones we did not know we were making.",

            image:
                "assets/photos/2sis1.png"
        },

        {
            title: "Our Little Fights",
            label: "OUR LITTLE FIGHTS",

            description:
                "I still remember how seriously I took our little fights. We could argue over the smallest things, say 'Give me that!' and 'No, it's mine!' and then somehow start laughing again.",

            quote:
                "We were little, but those little moments became big memories.",

            image:
                "assets/photos/twosis.png"
        },

        {
            title: "I Used To Complain",
            label: "I USED TO COMPLAIN",

            description:
                "I used to run to our parents and complain about you. I really thought I was right. I did not know that the sister I was complaining about would one day become someone I would trust and love so deeply.",

            quote:
                "Sometimes the people we complain about become the people we cannot imagine life without.",

            image:
                "assets/photos/family.png"
        },

        {
            title: "As We Grew",
            label: "AS WE GREW",

            description:
                "As we grew older, life changed. We changed too. There were new responsibilities, new dreams and new problems. But no matter how much life changed, you were still part of my story.",

            quote:
                "Growing up changes many things, but it does not have to change love.",

            image:
                "assets/photos/3 sister.png"
        },

        {
            title: "The Memories We Kept",
            label: "THE MEMORIES WE KEPT",

            description:
                "Sometimes I look at our old photos and smile. They remind me that our story was never about having perfect days. It was about having each other through ordinary days.",

            quote:
                "Ordinary moments become precious when they become memories.",

            image:
                "assets/photos/3sister1.png"
        },

        {
            title: "When You Left For Dubai",
            label: "WHEN YOU LEFT FOR DUBAI",

            description:
                "Then you left for Dubai. The distance was not only a place on a map. I could feel it whenever I wanted my sister nearby. Life had become different, but you were still there for us.",

            quote:
                "Distance changes where people are, not how much they mean to us.",

            image:
                "assets/photos/single2.png"
        },

        {
            title: "The ₹10,000 Trouble",
            label: "THE ₹10,000 TROUBLE",

            description:
                "There was a time when I got into trouble because of the ₹10,000 fraud. I was scared and confused. What I remember most is not only the money. I remember that you stood beside me when I needed someone.",

            quote:
                "You learn who stands beside you when life becomes difficult.",

            image:
                "assets/photos/single3.png"
        },

        {
            title: "You Always Had My Back",
            label: "YOU ALWAYS HAD MY BACK",

            description:
                "You helped me without making me feel small. You always told me to do what I wanted and supported me from behind. I slowly understood that those simple words were actually a big kind of love.",

            quote:
                "Real support is sometimes quiet, but you can feel it deeply.",

            image:
                "assets/photos/single4.png"
        },

        {
            title: "My 22nd Birthday",
            label: "MY 22ND BIRTHDAY",

            description:
                "I still remember my 22nd birthday. You told me to buy an iPhone and said that you would pay for it. Honestly, I never expected you to say something like that. It showed me how much you wanted to see me happy.",

            quote:
                "Some gifts are remembered because of what they meant, not only because of what they were.",

            image:
                "assets/photos/lastbirthday1.png"
        },

        {
            title: "Everything You Do For Us",
            label: "EVERYTHING YOU DO FOR US",

            description:
                "You have always supported our family. You worked hard, helped us, and stood behind us when we needed you. Because of your support, we are able to live a better life today. I may not have understood that when I was younger, but I understand it now.",

            quote:
                "The sacrifices made for family are often understood only when we grow older.",

            image:
                "assets/photos/lastbirthday.png"
        },

        {
            title: "Now I Understand",
            label: "NOW I UNDERSTAND",

            description:
                "As I grew older, I started seeing things differently. Love is not always a big speech. Sometimes it is sacrifice. Sometimes it is helping with money. Sometimes it is standing behind your family. And sometimes it is simply being there.",

            quote:
                "Love is often found in the things people quietly do for us.",

            image:
                "assets/photos/3sister1bro.png"
        },

        {
            title: "Distance Cannot Change Us",
            label: "DISTANCE CANNOT CHANGE US",

            description:
                "Dubai and Sikkim may be far apart, but distance cannot change what you mean to me. Wherever life takes us, you will always be my sister. And today, I want you to know that I am proud to have you in my life.",

            quote:
                "Distance can separate places, but it cannot separate hearts.",

            image:
                "assets/photos/Single.jpeg"
        }

    ];


    /* =====================================================
       VARIABLES
    ===================================================== */

    let currentScene = 0;

    let musicStarted = false;

    let musicMuted = false;


    /* =====================================================
       INITIAL MUSIC
    ===================================================== */

    function resetMusic() {

        try {

            music.pause();

            music.currentTime = 0;

            music.volume = 0.35;

        } catch (error) {

            console.log(
                "Music reset error:",
                error
            );
        }

        musicStarted = false;

        musicMuted = false;

        updateMusicButton();
    }


    resetMusic();


    /* =====================================================
       SHOW SCREEN
    ===================================================== */

    function showScreen(screen) {

        [
            prankScene,
            revealScene,
            storyScene,
            birthdayScene
        ].forEach(scene => {

            scene.classList.remove("active");

        });

        screen.classList.add("active");

        screen.scrollTop = 0;
    }


    /* =====================================================
       HACK SCREEN
    ===================================================== */

    hackButton.addEventListener(
        "click",
        showPrankReveal
    );


    function showPrankReveal() {

        resetMusic();

        showScreen(revealScene);
    }


    /* =====================================================
       START WISHES
    ===================================================== */

    startButton.addEventListener(
        "click",
        startBirthdayStory
    );


    function startBirthdayStory() {

        currentScene = 0;

        showScreen(storyScene);

        showScene(currentScene);

        startMusic();
    }


    /* =====================================================
       MUSIC
    ===================================================== */

    function startMusic() {

        musicStarted = true;

        musicMuted = false;

        music.volume = 0.35;

        music.currentTime = 0;

        const playPromise =
            music.play();

        if (playPromise !== undefined) {

            playPromise
                .then(() => {

                    console.log(
                        "Birthday music started ❤️"
                    );

                })
                .catch(error => {

                    console.log(
                        "Music could not start:",
                        error
                    );

                });
        }

        updateMusicButton();
    }


    function updateMusicButton() {

        if (!musicButton) {
            return;
        }

        if (musicMuted) {

            musicButton.textContent =
                "🔇 Music";

        } else {

            musicButton.textContent =
                "🔊 Music";

        }
    }


    musicButton.addEventListener(
        "click",
        toggleMusic
    );


    function toggleMusic() {

        if (!musicStarted) {

            startMusic();

            return;
        }


        if (music.paused) {

            musicMuted = false;

            music.play().catch(() => {});

        } else {

            musicMuted = true;

            music.pause();

        }


        updateMusicButton();
    }


    /* =====================================================
       SHOW MEMORY
    ===================================================== */

    function showScene(index) {

        if (
            index < 0 ||
            index >= scenes.length
        ) {
            return;
        }


        const scene =
            scenes[index];


        currentScene = index;


        storyImage.style.opacity = "0";

        storyTitle.style.opacity = "0";

        storyDescription.style.opacity = "0";

        storyQuote.style.opacity = "0";


        setTimeout(() => {

            storyImage.src =
                scene.image;

            storyImage.alt =
                scene.title;

            sceneNumber.textContent =
                `MEMORY ${String(index + 1).padStart(2, "0")}`;

            storyLabel.textContent =
                scene.label;

            storyTitle.textContent =
                scene.title;

            storyDescription.textContent =
                scene.description;

            storyQuote.textContent =
                scene.quote;


            const progress =
                ((index + 1) / scenes.length) * 100;


            progressFill.style.width =
                `${progress}%`;


            storyImage.style.opacity = "1";

            storyTitle.style.opacity = "1";

            storyDescription.style.opacity = "1";

            storyQuote.style.opacity = "1";


            updateButtons();

        }, 180);
    }


    /* =====================================================
       TRANSITIONS
    ===================================================== */

    storyImage.style.transition =
        "opacity 0.35s ease";

    storyTitle.style.transition =
        "opacity 0.35s ease";

    storyDescription.style.transition =
        "opacity 0.35s ease";

    storyQuote.style.transition =
        "opacity 0.35s ease";


    /* =====================================================
       BUTTONS
    ===================================================== */

    function updateButtons() {

        /*
         * Previous is disabled only
         * on the first memory.
         */

        previousButton.disabled =
            currentScene === 0;

        previousButton.style.opacity =
            currentScene === 0
                ? "0.35"
                : "1";


        /*
         * IMPORTANT:
         * Next must remain active on
         * the final memory so the user
         * can open the birthday screen.
         */

        nextButton.disabled = false;

        nextButton.style.opacity = "1";


        /*
         * Change arrow to a heart on
         * the final memory.
         */

        if (
            currentScene ===
            scenes.length - 1
        ) {

            nextButton.textContent =
                "❤️";

            nextButton.setAttribute(
                "aria-label",
                "Finish birthday story"
            );

        } else {

            nextButton.textContent =
                "→";

            nextButton.setAttribute(
                "aria-label",
                "Next memory"
            );
        }
    }


    /* =====================================================
       NEXT BUTTON
    ===================================================== */

    nextButton.addEventListener(
        "click",
        nextScene
    );


    function nextScene() {

        /*
         * If there are more memories,
         * show the next memory.
         */

        if (
            currentScene <
            scenes.length - 1
        ) {

            showScene(
                currentScene + 1
            );

            return;
        }


        /*
         * If this is the final memory,
         * open the birthday message.
         */

        showBirthdayScreen();
    }


    /* =====================================================
       PREVIOUS BUTTON
    ===================================================== */

    previousButton.addEventListener(
        "click",
        previousScene
    );


    function previousScene() {

        if (currentScene > 0) {

            showScene(
                currentScene - 1
            );
        }
    }


    /* =====================================================
       FINAL BIRTHDAY SCREEN
    ===================================================== */

    function showBirthdayScreen() {

        showScreen(birthdayScene);


        /*
         * Music continues playing.
         */

        if (
            musicStarted &&
            music.paused &&
            !musicMuted
        ) {

            music.play().catch(() => {});

        }


        birthdayScene.scrollTop = 0;
    }


    /* =====================================================
       REPLAY
    ===================================================== */

    replayButton.addEventListener(
        "click",
        replayStory
    );


    function replayStory() {

        resetMusic();

        currentScene = 0;

        showScreen(prankScene);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* =====================================================
       KEYBOARD
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                !storyScene.classList.contains("active")
            ) {
                return;
            }


            if (event.key === "ArrowRight") {

                nextScene();

            }


            if (event.key === "ArrowLeft") {

                previousScene();

            }


            if (event.key === " ") {

                event.preventDefault();

                toggleMusic();

            }
        }
    );


    /* =====================================================
       MOBILE SWIPE
    ===================================================== */

    let touchStartX = 0;

    let touchStartY = 0;


    storyScene.addEventListener(
        "touchstart",
        event => {

            const touch =
                event.changedTouches[0];

            touchStartX =
                touch.screenX;

            touchStartY =
                touch.screenY;

        },
        {
            passive: true
        }
    );


    storyScene.addEventListener(
        "touchend",
        event => {

            const touch =
                event.changedTouches[0];

            const touchEndX =
                touch.screenX;

            const touchEndY =
                touch.screenY;


            const differenceX =
                touchEndX - touchStartX;

            const differenceY =
                touchEndY - touchStartY;


            /*
             * Ignore vertical scrolling.
             */

            if (
                Math.abs(differenceX) <
                Math.abs(differenceY)
            ) {
                return;
            }


            if (
                Math.abs(differenceX) < 50
            ) {
                return;
            }


            if (differenceX < 0) {

                nextScene();

            } else {

                previousScene();

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       PRELOAD IMAGES
    ===================================================== */

    scenes.forEach(scene => {

        const image =
            new Image();

        image.src =
            scene.image;

    });


    /* =====================================================
       INITIAL STORY
    ===================================================== */

    showScene(0);

});
