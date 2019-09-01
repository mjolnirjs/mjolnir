// for jest env
module.exports = {
  files: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
  extends: ['../plugins/jest'].map(require.resolve),
};
