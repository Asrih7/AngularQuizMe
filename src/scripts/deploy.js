const { execSync } = require('child_process');
const fs = require('fs');

// Function to run shell commands
function run(command) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute command: ${command}`, error);
    process.exit(1);
  }
}

// Build the project
console.log('Building the project...');
run('npm run build');

// Create or update .nojekyll file to prevent Jekyll processing
fs.writeFileSync('./dist/.nojekyll', '');

// Create a 404.html that redirects to index.html for SPA routing
const redirectHTML = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting to index.html</title>
    <meta http-equiv="refresh" content="0; url=./">
    <script>
      window.location.href = window.location.origin + '/AngularQuizMe' + window.location.pathname.replace('/AngularQuizMe', '');
    </script>
  </head>
  <body>
    Redirecting to index.html...
  </body>
</html>
`;
fs.writeFileSync('./dist/404.html', redirectHTML);

// Deploy to GitHub Pages
console.log('Deploying to GitHub Pages...');
run('npx gh-pages -d dist -t true');

console.log('Deployment complete! Your site should be available soon at your GitHub Pages URL.');
console.log('(Note: It might take a few minutes for changes to appear)');