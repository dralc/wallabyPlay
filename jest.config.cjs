module.exports = {
  restoreMocks: true,
  testTimeout: 30000,
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ["fixtures", "mocks"],
};
