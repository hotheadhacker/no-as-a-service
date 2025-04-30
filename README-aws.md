# 🚀 No-as-a-Service AWS Deployment

This guide explains how to deploy No-as-a-Service on AWS using serverless architecture with AWS Lambda and API Gateway.

## Prerequisites

- AWS Account
- AWS CLI installed and configured
- SAM CLI installed
- Node.js 18.x or later

## 📦 Deployment Steps

### 1. Clone this repository
```bash
git clone https://github.com/hotheadhacker/no-as-a-service.git
cd no-as-a-service
```

### 2. Create S3 Bucket
```bash
npm run create-s3
```
This will create a unique S3 bucket for your deployment artifacts.

### 3. Package the Application
```bash
npm run package
```
This command packages your application and uploads it to the S3 bucket.

### 4. Deploy to AWS
```bash
npm run deploy
```
This will deploy your application using AWS SAM with the following stack name: `no-as-service`

## 🏗️ Infrastructure

The service is deployed using these AWS components:
- AWS Lambda (Node.js 18.x runtime)
- Amazon API Gateway
- IAM Roles and Policies

### Configuration Details
- Memory: 128MB
- Timeout: 3 seconds
- Architecture: x86_64
- Endpoint: GET /no

## 📊 Outputs

After deployment, you'll receive:
1. API Gateway endpoint URL
2. Lambda Function ARN

The API will be available at:
```
https://{api-id}.execute-api.{region}.amazonaws.com/Prod/no
```

## 📝 CloudWatch Logs

The Lambda function logs are automatically sent to CloudWatch Logs. You can monitor them in the AWS Console under CloudWatch > Log Groups > /aws/lambda/no-as-a-service-NoAsAServiceFunction-{id}

## 💰 Cost Considerations

The serverless architecture means you only pay for:
- Lambda function invocations
- API Gateway requests
- Data transfer

With AWS Free Tier, you get:
- 1 million Lambda requests per month
- 1 million API Gateway requests per month

## 🔄 Updating the Service

To update the deployed service:
1. Make your changes
2. Run `npm run package` to package your changes
3. Run `npm run deploy` to deploy the updates

## 🧹 Cleanup

To remove all deployed resources:
```bash
npm run cleanup
```

This will delete the CloudFormation stack and all associated resources.
