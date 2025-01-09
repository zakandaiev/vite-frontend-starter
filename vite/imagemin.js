import imageminInstance from 'vite-plugin-imagemin';

const imageminConfig = {
  gifsicle: {
    optimizationLevel: 1,
    interlaced: false,
  },
  optipng: {
    optimizationLevel: 5,
  },
  mozjpeg: {
    quality: 75, progressive: true,
  },
  pngquant: {
    quality: [0.7, 0.9],
    speed: 7,
  },
  svgo: {
    plugins: [
      {
        name: 'removeViewBox',
        active: false,
      },
      {
        name: 'convertShapeToPath',
        active: false,
      },
      {
        name: 'convertEllipseToCircle',
        active: false,
      },
    ],
  },
};

const imagemin = () => imageminInstance(imageminConfig);

export default imagemin;
