import ContentCards from '@/components/cards/ContentCards';
import AlertToast from '@/components/common/AlertToast';
import { PasswordField, passwordValidation } from '@/components/form';
import { useUpdatePasswordMutation } from '@/redux/DashboardApi';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DeleteAccount from './DeleteAccount';

export default function PasswordSettings() {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await updatePassword(data).unwrap();
      setToastType('success');
      setToastMessage('Password updated successfully!');
      setShowToast(true);
      console.log('Password updated:', response);
    } catch (error) {
      console.log('Update failed:', error);
      setToastType('error');
      setToastMessage(
        error?.data?.error ||
          error?.data?.message ||
          'Update failed. Please try again.'
      );
      setShowToast(true);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <AlertToast
        open={showToast}
        onClose={() => setShowToast(false)}
        type={toastType}
        message={toastMessage}
      />
      <h3 className="text-[#050505] font-medium text-xl">Profile settings</h3>
      <ContentCards>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <PasswordField
              label="Current Password"
              placeholder="Enter your current password"
              register={register}
              name="currentPassword"
              validation={passwordValidation}
              error={errors.currentPassword}
            />
            <PasswordField
              label="New Password"
              placeholder="Enter a new password"
              register={register}
              name="newPassword"
              validation={passwordValidation}
              error={errors.newPassword}
            />
            <PasswordField
              label="Confirm Password"
              placeholder="Re-enter new password"
              register={register}
              name="confirmPassword"
              validation={{
                ...passwordValidation,
                validate: (value) =>
                  value === watch('newPassword') || 'Passwords do not match',
              }}
              error={errors.confirmPassword}
            />
          </div>
          <div className="w-full flex justify-end items-end">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#DCFC36] cursor-pointer text-sm rounded-2xl py-2 px-4"
            >
              {isLoading ? 'Updating...' : 'Update Password'}
            </button>
          </div>
        </form>
      </ContentCards>
      <DeleteAccount />
    </div>
  );
}
