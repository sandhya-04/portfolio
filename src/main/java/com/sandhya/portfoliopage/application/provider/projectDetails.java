package com.sandhya.portfoliopage.application.provider;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class projectDetails {
    private Long id;
    private String projectTitle;
    private String projectDescription;
    private String projectSourceLink;
}