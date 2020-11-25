import { User } from 'src/app/model/model';


export const calculateTotal = (players: User[]): User[] => {
    players.forEach(player => {
        player.score.total = player.score.hole1 + player.score.hole2 +
            player.score.hole3 + player.score.hole4 + player.score.hole5 +
            player.score.hole6 + player.score.hole7 + player.score.hole8 +
            player.score.hole9 + player.score.hole10 + player.score.hole11 +
            player.score.hole12 + player.score.hole13 + player.score.hole14 +
            player.score.hole15 + player.score.hole16 + player.score.hole17 +
            player.score.hole18;
    })
    return players;
}