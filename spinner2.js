let interval = 0;

const rrrrAy = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ' ];

for (let i = 0; i < rrrrAy.length; i++) {
  setTimeout(() => {
    process.stdout.write(rrrrAy[i]);
  }, interval);
  interval = interval + 1000;
}





