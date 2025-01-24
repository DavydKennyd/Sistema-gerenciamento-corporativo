import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(username: string, password: string): Promise<{
        access_token: string;
    }>;
}
