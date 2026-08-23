"use strict";

{
  const open = document.getElementById("open");
  const overlay = document.querySelector(".overlay");
  const close = document.getElementById("close");

  open.addEventListener("click", () => {
    overlay.classList.add("show");
    open.classList.add("hide");
  });

  close.addEventListener("click", () => {
    overlay.classList.remove("show");
    open.classList.remove("hide");
  });

  const swiperSpecialsCoffee = new Swiper(".swiper-specials-coffee", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 4,
    navigation: {
      prevEl: ".prev1",
      nextEl: ".next1",
    },
  });

  const swiperSpecialsDessert = new Swiper(".swiper-specials-dessert", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 4,
    navigation: {
      prevEl: ".prev2",
      nextEl: ".next2",
    },
  });

  const swiper2 = new Swiper(".swiper2", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
      },
      1536: {
        spaceBetween: 56,
      },
    },
  });

  const form = document.getElementById("form-wrapper");
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("email-error");

  form.addEventListener("submit", (e) => {
    if (!emailInput.validity.valid) {
      e.preventDefault();

      if (emailInput.validity.valueMissing) {
        errorMessage.textContent = "メールアドレスを入力してください。";
      } else if (emailInput.validity.typeMismatch) {
        errorMessage.textContent =
          "正しいメールアドレスの形式で入力してください。";
      }
    } else {
      errorMessage.textContent = "";
    }
  });
}
