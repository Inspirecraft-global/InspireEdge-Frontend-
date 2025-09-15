import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import EmailIcon from '../../../../public/icons/EmailIcon';
import { useGetStoreConnectedQuery } from '@/redux/DashboardApi';
import ContentCards from '@/components/cards/ContentCards';
import { InputField } from '@/components/form';
import Link from 'next/link';

export default function NotificationSettings() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data, isError } = useGetStoreConnectedQuery();
  console.log('Fetched stores:', data);

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data?.stores?.length > 0) {
      const store = data.stores[0];
      setValue('storeUrl', store.shopDomain || '');
      setValue('displayName', store.displayName || '');
      setValue('platform', store.platform || '');
    }
  }, [data, setValue]);

  return (
    <div>
      {/* Store Connection Section */}
      <h3 className="text-[#050505] font-manrope font-medium">
        Store Connection
      </h3>

      <ContentCards>
        <form className="grid grid-cols-2 gap-4">
          {/* Store URL Field */}
          <InputField
            label="Store URL"
            type="text"
            placeholder="Enter your store URL"
            icon={EmailIcon}
            register={register}
            name="storeUrl"
            error={errors.storeUrl}
          />
          {/* Display Name Field */}
          <InputField
            label="Display Name"
            type="text"
            placeholder="Enter display name"
            register={register}
            name="displayName"
            error={errors.displayName}
          />
          <InputField
            label="Store Name"
            type="text"
            placeholder="Enter your store URL"
            icon={EmailIcon}
            register={register}
            name="platform"
            error={errors.platform}
          />
          <div className="col-span-2 flex justify-end mt-4">
            <Link
              href={'/connect-store'}
              type="submit"
              className="bg-[#050505] cursor-pointer text-white px-6 py-3 rounded-xl"
            >
              Connect Store
            </Link>
          </div>
        </form>
      </ContentCards>

      {/* Notifications Section */}
      <div className="my-4">
        <h3 className="text-[#050505] font-manrope font-medium">
          Notification settings
        </h3>
        <ContentCards>
          <div className="w-full py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10">
                  <EmailIcon />
                </div>
                <div>
                  <h3 className="text-lg text-[#050505]">
                    Email Notifications
                  </h3>
                  <p className="text-sm text-[#00000099]">
                    Never miss important updates, get important alerts via email
                  </p>
                </div>
              </div>

              {/* Toggle */}
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-lime-400 transition">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </button>
            </div>

            {/* Alert Categories */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-600 mb-3">
                Alert Categories
              </h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                {[
                  'Abandonment Recoveries',
                  'Smart Campaign Suggestions',
                  'Risk & Threat Alerts',
                  'Module Activity',
                ].map((category) => (
                  <div key={category} className="flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 text-lime-500" />
                    <span className="text-gray-700 text-sm">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContentCards>
      </div>
    </div>
  );
}
