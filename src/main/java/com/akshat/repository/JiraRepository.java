package com.akshat.repository;

import com.akshat.model.Jira;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository(value = "JiraRepository")
public interface JiraRepository extends JpaRepository<Jira,Long> {

    @Query(value = "select status, count(*) as status_count from jira group by status", nativeQuery = true)
    List<Object[]> getJiraStatus();

    @Transactional
    @Modifying
    @Query(value = "update jira set status = :newStatus where id = :jiraId ",nativeQuery = true)
    void updateStatus(@Param("jiraId") Long jiraId, @Param("newStatus") String newStatus);

}
