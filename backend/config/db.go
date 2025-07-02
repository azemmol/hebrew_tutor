package config

import (
    "log"
    "os"

    "github.com/jmoiron/sqlx"
    _ "github.com/mattn/go-sqlite3"
)
// holds open connection to db
var DB *sqlx.DB

//initializes db
func InitDB(path string) {
    var err error
    DB, err = sqlx.Open("sqlite3", path)
    if err != nil {
        log.Fatalln("Failed to connect to DB:", err)
    }
	//reads schema
    schema, err := os.ReadFile("backend/schema/schema.sql")
    if err != nil {
        log.Fatalln("Failed to read schema:", err)
    }

    DB.MustExec(string(schema))
}
