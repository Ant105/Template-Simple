module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
    cssnano: {
      preset: [
        "default",
        {
          mergeLonghand: false,
          reduceTransforms: false,
          convertValues: false,
          zindex: false,
          calc: false,
        },
      ],
    },
  },
};
