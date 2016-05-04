# microtime.js

# Convert between micro, milli, second, minutes

## Usage

```javascript
var time = require('microtime.js')
var now = time.micro()
var nowMilli = Date.now()

console.log(now) 
```

```
1462394459286762
```

```javascript
console.log(time.microToMilli(now))
console.log(time.microToMin(now))
console.log(time.milliToMicro(nowMilli))
console.log(time.secToMicro(time.microToSec(now)))
// ... and so on
```
## unix timestamp 30 sec into future
```javascript
console.log(time.secondsAfterNow(30))
```


