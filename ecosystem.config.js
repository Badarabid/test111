module.exports = {
  apps : [{
    name: "my-app",
    script: "./server.js", // Agar aapki file ka naam index.js hai to wo likhein
    env: {
      NODE_ENV: "production",
    }
  }]
}