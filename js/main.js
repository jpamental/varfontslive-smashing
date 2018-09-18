/* Widowtamer */
wt.fix({
	elements: '.article-detail > p',
	chars: 15,
	method: 'nbsp',
	event: 'resize'
});

wt.fix({
	elements: 'blockquote p',
	chars: 8,
	method: 'nbsp',
	event: 'resize'
});

wt.fix({
	elements: 'h1',
	chars: 6,
	method: 'nbsp',
	event: 'resize'
});

window.onload = function(){
  console.log('test onload');
  var style = getComputedStyle(document.body);
  var style_value = style.getPropertyValue('--p-vf-wdth-temp');
  console.log(style_value);  
}

window.onresize = function(){
  console.log("test onresize");
  var style = getComputedStyle(document.body);
  var style_value = style.getPropertyValue('--p-vf-wdth-temp');
  console.log(style_value);  
}


  var container = document.getElementById('example-ampersand');
  var controls = document.getElementById('play-pause');
  
  controls.addEventListener('click', function(evt) {
    var input=evt.target;
    switch (input.name) {
      case "play-pause":
        var opposite = input.classList.contains('play');

  if (opposite) {
    container.classList.remove('play');
    container.classList.add('pause');
    controls.classList.remove('play');
    controls.classList.add('pause');
  }         else {
    container.classList.add('play');
    container.classList.remove('pause');
    controls.classList.add('play');
    controls.classList.remove('pause');
    var delayInMilliseconds = 4000; //1 second
    
    setTimeout(function() {
      //your code to be executed after 1 second
        container.classList.remove('play');
        container.classList.add('pause');
        controls.classList.remove('play');
        controls.classList.add('pause');
    }, delayInMilliseconds);
  }
        break;

        }
  });

