const $btnsAccordion = document.querySelectorAll(".btn-accordion");
const $spanAccordion = document.querySelectorAll(".span-accordion")
const $itemsAccordions = document.querySelectorAll(".section-sobre-nos__card-adv__infos__list-historico")

$btnsAccordion.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const orderAccordion = e.target.getAttribute("accordion");

        $itemsAccordions[orderAccordion-1].classList.toggle("section-sobre-nos__card-adv__infos__list-historico--open");
        $btnsAccordion[orderAccordion-1].innerHTML = "Ler mais"

        console.log($spanAccordion[orderAccordion-1])


        if ($itemsAccordions[orderAccordion-1].classList.contains("section-sobre-nos__card-adv__infos__list-historico--open")) {
            $btnsAccordion[orderAccordion-1].innerHTML = `Ler menos <span class="span-accordion span-open" accordion=${orderAccordion}>
            &rsaquo;</span>`
        } else{
            $btnsAccordion[orderAccordion-1].innerHTML = `Ler mais <span class="span-accordion" accordion=${orderAccordion}>
            &rsaquo;
        </span>`
        }
    })
})

const $formEmail = document.querySelector("#formEmail")
$formEmail.addEventListener("submit", (e) => {
    e.preventDefault();

    const $name = document.querySelector("#name")
    const $email = document.querySelector("#email")
    const $textArea = document.querySelector("#textarea")    
});

const $inputMenu = document.querySelector("#bx-input")
const $label = document.querySelector(".bx-label")
const $bodyTag = document.querySelector("body")
const $menus = document.querySelectorAll(".nav__link")

$label.addEventListener("click", () => {
  if (!$inputMenu.checked) {
      $bodyTag.style.overflow = "hidden"
  } else {
      $bodyTag.style.overflow = "visible"
  }
})

$menus.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
        $bodyTag.style.overflow = "visible"
        $inputMenu.checked = false
    })
})

