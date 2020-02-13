import $ from 'jquery';
import Util from './util';

class ParallaxFx {
  constructor($element, options) {
    this.$element = $element;
    this.options = ParallaxFx._getMergedOptions(options);
    this.offset = 0;
    this._init();
  }

  static _getMergedOptions(options) {
    return $.extend({}, ParallaxFx.defaults, options);
  }

  _init() {
    this.$element.css(
      'transition',
      `transform ${this.options.duration} ease-out`
    );
  }

  incOffset(value) {
    let newOffset = value * this.options.offsetScale;
    newOffset = Util.clamp(newOffset, -100, 100);
    this.offset -= newOffset;
  }

  execute() {
    this._resetTimer();
    this.timer = setTimeout(() => {
      this.$element.css(
        'transform',
        `translate3d(0, ${this.offset}px, 0)`
      );
    }, this.options.delay);
  }

  _resetTimer() {
    this.timer && clearTimeout(this.timer);
  }

  reset() {
    this._resetTimer();
    this.$element.css('transform', 'translate3d(0, 0, 0)');
    this.offset = 0;
  }
}

ParallaxFx.defaults = {
  offsetScale: 0.06,
  duration: '0.5s',
  delay: 100,
};

export default ParallaxFx;

// class ParallaxFx {
//   constructor($element, options) {
//     this.$element = $element;
//     this.options = $.extend({}, ParallaxFx.defaults, options);
//     this.offset = 0;
//   }

//   init() {
//     this.$element.css(
//       'transition',
//       `transform ${this.options.duration} ease-out`
//     );
//   }

//   incOffset(value) {
//     let newOffset = value * this.options.scale;
//     newOffset = Util.clamp(newOffset, -100, 100);
//     this.offset -= newOffset;
//   }

//   execute() {
//     this._resetTimer();
//     this.timer = setTimeout(() => {
//       this.$element.css(
//         'transform',
//         `translate3d(0, ${this.offset}px, 0)`
//       );
//     }, this.options.delay);
//   }

//   _resetTimer() {
//     this.timer && clearTimeout(this.timer);
//   }

//   reset() {
//     this._resetTimer();
//     this.$element.css('transform', 'translate3d(0, 0, 0)');
//   }
// }

// ParallaxFx.defaults = {
//   scale: 0.06,
//   duration: '0.5s',
//   delay: 100,
// };

// export default ParallaxFx;