package com.akshat.model;

import javax.persistence.*;

@Entity
@Table(name = "JIRA")
public class Jira {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String priority;
    private int story_points;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "project_id")
    private Project project;

    private float sprint;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "assignee")
    private Employee assignee;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "assigned_to")
    private Employee assigned_to;
    private String date_created;

    private String status;
    private String date_ended;

    public Jira() {
    }

    public Jira(String title, String description,String priority, int story_points,Project project, float sprint,Employee assignee, Employee assigned_to, String date_created, String status, String date_ended ){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.story_points = story_points;
        this.project = project;
        this.sprint = sprint;
        this.assignee = assignee;
        this.assigned_to = assigned_to;
        this.date_created = date_created;
        this.status = status;
        this.date_ended = date_ended;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public int getStory_points() {
        return story_points;
    }

    public void setStory_points(int story_points) {
        this.story_points = story_points;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public float getSprint() {
        return sprint;
    }

    public void setSprint(float sprint) {
        this.sprint = sprint;
    }

    public Employee getAssignee() {
        return assignee;
    }

    public void setAssignee(Employee assignee) {
        this.assignee = assignee;
    }

    public Employee getAssigned_to() {
        return assigned_to;
    }

    public void setAssigned_to(Employee assigned_to) {
        this.assigned_to = assigned_to;
    }

    public String getDate_created() {
        return date_created;
    }

    public void setDate_created(String date_created) {
        this.date_created = date_created;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDate_ended() {
        return date_ended;
    }

    public void setDate_ended(String date_ended) {
        this.date_ended = date_ended;
    }

    @Override
    public String toString() {
        return "Jira{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", priority='" + priority + '\'' +
                ", story_points=" + story_points +
                ", project=" + project +
                ", sprint=" + sprint +
                ", assignee=" + assignee +
                ", assigned_to=" + assigned_to +
                ", date_created='" + date_created + '\'' +
                ", status='" + status + '\'' +
                ", date_ended='" + date_ended + '\'' +
                '}';
    }
}
