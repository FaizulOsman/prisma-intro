import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });

  return result;
};

const getAllPost = async (options: any) => {
  const { sortBy, sortOrder, searchTerm } = options;
  const result = await prisma.post.findMany({
    include: { author: true, category: true },
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : { createdAt: "desc" },
    where: {
      title: {
        contains: searchTerm,
      },
    },
  });

  return result;
};

const getSinglePost = async (id: any) => {
  const result = await prisma.post.findUnique({ where: { id } });

  return result;
};

export const PostService = {
  createPost,
  getAllPost,
  getSinglePost,
};
