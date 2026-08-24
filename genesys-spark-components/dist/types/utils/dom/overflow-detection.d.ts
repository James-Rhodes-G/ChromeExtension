export declare function overflowDetection(): {
    name: string;
    fn(state: any): Promise<{
        y: any;
    } | {
        y?: undefined;
    }>;
};
