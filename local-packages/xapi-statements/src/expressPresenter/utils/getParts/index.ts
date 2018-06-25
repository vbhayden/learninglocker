import { Readable as ReadableStream } from 'stream';
import Part from '../../../models/Part';
import getStreamData from './getStreamData';
import getStreamParts from './getStreamParts';
import createPart from './createPart';

export default async (stream: ReadableStream, boundary: string): Promise<Part[]> => {
  const streamData = await getStreamData(stream);
  const streamParts = getStreamParts(streamData, boundary);
  const parts: Part[] = streamParts.map(createPart);
  return parts;
};
