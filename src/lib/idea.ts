export type Idea = {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
};

let ideas: Idea[] = [];

export function getIdeas() {
    return ideas;
}

export function addIdea(title: string, description: string) {
    const newIdea: Idea = {
        id: Date.now().toString(),
        title,
        description,
        createdAt: new Date(),
    };
    ideas = [newIdea, ...ideas];
    return newIdea;
}

