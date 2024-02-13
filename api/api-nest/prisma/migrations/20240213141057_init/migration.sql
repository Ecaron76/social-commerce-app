-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "description" VARCHAR(300) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
