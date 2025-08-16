import { Question } from '../types';

export const microsoftQuestions: Question[] = [
  // ===== CLOUD CONCEPTS (25-30%) - 30 questions =====
  
  // Multiple Choice Questions (Single Answer)
  {
    id: 'microsoft-cloud-1',
    sectionId: 'cloud-concepts',
    question: 'What is the primary benefit of cloud computing over traditional on-premises infrastructure?',
    questionType: 'single-choice',
    options: [
      'Lower initial capital expenditure',
      'Complete elimination of IT staff',
      'Guaranteed 100% uptime',
      'No need for security measures'
    ],
    correctAnswer: 0,
    explanation: 'Cloud computing reduces capital expenditure by eliminating the need to purchase and maintain physical hardware.'
  },
  {
    id: 'microsoft-cloud-2',
    sectionId: 'cloud-concepts',
    question: 'Which cloud service model provides the most control to the customer?',
   
     questionType: 'single-choice',
    options: [
      'Software as a Service (SaaS)',
      'Platform as a Service (PaaS)',
      'Infrastructure as a Service (IaaS)',
      'Function as a Service (FaaS)'
    ],
    correctAnswer: 2,
    explanation: 'IaaS provides the most control as customers manage the operating system, applications, and data while the cloud provider manages the infrastructure.'
  },
  {
    id: 'microsoft-cloud-3',
    sectionId: 'cloud-concepts',
    question: 'What is the main characteristic of a public cloud?',
    questionType: 'single-choice',
    options: [
      'It is owned by a single organization',
      'It is available to the general public',
      'It is always free to use',
      'It is located on-premises'
    ],
    correctAnswer: 1,
    explanation: 'A public cloud is available to the general public and owned by a third-party cloud service provider.'
  },
  {
    id: 'microsoft-cloud-4',
    sectionId: 'cloud-concepts',
    question: 'Which cloud deployment model is best for organizations with strict compliance requirements?',
    questionType: 'single-choice',
    options: [
      'Public cloud',
      'Private cloud',
      'Hybrid cloud',
      'Community cloud'
    ],
    correctAnswer: 1,
    explanation: 'Private clouds offer the highest level of control and security, making them suitable for strict compliance requirements.'
  },
  {
    id: 'microsoft-cloud-5',
    sectionId: 'cloud-concepts',
    question: 'What is the primary advantage of cloud elasticity?',
    questionType: 'single-choice',
    options: [
      'Automatic backup and recovery',
      'Pay-as-you-go pricing',
      'Automatic scaling based on demand',
      'Geographic distribution'
    ],
    correctAnswer: 2,
    explanation: 'Cloud elasticity allows resources to automatically scale up or down based on demand, ensuring optimal performance and cost efficiency.'
  },
  
  // True/False Questions
  {
    id: 'microsoft-cloud-6',
    sectionId: 'cloud-concepts',
    question: 'Cloud computing eliminates the need for physical data centers.',
   
     questionType: 'true-false',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    explanation: 'False. While cloud computing reduces the need for on-premises data centers, organizations may still maintain some physical infrastructure for specific requirements.'
  },
  {
    id: 'microsoft-cloud-7',
    sectionId: 'cloud-concepts',
    question: 'All cloud services are subscription-based.',
    questionType: 'single-choice',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    explanation: 'False. While many cloud services use subscription models, some offer pay-as-you-go pricing, and others may have one-time purchase options.'
  },
  {
    id: 'microsoft-cloud-8',
    sectionId: 'cloud-concepts',
    question: 'Cloud computing always provides better security than on-premises solutions.',
    questionType: 'single-choice',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    explanation: 'False. Security depends on implementation and configuration. Cloud providers offer security tools, but customers are responsible for securing their applications and data.'
  },
  
  // Scenario-based Questions
  {
    id: 'microsoft-cloud-9',
    sectionId: 'cloud-concepts',
    question: 'A startup company wants to launch a new web application with minimal upfront costs and the ability to scale quickly. Which cloud service model would be most appropriate?',
    questionType: 'single-choice',
    options: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Function as a Service (FaaS)'
    ],
    correctAnswer: 1,
    explanation: 'PaaS would be most appropriate as it provides the platform and tools for development while handling infrastructure management, allowing the startup to focus on application development with minimal upfront costs.'
  },
  {
    id: 'microsoft-cloud-10',
    sectionId: 'cloud-concepts',
    question: 'A financial services company needs to maintain strict regulatory compliance while modernizing their IT infrastructure. Which cloud deployment model should they consider?',
    questionType: 'single-choice',
    options: [
      'Public cloud only',
      'Private cloud only',
      'Hybrid cloud',
      'Community cloud'
    ],
    correctAnswer: 2,
    explanation: 'A hybrid cloud approach would allow the company to keep sensitive data in a private cloud while leveraging public cloud benefits for less critical workloads, maintaining compliance while modernizing.'
  },
  {
    id: 'microsoft-cloud-11',
    sectionId: 'cloud-concepts',
    question: 'What is the main benefit of cloud high availability?',
    questionType: 'single-choice',
    options: [
      'Reduced costs',
      'Improved performance',
      'Minimized downtime',
      'Better security'
    ],
    correctAnswer: 2,
    explanation: 'High availability in cloud computing minimizes downtime by providing redundant systems and automatic failover capabilities.'
  },
  {
    id: 'microsoft-cloud-12',
    sectionId: 'cloud-concepts',
    question: 'Which cloud characteristic allows organizations to pay only for the resources they use?',
    questionType: 'single-choice',
    options: [
      'Scalability',
      'Elasticity',
      'Measured service',
      'On-demand self-service'
    ],
    correctAnswer: 2,
    explanation: 'Measured service allows organizations to pay only for the resources they actually use, providing cost transparency and optimization.'
  },
  {
    id: 'microsoft-cloud-13',
    sectionId: 'cloud-concepts',
    question: 'What is the primary advantage of cloud disaster recovery?',
    questionType: 'single-choice',
    options: [
      'Lower costs',
      'Faster recovery times',
      'No need for backup planning',
      'Automatic data protection'
    ],
    correctAnswer: 1,
    explanation: 'Cloud disaster recovery typically provides faster recovery times compared to traditional on-premises solutions due to automated processes and redundant infrastructure.'
  },
  {
    id: 'microsoft-cloud-14',
    sectionId: 'cloud-concepts',
    question: 'Which cloud service model is best for developers who want to focus on application development?',
    questionType: 'single-choice',
    options: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Database as a Service (DBaaS)'
    ],
    correctAnswer: 1,
    explanation: 'PaaS provides the platform and tools for application development, allowing developers to focus on coding rather than infrastructure management.'
  },
  {
    id: 'microsoft-cloud-15',
    sectionId: 'cloud-concepts',
    question: 'What is the main benefit of cloud geographic distribution?',
   
     questionType: 'single-choice',
    options: [
      'Lower latency for global users',
      'Reduced costs',
      'Better security',
      'Simplified management'
    ],
    correctAnswer: 0,
    explanation: 'Geographic distribution reduces latency for global users by placing resources closer to where they are needed.'
  },

  // Multiple Choice Question (multiple answers)
  {
    id: 'microsoft-cloud-16',
    sectionId: 'cloud-concepts',
    question: 'Which of the following are benefits of cloud computing? (Select all that apply)',
   
     questionType: 'multiple-choice',
    options: [
      'Scalability',
      'Cost reduction',
      'High availability',
      'Automatic backups',
      'Geographic distribution'
    ],
    correctAnswer: [0, 1, 2, 3, 4],
    explanation: 'All of these are key benefits of cloud computing: scalability, cost reduction, high availability, automatic backups, and geographic distribution.'
  },

  // Drag & Drop Question
  {
    id: 'microsoft-cloud-17',
    sectionId: 'cloud-concepts',
    question: 'Match the cloud service models with their descriptions:',
   
     questionType: 'drag-drop',
    options: [
      'IaaS - Infrastructure as a Service',
      'PaaS - Platform as a Service', 
      'SaaS - Software as a Service'
    ],
    correctAnswer: [0, 1, 2],
    dragDropItems: [
      'Provides virtual machines and storage',
      'Provides development platform and tools',
      'Provides ready-to-use applications'
    ],
    explanation: 'IaaS provides infrastructure (VMs, storage), PaaS provides platform and tools for development, SaaS provides ready-to-use applications.'
  },

  // Multiple Choice Questions (Multiple Answers)
  {
    id: 'microsoft-cloud-18',
    sectionId: 'cloud-concepts',
    question: 'Which of the following are characteristics of cloud computing? (Select all that apply)',
    questionType: 'multiple-choice',
    options: [
      'On-demand self-service',
      'Broad network access',
      'Resource pooling',
      'Rapid elasticity',
      'Measured service'
    ],
    correctAnswer: [0, 1, 2, 3, 4],
    explanation: 'All of these are the five essential characteristics of cloud computing as defined by NIST.'
  },
  {
    id: 'microsoft-cloud-19',
    sectionId: 'cloud-concepts',
    question: 'What are the benefits of cloud computing for businesses? (Select all that apply)',
    questionType: 'multiple-choice',
    options: [
      'Reduced capital expenditure',
      'Improved scalability',
      'Enhanced security',
      'Faster time to market',
      'Geographic distribution'
    ],
    correctAnswer: [0, 1, 3, 4],
    explanation: 'Cloud computing offers reduced capital expenditure, improved scalability, faster time to market, and geographic distribution. Security is a shared responsibility.'
  },

  // True/False Questions
  {
    id: 'microsoft-cloud-20',
    sectionId: 'cloud-concepts',
    question: 'Cloud computing always provides better security than on-premises solutions.',
    questionType: 'true-false',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    explanation: 'False. Security in cloud computing is a shared responsibility. While cloud providers offer robust security, customers must also implement proper security measures.'
  },
  {
    id: 'microsoft-cloud-21',
    sectionId: 'cloud-concepts',
    question: 'All cloud services are subscription-based.',
    questionType: 'true-false',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    explanation: 'False. While many cloud services use subscription models, some offer pay-as-you-go pricing or one-time purchases.'
  },
  {
    id: 'microsoft-cloud-22',
    sectionId: 'cloud-concepts',
    question: 'Cloud computing eliminates the need for IT staff.',
    questionType: 'true-false',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    explanation: 'False. Cloud computing changes the role of IT staff but doesn\'t eliminate the need for them. IT staff focus on cloud management and optimization.'
  },

  // Scenario-based Questions
  {
    id: 'microsoft-cloud-23',
    sectionId: 'cloud-concepts',
    question: 'A startup company wants to launch a new web application quickly without investing in expensive infrastructure. They expect rapid growth but are unsure about the exact demand. Which cloud service model would be most suitable?',
    questionType: 'single-choice',
    options: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Function as a Service (FaaS)'
    ],
    correctAnswer: 1,
    explanation: 'PaaS is most suitable as it provides the platform and tools needed for development while handling infrastructure management, allowing the startup to focus on application development.'
  },
  {
    id: 'microsoft-cloud-24',
    sectionId: 'cloud-concepts',
    question: 'A financial services company has strict compliance requirements and needs to maintain control over their data. They want to leverage cloud benefits while ensuring data sovereignty. Which cloud deployment model should they consider?',
    questionType: 'single-choice',
    options: [
      'Public cloud',
      'Private cloud',
      'Hybrid cloud',
      'Community cloud'
    ],
    correctAnswer: 2,
    explanation: 'Hybrid cloud allows the company to keep sensitive data in a private cloud while leveraging public cloud resources for less critical workloads.'
  },
  {
    id: 'microsoft-cloud-25',
    sectionId: 'cloud-concepts',
    question: 'An e-commerce company experiences seasonal traffic spikes during holidays. They need a solution that can automatically handle increased load without manual intervention. Which cloud characteristic is most important?',
    questionType: 'single-choice',
    options: [
      'Resource pooling',
      'Rapid elasticity',
      'Measured service',
      'Broad network access'
    ],
    correctAnswer: 1,
    explanation: 'Rapid elasticity allows the system to automatically scale up during traffic spikes and scale down during normal periods, ensuring optimal performance and cost efficiency.'
  },

  // Additional Single Choice Questions
  {
    id: 'microsoft-cloud-26',
    sectionId: 'cloud-concepts',
    question: 'What is the main advantage of cloud computing for disaster recovery?',
    questionType: 'single-choice',
    options: [
      'Lower costs',
      'Geographic redundancy',
      'Faster recovery times',
      'All of the above'
    ],
    correctAnswer: 3,
    explanation: 'Cloud computing provides all these benefits for disaster recovery: lower costs, geographic redundancy, and faster recovery times.'
  },
  {
    id: 'microsoft-cloud-27',
    sectionId: 'cloud-concepts',
    question: 'Which cloud service model provides the highest level of abstraction?',
    questionType: 'single-choice',
    options: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Function as a Service (FaaS)'
    ],
    correctAnswer: 2,
    explanation: 'SaaS provides the highest level of abstraction as users only interact with the application, with all underlying infrastructure and platform management handled by the provider.'
  },
  {
    id: 'microsoft-cloud-28',
    sectionId: 'cloud-concepts',
    question: 'What is the primary benefit of cloud computing for global businesses?',
    questionType: 'single-choice',
    options: [
      'Lower latency for global users',
      'Reduced infrastructure costs',
      'Improved security',
      'Simplified management'
    ],
    correctAnswer: 0,
    explanation: 'Cloud computing allows businesses to deploy applications closer to their users globally, reducing latency and improving user experience.'
  },
  {
    id: 'microsoft-cloud-29',
    sectionId: 'cloud-concepts',
    question: 'Which cloud characteristic enables pay-as-you-go pricing?',
    questionType: 'single-choice',
    options: [
      'On-demand self-service',
      'Broad network access',
      'Resource pooling',
      'Measured service'
    ],
    correctAnswer: 3,
    explanation: 'Measured service enables pay-as-you-go pricing by monitoring and reporting resource usage, allowing for transparent billing based on actual consumption.'
  },
  {
    id: 'microsoft-cloud-30',
    sectionId: 'cloud-concepts',
    question: 'What is the main difference between cloud computing and traditional hosting?',
    questionType: 'single-choice',
    options: [
      'Cloud is always cheaper',
      'Cloud provides on-demand scalability',
      'Cloud is always more secure',
      'Cloud requires no management'
    ],
    correctAnswer: 1,
    explanation: 'The main difference is that cloud computing provides on-demand scalability, allowing resources to be provisioned and deprovisioned automatically based on demand.'
  },

  // ===== AZURE ARCHITECTURE & SERVICES (35-40%) - 30 questions =====
  
  // Multiple Choice Questions
  {
    id: 'microsoft-azure-1',
    sectionId: 'azure-architecture-services',
    question: 'What is Azure Virtual Machine (VM)?',
    questionType: 'single-choice',
    options: [
      'A cloud-based database service',
      'A scalable cloud computing resource',
      'A networking service',
      'A storage service'
    ],
    correctAnswer: 1,
    explanation: 'Azure Virtual Machine is a scalable cloud computing resource that provides on-demand computing resources.'
  },
  {
    id: 'microsoft-azure-2',
    sectionId: 'azure-architecture-services',
    question: 'Which Azure service is used for serverless computing?',
    questionType: 'single-choice',
    options: [
      'Azure Virtual Machines',
      'Azure App Service',
      'Azure Functions',
      'Azure Container Instances'
    ],
    correctAnswer: 2,
    explanation: 'Azure Functions is a serverless compute service that allows you to run code without managing infrastructure.'
  },
  {
    id: 'microsoft-azure-3',
    sectionId: 'azure-architecture-services',
    question: 'What is Azure Blob Storage primarily used for?',
    questionType: 'single-choice',
    options: [
      'Storing structured data',
      'Storing unstructured data',
      'Storing relational databases',
      'Storing virtual machines'
    ],
    correctAnswer: 1,
    explanation: 'Azure Blob Storage is designed for storing large amounts of unstructured data such as images, videos, and documents.'
  },
  {
    id: 'microsoft-azure-4',
    sectionId: 'azure-architecture-services',
    question: 'Which Azure service provides managed SQL databases?',
    questionType: 'single-choice',
    options: [
      'Azure SQL Database',
      'Azure Cosmos DB',
      'Azure Table Storage',
      'Azure Data Lake'
    ],
    correctAnswer: 0,
    explanation: 'Azure SQL Database is a fully managed relational database service that provides SQL Server capabilities in the cloud.'
  },
  {
    id: 'microsoft-azure-5',
    sectionId: 'azure-architecture-services',
    question: 'What is Azure Virtual Network used for?',
    questionType: 'single-choice',
    options: [
      'Storing data',
      'Running applications',
      'Connecting Azure resources',
      'Managing databases'
    ],
    correctAnswer: 2,
    explanation: 'Azure Virtual Network allows you to connect Azure resources to each other and to on-premises networks.'
  },
  
  // True/False Questions
  {
    id: 'microsoft-azure-6',
    sectionId: 'azure-architecture-services',
    question: 'Azure App Service supports multiple programming languages.',
    questionType: 'single-choice',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 0,
    explanation: 'True. Azure App Service supports multiple programming languages including .NET, Java, Node.js, Python, PHP, and more.'
  },
  {
    id: 'microsoft-azure-7',
    sectionId: 'azure-architecture-services',
    question: 'Azure Functions automatically scale based on demand.',
    questionType: 'single-choice',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 0,
    explanation: 'True. Azure Functions automatically scale based on the number of incoming requests, scaling to zero when not in use.'
  },
  {
    id: 'microsoft-azure-8',
    sectionId: 'azure-architecture-services',
    question: 'All Azure services are available in all regions.',
    questionType: 'single-choice',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    explanation: 'False. Not all Azure services are available in all regions. Service availability varies by region.'
  },
  
  // Scenario-based Questions
  {
    id: 'microsoft-azure-9',
    sectionId: 'azure-architecture-services',
    question: 'A company needs to store millions of user profile images that will be accessed frequently. Which Azure storage service would be most appropriate?',
    questionType: 'single-choice',
    options: [
      'Azure SQL Database',
      'Azure Blob Storage',
      'Azure Table Storage',
      'Azure Cosmos DB'
    ],
    correctAnswer: 1,
    explanation: 'Azure Blob Storage would be most appropriate for storing millions of user profile images as it is designed for unstructured data like images and provides high availability and durability.'
  },
  {
    id: 'microsoft-azure-10',
    sectionId: 'azure-architecture-services',
    question: 'A development team wants to deploy a web application without managing servers. Which Azure service should they use?',
    questionType: 'single-choice',
    options: [
      'Azure Virtual Machines',
      'Azure App Service',
      'Azure Container Instances',
      'Azure Functions'
    ],
    correctAnswer: 1,
    explanation: 'Azure App Service would be the best choice as it provides a fully managed platform for hosting web applications without requiring server management.'
  },
  {
    id: 'microsoft-azure-11',
    sectionId: 'azure-architecture-services',
    question: 'What is Azure Container Instances used for?',
    questionType: 'single-choice',
    options: [
      'Running containers without managing servers',
      'Storing container images',
      'Managing virtual machines',
      'Hosting web applications'
    ],
    correctAnswer: 0,
    explanation: 'Azure Container Instances allows you to run containers without managing servers, providing a simple way to run containerized applications.'
  },
  {
    id: 'microsoft-azure-12',
    sectionId: 'azure-architecture-services',
    question: 'Which Azure service is best for real-time data processing?',
    questionType: 'single-choice',
    options: [
      'Azure SQL Database',
      'Azure Stream Analytics',
      'Azure Blob Storage',
      'Azure Virtual Machines'
    ],
    correctAnswer: 1,
    explanation: 'Azure Stream Analytics is designed for real-time data processing and analytics, making it ideal for processing streaming data.'
  },
  {
    id: 'microsoft-azure-13',
    sectionId: 'azure-architecture-services',
    question: 'What is Azure Cosmos DB primarily used for?',
    questionType: 'single-choice',
    options: [
      'Storing relational data',
      'Storing NoSQL data',
      'Storing file data',
      'Storing virtual machines'
    ],
    correctAnswer: 1,
    explanation: 'Azure Cosmos DB is a globally distributed, multi-model database service designed for NoSQL data with high availability and low latency.'
  },
  {
    id: 'microsoft-azure-14',
    sectionId: 'azure-architecture-services',
    question: 'Which Azure service provides managed Kubernetes?',
    questionType: 'single-choice',
    options: [
      'Azure Container Instances',
      'Azure Kubernetes Service (AKS)',
      'Azure App Service',
      'Azure Functions'
    ],
    correctAnswer: 1,
    explanation: 'Azure Kubernetes Service (AKS) provides managed Kubernetes orchestration for containerized applications.'
  },
  {
    id: 'microsoft-azure-15',
    sectionId: 'azure-architecture-services',
    question: 'What is Azure Load Balancer used for?',
    questionType: 'single-choice',
    options: [
      'Storing data',
      'Distributing network traffic',
      'Running applications',
      'Managing databases'
    ],
    correctAnswer: 1,
    explanation: 'Azure Load Balancer distributes incoming network traffic across multiple virtual machines to ensure high availability.'
  },
  {
    id: 'microsoft-azure-16',
    sectionId: 'azure-architecture-services',
    question: 'Which Azure service is best for hosting microservices?',
    questionType: 'single-choice',
    options: [
      'Azure Virtual Machines',
      'Azure App Service',
      'Azure Service Fabric',
      'Azure Functions'
    ],
    correctAnswer: 2,
    explanation: 'Azure Service Fabric is designed for building and managing microservices applications with high availability and scalability.'
  },
  {
    id: 'microsoft-azure-17',
    sectionId: 'azure-architecture-services',
    question: 'What is Azure Data Lake Storage used for?',
    questionType: 'single-choice',
    options: [
      'Storing structured data only',
      'Storing big data analytics',
      'Storing virtual machines',
      'Storing web applications'
    ],
    correctAnswer: 1,
    explanation: 'Azure Data Lake Storage is designed for big data analytics workloads, providing scalable storage for large amounts of data.'
  },
  {
    id: 'microsoft-azure-18',
    sectionId: 'azure-architecture-services',
    question: 'Which Azure service provides managed Redis caching?',
    questionType: 'single-choice',
    options: [
      'Azure Cache for Redis',
      'Azure SQL Database',
      'Azure Cosmos DB',
      'Azure Blob Storage'
    ],
    correctAnswer: 0,
    explanation: 'Azure Cache for Redis provides managed Redis caching service for improving application performance.'
  },
  {
    id: 'microsoft-azure-19',
    sectionId: 'azure-architecture-services',
    question: 'What is Azure Event Hubs used for?',
    questionType: 'single-choice',
    options: [
      'Storing data',
      'Processing real-time data streams',
      'Running applications',
      'Managing databases'
    ],
    correctAnswer: 1,
    explanation: 'Azure Event Hubs is a big data streaming platform and event ingestion service for processing real-time data streams.'
  },
  {
    id: 'microsoft-azure-20',
    sectionId: 'azure-architecture-services',
    question: 'Which Azure service provides managed file shares?',
    questionType: 'single-choice',
    options: [
      'Azure Blob Storage',
      'Azure File Storage',
      'Azure Table Storage',
      'Azure Cosmos DB'
    ],
    correctAnswer: 1,
    explanation: 'Azure File Storage provides managed file shares that can be accessed using standard SMB protocol.'
  },

  // Multiple Choice Questions (Multiple Answers)
  {
    id: 'microsoft-azure-21',
    sectionId: 'azure-architecture-services',
    question: 'Which Azure services are used for data analytics? (Select all that apply)',
    questionType: 'multiple-choice',
    options: [
      'Azure Data Lake Storage',
      'Azure Synapse Analytics',
      'Azure HDInsight',
      'Azure Databricks',
      'Azure Stream Analytics'
    ],
    correctAnswer: [0, 1, 2, 3, 4],
    explanation: 'All of these Azure services are designed for data analytics workloads, each serving different aspects of the analytics pipeline.'
  },
  {
    id: 'microsoft-azure-22',
    sectionId: 'azure-architecture-services',
    question: 'What are the benefits of using Azure managed services? (Select all that apply)',
    questionType: 'multiple-choice',
    options: [
      'Reduced operational overhead',
      'Automatic scaling',
      'Built-in security features',
      'High availability',
      'Cost optimization'
    ],
    correctAnswer: [0, 1, 2, 3, 4],
    explanation: 'Azure managed services provide all these benefits: reduced operational overhead, automatic scaling, built-in security, high availability, and cost optimization.'
  },

  // True/False Questions
  {
    id: 'microsoft-azure-23',
    sectionId: 'azure-architecture-services',
    question: 'Azure Virtual Machines are always more expensive than Azure App Service.',
    questionType: 'true-false',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    explanation: 'False. The cost depends on the specific use case. VMs can be more cost-effective for long-running workloads, while App Service is better for web applications.'
  },
  {
    id: 'microsoft-azure-24',
    sectionId: 'azure-architecture-services',
    question: 'All Azure services support automatic scaling.',
    questionType: 'true-false',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    explanation: 'False. Not all Azure services support automatic scaling. Some services require manual scaling configuration.'
  },

  // Drag & Drop Questions
  {
    id: 'microsoft-azure-25',
    sectionId: 'azure-architecture-services',
    question: 'Match the Azure services with their primary use cases:',
    questionType: 'drag-drop',
    options: [
      'Azure Virtual Machines',
      'Azure App Service',
      'Azure Functions',
      'Azure Container Instances'
    ],
    correctAnswer: [0, 1, 2, 3],
    dragDropItems: [
      'Full control over operating system and applications',
      'Managed platform for web applications',
      'Serverless event-driven computing',
      'Quick container deployment without orchestration'
    ],
    explanation: 'VMs provide full control, App Service is for managed web apps, Functions for serverless computing, and Container Instances for quick container deployment.'
  },

  // Scenario-based Questions
  {
    id: 'microsoft-azure-26',
    sectionId: 'azure-architecture-services',
    question: 'A company needs to process large amounts of IoT sensor data in real-time and store the results for historical analysis. Which Azure services would be most appropriate?',
    questionType: 'single-choice',
    options: [
      'Azure Virtual Machines and Azure SQL Database',
      'Azure IoT Hub, Azure Stream Analytics, and Azure Data Lake Storage',
      'Azure App Service and Azure Blob Storage',
      'Azure Functions and Azure Cosmos DB'
    ],
    correctAnswer: 1,
    explanation: 'Azure IoT Hub for device connectivity, Azure Stream Analytics for real-time processing, and Azure Data Lake Storage for historical data storage would be the most appropriate combination.'
  },
  {
    id: 'microsoft-azure-27',
    sectionId: 'azure-architecture-services',
    question: 'A startup wants to build a scalable web application that can handle traffic spikes. They have limited DevOps expertise. Which Azure service would be best?',
    questionType: 'single-choice',
    options: [
      'Azure Virtual Machines',
      'Azure App Service',
      'Azure Container Instances',
      'Azure Functions'
    ],
    correctAnswer: 1,
    explanation: 'Azure App Service would be best as it provides automatic scaling, managed platform, and requires minimal DevOps expertise while being cost-effective for web applications.'
  },
  {
    id: 'microsoft-azure-28',
    sectionId: 'azure-architecture-services',
    question: 'A company needs to migrate their existing on-premises applications to Azure with minimal code changes. Which approach would be most suitable?',
    questionType: 'single-choice',
    options: [
      'Lift and shift to Azure Virtual Machines',
      'Refactor for Azure App Service',
      'Rewrite for Azure Functions',
      'Containerize for Azure Kubernetes Service'
    ],
    correctAnswer: 0,
    explanation: 'Lift and shift to Azure Virtual Machines would be most suitable as it requires minimal code changes while providing the fastest migration path.'
  },
  {
    id: 'microsoft-azure-29',
    sectionId: 'azure-architecture-services',
    question: 'What is the primary benefit of using Azure managed databases over self-managed databases?',
    questionType: 'single-choice',
    options: [
      'Lower cost',
      'Reduced management overhead',
      'Better performance',
      'More control'
    ],
    correctAnswer: 1,
    explanation: 'The primary benefit of Azure managed databases is reduced management overhead, as the cloud provider handles patching, backups, and maintenance.'
  },
  {
    id: 'microsoft-azure-30',
    sectionId: 'azure-architecture-services',
    question: 'Which Azure service is best for building event-driven applications?',
    questionType: 'single-choice',
    options: [
      'Azure Virtual Machines',
      'Azure App Service',
      'Azure Functions',
      'Azure Container Instances'
    ],
    correctAnswer: 2,
    explanation: 'Azure Functions is best for event-driven applications as it automatically scales based on events and only charges for actual execution time.'
  },

  // ===== AZURE MANAGEMENT & GOVERNANCE (30-35%) - 30 questions =====
  
  // Multiple Choice Questions
  {
    id: 'microsoft-management-1',
    sectionId: 'azure-management-governance',
    question: 'What is Azure Resource Manager (ARM)?',
    questionType: 'single-choice',
    options: [
      'A deployment and management service',
      'A storage service',
      'A networking service',
      'A database service'
    ],
    correctAnswer: 0,
    explanation: 'Azure Resource Manager is the deployment and management service for Azure that provides a consistent management layer.'
  },
  {
    id: 'microsoft-management-2',
    sectionId: 'azure-management-governance',
    question: 'Which Azure service is used for monitoring and diagnostics?',
    questionType: 'single-choice',
    options: [
      'Azure Monitor',
      'Azure Security Center',
      'Azure Policy',
      'Azure Cost Management'
    ],
    correctAnswer: 0,
    explanation: 'Azure Monitor provides comprehensive monitoring and diagnostics for Azure resources and applications.'
  },
  {
    id: 'microsoft-management-3',
    sectionId: 'azure-management-governance',
    question: 'What is Azure Policy used for?',
    questionType: 'single-choice',
    options: [
      'Storing data',
      'Enforcing organizational standards',
      'Running applications',
      'Managing databases'
    ],
    correctAnswer: 1,
    explanation: 'Azure Policy helps enforce organizational standards and assess compliance across your Azure resources.'
  },
  {
    id: 'microsoft-management-4',
    sectionId: 'azure-management-governance',
    question: 'Which Azure service provides identity and access management?',
    questionType: 'single-choice',
    options: [
      'Azure Active Directory',
      'Azure Security Center',
      'Azure Key Vault',
      'Azure Monitor'
    ],
    correctAnswer: 0,
    explanation: 'Azure Active Directory provides identity and access management for Azure resources and applications.'
  },
  {
    id: 'microsoft-management-5',
    sectionId: 'azure-management-governance',
    question: 'What is Azure Cost Management used for?',
    questionType: 'single-choice',
    options: [
      'Storing data',
      'Monitoring and optimizing costs',
      'Running applications',
      'Managing databases'
    ],
    correctAnswer: 1,
    explanation: 'Azure Cost Management helps monitor and optimize Azure spending and resource usage.'
  },
  
  // True/False Questions
  {
    id: 'microsoft-management-6',
    sectionId: 'azure-management-governance',
    question: 'Azure Resource Manager templates are written in JSON format.',
    questionType: 'single-choice',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 0,
    explanation: 'True. Azure Resource Manager templates are written in JSON format to define and deploy Azure resources.'
  },
  {
    id: 'microsoft-management-7',
    sectionId: 'azure-management-governance',
    question: 'Azure Policy can automatically remediate non-compliant resources.',
    questionType: 'single-choice',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 0,
    explanation: 'True. Azure Policy can automatically remediate non-compliant resources using remediation tasks.'
  },
  {
    id: 'microsoft-management-8',
    sectionId: 'azure-management-governance',
    question: 'All Azure resources must be deployed in a resource group.',
    questionType: 'single-choice',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 0,
    explanation: 'True. All Azure resources must be deployed in a resource group, which provides logical organization and management.'
  },
  
  // Scenario-based Questions
  {
    id: 'microsoft-management-9',
    sectionId: 'azure-management-governance',
    question: 'A company wants to ensure all virtual machines have encryption enabled. Which Azure service should they use?',
    questionType: 'single-choice',
    options: [
      'Azure Monitor',
      'Azure Policy',
      'Azure Security Center',
      'Azure Cost Management'
    ],
    correctAnswer: 1,
    explanation: 'Azure Policy would be the best choice to enforce encryption requirements across all virtual machines automatically.'
  },
  {
    id: 'microsoft-management-10',
    sectionId: 'azure-management-governance',
    question: 'An organization needs to track spending across multiple departments. Which Azure service would help?',
    questionType: 'single-choice',
    options: [
      'Azure Monitor',
      'Azure Security Center',
      'Azure Cost Management',
      'Azure Policy'
    ],
    correctAnswer: 2,
    explanation: 'Azure Cost Management would help track and analyze spending across multiple departments and provide cost optimization recommendations.'
  },
  {
    id: 'microsoft-management-11',
    sectionId: 'azure-management-governance',
    question: 'What is Azure Key Vault used for?',
    questionType: 'single-choice',
    options: [
      'Storing data',
      'Storing secrets and keys',
      'Running applications',
      'Managing databases'
    ],
    correctAnswer: 1,
    explanation: 'Azure Key Vault is used for storing and managing secrets, keys, and certificates securely.'
  },
  {
    id: 'microsoft-management-12',
    sectionId: 'azure-management-governance',
    question: 'Which Azure service provides unified security management?',
    questionType: 'single-choice',
    options: [
      'Azure Monitor',
      'Azure Security Center',
      'Azure Policy',
      'Azure Cost Management'
    ],
    correctAnswer: 1,
    explanation: 'Azure Security Center provides unified security management and advanced threat protection across hybrid cloud workloads.'
  },
  {
    id: 'microsoft-management-13',
    sectionId: 'azure-management-governance',
    question: 'What is Azure Blueprints used for?',
    questionType: 'single-choice',
    options: [
      'Storing data',
      'Creating repeatable deployments',
      'Running applications',
      'Managing databases'
    ],
    correctAnswer: 1,
    explanation: 'Azure Blueprints enables you to create repeatable deployments that maintain compliance and follow organizational standards.'
  },
  {
    id: 'microsoft-management-14',
    sectionId: 'azure-management-governance',
    question: 'Which Azure service provides role-based access control (RBAC)?',
    questionType: 'single-choice',
    options: [
      'Azure Active Directory',
      'Azure Security Center',
      'Azure Key Vault',
      'Azure Monitor'
    ],
    correctAnswer: 0,
    explanation: 'Azure Active Directory provides role-based access control (RBAC) for managing access to Azure resources.'
  },
  {
    id: 'microsoft-management-15',
    sectionId: 'azure-management-governance',
    question: 'What is Azure Advisor used for?',
    questionType: 'single-choice',
    options: [
      'Storing data',
      'Providing recommendations',
      'Running applications',
      'Managing databases'
    ],
    correctAnswer: 1,
    explanation: 'Azure Advisor provides personalized recommendations to help optimize your Azure resources for high availability, security, performance, and cost.'
  },

  // Multiple Choice Questions (Multiple Answers)
  {
    id: 'microsoft-management-16',
    sectionId: 'azure-management-governance',
    question: 'Which Azure services are used for governance and compliance? (Select all that apply)',
    questionType: 'multiple-choice',
    options: [
      'Azure Policy',
      'Azure Blueprints',
      'Azure Security Center',
      'Azure Cost Management',
      'Azure Advisor'
    ],
    correctAnswer: [0, 1, 2, 4],
    explanation: 'Azure Policy, Azure Blueprints, Azure Security Center, and Azure Advisor are used for governance and compliance. Cost Management is for cost optimization.'
  },
  {
    id: 'microsoft-management-17',
    sectionId: 'azure-management-governance',
    question: 'What are the benefits of using Azure Resource Manager? (Select all that apply)',
    questionType: 'multiple-choice',
    options: [
      'Consistent management layer',
      'Role-based access control',
      'Resource grouping',
      'Template-based deployment',
      'Cost tracking'
    ],
    correctAnswer: [0, 1, 2, 3],
    explanation: 'Azure Resource Manager provides consistent management layer, RBAC, resource grouping, and template-based deployment. Cost tracking is handled by Cost Management.'
  },

  // True/False Questions
  {
    id: 'microsoft-management-18',
    sectionId: 'azure-management-governance',
    question: 'Azure Security Center is free for all Azure users.',
    questionType: 'true-false',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    explanation: 'False. Azure Security Center has both free and paid tiers. The free tier provides basic security features, while the paid tier offers advanced features.'
  },
  {
    id: 'microsoft-management-19',
    sectionId: 'azure-management-governance',
    question: 'Azure Policy can only be applied at the subscription level.',
    questionType: 'true-false',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    explanation: 'False. Azure Policy can be applied at multiple levels: management group, subscription, resource group, and individual resources.'
  },
  {
    id: 'microsoft-management-20',
    sectionId: 'azure-management-governance',
    question: 'All Azure resources support tags for organization.',
    questionType: 'true-false',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 0,
    explanation: 'True. Most Azure resources support tags, which help organize and manage resources for billing, operations, and governance.'
  },

  // Drag & Drop Questions
  {
    id: 'microsoft-management-21',
    sectionId: 'azure-management-governance',
    question: 'Match the Azure management services with their primary functions:',
    questionType: 'drag-drop',
    options: [
      'Azure Monitor',
      'Azure Policy',
      'Azure Cost Management',
      'Azure Security Center'
    ],
    correctAnswer: [0, 1, 2, 3],
    dragDropItems: [
      'Monitoring and diagnostics',
      'Enforcing organizational standards',
      'Cost optimization and tracking',
      'Unified security management'
    ],
    explanation: 'Azure Monitor for monitoring, Azure Policy for standards enforcement, Cost Management for cost tracking, and Security Center for security management.'
  },

  // Scenario-based Questions
  {
    id: 'microsoft-management-22',
    sectionId: 'azure-management-governance',
    question: 'A company wants to ensure all new resources are deployed with specific tags for cost allocation. Which Azure service should they use?',
    questionType: 'single-choice',
    options: [
      'Azure Monitor',
      'Azure Policy',
      'Azure Security Center',
      'Azure Cost Management'
    ],
    correctAnswer: 1,
    explanation: 'Azure Policy would be the best choice to enforce tagging requirements for all new resources automatically.'
  },
  {
    id: 'microsoft-management-23',
    sectionId: 'azure-management-governance',
    question: 'An organization needs to monitor application performance and set up alerts for when performance degrades. Which Azure service would be most appropriate?',
    questionType: 'single-choice',
    options: [
      'Azure Monitor',
      'Azure Security Center',
      'Azure Policy',
      'Azure Cost Management'
    ],
    correctAnswer: 0,
    explanation: 'Azure Monitor would be most appropriate as it provides comprehensive monitoring, diagnostics, and alerting capabilities for applications and resources.'
  },
  {
    id: 'microsoft-management-24',
    sectionId: 'azure-management-governance',
    question: 'A company wants to implement a consistent security baseline across all their Azure resources. Which approach would be most effective?',
    questionType: 'single-choice',
    options: [
      'Use Azure Security Center recommendations',
      'Create Azure Policy definitions',
      'Use Azure Blueprints',
      'Implement manual security reviews'
    ],
    correctAnswer: 2,
    explanation: 'Azure Blueprints would be most effective as it allows creating repeatable deployments that include security baselines and organizational standards.'
  },
  {
    id: 'microsoft-management-25',
    sectionId: 'azure-management-governance',
    question: 'What is the primary purpose of Azure Resource Groups?',
    questionType: 'single-choice',
    options: [
      'Cost management',
      'Logical organization',
      'Security isolation',
      'Performance optimization'
    ],
    correctAnswer: 1,
    explanation: 'The primary purpose of Azure Resource Groups is logical organization, allowing you to group related resources for easier management and lifecycle control.'
  },
  {
    id: 'microsoft-management-26',
    sectionId: 'azure-management-governance',
    question: 'Which Azure service provides centralized identity management for hybrid environments?',
    questionType: 'single-choice',
    options: [
      'Azure Active Directory',
      'Azure Security Center',
      'Azure Key Vault',
      'Azure Monitor'
    ],
    correctAnswer: 0,
    explanation: 'Azure Active Directory provides centralized identity management for both cloud and on-premises resources in hybrid environments.'
  },
  {
    id: 'microsoft-management-27',
    sectionId: 'azure-management-governance',
    question: 'What is the main benefit of using Azure Blueprints over manual resource deployment?',
    questionType: 'single-choice',
    options: [
      'Lower cost',
      'Faster deployment',
      'Consistency and compliance',
      'Better performance'
    ],
    correctAnswer: 2,
    explanation: 'The main benefit of Azure Blueprints is consistency and compliance, as it ensures all deployments follow the same organizational standards and security baselines.'
  },
  {
    id: 'microsoft-management-28',
    sectionId: 'azure-management-governance',
    question: 'Which Azure service helps organizations optimize costs by providing spending recommendations?',
    questionType: 'single-choice',
    options: [
      'Azure Monitor',
      'Azure Security Center',
      'Azure Cost Management',
      'Azure Policy'
    ],
    correctAnswer: 2,
    explanation: 'Azure Cost Management helps optimize costs by providing spending analysis, budget alerts, and cost optimization recommendations.'
  },
  {
    id: 'microsoft-management-29',
    sectionId: 'azure-management-governance',
    question: 'What is the primary function of Azure Key Vault in a cloud environment?',
    questionType: 'single-choice',
    options: [
      'Storing application data',
      'Securing secrets and certificates',
      'Managing user identities',
      'Monitoring resource usage'
    ],
    correctAnswer: 1,
    explanation: 'The primary function of Azure Key Vault is securing secrets, keys, and certificates, providing a centralized and secure way to manage sensitive information.'
  },
  {
    id: 'microsoft-management-30',
    sectionId: 'azure-management-governance',
    question: 'Which Azure service provides automated security recommendations and threat protection?',
    questionType: 'single-choice',
    options: [
      'Azure Monitor',
      'Azure Security Center',
      'Azure Policy',
      'Azure Cost Management'
    ],
    correctAnswer: 1,
    explanation: 'Azure Security Center provides automated security recommendations and advanced threat protection across hybrid cloud workloads.'
  }
]; 