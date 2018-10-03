#Create an algorithm to find whether a string contains only unique characters (means, no double)

function unique(str) {
    for (i = 0; i < str.length; i++) {
     if(str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
       return true
     } else {
       return false
     }
    }
}


#Given a string, find the length of the longest word in the string
