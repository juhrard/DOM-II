// Your code goes here

// Header Things

let aTag = document.querySelectorAll('a');

aTag.forEach(item => { 
  item.addEventListener('mouseenter', () => {
    item.style.color = 'green';
    item.style.transition = 'color 1.5s';
    item.style.textDecoration = 'underline';
    item.style.transition = 'textDecoration 0.5s'
  });
});

aTag.forEach(item => { 
  item.addEventListener('mouseleave', () => {
    item.style.color = 'black';
    item.style.textDecoration = 'none';
  });
});

aTag.forEach(item => {
  item.addEventListener("click", function(event){
    event.preventDefault()
  });
})

// Fun Bus Img Things (Coded over)

// let funBus = document.querySelector('img')

// funBus.addEventListener('click', () => {
//   funBus.style.transform = 'rotate(1turn)';
//   funBus.style.transition = 'transform 1s'
// })

// Button Styles

let button = document.querySelectorAll('.btn');

button.forEach(item => {
  item.addEventListener('mousedown', (event) => {
    item.style.color = 'white';
    item.style.background = 'red';
    event.stopPropagation();
  })
})

button.forEach(item => {
  item.addEventListener('mouseup', () => {
    item.style.color = 'white';
    item.style.background = '#17A2B8';
    event.stopPropagation();
  })
})

// Footer Things

let footer = document.querySelector('footer');

footer.addEventListener('dblclick', () => {
  footer.style.background = 'green';
})

// Paragraph Things

let paragraph = document.querySelectorAll('p');

paragraph.forEach(item => {
  item.addEventListener('mousedown', () => {
    item.style.transform = 'rotate(1turn)';
    item.style.transition = 'transform 1s';
  })
})

// Middle Section Things

let destinationBox = document.querySelectorAll('.destination');

destinationBox.forEach(item => {
  item.addEventListener('mousedown', () => {
    item.style.color = 'white';
    item.style.background = 'red';
  })
})

destinationBox.forEach(item => {
  item.addEventListener('mouseup', () => {
    item.style.color = 'black';
    item.style.background = 'white';
  })
})

let middleContent = document.querySelector('.content-destination');

window.addEventListener('resize', () => {
  middleContent.style.color = 'red';
})

window.addEventListener('scroll', () => {
  middleContent.style.color = 'green';
})

// GSAP Testing

let img = document.querySelectorAll('img');

let timeLine = gsap.timeline();

img.forEach(item => {
  item.addEventListener('click', () => {
    timeLine.to(item, {rotation: 27, x: 100, duration: 1})
            .to(item, {rotation: 0, x: 0, duration: 1})
  })
})

// gsap.to("img", {rotation: 27, x: 100, duration: 1});
