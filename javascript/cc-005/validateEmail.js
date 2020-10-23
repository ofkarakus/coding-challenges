function isAlpha(str) {
  return /^[a-z]+$/i.test(str);
}

function isAlphaNumeric(str) {
  return /^[a-z0-9]+$/i.test(str);
}

const validateEmail = (email) => {

  // 1

  email.indexOf(' ') == -1

  // 2

  if(isAlphaNumeric(email[email.length])){}
  else if(email.endsWith('.')){}
  
  // 3

  let countAt = 0
  for (i of email) { i == '@' ? countAt++ : null }

  if (countAt  == 1){}

  // 4

  isAlphaNumeric(email[email.indexOf('@') - 1]) && isAlphaNumeric(email[email.indexOf('@') + 1])

  // 5 

  isAlphaNumeric(email[email.lastIndexOf('.') - 1]) && isAlphaNumeric(email[email.lastIndexOf('.') + 1])

  // 6

  userName.indexOf('..') == -1

  // 7

  websiteName = websiteName.replaceAll('-', '')
  if (isAlphaNumeric(websiteName)){}



// https://stackoverflow.com/questions/23797093/regex-email-validation-that-allows-only-hyphens-in-the-middle-of-the-domain-and





  let countAt = 0
  for (i of email) { i == '@' ? countAt++ : null }

  if (countAt  == 1 && email.indexOf(' ') == -1) {
    let userName = email.split('@')[0]
    let leftUserName = email.split('@')[0]
    let countDot = 0

    for (i of leftUserName) { i == '.' ? countAt++ : null }

    if (countDot == 1) {
      let websiteName = leftUserName.split('.')[0]
      let extension = leftUserName.split('.')[1]

      if(isAlpha(extension) && 2 <= extension.length <= 3 && isAlphaNumeric(websiteName)){

      }




    }
  }
}


console.log(isAlphaNumeric('3.5'))
console.log(isAlpha('aAs.d'))




