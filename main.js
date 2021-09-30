//duplicate Count
function duplicateCount (text) {
  let count = 0
  let objString = {}
  let lowerCaseALL = text.toLowerCase()
  let stringArray = lowerCaseALL.split('')
  stringArray.forEach(element => {
    if (objString[element] === undefined) {
      objString[element] = 1
    } else {
      objString[element] += 1
    }
  })
  for (let key in objString) {
    if (objString[key] >= 2) {
      count += 1
    }
  }
  return count
}

//unit tests

console.assert(duplicateCount('Indivisibilities') === 2, {
  expected: 2,
  result: duplicateCount('Indivisibilities')
})
console.assert(duplicateCount('aabb223') === 3, {
  expected: 3,
  result: duplicateCount('aabb223')
})
console.assert(duplicateCount('kdkdk212') === 3, {
  expected: 3,
  result: duplicateCount('kdkdk212')
})

//
// Character with longest consecutive repetition

function longestRepetition (string) {
  let answerArray = []
  if (string.length === 0) {
    return (answerArray = ['', 0])
  } else if (string.length === 1) {
    return (answerArray = [string[0], 1])
  } else {
    let arr = string.split('')
    let collect = []
    let counter = 1
    loopAgain: for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === arr[i + 1]) {
        counter += 1
      } else {
        collect.push([arr[i], counter])
        counter = 1
        continue loopAgain
      }
    }
    answerArray[0] = collect[0][0]
    answerArray[1] = collect[0][1]
    longest = collect[0][1]
    for (let j = 1; j < collect.length; j += 1) {
      let currentNum = collect[j][1]
      if (longest < currentNum) {
        longest = currentNum
        answerArray[0] = collect[j][0]
        answerArray[1] = collect[j][1]
      }
    }
  }
  return JSON.stringify(answerArray)
}

//unit tests.
//I solved this problem in codewors without the unit test.
console.log(longestRepetition('cbdeuuu900') === JSON.stringify(['u', 3]))
console.log(longestRepetition('aaaabb') === JSON.stringify(['a', 4]))
console.log(longestRepetition('bbbaaabaaaa') === JSON.stringify(['a', 4]))

//Who likes this
function likes (names) {
  let sentence = ''
  if (names.length === 0) {
    sentence = `no one likes this`
    return sentence
  } else if (names.length === 1) {
    sentence = `${names[0]} likes this`
    return sentence
  } else if (names.length === 2) {
    sentence = `${names[0]} and ${names[1]} like this`
    return sentence
  } else if (names.length === 3) {
    sentence = `${names[0]}, ${names[1]} and ${names[2]} like this`
    return sentence
  } else {
    sentence = `${names[0]}, ${names[1]} and ${names.length -
      2} others like this`
    return sentence
  }
}

//Units tests.

console.assert(likes(['John', 'Mohamed']) === 'John and Mohamed like this')
console.assert(likes([]) === 'no one likes this')

//highest scoring word

function stringFunction (word) {
  let ObOfLetters = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }
  let letters = word.split('')
  let counter = 0
  for (let i = 0; i < letters.length; i += 1) {
    currentLetter = letters[i]
    counter += ObOfLetters[currentLetter]
  }
  return counter
}

function high (x) {
  //turn the string into array of words first, and loop throgh the array.
  let result
  let hightestScore = 0
  let hightestScoringWord = ''
  let arrayOfWords = x.split(' ')
  if (arrayOfWords.length === 1) {
    hightestScoringWord = arrayOfWords[0]
    return hightestScoringWord // exit the function early.
  }
  for (let i = 0; i < arrayOfWords.length; i += 1) {
    let currentWord = arrayOfWords[i]
    //then each iteration, call this function to calculate the word's score.
    result = stringFunction(currentWord)
    if (hightestScore < result) {
      hightestScore = result
      hightestScoringWord = arrayOfWords[i]
    }
  }
  return hightestScoringWord
}

//unit tests
console.assert(high('man i need a taxi up to ubud') === 'taxi', {
  expected: 'taxi',
  result: high('man i need a taxi up to ubud')
})

console.assert(high('what time are we climbing up the volcano') === 'volcano', {
  expected: 'volcano',
  result: high('what time are we climbing up the volcano')
})

console.assert(high('take me to semynak') === 'semynak', {
  expected: 'semynak',
  result: high('take me to semynak')
})
console.assert(high('take') === 'take', {
  expected: 'take',
  result: high('take')
})

function comp (array1, array2) {
  if (array1 === null || array2 === null) {
    return false
  }
  //sort both arrays in ascending order
  //sorting array1
  let sortArray1 = array1.sort((a, b) => {
    return a - b
  })
  //sorting array2
  let sortArray2 = array2.sort((a, b) => {
    return a - b
  })
  //since both array have the same length, loop throgh one of them and each iteration, compare elements of the sorted arrays.
  //return true if each squared element from sortedArray1 are equal to its counterpart of sortedArray2.
  let isTrue = true
  for (let index = 0; index < sortArray1.length; index += 1) {
    //square each element from sortedArray1
    let currentElement = sortArray1[index] * sortArray1[index]
    let currentElementFromSortedArray2 = sortArray2[index]
    isTrue = currentElement === currentElementFromSortedArray2
    if (isTrue !== true) {
      return isTrue //if isTrue becoeme false even once, it means not all elemtents from arrays are equal.
    }
  }
  return isTrue
}

//Units tests.
let array1 = [121, 144, 19, 161, 19, 144, 19, 11]
let array2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

console.assert(comp(array1, array2) === true)
console.assert(comp(null, [4, 6, 9]) === false)
console.assert(comp([4, 6, 9], null) === false)

// encryptThis

let switchFunction = word => {
  let asciiCode = word.charCodeAt(0)
  let secondLetter = word[1]
  let lastLetter = word[word.length - 1]
  // guard the function from running further if the any of these condition is true
  if (word.length === 1) {
    return asciiCode
  } else if (word.length === 2) {
    return `${asciiCode}${word[1]}`
  } else {
    let wordArray = word.split('')
    wordArray.splice(0, 1, asciiCode)
    wordArray.splice(1, 1, lastLetter)
    wordArray.splice(wordArray.length - 1, 1, secondLetter)

    return wordArray.join('')
  }
}

let encryptThis = text => {
  let answerArray = []
  //turn the text into array of words
  let arrayOfWords = text.split(' ')
  //loop through arrayOfWords
  for (let i = 0; i < arrayOfWords.length; i += 1) {
    let currentWord = arrayOfWords[i]
    //this function converts the first letter to its ASCII code, and switches the second and last letters

    let result = switchFunction(currentWord)
    answerArray[i] = result
  }

  let encryptedSentence = answerArray.join(' ').trim()

  return encryptedSentence
}

//Units tests.

console.assert(
  encryptThis('A wise old owl lived in an oak') ===
    '65 119esi 111dl 111lw 108dvei 105n 97n 111ka',
  {
    expected: '65 119esi 111dl 111lw 108dvei 105n 97n 111ka',
    result: encryptThis('A wise old owl lived in an oak')
  }
)

console.assert(
  encryptThis('The more he saw the less he spoke') ===
    '84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp',
  {
    expected: '84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp',
    result: encryptThis('The more he saw the less he spoke')
  }
)

console.assert(encryptThis('a') === '97', {
  expected: '97',
  result: encryptThis('a')
})
console.assert(encryptThis('an') === '97n', {
  expected: '97n',
  result: encryptThis('an')
})

function createPhoneNumber (numbers) {
  //cut the first three numbers and enclose them wiht parenthesis.
  let firstThreeNums = numbers.splice(0, 3).join('')

  //array to hold the three middle nums
  const newArray = []
  //loop throgh the rest of the array three times.
  for (let i = 0; i < 3; i += 1) {
    //push the middle three in this new array
    newArray.push(numbers[i])
  }

  // concatenate dash at end of the middle three numbers.
  newArray[newArray.length] = '-'
  //cut the last fours numbers in the numbers array and join them.
  let lastFourNumbs = numbers.splice(3, numbers.length - 1).join('')
  //create assembly the phone number
  let phoneNumber = `(${firstThreeNums}) ${newArray.join('')}${lastFourNumbs}`
  return phoneNumber
}

console.assert(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) === '(123) 456-7890'
)
