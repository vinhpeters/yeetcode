const constructNote = (message, letters) => {
    // check if string 1 can be constructed out of the char of string 2.
    //intialize frequency counters
    const messageFreq = {};
    const lettersFreq = {}; 

    //build frequency counter of letters -> add 1 if exists or set to 1
    for (let char of letters) {
        lettersFreq[char] = ++lettersFreq[char] || 1;
    }

    //build frequency counter of message
    for (let char of message) {
        messageFreq[char] = ++messageFreq[char] || 1;
    }

    //final comparison of freqs
    for (let char in messageFreq) {
        if (!lettersFreq[char]) return false;
        if (messageFreq[char] > lettersFreq[char]) return false;
    }

    return true
}

console.log(constructNote( 'aa', 'abc')); //false
console.log(constructNote( 'abc', 'dcba')); //true
console.log(constructNote( 'aabbcc', 'bcabcaddff')); //true
console.log(constructNote( 'water', 'aabcweessrt')); //true
console.log(constructNote( 'what', 'aabc')); //false

