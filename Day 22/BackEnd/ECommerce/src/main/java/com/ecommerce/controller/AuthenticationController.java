package com.ecommerce.controller;
import com.ecommerce.constant.Api;
import com.ecommerce.request.AuthenticationRequest;
import com.ecommerce.request.RegisterRequest;
import com.ecommerce.response.AuthenticationResponse;
import com.ecommerce.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthService authService;
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        boolean isRegistered = authService.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("Something went wrong!");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authService.userAuthentication(request));
    }
    @PostMapping("/adminlogin")
    public ResponseEntity<AuthenticationResponse> adminauthenticate(@RequestBody AuthenticationRequest request) {
        AuthenticationResponse authenticationResponse = authService.userAuthentication(request);
        if (authenticationResponse != null && "ADMIN".equals(authenticationResponse.getRole())) {
            return ResponseEntity.ok(authenticationResponse);
        } else {
            return ResponseEntity.status(403).body(null);
        }
    }
}
