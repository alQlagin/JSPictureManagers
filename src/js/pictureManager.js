'use strict';

export default class pictureManager {
  constructor(inputName, inputURL, button, container) {
    this.inputName = inputName;
    this.inputURL = inputURL;
    this.button = button;
    this.container = container;
    this.messageWrognURL = document.querySelector('.wrong-url');
  }

  init() {
    this.buttonClickEventListener();
    this.pictureDeleteEventListener();
  }

  buttonClickEventListener() {
    this.button.addEventListener('click', event => {
      event.preventDefault();
      if (this.checkURL(this.inputURL.value) && this.inputName.value) {
        this.addPicture();
        this.clearInputs();
        this.removeMessage();
      } else {
        this.clearInputs();
        this.showMessage();
      }
    })
  }

  pictureDeleteEventListener() {
    this.container.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.type === 'submit') {
        const collection = event.currentTarget.children;
        collection[pictureManager.getElementIndex(collection, event)].remove();
      }
    })
  }

  checkURL(URL) {
    return(URL.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  addPicture() {
    this.container.insertAdjacentHTML('beforeend', `
      <div class="img">
        <button class="close">&times;</button>
        <img alt="${this.inputName.value}" src="${this.inputURL.value}">
      </div>
    `)
  }

  clearInputs() {
    this.inputName.value = '';
    this.inputURL.value = '';
  }

  showMessage() {
    if (this.messageWrognURL.classList.contains('hidden')) {
      this.messageWrognURL.classList.remove('hidden');
    }
  }

  removeMessage() {
    if (!this.messageWrognURL.classList.contains('hidden')) {
      this.messageWrognURL.classList.add('hidden');
    }
  }
  static getElementIndex(collection, event) {
    return Array.from(collection).findIndex((element) => {
      if (element.querySelector('button') === event.target) { return true }
    })
  }
}
