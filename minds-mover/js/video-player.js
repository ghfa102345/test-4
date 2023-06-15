const videoElements = document.querySelectorAll(".video__element");
const playButtons = document.querySelectorAll(".video__play-button");
const videoCaptions = document.querySelectorAll(".video__caption");

playButtons.forEach((playButton, index) => {
    playButton.addEventListener("click", () => {
        const video = videoElements[index];
        const caption = videoCaptions[index];
        video.classList.remove("video__element--no-controls");
        video.play();
        video.tabIndex = 0;
        playButton.style.display = "none";
        caption.style.display = "none";

    });
});