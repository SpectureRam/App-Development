package com.security.controller;

import com.ecommerce.constant.Api;
import com.ecommerce.dto.request.AuthenticationRequest;
import com.ecommerce.dto.request.RegisterRequest;
import com.ecommerce.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        boolean isRegistered = authService.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("Sommething went wrong!");
    }

    @PostMapping("/login")
    public ResponseEntity<com.iamneo.ecom.dto.response.AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        System.err.println(authService.userAuthentication(request));
        return ResponseEntity.ok(authService.userAuthentication(request));
    }
}
