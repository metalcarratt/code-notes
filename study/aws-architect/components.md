List of components:
- [Lambda](#lambda)
- [Dynamo DB](#dynamodb)
- [SQS](#sqs)
- [API Gateway](#apigateway)
- [ECS](#ecs)
- [EKS](#eks)
- [Fargate](#fargate)
- [Sagemaker](#sagemaker)
- [Glue](glue)
- [Athena](#athena)
- [AWS Step Functions](#aws-step-functions)
- [Amazon EventBridge](amazon-eventbridge)
- [AWS Transfer Family](aws-transfer-family)
- [AWS Secrets Manager](aws-secrets-manager)
- [ALB](#alb)
- [NLB](#nlb)
- [S3](#s3)
- [Aurora](#aurora)
- [ElastiCache](#elasticache)
- [Amplify](#amplify)
- [CloudFront](#cloudfront)

# Lambda
Stateless compute triggered by events
- Lambda scales **automatically** with incoming requests or events.
- Each new request triggers a new instance (up to concurrency limits).
- Use **SQS, EventBridge, or API Gateway** to trigger Lambda asynchronously or synchronously.

# DynamoDB
Serverless NoSQL store for fast, scalable data access

# SQS
Simple Queue Service
- Message queue for asynchronous decoupling
- Durable message queue for decoupling producers and consumers
- **Producers** and **consumers** can scale **independently**.
- SQS supports **high throughput** (thousands of messages per second).
- Use **Lambda triggers** or **EC2/ECS consumers** to process messages.
- Combine with **DLQs (Dead Letter Queues)** for error handling.

# SNS
Simple Notification Service
- Pub/Sub messaging for fan-out delivery

# API Gateway
Front door for synchronous APIs
- Front door for RESTful APIs

# ECS
Elastic Computer Service
- Container orchestration for microservices and hybrid workloads

# EKS
Elasitc Kubernetes Service
-Container orchestration for microservices and hybrid workloads

# Fargate
Serverless containers for long-running or batch tasks

# SageMaker

# Glue

# Athena

# AWS step functions
Workflow orchestration across services
- Define workflows as **state machines** with steps that:
  - Invoke **Lambda functions**
  - Call **APIs**
  - Interact with **DynamoDB**, **SQS**, **SNS**, and more
- Include **retry logic**, **error handling**, and **conditional branching**
- Automate **long-running**, **multi-step**, or **event-driven** processes

# Amazon EventBridge
Event bus for loosely coupled service communication

# AWS Transfer Family
Managed file transfer with event triggers

# AWS Secrets Manager
Secure credential storage and rotation

# ALB
Application Load Balancer
- Synchronous routing with health checks and path-based rules

# NLB

# S3

# Aurora

# ElastiCache

# Amplify

# CloudFront
