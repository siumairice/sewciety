# Deploying to Vercel

This guide will help you deploy your Sewciety Next.js application to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import your project to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repository
   - Vercel will auto-detect Next.js

3. **Configure project settings**
   - **Root Directory**: Set to `src/frontend` (IMPORTANT: This must be set in the dashboard, not in vercel.json)
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (will use vercel.json config)
   - **Output Directory**: `.next` (will use vercel.json config)
   - **Install Command**: `npm install` (will use vercel.json config)
   
   **Note**: The `vercel.json` file at the root is configured, but you MUST set the Root Directory to `src/frontend` in the Vercel dashboard for it to work correctly.

4. **Set Environment Variables** (if needed)
   Add any required environment variables in the Vercel dashboard under Project Settings → Environment Variables

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to frontend directory**
   ```bash
   cd src/frontend
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project or create new
   - Confirm settings
   - Deploy

5. **Set environment variables** (if needed)
   ```bash
   vercel env add YOUR_ENV_VAR_NAME
   ```

6. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Project Structure

Your project structure is:
```
sewciety/
├── src/
│   └── frontend/        ← Next.js app (this is what gets deployed)
│       ├── app/
│       ├── package.json
│       └── vercel.json
```

## Important Notes

1. **Root Directory**: Make sure Vercel is configured to use `src/frontend` as the root directory
2. **Build Command**: The build command runs from the frontend directory, so `npm run build` is correct
3. **Environment Variables**: Add any required environment variables in the Vercel dashboard under Project Settings → Environment Variables
4. **Node Version**: Vercel will auto-detect Node.js version, but you can specify it in `package.json`:
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (check `.nvmrc` or `package.json` engines)
- Review build logs in Vercel dashboard

### Environment Variables Not Working
- Make sure variables are prefixed with `NEXT_PUBLIC_` if they need to be available in the browser
- Redeploy after adding new environment variables
- Check variable names match exactly (case-sensitive)

## Post-Deployment

After deployment:
1. Your site will have a URL like `your-project.vercel.app`
2. You can add a custom domain in Project Settings → Domains
3. Each push to your main branch will trigger a new deployment
4. Preview deployments are created for pull requests

## Next Steps

- Set up a custom domain
- Configure preview deployments
- Set up analytics (Speed Insights is already included)
- Configure environment-specific variables (Production, Preview, Development)

