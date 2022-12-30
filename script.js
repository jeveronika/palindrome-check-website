const form = document.querySelector("#form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    clearFiled()

    let my_value = event.target.elements.wantedText.value

    let paragraph = document.createElement("p")
    paragraph.textContent = event.target.elements.wantedText.value

    document.querySelector("#palindrome-result").appendChild(paragraph)

    event.target.elements.wantedText.value = ""
    
    isPalindrome(my_value)
    ifIsPalindrome(my_value)
    
})
