# signal-backups docs
## Research questions
### What constitutes a 'large group'?
Sociological articles are generally hesitant to put a specific number on when a 'small group' turns into a 'large group', but my intuition is that a 'large group' can't sit together at a dinner table. For the purposes of this project, a 'large Signal group' is composed of more than 6 members.

#### References
- "Small Groups," _Encyclopedia of Sociology_, 2nd Ed. (2000), Vol. 4, 2610-2622.
- ["Group Size and Structure," _Introduction to Sociology_, 3rd Ed.](https://openstax.org/books/introduction-sociology-3e/pages/6-2-group-size-and-structure)
- ["Groups and Organizations," _Introduction to Sociology: 1st Canadian Edition_, 1st Ed.](https://opentextbc.ca/introductiontosociology/chapter/chapter6-groups-and-organization/)

### How are Signal databases organized?
All messages for an account are contained in a single `messages` table in the order in which they are received. However, the participants of the conversation a message belongs to are stored in other tables, so additional queries are needed to contextualize these messages into conversations.

The `conversations` table holds all of the 'message threads' for a Signal user, whether they be direct one-on-one conversations or 'groups' of 3 or more members. The `members` column stores an ID to look up the members of a group and will always be `NULL` for one-on-one conversations. Group conversations that contain 3 or more members will always have a `name`.
