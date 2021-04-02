function component() {
  const element = document.createElement('div');
  element.innerHTML = '<h1>Hello World</h1>';
  return element;
}

document.body.appendChild(component());