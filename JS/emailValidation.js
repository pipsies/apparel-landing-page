function validate() {
    var input = document.createElement('input');
    input.type='email';
    input.value=document.getElementById('email').value;
      
    if (input.checkValidity()) {
    document.getElementById('result').innerText = 'Email has been sent';
    } else {
    document.getElementById('result').innerText = 'Please enter a valid email';
    document.getElementById('result').style.color = 'red';
    }

    
      
    return false;
  }





