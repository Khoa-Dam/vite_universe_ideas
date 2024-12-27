'use server'

import { addIdea } from '@/lib/idea';

export async function createIdea(formData: FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    if (!title || !description) {
        return { error: 'Title and description are required' };
    }

    const newIdea = addIdea(title, description);
    return { success: true, idea: newIdea };
}

