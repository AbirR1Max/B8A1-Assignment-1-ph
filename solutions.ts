const multiplyValue = (value: number, multiplier: number = 2) => {
    return value * multiplier
}

type inputType = number | string | boolean
const processInput = (input: number | string | boolean): number | string => {
    if (typeof input == "number") {
        return input * 10;
    }
    if (typeof input == "string") {
        let text = input.trim()
        return text.toLowerCase();
    }
    else {
        if (input == true) return 'Active';
        else return 'Inactive';
    }
}

const formatCoordinate = ([latitude, longitude, locationName]: readonly [number, number, string]) => {
    return `Location: ${locationName} (${latitude}, ${longitude})`
}

const concatenateArrays = <T>(...array: T[][]): T[] => {
    return array.flat()
}

interface Course {
    title: string,
    students: number,
    isPublished: boolean
}
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
const getPopularCourses = (array: Course[], minStudents: number) => {
    return array.filter((obj) => obj.isPublished == true && obj.students > minStudents)
}

const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {

    return items.map(item => item[key])
}

class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails() {
        return console.log(`Employee: ${this.name}, Base Salary: ${this.baseSalary}`);
    }
}

class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return console.log(`Manager of ${this.department}: ${this.name}`);
    }
}

const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => resolve("Access Granted"), 1000)
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"))
        }
    })
}