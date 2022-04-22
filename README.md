# [ghst-edit](https://github.com/fa7ad/ghst-edit): Ghost's Markdown Editor (resurrected?)

## Background

This is my attempt at resurrecting Ghost's old markdown editor as a standalone editor.

This is largely based on the works of [@ig3](https://github.com/ig3/ghosditor), [@durgesh-priyaranjan](https://github.com/durgesh-priyaranjan/ghosditor), and [@timsayshey](https://github.com/timsayshey/Ghost-Markdown-Editor).

## Goals / Roadmap

- [x] ~~Dockerize and simplify the development process~~
- [x] Create a desktop app (electron)
- [ ] Add support for saving/opening markdown files

  ...

- [ ] (maybe) Try to update the codebase to not rely on jQuery?

## Run

- Generate an API Key on ImgBB from [here](https://api.imgbb.com/)
- Create a `.env` file on the root directory
- Add your API key to the `.env` file like the following example:
  ```bash
  IMGBB_APIKEY=PASTE_YOUR_API_KEY_HERE
  ```
- Start the application using docker compose
  ```bash
  yarn start
  ```
