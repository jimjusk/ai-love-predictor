import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
  { label: '注册用户', value: 50000, suffix: '+' },
  { label: '成功匹配', value: 8888, suffix: '对' },
  { label: '好评率', value: 98, suffix: '%' },
];

export default function Statistics() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
    >
      {stats.map(({ label, value, suffix }) => (
        <div 
          key={label}
          className="text-center p-6"
        >
          <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
            {inView ? (
              <CountUp
                end={value}
                duration={2.5}
                separator=","
                suffix={suffix}
              />
            ) : '0'}
          </div>
          <div className="text-muted-foreground">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
} 