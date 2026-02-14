  const messageBox = document.getElementById('message-box');
  const audio = document.getElementById('bg-music');
  document.addEventListener('click', () => {
    if (audio.muted) {
      audio.muted = false;
      audio.play();
    }
  });

  const noBtn = document.getElementById('noBtn');
  let scale = 1;

function refuse() {
  scale -= 0.25;

  if (scale <= 0) {
    noBtn.style.display = "none";
  } else {
    noBtn.style.transform = `scale(${scale})`;
  }
}

function celebrate() {
  const duration = 1000;
  const end = Date.now() + duration;

  const interval = setInterval(function () {
    if (Date.now() > end) {
      return clearInterval(interval);
    }

    confetti({
      particleCount: 50,
      startVelocity: 50,
      spread:360,
      ticks: 100,
      origin: {
        x: Math.random(),
        y: 0
      }
    });
  }, 100);

  messageBox.style.display = 'flex';
}

const closeBtn = document.getElementById('closeBtn');
function collapse() {
  messageBox.style.display = 'none';
};

const senderText = document.getElementById('sender');
const messageText = document.getElementById('paragraph');

  let p1 = "Happy Birthday Mommy and also a happy valentine's day💖. I am so lucky to have you as my mother. Ever since I was born you have been so kind and caring with me. So today is the day that we say thank you and today is the day that we honor you. You are one of a kind. I love you and God loves you more.🙏❤️"
  let p2 = "Dear Mother,<br> Words are not enough to show how much I love you💞. The world isn't enough for you. To me you are the sun☀️, the moon🌙 and the stars✨. On this day, I will always and forever remember it was mother's birthday. When others don't believe in me you do. You lift me up when i am down. You are my light in the darkness. The amount of love shared on valentines day is not nearly enough for how much I love you. So this day you were born will always and forever be the best day of my life.💗💗"
  let p3 = "Happy Birthday, Mommy💕 On this beautiful Valentine's Day, I thank God 🙏 for blessing me with such a loving and amazing mother. I pray that he fills your life with good health, endless joy, and continued strength, and that all your dreams will come true. May your heart always be as full as the love you give so freely. I love you so much. 🙏💖"
  let p4 = "Words cannot express how grateful I am to have you as my mother💕. I pray 🙏 that the Lord Almighty will protect you and grant all of your heart's desires. I pray that everything good will follow you all the days of your life. Happy Birthday Mommy!!🍾🍾"
  let p5 = "We and Daddy bless you. (proverbs 31:28) <br> You are a comforter to your children. (isaiah 66:13) <br> You are clothed with strength and dignity, and you will laugh without fear of the future. (proverbs 31:26)"

  const messages = [
    {sender: "From Bekee...",
      message: p1,
    },
    {
      sender: "From Zee...",
      message: p2,
    },
    {
      sender: "From Chisom...",
      message: p3,
    },
    {
      sender: "From Maama...",
      message: p4,
    },
    {
      sender: "Prayers...",
      message: p5,
    }
  ]

  let currentIndex = 0;

function next(){
  const person = messages[currentIndex];

  senderText.innerHTML = person.sender;
  messageText.innerHTML = person.message;

  currentIndex++
  if(currentIndex >= messages.length){
    currentIndex = 0;
  };

  celebrate()
}