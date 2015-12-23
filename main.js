$(document).ready(function () {
  var gmail = Gmail();
  var composes = gmail.dom.composes();

  gmail.observe.on('compose', function () {
    $('.Ap').on('click', function () {
      console.log('Click on .Ap');
    });
    $('textarea[name="to"]').on('click', function () {
      console.log('Click on To')
    });
    $('textarea[name="subjectbox"]').on('click', function () {
      console.log('Click to SubjectBox');
    });
  });
});

/*chrome.runtime.onMessage.addListener(function (mas) {
 if (mas) {
 currentInput.value = mas.toString();
 } else {
 console.log('err');
 }
 });*/
