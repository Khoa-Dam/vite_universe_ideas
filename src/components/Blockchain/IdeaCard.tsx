import { Idea } from '@/lib/idea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function IdeaCard({ idea }: { idea: Idea }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{idea.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{idea.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                    Posted on: {idea.createdAt.toLocaleString()}
                </p>
            </CardContent>
        </Card>
    );
}

