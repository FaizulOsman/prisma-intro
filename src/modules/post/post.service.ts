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

const getAllPost = async () => {
  const result = await prisma.post.findMany({
    include: { author: true, category: true },
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
