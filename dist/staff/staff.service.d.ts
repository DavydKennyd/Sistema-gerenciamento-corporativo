export type Staff = any;
export declare class StaffService {
    private readonly staff;
    findOne(username: string): Promise<Staff | undefined>;
}
