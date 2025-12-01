# On-Demand Dev Environment

🚀 A ready-to-use development environment with Python and Node.js support for Supabase integration.

## Features

- **Python Environment**: Full Python setup with Supabase client library
- **Node.js Environment**: JavaScript/Node.js setup with Supabase JS client
- **Environment Configuration**: Secure credential management with `.env` files
- **Test Scripts**: Automated connectivity tests for both Python and JavaScript
- **Vercel Deployment**: Pre-configured for seamless deployment to Vercel

## Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Dpdpdpdp0987/on-demand-dev-environment.git
cd on-demand-dev-environment
```

### 2. Set Up Environment Variables

Copy the example environment file and configure your Supabase credentials:

```bash
cp .env.example .env
```

The `.env` file is already pre-populated with your Supabase credentials. If you need to update them:

```env
SUPABASE_URL=https://azeexsfediobupmconyk.supabase.co
SUPABASE_KEY=your-anon-key-here
```

### 3. Python Setup

#### Create a virtual environment (recommended):

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

#### Install dependencies:

```bash
pip install -r requirements.txt
```

#### Run Python test:

```bash
python test.py
```

### 4. Node.js Setup

#### Install dependencies:

```bash
npm install
# or
yarn install
```

#### Run JavaScript test:

```bash
node test.js
# or
npm test
```

## Project Structure

```
on-demand-dev-environment/
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
├── requirements.txt     # Python dependencies
├── package.json         # Node.js dependencies
├── test.py              # Python connectivity test
├── test.js              # JavaScript connectivity test
├── vercel.json          # Vercel deployment configuration
└── README.md            # This file
```

## Usage

### Python Example

```python
import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY")

supabase: Client = create_client(supabase_url, supabase_key)

# Your code here
# Example: Query data
response = supabase.table('your_table').select("*").execute()
print(response.data)
```

### JavaScript Example

```javascript
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Your code here
// Example: Query data
const { data, error } = await supabase
  .from('your_table')
  .select('*');

if (error) console.error(error);
else console.log(data);
```

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_KEY`
6. Click "Deploy"

### Environment Variables on Vercel

Make sure to add these environment variables in your Vercel project settings:

- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_KEY`: Your Supabase anonymous key

## Testing

Both test scripts verify:
- ✅ Environment variables are properly loaded
- ✅ Supabase client initialization
- ✅ API connectivity
- ✅ Basic authentication endpoint access

## Troubleshooting

### Python Issues

- **Module not found**: Ensure you've activated your virtual environment and installed dependencies
- **Connection errors**: Check your `.env` file and internet connection

### Node.js Issues

- **Package errors**: Try deleting `node_modules` and running `npm install` again
- **Connection errors**: Verify your `.env` file contains the correct credentials

### Vercel Deployment Issues

- **Build failures**: Ensure all dependencies are listed in `requirements.txt` and `package.json`
- **Runtime errors**: Check that environment variables are properly set in Vercel dashboard

## Security Notes

⚠️ **Important**: 
- Never commit your `.env` file to version control
- The `.env.example` file contains sample credentials - replace them with your own
- Use environment secrets for production deployments
- Rotate your API keys regularly

## Contributing

Feel free to open issues or submit pull requests for improvements!

## License

MIT License - feel free to use this project for your own development needs.

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Python Supabase Client](https://github.com/supabase-community/supabase-py)
- [JavaScript Supabase Client](https://github.com/supabase/supabase-js)
- [Vercel Documentation](https://vercel.com/docs)

---

**Built with ❤️ for rapid development**
