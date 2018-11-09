const input = document.querySelector('input')
input.addEventListener('keypress', eventHandler)

function focus () {
  document.getElementById('yourName').focus();
}

function eventHandler(event) {
  const p = document.createElement('p');
  const form = document.querySelector('form');

  if (event.which === 13) {
    if (input.value.length === 0) {
      const person = prompt('Please enter your name:');
      if (person.length > 0) {
        p.innerText = `Hello ${person}, nice to meet you!`;
        form.append(p);
        event.preventDefault();
      } else if (person.length === 0) {
        alert("You did not enter your name!")
        p.innerText = 'ERROR: You did not enter your name!';
        form.append(p);
        event.preventDefault();
      }
    } else {
      p.innerText = `Hello ${input.value}, nice to meet you!`;
      form.append(p);
      event.preventDefault();
      document.getElementById('yourName').value = "";
    }
  }
}

//          WORKING CODE WITH PROMPT AND OUTPUT

// const input = document.querySelector('input')
// input.addEventListener('keypress', eventHandler)
//
// function eventHandler(event) {
//   const p = document.createElement('p');
//   const form = document.querySelector('form');
//
//   if (event.which === 13) {
//     if (input.value.length === 0) {
//       const person = prompt('Please enter your name:');
//       if (person.length > 0) {
//         p.innerText = `Hello ${person}, nice to meet you!`;
//         form.append(p);
//         event.preventDefault();
//       } else if (person.length === 0) {
//         alert("You did not enter your name!")
//         p.innerText = 'ERROR: You did not enter your name!';
//         form.append(p);
//         event.preventDefault();
//       }
//     } else {
//       p.innerText = `Hello ${input.value}, nice to meet you!`;
//       form.append(p);
//       event.preventDefault();
//       document.getElementById('yourName').value = "";
//     }
//   }
// }



//      ORIGINAL WORKING CODE BELOW (DO NOT TOUCH)

// const input = document.querySelector('input')
//
// input.addEventListener('keypress', eventHandler)
//
//   function eventHandler (event) {
//     const p = document.createElement('p');
//     const form = document.querySelector('form');
//
//     if (event.which === 13) {
//       if  (input.value.length === 0) {
//         alert('Enter your name')
//       }
//       else {
//       p.innerText = `Hello ${input.value}, nice to meet you!`;
//       form.append(p);
//       event.preventDefault();
//       document.getElementById('yourName').value = "";
//     }
//   }
// }
//
