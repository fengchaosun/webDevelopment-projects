const team = {
  
  _players: [
    {firstName: 'Pablo', lastName: 'Sanchez', age: 21},
    {firstName: 'James', lastName: 'Robertson', age: 23},
    {firstName: 'Daniel', lastName: 'Smith', age: 20}
  ],
  
  _games: [
    {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
    {opponent: 'Horsee', teamPoints: 32, opponentPoints: 37},
    {opponent: 'Whale', teamPoints: 43, opponentPoints: 29},
  ],
  
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games;
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },
  
  addGame(oppName, points, oppPoints) {
    let game = {
      opponent: oppName,
      teamPoints: points,
      opponentPoints: oppPoints,
    };
    this.games.push(game);
	}
}

  team.addGame('lioin', 33, 24)
console.log(team.games)


