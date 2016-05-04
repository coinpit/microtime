var microtime = require('microtime')

module.exports = (function(){
  var util = {}

  util.micro = function () {
    return microtime.now()
  }

  util.microToMilli = function (micro) {
    return Math.floor(micro / 1e3)
  }

  util.microToSec = function (micro) {
    return Math.floor(micro / 1e6)
  }

  util.microToMin = function (micro) {
    return Math.floor(micro / (1e6 * 60))
  }

  util.milliToMicro = function (milli) {
    return milli * 1e3
  }

  util.secToMicro = function (sec) {
    return sec * 1e6
  }

  util.secToMilli = function (sec) {
    return sec * 1e3
  }

  util.minToMicro = function (min) {
    return min * 1e6 * 60
  }

  util.milliToSec = function (milli) {
    return Math.floor(milli / 1000)
  }

  util.minToSec = function (min) {
    return min * 60
  }

  util.minToMilli = function(min){
    return min * 60 * 1000
  }

  util.secondsAfterNow = function (seconds) {
    return util.milliToSec(Date.now()) + seconds
  }

  return util
})()
