/* =========================
   STILL. — PERSONAL NOTES
   Edit or add your notes here.
========================= */

const notes = [

    {
        title: "Build what you can build today.",

        description:
`Your life does not need to be solved all at once. Focus on what is within your reach today.

Progress comes from working with the time, resources, and circumstances you actually have not from exhausting yourself over everything you lack.`,

        reminder:
            "What can I actually do today?"
    },

    {
        title: "Give Your Own World More Substance.",

        description:
            `You cannot control everything happening around you, but you can gradually build a life that gives you more reasons to look forward to tomorrow.

Fill your days with things that interest you, develop your skills, explore new ideas, and create meaningful experiences.

Don't let your world become so small that one thing determines how you feel about everything else.`,

        reminder:
            "Make your own world worth returning to."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    },

    {
        title: "Lorem ipsum dolor sit amet.",

        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.",

        reminder:
            "Lorem ipsum dolor sit amet."
    }

];


/* =========================
   ELEMENTS
========================= */

const title = document.getElementById("principle-title");
const counter = document.getElementById("counter");
const noteNumber = document.getElementById("note-number");

const dotsContainer = document.getElementById("dots");

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const readButton = document.getElementById("read-button");

const overlay = document.getElementById("overlay");
const detailPanel = document.getElementById("detail-panel");
const closeButton = document.getElementById("close-button");

const detailNumber = document.getElementById("detail-number");
const detailTitle = document.getElementById("detail-title");
const detailDescription = document.getElementById("detail-description");
const detailReminder = document.getElementById("detail-reminder");

const card = document.getElementById("card");


/* =========================
   ABOUT STILL ELEMENTS
========================= */

const aboutButton = document.getElementById("about-button");
const aboutOverlay = document.getElementById("about-overlay");
const aboutPanel = document.getElementById("about-panel");
const aboutClose = document.getElementById("about-close");


/* =========================
   STATE
========================= */

let currentIndex = 0;

let previousFocus = null;
let aboutPreviousFocus = null;

let previousBodyOverflow = "";

let touchStartX = 0;
let touchStartY = 0;


/* =========================
   RENDER CURRENT NOTE
========================= */

function renderNote() {

    const note = notes[currentIndex];

    const number = String(currentIndex + 1).padStart(2, "0");
    const total = String(notes.length).padStart(2, "0");

    title.textContent = note.title;

    counter.textContent = `${number} / ${total}`;

    noteNumber.textContent = `NOTE NO. ${number}`;

    detailNumber.textContent = `NOTE NO. ${number}`;

    detailTitle.textContent = note.title;

    detailDescription.textContent = note.description;

    detailReminder.textContent = note.reminder;

    prevButton.disabled = currentIndex === 0;

    nextButton.disabled = currentIndex === notes.length - 1;

    [...dotsContainer.children].forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentIndex
        );

        if (index === currentIndex) {
            dot.setAttribute("aria-current", "true");
        } else {
            dot.removeAttribute("aria-current");
        }

    });

}


/* =========================
   CREATE NAVIGATION DOTS
========================= */

notes.forEach((note, index) => {

    const dot = document.createElement("button");

    dot.type = "button";

    dot.className = "dot";

    dot.setAttribute(
        "aria-label",
        `Go to note ${index + 1}`
    );

    dot.addEventListener("click", () => {

        currentIndex = index;

        renderNote();

    });

    dotsContainer.appendChild(dot);

});


/* =========================
   NAVIGATION
========================= */

function previousNote() {

    if (currentIndex > 0) {

        currentIndex--;

        renderNote();

    }

}


function nextNote() {

    if (currentIndex < notes.length - 1) {

        currentIndex++;

        renderNote();

    }

}


prevButton.addEventListener("click", previousNote);

nextButton.addEventListener("click", nextNote);


/* =========================
   MODAL SCROLL LOCK
========================= */

function lockBodyScroll() {

    previousBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

}


function unlockBodyScroll() {

    const anotherPanelIsOpen =
        overlay.classList.contains("open") ||
        aboutOverlay.classList.contains("open");

    if (!anotherPanelIsOpen) {
        document.body.style.overflow = previousBodyOverflow;
    }

}


/* =========================
   OPEN PRINCIPLE PANEL
========================= */

function openDetail() {

    previousFocus = document.activeElement;

    lockBodyScroll();

    overlay.classList.add("open");

    overlay.setAttribute("aria-hidden", "false");

    closeButton.focus();

}


readButton.addEventListener("click", openDetail);


/* =========================
   CLOSE PRINCIPLE PANEL
========================= */

function closeDetail() {

    if (!overlay.classList.contains("open")) {
        return;
    }

    overlay.classList.remove("open");

    overlay.setAttribute("aria-hidden", "true");

    unlockBodyScroll();

    if (previousFocus) {
        previousFocus.focus();
    }

}


closeButton.addEventListener("click", closeDetail);


/* Close principle panel when clicking outside */

overlay.addEventListener("click", (event) => {

    if (event.target === overlay) {

        closeDetail();

    }

});


/* =========================
   ABOUT STILL PANEL
========================= */

function openAbout() {

    aboutPreviousFocus = document.activeElement;

    lockBodyScroll();

    aboutOverlay.classList.add("open");

    aboutOverlay.setAttribute("aria-hidden", "false");

    aboutClose.focus();

}


aboutButton.addEventListener("click", openAbout);


/* =========================
   CLOSE ABOUT PANEL
========================= */

function closeAbout() {

    if (!aboutOverlay.classList.contains("open")) {
        return;
    }

    aboutOverlay.classList.remove("open");

    aboutOverlay.setAttribute("aria-hidden", "true");

    unlockBodyScroll();

    if (aboutPreviousFocus) {
        aboutPreviousFocus.focus();
    }

}


aboutClose.addEventListener("click", closeAbout);


/* Close About panel when clicking outside */

aboutOverlay.addEventListener("click", (event) => {

    if (event.target === aboutOverlay) {

        closeAbout();

    }

});


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener("keydown", (event) => {

    /* Escape closes the currently open panel */

    if (event.key === "Escape") {

        if (aboutOverlay.classList.contains("open")) {

            closeAbout();

            return;

        }

        if (overlay.classList.contains("open")) {

            closeDetail();

            return;

        }

    }


    /* Do not navigate notes while a panel is open */

    if (
        overlay.classList.contains("open") ||
        aboutOverlay.classList.contains("open")
    ) {
        return;
    }


    /* Arrow keys navigate between notes */

    if (event.key === "ArrowLeft") {

        previousNote();

    }

    if (event.key === "ArrowRight") {

        nextNote();

    }

});


/* =========================
   TOUCH / SWIPE NAVIGATION
========================= */

card.addEventListener("touchstart", (event) => {

    touchStartX = event.changedTouches[0].screenX;

    touchStartY = event.changedTouches[0].screenY;

}, { passive: true });


card.addEventListener("touchend", (event) => {

    const touchEndX = event.changedTouches[0].screenX;

    const touchEndY = event.changedTouches[0].screenY;

    const differenceX = touchEndX - touchStartX;

    const differenceY = touchEndY - touchStartY;


    /* Ignore vertical gestures */

    if (Math.abs(differenceY) > Math.abs(differenceX)) {
        return;
    }


    /* Ignore short gestures */

    if (Math.abs(differenceX) < 60) {
        return;
    }


    /* Ignore gestures while a panel is open */

    if (
        overlay.classList.contains("open") ||
        aboutOverlay.classList.contains("open")
    ) {
        return;
    }


    if (differenceX < 0) {

        nextNote();

    } else {

        previousNote();

    }

}, { passive: true });


/* =========================
   INITIALIZE
========================= */

renderNote();