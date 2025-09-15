import ContentCards from '@/components/cards/ContentCards';
import { emailValidation, InputField } from '@/components/form';
import { useLoginMutation } from '@/redux/authApi';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import EmailIcon from '../../../../public/icons/EmailIcon';
import { useProfileSettingQuery } from '@/redux/DashboardApi';
import { CameraIcon } from '@/assets/Icons';
import Image from 'next/image';
import user from '../../../../public/images/user.jpg';

export default function ProfileSettings() {
  const { data, isError } = useProfileSettingQuery();
  console.log(data);
  const dispatch = useDispatch();
  const router = useRouter();
  const [signIn, { isLoading }] = useLoginMutation();
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signIn(data).unwrap();
      setToastType('success');
      setToastMessage('Login successful! Redirecting to dashboard...');
      setShowToast(true);
      if (response.token || response.access) {
        setAuthTokens(response.token || response.access, response.refresh);
      }
      if (response.isStoreConnected) {
        router.push('/dashboard');
      } else {
        router.push('/connect-store');
      }
      dispatch(loginSuccess(response));
    } catch (error) {
      console.log('SignIn failed:', error);
      setToastType('error');
      setToastMessage(
        error?.data?.error ||
          error?.data?.message ||
          'SignIn failed. Please try again.'
      );
      setShowToast(true);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[#050505]">Profile settings</h3>
      <ContentCards>
        <div className="relative w-24 h-24">
          <div className="w-[80px] h-[80px]">
            <Image
              src={user} // replace with actual user image path
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
            <div className="w-7 h-7 flex items-center justify-center bg-lime-100 rounded-full">
              <CameraIcon />
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <InputField
            label="Business/store name"
            type="email"
            placeholder="Enter your email address"
            icon={EmailIcon}
            register={register}
            name="email"
            error={errors.email}
          />
          <InputField
            label="Email adress"
            type="email"
            placeholder="Enter your email address"
            icon={EmailIcon}
            register={register}
            name="email"
            validation={emailValidation}
            error={errors.email}
          />
        </form>
      </ContentCards>
    </div>
  );
}
