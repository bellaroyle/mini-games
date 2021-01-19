import React from 'react';

import Ball from './Ball';
import Paddle from './Paddle';
import Score from './Score';

export default function sketch(p) {
  let canvas;
  let playerPaddle;
  let aiPaddle;
  let ball;
  let playerScore;
  let aiScore;
  let width = 624;
  let height = 351;
  p.setup = () => {
    canvas = p.createCanvas(624, 351);
    playerPaddle = new Paddle(26, p);
    aiPaddle = new Paddle(width - 48, p);
    ball = new Ball(p);
    playerScore = new Score(width / 2 - 40, p);
    aiScore = new Score(width / 2 + 40, p);
  };
  p.draw = () => {
    p.background(0);
    playerPaddle.display();
    aiPaddle.display();

    playerPaddle.update();
    aiPaddle.update();

    // make the player move according to the flag
    if (playerPaddle.isUp) {
      playerPaddle.up();
    } else if (playerPaddle.isDown) {
      playerPaddle.down();
    }

    p.processAI();

    ball.update(playerScore, aiScore); // call the update function within ball
    ball.display(); // call the display function within ball

    ball.hasHitPlayer(playerPaddle);
    ball.hasHitAi(aiPaddle);

    p.stroke('#86ffff'); // gives a white stroke
    p.line(width / 2, 0, width / 2, height); // draws a line between two points line(x,y,x1,y1)

    playerScore.display();
    aiScore.display();
  };
  p.processAI = () => {
    let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2;

    if (middleOfPaddle > ball.y) {
      aiPaddle.isUp = true;
      aiPaddle.isDown = false;
    } else {
      aiPaddle.isDown = true;
      aiPaddle.isUp = false;
    }
  };
  p.keyPressed = () => {
    if (p.keyCode === p.UP_ARROW) {
      playerPaddle.isUp = true;
    } else if (p.keyCode === p.DOWN_ARROW) {
      playerPaddle.isDown = true;
    }
  };
  p.keyReleased = () => {
    if (p.keyCode === p.UP_ARROW) {
      playerPaddle.isUp = false;
    } else if (p.keyCode === p.DOWN_ARROW) {
      playerPaddle.isDown = false;
    }
  };
  return <div></div>;
}
