var $ = function (selector) {
  var elements = [];

  if (document.body.getElementsByTagName(selector)) {
    return document.body.getElementsByTagName(selector);
  }



  return elements;
};