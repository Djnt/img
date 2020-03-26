module.exports = {
  setupFiles: ['<rootDir>/src/__tests__/setup.js'],
  "testURL": "http://localhost:8080",
  "testRegex": "src/.*\\.test\\.(js|jsx)$",
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.jsonld$": "json-loader",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/__tests__/fileMock.js"
  }
}