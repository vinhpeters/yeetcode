fn main() {
    is_palindrome(121);
    is_palindrome(762);
    is_palindrome(363);
}

fn is_palindrome(x: i32) -> bool {
    let mut new_x = x;
    let mut reversed = 0;
    for i in 0..=new_x.count() {
        println!("{}", new_x[i]);
        return i;

    }
 
    
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_is_palindrome() {
        assert_eq!(is_palindrome(121), true);
        assert_eq!(is_palindrome(123), false);
        assert_eq!(is_palindrome(121), true);
        assert_eq!(is_palindrome(12121), true);
        assert_eq!(is_palindrome(1212), false);

    }
}

// var isPalindrome = function(x) {
//     // make a copy
//     let newX = x.toString();

//     let reverse = newX.toString().split('').reverse().join('');
//     let regg = /(?![0-9])/;

//     console.log(reverse.match(regg));
    
//     //Given an integer newX, return true if newX is a palindrome, and false otherwise.  
//     for (let i = 0; i < newX.length; i++){
//         console.log(newX.length);
//         // reverse newX || reverse then compare newX with reverse
//         if (newX == reverse) {
//           return true;
//          } 
//         return false;
//     }
// };


// console.log(isPalindrome(121));
// console.log(isPalindrome(363));
// console.log(isPalindrome(267));

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// Expected output: Array ["T", "I"]