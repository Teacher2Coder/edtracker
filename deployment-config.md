# Deployment Configuration for EdTracker

## Required Environment Variables

Create a `.env` file in your root directory with these variables:

```env
# Database Configuration (for AWS RDS)
DB_NAME=edutracker_db
DB_USER=postgres
DB_PASSWORD=your_rds_password_here
DB_HOST=your_rds_endpoint_here
DB_PORT=5432

# JWT Secret for authentication
JWT_SECRET=your_super_secret_jwt_key_here

# Node Environment
NODE_ENV=production

# Server Port (Elastic Beanstalk will set this)
PORT=8080
```

## AWS RDS Endpoint
After creating your RDS instance, find the endpoint in:
1. RDS Console → Databases → edtracker-db
2. Copy the "Endpoint" value (ends with .rds.amazonaws.com)
3. Use this as your DB_HOST value

## JWT Secret
Generate a strong JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
``` 