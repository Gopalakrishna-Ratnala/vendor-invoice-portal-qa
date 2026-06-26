#!/bin/bash
# QA Excellence — Assignment 3 | Run Playwright tests locally
# Usage: bash run-tests.sh

set -e

echo "=== Installing dependencies ==="
npm install

echo "=== Running Playwright tests ==="
npx playwright test --reporter=html

echo "=== Opening HTML Report ==="
open playwright-report/index.html
