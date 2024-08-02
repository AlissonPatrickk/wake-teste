
export interface User {
    id: string;
    username: string;
    foto: string;
    nome: string;
}

export interface Image {
    url: string;
    width: number;
    height: number;
}

export interface Imagens {
    resolucaoPadrao: Image;
    resolucaoMedia: Image;
    thumbnail: Image;
}

export interface Metadata {
    filter: string;
    users_in_photo: any[];
    engagement: number;
    impressions: number;
    reach: number;
    saved: number;
}

export interface Referencia {
    status: string;
    id: string;
    isInfluencer?: boolean;
    type?: string;
    oldId?: string;
}

export interface ApiResponse {
    _id: string;
    obtidoEm: string;
    origem: string;
    uid: string;
    tags: string[];
    link: string;
    tipo: string;
    upvotes: number;
    comentarios: number;
    criadoEm: string;
    legenda: string;
    usuario: User;
    localizacao: null | string;
    imagens: Imagens;
    metadados: Metadata;
    referencias: Referencia[];
    lastUpdate: string;
}
