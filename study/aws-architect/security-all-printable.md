---
# Secure Access
---

# ☁️ Cloud Environment Types
| Cloud Type | Description | Pros | Cons | Example Providers |
|---|---|---|---|---|
| Public Cloud | Services offered over the internet by third-party providers. | Shared infrastructure.	Cost-effective, scalable, easy to deploy | Less control, potential data residency concerns | AWS, Azure, Google Cloud |
| Private Cloud | Dedicated infrastructure for one organization, either on-premises or hosted. | Greater control, customization, compliance | Higher cost, complex setup | VMware, OpenStack |
| Hybrid Cloud | Combines public and private clouds with orchestration between them. | Flexibility, workload optimization | Complex integration and management | Azure Stack, AWS Outposts |
| Multi-Cloud | Uses multiple public clouds from different providers. | Avoids vendor lock-in, best-of-breed services | Increased complexity, fragmented security | AWS + Azure + GCP combo |

## 🔐 Designing Secure Access Across Cloud Models
To ensure secure access across these environments, consider the following strategies:

#### 1. Identity and Access Management (IAM)
- Use centralized IAM tools (e.g., Azure AD, Okta, AWS IAM).
- Implement role-based access control (RBAC) and least privilege principles.
- Enable multi-factor authentication (MFA) for all users.

#### 2. Federated Identity and SSO
- Use identity federation to unify access across clouds.
- Implement Single Sign-On (SSO) for seamless user experience.

#### 3. Network Security
- Use VPNs or dedicated interconnects for private/hybrid cloud access.
- Segment networks with firewalls and microsegmentation.
- Apply Zero Trust principles: verify every access request.

#### 4. Encryption and Data Protection
- Encrypt data at rest and in transit using cloud-native tools.
- Use customer-managed keys where possible.
- Monitor for data exfiltration and unauthorized access.

#### 5. Monitoring and Logging
- Centralize logs across environments using SIEM tools (e.g., Splunk, Azure Sentinel).
- Set up alerts for anomalous access patterns.

#### 6. Compliance and Governance
- Map cloud environments to regulatory requirements (e.g., GDPR, HIPAA).
- Use policy-as-code tools (e.g., Terraform, Open Policy Agent) to enforce governance.

---

# 🧭 What Is an AWS Account?
An AWS account is a container for AWS resources and services. It includes:
- Root user: Created when the account is set up. Has full access to all resources.
- Billing and usage tracking: Each account tracks its own costs and usage.
- Isolation boundary: Resources in one account are isolated from others unless explicitly shared.

You can create multiple AWS accounts to separate environments (e.g., dev, test, prod), teams, or applications. This is often managed through AWS Organizations.

## 🔐 Securing Access to AWS Resources
#### 1. Use IAM (Identity and Access Management)
- Create IAM users for individuals and IAM roles for applications or services.
- Assign least-privilege permissions using IAM policies.
- Avoid using the root user for daily tasks.

#### 2. Enable Multi-Factor Authentication (MFA)
- Require MFA for the root user and all IAM users.
- Adds an extra layer of protection against compromised credentials.

#### 3. Use Temporary Credentials
- Use IAM roles with temporary security tokens (via STS) for workloads and federated users.
- Avoid long-term access keys unless absolutely necessary.

#### 4. Monitor and Audit Access
- Enable AWS CloudTrail to log all account activity.
- Use AWS Config and Access Analyzer to detect risky permissions and changes.

#### 5. Organize with AWS Organizations
- Centralize management of multiple AWS accounts.
- Apply Service Control Policies (SCPs) to restrict actions across accounts.

#### 6. Protect Root User Credentials
- Never share root credentials.
- Use strong passwords and rotate them regularly.

### 🧰 Tools to Help You Stay Secure
- IAM Access Analyzer: Identifies resources shared with external entities.
- AWS Trusted Advisor: Recommends security improvements.
- AWS Security Hub: Aggregates findings from multiple services.

## 🔐 Why the Root User Is a Risk
Full, irrevocable access: The root user can perform any action, including deleting the account, modifying billing, and disabling security features.

No permission boundaries: Unlike IAM users or roles, you can't restrict or scope the root user's permissions.

Single point of failure: If compromised, the entire AWS environment is at risk.

### ✅ Best Practices for Root User Security
#### 1. Enable Multi-Factor Authentication (MFA)
- Use a hardware MFA device or a secure authenticator app.
- This adds a critical layer of protection against password compromise.

#### 2. Avoid Using the Root User
- Use the root account only for tasks that require it (e.g., changing support plans, closing the account).
- Log out immediately after use.

#### 3. Create IAM Users and Roles
- Assign users based on job function (e.g., developer, auditor, admin).
- Use IAM roles for applications and services to avoid hardcoded credentials.

#### 4. Apply the Principle of Least Privilege
- Grant only the permissions needed for each user or role.
- Use managed policies or custom policies with tight scopes.
- Regularly review and prune unused permissions.

#### 5. Use Groups for Easier Management
- Assign IAM users to groups (e.g., DevOps, Finance) and attach policies to groups.
- This simplifies permission updates and audits.

#### 6. Monitor and Audit Access
- Enable AWS CloudTrail to log all account activity.
- Use IAM Access Analyzer to detect risky permissions.
- Set up alerts for unusual login patterns or privilege escalations.

#### 7. Use AWS Organizations for Multi-Account Management
- Create separate accounts for dev, test, prod, and billing.
- Apply Service Control Policies (SCPs) to enforce guardrails across accounts.

#### 8. Rotate Credentials Regularly
- Rotate access keys and passwords.
- Prefer temporary credentials via STS or IAM roles.

### 🧠 Example: Secure Setup for a Small Team
| Role | Access Level | Tools Used |
|---|---|---|
| Root User | Emergency only | MFA, CloudTrail |
| Admin | Full IAM, no billing | IAM user + admin policy |
| Developer | EC2, S3, Lambda | IAM user + scoped policy |
| Auditor | Read-only access | IAM user + read-only policy |

---

# 🧑‍💻 IAM Identity Types in AWS
| Identity Type | Purpose | Typical Use Case | Key Traits |
|---|---|---|---|
| IAM User | Represents a person or application needing long-term credentials | Developers, admins, automation scripts | Has permanent credentials (username/password, access keys) |
| IAM Group | A collection of IAM users with shared permissions | Teams like DevOps, Finance, Support | Simplifies permission management across users |
| IAM Role | A temporary identity assumed by users, services, or external entities | EC2 instance access, cross-account access, federated login | Uses temporary credentials via STS; no password or access keys |


## 🧠 Choosing Between Users, Groups, and Roles
#### Use IAM Users when:
- You need long-term access for a human or script.
- You want to assign credentials directly.

#### Use IAM Groups when:
- You manage multiple users with similar responsibilities.
- You want to apply policies uniformly (e.g., all developers get EC2 access).

#### Use IAM Roles when:
- You need temporary access (e.g., EC2 accessing S3).
- You want to delegate access across accounts or organizations.
- You integrate with identity providers (SSO, federation).

#### Combine Them Like This:
- Create IAM users for individuals.
- Assign users to groups for shared permissions.
- Use roles for temporary or scoped access (e.g., assume a “DevOpsAdmin” role only when needed).

## 🔐 Principle of Least Privilege: Why It Matters
Least privilege means granting only the permissions necessary to perform a task—nothing more.

Benefits:
- Limits blast radius: If a user or service is compromised, the damage is contained.
- Reduces human error: Prevents accidental deletion or exposure of sensitive resources.
- Improves auditability: Easier to track and justify permissions.

How to Apply It:
- Start with AWS managed policies (e.g., ReadOnlyAccess) and refine over time.
- Use IAM Access Analyzer to generate least-privilege policies based on actual usage.
- Add conditions to policies (e.g., IP restrictions, time-of-day access).
- Regularly review and remove unused users, roles, and policies.

## 🛠️ How to Create IAM Users, Groups, and Roles
#### IAM Users
1. Go to IAM Console → “Users” → “Add user”
2. Choose a username and access type (programmatic, console, or both)
3. Assign to a group or attach policies directly
4. Configure tags and review

#### IAM Groups
1. Go to IAM Console → “User groups” → “Create group”
2. Name the group
3. Attach policies (e.g., AmazonEC2ReadOnlyAccess)
4. Add users to the group

#### IAM Roles
1. Go to IAM Console → “Roles” → “Create role”
2. Choose trusted entity (e.g., AWS service, another account, SAML provider)
3. Attach policies
4. Name and create the role

You can also use CloudFormation, Terraform, or AWS CLI for infrastructure-as-code provisioning.

### ⚖️ Strengths and Limitations
| Identity Type | Strengths | Limitations |
|---|---|---|
| IAM User | Direct access, customizable credentials | Long-term credentials can be risky if not rotated |
| IAM Group | Simplifies permission management for teams | No direct access—must be used with users |
| IAM Role | Temporary credentials, cross-account access, service integration | Cannot log in directly; must be assumed |

### 🔄 When to Switch Between IAM Constructs
#### ✅ Use IAM Users when:
- You need long-term access for a human (e.g., developer, admin)
- You want to assign credentials directly

#### ✅ Use IAM Groups when:
- You manage multiple users with similar responsibilities
- You want to apply policies uniformly (e.g., all developers get EC2 access)

#### ✅ Use IAM Roles when:
- You need temporary access (e.g., EC2 accessing S3)
- You want to delegate access across accounts or organizations
- You integrate with identity providers (SSO, federation)

#### 🔄 Switch Scenarios:
- From user to role: When moving from long-term credentials to temporary, secure access (e.g., automation scripts → Lambda roles)
- From direct policy to group: When scaling access control across a team
- From group to role: When users need elevated access temporarily (e.g., assume “AdminRole” only when needed)

### 🔐 Least Privilege in Action (redundant?)
Applying least privilege means:
- Start with no permissions
- Grant only what’s needed for the task
- Use conditions (e.g., IP, time, resource tags)
- Regularly audit and prune unused permissions

This limits your blast radius—if a user or role is compromised, the damage is contained.

# 🔐 Securing AWS Credentials: Best Practices
According to AWS and security experts:
- Avoid long-term credentials: Use IAM roles and temporary credentials via STS.
- Enable MFA: Especially for privileged users and the root account.
- Rotate access keys regularly: Audit and remove unused keys.
- Use IAM Access Analyzer: To detect risky permissions and refine policies.
- Apply least privilege: Grant only the permissions needed, scoped by resource, action, and condition.

### 🧑‍🚀 Methods of Assuming Roles
IAM roles allow entities to assume temporary access to AWS resources. Here are the main methods:

#### 1. AssumeRole (via STS)
- Used for cross-account access or privilege escalation within an account.
- Returns temporary credentials (access key ID, secret key, session token).
- Example: A developer in Account A assumes a role in Account B to access S3.

#### 2. Service-Linked Roles
- Automatically created and managed by AWS services (e.g., Lambda, ECS).
- Allow services to perform actions on your behalf.

#### 3. Instance Profiles
- Attach IAM roles to EC2 instances.
- Applications on the instance use the role’s temporary credentials via the metadata service.

#### 4. AssumeRoleWithWebIdentity
- Used for federated access via OpenID Connect or Amazon Cognito.
- Common in mobile/web apps where users authenticate with Google, Facebook, etc.

### 🌐 AWS STS and Federation
#### What Is AWS STS?
- Security Token Service issues temporary credentials for IAM roles.
- Credentials are valid for 15 minutes to 12 hours.
- Used for cross-account access, federation, and role assumption.

#### Federation Scenarios
- Users authenticate via corporate directory (e.g., Active Directory, Azure AD).
- AWS trusts the identity provider (IdP) via SAML 2.0, OIDC, or custom brokers.
- IAM role defines permissions; trust policy defines who can assume it.

#### Example Flow:
- User logs into corporate portal.
- IdP authenticates and issues a SAML assertion.
- AWS STS uses the assertion to allow the user to assume a role.
- User receives temporary credentials to access AWS resources.

### 🧩 Step-by-Step: Linking Corporate Directory to AWS
To link your corporate directory to AWS and allow federated users to assume roles, you set up identity federation using SAML 2.0 or OIDC. Here's how AWS knows which roles a user can access—even if it’s their first time logging in:

#### 1. Set Up Your Identity Provider (IdP)
- Use a corporate IdP like Azure AD, Okta, Ping Identity, or Active Directory Federation Services (AD FS).
- Configure it to support SAML 2.0 or OIDC.

#### 2. Create IAM Roles for Federated Access
- In AWS, create one or more IAM roles with:
- Trust policy: Specifies which IdP can assume the role.
- Permissions policy: Defines what the role allows (e.g., access to S3, EC2).

#### 3. Establish Trust Between AWS and Your IdP
- In AWS IAM, create a SAML provider or configure OIDC.
- Upload the IdP metadata (XML for SAML or endpoint for OIDC).
- This tells AWS to trust assertions from your IdP.

#### 4. Configure Role Mapping in Your IdP
- In your IdP, define attribute mappings (e.g., group membership, department).
- These attributes are passed in the SAML assertion or OIDC token.
- Example: A user in the “Finance” group gets mapped to the FinanceAccessRole.

#### 5. User Authentication Flow
- User logs into your corporate portal.
- IdP authenticates the user and issues a SAML assertion or OIDC token.
- AWS STS receives the assertion and validates it.
- AWS checks the role’s trust policy and the attributes in the assertion.
- If matched, AWS issues temporary credentials for the role.

### 🔐 How AWS Knows Which Role to Grant
- The SAML assertion or OIDC token contains attributes like:
  - RoleSessionName: The user's display name or email.
  - RoleArn: The ARN of the IAM role to assume.
  - PrincipalArn: The ARN of the SAML provider.
- AWS matches these against the trust policy of the IAM role.
- If valid, AWS STS issues temporary credentials for that role.

#### Example Trust Policy:
```json
{
  "Effect": "Allow",
  "Principal": {
    "Federated": "arn:aws:iam::123456789012:saml-provider/MyCorpIdP"
  },
  "Action": "sts:AssumeRoleWithSAML",
  "Condition": {
    "StringEquals": {
      "SAML:aud": "https://signin.aws.amazon.com/saml"
    }
  }
}
```

## Designing and configuring Active Directory to federate access to AWS IAM roles or users

The core components include:
- **Active Directory (AD)**: Your corporate identity store.
- **AD FS (Active Directory Federation Services)**: Acts as the SAML Identity Provider (IdP).
- **AWS IAM**: Defines roles and trust policies for federated access.
- **AWS STS (Security Token Service)**: Issues temporary credentials when roles are assumed.

### 🛠️ Step-by-Step Configuration
#### 1. Set Up AD FS as a SAML IdP
- Install and configure AD FS on a Windows Server joined to your AD domain.
- Add a Relying Party Trust for AWS:
  - Use AWS’s SAML metadata URL: https://signin.aws.amazon.com/static/saml-metadata.xml
  - Set the Relying Party Identifier to: urn:amazon:webservices

#### 2. Configure Claim Rules in AD FS
- Create claim rules to pass user attributes:
  - Name ID: Use Email or User Principal Name
  - Role: Format as arn:aws:iam::<AccountID>:role/<RoleName>,arn:aws:iam::<AccountID>:saml-provider/<ProviderName>
  - You can map AD groups to specific IAM roles using custom rules.

#### 3. Create IAM Roles in AWS
- Define roles with trust policies that allow SAML federation:

```json
{
  "Effect": "Allow",
  "Principal": {
    "Federated": "arn:aws:iam::<AccountID>:saml-provider/<ProviderName>"
  },
  "Action": "sts:AssumeRoleWithSAML",
  "Condition": {
    "StringEquals": {
      "SAML:aud": "https://signin.aws.amazon.com/saml"
    }
  }
}
```
- Attach appropriate permission policies (e.g., AmazonS3ReadOnlyAccess).

#### 4. Create IAM SAML Provider
- In AWS IAM console:
  - Go to “Identity providers” → “Add provider”
  - Choose SAML, name it (e.g., ADFSProvider)
  - Upload the AD FS metadata XML

#### 5. Test the Federation Flow
- Access AWS via a custom AD FS login page or corporate portal.
- After authentication, AD FS issues a SAML assertion.
- AWS STS validates the assertion and issues temporary credentials.
- User is redirected to the AWS console with assumed role permissions.

## 🚫 Why You Should Never Hardcode AWS Credentials
Hardcoding credentials (access key ID and secret access key) into your application:
- Risks accidental exposure via GitHub or other repositories.
- Makes rotation and revocation difficult.
- Violates AWS security best practices.

### ✅ Secure Alternatives for AWS API Access
#### 1. IAM Roles (Best Practice)
- Attach roles to AWS services (e.g., EC2, Lambda, ECS).
- Use instance profiles for EC2 or execution roles for Lambda.
- Credentials are automatically rotated and scoped to the service.

#### 2. AWS SDK Credential Chain
The SDK automatically looks for credentials in this order:
- Environment variables
- Shared credentials file (~/.aws/credentials)
- IAM role for EC2/Lambda
- AWS SSO or federated identity

This allows flexible, secure access without hardcoding.

#### 3. AWS Secrets Manager or Parameter Store
- Store credentials securely and retrieve them at runtime.
- Use IAM policies to restrict access to secrets.

#### 4. AWS STS (Security Token Service)
- Use AssumeRole to get temporary credentials for cross-account or federated access.
- Ideal for short-lived sessions and dynamic access control.

### 🧠 Summary
| Method | Use Case | Security Level |
|---|---|---|
| IAM Role | EC2, Lambda, ECS | ⭐⭐⭐⭐⭐ |
| SDK Credential Chain | Local dev, CI/CD | ⭐⭐⭐⭐ |
| Secrets Manager | Third-party credentials | ⭐⭐⭐⭐ |
| STS | Cross-account, federation | ⭐⭐⭐⭐⭐ |
| Hardcoded Credentials | Never | ❌ |

---

# 🔐 Deep Dive into IAM Policies
IAM policies define who can do what on which resources. Best practices include:

#### Principle of Least Privilege
- Grant only the permissions needed for the task.
- Use resource-level permissions and conditions (e.g., IP address, time of day).

#### Use Managed Policies First
- Start with AWS-managed policies (e.g., AmazonS3ReadOnlyAccess).
- Transition to custom policies as your needs evolve.

#### Policy Structure
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
```

### Advanced Techniques
- Use Attribute-Based Access Control (ABAC) with tags.
- Combine RBAC (roles) and ABAC for granular control.
- Use IAM Access Analyzer to detect overly permissive policies.

## 📜 Major Parts of an IAM Policy Statement
Each IAM policy is a JSON document composed of statements. Each statement includes:

| Field | Purpose | Required? |
|---|---|---|
| Effect | Either "Allow" or "Deny" | ✅ |
| Action | Specifies the AWS service actions (e.g., s3:GetObject) | ✅ |
| Resource | Defines the ARN(s) the action applies to | ✅ |
| Condition | Optional filters (e.g., IP address, time, tags) | ❌ |
| Principal | Only used in resource-based policies to define who can access | ❌ (not used in identity-based policies) |

#### Example:
```json
{
  "Effect": "Allow",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::my-bucket/*"
}
```

### 🎯 Granularity in Permissions
IAM policies allow fine-grained control through:
- Action-level control: e.g., allow s3:PutObject but deny s3:DeleteObject
- Resource-level control: e.g., allow access to one bucket, deny others
- Condition keys: e.g., allow access only from specific IPs or during business hours
- Tag-based access control (ABAC): e.g., allow access if resource.tag.Team == "Dev"

### 🧠 IAM Decision Logic
AWS evaluates policies using this logic:
1. Default Deny: All requests are denied unless explicitly allowed.
2. Explicit Allow: Grants access if no explicit deny exists.
3. Explicit Deny: Overrides any allow—even across multiple policies.

#### Multiple Policies Attached?
- AWS combines all identity-based policies (user, group, role).
- If any policy explicitly denies an action, it takes precedence.
- If no policy allows an action, it's denied by default.

### 🏗️ Resource-Based Policies
Used to control access from the resource side, not the identity. Common examples:

| Service | Resource Policy Use |
|---|---|
| S3 | Bucket policies to allow cross-account access |
| SNS/SQS | Allow publishing or subscribing from other accounts |
| Lambda | Allow invocation from specific services or accounts |
| KMS | Control who can use encryption keys |

#### Key Differences:
- Include a Principal field to specify who can access.
- Often used for cross-account access or public access.

### ✅ Are Action and Principal Lists?
Action
- Yes, Action can be a list of one or more AWS service actions.
- Example:
```json
"Action": ["s3:GetObject", "s3:PutObject"]
```
- You can also use wildcards:
```json
"Action": "s3:*"
```

Principal
- Yes, Principal can be a list—but only in resource-based policies (like S3 bucket policies, Lambda permissions, etc.).
- Example:
```json
"Principal": {
  "AWS": [
    "arn:aws:iam::111122223333:user/Alice",
    "arn:aws:iam::111122223333:role/DevRole"
  ]
}
```

#### 👥 What Can Be a Principal?
In resource-based policies, a Principal can be:

| Type | Example |
|---|---|
| IAM user | arn:aws:iam::123456789012:user/Alice |
| IAM role | arn:aws:iam::123456789012:role/AdminRole |
| AWS account | 123456789012 or arn:aws:iam::123456789012:root |
| Federated identity | arn:aws:iam::123456789012:saml-provider/MyIdP |
| Service principal | lambda.amazonaws.com, ec2.amazonaws.com |

🔒 IAM groups cannot be principals. Groups are used only to manage permissions for IAM users—they don’t represent identities themselves.

# Traceability
## 🧭 Core AWS Services for Traceability
| Service | Purpose | Key | Capabilities |
|---|---|---|---|
| AWS CloudTrail | Logs all API activity across AWS | Tracks who did what, when, from where |
| AWS Config | Records configuration changes | Detects drift, enforces compliance |
| Amazon CloudWatch | Collects logs, metrics, and events | Enables monitoring, alerting, dashboards |
| AWS CloudWatch Logs Insights | Query and analyze logs | Investigate access patterns and anomalies |
| AWS X-Ray | Traces application requests | Visualizes service interactions and latency |
| AWS Security Hub | Aggregates security findings | Centralized view of threats and compliance |
| Amazon GuardDuty | Threat detection using logs and network flow | Alerts on suspicious activity |
| IAM Access Analyzer | Identifies risky permissions and resource sharing | Helps refine least privilege policies |

### 🔐 Best Practices for Access Traceability
#### 1. Enable CloudTrail Across All Regions
- Use organization-wide trails in AWS Organizations.
- Store logs in a secure S3 bucket with encryption and access controls.

#### 2. Use AWS Config Rules
- Automatically evaluate resource configurations.
- Trigger remediation workflows for non-compliant changes.

#### 3. Centralize Logs with CloudWatch
- Stream logs from Lambda, EC2, API Gateway, and other services.
- Set up metric filters to detect access anomalies.

#### 4. Integrate with SIEM or SOAR Tools
- Forward logs to Splunk, Datadog, or custom systems.
- Automate investigation and response using Lambda or Step Functions.

### 5. Use IAM Access Analyzer
- Detect unintended access to resources.
- Review and refine trust policies and role assumptions.

### 6. Set Up GuardDuty and Security Hub
- Detect brute force attacks, credential exfiltration, and unusual API calls.
- Aggregate findings across accounts and regions.

---
# Secure workloads and services
---

# VPCs
## 🧱 Core Components of a VPC
| Component | Purpose |
|---|---|
| CIDR Block | Defines the IP address range (e.g., 10.0.0.0/16) |
| Subnets | Divide the VPC into public/private zones |
| Route Tables | Control traffic flow between subnets and gateways |
| Internet Gateway (IGW) | Enables internet access for public subnets |
| NAT Gateway | Allows private subnets to access the internet securely |
| Security Groups | Stateful firewalls for EC2 and other resources |
| Network ACLs | Stateless firewalls for subnet-level control |
| VPC Peering / Transit Gateway | Connects multiple VPCs securely |
| Endpoints (S3, DynamoDB) | Private access to AWS services without IGW |

## 🛠️ How to Design and Build a VPC
### Step-by-Step:
1. Plan CIDR Range: Avoid overlap with on-prem or other VPCs.
2. Create VPC: Use console, CLI, or IaC tools like Terraform.
3. Add Subnets:
  - Public: for ALBs, NAT Gateways
  - Private: for databases, internal services
  - Isolated: for sensitive workloads
4. Configure Route Tables:
  - Public subnets route to IGW
  - Private subnets route to NAT Gateway
5. Attach Gateways:
  - IGW for outbound internet
  - NAT Gateway in public subnet for private subnet egress
6. Set Up Security Groups and NACLs:
  - Use SGs for instance-level control
  - Use NACLs for subnet-level control
7. Add VPC Endpoints:
  - For secure, private access to AWS services

## 🔐 VPC Security Best Practices
#### Network Security
- Use private subnets for sensitive resources.
- Restrict inbound/outbound rules in SGs and NACLs.
- Use VPC Flow Logs to monitor traffic.

#### Identity and Access
- Use IAM roles for EC2 and Lambda.
- Apply least privilege to IAM policies.

#### Data Protection
- Encrypt data at rest and in transit.
- Use KMS for key management.

#### Monitoring and Auditing
- Enable CloudTrail and Config for change tracking.
- Use GuardDuty for threat detection.

## 🧱 Default vs Custom VPC: Key Differences
| Feature | Default VPC | Custom VPC |
|---|---|---|
| Created by AWS | Automatically created in each region | Manually created by you |
| Subnets | One public subnet per Availability Zone | You define public/private subnets |
| Internet Gateway | Attached by default | Must be manually attached |
| Route Tables | Includes routes to the internet | You configure routes explicitly |
| Security Groups | Default security group allows all inbound traffic from same group | You define rules from scratch |
| NAT Gateway | Not included | Must be manually created for private subnet egress |
| Ease of Use | Quick setup for testing and simple apps | Full control for production-grade networks |


### 🔐 Initial Security Configuration
#### 🔸 Default VPC
- Security Group: Allows all inbound traffic from instances in the same group and all outbound traffic.
- Network ACL: Stateless, allows all inbound and outbound traffic by default.
- Public Subnets: All subnets are public with internet access via IGW.
- Risk: Easier to misconfigure or expose resources unintentionally.

#### 🔸 Custom VPC
- Security Group: Starts with no inbound rules; outbound is allowed by default.
- Network ACL: You define inbound/outbound rules explicitly.
- Subnet Design: You choose which are public or private.
- Internet/NAT Gateway: Must be manually attached/configured.
- Advantage: Greater control over traffic flow, segmentation, and exposure.

### 🧠 Best Practices
- Use custom VPCs for production: They allow fine-grained control over routing, segmentation, and security.
- Restrict security group rules: Apply least privilege and avoid open ports.
- Use private subnets for sensitive resources: Keep databases and internal services isolated.
- Enable VPC Flow Logs: Monitor traffic and detect anomalies.
- Use IAM roles for EC2 and Lambda: Avoid hardcoded credentials.

## 🛡️ Characteristics of a Resilient Amazon VPC
#### 1. Multi-AZ Deployment
- Subnets are distributed across at least two Availability Zones.
- Critical resources (e.g., EC2, RDS, ALB) are deployed in multiple AZs.
- Ensures failover and redundancy if one AZ goes down.

#### 2. Redundant Routing and Gateways
- Use multiple NAT Gateways in different AZs for private subnet egress.
- Attach a single Internet Gateway (IGW) for public subnets, but route through multiple AZs.

#### 3. Elastic Load Balancing
- Use Application Load Balancers (ALBs) or Network Load Balancers (NLBs) across AZs.
- Automatically distribute traffic and reroute on failure.

#### 4. Auto Scaling Groups
- EC2 instances are launched across AZs.
- Automatically replaces unhealthy instances and scales based on demand.

#### 5. VPC Endpoints
- Use Gateway Endpoints (for S3, DynamoDB) and Interface Endpoints for other services.
- Keeps traffic within AWS network, improving reliability and security.

#### 6. Monitoring and Alerts
- Enable VPC Flow Logs, CloudWatch, and GuardDuty.
- Detect anomalies and trigger automated responses.

### 🧠 Summary
A resilient VPC isn’t a separate type—it’s a design pattern that incorporates:
- Multi-AZ architecture
- Redundant networking
- Scalable compute and storage
- Secure, monitored access

## Amazon VPC is a regional service.
#### Here's why:
- When you create a VPC, you choose a specific AWS Region (e.g., us-east-1, ap-southeast-2).
- All resources within that VPC—like subnets, route tables, and gateways—are tied to that region.
- Subnets are zonal, meaning they exist in a single Availability Zone within the region.
- But the VPC itself spans the entire region and can include subnets in multiple zones.

#### Summary:
- VPC → Regional
- Subnets → Zonal
- IAM, S3 (global namespace) → Global

## 🧱 Multi-Tier VPC Architecture Overview
A typical secure VPC design includes:
- Public Subnet: Load balancers, bastion hosts
- Private Subnet: Application servers
- Isolated Subnet: Databases, internal services

Each tier is protected by layered controls:

| Tier | Access | Security |
|---|---|---|
| Public | Internet-facing | Security groups + IGW |
| Private | Internal only | Security groups + NAT |
| Isolated | No internet | Security groups + no route to IGW |

### 🔐 Security Groups vs Network ACLs
| Feature | Security Groups | Network ACLs (NACLs) |
|---|---|---|
| Scope | Instance-level | Subnet-level |
| Type | Stateful | Stateless |
| Rules | Allow only | Allow and deny |
| Evaluation | Automatically tracks response traffic | Must define both inbound and outbound rules |
| Use Case | Fine-grained control per resource | Broad subnet-level filtering, especially for edge cases |

#### Best Practice:
- Use security groups for primary access control.
- Use NACLs as an additional layer for subnet-level restrictions (e.g., deny known malicious IPs).

### 🧭 Route Tables and NAT Gateways
#### Route Tables
- Control traffic flow between subnets and gateways.
- Each subnet is associated with one route table.
- Public subnets route to Internet Gateway (IGW).
- Private subnets route to NAT Gateway for outbound internet.

#### NAT Gateway
- Allows private subnets to access the internet without being exposed.
- Must reside in a public subnet.
- Use multiple NAT Gateways across AZs for resilience.

### 🛠️ Rule Building and Processing Logic
#### Security Group Rules
- Inbound: Define allowed sources and ports.
- Outbound: Define allowed destinations and ports.
- Automatically allows return traffic (stateful).

#### NACL Rules
- Inbound and outbound must be explicitly defined.
- Rules are evaluated in order by rule number.
- Default NACL allows all traffic; custom NACLs start with deny-all.

#### Pitfalls to Avoid
- Overlapping or conflicting rules between SGs and NACLs.
- Forgetting to allow return traffic in NACLs.
- Misconfigured route tables that block internal communication.
- Single NAT Gateway in one AZ (creates a single point of failure).

### 🧠 Combined Functionality Strategy
- Security Groups: Use for tier-specific access (e.g., app servers can talk to DB, but not vice versa).
- NACLs: Use to block known bad IPs or enforce subnet-wide restrictions.
- Route Tables: Ensure correct routing between tiers and external endpoints.
- NAT Gateways: Secure outbound access from private subnets.

### 🧩 Extra: What Is a Subnet?
A subnet (short for subnetwork) is a segmented portion of your Amazon VPC’s IP address range. It allows you to organize and isolate resources within your VPC.

#### Key Characteristics:
- Each subnet resides in one Availability Zone.
- You can create public subnets (with internet access) or private subnets (no direct internet access).
- Subnets help enforce security boundaries and routing rules.

#### Example:
If your VPC uses 10.0.0.0/16, you might create:
- 10.0.1.0/24 for public resources (e.g., load balancers)
- 10.0.2.0/24 for private resources (e.g., databases)

### CIDR notation and subnetting logic

#### 🧠 What Does 10.0.0.0/16 Mean?
- This is a CIDR block (Classless Inter-Domain Routing).
- `10.0.0.0` is the network address.
- `/16` means the first 16 bits are fixed as the network portion.
- That leaves 16 bits for host addresses, allowing:
  - 65,536 IPs total (from `10.0.0.0` to `10.0.255.255`)
  - Usable IPs: 65,534 (excluding network and broadcast addresses)

#### 🧩 How Are 10.0.1.0/24 and 10.0.2.0/24 Subnets of 10.0.0.0/16?
- `/24` means the first 24 bits are fixed for the network.
- So each `/24` subnet contains 256 IPs (from `10.0.X.0` to `10.0.X.255`).
- `10.0.1.0/24` and `10.0.2.0/24` are contained within the larger `10.0.0.0/16` block because:
  - Their addresses fall within the 10.0.0.0 to 10.0.255.255 range.
  - They simply carve out smaller chunks of that space.

#### Visual Breakdown:
```Code
10.0.0.0/16
├── 10.0.0.0/24
├── 10.0.1.0/24
├── 10.0.2.0/24
├── ...
└── 10.0.255.0/24
```

Each `/24` subnet is like a room in a building (`/16`), and you can assign different roles (e.g., public, private, isolated) to each room.

### 🌐 Extra: What Does NAT Stand For?
NAT stands for Network Address Translation.

In AWS, a NAT Gateway or NAT instance allows resources in a private subnet to:
- Initiate outbound connections to the internet (e.g., download updates)
- Without exposing themselves to inbound internet traffic

#### Why It Matters:
- Keeps private resources secure while still allowing them to reach external services.
- NAT Gateways are managed, scalable, and highly available across AZs.

### Summary of inbound outbound flow

Public subnet inbound (outbound is just reverse):
- IGW (internet accessibility)
- NACL (filtering to allow traffic (protocol, port))
- Route table (route to correct subnet or gateway)
- SG (security grouP) (fine-grained access control)
- EC2

Private subnet outbound (has no inbound):
- EC2
- SG
- Route table
- NACL
- NAT (routing, ip translation, prevents inbound connection unless a response)
- IGW

Public subnet incoming traffic:

<img width="607" height="557" alt="Screenshot 2025-10-28 at 12 25 28 pm" src="https://github.com/user-attachments/assets/dfe3adbe-bff3-4231-993c-3cd5fc011567" />

Public subnet outgoing traffic:

<img width="608" height="581" alt="Screenshot 2025-10-28 at 12 26 22 pm" src="https://github.com/user-attachments/assets/1d213446-2ef8-4b5e-9538-f98d46d3e2da" />

Private subnet outgoing traffic:

<img width="658" height="792" alt="Screenshot 2025-10-28 at 12 29 42 pm" src="https://github.com/user-attachments/assets/9082b9e5-1a9b-4a3b-a3a0-70a68f84d89c" />

## Putting services in public vs private subnets

### 🧭 Public vs Private Subnets: Core Distinction
| Subnet Type | Internet Gateway Route? | Typical Use |
|---|---|---|
| Public | Yes (0.0.0.0/0 → IGW) | Inbound-facing services (e.g., ALB, bastion hosts) |
| Private | No direct IGW route | Internal services (e.g., app servers, databases) |

### 🔐 Why Put Databases in Private Subnets?
#### 1. Defense-in-Depth: Network-Level Isolation
- Even if your security group blocks all public IPs, a public subnet still has a route to the internet.
- A private subnet has no path to the internet, so even misconfigured security groups or leaked credentials can’t expose the DB externally.
- This is about reducing blast radius and enforcing trust boundaries.

#### 2. Enforcing Who Can Call, Not Just What
- Yes—this is key. By placing a DB in a private subnet:
  - Only resources inside the VPC (e.g., app servers, Lambda functions) can reach it.
  - You’re saying: “Only things that live in this trusted zone can even try to talk to me.”
- This is stronger than just saying “only allow port 3306 from IP X”—because it removes the possibility of external IPs reaching the subnet at all.

#### 3. Compliance and Audit Requirements
- Many standards (e.g., PCI DSS, HIPAA) require non-publicly routable infrastructure for sensitive data.
- A private subnet is a clear architectural signal that a resource is not internet-facing.

### 🧠 When Might You Not Need a Private Subnet?
- For public APIs, ALBs, or bastion hosts, you want them to be reachable from the internet.
- For S3 access, you can use VPC endpoints in private subnets to avoid NAT gateways.
- For Lambda functions, you can choose whether they run in a VPC or not—depending on whether they need to reach private resources.

### ✅ Summary: Placement Decision Heuristics
| Service Type | Subnet Placement | Why |
|---|---|---|
| Load Balancer (ALB/NLB) | Public | Needs to accept internet traffic |
| App Servers | Private | Accessed via ALB; no direct internet exposure |
| Databases (RDS, Aurora) | Private | Sensitive data; no public access |
| Bastion Host | Public | Allows controlled SSH into private resources |
| NAT Gateway | Public | Enables private subnets to reach internet |
| S3 Access from Private Subnet | Private + VPC Endpoint | Avoids NAT, keeps traffic internal |


## Topics to round out
### 1. Protocols and Port Behavior
- Understand TCP vs UDP and how protocols affect firewall rules.
- Know common ports (e.g., 22 for SSH, 80/443 for HTTP/HTTPS) and how they’re filtered by SGs/NACLs.

**🔁 TCP vs UDP: Protocol Behavior**
| Protocol | TCP | UDP |
|---|---|---|
| Connection | Connection-oriented (handshake) | Connectionless |
| Reliability | Reliable, ordered delivery | Best-effort, no guarantee |
| Use Cases | Web (HTTP/HTTPS), SSH, FTP | DNS, video streaming, VoIP |
| Firewall Impact | Stateful tracking works well | Harder to track without connection state |

**🔐 Security Implication:**
- Security Groups (stateful): Automatically allow return traffic for TCP.
- NACLs (stateless): Must explicitly allow both inbound and outbound for TCP and UDP.

**🔢 Common Ports and Their Roles**
| Port | Protocol | Purpose |
|---|---|---|
| 22 | TCP | SSH (remote login) |
| 80 | TCP | HTTP (web traffic) |
| 443 | TCP | HTTPS (secure web traffic) |
| 53 | UDP | DNS queries |
| 123 | UDP | NTP (time sync) |

**🔐 Filtering Behavior**
- Security Groups: Apply at the instance level, allow traffic by protocol, port, and source.
- NACLs: Apply at the subnet level, must allow both directions for bidirectional traffic (e.g., TCP handshake).

### 2. Elastic IPs and Public IPs
- Difference between auto-assigned public IPs and Elastic IPs.
- How public IPs relate to IGW routing and EC2 accessibility.

**🌐 Public IPs vs Elastic IPs**
| Type | Auto-assigned Public IP | Elastic IP |
|--|--|--|
| Assigned | Automatically when launching EC2 in a public subnet (if enabled) | Manually allocated and attached by you |
| Persistence | Released when instance stops or is replaced | Stays with your account until you release it |
| Control | AWS manages it | You manage it—can reassign across instances |
| Use Case | Temporary access for dev/test | Stable endpoint for production, DNS, or failover setups |

**🔁 How Public IPs Enable IGW Routing**
- A public IP is what the Internet Gateway (IGW) uses to route traffic between the internet and your EC2.
- Without a public IP, the IGW cannot deliver inbound traffic to your instance—even if the subnet has a route to the IGW.
- Public IPs are mapped to private IPs inside the VPC using 1:1 NAT.

### 3. Route Table Associations
- Each subnet must be explicitly associated with a route table.
- One route table can be shared across subnets, but each subnet has only one active route table.

Details:
- Every subnet must be linked to a route table—this tells AWS how to forward traffic from that subnet.
- You can reuse the same route table across multiple subnets (e.g., all public subnets might share one).
- But: each subnet can only have one active route table at a time—no multi-table merging or fallback.

🔧 Example
- You create a route table with a route to the Internet Gateway (0.0.0.0/0 → igw-xxxx).
- You associate it with two subnets: subnet-a and subnet-b.
- Both subnets now behave as public subnets, assuming their EC2s have public IPs.

🧠 Why It Matters
- Route table association defines routing behavior, not security.
- Changing a subnet’s route table can flip its role (e.g., from public to private).
- This is a key tool for network segmentation and traffic control.

### 4. VPC Peering and Transit Gateways
- How routing works across multiple VPCs.
- What changes in route tables and CIDR planning when peering is involved.

**🔗 VPC Peering**

🧭 Routing Behavior
- VPC Peering creates a direct connection between two VPCs.
- Each VPC must manually update its route table to send traffic to the other:
```Code
Destination: 10.2.0.0/16 → Target: pcx-xxxxxxxx
```
- No transitive routing: VPC A can talk to VPC B, but not to VPC C through B.

📐 CIDR Planning
- Peered VPCs must have non-overlapping CIDR blocks.
- Overlapping CIDRs cause routing conflicts and are not allowed.

**🛣️ Transit Gateway (TGW)**
🧭 Routing Behavior
- TGW acts as a hub for connecting multiple VPCs and on-prem networks.
- Each VPC attaches to the TGW and uses TGW route tables to control traffic flow.
- Supports transitive routing: VPC A → TGW → VPC B is allowed.

📐 CIDR Planning
- Still requires non-overlapping CIDRs across attached VPCs.
- TGW simplifies large-scale routing and centralizes control.

**🧠 Summary**
| Feature | VPC Peering | Transit Gateway |
|---|---|---|
| Routing | Manual, non-transitive | Centralized, transitive |
| Scale | Point-to-point | Hub-and-spoke |
| CIDR | Must not overlap | Must not overlap |
| Use Case | Small, tightly coupled VPCs | Large, multi-VPC architectures |

### 5. Resiliency and AZ Design
- Subnets are AZ-scoped, so for high availability:
  - Spread resources across multiple subnets in different AZs.
  - Use multi-AZ architectures for load balancers, databases, etc.

🧭 Subnets Are AZ-Scoped
- Each subnet lives in a single Availability Zone (AZ).
- That means any EC2, RDS, or other resource in that subnet is tied to that AZ’s infrastructure.

🛡️ High Availability Strategy

To build resilient architectures:
- Spread resources across multiple subnets in different AZs:
  - Example: EC2 instances in subnet-a (us-east-1a) and subnet-b (us-east-1b)
- Use multi-AZ services:
  - Elastic Load Balancers (ELBs) automatically span AZs.
  - RDS Multi-AZ deployments replicate data across AZs for failover.
  - Auto Scaling Groups can launch instances in multiple AZs.

🧠 Why It Matters

- If one AZ goes down, resources in other AZs stay available.
- AZ-level isolation helps protect against hardware failures, power outages, or network disruptions.

### 6. Common Practices
- Public subnet: Load balancer, bastion host (Secure jump box for SSH access to private instances).
- Private subnet: App servers, DBs, internal services.
- NAT Gateway: Placed in public subnet, used by private subnets.

## 🧭 Step-by-Step Setup: On-Prem to Private Subnet via VPN
#### 1. Establish VPN Connectivity
- Use AWS Site-to-Site VPN or Direct Connect to link your on-premises network to AWS.
- Deploy a Virtual Private Gateway (VGW) in your VPC.
- Register a Customer Gateway (CGW) to represent your on-prem device.
- Create the VPN connection between VGW and CGW.

#### 2. Configure Route Tables
- In the private subnet’s route table, add a route for your on-prem CIDR:
```Code
Destination: 192.168.0.0/16 → Target: vgw-xxxxxxxx
```
- This ensures traffic from your on-prem network is routed to the private subnet.

#### 3. Security Group and NACL Configuration
- Security Groups:
  - Attach to your application servers.
  - Allow inbound traffic from your on-prem CIDR and required ports (e.g., TCP 443).
  - Deny all other inbound traffic by default.
- NACLs:
  - Apply to the private subnet.
  - Allow inbound/outbound traffic from/to your on-prem CIDR.
  - Block traffic from public IP ranges if needed.

#### 4. No IGW in Private Subnet
- Do not associate an Internet Gateway (IGW) with the private subnet’s route table.
- This ensures no direct public internet access to your application servers.

### 🛡️ Optional Enhancements for Security and Scalability
#### 🔹 Transit Gateway
- Use Transit Gateway if connecting multiple VPCs or hybrid environments.
- Centralizes routing and supports transitive connectivity.

#### 🔹 PrivateLink
- For exposing services securely to other VPCs or accounts.
- Keeps traffic within AWS’s private network—no public IPs involved.

#### 🔹 VPC Peering
- Use for direct VPC-to-VPC communication (non-transitive).
- Ensure CIDRs don’t overlap and route tables are updated.

### ✅ Summary of Key Protections
| Layer | Protection |
|---|---|
| Subnet | No IGW route; private subnet only |
| Route Table | Routes only to VPN/Transit Gateway |
| Security Group | Allows only on-prem CIDR and required ports |
| NACL | Filters traffic at subnet boundary |
| VPN/Direct Connect | Encrypted, authenticated private link |

---

# Endpoints
## 🔐 What Is a VPC Endpoint?
- A VPC Endpoint is a gateway object inside your VPC that lets you privately connect to AWS services (like S3 or DynamoDB) without traversing the public internet.
- There are two types:
  - **Gateway Endpoints**: For S3 and DynamoDB only; use route tables.
  - **Interface Endpoints**: Powered by AWS PrivateLink; use Elastic Network Interfaces (ENIs) in your subnet.

## 🧭 What Is AWS PrivateLink?
- PrivateLink lets you expose a service (e.g., an internal app or API) to other VPCs or AWS accounts without public exposure.
- You create a VPC Endpoint Service, and consumers connect via Interface Endpoints.
- Traffic stays on AWS’s private backbone—no IGW, NAT, or peering required.

### 🛡️ Why Use PrivateLink Instead of Peering?
| Feature | VPC Peering | PrivateLink |
|---|---|---|
| Connectivity | Full bidirectional | One-way, service-specific |
| Security | Exposes entire VPC | Exposes only the service |
| Scalability | Complex with many VPCs | Scales to 100s of VPCs easily |
| Management | Manual route table updates | Centralized service exposure |
| Internet Exposure | Often needed | Not required |

### 🧠 Example Scenario
Let’s say you have a payment API running in VPC A. You want VPCs B, C, and D (from other teams or accounts) to access it securely:
- With PrivateLink, you:
  - Create a VPC Endpoint Service in VPC A.
  - Allow other VPCs to create Interface Endpoints pointing to it.
  - No IGW, NAT, or peering needed.
  - Traffic flows privately and securely.

### ✅ Summary
- PrivateLink is ideal for exposing services securely across VPCs and accounts.
- It avoids the complexity and risk of peering and public exposure.
- It’s a best practice for multi-account architectures, service meshes, and zero-trust designs.

---

# Private connections
## 🔐 1. AWS Site-to-Site VPN
- Purpose: Connects your on-premises network to AWS over the public internet using IPsec tunnels.
- Capacity:
  - Up to 1.25 Gbps per tunnel, but actual throughput depends on internet conditions.
  - Supports two tunnels per VPN connection for redundancy.
- Security:
  - Uses IPsec encryption (IKEv1 or IKEv2).
  - Supports BGP for dynamic routing and failover.
- Resilience:
  - Redundant tunnels provide automatic failover.
  - Can be combined with Direct Connect for backup.

✅ Best for quick, cost-effective hybrid connectivity with moderate bandwidth needs.

## 👤 2. AWS Client VPN
- Purpose: Provides secure remote access for individual users (e.g., employees working remotely).
- Capacity:
  - Scales to thousands of concurrent users.
  - Throughput depends on instance size and user load.
- Security:
  - Uses TLS encryption (OpenVPN-based).
  - Supports mutual authentication (certificates) or SAML-based federated auth.
- Resilience:
  - Highly available across multiple AZs.
  - Can be deployed with Auto Scaling for elasticity.

✅ Best for secure, scalable remote user access to AWS and on-prem resources.

## ⚡ 3. AWS Direct Connect
- Purpose: Dedicated private network connection between your data center and AWS.
- Capacity:
  - Available in 1 Gbps, 10 Gbps, and 100 Gbps links.
  - Supports Link Aggregation Groups (LAG) for higher throughput.
- Security:
  - Private, non-internet path—no IPsec by default.
  - Can be paired with Site-to-Site VPN for encryption.
- Resilience:
  - Highly reliable with SLAs.
  - Supports redundant connections and failover to VPN.

✅ Best for high-throughput, low-latency, and consistent hybrid workloads.

## 🧠 Summary Table
| Feature | Site-to-Site VPN | Client VPN | Direct Connect |
|---|---|---|---|
| Use Case | On-prem to AWS | Remote user access | Dedicated hybrid link |
| Max Bandwidth | ~1.25 Gbps per tunnel | Varies by scale | Up to 100 Gbps |
| Encryption | IPsec | TLS | Optional (add VPN for IPsec) |
| Setup Time | Minutes | Minutes | Days to weeks |
| Resilience | Dual tunnels | Multi-AZ, scalable | Redundant links, VPN failover |
| Cost | Low | Pay-per-use | High (but predictable) |

## AWS Private Connectivity Decision Tree
```plaintext
START
│
├── Are you connecting from a corporate network or data center?
│     │
│     ├── YES → Do you need high bandwidth and low latency?
│     │     │
│     │     ├── YES → Use **Direct Connect**
│     │     │     └── Add Site-to-Site VPN for encryption if needed
│     │     │
│     │     └── NO → Use **Site-to-Site VPN**
│     │           └── Dual tunnels for resilience
│     │
│     └── NO → Are you connecting individual users remotely?
│           │
│           ├── YES → Use **Client VPN**
│           │     └── Supports federated auth and TLS encryption
│           │
│           └── NO → Re-evaluate: no external connection needed
```
---

# Securing data
## 🔐 1. Securing Networking Tiers
#### ✅ Best Practices
- Subnet segmentation: Use public subnets for internet-facing components (e.g., ALBs), and private subnets for internal services (e.g., app servers, DBs).
- Route table isolation: Ensure private subnets don’t route to IGW; use NAT Gateway for controlled outbound access.
- Security Groups (SGs): Stateful firewalls at the instance level—allow only necessary ports and CIDRs.
- Network ACLs (NACLs): Stateless filters at the subnet level—use for coarse-grained control and deny rules.
- VPC Flow Logs: Enable for visibility into traffic patterns and anomaly detection.

## 🧱 2. Securing Application Use Across Tiers
#### ✅ Best Practices
- IAM roles and policies: Assign least-privilege roles to EC2, Lambda, ECS, etc.
- Application Load Balancer (ALB): Use WAF integration for layer 7 protection.
- TLS everywhere: Encrypt in transit using ACM-managed certificates.
- Secrets Manager / Parameter Store: Secure credentials and config values.
- PrivateLink / VPC Endpoints: Avoid public exposure when accessing AWS services or internal APIs.

## 🔍 3. Data Protection and PII Security
### 🔹 Amazon Macie - Sensitive Data Discovery & Protection
Macie helps secure data at rest, especially in Amazon S3, by:
- Automatically discovering and classifying sensitive data like PII, financial records, credentials, and health data.
- Using machine learning and pattern matching to detect things like names, addresses, SSNs, credit card numbers, and more.
- Generating alerts when sensitive data is found in unexpected places (e.g., public buckets).
- Integrating with EventBridge and Security Hub for automated remediation workflows.

*🧠 Use Macie to enforce data governance, prevent accidental exposure, and meet compliance requirements like GDPR or HIPAA.*

According to AWS’s own blog, the name “Macie” was chosen with two meanings in mind:
- French origin: “Weapon” — symbolizing protection and defense.
- English origin: Describes someone bold, sporty, and sweet — a metaphor for proactive, intelligent security.

### 🔹 Amazon Cognito - Identity & Access Management for Applications
Cognito secures user identity and authentication, especially for web and mobile apps:
- User Pools: Manage sign-up, sign-in, password policies, and multi-factor authentication.
- Identity Pools: Grant temporary AWS credentials to authenticated users for accessing AWS resources.
- Supports federated identity via SAML, OIDC, Google, Facebook, etc.
- Enables fine-grained access control using IAM roles mapped to user attributes or groups.

*🧠 Use Cognito to secure app access, enforce identity federation, and isolate user permissions across services.*

#### 🔍 Cognito vs ForgeRock: Core Differences
| Feature | Amazon Cognito | ForgeRock |
|---|---|---|
| Type | Cloud-native IAM for apps	Enterprise IAM platform |
| Deployment | Fully managed by AWS | Self-hosted, cloud, hybrid |
| Use Case | Web/mobile app auth, federated identity | Workforce IAM, customer IAM, IoT, legacy systems |
| Identity Federation | SAML, OIDC, social (Google, Facebook, etc.) | SAML, OIDC, LDAP, AD, custom connectors |
| User Directory | Cognito User Pools | ForgeRock Identity Store or external LDAP/AD |
| Access to AWS Resources | Via Cognito Identity Pools + IAM roles | Not natively integrated with AWS IAM |
| Customization | Basic UI and workflows | Deep customization, policy orchestration, adaptive auth |
| Security Features | MFA, password policies, token-based auth | Risk-based auth, fine-grained access control, audit trails |

#### 🧠 How Cognito Helps Secure Data
- User Pools: Handle sign-up/sign-in, password policies, and MFA.
- Identity Pools: Broker AWS credentials for authenticated users to access S3, DynamoDB, etc.
- Federation: Supports SSO via SAML/OIDC—great for integrating enterprise identity providers.
- IAM Integration: Maps users to IAM roles for fine-grained access to AWS resources.

#### 🧠 How ForgeRock Helps Secure Data
- Centralized Identity Platform: Manages identities across apps, APIs, devices, and legacy systems.
- Adaptive Authentication: Uses context (device, location, behavior) to adjust access decisions.
- Policy Engine: Fine-grained access control with dynamic rules.
- Audit & Compliance: Strong logging and governance features for regulated environments.

### 🔹 Amazon GuardDuty - Threat Detection & Anomaly Monitoring
- Threat detection service that monitors VPC Flow Logs, DNS logs, and CloudTrail.
- Flags suspicious activity like port scanning, credential exfiltration, or anomalous API calls.

## Cognito details
### 👤 Cognito User Pools – Authentication & User Management
- Purpose: Manage user sign-up, sign-in, and profile data.
- Features:
  - Built-in user directory with customizable attributes.
  - Supports MFA, password policies, and email/SMS verification.
  - Can authenticate users via username/password, social providers (Google, Facebook), or SAML/OIDC identity providers.

*🧠 Think of User Pools as your app’s login system.*

### 🛂 Cognito Identity Pools – Authorization & AWS Access
- Purpose: Grant temporary AWS credentials to authenticated users.
- Features:
  - Maps users (from User Pools or federated providers) to IAM roles.
  - Enables access to AWS services like S3, DynamoDB, etc.
  - Supports unauthenticated guest access if needed.

*🧠 Identity Pools are about what users can do in AWS once they’re authenticated.*

### 🔗 Federation & Single Sign-On (SSO)
- Cognito supports federated identity via:
  - SAML 2.0 (e.g., Active Directory, Okta)
  - OIDC (e.g., Google, Azure AD)
  - Social providers (e.g., Facebook, Apple)
- You can broker SSO by linking external identity providers to Cognito User Pools or directly to Identity Pools.

*🧠 Federation lets users log in with existing credentials from trusted providers.*

### 🧪 Scenario-Based Exam Tips
Here’s how AWS might test this:

| Scenario | Correct Cognito Use |
|---|---|
| You need a login system for a mobile app | User Pool |
| You want users to access S3 after login | User Pool + Identity Pool |
| You want employees to log in using Azure AD | Federated SSO via OIDC or SAML |
| You want to assign different IAM roles based on user group | Identity Pool role mapping |
| You want guest users to upload images to S3 | Identity Pool with unauthenticated access |


# Firewalls and proxy services
## 🔐 Firewalls and Proxy Layers
- **AWS WAF (Web Application Firewall)**: Protects against SQL injection, XSS, and other layer 7 attacks.
  - Deployment targets: Only on Application Load Balancer (ALB), API Gateway, and CloudFront.
  - Use WAF for custom rule sets, rate limiting, and IP filtering.
- **AWS Shield**: Protects against DDoS attacks.
  - Shield Standard: Automatically included with ALB, CloudFront, and Route 53. Protects against common DDoS patterns.
  - Shield Advanced: Adds 24/7 DDoS response team, cost protection, and custom mitigation for complex attacks.

## 🧠 Identity and Access Management
- **AWS IAM Identity Center**: Centralized SSO for workforce users across AWS accounts and apps.
- **Amazon Cognito**: Manages user authentication for apps.
  - User Pools: Handle sign-in, MFA, and federation.
  - Identity Pools: Grant AWS credentials to authenticated users.

## 🛡️ Threat Detection and Data Protection
- **Amazon GuardDuty**: Monitors logs (VPC Flow, DNS, CloudTrail) for anomalies and threats like credential exfiltration or port scanning.
- **Amazon Macie**: Uses ML to discover and classify PII in S3. Alerts on public exposure or sensitive data leaks.

## 🔑 Secrets and Configuration Management
| Feature | Secrets Manager | Parameter Store |
|---|---|---|
| Designed for secrets | ✅ Yes | ⚠️ Not primarily |
| Automatic rotation | ✅ Yes (native support) | ❌ Manual only |
| High-frequency access | ✅ Optimized | ⚠️ Rate-limited |
| Encryption | ✅ KMS | ✅ KMS |
| Use case | DB creds, API keys | Config values, low-volume secrets |

*🧠 Choose Secrets Manager for high-volume, auto-rotated secrets like DB passwords. Use Parameter Store for config values or low-frequency secrets.*

## 🧪 Exam Scenario Tips
| Scenario | Best Service |
|---|---|
| Prevent DDoS on ALB | Shield Standard or Advanced |
| Block SQL injection on API Gateway | AWS WAF |
| Detect PII in S3 | Macie |
| Secure app login with Google | Cognito User Pool + Federation |
| Rotate DB credentials every 30 days | Secrets Manager |
| Centralized SSO for workforce | IAM Identity Center |
| Detect EC2 compromise | GuardDuty |

## GuardDuty specifically
### 🔍 What GuardDuty Actually Monitors
GuardDuty analyzes three primary data sources:
1. VPC Flow Logs – Network traffic in and out of your VPC.
2. DNS Logs – Domain name queries from your resources.
3. CloudTrail Events – API calls across your AWS account.

These logs give visibility into:
- Inbound/outbound traffic patterns
- Unusual DNS lookups (e.g., to known malware domains)
- Suspicious API activity (e.g., disabling logging, creating access keys)

### 🧠 Why EC2 Is a Primary Focus
- EC2 instances are often the first target in an attack—especially if they’re public-facing or misconfigured.
- GuardDuty can detect:
  - Port scanning
  - Outbound traffic to known botnets
  - Credential exfiltration
  - Unusual SSH or RDP behavior
- These behaviors are visible in VPC Flow Logs and DNS queries, which EC2 generates heavily.

### 🧩 What About Other Services?
GuardDuty can also detect threats involving:
- IAM: Unusual role assumptions or key usage.
- S3: Suspicious access patterns (if S3 protection is enabled).
- Lambda: Indirectly, via CloudTrail events.
- EKS: With EKS audit log integration.

But EC2 remains the most visible and vulnerable surface, especially in traditional workloads.

### ✅ Summary
| Service | Visibility via GuardDuty |
|---|---|
| EC2 | Full (network + DNS + API) |
| IAM | API activity only |
| S3 | Optional integration |
| Lambda | API-level only |
| EKS | With audit log integration |


---
# Data Security Controls
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

---

# Encryption
## 🔐 Encryption Fundamentals
#### ✅ Encryption at Rest
- Purpose: Protect data stored on disk from unauthorized access or theft.
- Use Case: One party owns and accesses the data (e.g., S3, RDS, EBS volumes).
- AWS Services: Most support automatic encryption at rest using KMS keys (e.g., S3 SSE-KMS, RDS encryption).

#### ✅ Encryption in Transit
- Purpose: Protect data as it moves between systems or services.
- Use Case: Two or more parties involved (e.g., client-server, API calls).
- AWS Services: Use TLS/SSL for HTTPS, IAM policies for API access, and VPC endpoints for private routing.

## 🔑 Securing Access to Encryption Keys (KMS)
#### 1. Use AWS KMS for Key Management
- Centralized service for creating, storing, and managing encryption keys.
- Supports Customer Managed Keys (CMKs) and AWS Managed Keys.
- Keys are stored securely in FIPS 140-2 validated HSMs.

#### 2. Control Access with IAM and Key Policies
- IAM policies define who can use KMS APIs (e.g., `kms:Encrypt`, `kms:Decrypt`).
- Key policies define who can administer or use the key itself.
- Use least privilege: only allow `kms:Decrypt` to services that need it.

#### 3. Enable Key Rotation
- For CMKs, enable automatic rotation every 365 days.
- This helps reduce risk from long-lived keys.

#### 4. Audit Key Usage
- Use CloudTrail to log all KMS API calls.
- Monitor for unusual patterns (e.g., unexpected decrypts or key deletions).

#### 5. Use Envelope Encryption
- Encrypt data with a data key, then encrypt the data key with a KMS key.
- Reduces direct use of KMS and improves performance.

### 🧠 Example: Securing S3 with KMS
- Enable SSE-KMS on your S3 bucket.
- Use a Customer Managed Key with a key policy like:
  - Allow kms:Decrypt only to specific IAM roles (e.g., Lambda, EC2).
  - Deny access from public or untrusted roles.
- Use bucket policies to enforce encryption:

```json
"Condition": {
  "StringNotEquals": {
    "s3:x-amz-server-side-encryption": "aws:kms"
  }
}
```

### ✅ Summary Checklist
| Task | AWS Feature |
|---|---|
| Encrypt data at rest | KMS + SSE-KMS, RDS encryption |
| Encrypt data in transit | TLS/SSL, HTTPS, VPC endpoints |
| Manage keys securely | KMS CMKs + IAM/Key policies |
| Rotate keys | KMS automatic rotation |
| Audit usage | CloudTrail logs |
| Minimize exposure | Envelope encryption |

## 🔐 Encryption: The Protective Tunnel
Encryption wraps your data in a secure tunnel, making it unreadable to unauthorized parties. Whether the data is at rest (stored) or in transit (moving), encryption ensures that only those with the right key can unlock it.

### 🧠 Key Terms You Must Know
#### 1. Plaintext
- Definition: The original, readable form of data before encryption.
- Examples: Text files, images, documents, passwords, application binaries.
- Key Point: It’s not always “text”—it’s anything unencrypted.

#### 2. Algorithm
- Definition: A mathematical formula or code that transforms plaintext into ciphertext.
- Examples: AES (Advanced Encryption Standard), RSA, SHA.
- Key Point: It needs both plaintext and a key to work.

#### 3. Key
- Definition: A secret value (like a password) used by the algorithm to encrypt or decrypt data.
- Types:
  - Symmetric keys: Same key for encryption and decryption (e.g., AES).
  - Asymmetric keys: Public key encrypts, private key decrypts (e.g., RSA).
- Key Point: Protecting the key is as important as encrypting the data.

#### 4. Ciphertext
- Definition: The encrypted version of your data—unreadable without the correct key.
- Key Point: This is what gets stored or transmitted securely.

### 🧩 How It All Fits Together
```plaintext
Plaintext + Key + Algorithm → Ciphertext
Ciphertext + Key + Algorithm → Plaintext
```

This reversible process is what lets AWS services like S3, RDS, and EBS encrypt and decrypt data securely—often using AWS KMS to manage the keys.

## 🔐 Methods to Secure Data at Rest
#### ✅ AWS KMS (Key Management Service)
- Managed service with automatic scaling and integration across AWS.
- Supports symmetric and asymmetric keys.
- Ideal for most workloads needing encryption at rest (e.g., S3, RDS, EBS).
- Key rotation: Automatic every 365 days for symmetric CMKs.

#### ✅ AWS CloudHSM
- Dedicated hardware security module (HSM) under your full control.
- You manage keys, users, and lifecycle manually.
- Required for strict compliance (e.g., FIPS 140-2 Level 3, custom PKCS#11 apps).
- No automatic key rotation—you must implement it yourself.

#### 🔗 Using KMS + CloudHSM Together
- You can create a KMS custom key store backed by CloudHSM.
- This gives you KMS integration with CloudHSM-level control.
- Ideal for regulated industries needing auditable key custody.

### 🌍 Managing Keys Across Regions
- KMS keys are region-specific.
- For multi-region apps:
  - Create replica keys in other regions.
  - Use multi-region keys for simplified replication and disaster recovery.
- CloudHSM clusters must be manually deployed per region.

### 🔑 Types of Keys in AWS
| Key Type | Description | Use Cases |
|---|---|---|
| Symmetric CMK | Same key for encrypt/decrypt | S3, EBS, RDS, Lambda |
| Asymmetric CMK | Public/private key pair | Digital signatures, public encryption |
| CloudHSM Keys | Full control, custom formats | PKCS#11 apps, compliance-heavy workloads |

### 🔁 Key Rotation
| Key Type | Rotation Support |
|---|---|
| Symmetric CMK (KMS) | ✅ Automatic (365 days) |
| Asymmetric CMK (KMS) | ❌ Manual only |
| CloudHSM Keys | ❌ Manual only |
 
### 🛂 Implementing Access Policies
- Use KMS key policies to define who can use or manage keys.
- Combine with IAM policies for fine-grained control.
- Use conditions like:
  - `aws:SourceIp` for IP restrictions
  - `aws:RequestTag` for tag-based access
  - `kms:EncryptionContext` for context-aware permissions
- Audit with CloudTrail and Access Analyzer.

### 🧠 Why Choose One Over the Other?
| Feature | AWS KMS | AWS CloudHSM |
|---|---|---|
| Ease of use | ✅ Fully managed | ❌ Manual setup |
| Integration | ✅ Broad AWS support | ⚠️ Limited native integration |
| Compliance | ⚠️ Good for most | ✅ Strong for regulated workloads |
| Control | ⚠️ Limited key custody | ✅ Full control over keys |
| Rotation | ✅ Automatic (symmetric) | ❌ Manual only |

## Encrypt data in transit with ACM
AWS Certificate Manager (ACM) helps encrypt data in transit by provisioning and managing SSL/TLS certificates for AWS services. It also automates certificate renewal when DNS validation is used, ensuring uninterrupted secure communication.

### 🔐 Encrypting Data in Transit with ACM
#### ✅ What ACM Does
- Provides SSL/TLS certificates to secure connections between clients and AWS services.
- Supports HTTPS encryption for services like:
  - Elastic Load Balancing (ALB/NLB)
  - Amazon CloudFront
  - Amazon API Gateway
  - AWS App Runner

#### ✅ How It Works
- You request a certificate via ACM (public or private).
- Attach it to a supported service (e.g., ALB listener or CloudFront distribution).
- ACM handles key generation, certificate storage, and deployment.

*🧠 This ensures that data in transit is encrypted using industry-standard protocols like TLS 1.2 or 1.3.*

### 🔁 Certificate Renewal in ACM
#### 🔹 Public Certificates
- Automatic renewal if:
  - DNS validation was used during issuance.
  - The certificate is still associated with an AWS resource (e.g., ALB).
- ACM revalidates domain ownership using the same method (DNS or email).
- You’ll receive email alerts if renewal fails or validation is pending.

#### 🔹 Private Certificates
- Managed via ACM Private CA.
- Renewal can be automated or manual, depending on configuration.

#### 🔹 Common Renewal Issues
- DNS misconfigurations (missing CNAME records).
- Certificate no longer associated with a resource.
- Expired validation records.

*🧠 To ensure smooth renewal, always keep DNS validation records active and monitor ACM alerts.*

### ✅ Summary Checklist
| Task | ACM Feature |
|---|---|
| Encrypt data in transit | SSL/TLS certificates |
| Supported services | ALB, CloudFront, API Gateway |
| Renewal method | Automatic (DNS) or manual (email) |
| Public certs | Free, auto-renewable |
| Private certs | Via ACM Private CA |
| Monitoring | ACM console + email alerts |

## S3 Encryption
### 🔐 Encryption in Transit (Always Enabled)
- S3 uses HTTPS (TLS) by default for all data in transit.
- Protects data as it moves between client and S3.
- No configuration needed—this is automatic.

### 🔐 Encryption at Rest: Two Main Methods
#### ✅ 1. Client-Side Encryption
- Encryption happens before upload—on the client.
- You manage:
  - The encryption algorithm
  - The encryption keys
  - The key lifecycle and rotation
- S3 stores the already encrypted object—it doesn’t know the key.
- Use cases:
  - Full control over encryption
  - Compliance with external key custody requirements

#### ✅ 2. Server-Side Encryption (SSE)
- S3 encrypts the object after it arrives, using one of three methods:

#### 🔹 SSE-S3 (Amazon S3 Managed Keys)
- S3 handles everything: key creation, storage, rotation.
- No need to manage keys.
- Uses AES-256 encryption.
- Header: `x-amz-server-side-encryption: AES256`

*🧠 Best for simple, automatic encryption with minimal overhead.*

#### 🔹 SSE-KMS (AWS KMS Managed Keys)
- Uses Customer Master Keys (CMKs) from AWS KMS.
- You control:
  - Key policies
  - IAM permissions
  - Audit via CloudTrail
- Supports automatic key rotation (for symmetric CMKs).
- Header: `x-amz-server-side-encryption: aws:kms`

*🧠 Best for granular access control, auditability, and compliance.*

#### 🔹 SSE-C (Customer-Provided Keys)
- You provide the encryption key with each request.
- S3 uses it to encrypt/decrypt but does not store the key.
- You must manage:
  - Key lifecycle
  - Secure transmission
- Header: `x-amz-server-side-encryption-customer-algorithm: AES256`

*🧠 Best when you need S3 to encrypt but want full control over the key.*

### 🧠 Summary Table
| Method | Key Management | Who Controls Key | Use Case |
|---|---|---|---|
| Client-Side | You | You | Full control, external compliance |
| SSE-S3 | S3 | AWS | Simple, automatic encryption |
| SSE-KMS | KMS | You (via IAM/KMS) | Audit, access control, compliance |
| SSE-C | You | You | S3 encrypts, you manage key |

---

# Compliance and AWS Artifact

AWS Artifact is your go-to self-service portal for accessing AWS compliance reports, certifications, and agreements. It helps you meet compliance requirements by providing auditor-ready documentation and managing legal agreements—all within the shared responsibility model.

## 🛡️ AWS Shared Responsibility Model
- AWS is responsible for: the security of the cloud—physical infrastructure, global network, hardware, and foundational services.
- You (the customer) are responsible for: the security in the cloud—your data, configurations, access controls, and workload compliance.

*🧠 Understanding this split is key to knowing which AWS tools support your compliance obligations.*

## 📁 What Is AWS Artifact?
AWS Artifact is a self-service portal that provides:
- On-demand access to compliance reports:
  - SOC 1, SOC 2, ISO 27001, PCI DSS, HIPAA, FedRAMP, and more.
- Third-party audit reports and certifications:
  - Issued by independent auditors to validate AWS’s compliance posture.
- Online agreements:
  - Accept and manage legal documents like Business Associate Agreements (BAAs) for HIPAA or GDPR Data Processing Addendums.

## 🧠 How AWS Artifact Helps You Stay Compliant
| Feature | Benefit |
|---|---|
| Download compliance reports | Share with auditors or use for internal validation |
| Review and accept agreements | Ensure legal coverage for regulated workloads |
| Track compliance posture | Understand AWS’s role in your compliance strategy |
| Use reports across accounts | Agreements apply to current and future accounts in your org |

## ✅ Other AWS Services That Support Compliance
| Service | Role in Compliance |
|---|---|
| AWS Config | Tracks resource configurations for audit |
| AWS CloudTrail | Logs API activity for forensic analysis |
| AWS Audit Manager | Automates evidence collection for frameworks like PCI, ISO, HIPAA |
| AWS Security Hub | Aggregates findings from GuardDuty, Macie, etc. for centralized compliance view |
| AWS IAM & Identity Center | Enforces least privilege and access control |
| Amazon Macie | Detects and classifies sensitive data (e.g., PII) in S3 |
| AWS Shield & WAF | Protects against DDoS and app-layer attacks for regulatory uptime requirements |

## 📋 AWS Audit Manager – Automated Evidence Collection
#### ✅ What It Does
- Helps you continuously audit your AWS usage.
- Automatically collects evidence from AWS services (e.g., CloudTrail, Config, IAM).
- Maps evidence to compliance frameworks like:
  - PCI DSS
  - ISO 27001
  - HIPAA
  - SOC 2
  - NIST 800-53

#### 🧠 How It Helps with Compliance
- Reduces manual effort in gathering audit artifacts.
- Tracks control status and assessment progress.
- Generates audit-ready reports for internal teams or external auditors.

## 🛡️ AWS Security Hub – Centralized Security and Compliance Visibility
#### ✅ What It Does
- Aggregates findings from AWS services like:
  - GuardDuty
  - Macie
  - Inspector
  - Firewall Manager
- Evaluates your environment against security standards:
  - AWS Foundational Security Best Practices
  - CIS AWS Foundations Benchmark
  - PCI DSS

#### 🧠 How It Helps with Compliance
- Provides a single dashboard for security posture.
- Flags non-compliant resources and misconfigurations.
- Supports automated remediation via EventBridge and Lambda.

## ✅ Summary Comparison
| Feature | Audit Manager | Security Hub |
|---|---|---|
| Focus | Compliance frameworks | Security posture |
| Output | Audit evidence, reports | Findings, alerts, dashboards |
| Automation | Evidence collection | Continuous monitoring |
| Integration | CloudTrail, Config, IAM | GuardDuty, Macie, Inspector |
| Use Case | Internal/external audits | Real-time security compliance |

---

# Data retention, classification and recovery
## 🧱 AWS CAF Security Perspective: 5 Capabilities
#### 1. Identity and Access Management (IAM)
- Who can access the data?
- Use fine-grained IAM policies, resource-based policies, and attribute-based access control (ABAC).
- Enforce least privilege, MFA, and role-based access.
- Use IAM Access Analyzer to detect unintended access.

#### 2. Detective Controls
- How do you know if something goes wrong?
- Use:
  - AWS CloudTrail for API auditing.
  - AWS Config for configuration drift detection.
  - Amazon GuardDuty for threat detection.
  - AWS Security Hub for centralized visibility.
- Enable S3 object-level logging for sensitive buckets.

#### 3. Infrastructure Security
- How is the environment secured?
- Use VPC segmentation, security groups, NACLs, and WAF/Shield.
- Isolate sensitive workloads in private subnets.
- Use VPC endpoints to avoid public internet exposure.

#### 4. Data Protection
- How is the data secured at rest and in transit?
- Use:
  - Encryption at rest: SSE-S3, SSE-KMS, client-side encryption.
  - Encryption in transit: TLS/SSL via ACM or service defaults.
  - KMS key policies and rotation.
  - Secrets Manager or Parameter Store for credentials.
- Apply bucket/object-level policies to enforce encryption and access control.

#### 5. Incident Response
- What happens when something goes wrong?
- Prepare with:
  - Runbooks and playbooks (e.g., via Systems Manager Automation).
  - CloudWatch alarms and EventBridge rules for real-time triggers.
  - Isolate compromised resources using tags and automation.
  - Use AWS Backup and S3 versioning for recovery.

## 🧠 Data Classification: Not All Data Is Equal
- Define classification tiers (e.g., Public, Internal, Confidential, Restricted).
- Tag resources with data sensitivity labels.
- Use Macie to discover and classify PII in S3.
- Enforce access controls and encryption based on classification.

## 🔐 Defense in Depth: Layered Security Controls
| Control Type | Examples | Purpose |
|---|---|---|
| Preventative | IAM, SGs, KMS, WAF, S3 bucket policies | Stop unauthorized access |
| Detective | CloudTrail, GuardDuty, Config, Macie | Detect and alert on anomalies |

*🧠 Layering both types ensures redundancy and resilience.*

## 🔁 Data Retention and Recovery
- Use S3 lifecycle policies to transition or expire data.
- Use AWS Backup for centralized backup across services (EFS, RDS, DynamoDB, EC2).
- Enable S3 versioning and Object Lock for immutability.
- Use Cross-Region Replication (CRR) for disaster recovery.

## ✅ Summary: Secure Data Lifecycle
1. Classify your data based on sensitivity.
2. Control access using IAM and encryption.
3. Monitor and audit with detective controls.
4. Back up and retain data per compliance needs.
5. Respond and recover with automation and tested playbooks.

---

# Questions about securing data in transit and at rest
To protect data in transit and at rest across AWS, use encryption, private connectivity, and layered access controls. Encrypted EBS volumes offer low-effort, durable protection with minimal performance impact, while services like RDS and KMS may introduce slight latency. Root keys (KMS CMKs) manage data keys, which are used for actual encryption operations.

## 🔐 Data Protection in Transit
#### ✅ VPN over Internet
- Use AWS Site-to-Site VPN with IPsec tunnels to encrypt traffic between on-premises and AWS.
- Protects data in transit over public networks.

#### ✅ AWS Direct Connect
- Use MACsec or layer a VPN over Direct Connect for encryption.
- Ensures private, encrypted connectivity with higher throughput and lower latency than VPN alone.

#### ✅ VPC-to-VPC Connections
- Use VPC Peering or Transit Gateway.
- For encryption, layer with VPN tunnels or use TLS at the application layer.

#### ✅ S3 ↔ VPC Transfers
- Use VPC endpoints (PrivateLink) to access S3 privately—no internet exposure.
- Combine with SSE-KMS or SSE-S3 for encryption at rest.

## 🌐 Protecting Data for Public Internet Users
- Use TLS/SSL via AWS Certificate Manager (ACM) for HTTPS.
- Deploy WAF and Shield to protect against app-layer and DDoS attacks.
- Use CloudFront for secure global delivery with edge encryption.

## 🧱 Data Protection in Storage Services
| Service | Encryption | Access Control | Durability | Performance Impact |
|---|---|---|---|---|
| Amazon S3 | SSE-S3, SSE-KMS, SSE-C, client-side | IAM, bucket policies | 99.999999999% | Minimal |
| Amazon EBS | Encrypted volumes via KMS | IAM, EC2 role | 99.999% | Negligible |
| Amazon RDS | Transparent encryption via KMS | IAM, DB auth | 99.95%+ | Slight latency on decrypt |
| Amazon DynamoDB | SSE-KMS | IAM | 99.999% | Minimal |
| Amazon EFS | Encryption in transit + at rest | IAM, NFS ACLs | 99.999999999% | Minimal |

## 🧠 Scenario: EBS vs S3 for Durable, Encrypted Storage
- Encrypted EBS volume is ideal for low-latency, block-level storage directly attached to EC2.
- Encrypted S3 bucket is better for object storage, archival, or cross-region replication.
- For real-time generation and durability, EBS encryption is lowest effort and integrates natively with EC2.

## ⚙️ Encryption Performance Impact
- EBS, S3, DynamoDB: Minimal to no impact due to hardware acceleration.
- RDS: Slight latency during encryption/decryption, especially with large datasets.
- KMS: Can introduce latency if used frequently or synchronously—use envelope encryption to reduce calls.

## 🔑 Root Keys vs Data Keys
| Key Type | Role | Managed By | Rotation |
|---|---|---|---|
| Root Key (CMK) | Controls access to data keys | AWS KMS | Automatic (symmetric) or manual |
| Data Key | Used to encrypt actual data | Generated by KMS | Not stored by KMS |

*🧠 Use envelope encryption: KMS generates a data key, encrypts it with the CMK, and you store both.*

---

# KMS and S3
## 🔐 Deep Dive: AWS KMS (Key Management Service)
#### ✅ Core Functions
- Create, store, and manage encryption keys (Customer Managed Keys or CMKs).
- Supports symmetric and asymmetric keys.
- Enables envelope encryption: KMS encrypts a data key, which encrypts your actual data.
- Integrated with over 50 AWS services including S3, EBS, RDS, Lambda, and Secrets Manager.

#### 🔒 Security Features
- Key policies: Define who can use or manage each key.
- IAM integration: Enforce least privilege access.
- Automatic key rotation: Every 365 days for symmetric CMKs.
- Audit logging: Every KMS API call is logged in CloudTrail.
- Multi-region keys: Simplify disaster recovery and cross-region replication.

## 🧱 Deep Dive: Amazon S3 + KMS
#### ✅ Server-Side Encryption Options
| Mode | Description | Key Source |
|---|---|---|
| SSE-S3 | S3-managed keys | AWS-managed |
| SSE-KMS | KMS-managed keys | Customer-managed or AWS-managed |
| SSE-C | Customer-provided keys | You manage externally |
| Client-side encryption | Encrypt before upload | You manage all keys and logic |

#### 🔐 SSE-KMS Highlights
- Encrypts data at rest using KMS CMKs.
- Allows fine-grained access control via IAM and key policies.
- Supports bucket policies that enforce encryption:
```json
"Condition": {
  "StringNotEquals": {
    "s3:x-amz-server-side-encryption": "aws:kms"
  }
}
```
- Encryption status is visible in S3 Inventory, Storage Lens, and CloudTrail logs.

## 🧠 Managed Services for Evaluation and Audit
| Service | Role |
|---|---|
| AWS CloudTrail | Logs all KMS and S3 API calls for audit |
| Amazon Macie | Classifies sensitive data (e.g., PII) in S3 |
| AWS Security Hub | Aggregates findings from Macie, GuardDuty, etc. |
| AWS Config | Tracks encryption settings and compliance drift |
| AWS Audit Manager | Maps evidence to compliance frameworks (e.g., PCI, HIPAA) |

#### 🔁 How They Interact
- S3 calls KMS to encrypt/decrypt objects using CMKs.
- CloudTrail logs every KMS and S3 operation for audit.
- Macie scans S3 for sensitive data and flags unencrypted buckets.
- Security Hub aggregates findings across services for centralized compliance visibility.

---
  
# S3 Access security and data lifecycle management
S3 offers both Intelligent-Tiering and Lifecycle configurations to manage data based on access patterns, but they serve different purposes. Intelligent-Tiering is hands-off and adaptive, while Lifecycle rules give you precise, rule-based control over object transitions and deletions. Use Lifecycle when you know your access patterns; use Intelligent-Tiering when you don’t.

## 🔄 Automatically Managing the Data Lifecycle
#### ✅ S3 Lifecycle Configurations
- Rule-based automation for transitioning or expiring objects.
- You define:
  - Filters (prefixes, tags) to target specific objects.
  - Transitions to storage classes (e.g., Standard → IA → Glacier).
  - Expiration to delete objects after a set time.
- Granularity: Per bucket, prefix, tag, or object version.
- Use case: You know your data lifecycle (e.g., logs older than 30 days go to Glacier).

#### ✅ S3 Intelligent-Tiering
- Automatic tiering based on actual access patterns.
- Moves objects between:
  - Frequent
  - Infrequent
  - Archive Instant
  - Deep Archive tiers
- No retrieval fees for frequent/infrequent tiers.
- Use case: You don’t know access patterns or they change over time.

#### 🔍 When to Use Which?
| Scenario | Use Lifecycle | Use Intelligent-Tiering |
|---|---|---|
| Known retention policy (e.g., logs) | ✅ Yes | ❌ Not ideal |
| Unpredictable access patterns | ❌ Too rigid | ✅ Ideal |
| Need to delete old data | ✅ Yes | ❌ Not supported |
| Want to minimize management overhead | ❌ Manual setup | ✅ Fully automated |
| Want to target specific prefixes/tags | ✅ Yes | ⚠️ Limited (whole object only) |

## 🔐 Access Pattern-Based Security
#### ✅ S3 Access Controls
- Bucket policies: Apply to all objects in a bucket.
- IAM policies: Apply to users, roles, or groups.
- Object ACLs: Fine-grained, but discouraged in favor of policies.
- Prefix- or tag-based conditions:
```json
"Condition": {
  "StringLike": {
    "s3:prefix": "logs/*"
  }
}
```
- S3 Access Points: Create scoped access to specific prefixes or use cases.

#### ✅ Policy Evaluation Model
- AWS evaluates:
  1. Explicit denies
  2. Allow statements from IAM, bucket, or access point policies
  3. Conditions (e.g., IP, tag, encryption status)
- Use Access Analyzer to validate and simulate policy behavior.

## 🧠 Services with Lifecycle + Granular Access
| Service | Lifecycle Management | Granular Access Control |
|---|---|---|
| S3 | ✅ Lifecycle + Intelligent-Tiering | ✅ Bucket, prefix, tag, object |
| EFS | ✅ Lifecycle to IA tier | ✅ IAM + POSIX ACLs |
| Glacier | ✅ Vault Lock policies | ✅ IAM policies |
| RDS Snapshots | ❌ Manual or AWS Backup | ✅ IAM policies |
| DynamoDB TTL | ✅ Per-item expiration | ✅ IAM + condition keys |

## ✅ Final Takeaway
- Design for security first: encryption, access control, and auditability.
- Use lifecycle tools to automate cost and compliance.
- Match access patterns to storage class and policy granularity.
- Simulate and test policies to ensure least privilege and correct behavior.

---

# Disaster recovery

AWS offers multiple disaster recovery strategies—backup & restore, pilot light, warm standby, and multi-site active-active—each suited to different RTO/RPO needs. Storage services like S3, EBS, RDS, and DynamoDB support periodic or continuous backup options, with point-in-time recovery available for many.

## 🧭 AWS Disaster Recovery Strategies
| Strategy | Description | RTO | RPO | Cost | Complexity |
|---|---|---|---|---|---|
| Backup & Restore | Periodic backups, restore on demand | Hours | Hours | Low | Low |
| Pilot Light | Core services always running, scale up on failover | Minutes | Minutes | Medium | Medium |
| Warm Standby | Scaled-down replica running in parallel | Seconds–minutes | Seconds–minutes | Higher | Higher |
| Multi-site Active-Active | Fully redundant systems in multiple regions | Near-zero | Near-zero | Highest | Highest |

*🧠 Choose based on business impact, compliance, and acceptable downtime.*

## RPO vs RTO
### 🕒 Recovery Point Objective (RPO)
#### ✅ What It Means
- RPO defines how much data you can afford to lose in a disaster.
- It’s measured in time—the maximum acceptable age of the data since the last backup or replication.

#### 🧠 Example
- If your RPO is 1 hour, you must back up or replicate data at least every hour.
- If a failure occurs, you may lose up to 1 hour of data—but no more.

#### 🔧 Influencing Factors
- Backup frequency (e.g., hourly snapshots vs. continuous PITR)
- Replication lag (e.g., S3 Cross-Region Replication)
- Business tolerance for data loss

### ⏱️ Recovery Time Objective (RTO)
#### ✅ What It Means
- RTO defines how quickly you must restore service after a disaster.
- It’s the maximum acceptable downtime before operations must resume.

#### 🧠 Example
- If your RTO is 15 minutes, your architecture must support failover or restore within that time.
- This might involve automated scaling, pre-provisioned standby environments, or fast snapshot restores.

#### 🔧 Influencing Factors
- Restore speed (e.g., EC2 from AMI vs. EBS snapshot)
- Failover automation (e.g., Route 53 health checks)
- Infrastructure readiness (e.g., warm standby vs. pilot light)

### 🧠 Summary Table
| Metric | Definition | Goal | Example |
|---|---|---|---|
| RPO | Max data loss (time) | Minimize lost data | Backup every 1 hour = 1-hour RPO |
| RTO | Max downtime (time) | Minimize outage duration | Restore in 15 minutes = 15-min RTO |

### 🔁 Backup Frequency and Recovery Point Objective (RPO)
- requent backups = lower RPO (less data loss).
- Continuous backups (e.g., DynamoDB PITR) offer near-zero RPO.
- Scheduled backups (e.g., EBS, RDS) depend on interval (daily, hourly).

*🧠 Always align backup frequency with business tolerance for data loss.*

### 🔐 Key Design Principles
- Automate backups using AWS Backup or service-native features.
- Test restores regularly to validate recovery procedures.
- Use cross-region replication for regional resilience.
- Encrypt backups with KMS and control access via IAM.
- Tag resources for backup policies and compliance tracking.

## 🔥 What Is a Pilot Light?
- Think of it as a minimal version of your environment always running in a secondary Region.
- Only critical components (e.g., databases, core services) are kept live.
- During a disaster, you scale up the rest of the infrastructure (e.g., app servers, load balancers).
- Fast recovery, but low cost because most resources are dormant.

*🧠 Analogy: Like keeping the pilot flame lit on a gas heater—ready to ignite full service when needed.*

## 🌡️ What Is Warm Standby?
- A scaled-down replica of your full production environment runs in a secondary Region.
- It’s partially active—can handle limited traffic or testing.
- During a disaster, you scale up to full capacity and redirect traffic.
- Higher cost than pilot light, but faster failover.

*🧠 Analogy: Like keeping a backup car idling—ready to drive, but not at full speed until needed.*

## 💰 Estimated Cost Multipliers for AWS Disaster Recovery Strategies
These estimates assume a typical web application with compute, storage, and database components, and use monthly cost baselines for comparison:

| Strategy | Relative Cost | Multiplier vs. Backup & Restore | Notes |
|---|---|---|---|
| Backup & Restore | 💸 | 1× | Only storage costs (e.g., S3, snapshots) |
| Pilot Light | 💸💸 | ~2–3× | Minimal compute + storage for core services |
| Warm Standby | 💸💸💸 | ~5–7× | Scaled-down full environment, ready to scale |
| Multi-site Active-Active | 💸💸💸💸 | ~10–15× | Full duplicate infra in second region |

## 🧠 Disaster Recovery Deep Dive by Service
### 💾 Amazon EBS Snapshots
- Type: Point-in-time block-level backup of volumes.
- Automation: Use AWS Backup or Data Lifecycle Manager (DLM).
- Cross-region: Manual or automated copy to another region.
- RPO: Depends on snapshot frequency.
- RTO: Minutes—restore volume and attach to EC2.

### 🧠 Amazon DynamoDB Backup
- Types:
  - On-demand backups: Full table snapshot.
  - Point-in-time recovery (PITR): Continuous backup up to 35 days.
- Automation: PITR is continuous; on-demand can be scheduled.
- Cross-region: Use Global Tables for active-active DR.
- RPO: Seconds (PITR).
- RTO: Seconds to minutes—restore table or failover.

### 🧠 Amazon RDS Snapshots
- Types:
  - Automated backups: Daily snapshots + transaction logs.
  - Manual snapshots: User-initiated, can be retained longer.
- Automation: Via AWS Backup or RDS settings.
- Cross-region: Manual copy of snapshots.
- RPO: Minutes to hours.
- RTO: Minutes—restore DB instance.

### 🧠 Amazon Aurora Snapshots
- Same as RDS, but with cluster-level granularity.
- Aurora Global Database: Enables cross-region read replicas and fast failover.
- RPO: Seconds (with Global DB).
- RTO: <1 minute (with Global DB failover).

### 🧠 Amazon EFS Backup (via AWS Backup)
- Type: File system-level backup.
- Automation: Fully integrated with AWS Backup.
- Cross-region: Supported via AWS Backup copy jobs.
- RPO: Depends on schedule.
- RTO: Minutes—restore file system or mount target.

### 🧠 Amazon Redshift Snapshots
- Types:
  - Automated snapshots: Daily.
  - Manual snapshots: User-defined.
- Cross-region: Manual copy supported.
- RPO: Daily (automated), tighter with manual.
- RTO: Minutes to hours—restore cluster.

### 🧠 Amazon Neptune Snapshots
- Type: Cluster-level snapshot.
- Automation: Manual or via AWS Backup.
- Cross-region: Manual copy supported.
- RPO: Snapshot-dependent.
- RTO: Minutes—restore cluster.

### 🧠 Amazon DocumentDB Snapshots
- Same model as RDS.
- Automation: Automated and manual snapshots.
- Cross-region: Manual copy supported.
- RPO: Daily (automated).
- RTO: Minutes—restore cluster.

### 🧠 Amazon S3 Cross-Region Replication (CRR)
- Type: Asynchronous object-level replication.
- Automation: Continuous; versioning required.
- RPO: Near real-time (depends on replication lag).
- RTO: Immediate—data is already in DR region.
- Bonus: Supports Object Lock for WORM compliance.

### ✅ Summary Table
| Service | Backup Type | Cross-Region Support | RPO | RTO | Automation |
|---|---|---|---|---|---|
| EBS | Snapshot | ✅ Manual/Auto | Minutes–hours | Minutes | ✅ |
| DynamoDB | PITR + On-demand | ✅ Global Tables | Seconds | Seconds–minutes | ✅ |
| RDS | Snapshot | ✅ Manual | Minutes–hours | Minutes | ✅ |
| Aurora | Snapshot + Global DB | ✅ Global DB | Seconds | <1 min | ✅ |
| EFS | AWS Backup | ✅ | Schedule-based | Minutes | ✅ |
| Redshift | Snapshot | ✅ Manual | Daily | Minutes–hours | ✅ |
| Neptune | Snapshot | ✅ Manual | Snapshot-based | Minutes | ✅ |
| DocumentDB | Snapshot | ✅ Manual | Daily | Minutes | ✅ |
| S3 | CRR + Versioning | ✅ Continuous | Near real-time | Immediate | ✅ |


## 🧠 What Is AWS Storage Gateway?
AWS Storage Gateway is a hybrid cloud storage service that connects your on-premises applications to AWS storage services like S3, EBS, and Glacier. It supports multiple gateway types depending on your use case:

### 🔹 Gateway Types
| Type | Description | Use Case |
|---|---|---|
| File Gateway | NFS/SMB interface to S3 | Backup, archiving, file shares |
| Volume Gateway | iSCSI block storage backed by EBS snapshots | Disaster recovery, VM backups |
| Tape Gateway | Emulates physical tape libraries, stores data in Glacier | Long-term archival, compliance |

### 🔐 How It Supports Disaster Recovery
- Backs up on-prem data to AWS using EBS snapshots or S3 objects.
- Integrates with AWS Backup for centralized scheduling and monitoring.
- Supports cross-region backup copy for DR scenarios.
- Enables point-in-time recovery for volume data.
- Reduces on-prem storage footprint by tiering cold data to the cloud.

### ✅ AWS Backup Capabilities by Resource
| Resource | Backup Support | Cross-Region Copy | Point-in-Time Recovery |
|---|---|---|---|
| EBS Volumes | ✅ Snapshots | ✅ | ✅ |
| EC2 Instances | ✅ (via AMIs + volumes) | ✅ | ✅ |
| RDS/Aurora | ✅ Snapshots | ✅ | ✅ |
| DynamoDB | ✅ On-demand + PITR	✅ (via export)	✅ |
| EFS File Systems | ✅ via AWS Backup | ✅ | ✅ |
| Storage Gateway Volumes | ✅ via Volume Gateway | ✅ | ✅ |
| Amazon FSx (Windows/Lustre) | ✅ via AWS Backup | ✅ | ✅ |

### 🧠 Summary: Hybrid + Backup Strategy
- Use Storage Gateway to extend AWS backup and DR to on-prem workloads.
- Use AWS Backup to centralize scheduling, monitoring, and cross-region replication.
- Choose gateway type based on workload: File (S3), Volume (EBS), or Tape (Glacier).
- Ensure IAM roles and encryption policies are in place for secure backup flows.

