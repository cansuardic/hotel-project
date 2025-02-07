/*
  Warnings:

  - You are about to drop the column `commentText` on the `PropertyComment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `PropertyComment` table. All the data in the column will be lost.
  - Added the required column `comment_text` to the `PropertyComment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PropertyComment" DROP COLUMN "commentText",
DROP COLUMN "createdAt",
ADD COLUMN     "comment_text" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
