function validate(form) {
  if (
    form.name.value == " " ||
    form.name.value.length < 3 ||
    form.name.value == null
  ) {
    alert("Por favor, digite o seu nome corretamente.");
    form.name.focus();
    return false;
  }
  if (
    form.email.value.indexOf("@") == -1 ||
    form.email.valueOf.indexOf(".") == -1 ||
    form.email.value == "" ||
    form.email.value == null
  ) {
    alert("Por favor, indique um e-mail válido.");
    form.email.focus();
    return false;
  }
}
