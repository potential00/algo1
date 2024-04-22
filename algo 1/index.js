function analyzeSentence(sentence) {
    // to get the length of the sentence
    let length = sentence.length; 
    // to determine the length of the sentence
    let words = sentence.split(' ').length;
        // to determine the vowels in  the sentence
    let vowels = sentence.match(/[aeiou]/gi).length;
  
    console.log('Length of the sentence:', length);
    console.log('Number of words:', words);
    console.log('Number of vowels:', vowels);
  }
  
  // Testing the function
//   Example 1
  analyzeSentence('This is a test sentence.');
  //   Example 2  
  analyzeSentence('GoMyCode is stressing me .');
  //   Example 3
  analyzeSentence('my Account balance is thirty thousand naira.');