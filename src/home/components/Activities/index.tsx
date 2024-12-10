import React from 'react';
import ActivityCard from './ActivityCard';
import { activities } from './data';

export default function Activities() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          限时活动
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
} 