package backend.nexus.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoiData {
    private Double totalInvestment;
    private Double totalRevenue;
    private Double roiPercentage;
    private List<PlatformRoi> platforms;
    private List<Map<String, Object>> historicalData;
    private RoiInsights insights;
    private Map<String, Double> trends;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class RoiInsights {
        private String bestPerformingPlatform;
        private String worstPerformingPlatform;
        private List<String> recommendations;
        private Map<String, Double> projections;
    }
}
