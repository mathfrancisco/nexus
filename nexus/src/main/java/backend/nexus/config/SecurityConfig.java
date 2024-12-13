package backend.nexus.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;


import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:4200")); // Permitindo somente a sua origem
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE")); // Permitindo todos os métodos HTTP.  Restrinja se necessário.
        configuration.setAllowedHeaders(List.of("*")); // Permitindo todos os cabeçalhos.  Restrinja se necessário.
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Configuração do CORS
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/api/v1/**").permitAll() // Permite todos os endpoints da API
                )
                .csrf(csrf -> csrf.disable()); // Desabilita o CSRF (apenas para desenvolvimento/teste.  **Não recomendado para produção**)

        return http.build();
    }
}
