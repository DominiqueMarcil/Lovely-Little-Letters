const buttons = document.querySelectorAll('.button');
const message = document.querySelector('.message');
const envelope = document.querySelector('.lid');
const container = document.querySelector('.container'); // Add this line

// Function to close the envelope (lid) animation
function closeEnvelope() {
  envelope.classList.remove('animate-lid');
  message.textContent = ''; // Clear message
}

// Add event listener to close envelope animation when mouse leaves container
container.addEventListener('mouseleave', closeEnvelope);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.querySelector('span').textContent;

    // Trigger the envelope animation
    envelope.classList.remove('animate-lid');
    void envelope.offsetWidth; // Trigger reflow
    envelope.classList.add('animate-lid');

    // Set a custom message based on the button text
    switch(buttonText) {
      case 'happy':
        message.textContent = "You are so brilliant, in everyway! Thank you for being who you are! I love you!";
        break;
      case 'sad':
        message.textContent = "First, take a deep breath in and out. Then find 1 thinng you can see, one you can smell and one you can touch. Do that until you feel grounded, and remember that you're not alone. I'm here for you! I love you, and you're allowed to break down sometimes. It's okay to not be okay, dont be afraid to call me if you need!";
        break;
      case 'lonely':
        message.textContent = "There are so many people who care about you. You are a light in peoples lives. You bring so much joy whereever you are; you are appreciated, cared for, and loved. It may not feel like it, right now, and people don't always know they need to show it, but I know that you are loved by so many because, well you're you, how could you not be! You're amazing! I'm here for you, and I love you";
        break;
      case 'bored':
        message.textContent = "Okay, let's do something fun! Create something unique and creative using only random objects you find around your house! Rules: You can't use any art supplies, and you have to use at least 5 different objects. I can't wait to see what you come up with! Send me a picture!";
        break;
      case 'bad':
        message.textContent = "I'm sorry you're feeling this way. Sometimes giving the situation time to breather can be helpful. If you are able, try going for a walk or climbing, those usually help! and if not that, then maybe you need to take some more time to yourself, and that's okay too. Drink plenty of wanter and make sure you're getting your sleep! Don't ever hesitate to call or text me if you need to talk, I'm here for you!";
        break;
      case 'excited':
        message.textContent = "I'm excited too! Let's celebrate! I am so proud of you, no matter what it is!! You're amazing and you deserve to be happy! I can't wait to hear all about it! I love you!";
        break;
      default: //happy//
        message.textContent = "I'm so happy you're happy! Your smile lights up a room, you deserve this happiness and so much more! Tell me all about what made you happy the next time we talk, I cant wait to hear about it! I love you!";
        break;
    }
  });
});

