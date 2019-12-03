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

let funBus = document.querySelector('img')

funBus.addEventListener('click', () => {
  funBus.style.transform = 'rotate(1turn)';
  funBus.style.transition = 'transform 1s'
})

// funBus.addEventListener('mouseleave', () => {
//   funBus.style.transform = '';
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

let footer = document.querySelector('footer');

footer.addEventListener('dblclick', () => {
  footer.style.background = 'green';
})

// let paragraph = document.querySelectorAll('p');

// paragraph.forEach(item => {
//   item.addEventListener('keydown', () => {
//     item.style.transform = 'rotate(1turn)';
//   })
// })

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

// window.addEventListener('load', () => {
//   middleContent.style.transform = 'rotate(1turn)';
// })

