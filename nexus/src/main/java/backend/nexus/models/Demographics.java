package backend.nexus.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Demographics {
    private String ageRange;
    private Double percentage;
    private String location;
    private String gender;
    private Map<String, Double> interests;

    public Demographics(String ageRange, Double percentage) {
        this.ageRange = ageRange;
        this.percentage = percentage;
    }
}


