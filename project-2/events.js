let validName = /^.+$/g;
let validEmail = /^.+@.+\..+$/g;

function color(elementName, regex) {
  let field = document.getElementById(elementName);
  if(isValid(field, regex)) {
    field.style.borderBottom = '1px solid white';
  } else {
    field.style.borderBottom = '1px solid red';
  }
}

function isValid(element, regex) {
  let elementText = element.value;
  if(elementText.search(regex) === -1) {
    return false;
  } else {
    return true;
  }
}

function enableButton() {
  let submit = document.getElementById('submit-button');
  let nameField = document.getElementById('name-field');
  let emailField = document.getElementById('email-field');
  submit.disabled = !(isValid(nameField, validName) && isValid(emailField, validEmail));
}

function changeColor(color) {
  let root = document.documentElement;
  root.style.setProperty('--custom-color', color);
  document.getElementById('color-dropdown').style.height = '0px';
}

function toggleColorMenu() {
  let menu = document.getElementById('color-dropdown');
  let height = window.getComputedStyle(menu, null).getPropertyValue('height');
  if(height === '0px') {
    menu.style.height = 'auto';
  } else {
    menu.style.height = '0px';
  }
}
