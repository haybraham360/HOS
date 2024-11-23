import { AdminDataStruct } from "./struct";

interface AuthResponse{
    status: boolean,
    message: string,
    data?: AdminDataStruct,
}

interface BlogStruct{
    title: string,
    description: string,
    content: string,
    keywords: string,
    status: "published" | "draft" | "archived",
}

export type { AuthResponse, BlogStruct };