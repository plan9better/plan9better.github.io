import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const commands = [
  // {
  //   command: "docker system prune -a",
  //   description: "Remove all unused containers, networks, images, and build cache",
  //   tags: ["Docker", "Cleanup", "System"],
  // },
  // {
  //   command: "git log --oneline --graph --all",
  //   description: "Display commit history with branch visualization",
  //   tags: ["Git", "History", "Visualization"],
  // },
  // {
  //   command: "find . -name '*.log' -mtime +7 -delete",
  //   description: "Delete log files older than 7 days in current directory",
  //   tags: ["Find", "Cleanup", "Logs"],
  // },
  // {
  //   command: "netstat -tulpn | grep :8080",
  //   description: "Check which process is using port 8080",
  //   tags: ["Network", "Debug", "Ports"],
  // },
  // {
  //   command: "rsync -avz --progress src/ dest/",
  //   description: "Sync directories with progress display and compression",
  //   tags: ["Sync", "Backup", "Transfer"],
  // },
  // {
  //   command: "curl -X POST -H 'Content-Type: application/json' -d '{\"key\":\"value\"}' api/endpoint",
  //   description: "Send JSON POST request to API endpoint",
  //   tags: ["API", "HTTP", "Testing"],
  // },
  // {
  //   command: "ps aux | grep -v grep | grep process_name",
  //   description: "Find running processes by name",
  //   tags: ["Process", "Monitor", "Debug"],
  // },
  // {
  //   command: "tar -czf backup.tar.gz --exclude='*.log' directory/",
  //   description: "Create compressed archive excluding log files",
  //   tags: ["Archive", "Backup", "Compression"],
  // },
  // {
  //   command: "ssh -L 8080:localhost:3000 user@remote",
  //   description: "Create SSH tunnel forwarding local port 8080 to remote port 3000",
  //   tags: ["SSH", "Tunnel", "Network"],
  // },
  // {
  //   command: "awk '{print $1}' file.txt | sort | uniq -c",
  //   description: "Count unique occurrences of first column values",
  //   tags: ["Text", "Analysis", "AWK"],
  // },
]

export function CommandsSection() {
  return (
    <section id="commands" className="space-y-8">
      <div className="border-b border-dashed border-zinc-300 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">COMMANDS</h2>
        <p className="text-sm text-zinc-600 mt-1">System utilities and shell scripts</p>
      </div>

      <div className="border border-zinc-300 bg-white">
        <Table>
          <TableHeader>
            <TableRow className="border-zinc-300">
              <TableHead className="font-mono text-xs font-bold tracking-wide text-zinc-900 bg-zinc-50">
                COMMAND
              </TableHead>
              <TableHead className="font-mono text-xs font-bold tracking-wide text-zinc-900 bg-zinc-50">
                DESCRIPTION
              </TableHead>
              <TableHead className="font-mono text-xs font-bold tracking-wide text-zinc-900 bg-zinc-50">TAGS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {commands.map((cmd, index) => (
              <TableRow key={index} className="border-zinc-300 hover:bg-zinc-50">
                <TableCell className="font-mono text-sm text-zinc-900 max-w-xs">
                  <code className="bg-zinc-100 px-2 py-1 rounded text-xs">{cmd.command}</code>
                </TableCell>
                <TableCell className="text-sm text-zinc-700 max-w-md">{cmd.description}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {cmd.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
