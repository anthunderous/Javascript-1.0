/*jshint esversion: 6 */
var
  week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  arr = ['1234567', '7654321', '3456712', '7123456', '1237654', '4567123', '3214567'];
date = new Date();
for (let i = 0; i < 7; i++) {
  switch (i) {
    case 5:
      document.write('<b>' + week[i] + '</b>' + '<br>');
      break;
    case 6:
      document.write('<b>' + week[i] + '</b>' + '<br>');
      break;
    default:
      if (i == (date.getDay() - 1)) {
        document.write('<i>' + week[i] + '</i>' + '<br>');
      } else
        document.write(week[i] + '<br>');
  }

}
for (let i = 0; i < 7; i++) {
  if ((arr[i].charAt(0) == "3") || (arr[i].charAt(0) == "7")) {
    console.log((i + 1) + ' element = ' + arr[i]);
  }
}