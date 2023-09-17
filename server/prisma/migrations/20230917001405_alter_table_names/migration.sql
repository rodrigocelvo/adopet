/*
  Warnings:

  - You are about to drop the column `adopted_by` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `birth_date` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `img_url` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `avatar_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `city_uf` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT,
    "category" TEXT NOT NULL,
    "adopted" BOOLEAN NOT NULL,
    "adoptedBy" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "Pet_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pet" ("adopted", "authorId", "breed", "category", "description", "id", "name", "sex", "tags", "weight") SELECT "adopted", "authorId", "breed", "category", "description", "id", "name", "sex", "tags", "weight" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("city", "email", "id", "name", "phone") SELECT "city", "email", "id", "name", "phone" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
