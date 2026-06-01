import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectDetailView from "@/components/system/ProjectDetailView";
import { featuredProjects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((entry) => entry.slug.toLowerCase() === slug.toLowerCase());

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Arya Mehta`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((entry) => entry.slug.toLowerCase() === slug.toLowerCase());

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
