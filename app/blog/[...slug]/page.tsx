const delay = (time) => new Promise((resolve) => {
    setTimeout(() => resolve(1), time)
})

const getData = async (slug) => {
    const post = await delay(3500);
    return { slug };
}

export default async function BlogPost({ params }) {
    console.log(params);
    const { slug } = params;
    const post = await getData(slug);

    return <h1>{post.slug}</h1>
}