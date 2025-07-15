#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting EdTracker deployment preparation...\n');

try {
  // Step 1: Install dependencies
  console.log('📦 Installing server dependencies...');
  execSync('cd server && npm install --production=false', { stdio: 'inherit' });
  
  console.log('📦 Installing client dependencies...');
  execSync('cd client && npm install', { stdio: 'inherit' });

  // Step 2: Build the React app
  console.log('🔨 Building React application...');
  execSync('cd client && npm run build', { stdio: 'inherit' });

  // Step 3: Verify build exists
  if (!fs.existsSync('client/dist')) {
    throw new Error('Build failed - client/dist directory not found');
  }

  console.log('✅ Build completed successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Make sure your .env file has the correct AWS RDS credentials');
  console.log('2. Commit your changes: git add . && git commit -m "Deploy to AWS"');
  console.log('3. Initialize Elastic Beanstalk: eb init');
  console.log('4. Create environment: eb create edtracker-prod');
  console.log('5. Deploy: eb deploy');

} catch (error) {
  console.error('❌ Deployment preparation failed:', error.message);
  process.exit(1);
} 