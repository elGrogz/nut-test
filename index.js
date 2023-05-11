const {
  mouse,
  left,
  up,
  right,
  down,
  straightTo,
  Point,
  getActiveWindow,
  centerOf,
} = require("@nut-tree/nut-js");

(async () => {
  //   await mouse.move(left(500));
  //   await mouse.move(up(500));
  //   await mouse.move(right(500));
  //   await mouse.move(down(500));

  //   const target = new Point(500, 360);

  //   await mouse.move(straightTo(target));

  const windowRef = await getActiveWindow();
  console.log(windowRef);

  const region = await windowRef.region;

  await mouse.setPosition(await centerOf(region));
})();
