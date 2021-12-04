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
  
  console.log(part1()); // 1475
})()