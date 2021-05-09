package com.sandhya.portfoliopage.infra.controller;
import java.util.List;

import com.sandhya.portfoliopage.application.provider.projectDetails;
import com.sandhya.portfoliopage.application.provider.ProjectDetailsProvider;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@Slf4j
public class ProjectController {
    private final ProjectDetailsProvider projectDetailsProvider;
    @GetMapping(value="/api/project/details")
    public List<projectDetails> getAllProjectDetails() {
        log.info("Controller hit");
        return projectDetailsProvider.getAllProjectDetails();
    }

}