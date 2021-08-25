package main

import (
	"fmt"
	"github.com/aws/aws-lambda-go/lambda"

  "github.com/aws/aws-sdk-go/aws/session"
  "github.com/aws/aws-sdk-go/aws/aws"
  "github.com/aws/aws-sdk-go/aws/s3"
)

func main() {
	lambda.Start(Handler)
}

func Handler(event InputEvent) (string, error) {
	fmt.Println(event.FirstName)
	fmt.Println(event.LastName)

	return "It Worked", nil
}

type InputEvent struct {
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
}
