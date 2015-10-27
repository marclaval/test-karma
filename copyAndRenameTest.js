var fs = require('fs');

var COUNT = 8000;
for (var i = 0; i < COUNT; i++) {
  var content = fs.readFileSync('.\\test\\test_spec.js');
  fs.writeFileSync('.\\test\\generated\\test' + i + '_spec.js', content);
}