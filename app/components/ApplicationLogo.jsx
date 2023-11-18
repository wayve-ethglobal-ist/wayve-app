import Link from "next/link";

export default function ApplicationLogo() {
  return (
    <Link href={`/`}>
      <div className="py-5">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 99 24" fill="none">
          <g clipPath="url(#clip0_278_1049)">
            <path d="M11.3714 6.64356C11.1352 4.61924 10.8857 2.48186 10.8857 0H13.1143C13.1143 2.45399 12.866 4.58864 12.6301 6.61524C12.4379 8.2668 12.2541 9.8466 12.22 11.469C13.339 10.3018 14.3178 9.0642 15.3432 7.76778C16.6075 6.16938 17.9426 4.48167 19.6974 2.72678L21.2732 4.30262C19.538 6.03786 17.8528 7.37166 16.253 8.63796L16.2515 8.6391C14.9485 9.67068 13.7019 10.6574 12.531 11.78C14.1474 11.7459 15.7147 11.563 17.3563 11.3714C19.3807 11.1352 21.5182 10.8857 24 10.8857V13.1143C21.5461 13.1143 19.4114 12.8659 17.3849 12.6301L17.3834 12.63C15.7322 12.4379 14.1529 12.2542 12.531 12.22C13.6974 13.3381 14.9344 14.3165 16.2299 15.3412L16.232 15.343C17.8304 16.6073 19.5182 17.9423 21.2732 19.6974L19.6974 21.2732C17.9621 19.538 16.6284 17.853 15.3623 16.2533L15.3593 16.2492L15.3568 16.2459C14.3265 14.9449 13.3409 13.7003 12.22 12.531C12.2541 14.1534 12.4379 15.7332 12.6301 17.3848C12.866 19.4114 13.1143 21.546 13.1143 24H10.8857C10.8857 21.5182 11.1352 19.3808 11.3714 17.3564L11.3719 17.3531C11.5632 15.7126 11.7459 14.1463 11.78 12.531C10.6591 13.7003 9.6735 14.9449 8.64324 16.2459L8.64072 16.2492L8.63772 16.2533C7.3716 17.853 6.03786 19.538 4.30262 21.2732L2.72678 19.6974C4.48175 17.9423 6.16956 16.6073 7.76802 15.343L7.77006 15.3412C9.06564 14.3165 10.3026 13.3381 11.469 12.22C9.8466 12.2542 8.26674 12.438 6.61506 12.6301C4.58856 12.8659 2.4539 13.1143 0 13.1143V10.8857C2.48186 10.8857 4.61936 11.1352 6.64368 11.3714C8.28534 11.563 9.8526 11.7459 11.469 11.78C10.2976 10.657 9.05058 9.66996 7.74696 8.63796C6.14718 7.37166 4.462 6.03786 2.72678 4.30262L4.30262 2.72678C6.05742 4.48167 7.39254 6.16938 8.6568 7.76778C9.6822 9.06414 10.661 10.3018 11.78 11.4689C11.7459 9.85362 11.5632 8.28738 11.3719 6.64686L11.3714 6.64356Z" fill="#0000FF" />
          </g>
          <path d="M34.91 19L31.45 5H34.59L36.83 15.28L39.25 5H42.19L44.67 15.28L46.85 5H49.99L46.53 19H43.19L40.71 8.88L38.25 19H34.91ZM48.6082 19L53.5882 5H57.3482L62.3682 19H59.1682L58.1482 15.98H52.7682L51.7482 19H48.6082ZM53.5482 13.62H57.3682L55.4682 7.94L53.5482 13.62ZM65.1013 19V13.66L60.0813 5H63.3013L66.6013 10.96L69.8813 5H73.1013L68.1213 13.64V19H65.1013ZM77.723 19L73.043 5H76.343L79.703 15.92L83.043 5H86.343L81.663 19H77.723ZM87.2382 19V5H97.3182V7.52H90.2782V10.64H96.6182V13.1H90.2782V16.48H97.3182V19H87.2382Z" fill="#292929" />
          <defs>
            <clipPath id="clip0_278_1049">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Link>
  )
}