function ozetle() {

    let sentence = prompt("please enter the sentence")
    if (typeof(sentence) != 'string' || sentence.length < 1) {
        alert('please check the sentence and try again.')
        location.href = "index.html"
        die()
    }
    let maxCharacter = parseInt(prompt("please enter the max character value"))
    if (typeof(maxCharacter) != 'integer' || maxCharacter < 1) {
        alert('please check the max character value and try again.')
        location.href = "index.html"
        die()
    }
    let summarizedSentence = []
    let speacialCharacters = [' ', '!', '”', '#', '$', '%', '&', '’', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
    if (sentence.lenght < maxCharacter) {
        alert(sentence)
    } else {
        let splittedSentence = sentence.split(' ')
        let totalCharacter = 0
        for (let i = 0; i < splittedSentence.length; i++) {
            summarizedSentence.push(splittedSentence[i])
            totalCharacter += splittedSentence[i].length
            if (totalCharacter > maxCharacter) {
                break
            }
        }
        let result = summarizedSentence.join(' ')
        speacialCharacters.forEach(function(value, index) {
            if (result.slice(-1) == value) {
                result = result.slice(0, -1)
            }
        })
        let space = result.split(' ').length - 1
        if (typeof(result) == 'string' && result.length - space > maxCharacter) {
            let lenght = result.length - space
            let removeCharacter = maxCharacter - lenght
            result = result.slice(0, removeCharacter) + '...'

        }
        alert(result)
        console.log(result)
    }
}