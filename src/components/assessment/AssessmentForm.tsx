"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
//import { AssessmentQuestion, AssessmentAnswer } from '@/types/assessment';
import { getQuestions, submitAssessment } from '@/lib/assessment';
import { useToast } from '@/contexts/ToastContext';
import { Loading } from '@/components/ui/Loading';
import { QuestionSkeleton } from './QuestionSkeleton';
import { FormError } from '@/components/ui/FormError';

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
  const [questions, setQuestions] = useState<AssessmentQuestion[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, setValue } = useForm<AssessmentFormData>({
    resolver: zodResolver(answerSchema),
    defaultValues: {
      answers: [],
    },
  });
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  const currentAnswer = watch(`answers.${currentStep}.answer`);

  useEffect(() => {
    if (currentQuestion && !currentAnswer) {
      setValue(`answers.${currentStep}`, {
        questionId: currentQuestion.id,
        answer: currentQuestion.type === 'scale' ? 5 : '',
      });
    }
  }, [currentQuestion, currentStep, currentAnswer, setValue]);

  const canProceed = () => {
    const answer = currentAnswer;
    if (!answer) return false;
    
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }
    
    if (typeof answer === 'number') {
      return answer >= 1 && answer <= 10;
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

  useEffect(() => {
    async function loadQuestions() {
      try {
        setIsLoading(true);
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        showToast(
          error instanceof Error ? error.message : '加载问题失败',
          'error'
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadQuestions();
  }, [showToast]);

  const onSubmit = async (data: AssessmentFormData) => {
    try {
      const result = await submitAssessment(data.answers);
      router.push(`/assessment/result/${result.id}`);
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : '提交失败，请稍后重试',
        'error'
      );
    }
  };

  const currentQuestion = questions[currentStep];

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <QuestionSkeleton />
      </div>
    );
  }

  if (!currentQuestion) {
    return <div>加载中...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="text-sm text-muted-foreground">
          问题 {currentStep + 1} / {questions.length}
        </div>
        <h2 className="text-2xl font-semibold mt-2">{currentQuestion.question}</h2>
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
                {...register(`answers.${currentStep}.answer`, {
                  valueAsNumber: true,
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