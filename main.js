const submitBtn = document.getElementById('submit-btn');

const validera = (e) => {
  e.preventDefault();
  const namn = document.getElementById("namn");
  const email = document.getElementById("email");
  const meddelande = document.getElementById("meddelande")

  if (namn.value === ""){
    alert("Var god och fyll i ditt namn.");
    username.focus();
    return false;
  }
  if (email.value === "") {
    alert("Var god fyll i din e-post.");
    email.focus();
    return false;
  }

  if (!emailIsVaild(emailAddress.value)) {
    alert("Var god och fyll i en giltig e-post adress.")
    emailAddress.focus();
    return false;
  }

  if (meddelande.value === "") {
    alert("Var god fyll i ett meddelande");
    meddelande.focus();
    return false;
  }

  return true // Formuläret är ifyllt och kan skickas till servern

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener("click", validera);