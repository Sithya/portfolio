#!/bin/bash

echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

# Save the current branch name
CURRENT_BRANCH=$(git branch --show-current)
echo "📝 Current branch: $CURRENT_BRANCH"

# Switch to gh-pages branch (create if it doesn't exist)
echo "🔄 Switching to gh-pages branch..."
git checkout gh-pages 2>/dev/null || git checkout -b gh-pages

# Remove previous files (but keep .git, node_modules, and out)
echo "🧹 Cleaning previous build..."
find . -maxdepth 1 ! -name '.' ! -name '..' ! -name '.git' ! -name 'node_modules' ! -name 'out' -exec rm -rf {} + 2>/dev/null

# Copy the build files from out directory
echo "📋 Copying build files..."
if [ -d "out" ]; then
    cp -r out/* .
    # Create .nojekyll file to prevent GitHub from processing the site with Jekyll
    touch .nojekyll
else
    echo "❌ Build output directory 'out' not found!"
    git checkout $CURRENT_BRANCH
    exit 1
fi

# Add and commit changes
echo "💾 Committing changes..."
git add .
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push -u origin gh-pages

# Switch back to the original branch
echo "🔄 Switching back to $CURRENT_BRANCH branch..."
git checkout $CURRENT_BRANCH

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
echo "⏰ It may take a few minutes for GitHub Pages to update."
