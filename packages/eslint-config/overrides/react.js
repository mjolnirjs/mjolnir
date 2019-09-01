// for react env
module.exports = {
  files: ['**/*.{js,jsx,ts,tsx}'],
  extends: ['../plugins/react', '../plugins/react-hooks'].map(require.resolve),
};
