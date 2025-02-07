'use client';
import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen '>
      <Image
        priority={true}
        src='/images/logo.svg'
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
      />
      <div className='p-6 rounded-lg shadow-md w-1/3 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Stranica nije nađena</h1>
        <p className='text-destructive'>Nije moguće naći traženi resurs</p>
        <Button
          variant='outline'
          className='mt-4 ml-2'
          onClick={() => (window.location.href = '/')}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
