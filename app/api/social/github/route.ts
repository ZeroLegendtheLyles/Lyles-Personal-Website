import { NextResponse } from 'next/server';
import { getGitHubActivity } from '@/lib/services/github';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME;

    if (!username) {
      return NextResponse.json(
        { error: 'GitHub username not configured' },
        { status: 500 }
      );
    }

    const data = await getGitHubActivity(username);

    if (!data) {
      return NextResponse.json(
        { error: 'Failed to fetch GitHub data' },
        { status: 500 }
      );
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error('GitHub API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
