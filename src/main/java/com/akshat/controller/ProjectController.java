package com.akshat.controller;

import com.akshat.model.Project;
import com.akshat.service.ProjectService;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/project")
public class ProjectController {

    @Resource(name = "ProjectService")
    private ProjectService projectService;

    @PostMapping(value = "/add")
    public Project addProject(@RequestBody Project project)
    {
        return projectService.addProject(project);
    }

    @GetMapping(value = "/viewall")
    public List<Project> getAll()
    {
        return projectService.viewAllProjects();
    }

    @GetMapping(value = "/view/{id}")
    public Optional<Project> findProject(@PathVariable("id") Long id)
    {
        return projectService.viewProject(id);
    }

    @GetMapping(value = "/getnames")
    public List<JSONObject> getnames()
    {
        return projectService.getAllProjectNames();
    }
}
