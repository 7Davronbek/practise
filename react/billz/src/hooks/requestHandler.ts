import {AxiosError, AxiosResponse} from "axios";

type BaseRequest<PARAMETER_TYPE, RETURN_TYPE> = (params?: PARAMETER_TYPE) => Promise<AxiosResponse<RETURN_TYPE>>;

type SuccessResponse<VALUE> = {
    code: "success",
    data: VALUE
};

type ErrorResponse<ERROR = AxiosError> = {
    code: "error",
    error: ERROR
};

type BaseResponse<VALUE, ERROR> = Promise<SuccessResponse<VALUE> | ErrorResponse<ERROR>>;

export const requestHandler =
    <PARAMETER_TYPE, VALUE, ERROR = AxiosError>(request: BaseRequest<PARAMETER_TYPE, VALUE>) =>
        async (params?: PARAMETER_TYPE): BaseResponse<VALUE, ERROR> => {
            try {
                const response = await request(params);
                return {code: "success", data: response.data}
            } catch (e) {
                return {code: "error", error: e as ERROR}
            }
        }