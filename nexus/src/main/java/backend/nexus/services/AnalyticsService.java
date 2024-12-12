package backend.nexus.services;

import backend.nexus.models.DailyMetric;
import backend.nexus.models.Demographics;
import backend.nexus.models.PlatformMetrics;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
@Slf4j
public class AnalyticsService {

    private final Random random = new Random();

    public PlatformMetrics getPlatformMetrics(String platform, String timeframe) {
        log.info("Generating metrics for platform: {} with timeframe: {}", platform, timeframe);

        return switch (platform.toUpperCase()) {
            case "YOUTUBE", "INSTAGRAM", "TIKTOK", "LINKEDIN" -> createMetrics(platform);
            default -> throw new IllegalArgumentException("Unsupported platform: " + platform);
        };
    }

    public List<PlatformMetrics> getAllPlatformsMetrics() {
        return Arrays.asList(
                createMetrics("YOUTUBE"),
                createMetrics("INSTAGRAM"),
                createMetrics("TIKTOK"),
                createMetrics("LINKEDIN")
        );
    }


    private PlatformMetrics createMetrics(String platform) {
        List<DailyMetric> dailyMetrics = generateDailyMetrics();
        Map<String, Double> growth = calculateGrowth(dailyMetrics);


        return PlatformMetrics.builder()
                .platform(platform)
                .followers(generateFollowers())
                .engagementRate(generateEngagementRate())
                .interactions(generateInteractions())
                .dailyMetrics(dailyMetrics)
                .demographics(generateDemographics())
                .growth(growth)
                .build();
    }


    // Helper methods for generating mock data
    private long generateFollowers() {
        return ThreadLocalRandom.current().nextLong(500000, 2000000);
    }

    private double generateEngagementRate() {
        return Math.round(ThreadLocalRandom.current().nextDouble(1.0, 15.0) * 10.0) / 10.0;
    }

    private int generateInteractions() {
        return ThreadLocalRandom.current().nextInt(10000, 100000);
    }

    private List<DailyMetric> generateDailyMetrics() {
        LocalDate startDate = LocalDate.now().minusDays(29);
        return IntStream.range(0, 30)
                .mapToObj(i -> DailyMetric.builder()
                        .date(startDate.plusDays(i))
                        .value(ThreadLocalRandom.current().nextInt(1000, 10000))
                        .build())
                .collect(Collectors.toList());
    }

    private List<Demographics> generateDemographics() {
        double age18_24 = random.nextDouble() * 30 + 20; // Entre 20% e 50%
        double age25_34 = random.nextDouble() * (70 - age18_24) + 15; // Ajusta para totalizar 100%
        double age35_44 = random.nextDouble() * (85 - age18_24 - age25_34) + 10;
        double age45plus = 100 - age18_24 - age25_34 - age35_44;

        return Arrays.asList(
                new Demographics("18-24", age18_24),
                new Demographics("25-34", age25_34),
                new Demographics("35-44", age35_44),
                new Demographics("45+", age45plus)
        );
    }

    public Map<String, Double> getGrowthMetrics(String platform) {
        PlatformMetrics metrics = getPlatformMetrics(platform, null); // timeframe não usado aqui
        return metrics.getGrowth();
    }


    private Map<String, Double> calculateGrowth(List<DailyMetric> dailyMetrics) {
        if (dailyMetrics == null || dailyMetrics.isEmpty()) {
            return Map.of(); // Retorna mapa vazio se não houver dados
        }

        int lastValue = dailyMetrics.get(dailyMetrics.size() - 1).getValue();
        int firstValue = dailyMetrics.get(0).getValue();

        double dailyGrowth = (double) (lastValue - dailyMetrics.get(dailyMetrics.size() - 2).getValue()) / firstValue * 100;
        double weeklyGrowth = (double) (lastValue - dailyMetrics.get(dailyMetrics.size() - 7).getValue()) / firstValue * 100;
        double monthlyGrowth = (double) (lastValue - firstValue) / firstValue * 100;

        return Map.of(
                "daily", dailyGrowth,
                "weekly", weeklyGrowth,
                "monthly", monthlyGrowth
        );
    }
}
