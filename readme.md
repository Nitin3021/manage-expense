# Expense manager

## Overview
Welcome to one of my personal projects! As the project name makes it clear, the idea behind this project is to build an app that can manage all the daily expense of an User. This app has been built using MERN stack and Redux. User can create an expense group and manage individual expenses within that group.

![screenshot](https://github.com/Nitin3021/manage-expense/blob/dd06055cb6b27bee70fc76ff14c17f6c977b5332/public/images/git_repo_1.png)

## Features

- Login using Google/Facebook authentication
- Expenses management (Create/Delete/Update)
- Summary of total expenses
- Filters using expense description, date
- Sorting options using Date/Amount

## Usage

### Firebase database

Firebase database has been used in this project. To execute this project successfully, apart from the usual npm requirements, you would also need a firebase account to receive the key credentials.

### Project creation
<ins>This project is not initiated using CREATE-REACT-APP.</ins> It has been made from scratch without the usage of any pre-defined skeleton/boilerplate.

### Env Variables

Create 2 files, ".env.development" & ".env.test" in then root and add the following to both of the files.

```
FIREBASE_API_KEY = (You will find this in Firebase after setting up an account)
FIREBASE_AUTH_DOMAIN = (You will find this in Firebase after setting up an account)
FIREBASE_DATABASE_URL = (You will find this in Firebase after setting up an account)
FIREBASE_PROJECTID = (You will find this in Firebase after setting up an account)
FIREBASE_STORAGEBUCKET = (You will find this in Firebase after setting up an account)
FIREBASE_MESSAGINGSENDERID = (You will find this in Firebase after setting up an account)
FIREBASE_APPID = (You will find this in Firebase after setting up an account)
```

### Install Dependencies (frontend & backend)

```
npm install
```

### Run

```
# Run in development environment
npm run dev-server
```

## Build & Deploy

```
# Create prod build
npm run build:prod
```

## Test runs

```
# Re-run test cases created using Jest & Enzyme
npm test
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku


## License

The MIT License

Copyright (c) 2021 [MIT © NP](https://github.com/Nitin3021)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.