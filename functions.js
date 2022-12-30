function isPalindrome(str) {
    str = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
    return str === str.split('').reverse().join('');
}


function ifIsPalindrome(user_value){
    if (isPalindrome(user_value) == true){
        let result = document.createElement("p")
        result.textContent = "is a palindrome"
        document.querySelector("#palindrome-yes").appendChild(result)

    } else if (isPalindrome(user_value) == false){
        let result = document.createElement("p")
        result.textContent = "is not a palindrome"
        document.querySelector("#palindrome-not").appendChild(result)
    }

}

function clearFiled(){
    document.querySelector("#palindrome-result").innerHTML = ""
    document.querySelector("#palindrome-yes").innerHTML = ""
    document.querySelector("#palindrome-not").innerHTML = ""
}
