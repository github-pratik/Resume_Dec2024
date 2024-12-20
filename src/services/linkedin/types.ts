export interface LinkedInProfile {
  id: string;
  firstName: string;
  lastName: string;
  headline: string;
  profilePicture: string;
  posts: LinkedInPost[];
  experience: WorkExperience[];
  accomplishments: Accomplishment[];
}

export interface LinkedInPost {
  id: string;
  content: string;
  publishedAt: Date;
  likes: number;
  comments: number;
  shares: number;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
}

export interface Accomplishment {
  id: string;
  type: 'certification' | 'award' | 'publication';
  title: string;
  date: Date;
  description: string;
}