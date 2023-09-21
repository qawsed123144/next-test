-- AlterTable
ALTER TABLE `Account` ADD COLUMN `id_token` VARCHAR(191) NULL,
    ADD COLUMN `scope` VARCHAR(191) NULL,
    ADD COLUMN `session_state` VARCHAR(191) NULL;
