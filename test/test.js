var assert = require("assert")

var cmq = require("../")

describe("stub cluster test", function () {
  it("can call the api", function (done) {
    cmq.declare("forsooth!", function (value) {
      assert.equal(value.whatever, "forsooth!")
      done()
    })
  })
})

var amqp = require("amqp")

describe("check for amqp connectivity", function () {
  it("can create a queue with amqp", function (done) {
    var connection = amqp.createConnection()
    // console.log("connection created")
    connection.on("ready", function () {
      // console.log("connection ready")
      connection.queue("my-queue", function (q) {
        // console.log("my-queue ready")
        q.destroy()
        connection.end()
        done()
      })
    })
  })
})


describe("SomeTest", function () {
  it.skip("sync fail", function () {
    assert(false, "ok")
  })
  it.skip("leaks globals", function () {
    bad_global = "OOPS"
  })
  it("sync pass", function () {
    assert(true, "ok")
  })
  it("async pass", function (done) {
    process.nextTick(function () {
      assert(true, "ok")
      done()
    })
  })
})

describe("the undocumented mocha hooks", function () {
  before(function () { console.log("doing before") })
  beforeEach(function () { console.log("doing beforeEach") })
  after(function () { console.log("doing after") })
  afterEach(function () { console.log("doing afterEach") })

  it("does test one", function () {
    console.log("test one");
  })
  it("does test two", function () {
    console.log("test two")
  })
})


