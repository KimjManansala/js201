// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// Example:
// leetspeak('Leet') --> "l337"
function leetspeak (word){
    var lSpeak = ''
    for(var i = 0; i < word.length; i++){
        switch (word.substring(i, i+1).toUpperCase()) { //if(word.substring(i, i+1).toUpperCase())
            case 'A':                   // === 'a'
                lSpeak += '4'                 // statements
                break;
            case 'E':
                lSpeak += '3'
                break;
            case 'G':
                lSpeak += '6'
                break;
            case 'I':
                lSpeak += '1'
                break;
            case 'O':
                lSpeak += '0'
                break;
            case 'S':
                lSpeak += '5'
                break;
            case 'T':
                lSpeak += '7'
                break;
            case 'L':
                lSpeak += 'l'
                break;
            default:
                lSpeak += word.substring(i, i+1)
                break;
        }
        }
    return lSpeak
}
