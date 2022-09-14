resource "aws_s3_bucket" "terraform_state" {
  bucket = "teamd-tfstate"
  acl    = "private"
  versioning {
    enabled = true
  }
}

# resource "aws_db_subnet_group" "teamd_subnet_group" {
#   name       = local.db_subnet_group_name
#   subnet_ids = module.vpc.private_subnets
# }

# resource "aws_rds_cluster" "teamd_rds_cluster" {
#   cluster_identifier              = local.aurora_cluster_identifier
#   engine                          = "aurora-mysql"
#   engine_version                  = "5.7.mysql_aurora.2.09.2"
#   master_username                 = local.aurora_master_username
#   master_password                 = local.aurora_master_password
#   port                            = 3306
#   vpc_security_group_ids          = [aws_security_group.aurora.id]
#   db_subnet_group_name            = aws_db_subnet_group.example.name
#   db_cluster_parameter_group_name = aws_rds_cluster_parameter_group.example.name

#   skip_final_snapshot = true
#   apply_immediately   = true
# }
