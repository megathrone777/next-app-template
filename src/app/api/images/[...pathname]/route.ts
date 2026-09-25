import { get } from "@vercel/blob";
import { NextResponse } from "next/server";

interface TProps {
  params: Promise<{
    pathname: string[];
  }>;
}

export const GET = async (_: Request, { params }: TProps): Promise<NextResponse> => {
  const { pathname } = await params;
  const blobPath = pathname.join("/");
  const result = await get(blobPath, {
    access: "private",
  });

  if (!result) {
    return new NextResponse("Image not found", {
      status: 404,
    });
  }

  return new NextResponse(result.stream, {
    headers: {
      "Cache-Control": "private, max-age=3600",
      "Content-Type": result.blob.contentType!,
    },
  });
};
