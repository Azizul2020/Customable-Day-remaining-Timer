var ok = document.querySelector(".submit");
ok.addEventListener("click", function() {
    setInterval(function() {
        var mon = document.querySelector(".month").value;
        var date = document.querySelector(".day").value;
        var Year = document.querySelector(".year").value;
        var Hr = document.querySelector(".hour").value;
        var Mn = document.querySelector(".minute").value;
        var amPm = document.querySelector(".am_pm").value;
        var destination = new Date(mon + " " + date + "," + Year + " " + Hr + ":" + Mn + ":00 " + amPm).getTime();
        var now = new Date().getTime();
        var remaining = destination - now;
        var day = Math.floor(remaining / (1000 * 60 * 60 * 24));
        var hour = Math.floor((remaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        var minute = Math.floor((remaining % (1000 * 60 * 60) / (1000 * 60)));
        var second = Math.floor((remaining % (1000 * 60) / 1000));
        var show = document.querySelector(".display h1");
        if (remaining > 1) {
            if (second < 10) {
                second = "0" + second;
            } else { second = second }
            if (minute < 10) {
                minute = "0" + minute;
            } else { minute = minute }
            if (hour < 10) {
                hour = "0" + hour;
            } else { hour = hour }
            if (day < 10) {
                day = "00" + day;
            } else if (day < 100) {
                day = "0" + day;
            } else {
                day = day
            }
            show.innerHTML = day + " <sub>day</sub> : " + hour + " <sub>hr</sub> : " + minute + "  <sub>min</sub> : " + second + " <sub>sec</sub>";

        } else {
            show.innerHTML = `000 : <sub>day</sub> 00 : <sub>hr</sub> 00 : <sub>min</sub> 00 <sub>sec</sub>`;
        }


    }, 1000);

})