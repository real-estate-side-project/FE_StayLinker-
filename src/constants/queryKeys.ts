export const QUERY_KEYS = {
    REAL_ESTATES: (query?: string) => ['real-estates', query ?? ''],
    REAL_ESTATE_DETAIL: (id: string) => ['real-estate', id]
};
