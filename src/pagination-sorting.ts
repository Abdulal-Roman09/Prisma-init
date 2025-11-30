import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const paginationSoring = async () => {

    const offsetData = await prisma.post.findMany({
        skip: 5,
        take: 2
    });
    // console.log("off set based data", offsetData)

    const cursonrData = await prisma.post.findMany({
        skip: 5,
        take: 2,
        cursor: {
            id: 16
        }

    });
    // console.log("cursor based data", cursonrData)
    const sortedData = await prisma.post.findMany({
        orderBy: {
            title: 'asc'
        },
        where: {
            title: "First Post"
        }
    })
    // console.log(sortedData)

}
paginationSoring()