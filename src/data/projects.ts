export interface Project {
  title: string
  period: string
  summary: string
  techStack: string[]
  notes?: string
  repoUrl?: string
  demoUrl?: string
  details?: string
}

export const projects: Project[] = [
  {
    title: 'Deep Learning Framework for Password Guessing using Generative Modelling',
    period: 'Aug 2025 – Feb 2026',
    summary:
      'Built a deep learning–based password recovery system using Transformer models trained on real-world leaked password datasets.',
    techStack: ['Transformers', 'Deep Learning', 'Python'],
    notes:
      'Explores beam search with learned heuristics and guided sampling strategies to generate high-probability password candidates efficiently.',
  },
  {
    title: 'Sleep Stage Classification with Hybrid CNN + LSTM',
    period: 'Feb 2025 – Apr 2026',
    summary:
      'Classifies sleep stages using a hybrid CNN+LSTM model trained on multi-channel PSG signals from the Sleep EDF dataset.',
    techStack: ['CNN', 'LSTM', 'Time-series', 'Python'],
    notes:
      'Combines EEG, EOG, EMG, and respiratory signals to achieve high accuracy by modeling temporal dependencies across multiple biosignals.',
  },
  {
    title: 'Traffic Sign Recognition using CNN',
    period: 'Mar 2025 – Apr 2025',
    summary:
      'Trained a convolutional neural network for traffic sign recognition on a hybrid of Indian Traffic Sign and German Traffic Benchmark datasets.',
    techStack: ['CNN', 'Computer Vision', 'TensorFlow/Keras'],
    notes: 'Focused on data preprocessing, augmentation, and evaluation to achieve strong classification accuracy.',
  },
]

