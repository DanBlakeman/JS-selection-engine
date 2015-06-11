var $ = function (selector) {
  var elements = [];

  var findHtmlTag = selector.match(/[a-z]*/)[0];

  var findClass = function() {
    if (selector.match(/(\.\w*)/)) {
      console.log(selector.match(/(\.\w*)/)[0]);
    } else {
      console.log('none');
    }
  };

  var findId = function() {
    if (selector.match(/(\#\w*)/)) {
      console.log(selector.match(/(\#\w*)/)[0]);
    } else {
      console.log('none');
    }
  };



  // if (findClass) {
  //   return document.body.getElementsByTagName(findTag);
  // }



  return elements;
};