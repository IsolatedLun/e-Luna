export interface INF_Transaction {
    name: string;
    type: string | 'sold' | 'bought';

    id: number;
}