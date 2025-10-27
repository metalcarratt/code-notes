Secure workloads

This could involve determining who or what can launch or terminate your resources, managing how and when access is given, operational permissions, and again, almost anything else that would involve calls to the services.

- Ensure you know [how to design, build, and secure an Amazon Virtual Private Cloud or Amazon VPC](#-core-components-of-a-vpc).
  - There are [two types of Amazon VPC, default and custom](#-default-vs-custom-vpc-key-differences). Make sure you know the differences and how the security for each is initially configured.
  - Let's also check in and see if you know what is [the resilient type for an Amazon VPC](#%EF%B8%8F-characteristics-of-a-resilient-amazon-vpc).
  - [Is an Amazon VPC a zonal, regional, or global service](#amazon-vpc-is-a-regional-service)? Well, when you create a VPC, it is in one Region and in one AWS account, so that makes an Amazon VPC a regional service.
  - Dive deeper and ensure you understand how to design secure VPC architectures.
    - For example, [many application architectures are multi-tiered](#-multi-tier-vpc-architecture-overview).
      - When studying about securing application tiers, pay attention to the use and functionality of security groups, network access control lists, route tables, and NAT gateways.
      - These will provide management and security controls over your network traffic.
      - They can provide granularity in the rules, restrictions, and allowances that you need.
      - Understand how they work both together and individually.
      - Also understand how to build their rules, the pitfalls to avoid, rule processing logic, and methods to employ them for better combined functionality.
    - Again, know the base configurations for security filters for both the default and custom VPC.
- Ensure you understand networking fundamentals such as protocols, CIDR, subnetting, routing, security filters, gateways, and so on.
  - For network segmentation, understand the strategies behind, when to use public and private subnets, what differentiates a public from a private subnet, and common practices around the use of these subnets.
  - What is a subnet? A subnet is where our services sit and run from inside our Amazon VPCs. They help to add structure and functionality to our VPCs.
    - What resiliency do subnets have? Are they zonal, regional or global? Subnets are an Availability Zone resilient feature of AWS.
    - You'll also need to understand routing mechanisms within a VPC. This will involve the implementation, use and features of the route tables.
      - For example, if you needed to allow specific types of traffic to access your application servers, but the traffic was going to be coming from your on premises location, traversing a VPN and your application servers were in a private subnet, how would you set that up?
      - What could you do to make sure that the application servers were safe from access coming from the public internet, but also that there wouldn't be any issues at the VPC, subnet or instant levels for the requests coming in from the on premises that's connected by a VPN in your VPC?
      - This solution will also require you to know how to appropriately select and deploy other components such as the AWS service endpoints, like PrivateLink, peering, transit gateways, VPN connections, Direct Connect, and other network connection tools and methods that are commonly used when deployed with VPCs.
- Endpoints are a great way to add secure access. What is an endpoint service? They're gateway objects that we can create inside our VPC similar to internet gateway or a NAT gateway to connect to AWS public services without the need of a gateway like the internet gateway or the NAT gateway.
  - We just mentioned that AWS also has a VPC endpoint service, PrivateLink, which can help to solve the issue of exposing an application in adding secure access for other VPCs in other AWS accounts.
    - Let's say you have an application and you make that application public. Well, now you're using the internet and your application is exposed, so how can you secure this application? We could set up VPC peering, but that's gonna add more management overhead as you scale, and it also exposes other applications in the VPCs to the other VPCs that are peered.
    - PrivateLink is a secure and scalable way to expose your application or service to tens or hundreds of VPCs with no peering, internet gateway, NAT gateway, and so on.
- Ensure you know how to secure external connections to and from AWS resources using private connections with AWS Site-to-Site VPNs, AWS Client VPN, and Direct Connect.
  - You want to ensure you understand the capacity, security, and resilience options for configuring each of these services.
- Let's step back again and talk about fundamentals and best practices for securing your data. Here are a few questions to consider.
  - How do you build in security to your networking tiers?
  - How do you secure application use across these tiers? And what does the management of those security components look like?
  - For the exam, you could get a question asking, for which AWS service helps to secure personally identifiable information or PII? PII is personal data used to establish an individual's identity, this includes your name, your home address, email address, your social security number, driver license number, passport, date of birth, bank account information, credit card, and so on. Amazon Macie is an AWS service that uses machine learning to discover, classify, and protect sensitive data stored in Amazon S3.
  - More services to help here are Amazon Cognito, Amazon GuardDuty, and for Cognito, ensure you have an understanding of Cognito user pools, Cognito identity pools, and how Cognito brokers the single sign on or ID federation. You will most likely see scenario based questions around use cases for these services.
- Another fundamental needed for designing secure workloads and applications is firewalls and proxy servers.
  - You'll wanna understand how to integrate security services to secure applications with services such as AWS Shield AWS WAF, AWS IAM Identity Center, Amazon Cognito, Amazon Guard Duty, Amazon Macie, AWS Secrets Manager, and AWS Systems Manager Parameter Store.
  - Understand the difference between Shield Standard and Shield Advance.
  - Know when and why you might choose one security service over another, such as if you're trying to prevent external DDoS or SQL injection attacks.
  - For example, if you are storing a secret and need high volume access with automatic credential rotation, what would you choose? AWS Secrets Manager or AWS Systems Manager Parameter Store? AWS Secrets Manager is designed to store secrets more so than Systems Manager Parameter Store. And Secrets Manager can force the rotation of your secrets at a chosen interval of days. Dive deeper and ensure you can choose the best service for the requirements.
  - Another example, AWS WAF can only be deployed on certain AWS services, such as application load balancers, Amazon API Gateway, and Amazon CloudFront. General understanding of these services will be crucial to knowing how they be deployed in the scenarios you will encounter on your exam.

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


### Topics to round out
#### 1. Protocols and Port Behavior
- Understand TCP vs UDP and how protocols affect firewall rules.
- Know common ports (e.g., 22 for SSH, 80/443 for HTTP/HTTPS) and how they’re filtered by SGs/NACLs.

##### 🔁 TCP vs UDP: Protocol Behavior
| Protocol | TCP | UDP |
|---|---|---|
| Connection | Connection-oriented (handshake) | Connectionless |
| Reliability | Reliable, ordered delivery | Best-effort, no guarantee |
| Use Cases | Web (HTTP/HTTPS), SSH, FTP | DNS, video streaming, VoIP |
| Firewall Impact | Stateful tracking works well | Harder to track without connection state |

**🔐 Security Implication:**
- Security Groups (stateful): Automatically allow return traffic for TCP.
- NACLs (stateless): Must explicitly allow both inbound and outbound for TCP and UDP.

##### 🔢 Common Ports and Their Roles
| Port | Protocol | Purpose |
| 22 | TCP | SSH (remote login) |
| 80 | TCP | HTTP (web traffic) |
| 443 | TCP | HTTPS (secure web traffic) |
| 53 | UDP | DNS queries |
| 123 | UDP | NTP (time sync) |

**🔐 Filtering Behavior**
- Security Groups: Apply at the instance level, allow traffic by protocol, port, and source.
- NACLs: Apply at the subnet level, must allow both directions for bidirectional traffic (e.g., TCP handshake).

#### 2. Elastic IPs and Public IPs
- Difference between auto-assigned public IPs and Elastic IPs.
- How public IPs relate to IGW routing and EC2 accessibility.

##### 🌐 Public IPs vs Elastic IPs
| Type | Auto-assigned Public IP | Elastic IP |
| Assigned | Automatically when launching EC2 in a public subnet (if enabled) | Manually allocated and attached by you |
| Persistence | Released when instance stops or is replaced | Stays with your account until you release it |
| Control | AWS manages it | You manage it—can reassign across instances |
| Use Case | Temporary access for dev/test | Stable endpoint for production, DNS, or failover setups |

**🔁 How Public IPs Enable IGW Routing**
- A public IP is what the Internet Gateway (IGW) uses to route traffic between the internet and your EC2.
- Without a public IP, the IGW cannot deliver inbound traffic to your instance—even if the subnet has a route to the IGW.
- Public IPs are mapped to private IPs inside the VPC using 1:1 NAT.

#### 3. Route Table Associations
- Each subnet must be explicitly associated with a route table.
- One route table can be shared across subnets, but each subnet has only one active route table.

#### 4. VPC Peering and Transit Gateways
- How routing works across multiple VPCs.
- What changes in route tables and CIDR planning when peering is involved.

#### 5. Resiliency and AZ Design
- Subnets are AZ-scoped, so for high availability:
  - Spread resources across multiple subnets in different AZs.
  - Use multi-AZ architectures for load balancers, databases, etc.

#### 6. Common Practices
- Public subnet: Load balancer, bastion host.
- Private subnet: App servers, DBs, internal services.
- NAT Gateway: Placed in public subnet, used by private subnets.




