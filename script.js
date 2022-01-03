function generateRandomNumber(n) {
    // generate number from 0 to n - 1
    return Math.floor(Math.random() * n)
  }
  
  const grammarWords = {
    adjective: ['handsome', 'blue', 'beautiful', 'silly', 'lazy', 'dirty'],
    animal: ['giraffe', 'alligator', 'bear', 'robin', 'dog'],
    verb: ['walked', 'ran', 'danced', 'sang'],
    adverb: ['beautifully', 'poorly', 'weirdly', 'proudly']
  }

  //store words in an array
  let randomSentence = []

  // iteration
  for (let word in grammarWords) {
    let index = generateRandomNumber(grammarWords[word].length)

    // push each word category from grammarWords object to sentence
    switch(word) {
        case 'adjective': 
            randomSentence.push(`The ${grammarWords[word][index]} `)
            break
        case 'animal':
            randomSentence.push(`${grammarWords[word][index]} `)  
            break
        case 'verb':
            randomSentence.push(`${grammarWords[word][index]} `)
            break
        case 'adverb':
            randomSentence.push(`${grammarWords[word][index]}.`)
            break
        default:
            randomSentence.push(`Not enough information given`)
    }
  }

  function formatSentence() {
      const formatted = randomSentence.join('')
      console.log(formatted)
  }

  formatSentence()





