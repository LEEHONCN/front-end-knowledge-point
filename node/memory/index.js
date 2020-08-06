let memory = process.memoryUsage();
memory = Object.fromEntries(Object.entries(memory).map(([key, value]) => [key, (value / 1024 / 1024).toFixed(2) + ' MB']));
console.log(memory)

