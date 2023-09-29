const showToastButton = document.getElementById('show-toast');

showToastButton.addEventListener('click', () => {
    document.getElementById("myToast").classList.remove("hidden");
    // Hide the toast after 5 seconds (5000ms)
    // you can set a shorter/longer time by replacing "5000" with another number
    setTimeout(function () {
        document.getElementById("myToast").classList.add("hidden");
    }, 5000);
  });