import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';

type SecondaryLinkButtonProps = {} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

/**
 * Sample Component without Ref(s)
 */
export const SecondaryLinkButton: FC<SecondaryLinkButtonProps> = (props) => {
  return (
    <a
      {...props}
      className={`text-sm font-semibold leading-6 text-gray-900 ${props.className ?? ''}`}
    />
  );
};
