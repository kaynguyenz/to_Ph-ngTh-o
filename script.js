const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Mừng vì em hạnh phúc 😘 <p>Thế Bảo có thư cho em nè, em có muốn đọc hông?</p>";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  var yesButton = document.querySelector(".yes-btn");
  var clickCount = 0;

  yesButton.addEventListener("click", function () {
      // Tăng số lần nhấn lên
      clickCount++;

      // Kiểm tra nếu đã nhấn vào nút "Yes" hai lần
      if (clickCount === 2) {
          // Chuyển hướng đến trang khác
          window.location.href = "./dist/index.html";
      }
  });
});
