package com.security.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(com.ecommerce.constant.Api.CUSTOMER)
@RequiredArgsConstructor
@Tag(name = "Customer")
public class CustomerController {

    @GetMapping
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok().body("Hello Customer");
    }
}