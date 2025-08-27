function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function parseSecond(sec: number): string {
    const min: number = Math.trunc(sec / 60);
    const s: number = Math.trunc(sec - min * 60);
    return `${min}: ${s}`;
}

export {
    sleep,
    getRandomInt,
    parseSecond
}