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
  count = count + 1;
  let seatText = seat.textContent.trim();
  if (purchaseSeats.length < 4) {
    if (!purchaseSeats.includes(seatText)) {
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
    }
    availableSeats.textContent = 40 - purchaseSeats.length
    TotalPrice.textContent = purchaseSeats.length * 550;
    grandTotal.textContent = purchaseSeats.length * 550;

  }
  else {
    alert("You can not purchase more than 4 tickets.")
  }

  const btn = document.getElementById('next-btn');
  const btn2 = document.getElementById('coup-btn');
  const disDiv = document.getElementById('discount-div');

  if(parseFloat(grandTotal.textContent) > 0){
    btn.removeAttribute('disabled');
    btn2.removeAttribute('disabled');
    disDiv.classList.remove('hidden');
  }
  else{
    btn.setAttribute('disabled');
    btn2.setAttribute('disabled');
  }

  // console.log(purchaseSeats);

}
function deductPrice() {
  let coupoun = document.getElementById('coupoun').value;
  let coupounSection = document.getElementById('coupounSection');
  if (coupoun === 'NEW15') {
    grandTotal.textContent = parseFloat(TotalPrice.textContent) - (parseFloat(TotalPrice.textContent)) * .15;
    coupounSection.classList.add('hidden');
  }
  else if (coupoun === 'Couple 20') {
    grandTotal.textContent = parseFloat(TotalPrice.textContent) - (parseFloat(TotalPrice.textContent)) * .2;
    coupounSection.classList.add('hidden');
  }
  else {
    alert("Invalid Coupoun")
  }
}
function discountPrice(){
  let discountAmount = document.getElementById('dis-amount');
  let coupoun = document.getElementById('coupoun').value;
  if(coupoun === 'NEW15'){
    discountAmount.textContent = (parseFloat(TotalPrice.textContent)) * .15;
  }
  else if(coupoun === 'Couple 20'){
    discountAmount.textContent = (parseFloat(TotalPrice.textContent)) * .2;
  }
  else{
    alert('No discount');
  }
}


function submit() {
  let modal = document.getElementById("modalSection");
  let main = document.getElementById("main");
  main.classList.add("hidden");
  modal.classList.remove("hidden");

  // console.log("main is hidden");
}

function backToWebsite() {
  let modal = document.getElementById("modalSection");
  let main = document.getElementById("main");
  location.reload();
  modal.classList.add("hidden");
  main.classList.remove("hidden");
}

