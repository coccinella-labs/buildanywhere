<p align="center">
  <img src="https://raw.githubusercontent.com/Coccinella-Labs/buildanywhere/main/.github/assets/thumbnail.png" alt="buildanywhere" width="100%">
</p>

# Build-Anywhere Pipeline

Build the same way on GitHub Actions, GitLab CI, and CircleCI. All logic lives in scripts, so each CI system only orchestrates.

## Why

A template for portable CI/CD. One set of scripts, three CI systems, no duplicated pipeline code.

Supported setups:

- Open-source contributors use GitHub Actions.
- Internal or self-hosted infrastructure uses GitLab CI.
- Legacy or enterprise pipelines use CircleCI.

## How

The CI files orchestrate. The scripts run.

Each CI does three things:

1. Check out the code.
2. Set up the environment.
3. Run the scripts.

## Local

Run the CI locally:

```bash
make ci
```

Or run each stage separately:

```bash
./scripts/ci/setup.sh && ./scripts/ci/test.sh && ./scripts/ci/build.sh && ./scripts/ci/lint.sh
```

If it works locally, it works on CI.

### Docker

Test in a container:

```bash
docker build -t ci-test .
docker run ci-test
```

### Pre-commit

Install the auto-checks:

```bash
pip install pre-commit
pre-commit install
```

Run them manually:

```bash
pre-commit run --all-files
```

The commit-msg hook checks that commit messages follow Conventional Commits.

### Advanced

For customizable GitLab CI with inputs, see `gitlab-inputs-example.yml`.

## Files

```
🌳 Project Structure
├── 📁 scripts/ci/                # Build scripts
│   ├── 🔧 setup.sh               # Setup
│   ├── 🧪 test.sh                # Tests
│   ├── 🏗️ build.sh               # Build
│   └── 🔍 lint.sh                # Lint
├── 📋 Makefile                   # Local commands
├── 📦 package.json               # Node.js project
├── 🔒 package-lock.json          # Dependency lock
├── 🐳 Dockerfile                 # Container test
├── 📄 index.js                   # Example code
├── 📜 LICENSE                    # MIT
├── 🏷️ VERSION                    # 1.0.0
├── 🚀 .github/                   # GitHub Actions
│   ├── workflows/ci.yml          # Main CI
│   ├── workflows/reusable-ci.yml # Reusable CI
│   ├── workflows/scancode.yml    # License scan
│   ├── dependabot.yml            # Auto-update deps
│   ├── CODEOWNERS                # Reviewers
│   └── assets/thumbnail.png      # Header image
├── 🔄 .gitlab-ci.yml             # GitLab CI
├── 🔄 .circleci/                 # CircleCI
│   └── config.yml                # CircleCI config
├── 🔧 gitlab-inputs-example.yml  # GitLab inputs
├── 🔍 .eslintrc.json             # Lint config
├── ✨ .prettierrc                # Format config
├── 🪝 .pre-commit-config.yaml    # Pre-commit hooks
├── 📐 .editorconfig              # Editor settings
├── 📂 .vscode/settings.json      # Editor settings
├── 📃 .yamllint                  # YAML lint config
└── 🗑️ .gitignore                 # Ignore list
```

## Contribute

Fork this. Add features. Test locally first.
