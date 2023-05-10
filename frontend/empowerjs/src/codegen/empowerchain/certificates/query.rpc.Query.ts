import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCertificateRequest, QueryCertificateResponse, QueryCertificatesRequest, QueryCertificatesResponse, QueryAllCertificatesByUserRequest, QueryAllCertificatesByUserResponse } from "./query";
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  certificate(request: QueryCertificateRequest): Promise<QueryCertificateResponse>;
  certificates(request?: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
  allCertificatesByUser(request: QueryAllCertificatesByUserRequest): Promise<QueryAllCertificatesByUserResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.certificate = this.certificate.bind(this);
    this.certificates = this.certificates.bind(this);
    this.allCertificatesByUser = this.allCertificatesByUser.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  certificate(request: QueryCertificateRequest): Promise<QueryCertificateResponse> {
    const data = QueryCertificateRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Query", "Certificate", data);
    return promise.then(data => QueryCertificateResponse.decode(new _m0.Reader(data)));
  }
  certificates(request: QueryCertificatesRequest = {
    pagination: undefined
  }): Promise<QueryCertificatesResponse> {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Query", "Certificates", data);
    return promise.then(data => QueryCertificatesResponse.decode(new _m0.Reader(data)));
  }
  allCertificatesByUser(request: QueryAllCertificatesByUserRequest): Promise<QueryAllCertificatesByUserResponse> {
    const data = QueryAllCertificatesByUserRequest.encode(request).finish();
    const promise = this.rpc.request("empowerchain.certificates.Query", "AllCertificatesByUser", data);
    return promise.then(data => QueryAllCertificatesByUserResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    certificate(request: QueryCertificateRequest): Promise<QueryCertificateResponse> {
      return queryService.certificate(request);
    },
    certificates(request?: QueryCertificatesRequest): Promise<QueryCertificatesResponse> {
      return queryService.certificates(request);
    },
    allCertificatesByUser(request: QueryAllCertificatesByUserRequest): Promise<QueryAllCertificatesByUserResponse> {
      return queryService.allCertificatesByUser(request);
    }
  };
};