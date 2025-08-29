interface PostCard {
    id: string,
    avatar: string,
    title: string,
    create_time: string,
    description: string,
    author: string,
    tags: string[],
    content: string
}

const posts: PostCard[] = []

posts.push({
    id: "000000000000",
    avatar: "/post/cover/01.webp",
    title: "关于友链交换这件事...",
    create_time: "2025/8/28 19:17",
    description: ":D",
    author: "SeaMite43981045",
    tags: ["link"],
    content: '/post/post/00.md'
})
posts.push({
    id: "000000000001",
    avatar: "/post/cover/01.webp",
    title: "我的个人项目",
    create_time: "2025/8/21 20:49",
    description: "尽力了...",
    author: "SeaMite43981045",
    tags: ["project", "code"],
    content: '/post/post/01.md'
})
posts.push({
    id: "000000000002",
    avatar: "/post/cover/02.webp",
    title: "Spigot教程 1 - HelloWorld!",
    create_time: "2025/8/28 22:08",
    description: "从零开始学习 Spigot",
    author: "SeaMite43981045",
    tags: ["project", "code", "Spigot", "Minecraft"],
    content: '/post/post/02.md'
})

export default posts;