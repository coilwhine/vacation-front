export enum UserRole {
    user,
    admin
}

export interface TokenModel {
    sub: number,
    firstName: string,
    lastName: string,
    email: string,
    userRole: UserRole
}

export interface UserModel {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    password?: string,
    userRole?: UserRole
}