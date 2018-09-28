// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****
function makeSquare(num) {
  var square = ''
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      square += "*"
    }
    if (num >= 2 && i !== num - 1) square += '\n'
  }
  return square
}


// ~~~~~~~~~~~~~~~npm~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******
function makeBox(width, height) {
  var box = ''
  if (width === 0 && height === 0) {
    return box
  } else if (width === 1 && height === 1) {
    box += '*'
    return box
  } else if (width >= 2 || height >= 2) {
    for (var i = 0; i < width; i++) {
      box += '*'
    }
    for (var j = 0; j < height - 2; j++) {
      box += '\n'
      box += '*' + ' '.repeat(width - 2) + '*'
    }
    if (height >= 2) {
      box += '\n'
      for (var i = 0; i < width; i++) {
        box += '*'
      }
    }
  }
  return box
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(text) {
  var textWithBanner = ''
for(var i = 0; i < text.length + 4; i++){
    textWithBanner += '*'
}
textWithBanner += "\n* " + text + ' *\n'
for(var j = 0; j < text.length + 4; j++){
  textWithBanner += '*'
}
return textWithBanner
}
