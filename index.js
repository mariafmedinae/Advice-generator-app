getAdvice();

function getAdvice() {
    fetch('	https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
      document.getElementById("advice-id").innerHTML = `ADVICE #${data.slip.id}`;
      document.getElementById("advice").innerHTML = `“${data.slip.advice}”`;
    });
}