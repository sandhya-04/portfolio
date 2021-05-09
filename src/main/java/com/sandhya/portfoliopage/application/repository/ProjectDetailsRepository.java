package com.sandhya.portfoliopage.application.repository;
import com.sandhya.portfoliopage.application.domain.project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectDetailsRepository extends JpaRepository<project,Long>{}
