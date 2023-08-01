const longestCommonPrefix = (strs) => {
        //define first word to have starting prefix. Will slice off characters as they are not even later
        let pre = strs[0];
        //iterate through each word of the array
        for(let word of strs) {
                // iterate through each charcter of each word starting from the end and working forward
            for(let i = pre.length - 1; i >= 0; i--) {
                //if the last letter of the word does not equal the last letter of the prefix, slice it out of the prefix
                if(pre[i] !== word[i]) {
                    pre = pre.slice(0, i);
                }
            }
        }
        //return whats left
        return pre;
    };


console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));