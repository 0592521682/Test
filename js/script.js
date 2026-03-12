let button = document.getElementById("btn");
let msg = document.getElementById("msg");

button.onclick = function () {
    if (msg.innerText == "") {
        msg.innerText = "🎉 Hello from JavaScript! 🎉";
        document.body.style.background = "#e0ffe0"; // تغيير لون الخلفية عند ظهور الرسالة
    } else {
        msg.innerText = "";
        document.body.style.background = "#f0f4f8"; // العودة للون الأصلي
    }
};