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