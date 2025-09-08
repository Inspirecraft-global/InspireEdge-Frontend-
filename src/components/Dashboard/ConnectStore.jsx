'use client';
import React, { useState, useEffect } from 'react';
import ContentCards from '../cards/ContentCards';
import Shopify from '../../../public/icons/Shopify';
import WooIcon from '../../../public/icons/WooIcon';
import MagnetoIcon from '../../../public/icons/MagnetoIcon';
import Link from 'next/link';

export default function ConnectStore({ data }) {
  // detect if store already exists
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (data?.overview?.store) {
      setConnected(true);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-3 manrope">
      <h3 className="text-xl font-medium text-black-100">
        Connect your E-commerce platform
      </h3>
      <ContentCards>
        <div className="flex flex-col md:flex-row gap-2">
          {/* Shopify */}
          <ContentCards>
            <div className="flex flex-col gap-4">
              <Shopify />
              <h2 className="text-black-100 text-sm">Shopify Store</h2>
              <p className="text-[#00000099] text-xs">
                Quick one click install and automatically configure EdgeAI for
                your store
              </p>
              {connected && data?.overview?.store?.platform === 'shopify' ? (
                <div className="flex gap-2">
                  <button className="w-full py-3 cursor-not-allowed bg-[#E5E5E5] rounded-lg">
                    Connected
                  </button>
                  <button className="border-[1px] py-3 hover:bg-lemon-100 cursor-pointer w-full border-[#E5E5E5] rounded-lg">
                    Manage
                  </button>
                </div>
              ) : (
                <Link
                  href={'connect-store'}
                  onClick={() => setConnected(true)}
                  className="text-black-100  cursor-pointer font-medium text-sm bg-lemon-100 py-3 rounded-lg"
                >
                  Connect Store
                </Link>
              )}
            </div>
          </ContentCards>

          {/* WooCommerce */}
          <ContentCards>
            <div className="flex flex-col gap-4">
              <WooIcon />
              <h2 className="text-black-100 text-sm">WooCommerce</h2>
              <p className="text-[#00000099] text-xs">
                Quick one click install and automatically configure EdgeAI for
                your store
              </p>
              {connected &&
              data?.overview?.store?.platform === 'woocommerce' ? (
                <div className="flex gap-2">
                  <button className="w-full py-3 cursor-not-allowed bg-[#E5E5E5] rounded-lg">
                    Connected
                  </button>
                  <button className="border-[1px] py-3 hover:bg-lemon-100 cursor-pointer w-full border-[#E5E5E5] rounded-lg">
                    Manage
                  </button>
                </div>
              ) : (
                <Link
                  href={'connect-store'}
                  onClick={() => setConnected(true)}
                  className="text-black-100 text-center cursor-pointer py-3 font-medium text-sm bg-lemon-100  rounded-lg"
                >
                  Connect Store
                </Link>
              )}
            </div>
          </ContentCards>

          {/* Magento */}
          <ContentCards>
            <div className="flex flex-col gap-4">
              <MagnetoIcon />
              <h2 className="text-black-100 text-sm">Magento Store</h2>
              <p className="text-[#00000099] text-xs">
                Quick one click install and automatically configure EdgeAI for
                your store
              </p>
              {connected && data?.overview?.store?.platform === 'magento' ? (
                <div className="flex gap-2">
                  <button className="w-full py-3 cursor-not-allowed bg-[#E5E5E5] rounded-lg">
                    Connected
                  </button>
                  <button className="border-[1px] hover:bg-lemon-100 py-3 cursor-pointer w-full border-[#E5E5E5] rounded-lg">
                    Manage
                  </button>
                </div>
              ) : (
                <Link
                  href={'connect-store'}
                  onClick={() => setConnected(true)}
                  className="text-black-100 cursor-pointer text-center font-medium text-sm bg-lemon-100 py-2 rounded-lg"
                >
                  Connect Store
                </Link>
              )}
            </div>
          </ContentCards>
        </div>
      </ContentCards>
    </div>
  );
}
