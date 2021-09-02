package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

// LoginInfo Struct (Model)
type LoginInfo struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}

var responseTokens []string

func login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Add("Access-Control-Allow-Origin", "*")
	json.NewEncoder(w).Encode(responseTokens)
}

func main() {
	// Init Router
	r := mux.NewRouter()

	// Mock Data - TODO implement DB
	responseTokens = append(responseTokens, "mock-token")

	// Route Handlers / Endpoints
	r.HandleFunc("/api/auth/login", login).Methods("POST")
	log.Fatal(http.ListenAndServe(":8000", r))
}
