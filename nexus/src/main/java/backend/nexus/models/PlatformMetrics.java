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
public class PlatformMetrics {
    private String platform;
    private Long followers;
    private Double engagementRate;
    private Integer interactions;
    private List<DailyMetric> dailyMetrics;
    private List<Demographics> demographics;
    private Map<String, Double> growth; // daily, weekly, monthly
    private List<ContentMetric> topContent;
    private EngagementStats engagementStats;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class EngagementStats {
        private Integer likes;
        private Integer comments;
        private Integer shares;
        private Double avgTimeViewed;
        private Double clickThroughRate;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ContentMetric {
        private String contentId;
        private String title;
        private String type; // video, image, post
        private Integer views;
        private Double engagementRate;
        private String url;
    }
}