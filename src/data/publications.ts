export interface Publication {
  title: string
  venue: string
  year: string
  summary: string
  link?: string
}

export const publications: Publication[] = [
  {
    title: 'AI Based Smart Water Quality Monitoring and Disease Outbreak Forecasting System',
    venue: 'IEEE Pune Section International Conference',
    year: '2025',
    summary:
      'Integrates IoT water-quality sensors with machine learning models for real-time WQI prediction, contamination-cause classification, and time-series forecasting of unsafe conditions, with lightweight models deployed on edge hardware.',
    link: 'https://drive.google.com/file/d/18atb2f_QsyKv5m5VoAu1UBBqEURLjI9K/view?usp=sharing',
  },
]

