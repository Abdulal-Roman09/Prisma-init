import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const update = async () => {

    // Update a single post (basic update)

    const singleUpdate = await prisma.post.update({
        where: {
            id: 6
        },
        data: {
            title: "updated",
            content: "updated post",
            authorName: "updated Shovo",
        }
    })

    // Upsert → Update if record exists, otherwise create
    
    const upsertData = await prisma.post.upsert({
        where: {
            id: 10
        }, update: {
            authorName: "roman"
        }, create: {
            title: "title upsart ",
            content: "count 2 "
        }
    })
    console.log(upsertData)

}
update()