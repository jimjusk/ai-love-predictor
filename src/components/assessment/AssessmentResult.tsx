"use client";

import { motion } from 'framer-motion';
import type { AssessmentResult as AssessmentResultType } from '@/types/assessment';

interface Props {
  result: AssessmentResultType;
}

export default function AssessmentResult({ result }: Props) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">测评结果</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">匹配度分析</h2>
          <p className="text-gray-600">{result.analysis}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">建议</h2>
          <ul className="list-disc list-inside space-y-2">
            {result.suggestions.map((suggestion, index) => (
              <li key={index} className="text-gray-600">{suggestion}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">匹配指数</h2>
          <div className="flex items-center">
            <div className="text-4xl font-bold text-primary">
              {result.score}%
            </div>
            <div className="ml-4 text-gray-600">
              {result.score >= 80 ? '非常匹配' :
               result.score >= 60 ? '比较匹配' :
               result.score >= 40 ? '一般匹配' : '匹配度较低'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 