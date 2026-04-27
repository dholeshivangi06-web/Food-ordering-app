/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

package com.biteflow.model;

import java.util.UUID;

public class User {
    private String id;
    private String email;
    private String password; // Should be hashed in production
    private String fullName;
    private String phoneNumber;

    public User() {
        this.id = UUID.randomUUID().toString();
    }

    public User(String email, String password, String fullName) {
        this();
        this.email = email;
        this.password = password;
        this.fullName = fullName;
    }

    // Getters and Setters
    public String getId() { return id; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
}
