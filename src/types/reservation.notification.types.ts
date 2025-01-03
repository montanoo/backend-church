export interface CreateReservationNotification {
  reservationId: number;
  notificationType: string;
  notificationDate: Date;
}

export interface UpdateReservationNotification {
  reservationId?: number;
  notificationType?: string;
  notificationDate?: Date;
}
