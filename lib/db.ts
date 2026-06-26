import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "recruitos.db");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

let _db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (_db) return _db;
  _db = new Database(DB_PATH);
  _db.pragma("journal_mode = WAL");
  initSchema(_db);
  return _db;
}

function initSchema(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS athlete_submissions (
      id TEXT PRIMARY KEY,
      created_at TEXT NOT NULL,
      -- Athlete info
      first_name TEXT,
      last_name TEXT,
      athlete_email TEXT,
      athlete_phone TEXT,
      -- Parent info
      parent_name TEXT,
      parent_email TEXT,
      parent_phone TEXT,
      -- Academic
      high_school TEXT,
      city TEXT,
      state TEXT,
      grad_year TEXT,
      gpa TEXT,
      test_score TEXT,
      intended_major TEXT,
      -- Sport/Football
      sport TEXT,
      position TEXT,
      height TEXT,
      weight TEXT,
      -- Film / Social
      film_link TEXT,
      twitter TEXT,
      -- Stats / Awards
      stats TEXT,
      awards TEXT,
      -- Recruiting goals
      college_level TEXT,
      preferred_location TEXT,
      recruiting_goals TEXT,
      notes TEXT,
      -- Meta
      raw_json TEXT NOT NULL
    )
  `);
}

export interface AthleteSubmission {
  id: string;
  created_at: string;
  first_name: string | null;
  last_name: string | null;
  athlete_email: string | null;
  athlete_phone: string | null;
  parent_name: string | null;
  parent_email: string | null;
  parent_phone: string | null;
  high_school: string | null;
  city: string | null;
  state: string | null;
  grad_year: string | null;
  gpa: string | null;
  test_score: string | null;
  intended_major: string | null;
  sport: string | null;
  position: string | null;
  height: string | null;
  weight: string | null;
  film_link: string | null;
  twitter: string | null;
  stats: string | null;
  awards: string | null;
  college_level: string | null;
  preferred_location: string | null;
  recruiting_goals: string | null;
  notes: string | null;
  raw_json: string;
}

export function insertSubmission(data: Omit<AthleteSubmission, "raw_json"> & { raw_json?: string }) {
  const db = getDb();
  const raw_json = data.raw_json ?? JSON.stringify(data);
  const stmt = db.prepare(`
    INSERT INTO athlete_submissions (
      id, created_at, first_name, last_name, athlete_email, athlete_phone,
      parent_name, parent_email, parent_phone,
      high_school, city, state, grad_year, gpa, test_score, intended_major,
      sport, position, height, weight, film_link, twitter,
      stats, awards, college_level, preferred_location, recruiting_goals, notes, raw_json
    ) VALUES (
      @id, @created_at, @first_name, @last_name, @athlete_email, @athlete_phone,
      @parent_name, @parent_email, @parent_phone,
      @high_school, @city, @state, @grad_year, @gpa, @test_score, @intended_major,
      @sport, @position, @height, @weight, @film_link, @twitter,
      @stats, @awards, @college_level, @preferred_location, @recruiting_goals, @notes, @raw_json
    )
  `);
  stmt.run({ ...data, raw_json });
}

export function getSubmission(id: string): AthleteSubmission | undefined {
  const db = getDb();
  return db.prepare("SELECT * FROM athlete_submissions WHERE id = ?").get(id) as AthleteSubmission | undefined;
}

export function getAllSubmissions(): AthleteSubmission[] {
  const db = getDb();
  return db.prepare("SELECT * FROM athlete_submissions ORDER BY created_at DESC").all() as AthleteSubmission[];
}
