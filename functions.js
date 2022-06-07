function checkIfExist({ team, name }) {
    let inTeam = false;
    let football = team ? team : this;

    for (let el of football.command) {
        if (name === el.name) {
            inTeam = true;
            break;
        }
    }
    return inTeam;
}

function addPlayer({ name: n, position: p, height: h }) {
    if (!checkIfExist({ team: this, name: n })) {
        this.command.push({ name: n, position: p, height: h });
        this.numberOfMembers++;
    }
}

function addPlayers(players) {
    for (let el of [...players]) {
        this.addPlayer({
            name: el.name,
            position: el.position,
            height: el.height,
        });
    }
}

function chooseMainTeamPlayers(players) {
    const mainTeamFiltered = players.filter((el) => {
        return checkIfExist({ team: this, name: el.name });
    });

    const mainTeamMapped = mainTeamFiltered.map((el) => {
        return (el.name = `Main Team ${el.name}`);
    });

    this.mainTeam = mainTeamMapped;
}

function playGame() {
    this.isPlaying = true;
}

function chooseCaptain({ name }) {
    if (checkIfExist({ team: this, name: name })) {
        this.captain = name;
    }
}

export {
    checkIfExist,
    addPlayer,
    addPlayers,
    chooseMainTeamPlayers,
    playGame,
    chooseCaptain,
};
