import type { NextPage, GetStaticProps } from 'next';

const copyTextToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(
    function () {
      console.log('Async: Copying to clipboard was successful!');
      alert('copied!');
    },
    function (err) {
      console.error('Async: Could not copy text: ', err);
    }
  );
};

const LINE = process.env.NEXT_PUBLIC_LINE as string;
const IG = process.env.NEXT_PUBLIC_IG as string;

const Home: NextPage = () => {
  return (
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
  );
};

export default Home;
