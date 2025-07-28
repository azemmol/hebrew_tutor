package config

// import (
//     "log"

//     "github.com/jmoiron/sqlx"
//     _ "github.com/mattn/go-sqlite3"
// )

// var DB *sqlx.DB

// func InitDB(path string, schema string) {
//     var err error
//     DB, err = sqlx.Open("sqlite3", path)
//     if err != nil {
//         log.Fatalln("Failed to connect to DB:", err)
//     }

//     DB.MustExec(schema)
// }

import (
	"fmt"
	"log"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

var DB *sqlx.DB

func InitDB() {
	pw := os.Getenv("DB_PW") // Load DB password from env variable
	if pw == "" {
		log.Fatal("DB_PW environment variable not set")
	}

	dsn := fmt.Sprintf("postgres://postgres:%s@db.xunjtjuxfgljithtmjpi.supabase.co:5432/postgres", pw)

	var err error
	DB, err = sqlx.Connect("postgres", dsn)
	if err != nil {
		log.Fatalf("Failed to connect to Supabase DB: %v", err)
	}
}
