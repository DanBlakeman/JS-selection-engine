var $ = function (selector) {
  var elements = [];

  var foundHtmlTag = selector.match(/[a-z]*/)[0];

  var foundClass = (selector.match(/\.(\w*)/)) ? selector.match(/\.(\w*)/)[1] : false;

  var foundId = (selector.match(/#(\w+)/)) ? selector.match(/#(\w+)/)[1] : false;

  if (foundHtmlTag) {
    elements = document.body.getElementsByTagName(foundHtmlTag);
  } else {
    elements = document.body.getElementsByTagName('*');
  }

  if (foundId) {
    var newelements = [];
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].id === foundId) {
        newelements.push(elements[i])
      };
    }
    elements = newelements;
  };

  if (foundClass) {
    var newelements = [];
    for (var i = 0; i < elements.length; i++) {
      if ( elements[i].className.split(" ").indexOf(foundClass) !== -1 ) {
        newelements.push(elements[i])
      };
    }
    elements = newelements;
  };


  return elements;
};