'use client';

import React from 'react';
import Image from 'next/image';

export default function FeedbackState({
  type = 'loading',
  title,
  message,
  actionLabel,
  onAction,
}) {
  const isLoading = type === 'loading';
  const isError = type === 'error';

  const defaultTitle = isLoading
    ? 'Just a moment'
    : isError
    ? 'We hit a snag'
    : 'Nothing to show yet';

  const defaultMessage = isLoading
    ? "We're fetching the latest insights for you."
    : isError
    ? 'Something went wrong while loading this section.'
    : 'Once there’s data, it’ll appear here.';

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <div className="mx-auto mb-4 h-16 w-16 relative">
          {isLoading ? (
            <div className="h-16 w-16 rounded-full border-4 border-gray-200/60 border-t-lemon-300 border-r-lemon-200 animate-spin mx-auto shadow-sm" />
          ) : (
            <div className="h-16 w-16 rounded-full bg-red-50 flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-red-600"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.004c1.155-1.999 4.043-1.999 5.198 0l6.745 11.67c1.155 1.999-.289 4.5-2.599 4.5H5.255c-2.31 0-3.754-2.501-2.6-4.5l6.746-11.67zM12 8.25a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          {title || defaultTitle}
        </h3>
        <p className="text-gray-600 mt-1">{message || defaultMessage}</p>
        {isError && onAction ? (
          <button
            onClick={onAction}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-black-200 px-4 py-2 text-white hover:opacity-90 focus:outline-none"
          >
            {actionLabel || 'Try again'}
          </button>
        ) : null}
      </div>
    </div>
  );
}
