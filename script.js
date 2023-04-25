const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

let checkZip = () => {
  let countryValue = country.value;
  const constraints = {
    us: [
      "^\\d{5}(?:-\\d{4})?$",
      "United States must have exactly 5 or 9 digits (zip+4).",
    ],
    ca: [
      "^[A-Z]\\d[A-Z] \\d[A-Z]\\d$",
      `Canada must have 6 alphanumeric characters in the format "ANA NAN", where "A" represents an uppercase letter and "N" represents a digit.`,
    ],
    uk: [
      "^([A-Z]{1,2}[0-9R][0-9A-Z]? [0-9][ABD-HJLNP-UW-Z]{2}|GIR 0AA)$",
      "United Kingdom must have either 5 or 7 alphanumeric characters, 4 digits followed by a space and 2 uppercase letters, or 4 digits followed by a space and 3 uppercase letters.",
    ],
  };
  const constraint = new RegExp(constraints[countryValue][0], "");
  console.log(constraint);
  console.log(zip.value);

  if (constraint.test(zip.value)) {
    zip.setCustomValidity("");
  } else {
    zip.setCustomValidity(constraints[countryValue][1]);
  }
};

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address.");
  } else {
    email.setCustomValidity("");
  }
});

window.onload = () => {
  document.getElementById("country").onchange = checkZip;
  document.getElementById("zip").onchange = checkZip;
};
