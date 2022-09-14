
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "teamd-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["ap-northeast-1a", "ap-northeast-1c", "ap-northeast-1d"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true

  tags = {
    Terraform   = "true"
    Environment = "dev"
  }
}

module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "teamd-cluster"
  cluster_version = "1.21"
  subnet_ids      = module.vpc.public_subnets
  vpc_id          = module.vpc.vpc_id
  enable_irsa     = true

  eks_managed_node_groups = {
    teamd_node = {
      desired_size   = 3
      instance_types = ["m5.large"]
    }
  }
}
