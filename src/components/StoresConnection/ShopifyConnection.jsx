'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../UI/Modal';
import Image from 'next/image';
import shopImage from '../../../public/images/shopifyimg.png';
import { useConnectShopifyQuery } from '@/redux/DashboardApi';
import { InputField } from '@/components/form';
import { shopifyStoreValidation } from '@/components/form/validation';
import AlertToast from '@/components/common/AlertToast';

export default function ShopifyConnection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [store, setStore] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data, error, isLoading } = useConnectShopifyQuery(store, {
    skip: !store,
  });

  const onSubmit = (formData) => {
    const shop = formData.store.trim();
    if (!shop.endsWith('.myshopify.com')) {
      setToastType('error');
      setToastMessage(
        'Enter a valid Shopify domain like mystore.myshopify.com'
      );
      setShowToast(true);
      return;
    }

    setStore(shop);
    setModalOpen(false);
    reset();
  };
  useEffect(() => {
    if (data?.installUrl) {
      window.location.href = data.installUrl;
    } else if (store && error) {
      setToastType('error');
      setToastMessage('Failed to connect Shopify store.');
      setShowToast(true);
    }
  }, [data, error, store]);

  return (
    <div>
      <AlertToast
        open={showToast}
        onClose={() => setShowToast(false)}
        type={toastType}
        message={toastMessage}
      />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-6 w-full max-w-md p-2"
        >
          <h2 className="text-black font-semibold text-2xl text-center mt-2">
            Connect Shopify Store
          </h2>
          <p className="text-[#00000099] text-center text-sm mb-2">
            Enter your Shopify store domain to connect with InspireEdge.
          </p>

          <div className="flex flex-col gap-4 w-full">
            <InputField
              label="Store Domain"
              type="text"
              placeholder="mystore.myshopify.com"
              register={register}
              name="store"
              validation={shopifyStoreValidation}
              error={errors.store}
              className="bg-gray-100"
            />
          </div>

          <a
            href="#"
            className="flex items-start w-full gap-2 text-lemon-100 text-sm underline mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h6m0 0v6m0-6L10 19"
              />
            </svg>
            View Integration Docs
          </a>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-lemon-100 w-full rounded-lg py-3 font-medium text-black text-base mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Connecting...' : 'Connect Store'}
          </button>
        </form>
      </Modal>

      {/* Shopify Card */}
      <div className="border-2 flex md:flex-row flex-col items-start w-full md:w-[512px] justify-between md:items-center gap-5 border-gray-200 rounded-[20px] py-4 px-5 text-white">
        <div className="flex gap-6 items-center">
          <Image
            src={shopImage}
            alt="Shopify"
            width={40}
            height={40}
            className="object-cover"
          />
          <div>
            <h3 className="font-bold text-xl">Shopify</h3>
            <h3 className="text-gray-200 text-sm">Instant one click connect</h3>
          </div>
        </div>
        <button
          className="bg-lemon-100 cursor-pointer text-sm rounded-lg font-medium text-black px-6 py-2"
          onClick={() => setModalOpen(true)}
        >
          Connect Now
        </button>
      </div>
    </div>
  );
}
