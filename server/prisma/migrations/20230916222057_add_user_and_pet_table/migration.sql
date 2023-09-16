-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_phone" TEXT NOT NULL,
    "user_city" TEXT NOT NULL,
    "user_city_uf" TEXT NOT NULL,
    "user_avatar_url" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pet_name" TEXT NOT NULL,
    "pet_weight" TEXT NOT NULL,
    "pet_birth_date" TEXT NOT NULL,
    "pet_sex" TEXT NOT NULL,
    "pet_breed" TEXT NOT NULL,
    "pet_tags" TEXT NOT NULL,
    "pet_description" TEXT NOT NULL,
    "pet_img_url" TEXT NOT NULL,
    "pet_category" TEXT NOT NULL,
    "pet_adopted" BOOLEAN NOT NULL,
    "pet_adopted_by" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "Pet_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "User"("user_email");
