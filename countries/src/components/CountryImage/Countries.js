const countries = [
    {
        id : 1,
        title : "Afghanistan",
        data : "<div>null</div>"
    },
    {
        id : 2,
        title : "Albania",
        data : "<svg width='249' height='500' viewBox='0 0 249 500' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M57.2599 5.61566C58.1055 4.48809 58.9512 3.36053 59.9848 2.32693C60.9244 1.29332 62.2399 0.541612 63.6494 0.165756C65.0588 -0.210099 66.6562 0.0717933 67.9717 0.823504C69.2872 1.57521 70.4148 2.60882 71.2605 3.83035C72.9518 6.2734 74.0794 8.99835 74.6432 12.0052C75.113 14.8241 75.4888 17.643 76.2405 20.18C76.9922 22.7171 78.3078 24.9722 80.281 26.0058C82.3482 27.0394 84.4154 26.9454 86.4826 25.7239C88.6437 24.5963 90.523 22.7171 92.5902 20.7438C94.6574 18.8646 96.8186 16.7973 99.6375 15.012C101.047 14.1664 102.644 13.4147 104.43 12.9448C105.369 12.7569 106.309 12.569 107.249 12.569H108.658C109.128 12.6629 109.598 12.6629 110.067 12.7569C112.041 13.1328 113.826 13.8845 115.329 14.9181C116.927 15.9517 118.148 17.1732 119.276 18.4887C120.404 19.8042 121.343 21.2136 122.189 22.7171C123.035 24.2205 123.692 25.7239 124.256 27.3213C124.538 28.073 124.82 28.9187 125.008 29.6704C125.196 30.4221 125.384 31.1738 125.572 31.9255C125.947 33.4289 126.229 34.8384 126.511 36.1539C127.075 38.8788 127.733 41.4159 128.578 43.4831C129.424 45.5503 130.458 47.1477 131.773 48.3692C133.089 49.5907 134.874 50.6243 136.941 51.47C139.102 52.3157 141.545 53.0674 144.176 53.8191C146.901 54.5708 149.72 55.4165 152.821 56.638C155.922 57.8595 159.211 59.4569 162.217 61.9C165.224 64.343 167.761 67.2559 169.735 70.4507C171.708 73.5515 173.117 76.8402 174.151 80.1289C176.218 86.6124 177.064 92.908 177.534 98.9217C178.003 104.747 178.285 110.667 178.473 116.493C178.661 128.238 178.003 140.078 176.5 151.729C176.124 154.642 175.748 157.555 175.278 160.468C174.996 161.877 174.809 163.381 174.527 164.79L173.775 168.925C172.929 173.811 172.459 178.791 172.459 183.959C172.365 189.127 172.647 194.295 173.211 199.651L173.399 201.624L173.587 203.691C173.775 205.383 173.869 206.886 173.963 208.39L174.527 216.846C174.903 222.202 175.466 227.37 176.594 231.223C176.688 231.693 176.876 232.162 176.97 232.538C177.158 232.914 177.252 233.384 177.44 233.666C177.627 233.948 177.721 234.324 177.815 234.511C177.909 234.699 178.003 234.887 178.285 235.263C178.661 235.921 179.225 236.485 179.789 237.142C180.446 237.8 181.104 238.458 182.138 239.304C184.017 240.995 186.93 243.344 189.561 246.727C192.286 250.109 194.447 254.338 195.575 258.19C196.326 260.633 197.078 262.513 197.924 264.016C198.299 264.674 198.675 265.238 198.957 265.52C199.239 265.801 199.333 265.801 199.239 265.613C199.145 265.426 198.675 265.144 198.206 264.956C198.112 264.956 198.018 264.862 197.924 264.862C197.83 264.862 197.924 264.862 197.83 264.768C197.924 264.768 198.112 264.674 198.675 264.58C199.521 264.486 201.118 264.11 203.468 264.016C204.031 264.016 204.783 263.922 205.441 263.922C205.723 263.922 206.192 263.922 206.568 263.922C206.944 263.922 207.32 263.922 207.79 264.016C208.636 264.11 209.481 264.204 210.515 264.486C211.454 264.674 212.488 265.05 213.428 265.332C214.461 265.707 215.401 266.177 216.341 266.741C217.28 267.305 218.22 267.963 218.972 268.62C220.569 269.936 221.884 271.345 222.824 272.661C224.797 275.292 225.737 277.359 226.489 278.768L226.583 279.05L226.677 279.238L226.865 279.614L227.24 280.366L228.18 281.963L230.247 285.44C233.16 290.232 236.261 295.4 239.08 300.85C240.489 303.575 241.899 306.488 243.214 309.495C244.53 312.501 245.751 315.696 246.691 319.173C247.63 322.65 248.476 326.408 248.852 330.73C249.134 334.959 248.946 339.845 247.443 345.107C247.067 346.422 246.597 347.738 246.033 349.053C245.469 350.369 244.812 351.684 243.872 352.906C243.402 353.47 243.026 354.127 242.462 354.691C241.993 355.255 241.429 355.725 240.865 356.289C240.301 356.758 239.738 357.228 239.174 357.698C238.61 358.168 237.952 358.45 237.388 358.92C236.825 359.295 236.167 359.671 235.603 359.953C234.945 360.329 234.382 360.517 233.818 360.799C232.596 361.363 231.469 361.926 230.341 362.302C229.777 362.49 229.214 362.772 228.65 362.96C228.086 363.242 227.616 363.43 226.958 363.712C225.737 364.181 224.609 364.557 223.67 364.839C221.79 365.403 220.381 365.591 219.629 365.873L218.878 366.061C218.784 366.061 218.878 365.967 218.878 365.967C219.066 365.779 218.878 365.685 218.408 366.812C217.938 367.846 217.28 369.819 216.81 372.168C216.528 373.39 216.247 374.705 215.871 376.115C215.683 376.773 215.495 377.618 215.307 378.37L214.649 380.625C213.804 383.632 212.77 386.545 211.642 389.458C210.515 392.371 209.293 395.284 207.884 398.196C205.065 403.928 201.682 409.66 197.172 414.922C194.917 417.553 192.38 420.09 189.373 422.439C186.366 424.694 182.983 426.761 179.225 428.171C178.285 428.453 177.346 428.829 176.312 429.11L174.809 429.486C174.339 429.58 173.775 429.674 173.305 429.768C171.332 430.144 169.171 430.238 167.479 430.238C164.003 430.238 161.466 429.956 159.868 430.05C159.492 430.05 159.117 430.144 158.835 430.144C158.741 430.144 158.647 430.238 158.553 430.238C158.459 430.238 158.365 430.238 158.365 430.332C158.083 430.426 157.895 430.426 157.613 430.708C157.331 430.99 156.955 431.366 156.58 432.117C156.392 432.399 156.204 432.869 156.11 433.245C155.922 433.715 155.828 434.185 155.64 434.654L155.452 435.406L155.264 436.252C155.17 436.816 155.076 437.379 154.982 437.943L154.794 439.822C154.7 440.48 154.7 441.044 154.7 441.702C154.512 444.333 154.606 447.058 154.606 449.876C154.606 452.789 154.606 455.702 154.418 458.991C154.324 460.588 154.137 462.28 153.761 464.159C153.479 465.944 152.915 467.917 152.069 469.985C151.787 470.548 151.693 471.018 151.318 471.582C151.036 472.146 150.66 472.71 150.472 473.179L149.532 474.777C148.875 475.904 148.217 477.032 147.465 478.348C147.277 478.629 147.089 479.005 146.901 479.287C146.619 479.569 146.338 479.851 146.244 480.227C146.056 480.978 145.774 481.73 145.586 482.576C145.398 483.422 145.116 484.361 144.834 485.207C144.646 485.677 144.458 486.053 144.176 486.522C143.988 486.992 143.707 487.368 143.425 487.744C142.767 488.59 142.203 489.341 141.451 490.187C141.076 490.563 140.7 491.033 140.324 491.408L139.008 492.63C138.163 493.476 137.129 494.133 136.095 494.885C135.062 495.543 133.934 496.201 132.901 496.764C131.773 497.234 130.646 497.798 129.518 498.174L127.827 498.738C127.263 498.926 126.699 499.02 126.135 499.113L124.444 499.489C123.88 499.583 123.41 499.677 122.847 499.677C121.813 499.865 120.779 499.865 119.746 499.959C115.517 500.147 111.477 499.677 107.53 498.738C103.678 497.798 99.9194 496.295 96.4427 494.415C92.9661 492.536 89.6774 490.281 86.6705 487.462C83.6637 484.643 80.9387 481.448 78.7776 478.066C76.6164 474.683 74.8311 471.206 73.5156 467.824C72.2001 464.441 71.1665 461.152 70.2269 458.145C68.5355 452.038 67.4079 446.682 65.9985 442.641C65.3407 440.668 64.683 438.977 64.0252 437.755C63.7434 437.097 63.3675 436.628 63.0856 436.158C62.8977 435.97 62.8037 435.782 62.6158 435.5C62.4279 435.312 62.3339 435.124 62.146 434.936C61.4882 434.278 60.8305 433.621 59.7969 432.963L58.4814 432.211C58.0116 431.929 57.5417 431.741 57.0719 431.46C56.1323 430.896 55.2866 430.05 54.4409 429.017C54.253 428.735 54.0651 428.453 53.7832 428.171C53.5953 427.889 53.3134 427.607 53.1255 427.231C52.9375 426.949 52.7496 426.573 52.4677 426.198L51.81 425.164C51.3401 424.506 50.9643 423.755 50.4945 423.003C50.0246 422.251 49.5548 421.593 48.991 420.842L48.2393 419.808L47.3937 418.868C46.8299 418.305 46.2661 417.647 45.7023 417.177C44.4808 416.143 43.1653 415.298 41.8498 414.358C39.2188 412.573 36.5878 410.694 34.0508 408.72L32.1715 407.217C31.5138 406.747 30.95 406.277 30.3862 405.807L26.9095 402.895C22.2114 399.042 17.7951 394.814 13.8486 390.209C12.815 389.082 11.8753 387.86 10.9357 386.639C9.9021 385.417 8.96247 384.29 8.02283 382.974C7.0832 381.753 6.23751 380.531 5.29788 379.216C4.35824 377.806 3.41861 376.303 2.57293 374.611C1.72726 372.826 0.881581 371.041 0.411762 368.598C-0.0580574 366.249 -0.245979 363.336 0.505731 360.423C0.693659 359.671 0.881583 358.92 1.16347 358.262C1.44537 357.604 1.72726 356.852 2.10311 356.195C2.85482 354.879 3.60654 353.658 4.54618 352.624C5.48581 351.496 6.33149 350.745 7.36509 349.899C7.83491 349.523 8.30473 349.147 8.77455 348.865C9.24437 348.49 9.71419 348.208 10.184 347.926C11.0297 347.362 12.0633 346.704 12.721 346.422L14.5063 345.389C15.5399 344.731 16.3856 344.261 16.7615 343.979C17.2313 343.697 17.2313 343.509 17.0434 343.697C17.0434 343.791 16.7615 344.073 16.6675 344.449C16.5735 344.825 16.3856 345.389 16.3856 345.859C16.3856 346.892 16.8554 347.268 16.9494 346.892C17.0434 346.61 16.9494 345.671 16.6675 344.731C16.3856 343.697 16.0098 342.476 15.446 341.16C14.8822 339.845 14.3184 338.435 13.5667 336.932L12.3452 334.395L11.4055 331.952C11.1236 331.2 10.8417 330.355 10.5599 329.603C10.4659 329.227 10.278 328.851 10.09 328.381L9.71419 327.16L9.24437 325.938L8.8685 324.717L8.49265 323.495L8.21076 322.18L7.92886 320.864L7.74094 319.549C7.74094 319.079 7.64697 318.703 7.64697 318.233V316.918C7.64697 313.441 8.30472 310.058 9.33832 306.958C10.3719 303.857 11.7814 301.038 13.1908 298.407C16.0098 293.145 19.2045 288.353 21.5536 283.655C23.9027 278.956 25.5001 274.352 25.2182 270.218C25.0303 265.144 24.1846 259.788 23.245 254.15C22.7751 251.331 22.3993 248.324 22.1174 245.317C21.8355 242.216 21.8355 239.022 21.9295 235.827C22.3053 224.645 22.6812 213.182 24.3725 201.436C24.7484 198.523 25.3122 195.516 25.9699 192.604C26.3458 191.1 26.6277 189.691 27.0035 188.187C27.3794 186.684 27.7552 185.274 28.225 183.771C29.0707 180.858 30.1043 177.945 31.1379 175.126C31.7017 173.717 32.2655 172.307 32.9232 170.898L34.8025 166.858C36.9637 162.159 38.8429 157.555 39.5947 153.045C39.9705 150.79 40.1584 148.629 40.0645 146.561C39.8766 144.494 39.5007 142.615 38.749 140.736L43.2593 144.4C39.9705 143.367 36.5878 142.239 33.1112 140.83C29.6345 139.42 26.1578 137.729 22.8691 135.474C21.2717 134.346 19.5804 133.031 18.077 131.527C16.5735 130.024 15.258 128.426 14.1305 126.735C11.7814 123.258 10.09 119.218 9.71419 114.896C9.62022 113.768 9.62022 112.734 9.62022 111.607C9.71418 110.573 9.9021 109.258 9.99607 108.506C10.278 106.815 10.6538 105.123 11.0297 103.432C11.4055 101.741 11.6874 100.143 11.8753 98.7338C12.0633 97.2304 12.1572 95.9149 11.9693 94.5054C11.8753 93.0959 11.4995 91.5925 11.1236 89.9951C10.9357 89.2434 10.6538 88.3978 10.4659 87.646C10.278 86.8004 9.90211 85.9547 9.71419 85.0151C9.24437 83.2297 8.8685 81.3505 8.8685 79.2833C8.77454 77.31 9.15039 75.1489 9.80814 73.2696C10.4659 71.3903 11.4055 69.7929 12.4391 68.2895C13.3788 66.7861 14.4124 65.3766 15.446 64.0611L21.5536 55.8863C25.688 50.4364 29.6345 44.8925 33.675 39.3487L39.6886 31.0798C41.6619 28.2609 43.6351 25.536 45.6083 22.7171L57.2599 5.61566ZM57.3538 5.70962L46.7359 23.1869C43.1653 29.0126 39.3128 34.6505 35.4603 40.2883L23.9027 57.2018L18.1709 65.6585C16.2917 68.4774 14.3184 71.2963 13.3788 74.3032C12.3452 77.31 12.815 80.5988 13.7546 83.7935C14.2244 85.3909 14.8822 86.9883 15.352 88.5857C15.9158 90.277 16.3856 91.9684 16.5735 93.6597C16.8554 95.445 16.9494 97.2304 16.7615 98.9217C16.6675 100.707 16.3856 102.398 16.1037 104.09C15.8218 105.781 15.5399 107.472 15.352 109.164C15.0701 110.855 14.9762 112.452 15.258 114.05C15.7279 117.339 17.1373 120.439 19.1106 123.07C21.0838 125.795 23.6208 128.05 26.4397 129.836C32.1715 133.5 38.749 135.38 45.3265 137.165H45.4204V137.259C46.642 139.796 47.4876 142.615 47.7695 145.434C48.1454 148.253 47.9574 151.166 47.5816 153.891C46.7359 159.528 44.8566 164.884 42.6015 170.052C40.2524 175.22 38.2792 180.482 36.7757 185.932C35.2723 191.382 34.2387 196.926 33.3931 202.564C31.7957 213.745 31.1379 225.115 30.1983 236.391C29.1647 247.76 31.8896 258.942 31.7017 270.218C31.6077 275.949 29.2586 281.305 26.5337 286.192C23.8087 291.172 20.52 295.776 17.7951 300.756C16.3856 303.199 15.1641 305.736 14.2244 308.461C13.2848 311.186 12.815 314.005 12.815 316.824C12.9089 322.556 15.352 328.005 18.8287 332.328C20.7079 334.489 22.6812 336.462 24.3725 338.717C25.2182 339.845 26.0639 340.972 26.6277 342.288C27.1915 343.603 27.5673 345.013 27.5673 346.422C27.4733 347.832 26.9096 349.241 26.0639 350.275C25.2182 351.402 24.0906 352.342 22.9631 353.094C20.614 354.691 17.889 355.631 15.446 357.04C14.7882 357.322 14.2244 357.792 13.6607 358.168C13.0969 358.638 12.5331 359.013 12.0633 359.577C11.1236 360.611 10.278 361.832 9.90211 363.148C9.05644 365.873 9.71418 368.786 10.7478 371.417C11.7814 374.048 13.2848 376.491 14.6943 378.934C16.1977 381.283 17.7951 383.632 19.5804 385.887C23.057 390.303 27.0035 394.438 31.2319 398.196C33.3931 400.076 35.5542 401.861 37.9033 403.458C40.2524 405.056 42.6955 406.465 45.3265 407.593C50.4005 410.036 55.8504 411.821 61.0184 413.982C63.6494 415.11 66.1864 416.331 68.6295 417.741C71.0725 419.15 73.3277 420.936 75.3009 423.003C79.1534 427.231 81.4085 432.587 82.912 437.943C84.4154 443.393 85.355 449.031 86.5766 454.481C87.7981 460.025 89.3955 465.474 92.2144 470.454C95.0333 475.435 99.0737 479.569 103.866 482.576C108.658 485.583 114.202 487.462 119.84 487.556C122.659 487.556 125.478 487.18 128.109 486.053C130.74 484.925 132.901 483.046 134.686 480.885C136.471 478.723 137.881 476.28 139.384 473.837L141.545 470.173C142.297 468.951 143.143 467.824 143.613 466.508C144.176 465.193 144.552 463.877 144.834 462.468C145.116 461.058 145.304 459.649 145.492 458.239C145.774 455.42 145.962 452.601 146.056 449.782C146.338 444.145 146.432 438.413 147.747 432.963C148.123 431.554 148.499 430.238 149.062 428.923C149.626 427.607 150.378 426.386 151.318 425.352C153.103 423.191 155.922 421.969 158.741 421.593C161.56 421.218 164.379 421.311 167.198 421.218C170.016 421.124 172.835 420.466 175.466 419.432C180.728 417.177 184.957 413.137 188.245 408.626C191.628 404.022 194.165 398.948 196.326 393.78C198.487 388.518 200.179 383.162 201.588 377.712C203.092 372.262 203.749 366.531 206.099 361.363C207.32 358.826 209.011 356.476 211.454 354.879C213.804 353.282 216.622 352.718 219.347 351.778C220.005 351.59 220.663 351.308 221.321 351.027C221.978 350.745 222.542 350.369 223.2 350.087C223.858 349.805 224.421 349.335 224.985 348.959C225.267 348.771 225.549 348.583 225.831 348.302L226.583 347.55C228.65 345.671 230.153 343.134 230.999 340.409C231.845 337.684 232.033 334.865 231.845 332.046C231.657 329.227 231.187 326.408 230.529 323.683C229.12 318.233 227.052 312.877 224.703 307.803C222.354 302.635 219.817 297.655 217.186 292.581C215.871 290.044 214.555 287.507 213.428 284.97C212.864 283.655 212.206 282.433 211.454 281.211C210.609 280.084 209.575 279.05 208.26 278.58C206.944 278.017 205.535 277.923 204.125 278.017C202.716 278.111 201.306 278.299 199.897 278.393C197.078 278.674 194.071 278.299 191.816 276.607C189.467 275.01 187.87 272.567 186.554 270.03C185.332 267.493 184.393 264.768 183.547 262.137C182.702 259.412 181.48 256.875 179.695 254.62C178.003 252.365 175.842 250.485 173.775 248.606C171.708 246.727 169.641 244.66 168.137 242.31C166.54 239.961 165.506 237.236 164.848 234.511C163.439 229.062 162.969 223.33 162.687 217.692L162.217 209.235C162.029 206.416 161.748 203.597 161.466 200.778C160.996 195.141 160.714 189.503 160.808 183.865C160.902 178.227 161.466 172.589 162.499 166.951C163.627 161.408 164.566 155.864 165.412 150.226C167.01 139.044 167.855 127.769 167.949 116.399C168.043 110.761 167.949 105.123 167.573 99.3915C167.291 93.7537 166.728 88.1159 165.13 82.666C163.627 77.2161 160.902 71.9541 156.58 68.2895C154.418 66.4102 151.975 65.0947 149.344 63.8732C146.807 62.7456 144.082 61.806 141.451 60.8664C138.82 59.9267 136.095 58.9871 133.558 57.6716C131.021 56.4501 128.672 54.8527 126.699 52.6915C124.726 50.6243 123.504 47.9933 122.659 45.2684C121.813 42.5434 121.343 39.7245 120.967 36.9996C120.497 34.1807 120.216 31.3617 119.37 28.6368C118.994 27.3213 118.43 25.9118 117.867 24.6903C117.209 23.3748 116.551 22.1533 115.705 21.1197C114.014 18.8646 111.665 16.9853 108.94 16.3275L107.906 16.1396L106.873 16.0456C106.215 16.0456 105.463 16.1396 104.806 16.2336C103.396 16.5155 102.081 17.0792 100.859 17.737C98.416 19.1464 96.2548 20.9318 93.9997 22.7171C91.8385 24.5024 89.6774 26.3817 87.0464 27.6032C85.7309 28.167 84.4154 28.6368 82.912 28.6368C81.5025 28.6368 80.0931 28.167 78.8715 27.4153C77.65 26.6635 76.7104 25.536 75.9587 24.3145C75.2069 23.0929 74.7371 21.7774 74.4552 20.368C73.7975 17.643 73.5156 14.8241 73.1397 12.0052C72.7639 9.18628 71.8242 6.46133 70.2269 4.11224C69.4751 2.98467 68.4415 1.8571 67.314 1.10539C66.0924 0.353684 64.683 -0.0221712 63.2735 0.165756C61.8641 0.353684 60.6426 1.1054 59.6089 2.139C58.9512 3.36053 58.1995 4.48809 57.3538 5.70962Z' fill='black'/></svg>"
    },
    {
        id : 3,
        title : "Algeria",
        data : "<svg width='496' height='500' viewBox='0 0 496 500' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M140.343 376.221C146.61 381.998 153.954 386.698 161.298 391.007C165.018 393.063 168.837 394.825 172.852 396.196C176.866 397.567 180.979 398.742 185.091 400.113C187.147 400.798 189.204 401.484 191.26 402.169C192.337 402.561 193.316 402.953 194.295 403.344L195.862 403.932L197.331 404.617C201.345 406.478 205.164 408.534 208.885 410.884C216.327 415.486 223.279 420.871 229.937 426.453C236.595 432.034 242.862 437.909 249.324 443.588L258.92 452.205L263.718 456.513C265.285 457.982 266.949 459.45 268.614 461.017C271.943 464.248 275.37 468.067 277.72 473.159C278.895 475.607 279.679 477.957 280.364 479.817C281.049 481.775 281.735 483.342 282.42 484.517C282.714 485.105 283.204 485.496 283.497 485.986C283.987 486.377 284.281 486.867 284.868 487.259C285.358 487.65 285.945 487.944 286.435 488.336C286.729 488.532 287.022 488.63 287.316 488.825L287.806 489.021L288.295 489.217C290.841 490.294 294.072 490.686 297.401 490.686C299.066 490.588 300.731 490.49 302.395 490.196C303.276 490.098 304.06 489.805 304.843 489.707C305.626 489.413 306.41 489.315 307.291 488.923C310.816 487.748 314.439 486.279 318.258 484.615C322.076 482.95 326.189 481.09 330.693 479.425C332.945 478.544 335.295 477.859 337.743 477.173L339.603 476.684L341.562 476.292C342.835 475.998 344.108 475.802 345.283 475.705C347.633 475.411 349.787 475.215 351.549 474.921C352.431 474.823 353.214 474.627 353.899 474.432C354.585 474.236 355.172 474.04 355.858 473.844C358.403 472.963 360.949 471.396 363.593 469.34C368.881 465.13 374.07 458.667 380.533 452.009C387.191 445.252 394.437 439.378 401.878 434.188C409.32 428.998 416.958 424.396 424.399 420.088C431.841 415.682 439.185 411.569 446.235 407.163C453.187 402.757 459.845 398.253 465.72 393.161C467.189 391.888 468.56 390.615 470.028 389.342C470.812 388.657 471.301 388.167 471.889 387.482C472.476 386.894 473.064 386.209 473.553 385.621C475.805 383.076 477.764 380.236 479.232 377.494C480.701 374.655 481.68 371.815 482.072 369.465C482.464 367.017 482.17 365.255 481.582 363.982C481.289 363.296 480.799 362.611 480.212 362.023C479.624 361.436 478.939 360.751 477.862 360.065C475.805 358.694 472.574 357.323 468.657 355.855C466.699 355.071 464.643 354.288 462.293 353.211C461.216 352.721 459.943 352.134 458.768 351.644C457.495 350.959 456.32 350.371 455.047 349.588C449.955 346.553 445.255 342.44 441.535 337.74C437.716 333.138 434.974 327.948 432.918 322.661C430.862 317.471 429.491 312.086 428.708 306.799C427.924 301.511 427.728 296.224 427.924 290.936C428.022 288.292 428.316 285.649 428.61 283.103L429.197 279.186C429.393 277.913 429.687 276.738 429.98 275.465C431.058 270.569 432.33 265.967 433.799 261.463C435.268 256.959 436.835 252.749 438.401 248.636C439.968 244.524 441.535 240.607 443.003 236.788C443.689 234.928 444.374 232.969 445.451 231.305C446.039 230.424 446.626 229.64 447.214 228.857C447.801 228.074 448.487 227.29 449.074 226.409C449.662 225.626 450.249 224.744 450.641 223.961C451.033 223.08 451.424 222.199 451.718 221.317L453.285 216.03C453.676 214.267 454.068 212.407 454.362 210.547C454.655 208.686 454.851 206.826 455.047 204.965C455.635 197.524 455.243 189.984 454.46 182.542C452.893 167.561 448.487 152.678 440.947 139.263C439.968 137.599 438.989 135.934 437.912 134.368L434.583 129.668C432.233 126.534 429.393 123.205 426.651 119.582C425.28 117.82 423.812 115.861 422.441 113.903C421.07 111.847 419.699 109.693 418.524 107.343C416.174 102.643 414.118 97.2572 413.824 91.4801C413.53 85.703 414.51 80.3176 415.978 75.6176C416.664 73.2676 417.447 71.0155 418.328 68.8614C419.112 66.7072 419.993 64.6509 420.776 62.5947C424.008 54.6635 426.945 46.6343 430.176 38.6052C430.96 36.5489 431.743 34.6885 432.33 32.926C432.918 31.1635 433.505 29.4989 433.799 28.0302C433.995 27.3448 434.191 26.5614 434.289 25.876C434.387 25.5823 434.68 25.2885 434.583 24.8968C434.485 24.6031 434.387 24.3093 434.289 23.9177C433.995 23.3302 433.603 22.8406 433.212 22.4489C433.016 22.2531 432.82 22.0573 432.722 21.8614C432.526 21.6656 432.33 21.4698 432.233 21.2739C432.135 21.176 432.135 21.0781 432.135 20.9802L431.939 20.6864C431.841 20.4906 431.743 20.2948 431.547 20.0989C431.253 19.7073 431.058 19.3156 430.568 19.0218C429.883 18.2385 429.001 17.5531 428.022 16.8677C425.966 15.5948 423.42 14.4198 420.678 13.9302C419.308 13.6364 417.937 13.5385 416.664 13.4406C415.489 13.4406 413.824 13.4406 412.258 13.7344C409.124 14.0281 405.697 14.8114 402.074 15.7906C398.451 16.7698 394.633 18.0427 390.422 19.4135C388.366 20.0989 386.114 20.6864 383.862 21.3718C381.61 22.0573 379.26 22.5468 376.91 23.1343C367.51 25.1906 358.11 26.3656 348.906 26.8552C339.701 27.3448 330.791 27.2468 322.174 26.9531L309.445 26.4635C307.389 26.3656 305.235 26.2677 303.179 26.1698C301.122 26.0718 299.066 26.0718 297.01 25.5823C294.954 25.0927 292.897 24.2114 290.939 23.1343L287.904 21.3718C286.826 20.7843 285.847 20.1968 284.77 19.6093C282.714 18.5323 280.56 17.651 278.504 17.1614C277.426 16.9656 276.447 16.7698 275.37 16.6719C274.293 16.5739 273.314 16.476 272.237 16.476C270.181 16.476 268.124 16.3781 266.068 16.5739C265.089 16.6719 264.012 16.6719 263.033 16.7698C262.054 16.8677 260.977 17.0635 259.997 17.1614C255.885 17.7489 251.968 18.7281 247.954 20.001C245.995 20.5885 244.037 21.2739 242.079 21.9593C240.12 22.6448 238.26 23.4281 236.302 24.1135C234.441 24.8968 232.483 25.6802 230.622 26.5614C228.762 27.4427 226.902 28.3239 225.139 29.3031C217.893 33.1218 211.235 37.9197 204.968 43.0114C201.835 45.5572 198.8 48.201 195.862 50.8447C194.491 52.1176 193.316 53.2926 192.337 54.3697C191.456 55.4468 190.77 56.328 190.379 57.1114C190.183 57.503 190.085 57.7968 189.889 58.1885C189.791 58.5801 189.595 59.0697 189.497 59.6572C189.302 60.7343 189.008 62.203 188.812 63.9655L188.42 66.7072C188.322 67.1968 188.322 67.6864 188.225 68.2739L187.931 69.7426C187.539 71.7009 187.147 73.7572 186.756 75.8134C186.462 77.8697 186.07 80.0238 185.875 82.178C185.679 84.3322 185.581 86.4863 185.679 88.6405C185.777 92.9488 186.658 97.1592 187.147 101.468C188.225 110.084 189.4 118.799 189.106 128.003V129.765L189.008 131.528C188.91 132.703 188.812 133.78 188.616 135.151L188.518 136.13L188.322 137.109L188.127 138.088L187.735 139.263C187.637 139.655 187.539 139.949 187.343 140.438C187.147 140.83 186.952 141.32 186.756 141.711C186.56 142.103 186.168 142.592 185.875 142.984C185.581 143.376 185.189 143.865 184.797 144.257C184.308 144.649 183.916 145.04 183.427 145.334C182.937 145.628 182.447 145.922 181.86 146.215C180.881 146.607 179.804 146.901 179.02 146.999C177.258 147.292 175.887 147.293 174.614 147.293C172.166 147.195 170.11 146.999 168.054 146.901L161.689 146.705C159.633 146.607 157.675 146.607 155.912 146.705C154.15 146.803 152.583 147.097 151.31 147.586C150.037 148.076 149.156 148.663 148.275 149.447C148.079 149.643 147.883 149.838 147.687 150.132C147.491 150.328 147.295 150.622 147.198 150.817C146.806 151.307 146.512 151.992 146.12 152.678C145.435 154.147 144.75 155.909 143.966 157.965C143.575 159.042 143.085 160.12 142.595 161.197C142.106 162.274 141.518 163.351 141.029 164.428C139.952 166.582 138.679 168.638 137.406 170.695C132.118 178.724 125.166 185.774 116.941 191.159C112.829 193.803 108.423 196.153 103.821 197.817C99.2184 199.58 94.6164 200.853 90.1122 201.734C85.5101 202.615 81.006 203.301 76.5997 203.692C72.1935 204.182 67.8851 204.476 63.6747 204.867C59.4643 205.259 55.4497 205.553 51.5331 206.14C47.6164 206.728 43.7977 207.511 40.0769 208.588C36.4539 209.665 32.929 210.938 29.6977 212.603C26.4665 214.267 23.529 216.226 21.081 218.576C19.8081 219.751 18.6331 221.024 17.5561 222.394C16.479 223.863 15.4019 225.332 14.4227 226.997C12.4644 230.228 10.7019 233.655 9.33106 237.18C8.05815 240.705 7.07899 244.328 6.78524 247.755C6.78524 248.636 6.68732 249.419 6.68732 250.301L6.78524 251.476V252.063L6.88315 252.651L7.07899 253.826C7.1769 254.217 7.27482 254.511 7.37273 254.903C7.56857 255.588 7.86232 256.372 8.25398 257.057C8.3519 257.449 8.64565 257.84 8.84148 258.134L9.5269 259.309C10.0165 260.092 10.5061 260.778 11.0936 261.561C12.2686 263.03 13.5415 264.499 14.9123 265.967C17.654 268.807 20.7873 271.549 24.0185 274.192C27.2498 276.836 30.6769 279.48 34.006 282.319C34.8873 283.005 35.6706 283.69 36.5519 284.474L37.8248 285.551L38.9998 286.628L43.6998 290.936C50.0643 296.713 56.331 302.588 62.6956 308.267L81.7893 325.501L101.079 342.538C114.004 354.386 127.223 365.255 140.343 376.221ZM140.245 376.319C112.633 355.855 86.9789 333.138 60.6393 311.205L41.056 294.559C37.7269 291.817 34.5935 288.978 31.1665 286.334C27.7394 283.788 24.3123 281.242 20.8852 278.696C17.4581 276.151 14.129 273.409 10.8977 270.471C9.33106 269.003 7.86232 267.436 6.39357 265.772C5.70815 264.988 5.02274 264.009 4.43524 263.226C3.84774 262.344 3.26024 261.463 2.77066 260.484C0.616493 256.665 -0.166838 252.161 0.0289946 247.853C0.224828 243.544 1.10608 239.236 2.47691 235.222C3.84774 231.109 5.61024 227.192 7.7644 223.472C8.84148 221.611 10.0165 219.849 11.2894 218.086C12.5623 216.324 13.9331 214.757 15.4998 213.19C21.5706 207.119 29.5019 203.105 37.7269 200.657C45.9518 198.111 54.4706 197.034 62.9893 196.251C71.5081 195.37 80.0268 194.782 88.4476 193.117C92.658 192.334 96.7705 191.159 100.785 189.69C104.8 188.222 108.716 186.361 112.339 184.011C119.585 179.507 125.95 173.436 130.845 166.484C133.293 162.959 135.448 159.238 137.112 155.322C137.993 153.363 138.777 151.405 139.854 149.545C140.931 147.684 142.204 145.922 143.868 144.551C145.533 143.18 147.393 142.103 149.45 141.515C151.506 140.928 153.66 140.732 155.814 140.634C157.968 140.634 160.123 140.732 162.277 140.83L168.641 141.32C170.795 141.515 172.95 141.809 175.006 141.907C176.083 141.907 177.16 142.005 178.237 141.809C179.314 141.613 180.391 141.32 181.077 140.536C181.86 139.753 182.35 138.872 182.741 137.795L183.035 137.011L183.231 136.228C183.329 135.738 183.427 135.151 183.525 134.661C183.72 133.584 183.818 132.507 183.916 131.43L184.014 129.863L184.112 128.297C184.308 123.988 184.112 119.68 183.72 115.47C183.329 111.161 182.839 106.951 182.252 102.74C181.077 94.2217 179.608 85.8009 178.629 77.2822C178.139 72.9739 177.845 68.7634 177.845 64.4551C177.845 60.2447 178.335 55.8385 180.489 52.0197C182.545 48.2989 185.875 45.3614 189.204 42.7177C190.868 41.4447 192.631 40.1718 194.393 38.8989C196.156 37.626 197.918 36.451 199.681 35.276C206.829 30.576 214.368 26.4635 222.202 22.9385C237.77 15.8885 254.514 11.2864 271.552 9.32811C288.589 7.4677 305.822 8.25103 322.86 8.83853C339.995 9.42603 357.228 9.8177 374.168 6.97812C382.687 5.7052 390.814 3.06146 399.235 1.49479C403.445 0.71146 407.655 0.123961 411.964 0.0260445C414.118 -0.071872 416.272 0.12396 418.328 0.319793C420.483 0.613543 422.539 1.00521 424.595 1.69063C428.708 2.96354 432.526 5.01979 435.855 7.66353C437.52 9.03436 438.989 10.601 440.262 12.3635C440.947 13.2448 441.437 14.126 441.926 15.1052C442.122 15.5948 442.318 16.0844 442.612 16.5739L442.905 17.3573L443.101 18.1406C443.297 18.6302 443.395 19.1198 443.591 19.7073L443.885 21.2739C444.08 22.351 444.08 23.4281 444.178 24.5052C444.178 26.6593 443.885 28.8135 443.297 30.8697C442.22 35.0802 440.555 38.9968 438.793 42.9135L428.512 66.5114C426.847 70.428 425.085 74.3447 423.91 78.4572C422.735 82.5697 421.951 86.878 422.343 91.0884C422.441 92.1655 422.637 93.2426 422.833 94.2217L423.224 95.7884C423.322 96.278 423.518 96.8655 423.714 97.3551C424.399 99.4113 425.28 101.37 426.358 103.23C428.512 106.951 431.155 110.378 433.897 113.609C436.737 116.84 439.674 119.974 442.416 123.205L446.43 128.199C447.703 129.863 448.878 131.724 450.151 133.388C459.649 147.586 465.818 164.036 468.266 181.074C470.714 198.013 469.343 215.54 463.86 231.794C458.572 248.147 450.445 263.422 446.235 280.067C445.941 281.144 445.745 282.124 445.451 283.201L444.864 286.334C444.57 288.488 444.178 290.544 444.08 292.699C443.787 297.007 443.689 301.217 444.178 305.526C444.668 309.736 445.549 314.044 446.92 318.059C448.291 322.073 450.249 325.99 452.893 329.417C455.439 332.844 458.67 335.782 462.293 338.034C465.916 340.286 469.93 341.951 473.847 343.615C477.764 345.28 481.778 347.042 485.303 349.49C488.828 351.938 491.864 355.267 493.43 359.184C495.095 363.198 495.389 367.605 494.605 371.815C493.92 376.026 492.255 380.138 490.297 383.859C488.241 387.58 485.695 391.105 482.855 394.336C480.016 397.567 476.687 400.309 473.455 403.148C466.895 408.632 459.747 413.43 452.403 417.934C445.06 422.438 437.618 426.648 430.176 430.859C422.735 435.167 415.391 439.475 408.341 444.371C401.291 449.169 394.535 454.555 388.464 460.625C382.393 466.696 377.008 473.355 370.153 478.642C366.726 481.188 363.006 483.44 358.893 484.713C354.781 486.084 350.472 486.182 346.164 486.671C337.547 487.552 329.616 490.882 321.685 494.113C317.67 495.679 313.754 497.246 309.543 498.421C305.431 499.596 301.122 500.086 296.814 499.988C292.506 499.792 288.197 499.009 284.379 497.148L283.693 496.854L283.008 496.463C282.518 496.169 282.029 495.973 281.637 495.582C280.756 494.896 279.874 494.309 279.091 493.525C278.308 492.84 277.622 491.959 276.937 491.175C276.349 490.294 275.664 489.413 275.272 488.434C273.314 484.615 272.629 480.307 270.964 476.39C269.299 472.473 266.558 469.046 263.62 465.913C260.683 462.78 257.549 459.842 254.514 456.807L245.408 447.798C239.337 441.825 233.266 435.657 226.999 429.88C220.733 424.005 214.172 418.521 207.122 413.723C200.072 408.925 192.337 405.009 184.21 402.267C180.195 400.798 176.083 399.525 172.068 397.959C168.054 396.392 164.235 394.532 160.514 392.28C156.793 390.028 153.366 387.58 149.939 384.936C146.904 381.803 143.575 379.061 140.245 376.319Z' fill='black'/></svg>"
    }
];
export default countries;