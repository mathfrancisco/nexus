package backend.nexus.config;


import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI nexusAnalyticsApi() {
        return new OpenAPI()
                .info(new Info()
                        .title("Nexus Analytics API")
                        .description("API for social media analytics and ROI tracking")
                        .version("1.0")
                        .license(new License()
                                .name("Apache 2.0")
                                .url("http://springdoc.org")));
    }
}
