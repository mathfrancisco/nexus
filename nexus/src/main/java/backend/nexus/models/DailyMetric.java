package backend.nexus.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DailyMetric {
    private LocalDate date;
    private Integer value;
    private Double growth;
    private MetricType type;
    private String label;

    public enum MetricType {
        FOLLOWERS,
        ENGAGEMENT,
        VIEWS,
        INTERACTIONS
    }
}
