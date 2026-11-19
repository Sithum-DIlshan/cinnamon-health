#!/bin/bash

# ═══════════════════════════════════════════════════════════
#  Cinnamon Health - Image Setup Script
# ═══════════════════════════════════════════════════════════

echo "🌿 Cinnamon Health - Image Setup"
echo "════════════════════════════════════════════════════════"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Project directory
PROJECT_DIR="/Users/sithum/Projects/cinnamon-health"
ASSETS_DIR="$PROJECT_DIR/assets"

echo "📁 Project directory: $PROJECT_DIR"
echo "📂 Assets directory: $ASSETS_DIR"
echo ""

# Check if assets directory exists
if [ ! -d "$ASSETS_DIR" ]; then
    echo "❌ Assets directory not found. Creating..."
    mkdir -p "$ASSETS_DIR"
    echo "✅ Assets directory created!"
fi

echo ""
echo "════════════════════════════════════════════════════════"
echo "📸 IMAGE SETUP INSTRUCTIONS"
echo "════════════════════════════════════════════════════════"
echo ""

echo "First, save your images from the chat:"
echo ""
echo "1. Right-click Image #8 (Logo) → Save to Desktop as 'logo.png'"
echo "2. Right-click Image #2 (Tea with plant) → Save as 'featured-product.jpg'"
echo "3. Right-click Image #5 (Tea cups) → Save as 'product-tea-stick.jpg'"
echo "4. Right-click Image #1 (Product only) → Save as 'about-cinnamon.jpg'"
echo ""

echo -e "${YELLOW}Press ENTER when you've saved all images to your Desktop...${NC}"
read

echo ""
echo "Now copying images to assets folder..."
echo ""

# Function to copy if exists
copy_if_exists() {
    SOURCE="$HOME/Desktop/$1"
    DEST="$ASSETS_DIR/$1"

    if [ -f "$SOURCE" ]; then
        cp "$SOURCE" "$DEST"
        echo -e "${GREEN}✅ Copied: $1${NC}"
        return 0
    else
        echo -e "⚠️  Not found: $1 (skipping)"
        return 1
    fi
}

# Copy images
copy_if_exists "logo.png"
copy_if_exists "featured-product.jpg"
copy_if_exists "product-tea-stick.jpg"
copy_if_exists "about-cinnamon.jpg"

echo ""
echo "════════════════════════════════════════════════════════"
echo "📋 CHECKING SETUP"
echo "════════════════════════════════════════════════════════"
echo ""

# Check what's in assets
echo "Files in assets folder:"
ls -lh "$ASSETS_DIR" 2>/dev/null || echo "No files yet"

echo ""
echo "════════════════════════════════════════════════════════"
echo -e "${GREEN}✨ Setup complete!${NC}"
echo "════════════════════════════════════════════════════════"
echo ""
echo "Next steps:"
echo "1. Open index.html in your browser"
echo "2. See your beautiful website!"
echo ""
echo "To open the website, run:"
echo "  open index.html"
echo ""
echo "Or simply:"
echo "  open /Users/sithum/Projects/cinnamon-health/index.html"
echo ""
