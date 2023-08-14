import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const CreateUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });

  return result;
};

const CreateOrUpdateUser = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data?.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data?.userId,
      },
      data: {
        bio: data?.bio,
      },
    });
    return result;
  }

  const result = await prisma.profile.create({ data });
  return result;
};

const GetUser = async () => {
  // const result = await prisma.user.findMany({
  //   // select: {
  //   //   email: true,
  //   // },
  //   include: {
  //     profile: true,
  //   },
  // });

  // Raw database access = https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access
  const result = await prisma.$queryRaw`SELECT * FROM users`;

  return result;
};

const GetSingleUser = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: { id },
    include: {
      profile: true,
    },
  });

  return result;
};

export const UserService = {
  CreateUser,
  CreateOrUpdateUser,
  GetUser,
  GetSingleUser,
};
