// Modal

$(document).ready(function() {
    $('[data-modal=modal]').on('click', function() {
        $('.overlay, #modal').fadeIn('slow');
    });
    $('.modal_close, .overlay').on('click', function() {
        $('.overlay, #modal').fadeOut('slow');
    });

});

// Sales Stages

const cards = document.querySelectorAll('.sales_stages_card_wrapper .card'),
      cardNumbers = document.querySelectorAll('.sales_stages_card_wrapper .card .number'),
      cardArrows = document.querySelectorAll('.sales_stages_card_wrapper .arrow');

console.log(cards);
console.log(cardNumbers);
console.log(cardArrows);


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


// Road Map

const connectors = document.querySelectorAll('.connector'),
      connectorRounds = document.querySelectorAll('.connector_round'),
      rounds = document.querySelectorAll('.round'),
      roundsLg = document.querySelectorAll('.round-lg'),
      timelineContents = document.querySelectorAll('.timeline-content');

console.log(connectors);
console.log(timelineContents);


timelineContents.forEach((content, index) => {
    content.addEventListener('mouseenter', function() {
        connectors[index].classList.add('connector_hovered');
        connectorRounds[index].classList.add('connector_round_hovered');
        rounds[index].classList.add('round_hovered');
        roundsLg[index].classList.add('round-lg_hovered');
    })    
})

timelineContents.forEach((content, index) => {
    content.addEventListener('mouseleave', function() {
        connectors[index].classList.remove('connector_hovered');
        connectorRounds[index].classList.remove('connector_round_hovered');
        rounds[index].classList.remove('round_hovered');
        roundsLg[index].classList.remove('round-lg_hovered');
    })    
})

const hamburger = document.querySelector('.hamburger'),
      overlay = document.querySelector('.overlay-nav'),
      lines = document.querySelectorAll('.line'),
      navLinks = document.querySelector('.nav-links'),
      links = document.querySelectorAll('.nav-links li');


hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        overlay.style.display = 'none';
        lines.forEach(line => {
            line.classList.remove('line_active');
        });
    } else {
        navLinks.classList.add('open');
        overlay.style.display = 'block';
        lines.forEach(line => {
            line.classList.add('line_active');
        });
    }
    links.forEach(link => {
        link.classList.add('shown');
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    navLinks.classList.remove('open');
    lines.forEach(line => {
        line.classList.remove('line_active');
    });
    navLinks.classList.remove('open');
})

links.forEach(link => {
    link.addEventListener('click', () => {
        overlay.style.display = 'none';
        navLinks.classList.remove('open');
        lines.forEach(line => {
            line.classList.remove('line_active');
        });
        navLinks.classList.remove('open');
    })    
});

function BackToTop() {
    let button = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 1000) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

BackToTop();