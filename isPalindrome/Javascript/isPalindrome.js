var isPalindrome = function(x) {
    // make a copy
    let y = x;
    let reverse = y.toString().split('').reverse().join('');
    let newX = x.toString();
    
    //Given an integer newX, return true if newX is a palindrome, and false otherwise.  
    for (let i = 0; i < newX.length; i++){
        console.log(newX.length);
        // reverse newX || y then compare newX with y 
        if (newX == reverse) {
          return true;
         } 
        return false;
    }
};


console.log(isPalindrome(121));
console.log(isPalindrome(363));
console.log(isPalindrome(267));
