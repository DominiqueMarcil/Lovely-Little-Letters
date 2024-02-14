// const buttons = document.querySelectorAll('.button');
// const message = document.querySelector('.message');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const buttonText = button.querySelector('span').textContent;
//     button.addEventListener('click', () => {
//         const lid = document.querySelector('.lid');
//         envelope.classList.remove('animate-envelope');
//         void envelope.offsetWidth; // Trigger reflow
//         envelope.classList.add('animate-envelope');
//     });
    
//     // Depending on the class of the span, set a custom message
//     switch(buttonText) {
//       case 'happy':
//         message.textContent = "I love You! What I love about you is the way your smile dances like stars under the midnight moon! ❤️";
//         break;
//       case 'sad':
//         message.textContent = "I'm sorry you're feeling sad. Remember, I'm here for you.";
//         break;
//       case 'lonely':
//         message.textContent = "You're never alone. I'm sending you lots of love and hugs!";
//         break;
//       case 'bored':
//         message.textContent = "Let's find something fun to do together!";
//         break;
//       case 'bad':
//         message.textContent = "Bad days happen. But remember, you're stronger than you think!";
//         break;
//       case 'Excited':
//         message.textContent = "I'm excited too! Let's celebrate!";
//         break;
//       default:
//         message.textContent = "Custom message for other cases";
//         break;
//     }
//   });
// });
const buttons = document.querySelectorAll('.button');
const message = document.querySelector('.message');
const envelope = document.querySelector('.lid');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.querySelector('span').textContent;

    // Trigger the envelope animation
    envelope.classList.remove('animate-lid');
    void envelope.offsetWidth; // Trigger reflow
    envelope.classList.add('animate-lid');

    // Depending on the class of the span, set a custom message
    switch(buttonText) {
      case 'happy':
        message.textContent = "I love You! What I love about you is the way your smile dances like stars under the midnight moon! ❤️";
        break;
      case 'sad':
        message.textContent = "I'm sorry you're feeling sad. Remember, I'm here for you.";
        break;
      case 'lonely':
        message.textContent = "You're never alone. I'm sending you lots of love and hugs!";
        break;
      case 'bored':
        message.textContent = "Let's find something fun to do together!";
        break;
      case 'bad':
        message.textContent = "Bad days happen. But remember, you're stronger than you think!";
        break;
      case 'Excited':
        message.textContent = "I'm excited too! Let's celebrate!";
        break;
      default:
        message.textContent = "Custom message for other cases";
        break;
    }
  });
});

setTimeout(() => {
    lid.classList.add('animate-lid');
  }, 5);
  
// const buttons = document.querySelectorAll('.button');

// Close the lid and clear message on mouseout
lid.addEventListener('mouseout', () => {
lid.classList.remove('animate-lid');
message.textContent = '';
});