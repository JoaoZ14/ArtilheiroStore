CREATE TABLE IF NOT EXISTS feedback_screenshots (
  id            SERIAL PRIMARY KEY,
  image_url     TEXT NOT NULL,
  caption       TEXT,
  display_order INTEGER DEFAULT 0,
  active        BOOLEAN DEFAULT true,
  created_at    TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_feedbacks_active ON feedback_screenshots(active);
CREATE INDEX IF NOT EXISTS idx_feedbacks_order  ON feedback_screenshots(display_order);
