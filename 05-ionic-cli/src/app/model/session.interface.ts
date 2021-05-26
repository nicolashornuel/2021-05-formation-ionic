import { Speaker } from "./speaker.interface";

export interface Session {
    id: number;
    title: string;
    titleMobile: string;
    image: string;
    description: string;
    type: string;
    track: any;
    category: string;
    language: string;
    tags: any;
    complexity: string;
    speakers: number[];
}