import type { NextPage } from 'next';
import { useState } from 'react';

const LINE = process.env.NEXT_PUBLIC_LINE as string;
const IG = process.env.NEXT_PUBLIC_IG as string;

const Home: NextPage = () => {
  const [isShowAlert, setIsShowAlert] = useState(false);

  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      function () {
        console.log('Async: Copying to clipboard was successful!');
        setIsShowAlert(true);
        setTimeout(() => {
          setIsShowAlert(false);
        }, 2000);
      },
      function (err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
  };

  return (
    <>
      {isShowAlert && (
        <div className="animate-slide-in-bottom fixed bottom-0 left-0 right-0 pb-5 px-1">
          <div className="alert alert-success shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Copied!</span>
            </div>
          </div>
        </div>
      )}
      <div className="w-full md:w-3/5 card w-full bg-base-100 shadow-xl m-auto">
        <div className="card-body">
          <div className="flex items-center justify-center gap-7">
            <div className="badge badge-lg">LINE</div>
            <div className="flex items-center gap-7">
              <div className="text-gray-500 text-lg">{LINE}</div>
              <button
                className="btn btn-outline btn-sm"
                type="button"
                onClick={() => copyTextToClipboard(LINE)}
              >
                COPY
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-7">
            <div className="badge badge-lg">Instagram</div>
            <div className="flex items-center gap-7">
              <div className="text-gray-500 text-lg">{IG}</div>
              <button
                className="btn btn-outline btn-sm"
                type="button"
                onClick={() => copyTextToClipboard(IG)}
              >
                COPY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
