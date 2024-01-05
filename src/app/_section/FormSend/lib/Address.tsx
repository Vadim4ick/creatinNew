/* eslint-disable react/display-name */
import { GetHomePageQuery } from "@/graphql/__generated__";
import { formatPhoneNumber } from "@/shared/helpers/numberFormatter";
import useIntersectionObserver from "@/shared/hooks/useIntersectionObserver";
import { useMedia } from "@/shared/hooks/useMedia";
import { Portal } from "@/shared/ui/Portal";
import Link from "next/link";
import { MutableRefObject, useRef } from "react";

interface AddressProps {
  form: GetHomePageQuery["homePage"]["data"]["attributes"]["formSend"];
  callbackRef: MutableRefObject<HTMLDivElement | null>;
}

const Address = (props: AddressProps) => {
  const { form, callbackRef } = props;

  const isDesktop = useMedia("(max-width: 1200px)");

  const numberRef = useRef<HTMLAnchorElement | null>(null);
  const emailRef = useRef<HTMLAnchorElement | null>(null);
  const addressRef = useRef<HTMLAnchorElement | null>(null);

  useIntersectionObserver({
    ref: numberRef,
    once: true,
  });

  useIntersectionObserver({
    ref: emailRef,
    once: true,
  });

  useIntersectionObserver({
    ref: addressRef,
    once: true,
  });

  const address = (
    <address className="callback__contancs">
      {form.number && (
        <Link
          href={`tel:${form.number}`}
          className="callback__contancs-item fade-up"
          ref={numberRef}
        >
          <span>{formatPhoneNumber(String(form.number))} </span>
        </Link>
      )}

      {form.email && (
        <Link
          href={`mailto:${form.email}`}
          className="callback__contancs-item fade-up"
          ref={emailRef}
        >
          <span>{form.email}</span>
        </Link>
      )}

      {form.address && (
        <a className="callback__contancs-item fade-up" ref={addressRef}>
          <span>{form.address}</span>
        </a>
      )}
    </address>
  );

  return isDesktop.matches
    ? callbackRef?.current && (
        <Portal element={callbackRef.current}>{address}</Portal>
      )
    : address;
};

export { Address };
