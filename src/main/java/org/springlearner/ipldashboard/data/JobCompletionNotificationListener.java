package org.springlearner.ipldashboard.data;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springlearner.ipldashboard.models.Team;




@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

  private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

  private final EntityManager entityManager;
  private final JdbcTemplate jdbcTemplate;

  public JobCompletionNotificationListener(EntityManager entityManager, JdbcTemplate jdbcTemplate) {
    this.entityManager = entityManager;
      this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  @Transactional
  public void afterJob(JobExecution jobExecution) {
    if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
      log.info("!!! JOB FINISHED! Time to verify the results");

      Map<String, Team> teamData = new HashMap<>();

      entityManager.createQuery("select m.team1, count(*) from Match m group by m.team1", Object[].class)
          .getResultList()
          .stream()
          .map(e -> new Team((String) e[0], (long) e[1]))
          .forEach(team -> teamData.put(team.getTeamName(), team));

      entityManager.createQuery("select m.team2, count(*) from Match m group by m.team2", Object[].class)
          .getResultList()
          .stream()
          .forEach(e -> {
            Team team = teamData.get((String) e[0]);
            team.setTotalMatches(team.getTotalMatches() + (long)e[1]);
          }); 
          
      entityManager.createQuery("select m.matchWinner, count(*) from Match m group by m.matchWinner", Object[].class)
          .getResultList()
          .stream()
          .forEach( e -> {
            Team team = teamData.get((String)e[0]);
            if(team != null)
                team.setTotalWins((long) e[1]);
          });

      teamData.values().forEach(team ->{
        entityManager.persist(team);
      });

      teamData.values().forEach(team ->{
        System.out.println(team);
      });
      System.out.println("Data loaded successfully...");

//       jdbcTemplate.query( "SELECT team1, team2, date FROM match",
//       (rs, row) -> "Team 1 " + rs.getString(1) + " Team 2 " + rs.getString(2) + " Date " + rs.getString(3)
//       ).forEach(str -> System.out.println(str));
    }
  }
}