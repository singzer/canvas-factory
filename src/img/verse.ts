import axios from "axios";

//
interface Origin {
  title: string;
  dynasty: string;
  author: string;
  content: string[];
  translate?: any;
}

interface Data {
  id: string;
  content: string;
  popularity: number;
  origin: Origin;
  matchTags: string[];
  recommendedReason: string;
  cacheAt: Date;
}

export interface VerseResult {
  status: string;
  data: Data;
  token: string;
  ipAddress: string;
  warning?: any;
}

// 每日一诗
export async function getVerse(): Promise<VerseResult> {
  const res = await axios.get("https://v2.jinrishici.com/one.json");
  return res.data;
}
