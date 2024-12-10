import React from 'react';
import Statistics from './Statistics';
import UserStory from './UserStory';

export default function Cases() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          成功案例
        </h2>
        <Statistics />
        <UserStory />
      </div>
    </section>
  );
} 