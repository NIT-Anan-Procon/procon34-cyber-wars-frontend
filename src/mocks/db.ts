import { factory, primaryKey } from '@mswjs/data';

const DBModels= {
  user: {
    user_id: primaryKey(Number),
    name: String,
    password: String,
  },
  room: {
    room_id: primaryKey(Number),
    invite_id: Number,
    challenge_id: Number,
    started_at: Date,
    active: Boolean
  },
  vulnerabilities: {
    vulnerability_id: primaryKey(Number),
    choice: String,
    hint: String,
    flag: String,
    difficult: Boolean,
    challenge_id: Number
  },
  scores: {
    score_type: primaryKey(Number),
    difficult: Boolean,
    score: Number
  }
}

export const db= factory(DBModels);

export type ModelType= keyof typeof db;