export interface User {
    userId: number;
    fullName: string;
    email: string;
    passwordHash: string;
}

export interface UserProfile {
    userId: number;
    fullName: string;
    email: string;
}

export type LoginRequest = {
    email: string;
    password: string;
};

export type LoginResponse = {
    user: User;
    token: string;
};

export type RegisterRequest = {
    fullName: string;
    email: string;
    password: string;
};

export type EditProfileRequest = {
    fullName: string;
    email: string;
};

export type ChangePasswordRequest = {
    oldPassword: string;
    newPassword: string;
};
