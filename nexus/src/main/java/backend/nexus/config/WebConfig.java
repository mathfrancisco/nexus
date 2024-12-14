// backend/src/main/java/com/nexus/analytics/config/WebConfig.java
package backend.nexus.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // Redireciona qualquer caminho que não comece com /api para o index.html
        registry.addViewController("/{x:^(?!api).*$}/**")
                .setViewName("forward:/index.html");
    }
}


