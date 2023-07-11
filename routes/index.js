var express = require('express');
var router = express.Router();

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* GET home page. */
router.get('/', function (req, res) {
  const error_code = ''; //錯誤碼
  const temperature = getRandom(34, 37);
  const pressure = getRandom(700, 800); //壓力 -
  const electric_c = getRandom(60, 70); //電流
  const frequency = getRandom(240, 260); //頻率
  const rotating_speed = getRandom(2500, 2600); //轉速
  const power = getRandom(30, 34);
  const operation_time = getRandom(1, 50);

  res.send({
    status: true,
    error_code: error_code,
    temperature: temperature,
    pressure: pressure,
    voltage: 340,
    electric_c: electric_c,
    frequency: frequency,
    rotating_speed: rotating_speed,
    power: power,
    operation_time: operation_time,
  });
});

module.exports = router;
