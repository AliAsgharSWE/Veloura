import BlogDetail from "@/src/containers/blog-detail";
import { blogdetailData } from "@/src/containers/blog-detail/data";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogdetailData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetail blog={blog} />;
}
