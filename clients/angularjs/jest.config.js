module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.html?$": "html-loader-jest",
  },
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/app/components/$1",
    "^@core/(.*)$": "<rootDir>/src/app/core/$1",
  },
};
