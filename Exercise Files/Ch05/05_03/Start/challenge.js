const findAnagrams = (word, allWords) => {
    const letters = word.split('');
    const orderedTarget = letters.sort().join('')

    const anagrams = allWords.filter(word => word.split('').sort().join('') === orderedTarget)
    return anagrams
}

console.log(findAnagrams('cinema', ['anemic', 'anamic', 'cinema', 'iceman', 'hahah']));

/*
    Expected output: ['iceman', 'anemic']
*/