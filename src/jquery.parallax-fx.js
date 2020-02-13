import $ from 'jquery';
import ParallaxFx from './parallax-fx';

const DATA_KEY = 'rsh.parallax-fx';

$.fn.parallaxFx = function (options) {
  return this.each((index, element) => {
    const $element = $(element);
    let instance = $element.data(DATA_KEY);

    if (!instance) {
      $element.data(
        DATA_KEY, 
        instance = new ParallaxFx($element, options)
      );
      return;
    }

    if (typeof options == 'number') {
      instance.incOffset(options);
      instance.execute();
    } else if (typeof options == 'string') {
      instance[options]();
    }
  });
};

// $.fn.parallaxFx = function (option) {
//   return this.each((index, element) => {
//     const $element = $(element);
//     let instance = $element.data(DATA_KEY);

//     if (!instance) {
//       $element.data(
//         DATA_KEY,
//         instance = new ParallaxFx($element)
//       );
//     }

//     if (typeof option == 'number') {
//       instance.incOffset(option);
//       instance.execute();
//     } else if (typeof option == 'string') {
//       instance[option]();
//     }
//   });
// };