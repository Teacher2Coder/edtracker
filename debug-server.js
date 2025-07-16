import express from 'express';

// Test imports one by one
console.log('✅ Express imported successfully');

try {
  // Test 1: Basic server without any custom imports
  const app = express();
  const PORT = process.env.PORT || 3001;

  app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Debug server working' });
  });

  app.get('/test-imports', async (req, res) => {
    const results = [];
    
    // Test imports one by one
    try {
      const { sequelize } = await import('./server/config/connection.js');
      results.push('✅ Connection import: OK');
    } catch (err) {
      results.push(`❌ Connection import: ${err.message}`);
    }

    try {
      const schemas = await import('./server/schemas/index.js');
      results.push('✅ Schemas import: OK');
    } catch (err) {
      results.push(`❌ Schemas import: ${err.message}`);
    }

    try {
      const auth = await import('./server/utils/auth.js');
      results.push('✅ Auth import: OK');
    } catch (err) {
      results.push(`❌ Auth import: ${err.message}`);
    }

    try {
      const seeds = await import('./server/config/seeds.js');
      results.push('✅ Seeds import: OK');
    } catch (err) {
      results.push(`❌ Seeds import: ${err.message}`);
    }

    res.json({ status: 'debug', imports: results });
  });

  app.listen(PORT, () => {
    console.log(`🔍 Debug server listening on port ${PORT}`);
    console.log(`🧪 Test imports at: /test-imports`);
  });

} catch (error) {
  console.error('❌ Debug server error:', error);
  process.exit(1);
} 