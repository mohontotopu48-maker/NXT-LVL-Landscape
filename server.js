const { spawn } = require("child_process");
const child = spawn("npx", ["next", "dev", "-p", "3000"], {
  stdio: "inherit",
  cwd: "/home/z/my-project",
  env: { ...process.env, PATH: process.env.PATH }
});
child.on("exit", (code) => {
  console.log(`Server exited with code ${code}, restarting...`);
  setTimeout(() => process.exit(1), 1000);
});
child.on("error", (err) => {
  console.error("Server error:", err);
  process.exit(1);
});
