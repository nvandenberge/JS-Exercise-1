const input = document.querySelector('input')

input.addEventListener('keypress', eventHandler)

  function eventHandler (event) {
    if (event.which === 13) {
      const p = document.createElement('p');
      p.innerText = `Hello ${input.value}, nice to meet you!`;
      const form = document.querySelector('form')
      form.append(p);
      event.preventDefault();
      document.getElementById('yourName').value = "";
    }

  }






  // const form = document.querySelector('form');
  // const name = document.querySelector('input');
  // const span = document.querySelector('span');
  // const newP = document.createElement('p');
  //
  // function eventHandler (event) {
  //   let yourName = name;
  //   if (event.which == 13) {
  //       return  newP.innerText = name.value
  //   }
  //   else {
  //     alert('You must press the Enter key')
  //   }
  // }





// input.addEventListener('submit', function (event) {
//   const newP = document.createElement('p')
//   newP.textContent = `Hello ${name}, nice to meet you!`

// })
