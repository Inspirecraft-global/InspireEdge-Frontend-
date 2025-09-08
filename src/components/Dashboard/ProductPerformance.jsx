import React from 'react';
import ContentCards from '../cards/ContentCards';
import HeadIcons from '../../../public/icons/HeadIcons';
import Star from '../../../public/icons/Star';

export default function ProductPerformance({ data }) {
  const products = data?.productPerformance || [];

  if (products.length === 0) {
    return (
      <div className="manrope flex flex-col gap-4 w-full max-w-full">
        <h3 className="text-black-100 font-medium text-xl">
          Product Performance
        </h3>
        <p className="text-gray-400 text-sm">
          No product performance data available.
        </p>
      </div>
    );
  }

  return (
    <div className="manrope flex flex-col gap-4 w-full max-w-full">
      <h3 className="text-black-100 font-medium text-xl">
        Product Performance
      </h3>

      <div className="grid grid-cols-2 gap-6">
        {products.map((product) => (
          <ContentCards key={product.id}>
            <div className="flex gap-6">
              {/* Show product image if available, else HeadIcons */}
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded object-cover"
                />
              ) : (
                <HeadIcons />
              )}

              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-black-100">{product.name}</h3>

                {/* Rating section */}
                <div className="flex gap-2 items-center">
                  <Star />
                  <h3 className="text-xs text-gray-200">
                    {product.rating ? product.rating : 'No rating'}
                  </h3>
                </div>
              </div>
            </div>
            {product.sentimentTags?.length > 0 && (
              <div className="flex mt-4 gap-2 flex-wrap">
                {product.sentimentTags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-[#EDFCF2] rounded-full py-2 px-3 text-green-100 text-xs"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}

            {/* Customer feedback */}
            <h3 className="text-gray-200 mt-4 text-xs">
              {product.customerFeedback}
            </h3>
          </ContentCards>
        ))}
      </div>
    </div>
  );
}
