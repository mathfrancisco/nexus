package backend.nexus.controllers;

import backend.nexus.models.PlatformMetrics;
import backend.nexus.services.AnalyticsService;
import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/analytics")
@CrossOrigin(origins = "http://localhost:4200,https://nexus-ia.netlify.app/") // Configure CORS como necessário
@RequiredArgsConstructor
@Slf4j
public class AnalyticsController {

    private final AnalyticsService analyticsService; // Removido @Autowired, desnecessário com @RequiredArgsConstructor

    @GetMapping("/platforms/{platform}")
    public ResponseEntity<PlatformMetrics> getPlatformMetrics(
            @PathVariable String platform,
            @RequestParam(required = false) String timeframe) {

        log.info("Fetching metrics for platform: {} with timeframe: {}", platform, timeframe);
        PlatformMetrics metrics = analyticsService.getPlatformMetrics(platform, timeframe);
        return ResponseEntity.ok(metrics); // Retorna a resposta
    }

    @GetMapping("/platforms")
    public ResponseEntity<List<PlatformMetrics>> getAllPlatformsMetrics() {
        log.info("Fetching metrics for all platforms");
        List<PlatformMetrics> metrics = analyticsService.getAllPlatformsMetrics();
        return ResponseEntity.ok(metrics); // Retorna a resposta

    }

    @GetMapping("/growth/{platform}")
    public ResponseEntity<Map<String, Double>> getGrowthMetrics(@PathVariable String platform) {
        log.info("Fetching growth metrics for platform: {}", platform);
        Map<String, Double> growthMetrics = analyticsService.getGrowthMetrics(platform);
        return ResponseEntity.ok(growthMetrics); // Retorna a resposta
    }


}
