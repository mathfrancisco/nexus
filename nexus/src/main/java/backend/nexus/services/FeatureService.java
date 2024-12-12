package backend.nexus.services;

import backend.nexus.models.Feature;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Slf4j
public class FeatureService {

    private final List<Feature> features = initializeFeatures();

    public List<Feature> getAllFeatures() {
        return features;
    }

    public List<Feature> getFeaturesByCategory(String category) {
        return features.stream()
                .filter(feature -> feature.getCategory().equalsIgnoreCase(category))
                .collect(Collectors.toList());
    }

    public List<Feature> getPlatformFeatures(String platform) {
        return features.stream()
                .filter(feature -> feature.getSupportedPlatforms().contains(platform.toUpperCase()))
                .collect(Collectors.toList());
    }

    public List<Feature> searchFeatures(String query) {
        String searchQuery = query.toLowerCase();
        return features.stream()
                .filter(feature ->
                        feature.getTitle().toLowerCase().contains(searchQuery) ||
                                feature.getDescription().toLowerCase().contains(searchQuery))
                .collect(Collectors.toList());
    }

    private List<Feature> initializeFeatures() {
        return Arrays.asList(
                Feature.builder()
                        .id("1")
                        .title("Real-time Analytics")
                        .description("Track performance metrics across all platforms in real-time")
                        .category("Analytics")
                        .capabilities(Arrays.asList(
                                "Live engagement tracking",
                                "Real-time notifications",
                                "Instant performance updates"
                        ))
                        .supportedPlatforms(Arrays.asList("YOUTUBE", "INSTAGRAM", "TIKTOK", "LINKEDIN"))
                        .icon("chart-line")
                        .build(),

                Feature.builder()
                        .id("2")
                        .title("AI-Powered Insights")
                        .description("Get intelligent recommendations to improve your social media strategy")
                        .category("Intelligence")
                        .capabilities(Arrays.asList(
                                "Content optimization suggestions",
                                "Best posting times",
                                "Audience behavior analysis"
                        ))
                        .supportedPlatforms(Arrays.asList("YOUTUBE", "INSTAGRAM", "TIKTOK", "LINKEDIN"))
                        .icon("brain")
                        .build(),

                Feature.builder()
                        .id("3")
                        .title("ROI Tracking")
                        .description("Measure and optimize your social media ROI")
                        .category("Analytics")
                        .capabilities(Arrays.asList(
                                "Investment tracking",
                                "Revenue attribution",
                                "Platform comparison"
                        ))
                        .supportedPlatforms(Arrays.asList("YOUTUBE", "INSTAGRAM", "TIKTOK", "LINKEDIN"))
                        .icon("chart-pie")
                        .build()
        );
    }
}
