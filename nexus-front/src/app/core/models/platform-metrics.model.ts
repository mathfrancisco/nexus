export interface DailyMetric {
  date: string;
  value: number;
}

export interface Demographics {
  ageRange: string;
  percentage: number;
}

export interface PlatformMetrics {
  platform: string;
  followers: number;
  engagementRate: number;
  interactions: number;
  dailyMetrics: DailyMetric[];
  demographics: Demographics[];
  growth: {
    daily: number;
    weekly: number;
    monthly: number;
  };
}
