module.exports = {
  plugins: {
    "doiuse": {
      onFeatureUsage: info => {
        process.stderr.write(info.message + '\n');
      },
    },
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
    "doiuse": {
      onFeatureUsage: info => {
        process.stderr.write(info.message + '\n');
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
