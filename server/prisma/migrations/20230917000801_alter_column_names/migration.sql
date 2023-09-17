/*
  Warnings:

  - You are about to drop the column `user_avatar_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_city` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_city_uf` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pet_adopted` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `pet_adopted_by` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `pet_birth_date` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `pet_breed` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `pet_category` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `pet_description` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `pet_img_url` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `pet_name` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `pet_sex` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `pet_tags` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `pet_weight` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city_uf` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adopted` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birth_date` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `breed` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "city_uf" TEXT NOT NULL,
    "avatar_url" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("created_at", "id", "updated_at") SELECT "created_at", "id", "updated_at" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "birth_date" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img_url" TEXT,
    "category" TEXT NOT NULL,
    "adopted" BOOLEAN NOT NULL,
    "adopted_by" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "Pet_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pet" ("authorId", "created_at", "id", "updated_at") SELECT "authorId", "created_at", "id", "updated_at" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
