var expect   = require("expect.js")
var microTime = require("../index.js")

describe("micro time", function () {
  describe("compare micro time accuracy", function () {
    it("should be congruent with Date.now() within 10ms", function () {
      for (var i = 0; i < 10; i++) {
        var dateNowMs      = Date.now()
        var microNowMs     = Math.round(microTime.micro() / 1e3)
        var diffWithin10Ms = Math.floor( ( microNowMs - dateNowMs ) / 10)

        expect(diffWithin10Ms).to.eql(0)
      }
    })

    it("should give increasing values every time", function () {
      var prev = microTime.micro()

      for (var i = 0; i < 10; i++) {
        var currentReading = microTime.micro()
        expect(currentReading).to.be.greaterThan(prev)
        prev = currentReading
      }
    })
  })
  describe("time conversion", function () {
    var tests = [
      { d: "microToMilli", m: microTime.microToMilli, in: 1e3     , out: 1   },
      { d: "microToSec"  , m: microTime.microToSec  , in: 1e6     , out: 1   },
      { d: "microToMin"  , m: microTime.microToMin  , in: 60 * 1e6, out: 1   },
      { d: "milliToMicro", m: microTime.milliToMicro, in: 1       , out: 1e3 },
      { d: "milliToSec"  , m: microTime.milliToSec  , in: 1000    , out: 1   },
      { d: "secToMicro"  , m: microTime.secToMicro  , in: 1       , out: 1e6 },
      { d: "minToSec"    , m: microTime.minToSec    , in: 1       , out: 60  }
    ];

    tests.forEach(test => {
      it(test.d, function () {
        expect(test.m(test.in)).to.be.equal(test.out)
      })
    })
  })
})
