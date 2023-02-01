$(".begin_hide").hide();
localStorage.setItem("clickCount", 0);
localStorage.setItem("home", 1);

function beginClick() {
  $(".begin_page").hide();
  $(".begin_hide").show();
}

$("#home").click(function () {
  const clickCount = Number(localStorage.getItem("clickCount"));
  const nextCount = clickCount + 1;
  localStorage.setItem("clickCount", nextCount);
  console.log(`Current Click Count: ${nextCount}.`);

  if (nextCount % 3 === 0 && clickCount !== 0) {
    $("#home").fadeOut((duration = 700), function () {
      $("#photos").fadeIn(700);
    });
  }
});

$("#photos").click(function () {
  const clickCount = Number(localStorage.getItem("clickCount"));
  const nextCount = clickCount + 1;
  localStorage.setItem("clickCount", nextCount);
  console.log(`Current Click Count: ${nextCount}.`);

  if (nextCount % 3 === 0 && clickCount !== 0) {
    $("#photos").fadeOut((duration = 1000), function () {
      $("#home").fadeIn(700);
    });
  }
});
