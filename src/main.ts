import * as fs from 'fs';
import { Database } from "@journeyapps/sqlcipher";

// FIXME
const config = JSON.parse(fs.readFileSync('./instance/config.json').toString());

const db = new Database('./instance/db.sqlite');

db.serialize(() => {
  db.run("PRAGMA cipher_compatibility = 4");
  db.run(`PRAGMA key = "x'${config['key']}'"`);

  db.each("SELECT * from conversations", (err, row) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!row.members) {
      return;
    }
    console.log(`${row.id}: ${row.name}`);
  });
});

db.close();
