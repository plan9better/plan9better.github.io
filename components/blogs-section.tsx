import { Badge } from "@/components/ui/badge"

const blogPosts = [
  // {
  //   title: "Optimizing Database Queries in Distributed Systems",
  //   date: "2024-01-15",
  //   excerpt: "Deep dive into query optimization techniques for large-scale distributed databases.",
  //   tags: ["Databases", "Performance", "Distributed Systems"],
  //   readTime: "12 min",
  // },
  // {
  //   title: "Understanding Consensus Algorithms",
  //   date: "2024-01-08",
  //   excerpt: "Comprehensive analysis of Raft, PBFT, and other consensus mechanisms.",
  //   tags: ["Algorithms", "Theoretical CS", "Distributed Systems"],
  //   readTime: "18 min",
  // },
  // {
  //   title: "Machine Learning Model Deployment at Scale",
  //   date: "2023-12-22",
  //   excerpt: "Best practices for deploying ML models in production environments.",
  //   tags: ["AI", "MLOps", "Infrastructure"],
  //   readTime: "15 min",
  // },
  // {
  //   title: "Graph Algorithms for Social Network Analysis",
  //   date: "2023-12-10",
  //   excerpt: "Implementing efficient graph traversal algorithms for social media platforms.",
  //   tags: ["Algorithms", "Graph Theory", "Social Networks"],
  //   readTime: "20 min",
  // },
]

export function BlogsSection() {
  return (
    <section id="blogs" className="space-y-8">
      <div className="border-b border-dashed border-zinc-300 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">BLOGS</h2>
        <p className="text-sm text-zinc-600 mt-1">Technical writing and documentation</p>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post, index) => (
          <article key={index} className="border border-zinc-300 p-6 bg-white hover:border-zinc-400 transition-colors">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 leading-tight">{post.title}</h3>
                <div className="text-xs text-zinc-500 whitespace-nowrap ml-4">{post.readTime}</div>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <time className="text-xs text-zinc-500 font-mono">{post.date}</time>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
