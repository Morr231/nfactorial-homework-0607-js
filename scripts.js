import {
    checkIfExist,
    addPlayer as AP,
    addPlayers,
    chooseMainTeamPlayers as MP,
    playGame as PG,
    chooseCaptain as CC,
} from "./functions.js";

const allPlayers = () => {
    console.log(football.command);
};

const football = {
    commandName: "Dalida's football team",
    command: [],
    mainTeam: [],
    numberOfMembers: 0,
    isPlaying: false,
    captain: "",

    checkIfExist: checkIfExist,
    addPlayer: AP,
    addPlayers: addPlayers,
    chooseMainTeamPlayers: MP,
    playGame: PG,
    chooseCaptain: CC,
};

football.isStore = false;
delete football.isStore;

football.addPlayer({ name: "Nurali", position: "forward", height: "190" });

console.log("Init team", football);

console.log("Player exists", football.checkIfExist({ name: "Nurali" }));

const newPlayers = [
    { name: "Almaz", position: "forward", height: "180" },
    { name: "Djoni", position: "goalkeeper", height: "183" },
];

football.addPlayers([...newPlayers]);

console.log("New players added", football);

football.chooseMainTeamPlayers([...newPlayers]);

console.log("Main team", football.mainTeam);

football.playGame();

console.log("Playing game", football.isPlaying);

football.chooseCaptain({ name: "Almaz" });

console.log("Captain", football.captain);

allPlayers();
