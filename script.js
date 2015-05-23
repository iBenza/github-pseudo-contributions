(function(){
  colors = ['#eeeeee', '#d6e685', '#8cc665', '#44a340', '#1e6823'];
  days = document.getElementsByClassName('day');
  Array.prototype.forEach.call(days, function(element) {
    element.addEventListener('click', function(event){
      event.stopPropagation()
      currentColor = element.getAttribute('fill');
      nextIndex = (colors.indexOf(currentColor) + 1) % colors.length;
      element.setAttribute('fill', colors[nextIndex]);
    });
  });
})();
