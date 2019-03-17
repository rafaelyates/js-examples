'use strict';

const targets = { node: 'current' };

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets },
    ],
  ],
  sourceMaps: true,
};
