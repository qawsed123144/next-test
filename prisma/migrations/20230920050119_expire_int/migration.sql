/*
  Warnings:

  - Added the required column `expires_at` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Account` DROP COLUMN `expires_at`,
    ADD COLUMN `expires_at` INTEGER NOT NULL;
