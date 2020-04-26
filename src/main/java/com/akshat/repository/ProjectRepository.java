package com.akshat.repository;

import com.akshat.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository(value = "ProjectRepository")
public interface ProjectRepository extends JpaRepository<Project,Long> {

    @Query(value = "SELECT id,name from project",nativeQuery = true)
    List<Object[]> getNames();
}
