type Category = {
    category: "funny" | "technology" 
}

interface categorySchema{
    category:Category,
    reason: string
}

export const categoryReasons:categorySchema[]=[
    {
        category: { category: "funny" },
        reason: "Because it makes people laugh"
    }
]