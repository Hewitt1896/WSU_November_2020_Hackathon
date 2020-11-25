import { User } from 'src/app/model/model';


export const filterCoursePlayers = (coursePlayers: User[], allPlayers: User[]): User[] => {
    coursePlayers.forEach(player =>
        allPlayers.forEach((player2, index) => {
            if (player.email === player2.email) {
                allPlayers.splice(index, 1);
            }
        }));
    return allPlayers;
}