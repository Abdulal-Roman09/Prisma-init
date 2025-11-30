import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {

    const createSingle = await prisma.post.create({
        data: {
            title: "this si tytle",
            content: "this is content",
            authorName: "shovo ",

        },
    })

    const createMany = await prisma.post.createMany({
        data: [
            {
                title: "this si tytle",
                content: "this is content",
                authorName: "shovo ",

            },
            {
                title: "First Post",
                content: "This is the content of the first post",
                authorName: "Shovo",
            },
            {
                title: "Second Post",
                content: "Here is some content for the second post",
                authorName: "Roman",
            },
            {
                title: "Third Post",
                content: "Third post content goes here",
                authorName: "Anika",
            }]
    })

}
main()