// backend/src/main/java/com/nexus/analytics/config/WebConfig.java
package backend.nexus.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/{x:^(?!api\\/v1).*$}.**") // ou  ("/{x:^(?!api).*$}/**") se sua api não tiver /v1
                .setViewName("forward:/index.html");
    }
}



