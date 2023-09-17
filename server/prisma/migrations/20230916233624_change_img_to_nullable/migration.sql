-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pet_name" TEXT NOT NULL,
    "pet_weight" TEXT NOT NULL,
    "pet_birth_date" TEXT NOT NULL,
    "pet_sex" TEXT NOT NULL,
    "pet_breed" TEXT NOT NULL,
    "pet_tags" TEXT NOT NULL,
    "pet_description" TEXT NOT NULL,
    "pet_img_url" TEXT,
    "pet_category" TEXT NOT NULL,
    "pet_adopted" BOOLEAN NOT NULL,
    "pet_adopted_by" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "Pet_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pet" ("authorId", "created_at", "id", "pet_adopted", "pet_adopted_by", "pet_birth_date", "pet_breed", "pet_category", "pet_description", "pet_img_url", "pet_name", "pet_sex", "pet_tags", "pet_weight", "updated_at") SELECT "authorId", "created_at", "id", "pet_adopted", "pet_adopted_by", "pet_birth_date", "pet_breed", "pet_category", "pet_description", "pet_img_url", "pet_name", "pet_sex", "pet_tags", "pet_weight", "updated_at" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
