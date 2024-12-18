-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryTypeLevel" (
    "idCategory" INTEGER NOT NULL,
    "idTypeLevel" INTEGER NOT NULL,

    CONSTRAINT "CategoryTypeLevel_pkey" PRIMARY KEY ("idCategory","idTypeLevel")
);

-- AddForeignKey
ALTER TABLE "CategoryTypeLevel" ADD CONSTRAINT "CategoryTypeLevel_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryTypeLevel" ADD CONSTRAINT "CategoryTypeLevel_idTypeLevel_fkey" FOREIGN KEY ("idTypeLevel") REFERENCES "TypeLevels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
