// platform-metrics.model.ts
export interface DailyMetric {
    date: string; // string no frontend para compatibilidade com JSON
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
    growth: { [key: string]: number }; // Para corresponder ao Map do Java
}

