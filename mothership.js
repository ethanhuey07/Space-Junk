class Mothership {
  static WIDTH = 50;
  static HEIGHT = 20;
  static PICKUP_DIAMETER = Mothership.WIDTH * 1.2;
  static CORNER_RADIUS = 8;
  static NUM_PORTHOLES = 4;
  static PORTHOLE_DIAMETER = 6;

  physics;

  constructor() {
    this.physics = new Physics();
  }

  draw() {
    push();
    drawEverywhere({
      offset: this.physics,
      drawFn: () => {
        Mothership.drawMothership({ rotation: this.physics.rotation });
        if (game.debug) {
          this.physics.draw();
          noFill();
          stroke("#fff");
          circle(0, 0, Mothership.PICKUP_DIAMETER);
        }
      },
    });
    pop();
  }

  /**
   * Draws the Mothership's shape around (0, 0). Assumes the caller has
   * already moved the transform to wherever the Mothership should appear.
   **/
  static drawMothership({ rotation }) {
    // TODO (Phase 1): Replace the placeholder with the Mothership: a rounded
    // rectangle, Mothership.WIDTH by Mothership.HEIGHT, with a row of
    // Mothership.NUM_PORTHOLES evenly spaced circular windows along the
    // middle. Draw it around (0, 0), rotated by `rotation`.
    push()
    rotate(rotation)
    rectMode(CENTER)
    fill("#6a0087")
    rect(0,0,Mothership.WIDTH,Mothership.HEIGHT,Mothership.CORNER_RADIUS)
    fill("#90e5ff")
    for ( let i = 0; i < Mothership.NUM_PORTHOLES; i++){
      const x = (-Mothership.WIDTH / 2 +(i + 1) * (Mothership.WIDTH / (Mothership.NUM_PORTHOLES +1)))
      circle (x,0,Mothership.PORTHOLE_DIAMETER)
    }
  }

  move(delta) {
    this.physics.move(delta, { constrain: true });
  }
}
