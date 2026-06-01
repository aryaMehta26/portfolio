export type GitHubArchiveProject = {
  name: string;
  description: string;
  url: string;
  language: string;
  topic: string;
  updatedAt?: string;
  stars?: number;
};

const USERNAMES = ['aryaMehta26', 'Gangster26'];

function inferTopic(repo: { name: string; description: string; language: string }) {
  const haystack = `${repo.name} ${repo.description}`.toLowerCase();

  if (haystack.includes('rag') || haystack.includes('llm') || haystack.includes('inference')) {
    return 'Applied AI';
  }
  if (haystack.includes('spark') || haystack.includes('airflow') || haystack.includes('data')) {
    return 'Data Platform';
  }
  if (haystack.includes('sim') || haystack.includes('vision') || haystack.includes('synthetic')) {
    return 'ML / Research';
  }
  if (haystack.includes('next') || haystack.includes('app') || haystack.includes('os')) {
    return 'Product';
  }
  if (repo.language === 'Python') {
    return 'Backend / Data';
  }
  if (repo.language === 'TypeScript' || repo.language === 'JavaScript') {
    return 'Product';
  }
  return 'Systems';
}

export async function fetchGitHubArchive(): Promise<GitHubArchiveProject[]> {
  const responses = await Promise.all(
    USERNAMES.map(async (username) => {
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        headers: {
          Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 3600 },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch repos for ${username}`);
      }

      return response.json();
    })
  );

  const merged = responses.flat() as Array<{
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    archived: boolean;
    fork: boolean;
    stargazers_count: number;
    updated_at: string;
  }>;

  return merged
    .filter((repo) => !repo.archived && !repo.fork)
    .map((repo) => ({
      name: repo.name,
      description: repo.description ?? 'Project archive entry from GitHub.',
      url: repo.html_url,
      language: repo.language ?? 'Mixed',
      topic: inferTopic({
        name: repo.name,
        description: repo.description ?? '',
        language: repo.language ?? 'Mixed',
      }),
      updatedAt: repo.updated_at,
      stars: repo.stargazers_count,
    }))
    .sort((a, b) => {
      const aTime = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
      const bTime = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
      return bTime - aTime;
    });
}
