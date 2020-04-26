package com.akshat.service;

import com.akshat.model.Project;
import com.akshat.repository.ProjectRepository;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service(value = "ProjectService")
public class ProjectService {

    @Resource(name = "ProjectRepository")
    private ProjectRepository projectRepository;

    public Project addProject(Project project)
    {
        return projectRepository.save(project);
    }

    public List<Project> viewAllProjects()
    {
        return projectRepository.findAll();
    }

    public Optional<Project> viewProject(Long id)
    {
        return projectRepository.findById(id);
    }

    public List<JSONObject> getAllProjectNames()
    {
        List<Object[]> allProjects = projectRepository.getNames();
        List<JSONObject> allNames = new ArrayList<>();
        for(Object[] obj : allProjects)
        {
            JSONObject jo = new JSONObject();
            jo.put("id",obj[0]);
            jo.put("name",obj[1]);
            allNames.add(jo);
        }
        return allNames;

    }
}
