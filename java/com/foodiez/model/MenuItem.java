/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

package com.foodiez.model;

import java.util.List;
import java.util.ArrayList;

public class MenuItem {
    private String id;
    private String name;
    private double basePrice;
    private String description;
    private List<String> variations; // e.g., ["Small", "Large"] or ["Mild", "Spicy"]
    private String selectedVariation;

    public MenuItem(String id, String name, double basePrice, List<String> variations) {
        this.id = id;
        this.name = name;
        this.basePrice = basePrice;
        this.variations = variations;
    }

    // Getters and Setters
    public String getId() { return id; }
    public String getName() { return name; }
    public double getPrice() { 
        // Logic to adjust price based on variation could go here
        return basePrice; 
    }
    public List<String> getVariations() { return variations; }
    public void setSelectedVariation(String variation) { this.selectedVariation = variation; }
    public String getSelectedVariation() { return selectedVariation; }
}
