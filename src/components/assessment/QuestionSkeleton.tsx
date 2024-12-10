import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

export function QuestionSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-8 w-3/4" />
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-16 w-full" />
        ))}
      </div>

      <div className="flex justify-between">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
} 