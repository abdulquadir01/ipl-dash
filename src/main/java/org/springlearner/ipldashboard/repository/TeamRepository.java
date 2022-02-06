package org.springlearner.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;
import org.springlearner.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    
    Team findByTeamName(String teamName);

}
