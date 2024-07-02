type ParamValue =
  | number
  | boolean
  | string
  | { [key: string]: ParamValue }
  | Array<{ [key: string]: ParamValue }>;

type Param = { [key: string]: ParamValue };

export type Params = Param | Array<Param>;

export class SearchParamsService {
  public searchParams = new URLSearchParams();

  convert(params: Params | undefined) {
    //# If empty
    if (!params) return;

    //# Split between objects and arrays

    //# Objects {key: value}
    if (typeof params === 'object' && !Array.isArray(params)) {
      Object.keys(params).forEach((key) => {
        const paramValue = params[key];
        if (
          typeof paramValue === 'boolean' ||
          typeof paramValue === 'number' ||
          typeof paramValue === 'string'
        ) {
          this.searchParams.append(key, String(paramValue));
        } else {
          this.convert(paramValue);
        }
      });
    } else {
      //# Arrays [{key: value}, {key: value}]
      params.forEach((param) => {
        this.convert(param as Params);
      });
    }
  }
}
