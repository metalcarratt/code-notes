Welcome back, and congratulations on finishing the first Domain for this certification. For your studies and preparation, dive deeper into protecting your resources, applications, and data. One of the security best practices is to follow the principle of least privilege where we only grant the permissions needed and no more. What services can we use to follow the principle of least privilege when working in a multi account environment? Would you use AWS Control Tower AWS Service Catalog, or AWS Organizations? Be sure you have a good understanding of IAM. For example, when would you use an AWS IAM role and when would you use an IAM user? Know the differences between an identity policy a resource policy, a permissions policy, and a service control policy. How are policies evaluated when there are overlapping allow and deny rules? Know different ways to federate into AWS. Be sure to know the AWS Single Sign-On service and different use cases for AWS Directory Service. Understand what monitoring services exist in addition to Amazon CloudTrail, Amazon CloudWatch, and VPC Flow Logs. Understand how to set up your own VPCs with the appropriate security controls. Be sure you know the use cases and capabilities of AWS Shield, AWS WAF, AWS Secrets Manager, and AWS Systems Manager Parameter Store. Make sure you know how you can protect your data in transit and at rest in AWS. In what cases would you need to choose AWS KMS or AWS CloudHSM? Ensure you have a solid understanding of the different AWS security services capabilities appropriate use cases and when another service might be a better option. Being able to choose between two different services based on the stem is gonna help you pass the certification exam. Let's get started with Domain 2. Refer to the exam guide and scan here for a link to download and follow along and I'll see you in the next video.

These resources have additional information on the topics covered in this domain:

- [Managing Your AWS Account](https://docs.aws.amazon.com/accounts/latest/reference/managing-accounts.html)
- [What is IAM?](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
- [What is Amazon VPC?](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
- [Security in Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/security.html)
- [Security, Identity, and Compliance](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/security-services.html)
- [Data Encryption](https://docs.aws.amazon.com/whitepapers/latest/introduction-aws-security/data-encryption.html)
- [Amazon EBS Snapshots](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html)
- [Point-in-Time Recovery for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html)
- [Backing up and Restoring an Amazon RDS DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_CommonTasks.BackupRestore.html)
- [Creating a DB Cluster Snapshot](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CreateSnapshotCluster.html)
- [Using AWS Backup to Back up and Restore Amazon EFS File Systems](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html)
- [Amazon Redshift Snapshots and Backups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html)
- [Overview of Backing up and Restoring a Neptune DB Cluster](https://docs.aws.amazon.com/neptune/latest/userguide/backup-restore-overview.html)
- [Backing up and Restoring in Amazon DocumentDB](https://docs.aws.amazon.com/documentdb/latest/developerguide/backup_restore.html)
- [Amazon S3 Cross-Region Replication (CRR)](http://aws.amazon.com/s3/features/replication/)
- [AWS Backup](http://aws.amazon.com/backup)
- [Amazon Elastic Block Store (EBS)](http://aws.amazon.com/ebs/)
- [Amazon EC2 instances](http://aws.amazon.com/ec2/)
- [Amazon Relational Database Service (Amazon RDS) databases](http://aws.amazon.com/rds/)
- [Amazon Aurora](http://aws.amazon.com/rds/aurora/)
- [Amazon DynamoDB](http://aws.amazon.com/dynamodb/)
- [Amazon Elastic File System (Amazon EFS)](http://aws.amazon.com/efs/)
- [AWS Storage Gateway](http://aws.amazon.com/storagegateway/)
- [Amazon FSx for Windows File Server and Amazon FSx for Lustre](http://aws.amazon.com/fsx/windows/)

# 🧠 What Is Amazon FSx?

**Amazon FSx** is a family of **fully managed file storage services** that provide high-performance, scalable file systems built on popular file system technologies. It’s designed for workloads that require **shared file access**, **POSIX compliance**, or **Windows compatibility**.

## 🔹 FSx Variants and Use Cases

| FSx Variant | Backing Technology | Ideal For |
|-------------|--------------------|-----------|
| **FSx for Windows File Server** | Windows Server | Windows-based apps, SMB protocol, Active Directory integration |
| **FSx for Lustre** | Lustre (HPC file system) | High-performance computing, ML training, big data |
| **FSx for NetApp ONTAP** | NetApp ONTAP | Enterprise workloads, snapshots, multi-protocol (NFS, SMB, iSCSI) |
| **FSx for OpenZFS** | OpenZFS | Linux-based apps, snapshots, compression, cloning |

## ✅ Key Features

- **Fully managed**: No need to provision or patch file servers.
- **Scalable performance**: Supports thousands of concurrent connections.
- **Integrated with AWS Backup**: Centralized backup and restore.
- **Supports encryption at rest and in transit**.
- **Access via VPC**: Must be mounted from within your network.

## 🧠 Why Use FSx?

- You need **shared file storage** with native file system features.
- You’re migrating **on-premises workloads** that depend on SMB/NFS.
- You want **enterprise-grade features** like snapshots, replication, and multi-protocol access.

## 🗂️ SMB vs. NFS

### ✅ SMB (Server Message Block)
- Native to Windows environments.
- Used for file sharing across Windows clients and servers.
- Supports Active Directory integration, file locking, and Windows ACLs.
- Protocol used by Amazon FSx for Windows File Server.

🧠 *Think: Windows file shares like `\\server\folder`.*

### ✅ NFS (Network File System)
- Native to Linux/Unix environments.
- Used for mounting remote file systems over a network.
- POSIX-compliant, supports hierarchical directories and file permissions.
- Protocol used by Amazon EFS, FSx for Lustre, FSx for OpenZFS, and FSx for NetApp ONTAP.

🧠 *Think: mounting `/mnt/data` from a remote Linux server.*

## 🚀 What Is HPC (High Performance Computing)?

**HPC** refers to solving complex computational problems using parallel processing across many CPUs or GPUs. It's used in:

- Scientific simulations (e.g., climate modeling, genomics)
- Financial risk modeling
- Machine learning training
- Rendering and animation

### ✅ AWS HPC Tools
- FSx for Lustre: High-throughput file system optimized for HPC workloads.
- EC2 HPC instances: With enhanced networking and CPU/GPU acceleration.
- AWS Batch and ParallelCluster: For job orchestration and cluster management.

🧠 *HPC is all about speed, scale, and parallelism—think thousands of cores crunching data simultaneously.*
