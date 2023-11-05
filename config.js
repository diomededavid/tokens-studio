const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary-utils');

registerTransforms(StyleDictionary);
require('./custom-transforms.js');

const sd = StyleDictionary.extend({
  source: ['**/tokens.json'],
  platforms: {
    css: {
      transforms: [
        'fontWeight/number',
        'ts/descriptionToComment',
        'ts/opacity',
        'ts/size/lineheight',
        'ts/typography/fontWeight',
        'ts/resolveMath',
        'ts/size/css/letterspacing',
        'ts/typography/css/fontFamily',
        'ts/typography/css/shorthand',
        'ts/border/css/shorthand',
        'ts/shadow/css/shorthand',
        'ts/color/css/hexrgba',
        'ts/color/modifiers',
        'name/cti/kebab',
        'size/px-to-rem',
        'clamp/css',
        'dimension/pixelToRem'
      ],
      options: {
        basePxFontSize: 16
      },
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    scss: {
      transforms: [
        'fontWeight/number',
        'ts/descriptionToComment',
        'ts/opacity',
        'ts/size/lineheight',
        'ts/typography/fontWeight',
        'ts/resolveMath',
        'ts/size/css/letterspacing',
        'ts/typography/css/fontFamily',
        'ts/typography/css/shorthand',
        'ts/border/css/shorthand',
        'ts/shadow/css/shorthand',
        'ts/color/css/hexrgba',
        'ts/color/modifiers',
        'name/cti/kebab',
        'size/px-to-rem',
        'clamp/css',
        'bootstrap-colors-and-scss-map',
        'dimension/pixelToRem'
      ],
      options: {
        basePxFontSize: 16
      },
      buildPath: 'build/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },

      ],
    },
  },

});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
