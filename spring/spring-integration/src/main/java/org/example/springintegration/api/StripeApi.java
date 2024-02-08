package org.example.springintegration.api;

import lombok.RequiredArgsConstructor;
import org.example.springintegration.dto.StripeChargeDto;
import org.example.springintegration.dto.StripeTokenDto;
import org.example.springintegration.service.StripeService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stripe")
@RequiredArgsConstructor
public class StripeApi {
    private final StripeService stripeService;

    @PostMapping("/card/token")
    @ResponseBody
    public StripeTokenDto createCardToken(@RequestBody StripeTokenDto model) {
        return stripeService.createCardToken(model);
    }
    @PostMapping("/charge")
    @ResponseBody
    public StripeChargeDto createCardToken(@RequestBody StripeChargeDto model) {
        return stripeService.charge(model);
    }
}
