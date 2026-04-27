/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

package com.foodiez.service;

import com.foodiez.model.User;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class AuthService {
    private Map<String, User> userDatabase = new HashMap<>();

    public User register(String email, String password, String fullName) throws Exception {
        if (userDatabase.containsKey(email)) {
            throw new Exception("User already exists with this email.");
        }
        User newUser = new User(email, password, fullName);
        userDatabase.put(email, newUser);
        return newUser;
    }

    public Optional<User> login(String email, String password) {
        User user = userDatabase.get(email);
        if (user != null && user.getPassword().equals(password)) {
            return Optional.of(user);
        }
        return Optional.empty();
    }

    public void updateProfile(String email, String newName, String newPhone) {
        User user = userDatabase.get(email);
        if (user != null) {
            user.setFullName(newName);
            user.setPhoneNumber(newPhone);
        }
    }
}
