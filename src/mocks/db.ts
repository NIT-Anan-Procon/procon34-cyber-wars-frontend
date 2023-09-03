import { factory, primaryKey } from '@mswjs/data';

const DBModels= {
  user: {
    userId: primaryKey(Number),
    name: String,
    password: String,
    loggedIn: Boolean,
  },
  room: {
    roomId: primaryKey(Number),
    inviteId: Number,
    challenge_id: Number,
    started_at: Date,
    active: Boolean
  },
  allocations: {
    roomId: primaryKey(Number),
    userId: Number,
    host  : Boolean,
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