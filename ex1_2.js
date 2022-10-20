function palindrome(str) {
    let reverse = ''
    for (let i = str.length-1; i > -1; i--) {
      reverse += str[i]

    }
    if (reverse === str) {
      return true
    }
    else {
      return false
    }
  }
  


  console.log(palindrome('level'))
