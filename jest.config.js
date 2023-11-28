module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: './coverage',
  collectCoverageFrom: ['test/**/*.ts'],
  modulePaths: ['src'],
  moduleDirectories: ['node_modules'],
};
