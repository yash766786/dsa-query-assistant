// // utils/asyncHandler.ts

// import { NextResponse } from "next/server";
// import { ApiError } from "./ApiError";

// type AsyncHandler = (req: Request) => Promise<Response>;

// export const asyncHandler = (fn: AsyncHandler): AsyncHandler => {
//   return async (req: Request): Promise<Response> => {
//     try {
//       return await fn(req);
//     } catch (error: unknown) {
//       console.error("❌ Error caught by asyncHandler:", error);

//       const apiError =
//         error instanceof ApiError
//           ? error
//           : new ApiError(500, error?.message || "Internal Server Error");

//       return NextResponse.json(
//         {
//           success: false,
//           message: apiError.message,
//           errors: apiError.errors || [],
//         },
//         { status: apiError.statusCode }
//       );
//     }
//   };
// };
// utils/asyncHandler.ts
import { NextResponse } from "next/server";
import { ApiError } from "./ApiError";

type AsyncHandler = (req: Request) => Promise<Response>;

export const asyncHandler = (fn: AsyncHandler): AsyncHandler => {
  return async (req: Request): Promise<Response> => {
    try {
      return await fn(req);
    } catch (error: unknown) {
      console.error("❌ Error caught by asyncHandler:", error);

      let message = "Internal Server Error";

      if (error instanceof Error) {
        message = error.message;
      }

      const apiError =
        error instanceof ApiError
          ? error
          : new ApiError(500, message);

      return NextResponse.json(
        {
          success: false,
          message: apiError.message,
          errors: apiError.errors || [],
        },
        { status: apiError.statusCode }
      );
    }
  };
};
