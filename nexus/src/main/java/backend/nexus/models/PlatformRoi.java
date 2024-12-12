package backend.nexus.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlatformRoi {
    private String name;
    private Double investment;
    private Double revenue;
    private Double roi;
    private Double trend;
    private List<CampaignRoi> campaigns;
    private Map<String, Double> costBreakdown;
    private PerformanceMetrics performance;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class CampaignRoi {
        private String campaignName;
        private Double investment;
        private Double revenue;
        private Double roi;
        private String status;
        private LocalDate startDate;
        private LocalDate endDate;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PerformanceMetrics {
        private Double conversionRate;
        private Double costPerAcquisition;
        private Double customerLifetimeValue;
        private Integer leadsGenerated;
    }
}
