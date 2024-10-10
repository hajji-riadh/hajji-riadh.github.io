// Array of texts to display
const texts = [
  "Web Developer",
  "Front End Developer",
  "Back End Developer",
  "Full Stack Developer",
  "MERN Developer",
  "UI/UX Designer",
];
function typeText(text, element) {
  let index = 0;
  element.textContent = "";
  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

// Function to set random text
function setRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  const randomText = texts[randomIndex];
  const spanElement = document.getElementById("random-text");
  typeText(randomText, spanElement);
}

// Set random text every 5 seconds
setInterval(setRandomText, 5000);

window.onload = setRandomText;

// email

function sendMail(event) {
  event.preventDefault();
  let params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email_id").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Initialize EmailJS
  const serviceID = "service_8y934bm";
  const templateID = "template_dunyyyi";
  emailjs.send(serviceID, templateID, params).then(function (response) {
    alert("SUCCESS!" + response.status);
  });
}

// dark mode
var icon = document.getElementById("icon");

// Check the saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  icon.src = "./img/sun.png";
} else {
  icon.src = "./img/moon.png";
}

icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "./img/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "./img/moon.png";
    localStorage.setItem("theme", "light");
  }
};



