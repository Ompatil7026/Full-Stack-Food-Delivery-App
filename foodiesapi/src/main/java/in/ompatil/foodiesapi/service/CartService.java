package in.ompatil.foodiesapi.service;

import in.ompatil.foodiesapi.io.CartRequest;
import in.ompatil.foodiesapi.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    void clearCart();

    CartResponse removeFromCart(CartRequest cartRequest);
}
