package com.sandhya.portfoliopage.application.provider;
import java.util.ArrayList;
import java.util.List;

import com.sandhya.portfoliopage.application.domain.project;
import com.sandhya.portfoliopage.application.exception.projectDetailsNotFound;
import com.sandhya.portfoliopage.application.repository.ProjectDetailsRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjectDetailsProvider {
    private final ProjectDetailsRepository projectDetailsRepository;
    public List<projectDetails> getAllProjectDetails() {
        try{
            return getListOfProjectDetails(projectDetailsRepository.findAll());
        }catch(RuntimeException e){
            throw new projectDetailsNotFound(e.getMessage());
        }
    }
    private List<projectDetails> getListOfProjectDetails(List<project> findAll) {
        List<projectDetails> projectDetailsList = new ArrayList<>();
        findAll.forEach(project -> projectDetailsList.add(projectDetails.builder()
                .id(project.getId())
                .projectDescription(project.getProjectDescription())
                .projectTitle(project.getProjectTitle())
                .projectSourceLink(project.getProjectSourceUrl())
                .build()));
        return projectDetailsList;
    }

}