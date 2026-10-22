import { MetadataRoute } from "next";
import { tourPackages } from "@/data/tours";
import { blogPosts } from "@/data/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://gatewayholidays.in";
  const currentDate = new Date();

  // 1. Static Core Landing Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/plan-my-trip`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  // 2. Dynamic Tour Package Pages (56 packages)
  const tourRoutes: MetadataRoute.Sitemap = tourPackages.map((tour) => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: tour.isFeatured ? 0.9 : 0.85,
  }));

  // 3. Dynamic Blog Post Pages (5 posts)
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => {
    let postDate = currentDate;
    try {
      if (post.modifiedDate) {
        postDate = new Date(post.modifiedDate);
      } else if (post.publishDate) {
        postDate = new Date(post.publishDate);
      }
    } catch {
      postDate = currentDate;
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate,
      changeFrequency: "monthly",
      priority: 0.75,
    };
  });

  return [...staticRoutes, ...tourRoutes, ...blogRoutes];
}
