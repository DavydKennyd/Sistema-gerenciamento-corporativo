import { StaffService } from '../staff/staff.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly staffService;
    private readonly jwtService;
    constructor(staffService: StaffService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<{
        access_token: string;
    }>;
}
