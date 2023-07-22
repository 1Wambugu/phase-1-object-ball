const game = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        // Add other players for the Brooklyn Nets if needed
      ],
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        // Add other players for the Charlotte Hornets if needed
      ],
    },
  };
  function numPointsScored(playerName) {
    for (const team of Object.values(game)) {
      for (const player of team.players) {
        if (player.name === playerName) {
          return player.points;
        }
      }
    }
    return null; // Return null if the player is not found
  }
  function shoeSize(playerName) {
    for (const team of Object.values(game)) {
      for (const player of team.players) {
        if (player.name === playerName) {
          return player.shoe;
        }
      }
    }
    return null; // Return null if the player is not found
  }
  function teamColors(teamName) {
    for (const team of Object.values(game)) {
      if (team.teamName === teamName) {
        return team.colors;
      }
    }
    return null; // Return null if the team is not found
  }
  function teamNames() {
    return Object.values(game).map((team) => team.teamName);
  }
  function playerNumbers(teamName) {
    for (const team of Object.values(game)) {
      if (team.teamName === teamName) {
        return team.players.map((player) => player.number);
      }
    }
    return null; // Return null if the team is not found
  }
  function playerStats(playerName) {
    for (const team of Object.values(game)) {
      for (const player of team.players) {
        if (player.name === playerName) {
          return {
            number: player.number,
            shoe: player.shoe,
            points: player.points,
            rebounds: player.rebounds,
            assists: player.assists,
            steals: player.steals,
            blocks: player.blocks,
            slamDunks: player.slamDunks,
          };
        }
      }
    }
    return null; // Return null if the player is not found
  }
  function bigShoeRebounds() {
    let largestShoeSize = -1;
    let rebounds = 0;
  
    for (const team of Object.values(game)) {
      for (const player of team.players) {
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          rebounds = player.rebounds;
        }
      }
    }
  
    return rebounds;
  }
  function mostPointsScored() {
    let mostPoints = -1;
    let playerName = "";
  
    for (const team of Object.values(game)) {
      for (const player of team.players) {
        if (player.points > mostPoints) {
          mostPoints = player.points;
          playerName = player.name;
        }
      }
    }
  
    return playerName;
  }
  function winningTeam() {
    let mostPoints = -1;
    let winningTeamName = "";
  
    for (const team of Object.values(game)) {
      let teamPoints = team.players.reduce((total, player) => total + player.points, 0);
      if (teamPoints > mostPoints) {
        mostPoints = teamPoints;
        winningTeamName = team.teamName;
      }
    }
  
    return winningTeamName;
  }
  function playerWithLongestName() {
    let longestNameLength = -1;
    let playerName = "";
  
    for (const team of Object.values(game)) {
      for (const player of team.players) {
        if (player.name.length > longestNameLength) {
          longestNameLength = player.name.length;
          playerName = player.name;
        }
      }
    }
  
    return playerName;
  }
  function doesLongNameStealATon() {
    const longNamePlayer = playerStats(playerWithLongestName());
    const mostStealsPlayer = mostSteals();
  
    return longNamePlayer.steals > mostStealsPlayer.steals;
  }
  
  // Helper function to find the player with the most steals
  function mostSteals() {
    let mostSteals = -1;
    let playerWithMostSteals = null;
  
    for (const team of Object.values(game)) {
      for (const player of team.players) {
        if (player.steals > mostSteals) {
          mostSteals = player.steals;
          playerWithMostSteals = player;
        }
      }
    }
  
    return playerWithMostSteals;
  }
                        