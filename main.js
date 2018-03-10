const countdown = document.querySelector('.countdown');

// Set Launch Date
const launchDate = new Date('June 12, 2018 00:00:00').getTime();

// Update Every Second
const intvl = setInterval(() => {

    // Get Today's date and time (ms)
    const now = new Date().getTime();

    // Distance from Now to the Launch Date
    const distance = launchDate - now;

    // Time Calculations
    const days = Math.floor(distance/ (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));

    // Display Result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    // If Launch date passed
    if (distance < 0) {
        clearInterval(intvl);

        // Style and Output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched';

    }

}, 1000);
