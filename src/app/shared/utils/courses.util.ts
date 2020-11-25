import { Course } from 'src/app/model/model'; import { User } from 'firebase';

export const filterCourses = (courses: Course[], allCourses: Course[]): Course[] => {
    courses.forEach(course =>
        allCourses.forEach((course2, index) => {
            if (course.name === course2.name) {
                allCourses.splice(index, 1);
            }
        }));
    console.log('tmpPlayers', allCourses);
    return allCourses;
}