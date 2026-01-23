package com.neumann.example.obligacje_backend.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.neumann.example.obligacje_backend.model.Obligacja;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ObligacjeService {

    private List<Obligacja> obligacjeCache = new ArrayList<>();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @PostConstruct
    public void loadData() {
        try {
            File file = new ClassPathResource("obligacje.json").getFile();
            
            this.obligacjeCache = objectMapper.readValue(file, new TypeReference<List<Obligacja>>(){});
            
            System.out.println(">>> Baza obligacji załadowana: " + obligacjeCache.size() + " pozycji.");
            
        } catch (IOException e) {
            System.err.println("Błąd odczytu bazy JSON. Czy plik 'obligacje.json' jest w src/main/resources?");
        }
    }

    public List<Obligacja> getObligacjeList() {
        return obligacjeCache;
    }
}