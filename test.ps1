# Set your project folder
$projectPath = "C:\Users\James\Desktop\code\Ordering-System"

# Run Node.js container
docker run -it --rm `
  -p 3000:3000 `
  -v "${projectPath}:/app" `
  -w /app `
  --name osys `
  node:22-alpine `
  /bin/sh
