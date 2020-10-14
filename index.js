const { spawn } = require('child_process')

console.log(`
Thank you for checking out mrapi.

We strongly recommend that you use 'fbi' to initialize the mrapi project.
More info: https://github.com/fbi-js/fbi

Now, run "npx fbi create factory-node" for you...
`)

spawn('npx', ['fbi', 'create', 'factory-node'], {
  stdio: 'inherit',
  env: process.env,
  shell: true,
  cwd: process.cwd(),
})
