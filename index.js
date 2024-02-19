const seats = document.querySelectorAll(".seat");

let seatCount = 0;
let seatsLeft = 8;
let totalPrice = 0;

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];

    seat.addEventListener("click", function (clicked) {
        if (seatCount <= 3) {
            seatCount++;
            seatsLeft--;
            clicked.target.classList.add("bg-green");
            clicked.target.classList.add("pointer-events-none");
            clicked.target.classList.add("text-white");
            const seatName = clicked.target.innerText;
            const price = document.getElementById("ticket-price").innerText;
            const selectedContainer = document.getElementById("selected-place-container");
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerText = seatName;
            const p2 = document.createElement("p");
            p2.innerText = "Economy";
            const p3 = document.createElement("p");
            p3.innerText = price;
            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(p3);
            li.className = "flex justify-between w-full text-left mb-4";
            selectedContainer.appendChild(li);
            totalPrice = totalPrice + parseFloat(price);
            const totalPriceContainer = document.getElementById("total-price");
            totalPriceContainer.innerText = totalPrice;
        }
        else {
            alert("Unable to reserve more than four seats");
        }
        document.getElementById("seat-number").innerText = seatsLeft;
        document.getElementById("seat-count").innerText = seatCount;
        let total = document.getElementById("total-price").innerText;
        document.getElementById("grand-total").innerText = total;
    })
}

const applybtn = document.getElementById("apply-btn");
applybtn.addEventListener("click", function () {
    const coupon = document.getElementById("input-coupon").value;
    if (coupon === "NEW15") {
        const total = parseFloat(document.getElementById("total-price").innerText)
        const discount = total * 0.15;
        const grandTotal = total - discount;
        document.getElementById("grand-total").innerText = grandTotal;
        document.getElementById("hide-coupon").className = "hidden";
    }
    else if (coupon === "Couple 20") {
        const total = parseFloat(document.getElementById("total-price").innerText)
        const discount = total * 0.2;
        const grandTotal = total - discount;
        document.getElementById("grand-total").innerText = grandTotal;
        document.getElementById("hide-coupon").className = "hidden";
    }
})
