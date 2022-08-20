// Modal

$(document).ready(function() {
    $('[data-modal=modal]').on('click', function() {
        $('.overlay, #modal').fadeIn('slow');
    });
    $('.modal_close, .overlay').on('click', function() {
        $('.overlay, #modal').fadeOut('slow');
    });

});

const cards = document.querySelectorAll('.sales_stages_card_wrapper .card'),
      cardNumbers = document.querySelectorAll('.sales_stages_card_wrapper .card .number'),
      cardArrows = document.querySelectorAll('.sales_stages_card_wrapper .arrow');

console.log(cards);
console.log(cardNumbers);
console.log(cardArrows);


// const addClassActive = () => {
    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            card.classList.toggle('active');

            cardNumbers[index].classList.toggle('number_active');

            if (cardNumbers[index].innerHTML == '') {
                console.log("index", index);
                cardNumbers[index].innerHTML = index + 1;
            } else {
                cardNumbers[index].innerHTML = '';
            }
            
            if (index < cardArrows.length) {
                if (cardArrows[index].classList.contains('arrow_top')) {
                    cardArrows[index].classList.toggle('white_top');                    
                } else {
                    cardArrows[index].classList.toggle('white_bottom');
                }                
            }           
        })
    })
// }

// addClassActive();


// cards.addEventListener('click', function(e) {
//     if (e.target.matches('.card')) {
//         e.target.classList.toggle('active');
//         let number = e.target.querySelector('.number');
//         number.classList.toggle('number_active');
//     }
// });