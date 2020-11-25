export interface User {
    uid?: string;
    userId?: string;
    displayName?: string;
    email?: string;
    photoUrl?: string;
    title?: string;
    age?: number;
    handicap?: number;
    score?: Par;
    total?: number;
}

export interface Game {
    id?: string;
    name?: string;
    courses?: Course[];
    ongoing?: boolean;
    date?: Date;
    players?: User[];
}

export interface Course {
    id?: string;
    name?: string;
    pars?: Par[];
    players?: User[];
}
export interface Par {
    hole1?: number;
    hole1Putt?: number;
    hole2?: number;
    hole2Putt?: number;
    hole3?: number;
    hole3Putt?: number;
    hole4?: number;
    hole4Putt?: number;
    hole5?: number;
    hole5Putt?: number;
    hole6?: number;
    hole6Putt?: number;
    hole7?: number;
    hole7Putt?: number;
    hole8?: number;
    hole8Putt?: number;
    hole9?: number;
    hole9Putt?: number;
    hole10?: number;
    hole10Putt?: number;
    hole11?: number;
    hole11Putt?: number;
    hole12?: number;
    hole12Putt?: number;
    hole13?: number;
    hole13Putt?: number;
    hole14?: number;
    hole14Putt?: number;
    hole15?: number;
    hole15Putt?: number;
    hole16?: number;
    hole16Putt?: number;
    hole17?: number;
    hole17Putt?: number;
    hole18?: number;
    hole18Putt?: number;
    total?: number;
}

export interface SignUpData {
    email: string;
}

export interface GameStats {
    index?: number;
    users?: User[];
}

export interface PlayerDialogData {
    players: User[];
}

export interface CourseDialogData {
    courses: Course[];
}
