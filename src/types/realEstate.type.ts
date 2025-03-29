export type HouseType = 'APARTMENT' | 'VILLA' | 'STUDIO' | 'HOUSE' | 'OFFICETEL' | 'SHAREHOUSE' | 'GOSIWON';

export type GoodsType = 'MONTHLY_RENT' | 'JEONSE' | 'SHORT_TERM';

export type RealEstate = {
    id: number;
    businessId: number;
    name: string;
    address: string;
    houseType: HouseType;
    goodsType: GoodsType;
    security: number;
    rent: number;
    maintenanceCost: number;
};

type Sort = {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
};

type Pageable = {
    offset: number;
    sort: Sort;
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
};

export type RealEstatePagination = {
    totalPages: number;
    totalElements: number;
    first: boolean;
    last: boolean;
    size: number;
    content: RealEstate[];
    number: number;
    sort: Sort;
    numberOfElements: number;
    pageable: Pageable;
    empty: boolean;
};

type Option = {
    name: string;
    description: string;
};

export type RealEstateDetailInformation = {
    id: number;
    businessId: number;
    name: string;
    address: string;
    completionDate: string;
    houseType: HouseType;
    goodsType: GoodsType;
    security: number;
    rent: number;
    size: number;
    maintenanceCost: number;
    roomCount: number;
    floor: number;
    contractPeriod: string;
    description: string;
    bathroomCount: number;
    isParked: boolean;
    rate: number;
    options: Option[];
};

export type FilterOption = {
    bedrooms: number;
    bathrooms: number;
    features: string[];
    others: string[];
};
