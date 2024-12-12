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
public class Feature {
    private String id;
    private String title;
    private String description;
    private String category;
    private List<String> capabilities;
    private List<String> supportedPlatforms;
    private String icon;
    private List<String> benefits;
    private FeatureDetails details;
    private Map<String, Object> configuration;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class FeatureDetails {
        private String technicalDescription;
        private List<String> requirements;
        private List<String> limitations;
        private List<Integration> integrations;
        private Map<String, String> settings;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Integration {
        private String name;
        private String type;
        private String description;
        private String documentationUrl;
        private List<String> requiredPermissions;
    }
}
