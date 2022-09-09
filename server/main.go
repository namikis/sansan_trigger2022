package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
    engine := gin.Default()
    engine.GET("/", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "ping": "pong",
        })
    })
    engine.Run(":8080")
}
