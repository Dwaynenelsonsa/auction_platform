@echo off
title Auction Platform

cd /d "%~dp0frontend"

if not exist node_modules (
  echo Installing frontend dependencies...
  npm install
)

echo Starting Auction Platform...
start http://localhost:5173
npm run dev

pause
