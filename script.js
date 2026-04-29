const payInput = document.getElementById("payAmount");
const receiveDisplay = document.getElementById("receiveAmount");
const swapBtn = document.getElementById("swapBtn");

const ethPrice = 3500; // สมมติราคา 1 ETH = 3500 USDC

// เมื่อพิมพ์ในช่องจ่าย ให้คำนวณยอดที่ได้รับทันที
payInput.addEventListener("input", function() {
    let ethAmount = payInput.value;
    receiveDisplay.value = ethAmount * ethPrice;
});

// เมื่อกดปุ่ม Swap ให้แจ้งเตือนการทำรายการ
swapBtn.addEventListener("click", function() {
    if(payInput.value > 0) {
        alert("ทำรายการ Swap ผ่านเครือข่าย Base เรียบร้อยแล้ว! 🔵");
    } else {
        alert("กรุณาใส่จำนวน ETH ก่อนครับ");
    }
});
