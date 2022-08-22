// eslint-disable-next-line no-undef
module.exports = {
  roots: ['<rootDir>/src/', '<rootDir>/__tests__/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub'
  },
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      diagnostics: false
    }
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  collectCoverageFrom: [
    '**/*.js',
    '**/*.tsx',
    '!**/node_modules/**',
    '!build/**',
    '!dist/**',
    '!lib/**',
    '!test-results/**'
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  cacheDirectory: '<rootDir>/.jest-cache',
  coverageDirectory: '<rootDir>/test-results',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  testTimeout: 10 * 1000,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  preset: 'ts-jest',
};
