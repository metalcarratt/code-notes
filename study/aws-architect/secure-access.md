- know the differences between [public, private, hybrid, and multi-cloud environments](#%EF%B8%8F-cloud-environment-types) and [how to design secure access to all of them](#-designing-secure-access-across-cloud-models).
- AWS accounts. [Understand what accounts are](#-what-is-an-aws-account) and how they work to ensure you have [secure access to your AWS resources](#-securing-access-to-aws-resources).
- Review the [best practices for account root user security](#-best-practices-for-root-user-security), applying the principle of least privilege, and multifactor authentication.
  - AWS accounts begin with a single account root user with full permissions. So why is this a risk to use the account root user? Well, these account permissions cannot be changed or modified and if this account root user is compromised then so is the whole AWS environment.
  - One way to secure the account root user is to add multifactor authentication. But what else could we implement to secure our AWS account?
  - How about adding another user with more limited permissions instead of using the account root user? When we add new users to our AWS account, those new users will be different people and need different levels of access.
- What level of permissions do new IAM users have in your AWS account?
  - [IAM identities](#%E2%80%8D-iam-identity-types-in-aws) start with no permissions but permissions can be granted. Dive deeper into IAM users, groups, and roles and what goes into deciding between which to use and how they might be combined.
  - Understand how using the principle of least privilege limits your blast radius.
- Here are a few questions to consider.
  - [How do you create IAM users, groups, and roles](#%EF%B8%8F-how-to-create-iam-users-groups-and-roles)?
  - What are their [strengths and limitations](#%EF%B8%8F-strengths-and-limitations)?
  - What scenarios would dictate possibly [switching between the various user group and role-based permissions](#-when-to-switch-between-iam-constructs)?
- Along with those identities, make sure you know how IAM and other AWS services give you the ability to [secure the necessary credentials](#-securing-aws-credentials-best-practices) and best practices for handling those credentials.
    - Look at various methods of assuming roles including assigning roles to AWS services.
    - Understand how to use AWS Security Token Service within and across accounts, and how roles are used with federations. Your users might already have identities outside of AWS such as in your corporate directory. If those users need to work with AWS resources or work with applications that access those resources then those users will need security credentials. You can use an IAM role to specify permission for users whose identity is federated from your organization or third party identity provider.
- Do you know how to [design and configure active directory to federation access to AWS IAM roles or users](#designing-and-configuring-active-directory-to-federate-access-to-aws-iam-roles-or-users)?
- Also dive into the best practices for controlling your application's access to AWS APIs.
  - When should you hard code credentials into your application? The answer to this is never, but know the other ways to enable API access and dive deeper into IAM policies.
- For this certification, you do not need to know how to write advanced policies, but you should be able to read and interpret policy documents.
  - Learn the major parts of a policy statement what's required, and what are the ways in which the policies provide granularity with permissions.
  - For this exam, learn the major parts of a policy statement, what is required, and the ways in which the policies provide granularity with permissions.
  - Make sure you also understand IAM decision logic when evaluating policies including how that will affect an identity with multiple policies attached.
  - Also ensure you know the appropriate use of resource policies for AWS services.
  - What is a policy? Well, it's an object in AWS that when associated with an identity or resource defines their permissions. The two types of policies are identity based policies which are attached to an IAM user group or role. These policies give you the ability to specify what that identity can do. Its permissions. With identity policies, we control what resources that identity can access. With resource policies, we control who can access the resource. So resource based policies are attached to a resource such as an Amazon S3 bucket, Amazon SQS queues, VPC endpoints, AWS Key Management Service encryption keys to specify who has access to the resource and what actions they can perform on it. And bucket policies are structured differently compared to the structure of identity policies. The difference is the principle part of the policy. The principle part of a resource policy defines which principles are affected by this resource policy.
- And lastly, understand the methods, services and tools available that help you create traceability for access to AWS resources.
  - Traceability helps to monitor, alert and audit actions and changes to your environment in real time.
  - It also helps to integrate log and metric collection with systems to automatically investigate and take action.
  - Just as you need to be aware of the performance and behaviors of your application components. You also need to have insight into who and what has access to your account resources and data.

You will be tested on:
- designing security strategies for multiple AWS accounts
- know how to gain that visibility
- how to enforce security standards
- how to alert and automate based on that data.

Ensure you understand:
- AWS Control Tower
- AWS Organizations
- service control policies. Learning to design secure access to the resources is an important step in learning how to prioritize security at every step. 


# ☁️ Cloud Environment Types
| Cloud Type | Description | Pros | Cons | Example Providers |
|---|---|---|---|---|
| Public Cloud | Services offered over the internet by third-party providers. | Shared infrastructure.	Cost-effective, scalable, easy to deploy | Less control, potential data residency concerns | AWS, Azure, Google Cloud |
| Private Cloud | Dedicated infrastructure for one organization, either on-premises or hosted. | Greater control, customization, compliance | Higher cost, complex setup | VMware, OpenStack |
| Hybrid Cloud | Combines public and private clouds with orchestration between them. | Flexibility, workload optimization | Complex integration and management | Azure Stack, AWS Outposts |
| Multi-Cloud | Uses multiple public clouds from different providers. | Avoids vendor lock-in, best-of-breed services | Increased complexity, fragmented security | AWS + Azure + GCP combo |

## 🔐 Designing Secure Access Across Cloud Models
To ensure secure access across these environments, consider the following strategies:

1. **Identity and Access Management (IAM)**
- Use centralized IAM tools (e.g., Azure AD, Okta, AWS IAM).
- Implement role-based access control (RBAC) and least privilege principles.
- Enable multi-factor authentication (MFA) for all users.

2. **Federated Identity and SSO**
- Use identity federation to unify access across clouds.
- Implement Single Sign-On (SSO) for seamless user experience.

3. **Network Security**
- Use VPNs or dedicated interconnects for private/hybrid cloud access.
- Segment networks with firewalls and microsegmentation.
- Apply Zero Trust principles: verify every access request.

4. **Encryption and Data Protection**
- Encrypt data at rest and in transit using cloud-native tools.
- Use customer-managed keys where possible.
- Monitor for data exfiltration and unauthorized access.

5. **Monitoring and Logging**
- Centralize logs across environments using SIEM tools (e.g., Splunk, Azure Sentinel).
- Set up alerts for anomalous access patterns.

6. **Compliance and Governance**
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
1. Use IAM (Identity and Access Management)
- Create IAM users for individuals and IAM roles for applications or services.
- Assign least-privilege permissions using IAM policies.
- Avoid using the root user for daily tasks.

2. Enable Multi-Factor Authentication (MFA)
- Require MFA for the root user and all IAM users.
- Adds an extra layer of protection against compromised credentials.

3. Use Temporary Credentials
- Use IAM roles with temporary security tokens (via STS) for workloads and federated users.
- Avoid long-term access keys unless absolutely necessary.

4. Monitor and Audit Access
- Enable AWS CloudTrail to log all account activity.
- Use AWS Config and Access Analyzer to detect risky permissions and changes.

5. Organize with AWS Organizations
- Centralize management of multiple AWS accounts.
- Apply Service Control Policies (SCPs) to restrict actions across accounts.

6. Protect Root User Credentials
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
1. Enable Multi-Factor Authentication (MFA)
- Use a hardware MFA device or a secure authenticator app.
- This adds a critical layer of protection against password compromise.

2. Avoid Using the Root User
- Use the root account only for tasks that require it (e.g., changing support plans, closing the account).
- Log out immediately after use.

3. Create IAM Users and Roles
- Assign users based on job function (e.g., developer, auditor, admin).
- Use IAM roles for applications and services to avoid hardcoded credentials.

4. Apply the Principle of Least Privilege
- Grant only the permissions needed for each user or role.
- Use managed policies or custom policies with tight scopes.
- Regularly review and prune unused permissions.

5. Use Groups for Easier Management
- Assign IAM users to groups (e.g., DevOps, Finance) and attach policies to groups.
- This simplifies permission updates and audits.

6. Monitor and Audit Access
- Enable AWS CloudTrail to log all account activity.
- Use IAM Access Analyzer to detect risky permissions.
- Set up alerts for unusual login patterns or privilege escalations.

7. Use AWS Organizations for Multi-Account Management
- Create separate accounts for dev, test, prod, and billing.
- Apply Service Control Policies (SCPs) to enforce guardrails across accounts.

8. Rotate Credentials Regularly
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
Use IAM Users when:
- You need long-term access for a human or script.
- You want to assign credentials directly.

Use IAM Groups when:
- You manage multiple users with similar responsibilities.
- You want to apply policies uniformly (e.g., all developers get EC2 access).

Use IAM Roles when:
- You need temporary access (e.g., EC2 accessing S3).
- You want to delegate access across accounts or organizations.
- You integrate with identity providers (SSO, federation).

Combine Them Like This:
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

## 🔐 Securing AWS Credentials: Best Practices
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
