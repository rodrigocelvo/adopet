-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_avatar_url" TEXT,
    "user_phone" TEXT NOT NULL,
    "user_city" TEXT NOT NULL,
    "user_city_uf" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "petId" TEXT,
    CONSTRAINT "User_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pet_name" TEXT NOT NULL,
    "pet_birth_date" TEXT NOT NULL,
    "pet_category" TEXT NOT NULL,
    "pet_description" TEXT NOT NULL,
    "pet_img_url" TEXT NOT NULL,
    "pet_sex" TEXT NOT NULL,
    "pet_tags" TEXT NOT NULL,
    "pet_weight" TEXT NOT NULL,
    "pet_adopted" BOOLEAN NOT NULL,
    "pet_adopted_by" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "User"("user_email");
