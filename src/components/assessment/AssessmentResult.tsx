"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { AssessmentResult } from '@/types/assessment';
import { formatNumber } from '@/lib/utils/format';

interface ResultProps {
  result: AssessmentResult;
}

export default function AssessmentResult({ result }: ResultProps) {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">测评结果</h1>
          <div className="text-5xl font-bold text-primary">
            {formatNumber(result.score)}
            <span className="text-base text-gray-500 ml-2">分</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {Object.entries(result.dimensions).map(([dimension, score]) => (
            <div
              key={dimension}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{dimension}</h3>
              <div className="relative h-2 bg-gray-200 rounded">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${score}%` }}
                  className="absolute h-full bg-primary rounded"
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="mt-2 text-sm text-gray-600">
                得分：{score}%
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">个性化建议</h2>
          {result.recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">{index + 1}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">{rec.title}</h3>
                  <p className="text-gray-600">{rec.description}</p>
                  {rec.score && (
                    <div className="mt-2 text-sm text-primary">
                      匹配度：{rec.score}%
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          <button
            onClick={() => router.push('/dashboard')}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            返回主页
          </button>
          <button
            onClick={() => router.push('/assessment')}
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
          >
            重新测评
          </button>
        </div>
      </motion.div>
    </div>
  );
} 