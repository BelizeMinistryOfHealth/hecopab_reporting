CREATE TABLE monthly_health_educator_report (
    id TEXT PRIMARY KEY,
    district TEXT NOT NULL,
    facility TEXT NOT NULL,
    month INT NOT NULL,
    year INT NOT NULL,
    health_educator TEXT NOT NULL,
    health_education JSONB NOT NULL,
    created_at TIMESTAMP NOT NULL,
    created_by TEXT NOT NULL,
    updated_at TIMESTAMP,
    updated_by TEXT
);
