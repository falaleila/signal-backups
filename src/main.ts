import * as fs from 'fs';
import * as sqlite3 from 'better-sqlite3-multiple-ciphers';

interface DbConversation {
  id: string,
  json: string,
  active_at: number,
  type: string,
  members: any | null,
  name: string | null,
  profileName: string | null,
  profileFamilyName: string | null
  profileFullName: string,
  e164: string,
  serviceId: string,
  groupId: string | null,
  profileLastFetchedAt: number
}

// FIXME
const config = JSON.parse(fs.readFileSync('./instance/config.json').toString());

const db = sqlite3('./instance/db.sqlite');

db.pragma(`cipher='sqlcipher'`);
db.pragma(`legacy=4`);
db.pragma(`key="x'${config['key']}'"`);

const stmnt = db.prepare('SELECT * FROM conversations');
const iter = stmnt.iterate();
let result = iter.next();
while (!result.done) {
  const conversation = result.value as DbConversation;
  console.log(`${conversation.id}: ${conversation.name}`);
  result = iter.next();
}
