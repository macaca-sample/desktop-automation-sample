'use strict';

var robot = require('robotjs');

var sleep = function(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

describe('test', function() {
  this.timeout(60 * 1000);

  it('should click chrome app', function() {
    robot.setMouseDelay(1);

    var screenSize = robot.getScreenSize();
    var height = screenSize.height;
    var width = screenSize.width;
    var startX = width / 2;
    var startY = height / 2;

    robot.moveMouse(startX, startY);

    var endX = 420;
    var endY = height - 40;

    robot.moveMouseSmooth(endX, endY);

  });

  it('should type url', function *() {
    robot.mouseClick();

    yield sleep(2000);

    robot.moveMouseSmooth(290, 80);

    robot.mouseClick();

    robot.typeString('https://macacajs.github.io');

    robot.keyTap('enter');
  });
});
