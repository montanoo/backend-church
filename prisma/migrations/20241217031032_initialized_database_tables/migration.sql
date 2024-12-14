-- CreateTable
CREATE TABLE `Parishes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parishName` VARCHAR(191) NOT NULL,
    `parishLocation` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Baptism` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `baptizedName` VARCHAR(191) NOT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `baptismDate` DATETIME(3) NOT NULL,
    `parishId` INTEGER NOT NULL,
    `book` VARCHAR(191) NOT NULL,
    `folio` VARCHAR(191) NOT NULL,
    `birthPlace` VARCHAR(191) NOT NULL,
    `motherName` VARCHAR(191) NULL,
    `fatherName` VARCHAR(191) NULL,
    `godparents` VARCHAR(191) NULL,
    `ministerName` VARCHAR(191) NOT NULL,
    `marginNotes` VARCHAR(191) NULL,
    `pastorName` VARCHAR(191) NOT NULL,
    `pastorEmail` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Confirmation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `confirmedName` VARCHAR(191) NOT NULL,
    `confirmationDate` DATETIME(3) NOT NULL,
    `parishId` INTEGER NOT NULL,
    `book` VARCHAR(191) NOT NULL,
    `folio` VARCHAR(191) NOT NULL,
    `diocese` VARCHAR(191) NULL,
    `bishopName` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `motherName` VARCHAR(191) NULL,
    `fatherName` VARCHAR(191) NULL,
    `godparents` VARCHAR(191) NULL,
    `pastorName` VARCHAR(191) NOT NULL,
    `pastorEmail` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ParishEvent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `startDateTime` DATETIME(3) NOT NULL,
    `endDateTime` DATETIME(3) NOT NULL,
    `organizerId` INTEGER NOT NULL,
    `hallId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RecurringEvent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `recurringTitle` VARCHAR(191) NOT NULL,
    `recurringDescription` VARCHAR(191) NOT NULL,
    `dayOfWeek` VARCHAR(191) NOT NULL,
    `startTime` DATETIME(3) NOT NULL,
    `endTime` DATETIME(3) NOT NULL,
    `organizerId` INTEGER NOT NULL,
    `hallId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Marriage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `husbandName` VARCHAR(191) NOT NULL,
    `wifeName` VARCHAR(191) NOT NULL,
    `marriageDate` DATETIME(3) NOT NULL,
    `parishId` INTEGER NOT NULL,
    `diocese` VARCHAR(191) NULL,
    `delegateName` VARCHAR(191) NOT NULL,
    `godparents` VARCHAR(191) NULL,
    `pastorName` VARCHAR(191) NOT NULL,
    `pastorEmail` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReservationNotification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reservationId` INTEGER NOT NULL,
    `notificationType` VARCHAR(191) NOT NULL,
    `notificationDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventOrganizer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FirstCommunion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `communionName` VARCHAR(191) NOT NULL,
    `communionDate` DATETIME(3) NOT NULL,
    `parishId` INTEGER NOT NULL,
    `pastorName` VARCHAR(191) NOT NULL,
    `pastorEmail` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HallReservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hallId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `startDateTime` DATETIME(3) NOT NULL,
    `endDateTime` DATETIME(3) NOT NULL,
    `rentalContract` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hall` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hallName` VARCHAR(191) NOT NULL,
    `capacity` INTEGER NULL,
    `parishId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(191) NOT NULL,
    `refreshToken` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FinancialTransaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `transactionType` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `transactionDate` DATETIME(3) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `reservationId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Baptism` ADD CONSTRAINT `Baptism_parishId_fkey` FOREIGN KEY (`parishId`) REFERENCES `Parishes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Confirmation` ADD CONSTRAINT `Confirmation_parishId_fkey` FOREIGN KEY (`parishId`) REFERENCES `Parishes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ParishEvent` ADD CONSTRAINT `ParishEvent_organizerId_fkey` FOREIGN KEY (`organizerId`) REFERENCES `EventOrganizer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ParishEvent` ADD CONSTRAINT `ParishEvent_hallId_fkey` FOREIGN KEY (`hallId`) REFERENCES `Hall`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RecurringEvent` ADD CONSTRAINT `RecurringEvent_organizerId_fkey` FOREIGN KEY (`organizerId`) REFERENCES `EventOrganizer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RecurringEvent` ADD CONSTRAINT `RecurringEvent_hallId_fkey` FOREIGN KEY (`hallId`) REFERENCES `Hall`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Marriage` ADD CONSTRAINT `Marriage_parishId_fkey` FOREIGN KEY (`parishId`) REFERENCES `Parishes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReservationNotification` ADD CONSTRAINT `ReservationNotification_reservationId_fkey` FOREIGN KEY (`reservationId`) REFERENCES `HallReservation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FirstCommunion` ADD CONSTRAINT `FirstCommunion_parishId_fkey` FOREIGN KEY (`parishId`) REFERENCES `Parishes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HallReservation` ADD CONSTRAINT `HallReservation_hallId_fkey` FOREIGN KEY (`hallId`) REFERENCES `Hall`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HallReservation` ADD CONSTRAINT `HallReservation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hall` ADD CONSTRAINT `Hall_parishId_fkey` FOREIGN KEY (`parishId`) REFERENCES `Parishes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Token` ADD CONSTRAINT `Token_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FinancialTransaction` ADD CONSTRAINT `FinancialTransaction_reservationId_fkey` FOREIGN KEY (`reservationId`) REFERENCES `HallReservation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
