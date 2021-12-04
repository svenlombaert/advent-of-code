import { promises as fs } from 'fs';

(async () => {
  const data = await fs.readFile(__dirname + '/input.txt', { encoding: 'utf8' });
  const inputs = data.split('\n').map(mes => mes.split(' '));

  const part1 = () => {
    let horizontal = 0;
    let depth = 0

    inputs.forEach(([direction, steps]) => {
      if (!direction || !steps) {
        return;
      }

      const numberSteps = parseInt(steps, 10);

      switch (direction) {
        case 'forward':
          horizontal += numberSteps;
          break;
        case 'up':
          depth -= numberSteps;
          break
        case 'down':
          depth += numberSteps
          break;
      }
    })

    return horizontal * depth;
  }

  const part2 = () => {
    let horizontal = 0;
    let depth = 0
    let aim = 0;

    inputs.forEach(([direction, steps]) => {
      if (!direction || !steps) {
        return;
      }

      const numberSteps = parseInt(steps, 10);

      switch (direction) {
        case 'forward':
          horizontal += numberSteps;
          depth += aim * numberSteps;
          break;
        case 'up':
          aim -= numberSteps
          break
        case 'down':
          aim += numberSteps;
          break;
      }
    })

    return horizontal * depth;
  }

  console.log(part1()); // 2322630
  console.log(part2()); // 2105273490
})()