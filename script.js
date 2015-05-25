(function(){
  colors = ['#eeeeee', '#d6e685', '#8cc665', '#44a340', '#1e6823'];

  function draw(pixel) {
    nextIndex = Math.min(colors.indexOf(currentColor) + 1, colors.length - 1);
    pixel.setAttribute('fill', colors[nextIndex]);
  }
  function erase(pixel) {
    nextIndex = Math.max(colors.indexOf(currentColor) - 1, 0);
    pixel.setAttribute('fill', colors[nextIndex]);
  }

  days = document.getElementsByClassName('day');
  Array.prototype.forEach.call(days, function(element) {
    element.addEventListener('click', function(event) {
      event.stopPropagation();
    });
    element.addEventListener('mousedown', function(event) {
      if (event.button == 0 && !event.shiftKey) {
        draw(element);
      } else if (event.button == 0 && event.shiftKey) {
        erase(element);
      }
    });
    element.addEventListener('mouseenter', function(event) {
      currentColor = element.getAttribute('fill');
      if (event.buttons & 1 && !event.shiftKey) {
        draw(element);
      } else if (event.buttons & 1 && event.shiftKey) {
        erase(element);
      }
    });
  });
})();
