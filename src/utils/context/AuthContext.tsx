type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): Promise<void>;
}

type AuthData = {
    token: string;
    email: string;
    name: string;
}