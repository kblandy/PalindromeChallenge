const inputBox = document.getElementById("input-palindrome");
const submitButton = document.getElementById("submit-button");

//Given a string of text, return true or false indicating whether or not the text is a palindrome. 

//reverses any value put into (stringToBeReversed)
function reverseString(stringToBeReversed) {

    var splitString = stringToBeReversed.split(""); //split() returns new array
    var reverseArray = splitString.reverse(); //reverse() reverses the order of the array
    var joinArray = reverseArray.join(""); // join() combines the array into a string
    return joinArray;

}

//checks if (string) value, when reversed, is equvilent to the string in original order
function CheckIfPalindrome (string) {
    var stringInAbc = string.toLowerCase();
    var stringInZYX = reverseString(stringInAbc);
    if (stringInAbc == stringInZYX) {
        alert(string + " spelled backwards is " + stringInZYX + ". " + string + " is a palindrome!")
        return true;
    } else {
        alert(string + " spelled backwards is " + stringInZYX + ". " + string + " is not a palindrome!");
        return false;
    }
}

submitButton.addEventListener('click', (event) => 
{
    CheckIfPalindrome(inputBox.value);

});


