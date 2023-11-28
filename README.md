# Quick Start Guide of : express-starter-kits

### Step to start codding.

Before following these steps make sure you have Node version **_>=18.0.0 <=18.14.2_** and NPM version **_>=8.0.0 <=8.19.2_** installed in your local machine.

1. Clone the repo
2. After the clone goes to the project root directory.
3. Open the terminal and type this command to install all required dependencies for our applications

```sh
yarn install:pkg
```

4. After installation type this command in the terminal to run our project in development mode

```sh
yarn dev
```

### Our Commit message should be look like this. hear footer is optional:

**_ref:_** [conventional Commit Message ✅](https://www.conventionalcommits.org/en/v1.0.0/)

```sh
feat(user): add login functionality

This commit adds the ability for users to log in to the application.

This commit also fixes a bug with the registration form.

feat issue #123
```

### The type is mandatory and determines the intent of the change. Here are possible values:

```sh
build: changes affecting build systems or external dependencies
ci: updating configuration files for continuous integration and deployment services
chore: updating grunt tasks etc.; no production code change
docs: documentation-only changes
feat: a new feature
fix: a bug fix
perf: a code change that improves performance
refactor: a code change that neither fixes a bug nor adds a feature
style: changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.)
test: adding missing tests or correcting existing tests

```
