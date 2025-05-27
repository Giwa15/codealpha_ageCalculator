"use strict";

document.getElementById("age").addEventListener("submit", function (e) {
  e.preventDefault();

  const output = document.getElementById("my_Age");
  const dobInput = document.getElementById("dob");
  const dob = new Date(dobInput.value);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  output.textContent = `I am : ${years} years, ${months} months, and ${days} days Old.`;

  dobInput.value = "";

  setTimeout(() => {
    output.textContent = " ";
  }, 10000);
});
