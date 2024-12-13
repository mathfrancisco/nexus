package backend.nexus.controllers;

import backend.nexus.models.PlatformRoi;
import backend.nexus.models.RoiData;
import backend.nexus.services.RoiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/roi")
@RequiredArgsConstructor
@Slf4j
public class RoiController {

    private final RoiService roiService;

    @GetMapping("/analysis")
    public ResponseEntity<RoiData> getRoiAnalysis(
            @RequestParam(required = false) String timeframe) {

        log.info("Fetching ROI analysis with timeframe: {}", timeframe);
        return ResponseEntity.ok(roiService.getRoiAnalysis(timeframe));
    }

    @GetMapping("/platforms/{platform}")
    public ResponseEntity<PlatformRoi> getPlatformRoi(
            @PathVariable String platform) {

        log.info("Fetching ROI data for platform: {}", platform);
        return ResponseEntity.ok(roiService.getPlatformRoi(platform));
    }

    @GetMapping("/comparison")
    public ResponseEntity<List<PlatformRoi>> getPlatformComparison() {
        log.info("Fetching ROI comparison for all platforms");
        return ResponseEntity.ok(roiService.getPlatformComparison());
    }

    @GetMapping("/trends")
    public ResponseEntity<Map<String, List<Double>>> getRoiTrends(
            @RequestParam(required = false, defaultValue = "30") Integer days) {

        log.info("Fetching ROI trends for last {} days", days);
        return ResponseEntity.ok(roiService.getRoiTrends(days));
    }
}
