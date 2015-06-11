var $ = function (selector) {
  var elements = [];
  var foundHtmlTag = selector.match(/^[a-z]*/)[0];
  var foundClass = (selector.match(/\.(\w*)/)) ? selector.match(/\.(\w*)/)[1] : false;
  var foundId = (selector.match(/#(\w+)/)) ? selector.match(/#(\w+)/)[1] : false;

  if (foundHtmlTag) {
    elements = document.body.getElementsByTagName(foundHtmlTag);
  } else {
    elements = document.body.getElementsByTagName('*');
  }

  if (foundId) {
    elements = (elements.namedItem(foundId)) ? [elements.namedItem(foundId)] : [];
  }

  function hasFoundClass(element) {
    return element.classList.contains(foundClass);
  }

  if (foundClass) {
    elements = Array.prototype.filter.call(elements, hasFoundClass);
  }

  return elements;
};