// package org.springlearner.ipldashboard.controllers;

// import java.time.LocalDate;
// import java.util.List;

// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;
// import org.springlearner.ipldashboard.models.Match;
// import org.springlearner.ipldashboard.repositories.MatchRepository;
// import org.springlearner.ipldashboard.repositories.TeamRepository;


// @RestController
// @CrossOrigin
// public class MatchController {
    
//     private final TeamRepository teamRepository;
//     private final MatchRepository matchRepository;

//     public MatchController(TeamRepository teamRepository, MatchRepository matchRepository){
//         this.teamRepository = teamRepository;
//         this.matchRepository = matchRepository;
//     }


//     @GetMapping("/teams/{teamName}/matches")
//     public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year){
        
//         LocalDate startDate = LocalDate.of(year, 1, 1);
//         LocalDate endDate = LocalDate.of(year+1, 1, 1);

//         return matchRepository.getMatchesByTeamBetweenDates( teamName, startDate, endDate );
        
//     }

// }
