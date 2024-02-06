function reverseWordsWithoutArray(sentence) {
    let reversedSentence = '';
    let word = '';
    
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            word += sentence[i];
        } else {
            reversedSentence = word + ' ' + reversedSentence;
            word = '';
        }
    }

    // Add the last word
    reversedSentence = word + ' ' + reversedSentence;

    return reversedSentence.trim();
}

// Test the function
console.log(reverseWordsWithoutArray("Hello Js World 2023"));