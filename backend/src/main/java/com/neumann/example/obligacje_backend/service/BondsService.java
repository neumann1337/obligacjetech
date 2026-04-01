package com.neumann.example.obligacje_backend.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.neumann.example.obligacje_backend.model.Bond;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class BondsService {

    private List<Bond> bondsCache = new ArrayList<>();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @PostConstruct
    public void loadData() {
        try {
            InputStream inputStream = new ClassPathResource("bonds.json").getInputStream();
            
            this.bondsCache = objectMapper.readValue(inputStream, new TypeReference<List<Bond>>(){});
            
            System.out.println(">>> Bonds database loaded: " + bondsCache.size() + " items.");
            
        } catch (IOException e) {
            System.err.println("Error reading JSON database. Is 'bonds.json' in src/main/resources?");
        }
    }

    public List<Bond> getBondsList() {
        return bondsCache;
    }
}