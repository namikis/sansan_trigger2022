package helper

import "os"

func GetEnvOrDefault(envName string, defaultEnv string) string {
	if env := os.Getenv(envName); env != "" {
		return env
	}
	return defaultEnv
}