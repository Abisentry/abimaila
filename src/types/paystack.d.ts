declare module '@paystack/inline-js' {
    export default class PaystackPop {
        newTransaction(options: {
            key: string;
            email: string;
            amount: number;
            currency?: string;
            ref?: string;
            label?: string;
            metadata?: any;
            onSuccess?: (transaction: any) => void;
            onCancel?: () => void;
            onError?: (error: any) => void;
            onLoad?: () => void;
        }): void;
    }
}
