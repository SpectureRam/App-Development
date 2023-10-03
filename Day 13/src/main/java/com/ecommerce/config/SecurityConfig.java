package com.ecommerce.config;

import static com.ecommerce.entity.enumerate.Permission.*;
import static com.ecommerce.entity.enumerate.Role.ADMIN;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.ecommerce.constant.Api;

import lombok.RequiredArgsConstructor;
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

        private final JwtAuthenticationFilter jwtAuthenticationFilter;
        private final AuthenticationProvider authenticationProvider;

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
                httpSecurity
                                .cors(corsConfirguarationSource -> corsConfirguarationSource.configurationSource(
                                                corsConfigurationSource()))
                                .csrf(csrf -> csrf.disable())
                                .authorizeHttpRequests(authorize -> authorize
                                                .requestMatchers(Api.AUTH + "/**")
                                                .permitAll()
                                                .requestMatchers(Api.ADMIN + "/**")
                                                .hasRole(ADMIN.name())
                                                .requestMatchers(GET, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_READ.name())
                                                .requestMatchers(POST, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_CREATE.name())
                                                .requestMatchers(PUT, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_UPDATE.name())
                                                .requestMatchers(DELETE, Api.ADMIN + "/**")
                                                .hasAuthority(ADMIN_DELETE.name())
                                                .requestMatchers(Api.CUSTOMER + "/**")
                                                .hasAnyRole(ADMIN.name(), CUSTOMER.name())
                                                .requestMatchers(GET, Api.CUSTOMER + "/**")
                                                .hasAnyAuthority(ADMIN_READ.name(), CUSTOMER_READ.name())
                                                .requestMatchers(POST, Api.CUSTOMER + "/**")
                                                .hasAnyAuthority(ADMIN_CREATE.name(), CUSTOMER_CREATE.name())
                                                .requestMatchers(PUT, Api.CUSTOMER + "/**")
                                                .hasAnyAuthority(ADMIN_UPDATE.name(), CUSTOMER_UPDATE.name())
                                                .requestMatchers(DELETE, Api.CUSTOMER + "/**")
                                                .hasAnyAuthority(ADMIN_DELETE.name(), CUSTOMER_DELETE.name())
                                                .anyRequest().authenticated())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
                return httpSecurity.build();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration configuration = new CorsConfiguration();
                configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
                configuration.setAllowCredentials(true);
                configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
                configuration.setAllowedOrigins(Arrays.asList(Api.REACT));
                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", configuration);
                return source;
        }
}
