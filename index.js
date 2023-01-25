class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }

  static titleize(str) {
    //return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    let arr = str.split(' ')
    let first = arr.shift()
    first = first[0].toUpperCase() + first.slice(1)
    let rest = arr.map(word => {
      if (word === 'a') {
        return 'a'
      } else if (word === 'an') {
        return 'an'
      } else if (word === 'but') {
        return 'but'
      } else if (word === 'of') {
        return 'of'
      } else if (word === 'and') {
        return 'and'
      } else if (word === 'for') {
        return 'for'
      } else if (word === 'at') {
        return 'at'
      } else if (word === 'by') {
        return 'by'
      } else if (word === 'from') {
        return 'from'
      } else if (word === 'the') {
        return 'the'
      } else {
        return word[0].toUpperCase() + word.slice(1)
      }
    })
    rest.unshift(first)
    return rest.join(' ')
  }
}