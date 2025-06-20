import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();
const MEDIUM_USERNAME = 'aryaMehta26';

export async function GET() {
  try {
    const feed = await parser.parseURL(`https://medium.com/feed/@${MEDIUM_USERNAME}`);
    
    const articles = feed.items.map(item => ({
      title: item.title,
      description: item.contentSnippet || '',
      link: item.link,
      date: new Date(item.pubDate || '').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      tags: item.categories || [],
      featured: true // You can customize this based on your needs
    }));

    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Medium articles' },
      { status: 500 }
    );
  }
} 