import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const readingData = {
  // books: [
  //   {
  //     title: "Designing Data-Intensive Applications",
  //     author: "Martin Kleppmann",
  //     status: "completed",
  //     tags: ["Databases", "Distributed Systems", "Architecture"],
  //     notes: "Comprehensive guide to building scalable data systems.",
  //   },
  //   {
  //     title: "The Algorithm Design Manual",
  //     author: "Steven Skiena",
  //     status: "reading",
  //     tags: ["Algorithms", "Computer Science"],
  //     notes: "Practical approach to algorithm design and analysis.",
  //   },
  //   {
  //     title: "Pattern Recognition and Machine Learning",
  //     author: "Christopher Bishop",
  //     status: "completed",
  //     tags: ["AI", "Machine Learning", "Statistics"],
  //     notes: "Mathematical foundations of modern ML techniques.",
  //   },
  // ],
  // papers: [
  //   {
  //     title: "Attention Is All You Need",
  //     authors: "Vaswani et al.",
  //     venue: "NIPS 2017",
  //     tags: ["AI", "Deep Learning", "NLP"],
  //     notes: "Introduced the Transformer architecture.",
  //   },
  //   {
  //     title: "MapReduce: Simplified Data Processing on Large Clusters",
  //     authors: "Dean & Ghemawat",
  //     venue: "OSDI 2004",
  //     tags: ["Distributed Systems", "Big Data"],
  //     notes: "Foundational paper for distributed computing frameworks.",
  //   },
  //   {
  //     title: "The Byzantine Generals Problem",
  //     authors: "Lamport et al.",
  //     venue: "ACM TOPLAS 1982",
  //     tags: ["Theoretical CS", "Distributed Systems"],
  //     notes: "Classic problem in distributed consensus.",
  //   },
  // ],
  // posts: [
  //   {
  //     title: "How Discord Stores Billions of Messages",
  //     source: "Discord Engineering Blog",
  //     date: "2024-01-10",
  //     tags: ["Databases", "Architecture", "Scale"],
  //     notes: "Insights into message storage at massive scale.",
  //   },
  //   {
  //     title: "The Log: What every software engineer should know",
  //     source: "LinkedIn Engineering",
  //     date: "2023-12-15",
  //     tags: ["Distributed Systems", "Architecture"],
  //     notes: "Fundamental concepts of distributed logging.",
  //   },
  //   {
  //     title: "Raft Consensus Algorithm Explained",
  //     source: "Raft Paper Summary",
  //     date: "2023-11-20",
  //     tags: ["Algorithms", "Distributed Systems"],
  //     notes: "Clear explanation of the Raft consensus protocol.",
  //   },
  // ],
  books: [],
  papers: [],
  posts: [],
}

export function ReadingSection() {
  return (
    <section id="reading" className="space-y-8">
      <div className="border-b border-dashed border-zinc-300 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">READING</h2>
        <p className="text-sm text-zinc-600 mt-1">Research papers, books, and articles</p>
      </div>

      <Tabs defaultValue="books" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-zinc-100 border border-zinc-300">
          <TabsTrigger
            value="books"
            className="font-mono text-xs data-[state=active]:bg-yellow-400 data-[state=active]:text-zinc-950"
          >
            BOOKS
          </TabsTrigger>
          <TabsTrigger
            value="papers"
            className="font-mono text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-zinc-50"
          >
            PAPERS
          </TabsTrigger>
          <TabsTrigger
            value="posts"
            className="font-mono text-xs data-[state=active]:bg-red-600 data-[state=active]:text-zinc-50"
          >
            POSTS
          </TabsTrigger>
        </TabsList>

        <TabsContent value="books" className="space-y-4 mt-6">
          {readingData.books.map((book, index) => (
            <div key={index} className="border border-zinc-300 border-l-4 border-l-yellow-400 p-4 bg-white">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-zinc-900">{book.title}</h3>
                  <Badge variant={book.status === "completed" ? "default" : "secondary"} className="text-xs">
                    {book.status}
                  </Badge>
                </div>
                <p className="text-sm text-zinc-600">by {book.author}</p>
                <p className="text-sm text-zinc-700">{book.notes}</p>
                <div className="flex flex-wrap gap-1 pt-2">
                  {book.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="papers" className="space-y-4 mt-6">
          {readingData.papers.map((paper, index) => (
            <div key={index} className="border border-zinc-300 border-l-4 border-l-blue-600 p-4 bg-white">
              <div className="space-y-2">
                <h3 className="font-semibold text-zinc-900">{paper.title}</h3>
                <p className="text-sm text-zinc-600">
                  {paper.authors} — {paper.venue}
                </p>
                <p className="text-sm text-zinc-700">{paper.notes}</p>
                <div className="flex flex-wrap gap-1 pt-2">
                  {paper.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="posts" className="space-y-4 mt-6">
          {readingData.posts.map((post, index) => (
            <div key={index} className="border border-zinc-300 border-l-4 border-l-red-600 p-4 bg-white">
              <div className="space-y-2">
                <h3 className="font-semibold text-zinc-900">{post.title}</h3>
                <p className="text-sm text-zinc-600">
                  {post.source} — {post.date}
                </p>
                <p className="text-sm text-zinc-700">{post.notes}</p>
                <div className="flex flex-wrap gap-1 pt-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  )
}
