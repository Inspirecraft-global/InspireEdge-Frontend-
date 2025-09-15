import ContentCards from '@/components/cards/ContentCards';
import AlertToast from '@/components/common/AlertToast';
import { useDeleteAccountMutation } from '@/redux/DashboardApi';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function DeleteAccount() {
  const [deleteAccount, { isLoading }] = useDeleteAccountMutation();
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await deleteAccount({
        confirmDeletion: true,
        password: data.password,
      }).unwrap();

      setToast({
        show: true,
        type: 'success',
        message: 'Your account has been scheduled for deletion.',
      });
      setIsModalOpen(false);
    } catch (error) {
      setToast({
        show: true,
        type: 'error',
        message:
          error?.data?.message || 'Account deletion failed. Please try again.',
      });
    }
  };

  return (
    <div className="flex flex-col mt-7 font-manrope gap-2">
      <h3 className="text-[#050505] font-medium text-xl">Delete Account</h3>
      <ContentCards>
        <div className="flex flex-col gap-2">
          <p className="text-[#3A3A3A99]">
            If you delete your account, you will lose access to all Front
            Account services, and your personal data will be permanently erased.
            You have 24 days to cancel the deletion if you change your mind.
          </p>
          <div className="text-[#3A3A3A] flex items-center gap-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="w-4 h-4"
            />
            <p className="text-[#3A3A3A]">
              I confirm that I want to delete this account
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-end mt-4">
          <button
            disabled={!isChecked}
            onClick={() => setIsModalOpen(true)}
            className={`py-2 px-10 rounded-xl text-white transition ${
              isChecked
                ? 'bg-[#FF4D4F] cursor-pointer'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Delete Account
          </button>
        </div>
      </ContentCards>

      {/* Password Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg">
            <h4 className="text-lg font-medium text-[#050505] mb-4">
              Confirm Deletion
            </h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <input
                type="password"
                placeholder="Enter your password"
                {...register('password', { required: 'Password is required' })}
                className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-red-500"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 rounded-lg bg-[#FF4D4F] text-white"
                >
                  {isLoading ? 'Deleting...' : 'Confirm'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast.show && <AlertToast type={toast.type} message={toast.message} />}
    </div>
  );
}
