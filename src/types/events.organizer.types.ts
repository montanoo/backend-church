export interface CreateEventsOrganizer {
    name: string;
    email: string;
    phoneNumber: string;
}

export interface UpdateEventsOrganizer {
    name?: string;
    email?: string;
    phoneNumber?: string;
}