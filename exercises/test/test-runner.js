
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)
const should = chai.should()

const Ex01 = require('../src/Ex01StaticString/test.js')
const Ex02 = require('../src/Ex02Echo/test.js')
const Ex03 = require('../src/Ex03CaseMatch/test.js')
const Ex04 = require('../src/Ex04StringManipulation/test.js')

const host = 'http://localhost:7879'

const server = {
  get: (path) => {
    return chai.request(host)
      .get(path)
  },

  post: (path, body) => {
    return chai.request(host)
      .post(path)
      .send(body)
  },
}


module.exports = (exercise) => {
  switch (exercise) {
    case "01": return Ex01(server)
    case "02": return Ex02(server)
    case "03": return Ex03(server)
    case "04": return Ex04(server)
    default:
      throw new Error(`Invalid exercise ${exercise}`)
  }
}
