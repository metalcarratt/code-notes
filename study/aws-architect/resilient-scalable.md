# design scalable and loosely coupled architectures

When thinking about resilient architectures, we want to design our architectures with scalable and loosely coupled services, and we want to ensure our application continues to run even when there is a failure of an application component. It is best practice to test your applications at scale to ensure your applications can perform well under load. So let's again go back to our fundamentals to ensure we understand scaling. 

[Scaling](#scaling) is the ability of a system to scale, so increasing and decreasing the load placed on that system. And systems scale when they need to grow or shrink, again depending on the load or the demand. 
- There are two ways to scale, vertical and horizontal. Ensure you know the difference between these two along with the cost optimization for each.
- Still under fundamentals, [what is elasticity](#-what-is-elasticity)?
  - Well, it is using automation along with horizontal scaling to match your capacity with your demand.
  - Demand is very rarely linear. It is usually increasing and decreasing and using elasticity that gives our capacity the ability to increase and decrease to meet that ever changing demand.
  - AWS provides launch configuration and autoscaling to scale out our systems to match the capacity to the demand giving our environment the ability to scale.
  - It adds additional resources as the demand increases. And then when that demand decreases, we can scale back in to a smaller number of servers or even no servers.
  - This optimizes our environment for performance efficiency, operational excellence, and cost optimization which are all pillars of the AWS Well-Architected Framework.
- For this exam, know the difference between horizontal and vertical scaling and how to achieve them using different services.
  - For example, what are the capabilities of [AWS Auto Scaling and Amazon EC2 Auto Scaling](#%EF%B8%8F-aws-auto-scaling-vs-amazon-ec2-auto-scaling)?
  - What are the different [types of scaling policies](#-ec2-auto-scaling-policy-types) you can use with Amazon EC2 Auto Scaling?

Let's move on. You should also have a fundamental understanding of containers, serverless, and virtualization.
- There are many options for running your [compute workloads](#aws-compute) in the cloud.
  - Containers, serverless, and virtual instances in EC2, but when does it make more sense to use one over the other?
  - What are the benefits and limitations of the different service options?
  - Different workloads have different needs. Know how to recommend the appropriate compute, storage, networking, and databases based on the requirements and the right AWS services to meet the requirements.
  - For example, when using Amazon EC2 for [high performance computing](#-high-performance-computing-hpc), there are different instance types and deployment configurations that are optimal for HPC.
  - For more depth, read the AWS Well-Architected Framework High Performance Computing lens.
- Know the different types of [placement groups](#-placement-groups-what-and-why) and [advance networking options](#-networking-enhancements) for certain EC2 instance types will help answer questions and build better designs.

There are many options for using [storage in your multi-tier architecture](#%EF%B8%8F-storage-in-multi-tier-architecture).
- For example, many years ago, companies used relational databases for nearly every data need.
  - At extreme scale, this presents challenges.
  - However, AWS has many different purpose-built databases such as
    - DynamoDB for NoSQL database needs and for low latency performance at extreme scale,
    - RDS frame managed relational database service,
    - Amazon Aurora for a cloud native relational database service,
  - and Amazon Redshift for data warehouse needs.
  - Here are questions to consider.
    - How can you [handle scaling with the AWS database services](#-scaling-and-resiliency-in-aws-database-services)? For resiliency in RDS, would you use Read Replicas or a Multi-AZ design?
      - Read Replicas provide two main benefits, performance benefits and availability benefits.
      - RDS Multi-AZ does not scale your reads. It cannot be accessed directly and the standby does not provide added performance. It is only good for high availability.
      - Diving deeper using a Reed Replica is not a substitute for using a cache. Querying a Read Replica still has overhead of making a database connection, authentication, SQL query parsing, optimization locking, and so on.
      - But there are many other options for using caching. Under extreme Load, your application components may run into performance issues. You should know which services can be used for caching including but not limiting to Amazon CloudFront, ElastiCache, and DynamoDB Accelerator.
      - Again, ensure you understand the fundamentals of caching, Read Replicas, and more.

Diving even deeper, ensure you know 
- how to use RDS Proxy to make your applications more scalable, more resilient to database failures, and more secure.
- Also, ensure you know how to add AWS edge networking services such as CloudFront, Route 53 and Global Accelerator, and configure them to transmit your data securely and with improved latency.
- Understand how these services help to encrypt data, remove network hops, and control application access which helps with the resiliency and performance and when to use them for different requirements.
- Here's another scenario. What if you need to design a file transfer where you do not have to host and manage your own file transfer service? Your manager does not want to invest in operating and managing infrastructure, patching servers, monitoring for uptime and availability, and building one-off mechanisms to provision users and audit their activity. What do you do? You could add and implement the AWS Transfer Family to manage file processing workflows. The Transfer Family gives you the ability to create, automate, and monitor your file transfer and data processing without maintaining your own code or infrastructure. It also supports up to three Availability Zones and is backed by auto scaling, redundant fleet for your connection, and transfer request.

It is important to know and understand how AWS managed services scale based on your configuration. This exam will test your ability to build highly scalable and reliable workloads using a service-oriented architecture or a microservices architecture.
  - Service-oriented architecture is the practice of making software components reusable via service interfaces.
  - Microservices architecture goes further to make components smaller and simpler.
  - Distributed systems rely on communication networks to interconnect components such as servers or services. Your workload must operate reliably despite data loss or latency in these networks. Components of the distributed system must operate in a way that does not negatively impact other components or the workload. Ensure you understand and can design with best practices to help your workloads withstand stresses or failures more quickly recover from them and mitigate the impact of such impairments.
  - With the microservices approach and design, services communicate over well-defined application programming interfaces or APIs. There are different patterns to these builds which include API-driven, event-driven and data streaming. A highly scalable and fault tolerant microservices architecture with the user interface, implementation of the microservices, and data stores can be built in AWS using containers and serverless services to reduce operational complexity and add resilience.
  - There are many options for running your serverless workloads.
  - Back to fundamentals, ensure you know what serverless is and how it is defined.
    - In AWS, serverless is an operational model with no infrastructure provision or manage, automatically scales by unit of consumption, pay for value billing mode, and has built-in availability and fault tolerance.
    - Amazon API Gateway scales automatically and many API use cases do not require management.
    - Dive deeper and no use cases for API Gateway.
      - For an application to call publicly available AWS services, you can use Lambda to interact with required services and expose Lambda functions through API methods in API Gateway.
      - Lambda is a serverless event-driven compute service that gives you the ability to run code for virtually any type of application or backend service without provisioning or managing servers.
      - To scale Lambda, ensure you understand concurrency and transactions.
    - Amazon Simple Queue Service queues can deliver very high throughput.
      - To achieve high throughput, you must scale message producers and consumers horizontally.
      - Think about the scenario where your application frontend is processing much faster than some of your backend processing. How can we achieve independent scaling of application components as needed? Web applications commonly use synchronous APIs when communicating with backend services. For longer running processes, asynchronous workflows can offer an improved user experience and help manage scaling. By using durable message stores like SQS or DynamoDB, you can separate the request ingestion and response from the request processing.
      - Dive deeper into SQS to decouple and scale microservices, distributed systems and serverless applications.

We mentioned that one of the ways in which that we can help ensure our application can continue to run, despite a single point of failure is to implement loosely coupled architectures. Before looking specifically at the various services for decoupling, it might be best for me to make sure we're all on the same page with what is meant by decoupling.
  - Decoupling refers to components remaining autonomous and unaware of each other as they complete their work as part of a larger system.
    - This can be used to describe components within a simple application or can be applied at a much larger scale.
    - This task focuses on designing scalable and loosely coupled architectures.
  - Additionally, it's important that you understand and can distinguish between two decoupling techniques, synchronous and asynchronous integration.
    - Synchronous decoupling generally involves at least two components, both must always be available and order for things to function properly.
    - Knowing how to use decoupling services will be incredibly important. The use of tools such as the load balancer discussed earlier or even handling more complicated builds with Amazon Event Bridge will be important to solving the examples you'll be presented with.
    - Additionally, you'll need to understand how to use serverless tools in AWS to build and improve decoupling mechanisms.
      - What are the ways you can deploy SQS, API Gateway, DynamoDB, and many other services within the serverless toolkit?
      - Understanding how to implement these tools will help you to build flexibility and decoupling capabilities into your architectures, and it will also help in determining which responses will work.
      - Knowing the textbook definitions and methodologies of decoupling will only get you so far. It's important that you learn about how the serverless and decoupling services can be used to build and improve the functionality of both your architectures and the scenarios presented on the exam.
      - Evaluate the needs from the questions. And by understanding how the services work, know what will be best for the various implementations you encounter.
      - Given a set of use cases and knowing the capabilities of different AWS services, you should know how to design the appropriate type of architecture to meet the requirements. A wide variety of patterns including event-driven, microservices, and multi-tiered architectures might apply, but some will be more appropriate based on the user's needs. This task statement requires you to have depth and knowledge across API Gateway, Transfer Family, SQS, Secrets Manager, Application Load Balancers, SQS, Fargate, Lambda, Amazon Elastic Container Service, Elastic Kubernetes service, and more.


# Scaling
## ⚙️ What Is Scaling?

**Scaling** is the ability of a system to handle increasing or decreasing load. Systems scale to meet demand—whether it's growing traffic, data volume, or compute needs.

### 🔀 Types of Scaling
#### 🧱 Vertical Scaling (Scaling Up)
- **Definition**: Increasing the capacity of a single resource (e.g., upgrading to a larger EC2 instance).
- **Example**: Moving from `t3.medium` to `m5.2xlarge`.
- **Pros**:
  - Simple to implement.
  - No need to redesign architecture.
- **Cons**:
  - Limited by hardware ceiling.
  - Downtime may be required for resizing.
- **Cost Optimization**:
  - Use **burstable instances** (e.g., T-series) for spiky workloads.
  - Consider **auto-resize scripts** for predictable growth.

#### 🧮 Horizontal Scaling (Scaling Out)
- **Definition**: Adding more instances or nodes to distribute load.
- **Example**: Adding EC2 instances behind a load balancer.
- **Pros**:
  - Highly scalable and resilient.
  - Enables fault tolerance and availability.
- **Cons**:
  - Requires distributed architecture.
  - More complex to manage (e.g., session state, consistency).
- **Cost Optimization**:
  - Use **Auto Scaling Groups** to scale based on demand.
  - Leverage **Spot Instances** for non-critical workloads.
  - Use **serverless** (e.g., Lambda) for event-driven scaling.

### 🧠 Summary Table
| Scaling Type | Direction | Example | Cost Strategy |
|--------------|-----------|---------|----------------|
| **Vertical** | Scale up/down | Resize EC2 | Use burstable or scheduled resizing |
| **Horizontal** | Scale out/in | Add EC2 nodes | Use Auto Scaling, Spot, serverless |


## 🔄 What Is Elasticity?
**Elasticity** is the ability of a system to automatically adjust its capacity to match changing demand. It uses **automation** and **horizontal scaling** to add or remove resources as needed.

### 📈 Why Elasticity Matters
- **Demand is rarely linear**—it fluctuates over time.
- Elastic systems can **scale out** (add resources) during peak demand.
- They can **scale in** (remove resources) when demand drops.
- This ensures your environment is **right-sized** at all times.

### ⚙️ AWS Tools for Elasticity
- **Launch Configuration**: Defines how new instances are created.
- **Auto Scaling Groups**: Automatically adjust the number of EC2 instances based on metrics like CPU, memory, or custom CloudWatch alarms.

### ✅ Benefits of Elasticity
Elasticity supports key pillars of the **AWS Well-Architected Framework**:
- **Performance Efficiency**: Right resources at the right time.
- **Operational Excellence**: Automated scaling reduces manual intervention.
- **Cost Optimization**: Avoid over-provisioning and pay only for what you use.

### 🧠 Summary
Elasticity ensures your system can grow and shrink dynamically, optimizing for performance, reliability, and cost. It’s a core principle of cloud-native architecture.

## ⚙️ AWS Auto Scaling vs. Amazon EC2 Auto Scaling
| Feature | AWS Auto Scaling | Amazon EC2 Auto Scaling |
|--------|------------------|--------------------------|
| **Scope** | Multiple services (EC2, ECS, DynamoDB, Aurora) | Only EC2 instances |
| **Use Case** | Unified scaling across resources | Maintain EC2 instance count in Auto Scaling Groups |
| **Management** | Centralized scaling plans | Per-ASG configuration |
| **Scaling Policies** | Target tracking only | Multiple policy types (see below) |

- **AWS Auto Scaling** is ideal for managing scaling across multiple services from a single interface.
- **Amazon EC2 Auto Scaling** is more granular and flexible for EC2-specific workloads.

## 📈 EC2 Auto Scaling Policy Types

### 1. Target Tracking Scaling
- Automatically adjusts capacity to maintain a target metric (e.g., average CPU at 60%).
- Easiest to configure and recommended for most use cases.

### 2. Step Scaling
- Adds/removes instances in steps based on metric thresholds.
- Example: Add 1 instance if CPU > 60%, add 2 if CPU > 80%.

### 3. Simple Scaling
- Triggers scaling based on a single CloudWatch alarm.
- Includes cooldown period to prevent rapid scaling.

### 4. Scheduled Scaling
- Scales based on a defined schedule (e.g., scale out at 8 AM, scale in at 6 PM).
- Useful for predictable workloads like business hours.

---

# AWS Compute
## 🧠 AWS Compute Options: When to Use What

### 🧱 Amazon EC2 (Virtual Machines)
- **Use When**: You need full OS-level control, custom networking, or specialized hardware (e.g., GPUs).
- **Benefits**:
  - Broad instance types (general, compute, memory, storage, accelerated).
  - Supports placement groups for low-latency HPC workloads.
  - Advanced networking: Elastic Fabric Adapter (EFA), SR-IOV, Enhanced Networking.
- **Limitations**:
  - Manual scaling unless paired with Auto Scaling.
  - Longer startup time than containers or serverless.
  - Higher operational overhead.

### 📦 Containers (ECS, EKS, Fargate)
- **Use When**: You want portability, fast startup, and microservices architecture.
- **Benefits**:
  - Lightweight and fast to deploy.
  - Managed orchestration via ECS (simple) or EKS (Kubernetes).
  - Fargate removes need to manage EC2 instances.
- **Limitations**:
  - Requires containerization and orchestration knowledge.
  - Less control than EC2 for low-level tuning.

### ⚡ Serverless (AWS Lambda)
- **Use When**: You have short-lived, event-driven tasks with unpredictable demand.
- **Benefits**:
  - No infrastructure management.
  - Scales instantly and automatically.
  - Pay-per-invocation pricing.
- **Limitations**:
  - Limited execution time (15 min max).
  - Cold start latency.
  - Stateless by default; must integrate with external storage.

## 🚀 High Performance Computing (HPC)

**HPC** refers to solving complex problems using parallel processing across many CPUs or GPUs. It’s used in:
- Scientific simulations (e.g., weather, genomics)
- Financial modeling
- Machine learning training
- Rendering and animation

HPC workloads demand:
- High compute power
- Low-latency networking
- Fast storage throughput
- Scalable architecture

### 🚀 High Performance Computing (HPC) on EC2
#### ✅ Compute-Optimized (e.g., C6i, C7g)
- Designed for high CPU-to-memory ratio.
- Ideal for CPU-bound workloads like batch processing, analytics, and some HPC tasks.
- Not specialized for HPC, but often used in HPC pipelines when GPU or ultra-low latency isn’t required.

#### ✅ HPC-Specific Instances (e.g., Hpc6id, Hpc7g)
- Tuned for low-latency, high-throughput networking.
- Often paired with Elastic Fabric Adapter (EFA).
- Designed for MPI workloads, simulations, and tightly coupled compute clusters.

### ✅ GPU-Accelerated Instances (e.g., P5, G5, G6)
- Designed for workloads requiring massive parallelism and floating-point performance.
- Ideal for:
  - Machine learning training and inference
  - Scientific simulations
  - 3D rendering and video transcoding
- Support CUDA, TensorFlow, PyTorch, and other GPU frameworks.
- Often used with EFA for distributed training across multiple GPUs.

🧠 *GPU instances are a specialized subset of HPC, optimized for parallel compute rather than tightly coupled CPU clusters.*

### 🧠 Placement Groups: What and Why
Placement groups control how EC2 instances are physically arranged in the AWS data center to optimize for performance or fault tolerance.

| Type | Purpose | Use Case |
|------|---------|----------|
| **Cluster** | Pack instances close together for low latency and high throughput | HPC, ML training, tightly coupled workloads |
| **Spread** | Spread instances across hardware to reduce correlated failure risk | Critical workloads needing fault isolation |
| **Partition** | Divide instances into groups with independent failure domains | Large distributed systems (e.g., HDFS, Cassandra)

🧠 *For HPC, use Cluster Placement Groups to minimize latency between nodes.*

### 🔌 Networking Enhancements
#### ✅ Elastic Fabric Adapter (EFA)
- Low-latency, high-bandwidth networking for tightly coupled HPC workloads.
- Supports MPI (Message Passing Interface) and NCCL for distributed training.
- Only available on select instance types (e.g., C5n, Hpc6id, P5).

#### ✅ SR-IOV (Single Root I/O Virtualization)
- Enables Enhanced Networking by bypassing the hypervisor.
- Provides higher packet per second (PPS) and lower latency.
- Available on many instance types (e.g., C6i, M5n).

#### ✅ ENA (Elastic Network Adapter)
- Default for Enhanced Networking.
- Supports up to 100 Gbps throughput on some instances.

### 🧠 Matching AWS Services to Workload Needs
| Requirement       | Compute                  | Storage         | Networking                    | Database              |
|------------------|--------------------------|-----------------|-------------------------------|------------------------|
| **HPC**           | EC2 with EFA, Cluster PG | FSx for Lustre  | Enhanced Networking           | Amazon Aurora or custom |
| **Microservices** | ECS/EKS with Fargate     | S3 or EFS       | VPC + Service Discovery       | DynamoDB or Aurora     |
| **Event-driven**  | Lambda                   | S3 or DynamoDB  | API Gateway                   | DynamoDB               |
| **Legacy apps**   | EC2                      | EBS             | VPC                           | RDS or EC2-hosted DB   |
| **Burst workloads**| Lambda or Fargate       | S3              | CloudFront + API Gateway      | DynamoDB               |

### 🧠 Summary

- **Compute-optimized** = high CPU, good for general performance.
- **HPC instances** = tuned for distributed compute, often with EFA.
- **Placement groups** = control physical layout for latency or fault isolation.
- **Networking enhancements** = reduce latency and boost throughput for HPC clusters.

---

# 🗄️ Storage in Multi-Tier Architecture
In modern cloud-native design, storage is no longer one-size-fits-all. While relational databases were once the default for nearly every data need, they struggle at extreme scale and diverse access patterns.

AWS offers **purpose-built databases** tailored to specific workload requirements.

## 🧠 AWS Purpose-Built Database Options
| Service           | Type         | Ideal For |
|------------------|--------------|-----------|
| **Amazon RDS**    | Relational   | Traditional apps needing managed SQL databases (MySQL, PostgreSQL, SQL Server, etc.) |
| **Amazon Aurora** | Relational (Cloud-native) | High availability, performance, and scalability with MySQL/PostgreSQL compatibility |
| **Amazon DynamoDB** | NoSQL (Key-Value & Document) | Low-latency, high-scale workloads like gaming, IoT, and real-time analytics |
| **Amazon Redshift** | Data Warehouse | Complex queries across large datasets for BI and analytics |

### ✅ Why Purpose-Built Matters
- **Performance**: Each service is optimized for its data model and access pattern.
- **Scalability**: Services like DynamoDB and Aurora scale automatically to meet demand.
- **Cost Optimization**: Avoid over-provisioning by using the right tool for the job.
- **Operational Simplicity**: Managed services reduce overhead and improve reliability.

### 🧠 Summary
Choosing the right database in a multi-tier architecture means aligning your data model, query patterns, and scalability needs with the appropriate AWS service. Purpose-built databases help you avoid bottlenecks and optimize for performance, cost, and resilience.

## 🧠 Scaling and Resiliency in AWS Database Services
When designing for performance and availability, it's important to understand the trade-offs between **Read Replicas**, **Multi-AZ deployments**, and **caching**.

### 🔁 Read Replicas
A read replica is a read-only copy of your primary database that’s kept in sync via asynchronous replication. It’s designed to offload read traffic—not writes—and improve performance for read-heavy workloads.

#### Key Traits:
- Read-only: You can’t write to it.
- Asynchronous: Updates from the primary DB arrive with a slight delay (replication lag).
- Scalable: You can create up to 15 replicas per RDS instance.
- Location: Can be in the same AZ, a different AZ, or even a different region for geo-distributed reads.

### 🔁 RDS Read Replicas vs. Multi-AZ
| Feature            | Read Replicas                  | Multi-AZ Deployment              |
|--------------------|--------------------------------|----------------------------------|
| **Purpose**         | Scale reads, improve performance | High availability and failover   |
| **Access**          | Direct read access              | Standby is not accessible        |
| **Performance Gain**| ✅ Yes                          | ❌ No                             |
| **Availability Gain**| ✅ Yes (limited)               | ✅ Yes (primary/standby failover) |
| **Use Case**        | Offload read-heavy workloads    | Protect against instance failure |

🧠 *Read Replicas help with performance but are not a substitute for caching.*

### ⚠️ Limitations of Read Replicas
- Still require:
  - Database connection
  - Authentication
  - SQL parsing and optimization
  - Locking and transaction overhead
- Replication lag can affect consistency.
- Not suitable for ultra-low latency or high-throughput caching needs.

### 📈 Read Replicas don't scale automatically
It’s not automatic like Lambda or Fargate.

You must:
- Manually create each read replica.
- Decide how many replicas you need based on expected read traffic.
- Optionally place them in different AZs or regions for resilience or latency optimization.

*🧠 Think of it like provisioning extra read-only servers to help your main database breathe.*

### 🔀 Manually Redirect Read Queries
Your application must explicitly send read queries to the replica endpoints.

#### Example:
- Your primary DB endpoint: mydb.cluster-xyz.us-east-1.rds.amazonaws.com
- Your read replica endpoint: mydb-replica1.us-east-1.rds.amazonaws.com

You must configure your app (or ORM) to:
- Send write queries to the primary.
- Send read queries to one or more replicas.

There’s no automatic routing—you control the traffic split.

#### ⚙️ Load Balancing Strategies
#### 1. Application-Side Routing
- Implement logic in your app or Lambda to:
  - Round-robin across replicas.
  - Randomize selection.
  - Use weighted distribution based on replica capacity.
- Requires shared config and coordination across services.

#### 2. DNS-Based Load Balancing with Route 53
- Create a Route 53 record set with multiple replica endpoints.
- Use:
  - Weighted routing: Assign weights to replicas.
  - Latency-based routing: Route to the lowest-latency replica.
- Pros:
  - Centralized control.
  - Works across distributed services.
- Cons:
  - DNS caching can cause uneven distribution.
  - No health checks for replica lag.

#### 3. Proxy Layer (e.g., Pgpool-II, ProxySQL)
- Deploy a database proxy that:
  - Accepts read queries.
  - Routes them to replicas based on load, health, or round-robin.
- Pros:
  - Transparent to application.
  - Can monitor replica lag and failover.
- Cons:
  - Adds infrastructure complexity.
  - Requires EC2 or container hosting.

## 🚀 Caching Options in AWS
| Service               | Type         | Use Case |
|-----------------------|--------------|----------|
| **Amazon ElastiCache**| In-memory (Redis/Memcached) | Fast access to frequently used data |
| **Amazon CloudFront** | CDN          | Cache static content at edge locations |
| **DynamoDB Accelerator (DAX)** | In-memory cache for DynamoDB | Microsecond latency for read-heavy apps |

### ✅ When to Use Caching
- To reduce load on databases.
- To improve latency for frequently accessed data.
- To avoid repeated computation or query parsing.

### 🧠 Summary
- Use **Read Replicas** to scale reads and improve performance.
- Use **Multi-AZ** for high availability and automatic failover.
- Use **caching** (ElastiCache, CloudFront, DAX) to reduce latency and offload backend systems.
- Understand that each layer adds value but serves different purposes—combine them for optimal performance and resiliency.
