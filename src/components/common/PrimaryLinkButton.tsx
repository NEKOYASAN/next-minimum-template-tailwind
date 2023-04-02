import { AnchorHTMLAttributes, DetailedHTMLProps, FC, forwardRef } from 'react';

type PrimaryLinkButtonProps = {} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

/**
 * Sample Component with Ref(s)
 */
export const PrimaryLinkButton = forwardRef<HTMLAnchorElement, PrimaryLinkButtonProps>(
  function LinkButtonTemplate(props, ref) {
    return (
      <a
        ref={ref}
        {...props}
        className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
          props.className ?? ''
        }`}
      />
    );
  }
);
