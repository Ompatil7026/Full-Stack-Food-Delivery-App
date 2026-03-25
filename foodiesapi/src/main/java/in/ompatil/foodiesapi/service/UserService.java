package in.ompatil.foodiesapi.service;

import in.ompatil.foodiesapi.io.UserRequest;
import in.ompatil.foodiesapi.io.UserResponse;

public interface UserService {

    UserResponse registerUser(UserRequest request);

    String findByUserId();
}
