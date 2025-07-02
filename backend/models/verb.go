package models
type Verb struct {
    ID             int    `db:"id"`
    Hebrew         string `db:"hebrew"`
    English        string `db:"english"`
}