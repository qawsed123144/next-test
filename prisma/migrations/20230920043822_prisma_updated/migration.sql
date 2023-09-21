/*
  Warnings:

  - You are about to drop the column `accessToken` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `accessTokenExpires` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `accessToken` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Session_accessToken_key` ON `Session`;

-- AlterTable
ALTER TABLE `Account` DROP COLUMN `accessToken`,
    DROP COLUMN `accessTokenExpires`,
    ADD COLUMN `expires_in` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Session` DROP COLUMN `accessToken`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `emailVerified`,
    ADD COLUMN `email_verified` DATETIME(3) NULL;
