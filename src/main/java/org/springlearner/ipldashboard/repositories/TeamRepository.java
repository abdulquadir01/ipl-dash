package org.springlearner.ipldashboard.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springlearner.ipldashboard.models.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {
    
    Team findByTeamName(String teamName);

}
