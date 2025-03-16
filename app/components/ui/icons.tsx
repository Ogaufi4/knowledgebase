"use client";

import * as React from "react";
// import { cn } from "@/lib/utils";
export const UserIcon = ({ size = 16 }) => {
  return (
    <svg
      data-testid="geist-icon"
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75 0C5.95507 0 4.5 1.45507 4.5 3.25V3.75C4.5 5.54493 5.95507 7 7.75 7H8.25C10.0449 7 11.5 5.54493 11.5 3.75V3.25C11.5 1.45507 10.0449 0 8.25 0H7.75ZM6 3.25C6 2.2835 6.7835 1.5 7.75 1.5H8.25C9.2165 1.5 10 2.2835 10 3.25V3.75C10 4.7165 9.2165 5.5 8.25 5.5H7.75C6.7835 5.5 6 4.7165 6 3.75V3.25ZM2.5 14.5V13.1709C3.31958 11.5377 4.99308 10.5 6.82945 10.5H9.17055C11.0069 10.5 12.6804 11.5377 13.5 13.1709V14.5H2.5ZM6.82945 9C4.35483 9 2.10604 10.4388 1.06903 12.6857L1 12.8353V13V15.25V16H1.75H14.25H15V15.25V13V12.8353L14.931 12.6857C13.894 10.4388 11.6452 9 9.17055 9H6.82945Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const OllamaIcon = ({ size = 16 }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 24"
      width={size}
      style={{ color: "currentcolor" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M16.361 10.26a.894.894 0 0 0-.558.47l-.072.148.001.207c0 .193.004.217.059.353.076.193.152.312.291.448.24.238.51.3.872.205a.86.86 0 0 0 .517-.436.752.752 0 0 0 .08-.498c-.064-.453-.33-.782-.724-.897a1.06 1.06 0 0 0-.466 0zm-9.203.005c-.305.096-.533.32-.65.639a1.187 1.187 0 0 0-.06.52c.057.309.31.59.598.667.362.095.632.033.872-.205.14-.136.215-.255.291-.448.055-.136.059-.16.059-.353l.001-.207-.072-.148a.894.894 0 0 0-.565-.472 1.02 1.02 0 0 0-.474.007Zm4.184 2c-.131.071-.223.25-.195.383.031.143.157.288.353.407.105.063.112.072.117.136.004.038-.01.146-.029.243-.02.094-.036.194-.036.222.002.074.07.195.143.253.064.052.076.054.255.059.164.005.198.001.264-.03.169-.082.212-.234.15-.525-.052-.243-.042-.28.087-.355.137-.08.281-.219.324-.314a.365.365 0 0 0-.175-.48.394.394 0 0 0-.181-.033c-.126 0-.207.03-.355.124l-.085.053-.053-.032c-.219-.13-.259-.145-.391-.143a.396.396 0 0 0-.193.032zm.39-2.195c-.373.036-.475.05-.654.086a4.48 4.48 0 0 0-.951.328c-.94.46-1.589 1.226-1.787 2.114-.04.176-.045.234-.045.53 0 .294.005.357.043.524.264 1.16 1.332 2.017 2.714 2.173.3.033 1.596.033 1.896 0 1.11-.125 2.064-.727 2.493-1.571.114-.226.169-.372.22-.602.039-.167.044-.23.044-.523 0-.297-.005-.355-.045-.531-.288-1.29-1.539-2.304-3.072-2.497a6.873 6.873 0 0 0-.855-.031zm.645.937a3.283 3.283 0 0 1 1.44.514c.223.148.537.458.671.662.166.251.26.508.303.82.02.143.01.251-.043.482-.08.345-.332.705-.672.957a3.115 3.115 0 0 1-.689.348c-.382.122-.632.144-1.525.138-.582-.006-.686-.01-.853-.042-.57-.107-1.022-.334-1.35-.68-.264-.28-.385-.535-.45-.946-.03-.192.025-.509.137-.776.136-.326.488-.73.836-.963.403-.269.934-.46 1.422-.512.187-.02.586-.02.773-.002zm-5.503-11a1.653 1.653 0 0 0-.683.298C5.617.74 5.173 1.666 4.985 2.819c-.07.436-.119 1.04-.119 1.503 0 .544.064 1.24.155 1.721.02.107.031.202.023.208a8.12 8.12 0 0 1-.187.152 5.324 5.324 0 0 0-.949 1.02 5.49 5.49 0 0 0-.94 2.339 6.625 6.625 0 0 0-.023 1.357c.091.78.325 1.438.727 2.04l.13.195-.037.064c-.269.452-.498 1.105-.605 1.732-.084.496-.095.629-.095 1.294 0 .67.009.803.088 1.266.095.555.288 1.143.503 1.534.071.128.243.393.264.407.007.003-.014.067-.046.141a7.405 7.405 0 0 0-.548 1.873 5.2 5.2 0 0 0-.071.991c0 .56.031.832.148 1.279L3.42 24h1.478l-.05-.091c-.297-.552-.325-1.575-.068-2.597.117-.472.25-.819.498-1.296l.148-.29v-.177c0-.165-.003-.184-.057-.293a.915.915 0 0 0-.194-.25 1.74 1.74 0 0 1-.385-.543c-.424-.92-.506-2.286-.208-3.451.124-.486.329-.918.544-1.154a.787.787 0 0 0 .223-.531c0-.195-.07-.355-.224-.522a3.136 3.136 0 0 1-.817-1.729c-.14-.96.114-2.005.69-2.834.563-.814 1.353-1.336 2.237-1.475.199-.033.57-.028.776.01.226.04.367.028.512-.041.179-.085.268-.19.374-.431.093-.215.165-.333.36-.576.234-.29.46-.489.822-.729.413-.27.884-.467 1.352-.561.17-.035.25-.04.569-.04.319 0 .398.005.569.04a4.07 4.07 0 0 1 1.914.997c.117.109.398.457.488.602.034.057.095.177.132.267.105.241.195.346.374.43.14.068.286.082.503.045.343-.058.607-.053.943.016 1.144.23 2.14 1.173 2.581 2.437.385 1.108.276 2.267-.296 3.153-.097.15-.193.27-.333.419-.301.322-.301.722-.001 1.053.493.539.801 1.866.708 3.036-.062.772-.26 1.463-.533 1.854a2.096 2.096 0 0 1-.224.258.916.916 0 0 0-.194.25c-.054.109-.057.128-.057.293v.178l.148.29c.248.476.38.823.498 1.295.253 1.008.231 2.01-.059 2.581a.845.845 0 0 0-.044.098c0 .006.329.009.732.009h.73l.02-.074.036-.134c.019-.076.057-.3.088-.516a9.104 9.104 0 0 0 0-1.258c-.11-.875-.295-1.57-.597-2.226-.032-.074-.053-.138-.046-.141a1.42 1.42 0 0 0 .108-.152c.376-.569.607-1.284.724-2.228.031-.26.031-1.378 0-1.628-.083-.645-.182-1.082-.348-1.525a6.083 6.083 0 0 0-.329-.7l-.038-.064.131-.194c.402-.604.636-1.262.727-2.04a6.625 6.625 0 0 0-.024-1.358 5.512 5.512 0 0 0-.939-2.339 5.325 5.325 0 0 0-.95-1.02 8.097 8.097 0 0 1-.186-.152.692.692 0 0 1 .023-.208c.208-1.087.201-2.443-.017-3.503-.19-.924-.535-1.658-.98-2.082-.354-.338-.716-.482-1.15-.455-.996.059-1.8 1.205-2.116 3.01a6.805 6.805 0 0 0-.097.726c0 .036-.007.066-.015.066a.96.96 0 0 1-.149-.078A4.857 4.857 0 0 0 12 3.03c-.832 0-1.687.243-2.456.698a.958.958 0 0 1-.148.078c-.008 0-.015-.03-.015-.066a6.71 6.71 0 0 0-.097-.725C8.997 1.392 8.337.319 7.46.048a2.096 2.096 0 0 0-.585-.041Zm.293 1.402c.248.197.523.759.682 1.388.03.113.06.244.069.292.007.047.026.152.041.233.067.365.098.76.102 1.24l.002.475-.12.175-.118.178h-.278c-.324 0-.646.041-.954.124l-.238.06c-.033.007-.038-.003-.057-.144a8.438 8.438 0 0 1 .016-2.323c.124-.788.413-1.501.696-1.711.067-.05.079-.049.157.013zm9.825-.012c.17.126.358.46.498.888.28.854.36 2.028.212 3.145-.019.14-.024.151-.057.144l-.238-.06a3.693 3.693 0 0 0-.954-.124h-.278l-.119-.178-.119-.175.002-.474c.004-.669.066-1.19.214-1.772.157-.623.434-1.185.68-1.382.078-.062.09-.063.159-.012z"
      />
    </svg>
  );
};
export const HomeIcon = ({ size = 16 }: { size: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 6.56062L8.00001 2.06062L3.50001 6.56062V13.5L6.00001 13.5V11C6.00001 9.89539 6.89544 8.99996 8.00001 8.99996C9.10458 8.99996 10 9.89539 10 11V13.5L12.5 13.5V6.56062ZM13.78 5.71933L8.70711 0.646409C8.31659 0.255886 7.68342 0.255883 7.2929 0.646409L2.21987 5.71944C2.21974 5.71957 2.21961 5.7197 2.21949 5.71982L0.469676 7.46963L-0.0606537 7.99996L1.00001 9.06062L1.53034 8.53029L2.00001 8.06062V14.25V15H2.75001L6.00001 15H7.50001H8.50001H10L13.25 15H14V14.25V8.06062L14.4697 8.53029L15 9.06062L16.0607 7.99996L15.5303 7.46963L13.7806 5.71993C13.7804 5.71973 13.7802 5.71953 13.78 5.71933ZM8.50001 11V13.5H7.50001V11C7.50001 10.7238 7.72386 10.5 8.00001 10.5C8.27615 10.5 8.50001 10.7238 8.50001 11Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const MessageIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.8914 10.4028L2.98327 10.6318C3.22909 11.2445 3.5 12.1045 3.5 13C3.5 13.3588 3.4564 13.7131 3.38773 14.0495C3.69637 13.9446 4.01409 13.8159 4.32918 13.6584C4.87888 13.3835 5.33961 13.0611 5.70994 12.7521L6.22471 12.3226L6.88809 12.4196C7.24851 12.4724 7.61994 12.5 8 12.5C11.7843 12.5 14.5 9.85569 14.5 7C14.5 4.14431 11.7843 1.5 8 1.5C4.21574 1.5 1.5 4.14431 1.5 7C1.5 8.18175 1.94229 9.29322 2.73103 10.2153L2.8914 10.4028ZM2.8135 15.7653C1.76096 16 1 16 1 16C1 16 1.43322 15.3097 1.72937 14.4367C1.88317 13.9834 2 13.4808 2 13C2 12.3826 1.80733 11.7292 1.59114 11.1903C0.591845 10.0221 0 8.57152 0 7C0 3.13401 3.58172 0 8 0C12.4183 0 16 3.13401 16 7C16 10.866 12.4183 14 8 14C7.54721 14 7.10321 13.9671 6.67094 13.9038C6.22579 14.2753 5.66881 14.6656 5 15C4.23366 15.3832 3.46733 15.6195 2.8135 15.7653Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const AILogo = ({
  className,
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    className={className}
    {...props}
  >
    <path d="M12 1.64h-.006c-1.473 0-2.691.759-3.239 2h-.489c-1.271 0-2.478.425-3.398 1.199-.976.82-1.514 1.951-1.516 3.182-.001.995.526 2.097 1.025 2.791C2.154 11.582.643 13.445.64 15.5c-.003 2.046 1.507 3.91 3.734 4.687-.506.692-1.044 1.788-1.045 2.766-.003 2.426 2.215 4.403 4.947 4.408h.48c.543 1.238 1.764 1.998 3.244 2h.007c1.972 0 3.351-1.381 3.354-3.36V5c.002-1.975-1.379-3.357-3.361-3.36zm0 17a.64.64 0 1 1 .001-1.281A.64.64 0 0 1 12 18.64zm2.64-5h-2.28V7.305c.575-.159 1-.681 1-1.305 0-.75-.61-1.36-1.36-1.36s-1.36.61-1.36 1.36c0 .625.425 1.146 1 1.305v6.335H9.998c-.798 0-1.357.559-1.358 1.36v.64H6.305c-.159-.575-.681-1-1.305-1-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36c.625 0 1.147-.426 1.305-1H8.64v5.834c-.575.159-1 .681-1 1.306 0 .75.61 1.36 1.36 1.36s1.36-.61 1.36-1.36c0-.625-.425-1.147-1-1.306V15c.001-.401.239-.641.639-.641h4.641v11.639c-.003 1.456-.908 2.46-2.28 2.61v-9.303c.575-.159 1-.681 1-1.306 0-.75-.61-1.36-1.36-1.36s-1.36.61-1.36 1.36c0 .625.425 1.147 1 1.306v9.31c-1.103-.114-1.951-.742-2.3-1.735a.36.36 0 0 0-.34-.24h-.724c-2.036-.003-4.23-1.413-4.228-3.686.002-.966.714-2.209 1.206-2.699a.36.36 0 0 0-.164-.604c-2.199-.566-3.733-2.273-3.73-4.151.003-1.876 1.522-3.573 3.695-4.141h2.64c.159.575.681 1 1.305 1A1.36 1.36 0 0 0 9 9.64c-.625 0-1.146.425-1.305 1H5.162c-.477-.541-1.092-1.691-1.091-2.618.002-1.016.449-1.95 1.261-2.632.779-.655 1.849-1.03 2.936-1.03H9a.36.36 0 0 0 .339-.239c.392-1.103 1.384-1.761 2.655-1.761h.005c1.583.003 2.644 1.063 2.641 2.64v8.64zm-2.64-7a.64.64 0 1 1 .001-1.281A.64.64 0 0 1 12 6.64zM9 22.86a.64.64 0 1 1-.001 1.281A.64.64 0 0 1 9 22.86zM5.64 16a.64.64 0 1 1-1.281-.001A.64.64 0 0 1 5.64 16zm2.72-5a.64.64 0 1 1 1.281.001A.64.64 0 0 1 8.36 11zm23 4.5c.002-2.046-1.508-3.909-3.734-4.687.507-.692 1.044-1.788 1.046-2.767.002-1.231-.54-2.365-1.526-3.193-.917-.77-2.163-1.212-3.421-1.214h-.48c-.544-1.238-1.764-1.998-3.243-2h-.008c-.972 0-1.808.323-2.418.933-.611.613-.934 1.451-.936 2.428v20.999c-.003 1.976 1.378 3.357 3.359 3.361h.007c1.473 0 2.69-.76 3.238-2h.489c1.271 0 2.478-.426 3.398-1.199.977-.82 1.515-1.95 1.517-3.182.001-.995-.526-2.098-1.025-2.791 2.224-.77 3.734-2.633 3.737-4.688zM20 12.36a.64.64 0 1 1-.001 1.281A.64.64 0 0 1 20 12.36zm6.946 7.28h-2.641c-.159-.575-.681-1-1.306-1-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36c.624 0 1.147-.425 1.306-1h2.533c.476.541 1.091 1.691 1.089 2.618-.001 1.016-.448 1.95-1.26 2.631-.781.657-1.865 1.01-2.943 1.03H23a.362.362 0 0 0-.339.239c-.393 1.104-1.385 1.761-2.655 1.761h-.005c-.781-.001-1.445-.252-1.919-.725S17.358 26.78 17.36 26v-8.64h2.279v6.334c-.575.159-1 .681-1 1.306 0 .75.61 1.36 1.36 1.36s1.36-.61 1.36-1.36c0-.624-.425-1.147-1-1.306V17.36h1.642c.799 0 1.356-.559 1.358-1.36v-.64h2.334c.159.575.681 1 1.306 1 .75 0 1.36-.61 1.36-1.36s-.61-1.36-1.36-1.36c-.625 0-1.147.425-1.306 1H23.36V8.805c.575-.159 1-.681 1-1.305 0-.75-.61-1.36-1.36-1.36s-1.36.61-1.36 1.36c0 .624.425 1.146 1 1.305V16c0 .401-.238.641-.638.641H17.36V5c.001-.781.252-1.445.725-1.918.397-.398.933-.627 1.555-.693v9.305c-.575.159-1 .681-1 1.305 0 .75.61 1.36 1.36 1.36s1.36-.61 1.36-1.36c0-.624-.425-1.146-1-1.305v-9.31c1.103.115 1.951.742 2.3 1.736.051.144.188.24.34.24h.724c1.092.001 2.17.383 2.959 1.045.82.689 1.271 1.626 1.269 2.641-.001.966-.714 2.209-1.205 2.699a.36.36 0 0 0 .164.604c2.198.567 3.732 2.274 3.729 4.151-.002 1.874-1.52 3.57-3.694 4.14zM23.64 20a.64.64 0 1 1-1.281-.001.64.64 0 0 1 1.281.001zM20 24.36a.64.64 0 1 1-.001 1.281A.64.64 0 0 1 20 24.36zm3-16.22a.64.64 0 1 1 .001-1.281A.64.64 0 0 1 23 8.14zM26.36 15a.64.64 0 1 1 1.281.001A.64.64 0 0 1 26.36 15z" />
    <path
      d="M0 0h32v32H0z"
      style={{
        fill: "none",
      }}
    />
  </svg>
);
