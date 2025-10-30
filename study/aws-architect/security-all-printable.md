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
