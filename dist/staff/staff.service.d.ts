export type Staff = {
    userId: number;
    username: string;
    password: string;
};
export declare class StaffService {
    private readonly staff;
    findOne(username: string): Promise<Staff | undefined>;
}
