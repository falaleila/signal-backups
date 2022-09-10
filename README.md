# signal-backups
Make backups of the message history for large Signal groups.

## Current status
**EXTREMELY WIP**

Right now just a POC that prints the IDs for Signal groups on a copy of the Signal database. Crude!

## Getting started
**DANGER**: You **must** close the Signal app before you copy the `db.sqlite` file!! **You can corrupt your entire message history if you aren't careful!!**

1. Clone this project and create a new `instance` folder
2. Copy `C:\Users\<username>\AppData\Roaming\Signal\sql\db.sqlite` and `C:\Users\<username>\AppData\Roaming\Signal\config.json` to the `instance` folder, where `<username>` corresponds to your Windows user.
3. Run:
```bash
npm install
npm run start
```

## Accessing messages manually
This allows you to view the structure of your Signal database and browse the contents of its tables. Some SQL knowledge is useful to make sense of what you're looking at.

Source: https://www.reddit.com/r/signal/comments/irbxii/comment/hgq21yf/?utm_source=reddit&utm_medium=web2x&context=3

1. Download DB Browser for SQLite and choose SQLCipher during installation: https://sqlitebrowser.org/dl/
2. Open the `db.sqlite` file at `C:\Users\<username>\AppData\Roaming\Signal\sql` with SQLCipher
3. When prompted by SQLCipher, select 'raw key' from the dropdown instead of 'passphrase'
4. Type `0x` in the text prompt and paste the value of the `key` field from `C:\Users\<username>\AppData\Roaming\Signal\config.json`
