const Arrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.843063 7.71163L6.50006 13.3686L7.91406 11.9546L2.96406 7.00462L7.91406 2.05463L6.50006 0.640625L0.843063 6.29763C0.655592 6.48515 0.550276 6.73946 0.550276 7.00462C0.550276 7.26979 0.655592 7.5241 0.843063 7.71163Z"
        fill="#292929"
      />
    </svg>
  );
};

export { Arrow };
