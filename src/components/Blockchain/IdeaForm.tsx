'use client'

import { useRef, useState } from 'react';
import { createIdea } from '../../utils/validateform';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function IdeaForm({ onIdeaCreated }: { onIdeaCreated: () => void }) {
    const formRef = useRef<HTMLFormElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // Ngăn chặn hành động submit mặc định của form (submit qua URL)
        event.preventDefault();

        // Lấy dữ liệu từ form
        const formData = new FormData(formRef.current!);
        
        // Gọi hàm createIdea
        const result = await createIdea(formData);
        if (result.success) {
            formRef.current?.reset();
            setIsVisible(false);
            onIdeaCreated();
        } else {
            alert(result.error);
        }
    }

    if (!isVisible) {
        return (
            <Button onClick={() => setIsVisible(true)}>New Idea</Button>
        );
    }

    return (
        <Card className='w-full'>
            <CardHeader>
                <CardTitle>Post a New Idea</CardTitle>
            </CardHeader>
            {/* Sử dụng onSubmit thay vì action */}
            <form ref={formRef} onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div>
                        <Input type="text" name="title" placeholder="Title" required />
                    </div>
                    <div>
                        <Textarea name="description" placeholder="Description" required />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setIsVisible(false)}>Cancel</Button>
                    <Button type="submit">Post Idea</Button>
                </CardFooter>
            </form>
        </Card>
    );
}
