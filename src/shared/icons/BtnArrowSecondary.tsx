const BtnArrowSecondary = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.44531 4.44434L13.3342 13.3332M13.3342 13.3332V4.79989M13.3342 13.3332H4.80087"
        stroke="#204FF5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { BtnArrowSecondary };
