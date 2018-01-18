import $ from 'jquery';

export default function calculateFrames(isMobile) {
  if (!isMobile) {
    return calculateFramesDesktopTablet();
  } else {
    return calculateFramesMobile();
  }
}

function calculateFramesDesktopTablet() {
  let frames = {};
  let items = ['agenda', 'vita', 'hoeren', 'sehen', 'kontakt'];

  // Home frame
  frames = [];
  frames.home = [];
  items.forEach(function(key, index) {
    frames['home'][index] = {
      translate: 'translate(40vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '9vh',
      letterSpacing: 2,
      opacity: .1
    };
  });



  let spacing = computeSpacing(document.body.scrollWidth * 0.27);

  //Agenda frame
  frames.agenda = [];
  items.forEach(function(key, index) {
    frames.agenda[index] = {
      translate: 'translate(2vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '8vh',
      letterSpacing: spacing[index],
      opacity: .1
    };
  });
  frames.agenda[0] = { // AGENDA is bigger and further to the right
    translate: 'translate(14vw, 22vh)',
    fontSize: '9.5vh',
    letterSpacing: 2,
    opacity: 1
  };

  // vita frame
  frames.vita = [];
  items.forEach(function(key, index) {
    frames.vita[index] = {
      translate: 'translate(2vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '8vh',
      letterSpacing: spacing[index],
      opacity: .1
    };
  });
  frames.vita[1] = {
    translate: 'translate(32vw, 31vh)',
    fontSize: '9.5vh',
    letterSpacing: 2,
    opacity: 1
  };

  // Sehen frame
  frames.sehen = [];
  items.forEach(function(key, index) {
    frames.sehen[index] = {
      translate: 'translate(2vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '8vh',
      letterSpacing: spacing[index],
      opacity: .1
    };
  });
  frames.sehen[3] = {
    translate: 'translate(24vw, ' + (23 + 3 * 9) + 'vh)',
    fontSize: '9.5vh',
    letterSpacing: 2,
    opacity: 1
  };
  // Hoeren frame
  frames.hoeren = [];
  items.forEach(function(key, index) {
    frames.hoeren[index] = {
      translate: 'translate(2vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '8vh',
      letterSpacing: spacing[index],
      opacity: .1
    };
  });
  frames.hoeren[2] = {
    translate: 'translate(12vh, ' + (21.5 + 2 * 9) + 'vh)',
    fontSize: '9.5vh',
    letterSpacing: 2,
    opacity: 1
  };
  // Kontakt frame
  frames.kontakt = [];
  items.forEach(function(key, index) {
    frames.kontakt[index] = {
      translate: 'translate(2vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '8vh',
      letterSpacing: spacing[index],
      opacity: .1
    };
  });
  frames.kontakt[4] = {
    translate: 'translate(32vw, 59vh)',
    fontSize: '9.5vh',
    letterSpacing: 2,
    opacity: 1
  };


  return frames;
}

function calculateFramesMobile() {
  let frames = {};
  let items = ['agenda', 'vita', 'hoeren', 'sehen', 'kontakt'];

  // Home frame
  frames.home = [];
  items.forEach(function(key, index) {
    frames.home[index] = {
      translate: 'translate(12vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '9vh',
      letterSpacing: 2,
      opacity: .1
    };
  });



  let spacing = computeSpacing(document.body.scrollWidth * 0.27);

  //Agenda frame
  frames.agenda = [];
  items.forEach(function(key, index) {
    frames.agenda[index] = {
      translate: 'translate(2vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '0vh',
      letterSpacing: spacing[index],
      opacity: 0
    };
  });
  frames.agenda[0] = { // AGENDA is bigger and further to the right
    translate: 'translate(15vw, 12vh)',
    fontSize: '8.2vh',
    letterSpacing: 2,
    opacity: 1
  };

  // vita frame
  frames.vita = [];
  items.forEach(function(key, index) {
    frames.vita[index] = {
      translate: 'translate(2vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '0vh',
      letterSpacing: spacing[index],
      opacity: 0
    };
  });
  frames.vita[1] = {
    translate: 'translate(5vw, 31vh)',
    fontSize: '9.5vh',
    letterSpacing: 2,
    opacity: 1
  };

  // Sehen frame
  frames.sehen = [];
  items.forEach(function(key, index) {
    frames.sehen[index] = {
      translate: 'translate(2vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '0',
      letterSpacing: spacing[index],
      opacity: 0
    };
  });
  frames.sehen[3] = {
    translate: 'translate(2vw, ' + (23 + 3 * 9) + 'vh)',
    fontSize: '9.5vh',
    letterSpacing: 2,
    opacity: 1
  };
  // Hoeren frame
  frames.hoeren = [];
  items.forEach(function(key, index) {
    frames.hoeren[index] = {
      translate: 'translate(2vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '0',
      letterSpacing: spacing[index],
      opacity: 0
    };
  });
  frames.hoeren[2] = {
    translate: 'translate(12vh, ' + (21.5 + 2 * 9) + 'vh)',
    fontSize: '9.5vh',
    letterSpacing: 2,
    opacity: 1
  };
  // Kontakt frame
  frames.kontakt = [];
  items.forEach(function(key, index) {
    frames.kontakt[index] = {
      translate: 'translate(2vw, ' + (23 + index * 9) + 'vh)',
      fontSize: '0',
      letterSpacing: spacing[index],
      opacity: 0
    };
  });
  frames.kontakt[4] = {
    translate: 'translate(5vw, 59vh)',
    fontSize: '9.5vh',
    letterSpacing: 2,
    opacity: 1
  };


  return frames;

}



function computeSpacing(width) {
  let spacing = [];
  $('<div class="width-measurement"/>').appendTo($('body'));
  $('width-measurement')
    .attr('style',
      'position: absolute; top: -9999; font-family: "Raleway", sans-serif; font-weight: extra-bold;	font-size: 8vh;');

  var fontSize = document.defaultView.getComputedStyle($('.width-measurement')[0], null).getPropertyValue('width');
  fontSize = parseFloat(fontSize, 10);
  $('.menu-item').each(function(index) {
    var length = $(this).text().length;
    $('.width-measurement').text($(this).text());
    var textLength = document.defaultView.getComputedStyle($('.width-measurement')[0], null).getPropertyValue('width');
    textLength = parseFloat(textLength, 10);
    spacing[index] = (width - textLength) / (length - 1);
  });
  $('.width-measurement').remove();
  return spacing;
}

// }
