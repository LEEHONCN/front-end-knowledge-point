/*
 * @Author: Li Hang
 * @Date: 2020-06-27 11:32:44
 * @LastEditTime: 2020-06-27 11:42:18
 */ 
module.exports = {
  roots: [
      "<rootDir>/test"
  ],
  testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
      "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};