let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
btn1.addEventListener("click", function () {
if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}
else {
tg.MainButton.setText("Вывести информацию о футболе");
item = "1";
tg.MainButton.show();
}
});
btn2.addEventListener("click", function () {
if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}
else {
tg.MainButton.setText("Вывести информацию о баскетболе");
item = "2";
tg.MainButton.show();
}
});
Telegram.WebApp.onEvent("mainButtonClicked", function () {
tg.sendData(item);
});

DISC = {
    '1': 'Футбо́л — командный вид спорта, в котором целью является забить мяч в ворота соперника ногами или другими частями тела (кроме рук) большее количество раз, чем команда соперника.',
    '2': 'Баскетбол - это командный вид спорта, в котором две команды, чаще всего по пять игроков в каждой, противостоящие друг другу на прямоугольной площадке.'
}

