export interface PlatformRoi {
    name: string;
    roi: number;
    investment: number;
    revenue: number;
    trend: number;
}

export interface RoiData {
    totalInvestment: number;
    totalRevenue: number;
    roiPercentage: number;
    platforms: PlatformRoi[];
    historicalData: { date: string; value: number }[];
}
