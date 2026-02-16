export interface EducationEntry {
  institution: string
  program: string
  location: string
  start: string
  end: string
  details?: string
}

export const education: EducationEntry[] = [
  {
    institution: 'Pimpri Chinchwad College of Engineering (PCCoE)',
    program: 'Bachelors of Technology – Electronics and Telecommunication',
    location: 'Pune, India',
    start: 'Nov 2022',
    end: 'Present',
    details:
      'Current grade: 8.67. Thesis: AI Based Smart Water Quality Monitoring and Disease Outbreak Forecasting System.',
  },
  {
    institution: 'Pimpri Chinchwad College of Engineering (PCCoE)',
    program: 'Honors in Deep Learning',
    location: 'Pune, India',
    start: 'Aug 2024',
    end: 'Present',
    details:
      'Current grade: 9.0. Thesis: Deep Learning Based Framework for Password Guessing using Generative Modelling.',
  },
  {
    institution: 'Vidya Valley North Point Junior College',
    program: 'Higher Secondary Certificate',
    location: 'Pune, India',
    start: 'Jun 2021',
    end: 'Jun 2022',
    details: 'Final grade: 87.5%.',
  },
  {
    institution: 'Podar International School',
    program: 'Indian Certificate of Secondary Education',
    location: 'Pune, India',
    start: 'Apr 2019',
    end: 'Jun 2020',
    details: 'Final grade: 96.83%.',
  },
]

