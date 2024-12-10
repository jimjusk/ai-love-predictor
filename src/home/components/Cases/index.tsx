'use client';

import React from 'react';
import UserStory from './UserStory';
import { stories } from './data';

export default function Cases() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">成功案例</h2>
          <p className="text-muted-foreground">看看其他用户是如何找到真爱的</p>
        </div>
        <UserStory stories={stories} />
      </div>
    </section>
  );
} 