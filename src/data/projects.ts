export interface Project {
  title: string;
  description: string;
  details: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Crop & Weed Semantic Segmentation with Deep Learning",
    description: `A deep learning pipeline in MATLAB for pixel-level classification of crops and weeds in agricultural field imagery, tackling a severely data limited problem with only 50 labelled training images.`,
    details: `Built a baseline CNN encoder-decoder from scratch, then engineered an improved model using DeepLabV3+ with a pretrained ResNet-18 backbone, custom augmentation, and inverse square root class weighting to handle a 94.6% background class imbalance. The improved model raised crop IoU from 0.315 to 0.791 and weed IoU from 0.465 to 0.721, with boundary accuracy (MeanBFScore) improving from 0.44 to 0.93, all without collecting any additional data.`,
    tech: ["MATLAB", "Deep Learning", "Semantic Segmentation", "CNN", "DeepLabV3+", "ResNet-18", "Transfer Learning"],
    // github: "https://github.com/yourusername/project-one",
    // live: "https://project-one.vercel.app",
    // image: "/images/projects/project1.png"
  },
  {
    title: "Risk Aware Reinforcement Learning for Algorithmic Trading",
    description: `A deep reinforcement learning trading system exploring how reward design and algorithm architecture shape risk adjusted trading behaviour across multiple RL approaches.`,
    details: `Built a deep reinforcement learning trading system to investigate how reward design and algorithm architecture influence risk adjusted trading performance. Developed a custom Gymnasium environment in Python and implemented DQN with PyTorch alongside PPO and A2C using Stable-Baselines3. Sharpe based reward functions consistently produced stronger risk adjusted results, with the best Sharpe ratio reaching 1.84, while DQN + Sharpe achieved the lowest maximum drawdown at 8.08%. The results demonstrated that reward design had a strong influence on agent behaviour, while the interaction between reward formulation and algorithm architecture also shaped overall performance.`,
    tech: ["Python", "PyTorch", "Stable-Baselines3", "Gymnasium", "Reinforcement Learning", "DQN", "PPO", "A2C"],
    // github: "https://github.com/yourusername/project-two",
    // live: "https://project-one.vercel.app",
    // image: "/images/projects/project2.png"
  },
  {
    title: "Concurrent Multi-Core OS Process Scheduler",
    description: `A concurrent C-based operating system scheduler that manages process execution across multiple CPUs using priority scheduling, synchronisation and dynamic load balancing.`,
    details: `Engineered a multi-threaded operating system scheduler in C using POSIX threads, to safely coordinate concurrent process execution across multiple CPUs. Implemented Round Robin and FCFS scheduling, priority management, I/O handling and dynamic load-balancing, supported by custom process tables, PID pools and ready queues for each CPU. A dedicated load-balancing daemon continuously analysed CPU workloads and migrated processes between cores to maintain efficient execution. The system reduced turnaround time by 68% and response time by 59%, demonstrating the effectiveness of concurrent scheduling, synchronisation and dynamic workload distribution.`,
    tech: ["C", "OS", "Multithreading", "Linux", "GDB"],
    // github: "https://github.com/yourusername/project-two",
    // live: "https://project-one.vercel.app",
    // image: "/images/projects/project2.png"
  },
  {
    title: "Predicting Cancer Treatment Outcomes with Machine Learning",
    description: `A clinical ML pipeline using patient and MRI-derived features to predict breast cancer treatment response and relapse-free survival.`,
    details: `Built a Python machine learning pipeline to predict breast cancer treatment outcomes using clinical and MRI-derived features from 400 patients. Developed dedicated classification and regression workflows with automated preprocessing, feature selection and hyperparameter tuning, reducing the feature space to a compact set of predictive variables. Logistic Regression with L1 regularisation and recursive feature elimination achieved 81.2% balanced accuracy for treatment response prediction, while XGBoost achieved a 17.57-day mean absolute error when predicting relapse free survival. Models were systematically evaluated using stratified cross-validation and threshold optimisation, enabling robust comparison of different approaches for clinical outcome prediction.`,
    tech: ["Python", "Machine Learning", "scikit-learn", "Pandas", "NumPy", "Git"],
    // github: "https://github.com/yourusername/project-two",
    // live: "https://project-one.vercel.app",
    // image: "/images/projects/project2.png"
  },
  {
    title: "Conversational NLP Restaurant Booking Assistant",
    description: `A Python NLP chatbot that interprets natural-language requests, manages conversational restaurant bookings and answers general user queries.`,
    details: `Developed a modular NLP chatbot in Python combining intent classification, entity extraction, dialogue management and knowledge-base retrieval to support natural-language restaurant bookings. Implemented TF-IDF and Logistic Regression for intent recognition alongside cosine-similarity retrieval for general questions. A frame based dialogue manager enabled multi turn conversations, booking CRUD operations and persistent context while handling entities such as restaurants, dates, times and party sizes. The system achieved 84% Q&A retrieval accuracy and an 86% CUQ usability score.`,
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "SciPy", "NLP"],
    // github: "https://github.com/yourusername/project-two",
    // live: "https://project-one.vercel.app",
    // image: "/images/projects/project2.png"
  },
  {
    title: "Heart Disease Detection",
    description: `A clinical machine learning system that predicts heart disease from patient data while providing interpretable insights into the factors driving predictions.`,
    details: `Built a machine learning pipeline for heart disease prediction, transforming raw clinical records into model-ready data through statistical preprocessing, feature engineering and exploratory analysis. Developed and evaluated Decision Tree and Multi-Layer Perceptron classifiers, with the neural network achieving 92% classification accuracy and outperforming the Decision Tree at identifying patients with heart disease.`,
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    // github: "https://github.com/yourusername/project-two",
    // live: "https://project-one.vercel.app",
    // image: "/images/projects/project2.png"
  },
    
];