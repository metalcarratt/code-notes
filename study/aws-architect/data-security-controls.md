# Determining appropriate data security controls

Let's get started with a third task statement, determine appropriate data security controls. For this task statement, and when considering security at every level, the protection of data is one of the most important areas of focus. We mentioned this briefly in the last lesson. However, whether the data is in transit or at rest, its security needs to be evaluated. Under AWS accounts and IAM fundamentals, we talked about the principle of lease privilege, and this is important for security at each layer. 

- Do you know how to design and implement [the principle of lease privilege](#) to ensure only those who need access have the only the degree of access that they need? 
- Diving deeper, do you also know how to design and implement securing access to your encryption keys? 
  - As a solutions architect, we need to understand the fundamentals of encryption.
  - There are two types of encryption we need to know for this certification exam. Encryption at rest and encryption in transit. So let's pause again and cover briefly some fundamentals needed for this exam. In AWS, we need to make sure our data is encrypted at rest and also in transit.
    - Encryption at rest is designed to protect against unauthorized access and theft. Encryption at rest is usually used when only one party is involved.
    - Encryption in transit is designed to protect data as it's being transferred between two places and two or more parties are involved.
  - Ensure you understand that using encryption adds a tunnel around that data so no one from the outside can read the data. And to understand encryption, it's important to understand some terms. Ensure you know the following terms and concepts.
    - **Plaintext** is not always text data, but it is always unencrypted. It could be docs, images, applications, and so on.
    - An **algorithm** is code that takes the plaintext and the encryption key, and generates your encrypted data. When a algorithm is being used, it needs the plaintext and also a key.
    - A **key** is just a password and is used with the algorithms and produces ciphertext, and there are different types of keys in different types of encryption.
    - **Ciphertext** is your encrypted data.
  - Now taking a step back, there are also two types of encryption and keys that we need to know, symmetric and asymmetric. Here are a few questions to consider.
    - What methods are available to secure your data at rest? For example, why would you use AWS KMS instead of AWS Cloud HSM for managing your data encryption keys or how can you use those two services together?
    - How do you manage encryption keys across regions?
    - What types of keys are there, and what are the differences in their capabilities?
    - How often can you rotate each type of key?
    - Also, understand how to implement access policies for encryption keys.
    - For this exam, you'll need to understand the main differences and why you might choose one service over another.
  - Diving deeper, you should also know how to use AWS Certificate Manager to encrypt data in transit and how certificates are renewed.
  - You should also understand Amazon S3 encryption. S3 provides encryption at rest and in transit. With S3, you have two methods that support encryption, client side encryption and server side encryption.
    - With client side encryption, the objects being uploaded to S3 are encrypted before the data leaves the source to S3, so it happens on the client side.
    - With server side encryption, the data uses the default encryption in transit with https. When that data arrives at S3, it is encrypted by S3, S3 manages this encryption.
    - With client side encryption, you control all, with server side encryption, we have a few choices you need to know for this certification exam, so ensure you understand each.
      - Server side encryption with customer provided keys,
      - server side encryption with Amazon S3 managed keys,
      - server side encryption with customer master keys stored in AWS KMS.
- Let's change the topic slightly and talk about compliance and compliance requirements. For this exam, you also need to know which AWS technologies can help to meet and satisfy compliance requirements. We mentioned earlier that security and compliance is a shared responsibility between AWS and the customer.
  - Understand AWS artifact and how to use the self-service central repository for the AWS security and compliance reports and online agreements.
- Let's move on and talk about data retention, classification, and data recovery.
  - There are best practices for securing sensitive data in AWS data stores.
  - Ensure you have a good understanding of general data security patterns and a clear mapping of these patterns to cloud security controls.
  - AWS provides the AWS cloud adoption framework with a specific security perspective to help.
  - Let's dive deeper. First, there are five capabilities,
    - IAM,
    - detective controls,
    - infrastructure security,
    - data protection,
    - and incident response.
  - But basically we need to ensure we are thinking about the data we are protecting, how it is stored, and who has access to it.
  - Second, remember that not all data is created equal. We must ensure our data is classified properly to enforce the security of that data.
  - Third, add security controls or defense in depth. Most important here is layering multiple security controls to provide redundancy along with two categories, preventative and detective. Understand what data protection looks like for your architecture and your requirements.
  - Here are questions to consider.
    - How do you design data protection when using a VPN over the internet, or over a private connection through AWS Direct Connect or connections between VPCs or for the transfer of your data between services such as Amazon S3 and your VPC?
    - How do you protect the data in transit when reaching in users over the public internet?
    - Also, how do the various data management and storage services handle data protection?
      - For example, how will data management and storage differ when looking at S3 versus Amazon EBS?
      - And does the use of those protections change the performance of the services?
    - Let's consider a scenario where the data is being generated on an instance that is using an EBS volume, that data needs to be protected while maintaining durability. Would you want to store the data on an encrypted EBS volume or transfer the data to an encrypted S3 bucket? The least effort would be to use the encrypted EBS volume.
    - Another question to consider, will the use of encryption affect performance, and if so, how?
      - Ensure you know which services have no impact and which services might have a slight impact on the performance, for example, data retrieving speed with AWS RDS and AWS KMS, or when reading data from S3.
    - Also know how to handle the root keys and how that method differs from your data keys.
- Dive deeper into AWS KMS and S3.
  - Are there managed services that can help you secure, evaluate, and audit the security of your data? Definitely dive into AWS KMS.
   - Understanding your data security options will require understanding how the services operate, their security options, and how the services interact.
- The last thing I wanna bring to your attention is protecting based on access patterns. Certain services such as S3 give you the ability to manage security for entire buckets and to add control based on specific paths or objects.
  - What capabilities exist for automatically managing the data lifecycle?
  - For example, when would you use S3 lifecycle configurations instead of S3 intelligent tiering?
  - You should know which services provide this level of granularity, read and build policies based on different access patterns and needs, and understand how those policies are evaluated by the service backend.
  - As I said earlier, data security will be extremely important when approaching this exam. The best solution will often be the most secure solution. When adding security at every layer, data protection will be crucial to the design and the implementation of your solutions on both the exam and in the real world. Prioritize security at every layer. Study with security in mind and evaluate how protection can be added both in original designs and reinforcing existing deployments.
- Let's wrap up this lesson and go back to fundamentals and talk about cloud storage.
  - What is cloud storage? How does it work?
  - What are the benefits, requirements, and types?
  - Well, cloud storage is a cloud computing model that stores data through a cloud computing provider who manages and operates data storage as a service.
  - The benefits are no hardware to purchase, no storage to provision, and no capital spending.
  - Time to deployment is faster and the storage lifecycle management policies add automation, savings, and can lock data in support of compliance requirements.
  - Storage requirements along with the additional compliance requirements ensure your data is safe, secure, and available when needed.
  - At the basics for requirements, we need to ensure we plan and design for our durability, availability, security, regulatory and governance requirements, and functional requirements.
  - We also need to ensure we know which type of data we are storing, object, file, or block.
  - Then we have five ways to use cloud storage,
    - backup and recovery,
    - software test and development,
    - data migration,
    - compliance,
    - and big data and data lakes.
-  Disaster recovery is a big part of this exam and must be included as part of your design for a resilient architecture.
  - What options exist for different storage to protect data in the event of a disaster?
  - Disaster recovery strategies available to you within AWS can be categorized into four approaches, ranging from the low cost and low complexity of making backups to more complex strategies using multiple active Regions.
  - Active passive strategies use an active site such as an AWS Region to host the workload and serve traffic. The passive site such as a different AWS Region is used for recovery. The passive site does not actively serve traffic until a failover event is invoked.
  - For a disaster event based on disruption or loss of one physical data center for a well-architected highly available workload, you may only require a backup and restore approach to disaster recovery.
  - If your definition of a disaster goes beyond the disruption or loss of a physical data center to that of a region or if you are subject to regulatory requirements that require it, then you should consider pilot light, warm standby, or multi-site active-active.
  - Understand the AWS services that use a backup strategy that runs periodically or is continuous.
  - How often you run your backup will determine your achievable recovery point.
  - The backup should also offer a way to restore it to the point in time in which it was taken.
  - Here are a few services to dive deeper into,
    - EBS snapshot,
    - DynamoDB backup,
    - RDS snapshot,
    - Aurora snapshot,
    - EFS backup when using AWS Backup,
    - Amazon Redshift snapshot,
    - Neptune snapshot,
    - DocumentDB,
    - and for Amazon S3, you can use Amazon S3 Cross-Region Replication to asynchronously copy objects to an S3 bucket in the disaster recovery Region continuously while providing versioning for the stored object so that you can choose your restoration point.
  - AWS backup provides a centralized location to configure, schedule, and monitor.
    - Know the AWS backup capabilities for the following services and resources.
      - EBS volumes,
      - EC2 instances,
      - RDS and Aurora databases,
      - DynamoDB tables,
      - EFS file systems,
      - Storage Gateway volumes,
      - and Amazon FSx for Windows and Lustre.
    - AWS Backup also supports copying backups across Regions such as to a disaster recovery Region.
    - Here's a question. What service can we use for hybrid environments?
    - Well, what about AWS Storage Gateway?


---

# The principle of least privilege
## 🔐 Core Design Principles
#### 1. Start with Deny-All
- IAM policies should begin with no access, then explicitly allow only what’s needed.
- Avoid wildcard actions like `"Action": "*"` or `"Resource": "*"` unless absolutely necessary.

#### 2. Use Scoped IAM Roles and Policies
- Assign fine-grained IAM roles to EC2, Lambda, ECS, etc.
- Scope permissions to specific resources, regions, and actions.
  - Example: Allow `s3:GetObject` only on `arn:aws:s3:::my-bucket/private/*`

### 3. Use Conditions for Context-Aware Access
- Leverage `Condition` blocks in IAM policies:
  - Time-based access (`aws:CurrentTime`)
  - IP restrictions (`aws:SourceIp`)
  - MFA enforcement (`aws:MultiFactorAuthPresent`)
  - Tag-based access control (`aws:ResourceTag`)

#### 4. Segment Access by Role or Group
- Use IAM Identity Center or Cognito groups to assign roles based on job function.
- Example: Developers get read-only access to logs, but not to production databases.

#### 5. Limit Duration with Temporary Credentials
- Use STS (Security Token Service) or Cognito Identity Pools to issue short-lived credentials.
- This reduces the risk of credential leakage or misuse.

#### 6. Audit and Rotate
- Use Access Analyzer, CloudTrail, and IAM Access Advisor to:
  - Identify unused permissions
  - Detect overly broad access
  - Rotate credentials and secrets regularly (via Secrets Manager)

## 🧠 Example: Least Privilege for a Lambda Function
Let’s say a Lambda function needs to:
- Read from one S3 bucket
- Write logs to CloudWatch

You’d attach an IAM role like:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::my-bucket/input/*"]
    },
    {
      "Effect": "Allow",
      "Action": ["logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutLogEvents"],
      "Resource": "*"
    }
  ]
}
```

No access to other buckets, no write access to S3, and no permissions beyond logging.

## ✅ Summary Checklist

| Practice | Tool/Service |
|---|---|
| Scoped permissions | IAM policies |
| Temporary access | STS, Cognito |
| Context-aware rules | IAM Conditions |
| Role-based access | IAM Identity Center, Cognito groups |
| Audit & cleanup | Access Analyzer, CloudTrail |
| Secret rotation | Secrets Manager |
