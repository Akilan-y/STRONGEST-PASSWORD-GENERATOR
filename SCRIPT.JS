function generatePassword() {
  const length = document.getElementById("password-length").value;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/";

  let password = "";
  
  // Ensure password is strong by including at least one character from each category
  password += getRandomCharacter("abcdefghijklmnopqrstuvwxyz");  // lowercase
  password += getRandomCharacter("ABCDEFGHIJKLMNOPQRSTUVWXYZ");  // uppercase
  password += getRandomCharacter("0123456789");                 // digits
  password += getRandomCharacter("!@#$%^&*()-_=+[]{}|;:,.<>?/"); // special chars
  
  // Add remaining characters randomly
  for (let i = password.length; i < length; i++) {
      password += getRandomCharacter(characters);
  }
  
  // Shuffle the password to mix character types
  password = shuffleString(password);
  
  // Display the generated password
  document.getElementById("generated-password").value = password;
}

function getRandomCharacter(charSet) {
  return charSet.charAt(Math.floor(Math.random() * charSet.length));
}

function shuffleString(str) {
  const array = str.split('');
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array.join('');
}

function copyPassword() {
  const passwordField = document.getElementById("generated-password");
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy"); // Copy to clipboard
  alert("Password copied to clipboard!");
}
