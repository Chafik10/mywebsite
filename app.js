function validateForm(e) {
    e.preventDefault()
    var name = document.loginForm.Fname.value
    var lname = document.loginForm.Lname.value
   if (name.length==0)
    return alert(`name is required`)
   if (lname.length<3)
    return alert(`name is`)
   }


function validateEmail(){
    var emailID = document.myForm.email.value
    var atpos = emailID.indexOf('@')
    var dotpos = emailID.lastIndexOf('.')
    if (atpos < 1 || dotpos - atpos < 2) {
        alert('Please enter correct email ID')
        document.myForm.eMail.focus()
            return false
    }
    return true




}  