document.addEventListener('DOMContentLoaded', function() {
  let welcome = document.forms['welcome']
  let checky = document.forms['welcome']['admin']
  let secret = document.createElement('div')
  secret.innerHTML = `<label for="secretPassword">Secret Password</label><br><input type="password" required>`

  function secretPassword() {
    if (checky.checked === true) {
      welcome.insertBefore(secret, welcome[3])
    }

    else if (checky.checked === false){
      welcome.removeChild(secret)
    }
  }

  checky.addEventListener('click', function() {
    secretPassword()
  })

})
