var $ = function (selector) {
  var elements = [];



  var findHtmlTag = function() {
   if (selector.match(/[a-z]*/)[0]) {
      return selector.match(/[a-z]*/)[0]
      ;
    }
    return null;
  };

  var findClass = function() {
    if (selector.match(/(\.\w*)/)) {
      return selector.match(/(\.\w*)/)[0];
    }
    return null;
  };

  var findId = function() {
    if (selector.match(/#(\w+)/)) {
      return selector.match(/#(\w+)/)[1];
    }
    return null;
  };

  var toBeSelected;

  if (findHtmlTag()) {
    toBeSelected = document.body.getElementsByTagName(findHtmlTag());
  } else {
    toBeSelected = document.body.getElementsByTagName('*');
  }

  if (findId()) {
    var newToBeSelected = [];
    for (var i = 0; i < toBeSelected.length; i++) {
      console.log(toBeSelected[i].id);
      console.log(findId());
      if (toBeSelected[i].id === findId()) {
        newToBeSelected.push(toBeSelected[i])
      };
    }
    toBeSelected = newToBeSelected;
  };




  console.log(toBeSelected);
  return toBeSelected;
};