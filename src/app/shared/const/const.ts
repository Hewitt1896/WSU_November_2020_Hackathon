import { Course } from './../../model/model';
export const STATES: string[] = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL',
    'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
    'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
    'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI',
    'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

export const PARS: number[] = [
    3,
    4,
    5
];

export const AGE: number[] = [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
    33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
    63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
    93, 94, 95, 96, 97, 98, 99
];

export const PARCOLUMNS: string[] = ['hole1', 'hole2', 'hole3', 'hole4', 'hole5', 'hole6', 'hole7', 'hole8', 'hole9', 'hole10',
    'hole11', 'hole12', 'hole13', 'hole14', 'hole15', 'hole16', 'hole17', 'hole18'];
export const PLAYERCOLUMNS: string[] = ['name', 'age', 'handicap', 'total'];
export const COURSECOLUMNS: string[] = ['name'];
export const GAMECOLUMNS: string[] = ['name', 'handicap', 'total', 'hole1', 'hole2', 'hole3', 'hole4', 'hole5', 'hole6', 'hole7', 'hole8',
    'hole9', 'hole10', 'hole11', 'hole12', 'hole13', 'hole14', 'hole15', 'hole16', 'hole17', 'hole18'];

export const GAME_API_URL = 'https://3f6uui6qmj.execute-api.us-east-1.amazonaws.com/Dev/game';
export const COURSE_API_URL = 'https://3f6uui6qmj.execute-api.us-east-1.amazonaws.com/Dev/course';
export const USER_API_URL = 'https://3f6uui6qmj.execute-api.us-east-1.amazonaws.com/Dev/users';
export const UPDATE_COURSE_URL = 'https://3f6uui6qmj.execute-api.us-east-1.amazonaws.com/Dev/updateCourse';