export interface Experience {
  company: string
  role: string
  location: string
  start: string
  end: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'The Bodhi Tree',
    role: 'AI Intern',
    location: 'Pune, India',
    start: 'Sep 2025',
    end: 'Feb 2026',
    highlights: [
      'Integrated self-hosted LLMs/SLMs into an enterprise AI ecosystem, handling architecture, deployment, and monitoring.',
      'Evaluated more than 15 AI models based on latency, token efficiency, and real-world use cases.',
      'Enhanced agentic AI workflows using Chain-of-Thought reasoning.',
      'Delivered end-to-end solutions with strong emphasis on documentation and system scalability.',
    ],
  },
  {
    company: 'Persistent Systems',
    role: 'AI Intern',
    location: 'Pune, India',
    start: 'May 2025',
    end: 'Jul 2025',
    highlights: [
      'Implemented abstractive text summarization using transformer architectures (T5, BART) with transfer learning.',
      'Fine-tuned region-specific NLP models to capture cultural tone variations in news summarization.',
      'Built data pipelines for web scraping, text preprocessing, and tokenization using Python and Hugging Face.',
      'Developed a Gradio-based interface to visualize and compare summarization outputs.',
    ],
  },
]

