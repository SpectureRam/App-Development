package com.security.controller;

import com.ecommerce.constant.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping(Api.ADMIN)
@RequiredArgsConstructor
@Tag(name = "Admin")
public class AdminController {

    @GetMapping
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok().body("Hello Admin");
    }
}

