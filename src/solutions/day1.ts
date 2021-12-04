import { promises as fs } from 'fs';

(async () => {
  const data = await fs.readFile(__dirname + '/input.txt', { encoding: 'utf8' });
  const arr = data.split('\n').map(mes => parseInt(mes, 10));

  const part1 = () => {
    let increases = 0;
    arr.forEach((measurement, index, measurements) => {
      const previousMeasurement = measurements[index - 1];

      if (!previousMeasurement) {
        return;
      }

      if (measurement > previousMeasurement) {
        increases++;
      }
    })

    return increases;
  }

  const part2 = () => {
    let previousValue;
    let increases = 0;
    for (let i = 0; i< arr.length - 2; i++ ) {
      const first = arr[i];
      const second = arr[i + 1];
      const third = arr[i + 2];

      if (!first || !second || !third) {
        continue;
      }

      const value = first + second + third;

      if (previousValue && value > previousValue) {
        increases++;
      }
      
      previousValue = value;
    }

    return increases
  }

  console.log(part1()); // 1475
  console.log(part2()); // 1516
})()