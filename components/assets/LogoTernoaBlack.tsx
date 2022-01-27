import React from 'react';
import { useApp } from 'redux/hooks';

interface LogoProps {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement | HTMLImageElement>;
}

const LogoTernoa = ({ className, onClick }: LogoProps) => {
  const { logo } = useApp();

  return logo ?
      <img
        src={logo}
        className={className}
        onClick={onClick} 
      />
    :
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        onClick={onClick}
        viewBox="0 0 318 91" 
        fill="none" 
      >
        <path d="M88.632 48.72C86.584 48.72 84.696 48.368 82.968 47.664C81.272 46.928 79.816 45.904 78.6 44.592C77.416 43.248 76.6 41.648 76.152 39.792L82.824 38.352C83.24 39.664 83.96 40.688 84.984 41.424C86.04 42.16 87.288 42.528 88.728 42.528C89.752 42.528 90.648 42.352 91.416 42C92.216 41.616 92.824 41.104 93.24 40.464C93.688 39.824 93.912 39.088 93.912 38.256C93.912 37.2 93.512 36.352 92.712 35.712C91.912 35.04 90.616 34.496 88.824 34.08L87.288 33.744C83.768 32.976 81.176 31.744 79.512 30.048C77.848 28.32 77.016 26.224 77.016 23.76C77.016 22.224 77.32 20.816 77.928 19.536C78.536 18.256 79.368 17.152 80.424 16.224C81.512 15.264 82.776 14.528 84.216 14.016C85.656 13.472 87.208 13.2 88.872 13.2C90.76 13.2 92.52 13.552 94.152 14.256C95.784 14.96 97.16 15.968 98.28 17.28C99.4 18.592 100.152 20.144 100.536 21.936L93.96 23.376C93.576 22.096 92.904 21.12 91.944 20.448C91.016 19.744 89.928 19.392 88.68 19.392C87.816 19.392 87.032 19.568 86.328 19.92C85.656 20.24 85.112 20.704 84.696 21.312C84.312 21.888 84.12 22.544 84.12 23.28C84.12 24.4 84.552 25.264 85.416 25.872C86.28 26.448 87.56 26.928 89.256 27.312L90.792 27.648C94.28 28.416 96.856 29.632 98.52 31.296C100.216 32.96 101.064 35.088 101.064 37.68C101.064 39.312 100.744 40.8 100.104 42.144C99.496 43.488 98.632 44.656 97.512 45.648C96.392 46.64 95.08 47.408 93.576 47.952C92.072 48.464 90.424 48.72 88.632 48.72ZM117.907 48.72C116.019 48.72 114.275 48.4 112.675 47.76C111.107 47.088 109.747 46.16 108.595 44.976C107.443 43.76 106.547 42.336 105.907 40.704C105.267 39.04 104.947 37.232 104.947 35.28C104.947 33.392 105.267 31.632 105.907 30C106.547 28.368 107.427 26.96 108.547 25.776C109.699 24.56 111.043 23.616 112.579 22.944C114.115 22.272 115.779 21.936 117.571 21.936C119.427 21.936 121.107 22.256 122.611 22.896C124.147 23.536 125.459 24.448 126.547 25.632C127.635 26.816 128.467 28.224 129.043 29.856C129.651 31.488 129.955 33.312 129.955 35.328V37.008H111.763C112.051 38.896 112.739 40.384 113.827 41.472C114.915 42.528 116.291 43.056 117.955 43.056C119.107 43.056 120.147 42.784 121.075 42.24C122.035 41.696 122.819 40.912 123.427 39.888L129.427 41.808C128.851 43.248 127.987 44.48 126.835 45.504C125.683 46.528 124.339 47.328 122.803 47.904C121.267 48.448 119.635 48.72 117.907 48.72ZM117.571 27.12C116.099 27.12 114.851 27.6 113.827 28.56C112.835 29.52 112.179 30.832 111.859 32.496H123.043C122.787 30.832 122.163 29.52 121.171 28.56C120.211 27.6 119.011 27.12 117.571 27.12ZM146.12 48.72C144.296 48.72 142.6 48.4 141.032 47.76C139.496 47.088 138.152 46.16 137 44.976C135.88 43.792 135 42.4 134.36 40.8C133.72 39.168 133.4 37.408 133.4 35.52C133.4 33.6 133.72 31.824 134.36 30.192C135.032 28.528 135.944 27.088 137.096 25.872C138.28 24.624 139.656 23.664 141.224 22.992C142.792 22.288 144.488 21.936 146.312 21.936C148.136 21.936 149.816 22.288 151.352 22.992C152.888 23.664 154.184 24.624 155.24 25.872C156.328 27.12 157.08 28.576 157.496 30.24L151.112 31.488C150.632 30.4 149.96 29.552 149.096 28.944C148.232 28.304 147.256 27.984 146.168 27.984C145.016 27.984 143.992 28.304 143.096 28.944C142.232 29.584 141.544 30.48 141.032 31.632C140.52 32.752 140.264 34.016 140.264 35.424C140.264 36.832 140.504 38.08 140.984 39.168C141.496 40.256 142.2 41.12 143.096 41.76C143.992 42.368 145.016 42.672 146.168 42.672C147.32 42.672 148.36 42.368 149.288 41.76C150.216 41.152 150.904 40.288 151.352 39.168L157.736 40.416C157.32 42.112 156.536 43.584 155.384 44.832C154.264 46.08 152.904 47.04 151.304 47.712C149.704 48.384 147.976 48.72 146.12 48.72ZM161.782 48V22.656H167.974L168.214 26.496C168.854 25.152 169.718 24.128 170.806 23.424C171.894 22.688 173.174 22.32 174.646 22.32C175.094 22.32 175.542 22.368 175.99 22.464C176.438 22.528 176.838 22.624 177.19 22.752L176.47 29.376C176.118 29.248 175.75 29.168 175.366 29.136C175.014 29.072 174.646 29.04 174.262 29.04C172.406 29.04 170.982 29.616 169.99 30.768C168.998 31.888 168.502 33.488 168.502 35.568V48H161.782ZM192.204 48.72C190.316 48.72 188.572 48.4 186.972 47.76C185.404 47.088 184.044 46.16 182.892 44.976C181.74 43.76 180.844 42.336 180.204 40.704C179.564 39.04 179.244 37.232 179.244 35.28C179.244 33.392 179.564 31.632 180.204 30C180.844 28.368 181.724 26.96 182.844 25.776C183.996 24.56 185.34 23.616 186.876 22.944C188.412 22.272 190.076 21.936 191.868 21.936C193.724 21.936 195.404 22.256 196.908 22.896C198.444 23.536 199.756 24.448 200.844 25.632C201.932 26.816 202.764 28.224 203.34 29.856C203.948 31.488 204.252 33.312 204.252 35.328V37.008H186.06C186.348 38.896 187.036 40.384 188.124 41.472C189.212 42.528 190.588 43.056 192.252 43.056C193.404 43.056 194.444 42.784 195.372 42.24C196.332 41.696 197.116 40.912 197.724 39.888L203.724 41.808C203.148 43.248 202.284 44.48 201.132 45.504C199.98 46.528 198.636 47.328 197.1 47.904C195.564 48.448 193.932 48.72 192.204 48.72ZM191.868 27.12C190.396 27.12 189.148 27.6 188.124 28.56C187.132 29.52 186.476 30.832 186.156 32.496H197.34C197.084 30.832 196.46 29.52 195.468 28.56C194.508 27.6 193.308 27.12 191.868 27.12ZM219.133 48.72C217.373 48.72 215.853 48.384 214.573 47.712C213.325 47.008 212.349 46 211.645 44.688C210.973 43.376 210.637 41.776 210.637 39.888V28.08H206.317V22.656H210.637V14.016H217.357V22.656H224.269V28.08H217.357V39.072C217.357 40.288 217.613 41.232 218.125 41.904C218.637 42.544 219.421 42.864 220.477 42.864C221.021 42.864 221.597 42.784 222.205 42.624C222.845 42.464 223.453 42.256 224.029 42L225.229 47.04C224.397 47.552 223.469 47.952 222.445 48.24C221.421 48.56 220.317 48.72 219.133 48.72ZM229.62 48V13.92H235.812L251.604 36.48V13.92H258.516V48H252.324L236.532 25.44V48H229.62ZM264.776 48V13.92H285.656V20.16H271.736V28.56H284.12V34.752H271.736V48H264.776ZM299.006 48V20.256H289.406V13.92H315.758V20.256H306.158V48H299.006Z" fill="#0C0B0B"/>
        <path d="M78.302 73V57.376H80.717V63.613C81.109 63.011 81.62 62.542 82.25 62.206C82.88 61.87 83.573 61.702 84.329 61.702C85.057 61.702 85.729 61.849 86.345 62.143C86.975 62.437 87.521 62.843 87.983 63.361C88.445 63.879 88.802 64.488 89.054 65.188C89.32 65.888 89.453 66.644 89.453 67.456C89.453 68.282 89.32 69.052 89.054 69.766C88.788 70.48 88.417 71.103 87.941 71.635C87.465 72.167 86.905 72.58 86.261 72.874C85.631 73.168 84.945 73.315 84.203 73.315C83.433 73.315 82.733 73.147 82.103 72.811C81.487 72.475 80.99 71.999 80.612 71.383L80.507 73H78.302ZM83.825 71.131C84.427 71.131 84.966 70.977 85.442 70.669C85.918 70.347 86.289 69.913 86.555 69.367C86.835 68.821 86.975 68.198 86.975 67.498C86.975 66.798 86.835 66.182 86.555 65.65C86.289 65.104 85.918 64.677 85.442 64.369C84.966 64.047 84.427 63.886 83.825 63.886C83.223 63.886 82.684 64.047 82.208 64.369C81.732 64.677 81.354 65.104 81.074 65.65C80.808 66.182 80.675 66.798 80.675 67.498C80.675 68.198 80.808 68.821 81.074 69.367C81.354 69.913 81.732 70.347 82.208 70.669C82.684 70.977 83.223 71.131 83.825 71.131ZM92.7124 77.368C92.3624 77.368 92.0334 77.333 91.7254 77.263C91.4314 77.193 91.1444 77.081 90.8644 76.927L91.3894 75.016C91.5434 75.086 91.7184 75.142 91.9144 75.184C92.1104 75.24 92.2994 75.268 92.4814 75.268C92.9014 75.268 93.2654 75.149 93.5734 74.911C93.8954 74.673 94.1614 74.288 94.3714 73.756L94.7074 72.895L90.2344 62.017H92.8804L95.8414 70.228L98.5294 62.017H101.091L96.4294 74.323C96.0234 75.373 95.5124 76.143 94.8964 76.633C94.2944 77.123 93.5664 77.368 92.7124 77.368ZM111.692 73.315C110.586 73.315 109.718 73 109.088 72.37C108.458 71.726 108.143 70.809 108.143 69.619V63.97H106.211V62.017H108.143V58.3H110.558V62.017H113.75V63.97H110.558V69.367C110.558 69.955 110.677 70.41 110.915 70.732C111.167 71.04 111.531 71.194 112.007 71.194C112.259 71.194 112.532 71.159 112.826 71.089C113.12 71.005 113.393 70.893 113.645 70.753L114.191 72.58C113.869 72.804 113.491 72.979 113.057 73.105C112.637 73.245 112.182 73.315 111.692 73.315ZM120.996 73.315C120.184 73.315 119.435 73.175 118.749 72.895C118.077 72.601 117.489 72.195 116.985 71.677C116.481 71.159 116.089 70.55 115.809 69.85C115.543 69.136 115.41 68.352 115.41 67.498C115.41 66.672 115.543 65.909 115.809 65.209C116.089 64.509 116.467 63.9 116.943 63.382C117.433 62.85 118.007 62.437 118.665 62.143C119.323 61.849 120.037 61.702 120.807 61.702C121.577 61.702 122.277 61.842 122.907 62.122C123.551 62.388 124.104 62.773 124.566 63.277C125.042 63.781 125.406 64.383 125.658 65.083C125.91 65.769 126.036 66.532 126.036 67.372V68.086H117.909C117.979 68.73 118.147 69.29 118.413 69.766C118.693 70.228 119.05 70.585 119.484 70.837C119.918 71.089 120.422 71.215 120.996 71.215C122.144 71.215 123.04 70.704 123.684 69.682L125.805 70.501C125.553 71.075 125.182 71.579 124.692 72.013C124.216 72.433 123.656 72.755 123.012 72.979C122.382 73.203 121.71 73.315 120.996 73.315ZM120.807 63.655C120.317 63.655 119.876 63.767 119.484 63.991C119.106 64.215 118.784 64.53 118.518 64.936C118.252 65.342 118.07 65.818 117.972 66.364H123.516C123.432 65.818 123.271 65.342 123.033 64.936C122.795 64.53 122.48 64.215 122.088 63.991C121.71 63.767 121.283 63.655 120.807 63.655ZM128.095 73V62.017H130.3L130.405 63.823C130.685 63.207 131.07 62.731 131.56 62.395C132.064 62.045 132.652 61.87 133.324 61.87C133.534 61.87 133.737 61.884 133.933 61.912C134.129 61.94 134.304 61.989 134.458 62.059L134.185 64.411C134.031 64.355 133.87 64.32 133.702 64.306C133.534 64.278 133.366 64.264 133.198 64.264C132.358 64.264 131.7 64.544 131.224 65.104C130.748 65.664 130.51 66.441 130.51 67.435V73H128.095ZM136.237 73V62.017H138.442L138.526 63.529C138.848 62.969 139.296 62.528 139.87 62.206C140.458 61.87 141.13 61.702 141.886 61.702C142.712 61.702 143.426 61.898 144.028 62.29C144.644 62.682 145.12 63.235 145.456 63.949C145.792 64.663 145.96 65.503 145.96 66.469V73H143.545V66.742C143.545 65.846 143.342 65.146 142.936 64.642C142.544 64.138 141.991 63.886 141.277 63.886C140.773 63.886 140.318 64.005 139.912 64.243C139.52 64.481 139.212 64.803 138.988 65.209C138.764 65.615 138.652 66.084 138.652 66.616V73H136.237ZM153.665 73.315C152.867 73.315 152.125 73.175 151.439 72.895C150.767 72.601 150.179 72.195 149.675 71.677C149.171 71.145 148.779 70.529 148.499 69.829C148.219 69.115 148.079 68.338 148.079 67.498C148.079 66.672 148.219 65.909 148.499 65.209C148.779 64.495 149.171 63.879 149.675 63.361C150.193 62.829 150.795 62.423 151.481 62.143C152.181 61.849 152.937 61.702 153.749 61.702C154.547 61.702 155.282 61.849 155.954 62.143C156.64 62.423 157.235 62.829 157.739 63.361C158.243 63.879 158.635 64.488 158.915 65.188C159.195 65.888 159.335 66.658 159.335 67.498C159.335 68.338 159.195 69.115 158.915 69.829C158.635 70.529 158.236 71.145 157.718 71.677C157.214 72.195 156.612 72.601 155.912 72.895C155.226 73.175 154.477 73.315 153.665 73.315ZM153.707 71.131C154.309 71.131 154.848 70.977 155.324 70.669C155.8 70.347 156.171 69.913 156.437 69.367C156.717 68.821 156.857 68.198 156.857 67.498C156.857 66.798 156.717 66.182 156.437 65.65C156.171 65.104 155.8 64.677 155.324 64.369C154.848 64.047 154.309 63.886 153.707 63.886C153.105 63.886 152.566 64.047 152.09 64.369C151.614 64.677 151.236 65.104 150.956 65.65C150.69 66.182 150.557 66.798 150.557 67.498C150.557 68.198 150.69 68.821 150.956 69.367C151.236 69.913 151.614 70.347 152.09 70.669C152.566 70.977 153.105 71.131 153.707 71.131ZM164.821 73.315C164.261 73.315 163.743 73.231 163.267 73.063C162.805 72.895 162.399 72.657 162.049 72.349C161.699 72.041 161.426 71.677 161.23 71.257C161.034 70.837 160.936 70.375 160.936 69.871C160.936 69.171 161.118 68.562 161.482 68.044C161.86 67.512 162.385 67.099 163.057 66.805C163.729 66.511 164.513 66.364 165.409 66.364C165.899 66.364 166.368 66.413 166.816 66.511C167.264 66.595 167.691 66.721 168.097 66.889V66.196C168.097 65.706 168.006 65.279 167.824 64.915C167.642 64.537 167.383 64.243 167.047 64.033C166.711 63.823 166.305 63.718 165.829 63.718C165.325 63.718 164.87 63.851 164.464 64.117C164.058 64.383 163.757 64.754 163.561 65.23L161.335 64.726C161.503 64.11 161.804 63.578 162.238 63.13C162.686 62.682 163.218 62.332 163.834 62.08C164.464 61.828 165.143 61.702 165.871 61.702C166.557 61.702 167.18 61.814 167.74 62.038C168.314 62.262 168.804 62.577 169.21 62.983C169.616 63.389 169.931 63.872 170.155 64.432C170.379 64.992 170.491 65.615 170.491 66.301V73H168.286L168.202 71.551C167.908 72.083 167.467 72.51 166.879 72.832C166.291 73.154 165.605 73.315 164.821 73.315ZM163.372 69.766C163.372 70.074 163.456 70.354 163.624 70.606C163.792 70.844 164.023 71.033 164.317 71.173C164.625 71.313 164.982 71.383 165.388 71.383C165.906 71.383 166.368 71.271 166.774 71.047C167.18 70.823 167.502 70.522 167.74 70.144C167.978 69.752 168.097 69.311 168.097 68.821V68.569C167.733 68.415 167.355 68.296 166.963 68.212C166.585 68.114 166.193 68.065 165.787 68.065C165.059 68.065 164.471 68.219 164.023 68.527C163.589 68.835 163.372 69.248 163.372 69.766Z" fill="#0C0B0B"/>
        <path d="M249 69C249 60.7157 255.716 54 264 54H297C305.284 54 312 60.7157 312 69C312 77.2843 305.284 84 297 84H264C255.716 84 249 77.2843 249 69Z" fill="#7417EA" fillOpacity="0.1"/>
        <path d="M262.857 74.5V63.8359H266.592C267.886 63.8359 268.868 64.085 269.537 64.583C270.206 65.0762 270.54 65.8013 270.54 66.7583C270.54 67.2808 270.406 67.7422 270.137 68.1426C269.869 68.5381 269.495 68.8286 269.017 69.0142C269.564 69.1509 269.993 69.4268 270.306 69.8418C270.623 70.2568 270.782 70.7646 270.782 71.3652C270.782 72.3906 270.455 73.167 269.8 73.6943C269.146 74.2217 268.214 74.4902 267.003 74.5H262.857ZM265.054 69.8564V72.7349H266.937C267.454 72.7349 267.857 72.6128 268.145 72.3687C268.438 72.1196 268.585 71.7778 268.585 71.3433C268.585 70.3667 268.079 69.8711 267.069 69.8564H265.054ZM265.054 68.3037H266.68C267.789 68.2842 268.343 67.8423 268.343 66.978C268.343 66.4946 268.201 66.1479 267.918 65.938C267.64 65.7231 267.198 65.6157 266.592 65.6157H265.054V68.3037ZM279.028 69.8784H274.809V72.7349H279.761V74.5H272.612V63.8359H279.746V65.6157H274.809V68.1572H279.028V69.8784ZM289.399 65.6157H286.132V74.5H283.935V65.6157H280.712V63.8359H289.399V65.6157ZM295.975 72.3027H292.122L291.39 74.5H289.054L293.023 63.8359H295.059L299.051 74.5H296.715L295.975 72.3027ZM292.716 70.5229H295.382L294.041 66.5312L292.716 70.5229Z" fill="#7417EA"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.7237 14.6942L39.5679 12.5862C46.2524 11.9694 52.1787 16.8074 52.8049 23.3922L57.5127 72.9017C59.0755 71.4459 59.9478 69.2894 59.9478 66.8706V16.975C59.9478 12.5659 56.3195 8.99165 51.8437 8.99165H24.4923C20.821 8.99165 17.7199 11.3964 16.7237 14.6942ZM57.0974 77.8596C55.718 82.3956 51.6621 85.8801 46.582 86.3488L19.1172 88.8832C12.4328 89.5 6.50642 84.662 5.88027 78.0772L1.13364 28.1602C0.50749 21.5754 5.41868 15.7374 12.1031 15.1206L12.4866 15.0852C13.4065 9.36952 18.4314 5 24.4923 5H51.8437C58.5574 5 63.9999 10.3614 63.9999 16.975V66.8706C63.9999 71.8117 61.281 76.0378 57.0974 77.8596ZM5.16804 27.7879C4.75061 23.3981 8.02473 19.506 12.481 19.0948L39.9459 16.5605C44.4021 16.1493 48.353 19.3746 48.7705 23.7644L53.5171 73.6815C53.9345 78.0713 50.6604 81.9634 46.2041 82.3746L18.7393 84.9089C14.283 85.3201 10.3321 82.0948 9.91467 77.705L5.16804 27.7879Z" fill="#0C0B0B"/>
        <path d="M41.2601 48.2489C41.376 50.2337 39.8052 51.9311 37.7886 52.1172L35.0567 52.3692C34.8223 52.3908 34.5945 52.4575 34.3863 52.5656C34.1782 52.6737 33.9938 52.821 33.8436 52.9991C33.6934 53.1772 33.5804 53.3826 33.5111 53.6036C33.4418 53.8245 33.4175 54.0567 33.4396 54.2868L34.4779 65.2084C34.6677 67.2047 33.2387 69.061 31.2081 69.2959C30.2807 69.4051 29.3455 69.1688 28.5872 68.6337C27.829 68.0987 27.3029 67.3037 27.1128 66.4059C27.0845 66.2717 27.0635 66.1362 27.05 65.9998L26.0024 54.9802C25.958 54.5133 25.7266 54.083 25.3589 53.7839C24.9913 53.4848 24.5176 53.3414 24.0421 53.3853L21.1439 53.6527C20.1701 53.721 19.208 53.4123 18.4636 52.7927C17.7191 52.1731 17.2515 51.2919 17.1608 50.3376C17.07 49.3832 17.3635 48.4318 17.9782 47.6868C18.5929 46.9418 19.4801 46.4625 20.4498 46.3516L37.1832 44.8079C37.683 44.762 38.187 44.8154 38.6651 44.9649C39.1432 45.1144 39.5858 45.357 39.9662 45.6781C40.3467 45.9993 40.6574 46.3924 40.8797 46.8341C41.102 47.2758 41.2313 47.7569 41.2601 48.2489Z" fill="black"/>
        <path d="M28.3209 42.2058C31.053 41.9538 33.0513 39.4728 32.7843 36.6645C32.5174 33.8561 30.0862 31.7838 27.3541 32.0358C24.622 32.2879 22.6237 34.7688 22.8906 37.5772C23.1576 40.3855 25.5888 42.4578 28.3209 42.2058Z" fill="black"/>
      </svg>
};

export default LogoTernoa;
