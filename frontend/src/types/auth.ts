export type Login = {
    email: string;
    password: string;
}

export type Register = {
    username: string;
    email: string;
    password: string;
}

export type AuthResponse = {
    success: boolean;
    message: string;
}