(function(){
  colors = ['#eeeeee', '#d6e685', '#8cc665', '#44a340', '#1e6823'];
  days = document.getElementsByClassName('day');
  Array.prototype.forEach.call(days, function(element) {
    element.addEventListener('click', function(event) {
      event.stopPropagation();
    });
    element.addEventListener('mouseenter', function(event) {
      currentColor = element.getAttribute('fill');
      if (event.buttons & 1 && !event.shiftKey) {
        nextIndex = Math.min(colors.indexOf(currentColor) + 1, colors.length - 1);
        element.setAttribute('fill', colors[nextIndex]);
      } else if (event.buttons & 1 && event.shiftKey) {
        nextIndex = Math.max(colors.indexOf(currentColor) - 1, 0);
        element.setAttribute('fill', colors[nextIndex]);
      }
    });
  });
})();
