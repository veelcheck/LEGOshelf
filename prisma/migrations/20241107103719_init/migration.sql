-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "legoShelfId" INTEGER,
    "wishlistId" INTEGER,
    CONSTRAINT "User_legoShelfId_fkey" FOREIGN KEY ("legoShelfId") REFERENCES "LegoShelf" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "Wishlist" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LegoSet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imagePath" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "parts" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "LegoShelf" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "totalParts" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "legoSetId" INTEGER NOT NULL,
    CONSTRAINT "Wishlist_legoSetId_fkey" FOREIGN KEY ("legoSetId") REFERENCES "LegoSet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_legoShelfId_key" ON "User"("legoShelfId");

-- CreateIndex
CREATE UNIQUE INDEX "User_wishlistId_key" ON "User"("wishlistId");
