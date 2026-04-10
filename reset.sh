#!/usr/bin/env bash
#
# reset.sh — restore the broken-whack-a-mole repo to its original state
# with all 3 planted bugs intact.
#
# Run this between rehearsals when you want to start fresh.

set -e

cd "$(dirname "$0")"

echo "→ Discarding local changes and restoring main branch..."
git reset --hard
git clean -fd
git checkout main
git pull --ff-only origin main

echo
echo "✓ Reset complete. All 3 bugs are back:"
echo "  1. CSS typo — moles don't pop up visually (style.css)"
echo "  2. Score logic — empty holes still score (script.js)"
echo "  3. A11y — unlabeled hole buttons + low-contrast timer (index.html + style.css)"
echo
echo "Open index.html in a browser to verify."
