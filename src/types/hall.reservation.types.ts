export interface CreateHallReservation {
  hallId: number;
  userId: number;
  startDateTime: Date;
  endDateTime: Date;
  rentalContract: string;
}

export interface UpdateHallReservation {
  hallId?: number;
  userId?: number;
  startDateTime?: Date;
  endDateTime?: Date;
  rentalContract?: string;
}
