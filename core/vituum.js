import vituumInstance from 'vituum';

const vituumConfig = {
  pages: {
    dir: './src/view',
  },
  imports: {
    paths: ['./src/sass/*/**', './src/js/*/**'],
    filenamePattern: { '+.css': 'src/sass', '+.js': 'src/js' },
  },
};

const vituum = () => vituumInstance(vituumConfig);

export default vituum;
