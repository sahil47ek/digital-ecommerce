'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Thank you for your purchase!
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Your order has been confirmed and you will receive an email with your purchase details.
          </p>

          <div className="mt-8 space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">What's Next?</h2>
              <p className="text-gray-600">
                You can download your digital products from your account dashboard. 
                We've also sent the download links to your email.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Need Help?</h2>
              <p className="text-gray-600">
                If you have any questions about your purchase, please don't hesitate to contact our support team.
              </p>
            </div>
          </div>

          <div className="mt-8 space-x-4">
            <Link
              href="/account"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              View Downloads
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 