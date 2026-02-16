export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'C++', 'Java', 'JavaScript'],
  },
  {
    label: 'ML & Deep Learning',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas'],
  },
  {
    label: 'Generative AI & LLMs',
    items: [
      'Large Language Models (LLMs)',
      'T5',
      'BART',
      'LLaMA',
      'Transformers',
      'RAG basics',
      'Vector databases',
      'OCI Generative AI',
    ],
  },
  {
    label: 'NLP & CV',
    items: ['NLTK', 'Hugging Face Transformers', 'TorchVision', 'YOLOv7', 'Text summarization'],
  },
  {
    label: 'Tools & Workflow',
    items: ['Git', 'Jupyter', 'Google Colab', 'Gradio'],
  },
]

