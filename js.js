function changeColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0FF33", "#FF33F6"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  }
  