module.exports = {
  preset: "jest-preset-angular",
  roots: ['src'],
  setupTestFrameworkScriptFile: "<rootDir>/src/setup-jest.ts",
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png)$": "<rootDir>/__mocks__/image.js",
    "@lib/(.*)": "<rootDir>/src/lib/$1"
  }
}
