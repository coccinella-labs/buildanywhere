<p align="center">
  <img src="https://raw.githubusercontent.com/Coccinella-Labs/buildanywhere/main/.github/assets/thumbnail.png" alt="buildanywhere" width="100%">
</p>

# Build-Anywhere Pipeline

Build the same way on GitHub Actions, GitLab CI, and CircleCI. All logic in scripts.

## Why

Template for portable CI/CD. No duplicate code. Scripts do the work.

Supports:

- Open-source contributors → GitHub Actions
- Internal/self-hosted infra → GitLab CI
- Legacy or enterprise pipelines → CircleCI

## How

CI files orchestrate. Scripts run.

Each CI:

1. Check out code
2. Set up environment
3. Run scripts

## Local

Run CI locally:

```bash
make ci
```

Or:

```bash
./scripts/ci/setup.sh && ./scripts/ci/test.sh && ./scripts/ci/build.sh && ./scripts/ci/lint.sh
```

Works locally = works on CI.

### Docker

Test in container:

```bash
docker build -t ci-test .
docker run ci-test
```

### Pre-commit

Auto-checks:

```bash
pip install pre-commit
pre-commit install
```

Manual: `pre-commit run --all-files`

Checks commit messages.

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
