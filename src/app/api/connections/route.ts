import { NextResponse } from 'next/server';
import { Client, PageObjectResponse } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY || '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' });
const databaseId = process.env.NOTION_CONNECTIONS_DB_ID || '216e81ecce38802291ffecacb85867db';

export async function GET() {
  const response = await notion.databases.query({ database_id: databaseId });
  const firstPage = response.results[0] as PageObjectResponse | undefined;
  if (firstPage && 'properties' in firstPage) {
    console.log('Notion property keys:', Object.keys(firstPage.properties));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const connections = response.results.map((page: any) => ({
    name: page.properties.Name.title[0]?.plain_text || '',
    company: page.properties.Company?.rich_text[0]?.plain_text || '',
    profileUrl: page.properties['Profile URL']?.url || '',
    status: page.properties.Status?.select?.name || '',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    title: page.properties.Title?.rich_text[0]?.plain_text || '',
  }));
  return NextResponse.json({ connections });
}

export async function POST() {
  // ... existing code ...
} 