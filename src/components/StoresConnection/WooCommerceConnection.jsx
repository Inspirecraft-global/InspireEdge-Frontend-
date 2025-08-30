'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../UI/Modal';
import Image from 'next/image';
import wooImage from '../../../public/images/woo.png';
import { useConnectWooMutation } from '@/redux/DashboardApi';
import { InputField, PasswordField } from '@/components/form';
import {
  storeUrlValidation,
  consumerKeyValidation,
  consumerSecretValidation,
} from '@/components/form/validation';
import AlertToast from '@/components/common/AlertToast';
import { useRouter } from 'next/navigation';

export default function WooCommerceConnection() {
  const [connectStore, { data, error, isLoading }] = useConnectWooMutation();
  const [modalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const payload = {
        storeUrl: formData.storeUrl,
        consumerKey: formData.consumerKey,
        consumerSecret: formData.consumerSecret,
      };
      await connectStore(payload).unwrap();
      setToastType('success');
      setToastMessage('WooCommerce store connected successfully!');
      setShowToast(true);
      router.push('/shopaudit');
    } catch (err) {
      setToastType('error');
      setToastMessage(
        'Failed to connect store. Please check your credentials.'
      );
      setShowToast(true);
    }
  };

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
            Connect WooCommerce Store
          </h2>
          <p className="text-[#00000099] text-center text-sm mb-2">
            Enter your WooCommerce credentials to connect with InspireEdge.
          </p>

          <div className="flex flex-col gap-4 w-full">
            <InputField
              label="Store URL"
              type="url"
              placeholder="https://mystore.com"
              register={register}
              name="storeUrl"
              validation={storeUrlValidation}
              error={errors.storeUrl}
              className="bg-gray-100"
            />

            <InputField
              label="Consumer Key"
              type="text"
              placeholder="ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              register={register}
              name="consumerKey"
              validation={consumerKeyValidation}
              error={errors.consumerKey}
              className="bg-gray-100"
            />

            <PasswordField
              label="Consumer Secret"
              placeholder="cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              register={register}
              name="consumerSecret"
              validation={consumerSecretValidation}
              error={errors.consumerSecret}
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

      <div className="border-2 flex md:flex-row flex-col items-start w-full md:w-[512px] justify-between md:items-center gap-5 border-gray-200 rounded-[20px] py-4 px-5 text-white">
        <div className="flex gap-6 items-center">
          <Image
            src={wooImage}
            alt="WooCommerce"
            width={40}
            height={40}
            className="object-cover"
          />
          <div>
            <h3 className="font-bold text-xl">WooCommerce</h3>
            <h3 className="text-gray-200 text-sm">Instant one-click connect</h3>
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
