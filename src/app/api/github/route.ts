import { NextResponse } from "next/server";
import { archiveFallback } from "@/data/portfolio";
import { fetchGitHubArchive } from "@/lib/github";

export async function GET() {
  try {
    const projects = await fetchGitHubArchive();
    return NextResponse.json({ projects, fallback: false });
  } catch {
    return NextResponse.json({ projects: archiveFallback, fallback: true });
  }
}
