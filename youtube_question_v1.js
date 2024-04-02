let len = $.HackForm().length;

for (let i = 0; i < len; i++) {
  window[`screen_${i}_on_enter`] = function() {
    hookYoutube(i)
  }
}


function hookYoutube(index) {
  let scr = $.HackForm(index);
  if (scr?.customProps?.youtube) {
    let iframeSrc = iframeFromId(scr.customProps.youtube);
    setTimeout(function() {
      document.querySelector('.form_text_area').innerHTML = iframeSrc;
    }, 300)
  }
}

function iframeFromId(id) {
  return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}?si=0zfwk4D1bPS5q0ec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
}
