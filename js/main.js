const input = document.querySelector('input')

input.addEventListener('keypress', eventHandler)

  function eventHandler (event) {
    const p = document.createElement('p');
    const form = document.querySelector('form');

    if (event.which === 13) {
      if  (input.value.length === 0) {
        alert('Enter your name')
      }
      else {
      p.innerText = `Hello ${input.value}, nice to meet you!`;
      form.append(p);
      event.preventDefault();
      document.getElementById('yourName').value = "";
    }
  }
}




  // const input = document.querySelector('input')
  //
  // input.addEventListener('keypress', eventHandler)
  //
  //   function eventHandler (event) {
  //     if (event.which === 13) {
  //       const p = document.createElement('p');
  //       p.innerText = `Hello ${input.value}, nice to meet you!`;
  //       const form = document.querySelector('form')
  //       form.append(p);
  //       event.preventDefault();
  //       document.getElementById('yourName').value = "";
  //     }
  //   }
  //
  //
  //
