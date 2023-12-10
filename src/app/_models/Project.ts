import { Tag } from "./Tag";


//  Eigenes Projekt Objekt damit man dies später zuweisen kann
export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tags: Tag[];
}