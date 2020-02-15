package com.beneluwi.jwtpwa.authentication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/")
public class AuthController {

    @GetMapping(value = "public")
    public String getMessage() {
        return "Hello from public API controller";
    }

    @GetMapping(value = "private")
    public String getPrivateMessage() {
        return "Hello from private API controller";
    }

}
