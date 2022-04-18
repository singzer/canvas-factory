import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";

export type Word = {
  word: string;
  content: string;
};

export async function parseCsvFile(): Promise<Word[]> {
  const csvFilePath = path.resolve(
    __dirname,
    "../../assets/2023恋练有词考研英语词汇.csv"
  );

  const headers = ["word", "content"];

  const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf-8" });

  const result: Word[] = await new Promise((resolve, reject) => {
    parse(
      fileContent,
      {
        delimiter: ",",
        columns: headers,
        fromLine: 2,
      },
      (error, result: Word[]) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      } // end of parse
    );
  });

  return result;
}
