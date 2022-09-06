import { useRouter } from 'next/router'


export default function BlogArticle() {
    const router = useRouter();





    return <h1>Slug: {router.query.slug}</h1>
}