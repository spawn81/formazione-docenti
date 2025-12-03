#!/bin/bash
echo "Building..."
npm run build

echo "Adding files to git..."
git add .

echo "Enter commit message:"
read message

if [ -z "$message" ]; then
  message="Update presentation"
fi

echo "Committing with message: $message"
git commit -m "$message"

echo "Pushing to GitHub..."
git push

echo "Deploying to GitHub Pages..."
npm run deploy

echo "Done! 🚀"