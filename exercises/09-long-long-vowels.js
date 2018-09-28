// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'
function longLongVowels(word) {
  var longWord = ''
  for (var i = 0; i < word.length; i++) {
      var j = 0;
      var loop = 4;
    switch(word.substring(i, i+2).toUpperCase()){
        case 'AA':
            while(j < loop){
                longWord += 'a'
                j++
            }
            break;
        case 'EE':
            while(j < loop){
                longWord += 'e'
                j++
            }
            break;
        case 'II':
            while(j < loop){
                longWord += 'i'
                j++
            }
            break;
        case 'OO':
            while(j < loop) {
                longWord += 'o'
                j++   
            }
            break;
        case 'UU':
            while(j < loop){
                longWord += 'u'
                j++
            }
            break;
        case 'YY':
            while(j < loop){
                longWord += 'y'
                j++
            }
            break;
        default:
            longWord += word.substring(i, i+1)
            break;
    }
  }
  return longWord
}


