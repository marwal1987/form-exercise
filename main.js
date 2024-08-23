// Hämta det som behövs från DOM:en och spara i variabler
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const meddelandeInput = document.querySelector("textarea");
const msgName = document.querySelector(".msgName");
const msgEmail = document.querySelector(".msgEmail");
const msgMeddelande = document.querySelector(".msgMeddelande");
const userList = document.querySelector("#users");

const emailIsValid = (emailInput) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
};
// Lägg till ett submit event (eftersom det är ett formulär). onSubmit är en separat funktion som deklareras längre ner.

myForm.addEventListener("submit", onSubmit);

// Eftersom det är ett submit, vill vi använda preventDefault() för att förhindra att sidan laddas om innan resterande kod körs.
function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "") {
    msgName.classList.add("error");
    msgName.innerHTML = "* Var god fyll i ditt namn";
    setTimeout(() => msgName.remove(), 3000);
  }

  if (emailInput.value === "") {
    msgEmail.classList.add("error");
    msgEmail.innerHTML = "* Var god fyll i din Epost";
    setTimeout(() => msgEmail.remove(), 3000);
  } else if (!emailIsValid(emailInput.value)) {
    msgEmail.classList.add("error");
    msgEmail.innerHTML = "* Var god fyll i en giltig E-post adress";
    setTimeout(() => msgEmail.remove(), 3000);
  }

  if (meddelandeInput.value === "") {
    msgMeddelande.classList.add("error");
    msgMeddelande.innerHTML = "* Var god fyll ett meddelande";
    setTimeout(() => msgMeddelande.remove(), 3000);
  }

  // Om alla fält är ifyllda och e-posten är giltig, lägg till användaren i listan
  if (
    nameInput.value !== "" &&
    emailIsValid(emailInput.value) &&
    meddelandeInput.value !== ""
  ) {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `${nameInput.value} | ${emailInput.value} | ${meddelandeInput.value}`
      )
    );

    userList.appendChild(li);

    // Töm fälten
    nameInput.value = "";
    emailInput.value = "";
    meddelandeInput.value = "";
  }
}

// Lägga till?

// {
//   const li = document.createElement("li");
//   li.appendChild(
//     document.createTextNode(`${nameInput.value} | ${emailInput.value} | ${meddelandeInput.value}`)
//   );

//   userList.appendChild(li);

//   // Clear fields
//   nameInput.value = "";
//   emailInput.value = "";
//   meddelandeInput.value = "";
