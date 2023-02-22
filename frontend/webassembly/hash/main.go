//go:build js && wasm
package main

import (
	"fmt"
	"syscall/js"
)

func main() {
	js.Global().Set("empSha256", sha256DataWrapper())
	fmt.Println("Go Web Assembly! You can find empSha256 on the global object now.")
	<-make(chan bool)
}

func sha256DataWrapper() js.Func {
	// expects args[0] to be a Uint8Array
	// returns a map with either an "error" key or a "value" key
	return js.FuncOf(func(this js.Value, args []js.Value) (ret interface{}) {
		// To avoid the program crashing when an error occurs, we recover from the panic
		defer func() {
			if r := recover(); r != nil {
				ret = map[string]interface{}{
					"error": fmt.Sprintf("%v", r),
				}
			}
		}()

		if len(args) != 1 {
			return map[string]interface{}{
				"error": "expected 1 argument",
			}
		}

		dst := make([]byte, args[0].Get("length").Int())
		js.CopyBytesToGo(dst, args[0])
		hash := Sha256Data(dst)
		return map[string]interface{}{
			"value": hash,
		}
	})
}

