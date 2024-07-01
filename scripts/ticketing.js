let count = 0;
let purchaseSeats = [];
let seatName = document.getElementById('seatName');
let seatType = document.getElementById('seatType');
let seatPrice = document.getElementById('seatPrice');
let TotalPrice = document.getElementById('TotalPrice');
let availableSeats = document.getElementById('availableSeats');
let discount = 0;
let grandTotal = document.getElementById('GrandTotal');

function clickMe(seat) {
  const updtNum = document.getElementById('seats');
  let seatText = seat.textContent.trim();

  if (purchaseSeats.includes(seatText)) {
    // Unselect the seat
    purchaseSeats = purchaseSeats.filter(s => s !== seatText);
    updtNum.innerText = purchaseSeats.length;
    seat.classList.remove('bg-secondary', 'hover:bg-secondary');

    // Remove seat details from lists
    let seatIndex = Array.from(seatName.children).findIndex(li => li.innerText === seatText);
    if (seatIndex !== -1) {
      seatName.removeChild(seatName.children[seatIndex]);
      seatType.removeChild(seatType.children[seatIndex]);
      seatPrice.removeChild(seatPrice.children[seatIndex]);
    }
  } else {
    // Select the seat
    if (purchaseSeats.length < 4) {
      purchaseSeats.push(seatText);
      updtNum.innerText = purchaseSeats.length;
      seat.classList.add('bg-secondary', 'hover:bg-secondary');

      let li = document.createElement('li');
      li.innerText = seat.textContent;
      seatName.appendChild(li);

      let liseattype = document.createElement('li');
      liseattype.innerText = "Economy";
      seatType.appendChild(liseattype);

      let liseatPrice = document.createElement('li');
      liseatPrice.innerText = "550";
      seatPrice.appendChild(liseatPrice);
    } else {
      alert("You cannot purchase more than 4 tickets.");
    }
  }

  availableSeats.textContent = 40 - purchaseSeats.length;
  TotalPrice.textContent = purchaseSeats.length * 550;
  grandTotal.textContent = purchaseSeats.length * 550;

  updateButtons();
}

function updateButtons() {
  const btn = document.getElementById('next-btn');
  const btn2 = document.getElementById('coup-btn');
  const disDiv = document.getElementById('discount-div');

  if (parseFloat(grandTotal.textContent) > 0) {
    btn.removeAttribute('disabled');
    btn2.removeAttribute('disabled');
    disDiv.classList.remove('hidden');
  } else {
    btn.setAttribute('disabled', 'disabled');
    btn2.setAttribute('disabled', 'disabled');
    disDiv.classList.add('hidden');
  }
}

function deductPrice() {
  let coupoun = document.getElementById('coupoun').value;
  let coupounSection = document.getElementById('coupounSection');
  if (coupoun === 'NEW15') {
    grandTotal.textContent = parseFloat(TotalPrice.textContent) - (parseFloat(TotalPrice.textContent)) * .15;
    coupounSection.classList.add('hidden');
  } else if (coupoun === 'Couple 20') {
    grandTotal.textContent = parseFloat(TotalPrice.textContent) - (parseFloat(TotalPrice.textContent)) * .2;
    coupounSection.classList.add('hidden');
  } else {
    alert("Invalid Coupoun");
  }
}

function discountPrice() {
  let discountAmount = document.getElementById('dis-amount');
  let coupoun = document.getElementById('coupoun').value;
  if (coupoun === 'NEW15') {
    discountAmount.textContent = (parseFloat(TotalPrice.textContent)) * .15;
  } else if (coupoun === 'Couple 20') {
    discountAmount.textContent = (parseFloat(TotalPrice.textContent)) * .2;
  } else {
    alert('No discount');
  }
}

function submit() {
  let modal = document.getElementById("modalSection");
  let main = document.getElementById("main");
  main.classList.add("hidden");
  modal.classList.remove("hidden");
}

function backToWebsite() {
  let modal = document.getElementById("modalSection");
  let main = document.getElementById("main");
  location.reload();
  modal.classList.add("hidden");
  main.classList.remove("hidden");
}
