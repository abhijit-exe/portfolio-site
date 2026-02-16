export interface Certification {
  name: string
  provider: string
  year: string
  summary?: string
  link?: string
}

export const certifications: Certification[] = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    provider: 'Oracle University',
    year: '2025',
    summary:
      'Validated skills in LLMs, prompt engineering, RAG, vector databases, and deploying generative AI solutions on Oracle Cloud.',
    link: 'https://drive.google.com/file/d/1rijulFa2Umjlqk4TU_Q8EsAg-tbcczro/view?usp=drivesdk',
  },
  {
    name: 'DeepLearning.AI TensorFlow Developer',
    provider: 'DeepLearning.AI',
    year: '2024',
    summary:
      'Completed a four-course specialization covering CNNs, NLP, and time-series forecasting with TensorFlow.',
    link: 'https://www.coursera.org/account/accomplishments/specialization/1G58US64EBDP',
  },
  {
    name: 'Machine Learning Specialization',
    provider: 'Stanford Online',
    year: '2024',
    summary:
      'Studied supervised learning, advanced algorithms, and unsupervised learning with recommender systems and reinforcement learning.',
    link: 'https://www.coursera.org/account/accomplishments/specialization/XU7C3HRXH37G',
  },
]

