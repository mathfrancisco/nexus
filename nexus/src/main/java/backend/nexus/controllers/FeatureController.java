package backend.nexus.controllers;

import backend.nexus.models.Feature;
import backend.nexus.services.FeatureService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/features")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@Slf4j
public class FeatureController {

    private final FeatureService featureService;

    @GetMapping
    public ResponseEntity<List<Feature>> getAllFeatures() {
        log.info("Fetching all features");
        return ResponseEntity.ok(featureService.getAllFeatures());
    }

    @GetMapping("/{category}")
    public ResponseEntity<List<Feature>> getFeaturesByCategory(
            @PathVariable String category) {

        log.info("Fetching features for category: {}", category);
        return ResponseEntity.ok(featureService.getFeaturesByCategory(category));
    }

    @GetMapping("/platform/{platform}")
    public ResponseEntity<List<Feature>> getPlatformFeatures(
            @PathVariable String platform) {

        log.info("Fetching features for platform: {}", platform);
        return ResponseEntity.ok(featureService.getPlatformFeatures(platform));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Feature>> searchFeatures(
            @RequestParam String query) {

        log.info("Searching features with query: {}", query);
        return ResponseEntity.ok(featureService.searchFeatures(query));
    }
}
