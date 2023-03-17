// const getData = async (slug) => {
//     const post = await getDataFromCMS(slug);
//     return post;
// }

export default async function BlogPost({ params }) {
    console.log(params);
    // const { slug } = params;
    // const post = await getData(slug);

    return <h1>Post</h1>
}