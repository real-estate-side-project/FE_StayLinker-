type QueryParamsType = {
    [key: string]: string | number | boolean;
};

// 쿼리스트링을 객체로 만들어주는 함수
export const parseSearchParamsToObject = (searchParams: string | URLSearchParams): QueryParamsType => {
    const queryParams: QueryParamsType = {};
    const params = new URLSearchParams(searchParams);

    params.forEach((value, key) => {
        let parsedValue: string | number | boolean = value;

        if (/^\d+$/.test(value)) {
            parsedValue = parseInt(value, 10);
        } else if (value === 'true' || value === 'false') {
            parsedValue = value === 'true';
        }

        queryParams[key] = parsedValue;
    });

    return queryParams;
};

// 쿼리 스트링 만들어주는 함수
export const createQueryStringFromObject = (queryParams: QueryParamsType): string => {
    const queryString = Object.entries(queryParams)
        .filter(([, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
        .join('&');

    return queryString ? `?${queryString}` : '';
};

// 객체 얕은 비교하는 함수
export const shallowEqual = (objA: QueryParamsType, objB: QueryParamsType): boolean => {
    if (objA === objB) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        if (objA[key] !== objB[key]) {
            return false;
        }
    }

    return true;
};
