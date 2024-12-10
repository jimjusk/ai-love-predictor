"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/contexts/ToastContext';
import { Loading } from '@/components/ui/Loading';
import { QuestionSkeleton } from './QuestionSkeleton';
import { FormError } from '@/components/ui/FormError';
import { questions as questionsData } from '@/data/questions';

const answerSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string(),
      answer: z.union([
        z.string().min(1, '请选择一个选项'),
        z.array(z.string()).min(1, '请至少选择一个选项'),
        z.number().min(1, '请选择一个值').max(10, '请选择一个有效值'),
      ]),
    })
  ),
});

type AssessmentFormData = z.infer<typeof answerSchema>;

export default function AssessmentForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, setValue } = useForm<AssessmentFormData>({
    resolver: zodResolver(answerSchema),
    defaultValues: {
      answers: [],
    },
  });
  const { showToast } = useToast();
  
  // 直接使用中文问题数据
  const questions = questionsData['zh-CN'];
  const currentAnswer = watch(`answers.${currentStep}.answer`);
  const currentQuestion = questions?.[currentStep];

  // 移动 useEffect 到顶部
  useEffect(() => {
    if (!questions) {
      console.error('Questions not found');
      router.push('/zh-CN');
      return;
    }

    if (currentQuestion) {
      register(`answers.${currentStep}.questionId`, {
        value: currentQuestion.id,
      });
    }
  }, [questions, currentStep, currentQuestion, register, router]);

  if (!questions || !currentQuestion) {
    return <QuestionSkeleton />;
  }

  const canProceed = () => {
    const answer = currentAnswer;
    if (!answer && answer !== 0) return false;
    
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }
    
    if (typeof answer === 'number') {
      return !isNaN(answer) && answer >= 1 && answer <= 10;
    }
    
    return answer.length > 0;
  };

  const handleNext = () => {
    if (!canProceed()) {
      showToast('请先回答当前问题', 'warning');
      return;
    }
    setCurrentStep((prev) => Math.min(questions.length - 1, prev + 1));
  };

  const onSubmit = async (formData: AssessmentFormData) => {
    try {
      const response = await fetch('/api/assessment/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers: formData.answers }),
      });
      
      if (!response.ok) {
        throw new Error('提交失败');
      }
      
      const result = await response.json();
      if (!result.id) {
        throw new Error('返回数据格式错误');
      }
      
      router.push(`/zh-CN/assessment/result/${result.id}`);
    } catch (error) {
      console.error('提交错误:', error);
      showToast(
        error instanceof Error ? error.message : '提交失败，请稍后重试',
        'error'
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="text-sm text-muted-foreground">
          问题 {currentStep + 1} / {questions.length}
        </div>
        <h2 className="text-2xl font-semibold mt-2">{currentQuestion.text}</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {currentQuestion.type === 'single' && (
          <div className="space-y-4">
            {currentQuestion.options?.map((option) => (
              <label
                key={option.value}
                className={`flex items-center space-x-3 p-4 rounded-lg border 
                  ${currentAnswer === option.value ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'} 
                  cursor-pointer transition-colors`}
              >
                <input
                  type="radio"
                  {...register(`answers.${currentStep}.answer`)}
                  value={option.value}
                  className="w-4 h-4 text-primary"
                />
                <span>{option.label}</span>
              </label>
            ))}
            {errors.answers?.[currentStep]?.answer && (
              <FormError message={errors.answers[currentStep].answer?.message || '请选择一个选项'} />
            )}
          </div>
        )}

        {currentQuestion.type === 'scale' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                {...register(`answers.${currentStep}.answer`, {
                  valueAsNumber: true,
                  value: currentAnswer || 5,
                })}
                className="flex-1"
              />
              <span className="text-lg font-semibold w-8 text-center">
                {currentAnswer || 5}
              </span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>非常不同意</span>
              <span>中立</span>
              <span>非常同意</span>
            </div>
            {errors.answers?.[currentStep]?.answer && (
              <FormError message={errors.answers[currentStep].answer?.message || '请选择一个值'} />
            )}
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0 || isSubmitting}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 
              rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors"
          >
            上一题
          </button>

          {currentStep < questions.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting || !canProceed()}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md 
                hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              下一题
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting || !canProceed()}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md 
                hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <Loading size="small" />
                  <span className="ml-2">提交中...</span>
                </div>
              ) : (
                '提交'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
} 