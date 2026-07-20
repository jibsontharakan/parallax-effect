 
const video = document.getElementById("bgvideo");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    video.style.transform = `translateY(${-scrollY *0.15}px)`;
});
