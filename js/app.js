const endDate = "21 June 2023 10:00 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

cloak = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000; //calculate the diffrence and convert to minuts
  if (diff < 0) return;
  //for days
  inputs[0].value = Math.floor(diff / 3600 / 24);

  //for Hours
  inputs[1].value = Math.floor((diff / 3600) % 24);

  //for Minus
  inputs[2].value = Math.floor((diff / 60) % 60);

  //for seconds
  inputs[3].value = Math.floor(diff % 60);
};

cloak();

setInterval(() => {
  cloak();
}, 1000);
