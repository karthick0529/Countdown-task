document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');
  
    let count = 10;
  
    const countdown = (count, callback) => {
      if (count === 0) {
        messageElement.textContent = 'Happy Independence Day';
        callback();
      } else {
        countdownElement.textContent = count;
        setTimeout(() => {
          countdown(count - 1, callback);
        }, 1000);
      }
    };
  
    countdown(count, () => {
      countdownElement.style.display = 'none';
    });
  });
  