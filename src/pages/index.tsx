import { Inter } from 'next/font/google';
import { PrimaryLinkButton } from '~/components/common/PrimaryLinkButton';
import { SecondaryLinkButton } from '~/components/common/SecondaryLinkButton';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            テストメッセージです
            <br />
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua
            proident excepteur commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <PrimaryLinkButton href={'#'}>Get Started</PrimaryLinkButton>
            <SecondaryLinkButton href={'#'}>
              Learn more <span aria-hidden="true">→</span>
            </SecondaryLinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
