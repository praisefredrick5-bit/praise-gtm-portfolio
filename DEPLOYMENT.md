# Deployment readiness

This project uses standard Next.js App Router conventions. No environment variables are needed. The included vercel.json disables automatic Git deployments until deployment is authorized. It has not been deployed.

When deployment is authorized, remove the `git.deploymentEnabled: false` setting from vercel.json before enabling Git-based deployment.

## Vercel settings (when deployment is authorized)

- Framework preset: Next.js
- Root directory: repository root (`.`)
- Node.js version: 24.x (also recorded in package.json and .nvmrc)
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: leave the Next.js default
- Environment variables: none required

Before connecting a GitHub repository to Vercel, note that connecting it or pushing to an existing Vercel integration can trigger automatic deployments. Keep the repository disconnected, or disable Git deployments in an existing integration, until deployment is authorized.

## Verification

```sh
npm ci
npm run build
npm run typecheck
```

GitHub Actions runs these checks for pull requests and pushes to main. The homepage is statically prerendered by Next.js. Contact details and case studies are clearly labeled placeholders; replace these with verified content when ready to publish.

## Repository status at preparation

The connected repository `praisefredrick5-bit/praise-gtm-portfolio` was inspected through the GitHub connector. Its main branch at commit `301f53e1838d2ef3bf18ec70427303b24e838fbe` contained only README.md, and there were no pull requests. The workspace did not contain a usable Git checkout. No remote files were changed.

## Create the pull request

Download `portfolio-source.tar.gz` from the prepared release folder. In a terminal with Git and GitHub CLI installed, authenticate as the repository owner and run:

```sh
gh auth login
git clone https://github.com/praisefredrick5-bit/praise-gtm-portfolio.git
cd praise-gtm-portfolio
git switch -c feat/portfolio-foundation
# Replace the archive path with its actual downloaded location.
tar -xzf /path/to/portfolio-source.tar.gz
npm ci
npm run build
npm run typecheck
git add .gitignore .nvmrc .github app components lib package.json package-lock.json postcss.config.mjs tsconfig.json next-env.d.ts README.md DEPLOYMENT.md PULL_REQUEST.md
git diff --cached --stat
git commit -m "Build Praise Fredrick portfolio foundation"
git push -u origin feat/portfolio-foundation
gh pr create --repo praisefredrick5-bit/praise-gtm-portfolio --base main --head feat/portfolio-foundation --title "Build Praise Fredrick portfolio foundation" --body-file PULL_REQUEST.md
```

If GH_TOKEN overrides your authenticated session with an invalid token, run `unset GH_TOKEN` before `gh auth login`. If Git requests your identity, configure your own name and email with `git config user.name` and `git config user.email`.

## Review and merge

Open the PR URL printed by `gh pr create`, review Files changed, and wait for Portfolio checks to pass. Confirm no Vercel automatic deployment integration is active while deployment remains unauthorized. Use **Squash and merge** into main, then **Delete branch**. Alternatively, after replacing NUMBER with the actual PR number:

```sh
gh pr checks NUMBER --repo praisefredrick5-bit/praise-gtm-portfolio --watch
gh pr merge NUMBER --repo praisefredrick5-bit/praise-gtm-portfolio --squash --delete-branch
git switch main
git pull --ff-only origin main
```
