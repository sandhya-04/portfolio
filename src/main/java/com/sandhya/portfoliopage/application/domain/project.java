package com.sandhya.portfoliopage.application.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;

@Entity
@Table(name="project_details")
@Getter
public class project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "project_title")
    private String projectTitle;

    @Column(name = "project_description")
    private String projectDescription;

    @Column(name = "project_source_url")
    private String projectSourceUrl;
}