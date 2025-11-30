import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {

    // Fetch all posts from the database
    const getAllFromDB = await prisma.post.findMany()

    // Fetch the first post that matches the condition
    // Throws an error if no post is found
    const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            id: 1
        }
    })

    // Fetch a post by its unique identifier
    // Throws an error if no post with the given ID exists
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 2
        }
    })
}

main()
