litecanvas({
  width: 32,
  height: 32,
  pixelart: true,
  // autoscale: false,
})

const art = paint(8, 8, [
  // each number from 0 to F (hexdecimals) is a color
  // tip: use empty/space character to 100% transparent
  '  0000  ',
  ' 055550 ',
  '05505050',
  '05555550',
  '05500050',
  '05555550',
  ' 055550 ',
  '  0000  ',
])

function update() {
  // do nothing
}

function draw() {
  if (ELAPSED > 1) return // stop the draw
  clear(1)
  image(0, 0, art)
}
