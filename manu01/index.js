
    // const playButton = document.getElementById('button02');
    // const messageElement = document.getElementById('manu');
    // const coinImage = document.getElementById('coin');
    // var newSound = new Audio("manu01.mp3");


    // playButton.addEventListener('click', function () {
    //   const h01Selected = document.querySelector('.h01').classList.contains('selected');
    //   const h02Selected = document.querySelector('.h02').classList.contains('selected');

    //   if (!h01Selected && !h02Selected) {
       
    //     messageElement.textContent = 'Enter Bet Amount';
    //     messageElement.style.color = '#fff';
    //   } else {
       
    //     coinImage.classList.add('flipped', 'move-animation');
    //     newSound.play();

    //     setTimeout(function () {
    //       const randomNumber = Math.random(); 
    //       const result = randomNumber < 0.5 ? 'head' : 'tail'; 
    //       coinImage.src = result === 'head' ? 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png' : 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456287/tail_image-removebg-preview_za10pk.png';

    //       if ((result === 'head' && h01Selected) || (result === 'tail' && h02Selected)) {
    //         messageElement.textContent = 'Congratulations! You won!';
    //         messageElement.style.color = 'green';
    //       } else {
    //         messageElement.textContent = 'Sorry! You lose!';
    //         messageElement.style.color = 'red';
    //       }

         
    //       setTimeout(function () {
    //         coinImage.classList.remove('flipped', 'move-animation');
    //       }, 1000); 
    //     }, 1000); 
    //   }
    // });

    // const h01Element = document.querySelector('.h01');
    // const h02Element = document.querySelector('.h02');

    // h01Element.addEventListener('click', function () {
    //   h01Element.classList.toggle('selected');
    //   h02Element.classList.remove('selected');
    //   messageElement.textContent = '';
    //   messageElement.style.color = '';
    //   coinImage.src = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png';
    // });

    // h02Element.addEventListener('click', function () {
    //   h02Element.classList.toggle('selected');
    //   h01Element.classList.remove('selected');
    //   messageElement.textContent = '';
    //   messageElement.style.color = '';
    //   coinImage.src = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png';
    // });




//     const playButton = document.getElementById('button02');
// const messageElement = document.getElementById('manu');
// const coinImage = document.getElementById('coin');
// const timerElement = document.getElementById('timer02');
// const timerElement01 = document.getElementById('timer01');
// const inputField = document.querySelector('.form01');
// const headOption = document.querySelector('.h01');
// const tailOption = document.querySelector('.h02');
// var newSound = new Audio("manu01.mp3");

// let timer = 20; // Initial timer value in seconds
// let countdownInterval; // Variable to store the countdown interval
// let canSelectImage = true; // Flag to track whether the user can select an image

// // Function to update the timer display
// function updateTimerDisplay() {
//   timerElement.textContent = timer;
  
//   // Change timer color to red between 10 seconds and 0 seconds
//   if (timer <= 10 && timer > 0) {
//     timerElement.style.color = 'red';
//     timerElement01.style.color = 'red';
//   } else {
//     timerElement.style.color = ''; 
//     timerElement01.style.color = '';// Reset to default color
//   }
// }

// // Function to start the countdown timer
// function startCountdown() {
//   countdownInterval = setInterval(function () {
//     timer--; // Decrease timer by 1 second
//     updateTimerDisplay();

//     if (timer === 10) {
//       // Disable input and selections when timer reaches 10 seconds
//       inputField.disabled = true;
//       canSelectImage = false;
      
//       // Decrease opacity of images and input field
//       headOption.style.opacity = 0.5;
//       tailOption.style.opacity = 0.5;
//       inputField.style.opacity = 0.5;
//     }

//     if (timer === 0) {
//       clearInterval(countdownInterval); // Stop the countdown
//       coinImage.classList.add('flipped', 'move-animation');
//       newSound.play();

//       // Simulate the coin flip animation
//       setTimeout(function () {
//         const randomNumber = Math.random();
//         const result = randomNumber < 0.5 ? 'head' : 'tail';

//         coinImage.src = result === 'head' ? 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png' : 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456287/tail_image-removebg-preview_za10pk.png';

//         if ((result === 'head' && headOption.classList.contains('selected')) || (result === 'tail' && tailOption.classList.contains('selected'))) {
//           messageElement.textContent = 'Congratulations! You won!';
//           messageElement.style.color = 'green';
//         } else {
//           messageElement.textContent = 'Sorry! You lose!';
//           messageElement.style.color = 'red';
//         }

//         setTimeout(function () {
//           coinImage.classList.remove('flipped', 'move-animation');
//         }, 1000);
//       }, 1000);
//     }
//   }, 1000);
// }

// // Function to handle image selection
// function handleImageSelection(imageElement) {
//   if (canSelectImage) {
//     // Remove the selected class from both images
//     headOption.classList.remove('selected');
//     tailOption.classList.remove('selected');

//     // Add the selected class to the clicked image
//     imageElement.classList.add('selected');
//   }
// }

// headOption.addEventListener('click', function () {
//   handleImageSelection(headOption);
// });

// tailOption.addEventListener('click', function () {
//   handleImageSelection(tailOption);
// });

// // Start the countdown timer when the page is reloaded
// window.addEventListener('load', startCountdown);

// playButton.addEventListener('click', function () {
//   // Your existing code to handle the game logic...
// });





// const playButton = document.getElementById('button02');
// const messageElement = document.getElementById('manu');
// const coinImages = document.querySelectorAll('.coin-image'); // Select all coin images
// const timerElement = document.getElementById('timer02');
// const timerElement01 = document.getElementById('timer01');
// const inputField = document.querySelector('.form01');
// const headOption = document.querySelector('.h01');
// const tailOption = document.querySelector('.h02');
// var newSound = new Audio("manu01.mp3");
// let a = document.getElementById("resultDisplay");
// const headOption01 = document.getElementById('headb');
// const tailOption01 = document.getElementById('tailb');
// const inputState = document.getElementById('inputState');
// const balanceDisplay = document.getElementById('balanceDisplay');

// let timer = 20; // Initial timer value in seconds
// let countdownInterval; // Variable to store the countdown interval
// let canSelectImage = true; // Flag to track whether the user can select an image

// // Winning image URL
// const winningImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1693767311/nnn_mzjdgd.png';
// const losingImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-lose-comic-speech-bubble-cartoon-game-assets-vector-9673681-removebg-preview_dowzhf.png';

// // Function to disable the select element
// // Add an event listener to the select element to listen for changes
// inputState.addEventListener('change', function () {
//   if (timer <= 10) {
//     inputState.blur(); // Remove focus to prevent interaction
//     return; // Prevent interaction when the timer is 10 seconds or less
//   }

//   // Get the selected option
//   const selectedOption = inputState.options[inputState.selectedIndex];
  
//   // Get the balance value associated with the selected option using the dataset property
//   const balanceValue = selectedOption.dataset.balance;
  
//   // Update the content of the balance display span
//   balanceDisplay.textContent = `${balanceValue} Rupees`;
// });

// let isSelectDisabled = false;

// function updateTimerDisplay() {
//   timerElement.textContent = timer;
  

//   // Change timer color to red between 10 seconds and 0 seconds
//   if (timer <= 10 && timer > 0) {
//     timerElement.style.color = 'red';
//     timerElement01.style.color = 'red';
//     headOption01.style.opacity = 0.5;
//     tailOption01.style.opacity = 0.5;
//     inputState.style.opacity = 0.5;
//     balanceDisplay.style.opacity = 0.5;
    
//   } else {
//     timerElement.style.color = '';
//     timerElement01.style.color = '';
//     headOption01.style.opacity = 1;
//     tailOption01.style.opacity = 1;
//     inputState.style.opacity = 1;
//     balanceDisplay.style.opacity = 1;
//   }
// }

// // Function to start the countdown timer
// function startCountdown() {
//   // Reset the timer to 20 seconds
//   timer = 20;
//   updateTimerDisplay();

//   if (inputField) {
//     canSelectImage = true;
//     headOption01.style.opacity = 1; // Reset opacity
//     tailOption01.style.opacity = 1; // Reset opacity
//     inputField.style.opacity = 1;
//     enableSelectElement(); // Enable the select element
//   }

//   countdownInterval = setInterval(function () {
//     timer--;
//     updateTimerDisplay();

//     if (timer === 10) {
//       if (inputField) {
//         inputField.disabled = true;
//         canSelectImage = false;
//         headOption01.style.opacity = 0.5;
//         tailOption01.style.opacity = 0.5;
//         if (inputField) {
//           inputField.style.opacity = 0.5;
//         }
//         inputState.disabled = true;// Disable the select element
//       }
//     }

//     if (timer === 0) {
//       clearInterval(countdownInterval);
//       coinImages.forEach((coinImage) => {
//         coinImage.classList.add('flipped', 'move-animation');
//       });
//       newSound.play();

//       setTimeout(function () {
//         const randomNumber = Math.random();
//         const result = randomNumber < 0.5 ? 'head' : 'tail';

//         coinImages.forEach((coinImage) => {
//           coinImage.src = result === 'head' ? 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png' : 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456287/tail_image-removebg-preview_za10pk.png';
//         });

//         if ((result === 'head' && headOption.classList.contains('selected')) || (result === 'tail' && tailOption.classList.contains('selected'))) {
//           // Show the Bootstrap modal with the winning image
//           setTimeout(function () {
//             $('#exampleModal01').modal('show');
//             // Add the winning image to the modal body
//             const modalBody = document.querySelector('.modal-body01');
//             a.innerHTML = `<img src="${winningImageUrl}" alt="Congratulations! You Won">`;
//           }, 1500);
//         } else {
//           setTimeout(function () {
//             // Show the Bootstrap modal with the losing image
//             $('#exampleModal01').modal('show');
//             // Add the losing image to the modal body
//             const modalBody = document.querySelector('.modal-body01');
//             a.innerHTML = `<img src="${losingImageUrl}" alt="Sorry! You Lose">`;
//           }, 1500);
//         }

//         setTimeout(function () {
//           coinImages.forEach((coinImage) => {
//             coinImage.classList.remove('flipped', 'move-animation');
//           });
//         }, 1000);
//       }, 1000);
//     }
//   }, 1000);
// }

// function handleImageSelection(imageElement) {
//   if (canSelectImage && timer > 10) {
//     headOption.classList.remove('selected');
//     tailOption.classList.remove('selected');
//     imageElement.classList.add('selected');
//     if (imageElement === headOption) {
//       headOption01.style.backgroundColor = 'green';
//       tailOption01.style.backgroundColor = ''; // Reset background color for the other option
//     } else if (imageElement === tailOption) {
//       tailOption01.style.backgroundColor = 'green';
//       headOption01.style.backgroundColor = ''; // Reset background color for the other option
//     }
//   }
// }

// headOption.addEventListener('click', function () {
//   handleImageSelection(headOption);
// });

// tailOption.addEventListener('click', function () {
//   handleImageSelection(tailOption);
// });

// // Event listener for the close button
// const closeButton = document.getElementById('close02');

// closeButton.addEventListener('click', function () {
//   // Start the countdown timer when the close button is clicked
//   startCountdown();

//   headOption01.style.backgroundColor = '';
//   tailOption01.style.backgroundColor = '';
//   balanceDisplay.textContent =  `0 Rupees`;
//   if (inputField) {
//     inputField.value = '';
//   }
// });

// // Start the countdown timer initially when the page loads
// window.addEventListener('load', startCountdown);


// Your existing JavaScript code goes here

// Get the necessary elements
const playButton = document.getElementById('button02');
const messageElement = document.getElementById('manu');
const coinImages = document.querySelectorAll('.coin-image'); // Select all coin images
const timerElement = document.getElementById('timer02');
const timerElement01 = document.getElementById('timer01');
const inputField = document.querySelector('.form01');
const headOption = document.querySelector('.h01');
const tailOption = document.querySelector('.h02');
var newSound = new Audio("manu01.mp3");
let a = document.getElementById("resultDisplay");
const headOption01 = document.getElementById('headb');
const tailOption01 = document.getElementById('tailb');
const inputState = document.getElementById('inputState');
const balanceDisplay = document.getElementById('balanceDisplay');

let timer = 150; // Initial timer value in seconds
let countdownInterval; // Variable to store the countdown interval
let canSelectImage = true; // Flag to track whether the user can select an image

// Winning and losing image URLs
const winningImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1693767311/nnn_mzjdgd.png';
const losingImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-lose-comic-speech-bubble-cartoon-game-assets-vector-9673681-removebg-preview_dowzhf.png';

// Function to disable the select element
// Add an event listener to the select element to listen for changes
inputState.addEventListener('change', function () {
  if (timer <= 10) {
    inputState.blur(); // Remove focus to prevent interaction
    return; // Prevent interaction when the timer is 10 seconds or less
  }

  // Get the selected option
  const selectedOption = inputState.options[inputState.selectedIndex];
  
  // Get the balance value associated with the selected option using the dataset property
  const balanceValue = selectedOption.dataset.balance;
  
  // Update the content of the balance display span
  balanceDisplay.textContent = `${balanceValue} Rupees`;
});

let isSelectDisabled = false;

function updateTimerDisplay() {
  timerElement.textContent = timer;
  
  // Change timer color to red between 10 seconds and 0 seconds
  if (timer <= 10 && timer > 0) {
    timerElement.style.color = 'red';
    timerElement01.style.color = 'red';
    headOption01.style.opacity = 0.5;
    tailOption01.style.opacity = 0.5;
    inputState.style.opacity = 0.5;
    balanceDisplay.style.opacity = 0.5;
    
  } else {
    timerElement.style.color = '';
    timerElement01.style.color = '';
    headOption01.style.opacity = 1;
    tailOption01.style.opacity = 1;
    inputState.style.opacity = 1;
    balanceDisplay.style.opacity = 1;
  }
}

// Function to start the countdown timer
function startCountdown() {
  // Reset the timer to 20 seconds
  timer = 150;
  updateTimerDisplay();

  if (inputField) {
    canSelectImage = true;
    headOption01.style.opacity = 1; // Reset opacity
    tailOption01.style.opacity = 1; // Reset opacity
    inputField.style.opacity = 1;
    enableSelectElement(); // Enable the select element
  }

  countdownInterval = setInterval(function () {
    timer--;
    updateTimerDisplay();

    if (timer === 10) {
      if (inputField) {
        inputField.disabled = true;
        canSelectImage = false;
        headOption01.style.opacity = 0.5;
        tailOption01.style.opacity = 0.5;
        if (inputField) {
          inputField.style.opacity = 0.5;
        }
        inputState.disabled = true;// Disable the select element
      }
    }

    if (timer === 0) {
      clearInterval(countdownInterval);
      coinImages.forEach((coinImage) => {
        coinImage.classList.add('flipped', 'move-animation');
      });
      newSound.play();

      setTimeout(function () {
        const randomNumber = Math.random();
        const result = randomNumber < 0.5 ? 'head' : 'tail';

        coinImages.forEach((coinImage) => {
          coinImage.src = result === 'head' ? 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png' : 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456287/tail_image-removebg-preview_za10pk.png';
        });

        if ((result === 'head' && headOption.classList.contains('selected')) || (result === 'tail' && tailOption.classList.contains('selected'))) {
          // Show the Bootstrap modal with the winning image
          setTimeout(function () {
            $('#exampleModal01').modal('show');
            // Add the winning image to the modal body
            const modalBody = document.querySelector('.modal-body01');
            a.innerHTML = `<img src="${winningImageUrl}" alt="Congratulations! You Won">`;
          }, 1500);
        } else {
          setTimeout(function () {
            // Show the Bootstrap modal with the losing image
            $('#exampleModal01').modal('show');
            // Add the losing image to the modal body
            const modalBody = document.querySelector('.modal-body01');
            a.innerHTML = `<img src="${losingImageUrl}" alt="Sorry! You Lose">`;
          }, 1500);
        }

        setTimeout(function () {
          coinImages.forEach((coinImage) => {
            coinImage.classList.remove('flipped', 'move-animation');
          });
        }, 1000);
      }, 1000);
    }
  }, 1000);
}

function handleImageSelection(imageElement) {
  if (canSelectImage && timer > 10) {
    headOption.classList.remove('selected');
    tailOption.classList.remove('selected');
    imageElement.classList.add('selected');
    if (imageElement === headOption) {
      headOption01.style.backgroundColor = 'green';
      tailOption01.style.backgroundColor = ''; // Reset background color for the other option
    } else if (imageElement === tailOption) {
      tailOption01.style.backgroundColor = 'green';
      headOption01.style.backgroundColor = ''; // Reset background color for the other option
    }
  }
}

headOption.addEventListener('click', function () {
  handleImageSelection(headOption);
});

tailOption.addEventListener('click', function () {
  handleImageSelection(tailOption);
});

// Event listener for the close button
const closeButton = document.getElementById('close02');

closeButton.addEventListener('click', function () {
  // Start the countdown timer when the close button is clicked
  startCountdown();

  headOption01.style.backgroundColor = '';
  tailOption01.style.backgroundColor = '';
  balanceDisplay.textContent =  `0 Rupees`;
  if (inputField) {
    inputField.value = '';
  }
});


window.addEventListener('load', startCountdown);

