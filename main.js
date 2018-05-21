document.addEventListener('DOMContentLoaded', function() {
  var secretPassword = 'DOMCONTENTLOADED'

  let welcome = document.forms['welcome']
  let checkbox = document.forms['welcome']['admin']
  let secret = document.createElement('input')
  secret.setAttribute("type", "password")
  secret.setAttribute("required", "")

  checkbox.addEventListener('click', function() {
      if (checkbox.checked === true) {
        welcome.insertBefore(secret, welcome[3])
      }

      else if (checkbox.checked === false){
        welcome.removeChild(secret)
      }
  })

  let submit = document.getElementById('submit')

  submit.addEventListener('click', function(){
    console.log(secret.value)
    if(secret.value !== secretPassword){
      event.preventDefault()
      alert('Sorry no good')
    }

    else if(secret.value == secretPassword){
      alert('Success')
    }
  })
})
