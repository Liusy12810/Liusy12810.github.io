

let canvas = document.getElementById("code-rain");
let ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let str = "SXCzero101010".split('');
let arr = Array(Math.ceil(canvas.width / 10)).fill(0);

console.log(arr)
console.log(str)

let rain = () => {
    ctx.fillStyle = "rgba(75, 76, 71, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    arr.forEach((item, idx) => {
        ctx.fillText(str[Math.floor(Math.random() * str.length)], idx * 10, item + 10);
        arr[idx] = item > canvas.height || item > 20 * canvas.height * Math.random() ? 0 : item + 10;
    })
};

// setInterval(rain, 50);