package config

import (
	"fmt"
	"log"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

var DB *sqlx.DB

func InitDB() {
	// Check for Railway's PostgreSQL URL first
	databaseURL := os.Getenv("DATABASE_URL")
	if databaseURL == "" {
		// Fallback to Supabase connection
		pw := os.Getenv("DB_PW")
		if pw == "" {
			log.Fatal("DATABASE_URL or DB_PW environment variable not set")
		}
		databaseURL = fmt.Sprintf("postgresql://postgres:%s@db.xunjtjuxfgljithtmjpi.supabase.co:5432/postgres?sslmode=require", pw)
	}

	var err error
	DB, err = sqlx.Connect("postgres", databaseURL)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	log.Println("Successfully connected to database")
}
