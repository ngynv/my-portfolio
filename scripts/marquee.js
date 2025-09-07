document.addEventListener("DOMContentLoaded", () => {
  const frame = document.querySelector(".aboutme-frame");
    const parent = frame.parentElement;

    // Tạo div chứa track
    const track = document.createElement("div");
    track.classList.add("aboutme-track");

    // Clone nội dung 2 lần để nối liền
    track.appendChild(frame.cloneNode(true));
    track.appendChild(frame.cloneNode(true));

    parent.innerHTML = ""; // xóa cái cũ
    parent.appendChild(track);
});

document.addEventListener("DOMContentLoaded", () => {
    const frame = document.querySelector(".myprojects-frame");
    const parent = frame.parentElement;

    // Tạo div chứa track
    const track = document.createElement("div");
    track.classList.add("myprojects-track");

    // Clone nội dung 2 lần để nối liền
    track.appendChild(frame.cloneNode(true));
    track.appendChild(frame.cloneNode(true));

    parent.innerHTML = ""; // xóa cái cũ
    parent.appendChild(track);
});