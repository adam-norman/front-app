import { StoreDetailsDto } from "./StoreDetailsDto";
export default interface StoreDto {
    id: number;
    name: string;
    logo: string;
    slug: string;
    cuisines: string;
    startWorkAt?: string;
    endWorkAt?: string;
    lat?: number;
    lng?: number;
    storeDetails: StoreDetailsDto[];
}
