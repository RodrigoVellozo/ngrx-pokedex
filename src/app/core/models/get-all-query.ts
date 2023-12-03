export interface GetAllQuery {
    take?: number;
    
    page?: number;

    query?: string;

    sortDirection?: string;

    sort?: string;
}