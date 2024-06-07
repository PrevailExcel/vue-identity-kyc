interface UseIdentityPayKYCOptions {
    first_name: string;
    last_name: string;
    email: string;
    merchant_key: string;
    user_ref: string;
    is_test: boolean;
    config_id: string;
    callback: () => void;
}

declare function useIdentityPayKYC(options: UseIdentityPayKYCOptions): void;

export { useIdentityPayKYC };
