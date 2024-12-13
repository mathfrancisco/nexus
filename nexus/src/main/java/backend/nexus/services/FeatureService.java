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
                        .description("Track performance metrics across all platforms in real-time.")
                        .icon("chart-line") // Adicionado ícone
                        .capabilities(Arrays.asList(
                                "Live engagement tracking",
                                "Real-time notifications",
                                "Instant performance updates"
                        ))
                        .benefits(Arrays.asList(
                                "Never miss important trends",
                                "React quickly to viral content",
                                "Optimize posting times"
                        ))
                        .category("Analytics") // Adicionado categoria
                        .supportedPlatforms(Arrays.asList("YOUTUBE", "INSTAGRAM", "TIKTOK", "LINKEDIN")) // Adicionado plataformas suportadas
                        .build(),
                Feature.builder()
                        .id("2")
                        .title("Automated Reporting")
                        .description("Generate comprehensive reports on your performance with just a few clicks.")
                        .icon("document-report") // Adicionado ícone
                        .capabilities(Arrays.asList(
                                "Customizable report templates",
                                "Scheduled reporting",
                                "Data export options"
                        ))
                        .benefits(Arrays.asList(
                                "Save time and effort",
                                "Gain deeper insights into your data",
                                "Share reports easily with your team"
                        ))
                        .category("Reporting") // Adicionado categoria
                        .supportedPlatforms(Arrays.asList("YOUTUBE", "INSTAGRAM", "TIKTOK", "LINKEDIN")) // Adicionado plataformas suportadas
                        .build(),
                Feature.builder()
                        .id("3")
                        .title("Competitor Analysis")
                        .description("Benchmark your performance against your competitors and identify areas for improvement.")
                        .icon("users-group") // Adicionado ícone
                        .capabilities(Arrays.asList(
                                "Competitor performance tracking",
                                "Trend analysis",
                                "Audience overlap insights"
                        ))
                        .benefits(Arrays.asList(
                                "Stay ahead of the competition",
                                "Understand your market position",
                                "Make data-driven decisions"
                        ))
                        .category("Analysis") // Adicionado categoria
                        .supportedPlatforms(Arrays.asList("YOUTUBE", "INSTAGRAM", "TIKTOK", "LINKEDIN")) // Adicionado plataformas suportadas
                        .build(),
                Feature.builder()
                        .id("4")
                        .title("Content Scheduling")
                        .description("Plan and schedule your content across multiple platforms in advance.")
                        .icon("calendar-days") // Adicionado ícone
                        .capabilities(Arrays.asList(
                                "Bulk content upload",
                                "Customizable posting schedules",
                                "Post preview and approval"
                        ))
                        .benefits(Arrays.asList(
                                "Maintain a consistent online presence",
                                "Free up time for other tasks",
                                "Optimize content for maximum impact"
                        ))
                        .category("Scheduling") // Adicionado categoria
                        .supportedPlatforms(Arrays.asList("YOUTUBE", "INSTAGRAM", "TIKTOK", "LINKEDIN")) // Adicionado plataformas suportadas
                        .build(),
                Feature.builder() // Nova feature adicionada
                        .id("5")
                        .title("AI-Powered Content Generation") // Título da nova feature
                        .description("Generate engaging and high-performing content using AI.") // Descrição da nova feature
                        .icon("sparkles") // Ícone da nova feature
                        .capabilities(Arrays.asList(
                                "AI-powered writing assistance",
                                "Content idea generation",
                                "Automated content creation"
                        ))
                        .benefits(Arrays.asList(
                                "Boost content quality",
                                "Save time and resources",
                                "Increase audience engagement"
                        ))
                        .category("Content") // Categoria da nova feature
                        .supportedPlatforms(Arrays.asList("YOUTUBE", "INSTAGRAM", "TIKTOK", "LINKEDIN")) // Plataformas suportadas
                        .build()
        );
    }
}
