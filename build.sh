echo "*** Deleting public/ directory..."
rm -Rv public/
echo "*** Building and minifying the website..."
hugo --minify
