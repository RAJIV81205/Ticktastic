function hideLoader() {
    const loaderContainer = document.getElementById('loader-container');
    loaderContainer.style.display = 'none';
}

// Add event listener for the window load event
window.addEventListener('load', hideLoader);

const currentDate = new Date();


document.querySelectorAll(".card").forEach(div =>{
    div.addEventListener("click", function(){
        const movieName = this.dataset.movieName;
        const moviePrice = this.dataset.moviePrice;

        sessionStorage.setItem('movieName', movieName);
        sessionStorage.setItem('moviePrice', moviePrice);
        console.log(movieName);

        window.location.href = `booking.html`;

    });
});


function isPaymentPage() {
    return window.location.pathname.includes('booking.html');
}

// Run the function only if the current page is payment.html
window.onload = function () {
    if (isPaymentPage()) {
        fetchDetails();
    }
}


function fetchDetails(){
    const movieName = sessionStorage.getItem('movieName');
    const moviePrice = sessionStorage.getItem('moviePrice');
    const todaydate = currentDate.getDate();
    const todaymonth = currentDate.getMonth() + 1;
    const todayyear = currentDate.getFullYear();



    document.getElementById("movie-name").innerText = ` Movie Name : ${movieName}`;
    document.getElementById("movie-price").innerText = ` Ticket Price: ${moviePrice}`;
    document.getElementById("movie-date").innerText = ` Date : ${todaydate}/${todaymonth}/${todayyear}`;

}

function showLogin() {
    document.getElementById("my-popover").style.display = "flex";
    document.getElementById("signup-container").style.display="none";
    document.getElementById("login-container").style.display="flex";

}

// Close the login popover (optional, depending on your requirements)
function closeLogin() {
    document.getElementById("my-popover").style.display = "none";
}

function showSignup(){
   
    document.getElementById("login-container").style.display="none"
    document.getElementById("signup-container").style.display="flex";
}


