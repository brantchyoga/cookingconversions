var ctof = function(number) {
  return (number * 1.8 + 32);
};

var ftoc = function(number) {
  return (number - 32)/1.8;
};

var imptometric = function(number) {
  return number * 2.54;
};

var metrictoimp = function(number) {
  return number / 2.54;
};

$(function() {
  $("form#cel").submit(function(event) {
    event.preventDefault();
    $("#output").text(ctof(parseFloat($("#ctf").val())).toFixed(2));
  });
});
$(function() {
  $("form#feh").submit(function(event) {
    event.preventDefault();
    $("#output2").text(ftoc(parseFloat($("#ftc").val())).toFixed(2));
  });
});
$(function() {
  $("form#imp").submit(function(event) {
    event.preventDefault();
    $("#output3").text(imptometric(parseFloat($("#itm").val())).toFixed(2));
  });
});
$(function() {
  $("form#met").submit(function(event) {
    event.preventDefault();
    $("#output4").text(metrictoimp(parseFloat($("#mti").val())).toFixed(2));
  });
});
