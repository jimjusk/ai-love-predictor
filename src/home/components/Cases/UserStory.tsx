import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
//import Image from 'next/image';
import { Story, stories } from './data';
import { ChevronLeft, ChevronRight } from './Icons';
import Avatar from './Avatar';

export default function UserStory() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    // 自动轮播
    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoplayInterval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {stories.map((story: Story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>

      {/* 导航按钮 */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 shadow-lg hover:bg-background transition-colors"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 shadow-lg hover:bg-background transition-colors"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 指示器 */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex
                ? 'bg-primary'
                : 'bg-primary/20'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

// 抽取 StoryCard 子组件
function StoryCard({ story }: { story: Story }) {
  return (
    <div className="flex-[0_0_100%] min-w-0 relative px-4 sm:px-8">
      <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <Avatar
            src={story.avatar}
            alt={story.name}
            fallback={story.name.charAt(0)}
          />
          <div>
            <h3 className="font-semibold text-lg">{story.name}</h3>
            <p className="text-muted-foreground text-sm">
              {story.location}
            </p>
          </div>
        </div>
        <blockquote className="text-lg italic mb-6">
          "{story.quote}"
        </blockquote>
        <div className="text-sm text-muted-foreground">
          {story.matchDate}
        </div>
      </div>
    </div>
  );
} 