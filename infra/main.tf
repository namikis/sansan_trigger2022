terraform {
  required_version = ">= 0.12"
  required_providers {
    aws = ">= 2.57.0"
  }
  backend "s3" {
    bucket  = "teamd-tfstate"
    key     = "terraform.tfstate"
    region  = "ap-northeast-1"
    encrypt = true
  }
}
