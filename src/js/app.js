'use strict';

import pictureManager from "./pictureManager";

const picture = new pictureManager(
  document.querySelector('[data-id=picture-name]'),
  document.querySelector('[data-id=picture-url]'),
  document.querySelector('[data-action=picture]'),
  document.querySelector('[data-section=pictures]'),
)

picture.init();
