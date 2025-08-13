export interface User {
    UserId: number;
    FullName: string;
    Email: string;
    PasswordHash: string;
}

export interface UserProfile {
    UserId: number;
    FullName: string;
    Email: string;
}

export type LoginRequest = {
    email: string;
    password: string;
};

export type LoginResponse = {
    user: User;
    token: string;
};
