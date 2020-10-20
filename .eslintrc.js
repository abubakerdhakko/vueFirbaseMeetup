// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: "standard",
  // required to lint *.vue files
  plugins: ["html"],
  dev: {
    useEslint: false,
  },
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    "no-unused-vars": "off",

    quotes: "off",
    "comma-dangle": "off",
    semi: "off",
    "space-before-function-paren": "off",

    "new-cap": "off",
    "no-dupe-keys": "off",
    "no-undef": "off",
    "space-before-blocks": "off",
    "no-trailing-spaces": "off",

    // allow async-await
    "generator-star-spacing": 0, // eslint-disable-next-line
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
  },
};
