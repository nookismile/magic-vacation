import relaunchImgAnimate from './relaunch-img-animate';
import Scene2DSeaCalf from './scene-2d-sea-calf';
import Scene2DCrocodile from './scene-2d-crocodile';

export default () => {
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      showResultEls[i].addEventListener(`click`, function () {
        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });
        targetEl[0].classList.add(`screen--show`);
        targetEl[0].classList.remove(`screen--hidden`);

        if (target === `result`) {
          // eslint-disable-next-line no-unused-vars
          const scene = new Scene2DSeaCalf();
        }

        if (target === `result3`) { // LOSE. crocodile scene
          // eslint-disable-next-line no-new
          new Scene2DCrocodile();
        }

        relaunchImgAnimate();
      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
};
