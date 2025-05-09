window.onload = function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('fade-out');
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 1000);   
    }, 2000);  
};


const text = "Пожалуйста, подождите...";
const container = document.getElementById("text");

text.split("").forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.classList.add("char");
  span.style.animationDelay = `${index * 0.1}s`;
  container.appendChild(span);
});