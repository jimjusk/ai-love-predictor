import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCountdown } from './hooks';
import { Activity } from './types';

export default function ActivityCard({ title, description, image, endTime, link, discount }: Activity) {
  const { days, hours, minutes } = useCountdown(endTime);
  const isExpired = days <= 0 && hours <= 0 && minutes <= 0;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-background shadow-lg transition-transform hover:-translate-y-1">
      <div className="aspect-[16/9] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {!isExpired && (
          <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 text-sm font-medium">
            剩余 {days}天 {hours}时 {minutes}分
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {discount && (
          <div className="text-primary font-semibold mb-4">
            {discount}
          </div>
        )}
        <Link
          href={link}
          className={`
            inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium
            transition-colors
            ${isExpired 
              ? 'bg-muted text-muted-foreground cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/90'
            }
          `}
          {...(isExpired && { 'aria-disabled': true, onClick: (e) => e.preventDefault() })}
        >
          {isExpired ? '活动已结束' : '立即参与'}
        </Link>
      </div>
    </div>
  );
} 