CREATE TABLE monthly_chw_report (
    id UUID PRIMARY KEY,
    district VARCHAR(15) NOT NULL,
    month INT NOT NULL,
    year INT NOT NULL,
    community_health_worker TEXT,
    rural_nurse TEXT,
    district_health_educator TEXT,
    patients_seen JSONB NOT NULL,
    deaths JSONB NOT NULL,
    births JSONB NOT NULL,
    complaints JSONB NOT NULL,
    duties_preformed JSONB NOT NULL,
    created_by TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_by TEXT,
    updated_at TIMESTAMP
);
