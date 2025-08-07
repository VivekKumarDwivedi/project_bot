# Project Bot

A simple Telegram bot built with [Telegraf](https://telegraf.js.org/) that responds to commands and messages.

## Features

- `/start`: Welcomes the user.
- `/binearysearch`: Returns a JavaScript implementation of binary search.
- `/binearytreejs`: Fetches and returns a JavaScript binary tree implementation from a GitHub repository.
- Responds to stickers with 👍.
- Responds to "i love you" with "i lov you too bro".
- Responds to other text messages with "i don't understand human".

## Setup

1. Clone the repository.
2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file with your Telegram bot token:

    ```
    BOT_TOKEN="your-telegram-bot-token"
    ```

4. Start the bot:

    ```sh
    node index.js
    ```

## Dependencies

- [telegraf](https://www.npmjs.com/package/telegraf)
- [axios](https://www.npmjs.com/package/axios)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon) (for