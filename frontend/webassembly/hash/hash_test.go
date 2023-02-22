package main

import (
	"os"
	"testing"
)

func TestHash(t *testing.T) {
	hashOfString := Sha256Data([]byte("This is my test data"))
	if hashOfString != "78c04f552304258d3cfbdcfce9d67d096241a40d1b9918123d0c6bbb0b87661a" {
		t.Errorf("Hash mismatch, got %s", hashOfString)
	}

	fileData, err := os.ReadFile("hashtestfile.png")
	if err != nil {
		t.Errorf("Error reading file: %v", err)
	}

	hashOfFile := Sha256Data(fileData)
	if hashOfFile != "5b84c3967110f3c425f17644a7033d3bc959cb2220c5caf362000e83608b9f88" {
		t.Errorf("Hash mismatch, got %s", hashOfFile)
	}
}
