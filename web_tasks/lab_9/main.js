function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = today.getDay()-1;
    var month = today.getMonth()+1;
    var year =today.getFullYear();
    var dayName=days[today.getDay()]
    var day_of_week = today.get
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s + "<br>" + "date: " + dayName + " " + day + "." + month + "." + year;


    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  
  startTime();