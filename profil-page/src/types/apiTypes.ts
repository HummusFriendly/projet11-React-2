export interface ResponseWrapper<T> {
    data: T;
}

interface UserInfo {
    firstName: string;
    lastName: string;
    age: number;
}

export interface KeyData {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
}

export interface UserData {
    id: number;
    userInfos: UserInfo;
    todayScore?: number;
    score?: number;
    keyData: KeyData;
    firstName: string;
    lastName: string;
}

export interface ActivitySession {
    day: string;
    kilogram: number;
    calories: number;
}

export interface UserActivity {
    userId: number;
    sessions: ActivitySession[];
}

interface AverageSession {
    day: number;
    sessionLength: number;
}

export interface UserAverageSessions {
    userId: number;
    sessions: AverageSession[];
}

interface PerformanceData {
    value: number;
    kind: number;
}

export interface UserPerformance {
    userId: number;
    kind: { [key: number]: string };
    data: PerformanceData[];
}

export interface Data {
    USER_MAIN_DATA: UserData[];
    USER_ACTIVITY: UserActivity[];
    USER_AVERAGE_SESSIONS: UserAverageSessions[];
    USER_PERFORMANCE: UserPerformance[];
}
