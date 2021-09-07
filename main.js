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
  