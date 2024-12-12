package backend.nexus.services;

import backend.nexus.models.PlatformRoi;
import backend.nexus.models.RoiData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.IntStream;
import java.util.stream.Collectors;

@Service
@Slf4j
public class RoiService {

    private final Random random = new Random();

    public RoiData getRoiAnalysis(String timeframe) {
        log.info("Generating ROI analysis for timeframe: {}", timeframe);

        List<PlatformRoi> platforms = generatePlatformRoiData();
        double totalInvestment = platforms.stream()
                .mapToDouble(PlatformRoi::getInvestment)
                .sum();
        double totalRevenue = platforms.stream()
                .mapToDouble(PlatformRoi::getRevenue)
                .sum();

        return RoiData.builder()
                .totalInvestment(totalInvestment)
                .totalRevenue(totalRevenue)
                .roiPercentage(calculateRoiPercentage(totalRevenue, totalInvestment))
                .platforms(platforms)
                .historicalData(generateHistoricalData())
                .build();
    }

    public PlatformRoi getPlatformRoi(String platform) {
        return generatePlatformRoiData().stream()
                .filter(roi -> roi.getName().equalsIgnoreCase(platform))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Platform not found: " + platform));
    }

    private List<PlatformRoi> generatePlatformRoiData() {
        return Arrays.asList(
                createPlatformRoi("YOUTUBE", 5000.0, 15000.0),
                createPlatformRoi("INSTAGRAM", 3000.0, 8000.0),
                createPlatformRoi("TIKTOK", 2000.0, 7000.0),
                createPlatformRoi("LINKEDIN", 1500.0, 4000.0)
        );
    }

    private PlatformRoi createPlatformRoi(String platform, double investment, double revenue) {
        return PlatformRoi.builder()
                .name(platform)
                .investment(investment)
                .revenue(revenue)
                .roi(calculateRoiPercentage(revenue, investment))
                .trend(generateTrendPercentage())
                .build();
    }

    private double calculateRoiPercentage(double revenue, double investment) {
        return Math.round(((revenue - investment) / investment) * 100.0 * 10.0) / 10.0;
    }

    private double generateTrendPercentage() {
        return Math.round(ThreadLocalRandom.current().nextDouble(-10.0, 30.0) * 10.0) / 10.0;
    }

    private List<Map<String, Object>> generateHistoricalData() {
        return IntStream.range(0, 30)
                .mapToObj(i -> {
                    Map<String, Object> data = new HashMap<>();
                    data.put("date", LocalDate.now().minusDays(i).toString());
                    data.put("value", ThreadLocalRandom.current().nextDouble(100.0, 300.0));
                    return data;
                })
                .collect(Collectors.toList());
    }

    public List<PlatformRoi> getPlatformComparison() {
        return generatePlatformRoiData(); // Retorna dados simulados para comparação
    }

    public Map<String, List<Double>> getRoiTrends(Integer days) {
        if (days == null || days <= 0) {
            throw new IllegalArgumentException("Number of days must be a positive integer.");
        }

        Map<String, List<Double>> roiTrends = new HashMap<>();

        // Simula dados de tendências para cada plataforma
        for (PlatformRoi platformRoi : generatePlatformRoiData()) {
            List<Double> trends = new ArrayList<>();
            double currentValue = platformRoi.getRoi(); // Valor ROI atual

            for (int i = 0; i < days; i++) {
                double change = random.nextDouble() * 6 - 3; // Variação aleatória entre -3% e +3%
                currentValue = currentValue * (1 + change / 100);
                trends.add(currentValue);
            }
            roiTrends.put(platformRoi.getName(), trends);
        }

        return roiTrends;
    }
}
