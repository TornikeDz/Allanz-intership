export interface MarsRoverImage {
    id: number;
    sol: number;
    camera: {
        id: number;
        name: string;
        rover_id: number;
        full_name: string;
    }
    img_src: string;
    earth_date: string;
}

export interface MarsRoverPhotos {
    photos: MarsRoverImage[];
}
