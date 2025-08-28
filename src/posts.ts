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
    content: await (await fetch('/post/post/00.md')).text()
})

posts.push({
    id: "000000000001",
    avatar: "/post/cover/01.webp",
    title: "我的个人项目",
    create_time: "2025/8/21 20:49",
    description: "尽力了...",
    author: "SeaMite43981045",
    tags: ["project", "code"],
    content: await (await fetch('/post/post/01.md')).text()
})

export default posts;