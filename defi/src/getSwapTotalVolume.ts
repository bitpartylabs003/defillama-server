import { getSwapTotalVolume } from "./dexAggregators/db/getSwapTotalVolume";
import { wrap, IResponse, successResponse, errorResponse } from "./utils/shared";

const handler = async (): Promise<IResponse> => {
  try {
    const volume = await getSwapTotalVolume();
    return successResponse({ volume }, 10);
  } catch (e) {
    console.log(e);
    return errorResponse({ message: "Something went wrong." });
  }
};

export default wrap(handler);